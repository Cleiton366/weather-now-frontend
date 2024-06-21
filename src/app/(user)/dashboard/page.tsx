'use client'
import CitiesWeather from "@/components/cities-weather";
import ForecastPanel from "@/components/forecast-panel";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import OverviewPanel from "@/components/overview-panel";
import WeatherPanel from "@/components/weather-panel";
import User from "@/interfaces/user";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export default function Dashboard() {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user) {
      toast({
        title: 'Failed to Login',
        description: 'An error occurred while trying to login. Please try again.',
        duration: 5000,
        className: 'bg-[#1E1F24] text-white'
      });
      router.push('/')
    };
    setUser(user);
  });

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
