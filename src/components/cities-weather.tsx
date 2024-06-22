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

export default function CitiesWeather(props: { cities: CityDTO[] | [], setSelectedCity: Dispatch<SetStateAction<CityDTO | null | undefined>>}) {
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
    <div className="w-full px-20">
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}>
        <CarouselContent>
          {
            citiesMatrix.map((citiesRow, i) => (
              <CarouselItem key={i}>
                <div className="flex px-7 pt-10 pb-2 overflow-scroll gap-3">
                  <div className="flex flex-col h-40 min-w-40 text-center items-center justify-center border-2 border-dashed rounded-[15px] border-white/40 text-[#FFFFFF]">
                    <div className="bg-[#34376d] rounded-full border border-[#42434e] text-[#FFFFFF] p-2 mt-[-3rem]">
                      <img className="w-11" src="./line/animation-ready/partly-cloudy-day-drizzle.svg" alt="" />
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
                            <img className="w-11" src="./line/animation-ready/partly-cloudy-day-drizzle.svg" alt="" />
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}