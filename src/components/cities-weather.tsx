import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CityDTO } from "@/interfaces/city-dto";
import Autoplay from "embla-carousel-autoplay"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function CitiesWeather(props: { cities: CityDTO[] | [], setSelectedCity: Dispatch<SetStateAction<CityDTO | null | undefined>> }) {
  const [citiesMatrix, setCitiesMatrix] = useState<CityDTO[][]>([[]]);
  const { cities, setSelectedCity } = props;

  useEffect(() => {
    setCitiesMatrix(divideArrayToMatrix(cities || []));
  }, [cities]);

  function divideArrayToMatrix(cities: CityDTO[], partSize = 9, padValue = null) {
    const matrix = [];
    for (let i = 0; i < cities.length; i += partSize) {
      const part = cities.slice(i, i + partSize);
      if (part.length < partSize) {
        part.push(...Array(partSize - part.length).fill(padValue));
      }
      matrix.push(part);
    }
    return matrix;
  }

  return (
    <div className="w-full px-6 md:px-20">
      <Carousel
        className="h-0 w-0 md:h-full md:w-full"
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}>
        <CarouselContent>
          {
            citiesMatrix.map((citiesRow, i) => (
              <CarouselItem key={i}>
                  <div className="flex px-7 pt-10 overflow-hidden pb-2 gap-3">
                    <div className="flex flex-col h-40 min-w-40 text-center items-center justify-center border-2 border-dashed rounded-[15px] border-white/40 text-[#FFFFFF]">
                      <div className="bg-[#34376d] rounded-full border border-[#42434e] text-[#FFFFFF] p-2 mt-[-3rem]">
                        <img className="w-11" src='./line/animation-ready/falling-stars.svg' alt="" />
                      </div>
                      <h1 className="font-bold text-[12pt] w-32 mt-2 text-center">World Forecast</h1>
                      <span className="font-bold text-[9pt] mt-8 w-28">Add the cities you are interested in</span>
                    </div>
                    {
                      citiesRow.map((city, k) => (
                        city ? (
                          <div
                            key={k}
                            onClick={() => setSelectedCity(city)}
                            className="flex flex-col h-40 min-w-40 cursor-pointer items-center justify-center bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]">
                            <div className="bg-[#34376d] rounded-full border border-[#42434e] text-[#FFFFFF] p-2 mt-[-3.5rem]">
                              <img className="w-11" src={`./line/animation-ready/${city.weather.current.weather[0].icon}.svg`} alt="" />
                            </div>
                            <h1 className="font-bold text-[14pt]">{city.name}</h1>
                            <span className="font-bold text-[9pt]">{city.country}</span>
                            <span className="font-bold text-[16pt] mt-5">{city.weather.current.temp.toFixed(0)}°
                              <span className="font-bold text-[10pt]"> /{city.weather.daily[0].temp.min.toFixed(0)}°</span>
                            </span>
                          </div>
                        ) :
                          (<div key={k} />)
                      ))
                    }
                  </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="h-0 w-0 md:h-fit md:w-fit" />
        <CarouselNext className="h-0 w-0 md:h-fit md:w-fit" />
      </Carousel>

      <div className="h-full w-full md:hidden">
        <ScrollArea className="h-full w-full">
          <div className="flex pt-10 pb-2 gap-3">
            <div className="flex flex-col h-40 min-w-40 text-center items-center justify-center border-2 border-dashed rounded-[15px] border-white/40 text-[#FFFFFF]">
              <div className="bg-[#34376d] rounded-full border border-[#42434e] text-[#FFFFFF] p-2 mt-[-3rem]">
                <img className="w-11" src='./line/animation-ready/falling-stars.svg' alt="" />
              </div>
              <h1 className="font-bold text-[12pt] w-32 mt-2 text-center">World Forecast</h1>
              <span className="font-bold text-[9pt] mt-8 w-28">Add the cities you are interested in</span>
            </div>
            {
              cities.map((city, k) => (
                <div
                  key={k}
                  onClick={() => setSelectedCity(city)}
                  className="flex flex-col h-40 min-w-40 cursor-pointer items-center justify-center bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]">
                  <div className="bg-[#34376d] rounded-full border border-[#42434e] text-[#FFFFFF] p-2 mt-[-3.5rem]">
                    <img className="w-11" src={`./line/animation-ready/${city.weather.current.weather[0].icon}.svg`} alt="" />
                  </div>
                  <h1 className="font-bold text-[14pt]">{city.name}</h1>
                  <span className="font-bold text-[9pt]">{city.country}</span>
                  <span className="font-bold text-[16pt] mt-5">{city.weather.current.temp.toFixed(0)}°
                    <span className="font-bold text-[10pt]"> /{city.weather.daily[0].temp.min.toFixed(0)}°</span>
                  </span>
                </div>
              ))
            }
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}