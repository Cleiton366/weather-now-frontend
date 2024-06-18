'use client'
import CitiesWeather from "@/components/cities-weather";
import ForecastPanel from "@/components/forecast-panel";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import OverviewPanel from "@/components/overview-panel";
import WeatherPanel from "@/components/weather-panel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full px-5 pt-3">
        <div className="grid flex-grow p-2 gap-5 max-w-6xl">
          <WeatherPanel />
          <OverviewPanel />
        </div>
        <div className="grid flex-grow p-2 gap-5 md:min-w-[24rem]">
          <Map />
          <ForecastPanel />
        </div>
      </div>
      <CitiesWeather />
    </main>
  );
}
