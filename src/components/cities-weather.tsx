

export default function CitiesWeather() {
  const cities = [
    {
      name: 'Berlin',
      country: 'Germany',
      max: 25,
      min: 15,
    },
    {
      name: 'Paris',
      country: 'France',
      max: 25,
      min: 15,
    },
    {
      name: 'London',
      country: 'United Kingdom',
      max: 25,
      min: 15,
    },
    {
      name: 'New York',
      country: 'United States',
      max: 25,
      min: 15,
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      max: 25,
      min: 15,
    },
    {
      name: 'Sydney',
      country: 'Australia',
      max: 25,
      min: 15,
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      max: 25,
      min: 15,
    },
    {
      name: 'Rio de Janeiro',
      country: 'Brazil',
      max: 25,
      min: 15,
    },
    {
      name: 'Moscow',
      country: 'Russia',
      max: 25,
      min: 15,
    },
    {
      name: 'Mumbai',
      country: 'India',
      max: 25,
      min: 15,
    },
    {
      name: 'Beijing',
      country: 'China',
      max: 25,
      min: 15,
    },
    {
      name: 'Cairo',
      country: 'Egypt',
      max: 25,
      min: 15,
    }
  ]

  return (
    <div className="flex px-7 pt-10 pb-2 overflow-scroll gap-5">
      <div className="flex flex-col h-40 min-w-40 text-center items-center justify-center border-2 border-dashed rounded-[15px] border-white/40 text-[#FFFFFF]">
        <div className="bg-[#34376d] rounded-full border border-[#42434e] text-[#FFFFFF] p-2 mt-[-3rem]">
          <img className="w-11" src="./line/animation-ready/partly-cloudy-day-drizzle.svg" alt="" />
        </div>
        <h1 className="font-bold text-[12pt] w-32 mt-2 text-center">World Forecast</h1>
        <span className="font-bold text-[9pt] mt-8 w-28">Add the cities you are interested in</span>
      </div>
      {
        cities.map((city, i) => (
          <div key={i} className="flex flex-col h-40 min-w-40 cursor-pointer items-center justify-center bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]">
            <div className="bg-[#34376d] rounded-full border border-[#42434e] text-[#FFFFFF] p-2 mt-[-3.5rem]">
              <img className="w-11" src="./line/animation-ready/partly-cloudy-day-drizzle.svg" alt="" />
            </div>
            <h1 className="font-bold text-[14pt]">{city.name}</h1>
            <span className="font-bold text-[9pt]">{city.country}</span>
            <span className="font-bold text-[16pt] mt-5">{city.max}°
              <span className="font-bold text-[10pt]"> /{city.min}°</span>
            </span>
          </div>
        ))
      }
    </div>
  )
}