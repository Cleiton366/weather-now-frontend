
export default function WeatherPanel() {
  const data = {
    city: 'Berlin',
    country: 'Germany',
    temperature: 25,
    weather: 'Cloudy',
    humidity: 80,
    wind: 5,
    icon: './fill/animation-ready/partly-cloudy-day-drizzle.svg',
    forecast: [
      {
        hour: '7 am',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '10 am',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '1 pm',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '4 pm',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '7 pm',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '10 pm',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '7 am',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '10 am',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '1 pm',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '4 pm',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '7 pm',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      },
      {
        hour: '10 pm',
        temperature: 25,
        icon: './line/animation-ready/partly-cloudy-day-drizzle.svg'
      }
    ]
  }

  return (
    <div className="h-64 min-w-44 px-5 bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]">
      <div className="flex">
        <img className="w-32" src={data.icon} alt="" />
        <div className="flex flex-grow items-center md:justify-evenly">
          <div className="flex flex-col flex-grow md:flex-row md:justify-around">
            <div>
              <h1 className="font-bold text-[18pt] md:text-[28pt] overflow-hidden ">{data.city}</h1>
              <p className="font-bold text-[9pt] md:text-[11pt] overflow-hidden">{data.country}</p>
            </div>
            <div>
              <h1 className="font-bold text-[18pt] md:text-[28pt]">{data.temperature}°</h1>
              <p className="font-bold text-[9pt] md:text-[11pt]">Temperature</p>
            </div>
          </div>
          <div className="flex flex-col flex-grow md:flex-row md:justify-around">
            <div>
              <h1 className="font-bold text-[18pt] md:text-[28pt]">{data.humidity}
                <span className="font-bold text-[11pt]">%</span>
              </h1>
              <p className="font-bold text-[9pt] md:text-[11pt]">Humidity</p>
            </div>
            <div>
              <h1 className="font-bold text-[18pt] md:text-[28pt]">{data.wind}
                <span className="font-bold text-[11pt]">km/h</span>
              </h1>
              <p className="font-bold text-[9pt] md:text-[11pt]">Wind</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-6xl gap-2 overflow-scroll">
        {
          data.forecast.map((forecast, i) => (
            <div key={i} className="min-w-20 h-28 p-2 flex flex-col items-center bg-[#1E1F24] rounded-[15px] ">
              <p className="text-white text-bold">{forecast.hour}</p>
              <img className="w-12" src={forecast.icon} alt="" />
              <p className="text-white text-bold">{forecast.temperature}°</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}