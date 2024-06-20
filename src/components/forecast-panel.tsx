import { useEffect, useState } from "react";

export default function ForecastPanel() {
  const [forecast, setForecast] = useState(3);

  function handleForecast() {
    return setForecast(forecast === 3 ? 7 : 3);
  }

  function setSwitchStyle(forecastOption: number) {
    if (forecastOption === 7) {
      return forecast === 7 ? 'flex bg-[#34376d] rounded-[15px] w-20 h-10 items-center justify-center mr-1 text-white border rounded-[25px] border-[#42434e]' : 'mx-3';
    } else return forecast === 3 ? 'flex bg-[#34376d] rounded-[15px] w-20 h-10 items-center justify-center ml-1 text-white border rounded-[25px] border-[#42434e]' : 'mx-3';
  }

  const forecastData = [
    {
      icon: './line/animation-ready/clear-night.svg',
      temperature: 22,
      date: '17 Jul, Tue',
      min: 11
    },
    {
      icon: './line/animation-ready/cloudy.svg',
      temperature: 22,
      date: '18 Jul, Wed',
      min: 11
    },
    {
      icon: './line/animation-ready/partly-cloudy-night.svg',
      temperature: 22,
      date: '19 Jul, Thu',
      min: 11
    },
    {
      icon: './line/animation-ready/rain.svg',
      temperature: 22,
      date: '20 Jul, Fri',
      min: 11
    },
    {
      icon: './line/animation-ready/snow.svg',
      temperature: 22,
      date: '21 Jul, Sat',
      min: 11
    },
    {
      icon: './line/animation-ready/thunderstorm.svg',
      temperature: 22,
      date: '22 Jul, Sun',
      min: 11
    },
    {
      icon: './line/animation-ready/wind.svg',
      temperature: 22,
      date: '23 Jul, Mon',
      min: 11
    },
    {
      icon: './line/animation-ready/clear-night.svg',
      temperature: 22,
      date: '24 Jul, Tue',
      min: 11
    },
    {
      icon: './line/animation-ready/cloudy.svg',
      temperature: 22,
      date: '25 Jul, Wed',
      min: 11
    },
    {
      icon: './line/animation-ready/partly-cloudy-night.svg',
      temperature: 22,
      date: '26 Jul, Thu',
      min: 11
    },
  ]

  return (
    <div className="flex flex-col h-80 min-w-80 p-5 bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]">
      <div className="flex justify-between">
        <h1 className="font-bold text-[24pt]">Forecast</h1>
        <div
          className="flex cursor-pointer items-center justify-center h-12 bg-[#1E1F24] border rounded-[25px] border-[#42434e] text-[#FFFFFF]"
          onClick={handleForecast}
        >
          <div className="flex justify-between items-center">
            <span className={setSwitchStyle(3)}>
              3 days
            </span>
            <span className={setSwitchStyle(7)}>
              7 days
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 gap-2 overflow-scroll">
        {
          forecastData.slice(0, forecast).map((data, i) => (
            <div key={i} className="flex justify-between items-center p-2 px-10 bg-[#34376d] rounded-[1.2rem]">
              <div className="flex items-center">
                <img src={data.icon} alt="sun" className="w-12" />
                <span className="font-bold text-[20pt] ml-5">{data.temperature}°
                  <span className="font-bold text-[10pt]"> /{data.min}°</span>
                </span>
              </div>
              <h1 className="font-bold text-[20pt]">{data.date.slice(0, 2)}
                <span className="font-bold text-[10pt] ml-2">{data.date.slice(2, data.date.length)}</span>
              </h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}