import { CityDTO } from "@/interfaces/city-dto";
import GetNextEightDays from "@/util/get-next-eight-days";
import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

export default function ForecastPanel(props: { selectedCity: CityDTO | null }) {
  const [forecast, setForecast] = useState(3);
  const forecastDays = GetNextEightDays({
    day: 'numeric',
    month: 'short',
    weekday: 'short'
  });
  const { selectedCity } = props;

  function handleForecast() {
    return setForecast(forecast === 3 ? 8 : 3);
  }

  function setSwitchStyle(forecastOption: number) {
    if (forecastOption === 8) {
      return forecast === 8 ? 'flex bg-[#34376d] rounded-[15px] w-20 h-10 items-center justify-center mr-1 text-white md:text-[12pt] border rounded-[25px] border-[#42434e]' : 'md:text-[12pt] mx-3';
    } else return forecast === 3 ? 'flex bg-[#34376d] rounded-[15px] w-20 h-10 items-center justify-center ml-1 text-white md:text-[12pt] border rounded-[25px] border-[#42434e]' : 'md:text-[12pt] mx-3';
  }

  return (
    <div className="flex flex-col h-80 min-w-80 p-5 bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <h1 className="font-bold text-[24pt]">Forecast</h1>
        <div
          className="flex cursor-pointer items-center justify-center h-12 bg-[#1E1F24] border rounded-[25px] border-[#42434e] text-[#FFFFFF]"
          onClick={handleForecast}
        >
          <div className="flex justify-between items-center">
            <span className={`${setSwitchStyle(3)} text-[10pt]`}>
              3 days
            </span>
            <span className={`${setSwitchStyle(8)} text-[10pt]`}>
              8 days
            </span>
          </div>
        </div>
      </div>
      <ScrollArea className="h-full w-full">
        <div className="flex flex-col mt-5 gap-2 overflow-scroll">
          {
            selectedCity?.weather.daily.slice(0, forecast).map((weather, i) => (
              <div key={i} className="flex justify-between items-center md:p-2 px-2 md:px-10 bg-[#34376d] rounded-[1.2rem]">
                <div className="flex items-center">
                  <img src={`./line/animation-ready/${weather.weather[0].icon}.svg`} alt="sun" className="w-12" />
                  <span className="font-bold text-[14pt] md:text-[20pt] ml-5">{weather.temp.day.toFixed(0)}°
                    <span className="font-bold text-[8pt] md:text-[10pt]"> /{weather.temp.min.toFixed(0)}°</span>
                  </span>
                </div>
                <h1 className="font-bold text-[14pt] md:text-[20pt]">{forecastDays[i].slice(0, 3)}
                  <span className="font-bold text-[8pt] md:text-[10pt] ml-2">{forecastDays[i].slice(3, forecastDays[i].length)}</span>
                </h1>
              </div>
            ))
          }
        </div>
      </ScrollArea>
    </div>
  )
}