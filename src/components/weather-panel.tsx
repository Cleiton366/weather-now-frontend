import { CityDTO } from "@/interfaces/city-dto"
import TimestampUnixToString from "@/util/timestamp-unix-to-string";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function WeatherPanel(props: { selectedCity: CityDTO | null }) {
  const { selectedCity } = props;

  return (
    <div className="h-64 min-w-44 px-5 bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]">
      <div className="flex py-3 md:p-0">
        <img className="w-24 md:w-32" src={`./fill/animation-ready/${selectedCity?.weather.current.weather[0].icon}.svg`} alt="" />
        <div className="flex flex-grow items-center md:justify-evenly">
          <div className="flex flex-col flex-grow md:flex-row md:justify-around">
            <div>
              <h1 className="font-bold text-[18pt] md:text-[28pt] overflow-hidden ">{selectedCity?.name}</h1>
              <p className="font-bold text-[9pt] md:text-[11pt] overflow-hidden">{selectedCity?.country}</p>
            </div>
            <div>
              <h1 className="font-bold text-[18pt] md:text-[28pt]">{selectedCity?.weather.current.temp.toFixed(0)}°</h1>
              <p className="font-bold text-[9pt] md:text-[11pt]">Temperature</p>
            </div>
          </div>
          <div className="flex flex-col flex-grow md:flex-row md:justify-around">
            <div>
              <h1 className="font-bold text-[18pt] md:text-[28pt]">{selectedCity?.weather.current.humidity.toFixed(0)}
                <span className="font-bold text-[11pt]">%</span>
              </h1>
              <p className="font-bold text-[9pt] md:text-[11pt]">Humidity</p>
            </div>
            <div>
              <h1 className="font-bold text-[18pt] md:text-[28pt]">{selectedCity?.weather.current.wind_speed.toFixed(0)}
                <span className="font-bold text-[11pt]">km/h</span>
              </h1>
              <p className="font-bold text-[9pt] md:text-[11pt]">Wind</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollArea className="max-w-6xl">
        <div className="flex gap-2">
        {
          selectedCity?.weather.hourly.slice(0, 12).map((forecast, i) => (
            <div key={i} className="min-w-20 h-28 p-2 flex flex-col items-center bg-[#34376d] rounded-[15px] ">
              <p className="text-white text-bold">{TimestampUnixToString(forecast.dt)}</p>
              <img className="w-12" src={`./fill/animation-ready/${forecast.weather[0].icon}.svg`} alt="" />
              <p className="text-white text-bold">{forecast.temp.toFixed(0)}°</p>
            </div>
          ))
        }
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}