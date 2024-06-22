import { CityDTO } from '@/interfaces/city-dto';
import GetNextEightDays from '@/util/get-next-eight-days';
import { LineChart } from '@tremor/react';
import { useState } from "react";

export default function OverviewPanel(props: { selectedCity: CityDTO | null }) {
  const { selectedCity } = props;
  const forecastDays = GetNextEightDays({ day: 'numeric', month: 'short' });
  const weatherData: object[] | (() => object[]) = [];
  const humidityData: object[] | (() => object[]) = [];
  const pressureData: object[] | (() => object[]) = [];
  const [overview, setOverview] = useState({
    name: 'temperature',
    scale: '°',
  });
  const [chartData, setChartData] = useState<object[]>(weatherData);

  selectedCity?.weather.daily.map((weather, i) => {
    weatherData.push({
      date: forecastDays[i],
      temperature: weather.temp.day,
    });
    humidityData.push({
      date: forecastDays[i],
      humidity: weather.humidity,
    });
    pressureData.push({
      date: forecastDays[i],      
      pressure: weather.pressure,
    });
  });

  const customTooltip = (props: any) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-[#1E1F24] p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category: any, idx: any) => (
          <div key={idx} className="flex flex-1 space-x-2.5 bg-[#1E1F24]">
            <div className={`flex w-1 flex-col bg-[#34376D]`} />
            <div className="space-y-1">
              <p className="text-white">{category.dataKey}</p>
              <p className="font-medium text-white">{category.value}{overview.scale}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  function setSwitchStyle(overviewType: string) {
    return overview.name === overviewType ? 'flex bg-[#34376d] rounded-[15px] w-20 h-10 items-center justify-center mx-1 text-white md:text-[12pt] border rounded-[25px] border-[#42434e]'
      : 'md:text-[12pt] mx-3';
  }

  const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('us').format(number).toString()}${overview.scale}`;

  return (
    <div className="md:h-80 min-w-44 p-5 bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]]">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <h1 className="font-bold text-[24pt]">Overview</h1>
        <div
          className="flex cursor-pointer items-center justify-center h-12 w-fit bg-[#1E1F24] border rounded-[25px] border-[#42434e] text-[#FFFFFF]"
        >
          <div className="flex justify-between items-center">
            <span className={`${setSwitchStyle('temperature')} text-[10pt]`} onClick={() => {
              setOverview({
                name: 'temperature',
                scale: '°',
              })
              setChartData(weatherData)
            }}>
              Weather
            </span>
            <span className={`${setSwitchStyle('humidity')} text-[10pt]`} onClick={() => {
              setOverview({
                name: 'humidity',
                scale: '%',
              })
              setChartData(humidityData)
            }}>
              Humidity
            </span>
            <span className={`${setSwitchStyle('pressure')} text-[10pt] justify-self-end`} onClick={() => {
              setOverview({
                name: 'pressure',
                scale: 'hPa',
              })
              setChartData(pressureData)
            }}>
              Pressure
            </span>
          </div>
        </div>
      </div>
      <div className="h-80 md:h-full w-full text-white">
        <LineChart
          className="h-full px-5 pb-10 fill-tremor-brand-faint"
          data={chartData}
          index="date"
          colors={['blue']}
          yAxisWidth={60}
          categories={[overview.name]}
          customTooltip={customTooltip}
          valueFormatter={dataFormatter}
        />
      </div>
    </div>
  )
}