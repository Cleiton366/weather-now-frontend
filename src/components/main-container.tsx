import CitiesWeather from "./cities-weather";
import ForecastPanel from "./forecast-panel";
import Navbar from "./navbar";
import OverviewPanel from "./overview-panel";
import WeatherPanel from "./weather-panel";
import Map from "./map";
import { useUser } from "@/contexts/user-context";
import { useEffect, useState } from "react";
import { CityDTO } from "@/interfaces/city-dto";
import { CityServices } from "@/services/city-services";

export default function MainContainer() {
  const { user } = useUser();
  const [cities, setCities] = useState<CityDTO[] | []>();
  const [selectedCity, setSelectedCity] = useState<CityDTO | null>();
  const [userUnit, setUserUnit] = useState<string>();
  const cityServices = new CityServices();

  useEffect(() => {
    if (user && !cities) {      
      handleGetCitiesWeather();
      setUserUnit(user.unit);
    }
  }, [user]);

  useEffect(() => {
    if (userUnit) {
      handleGetCitiesWeather();
    }
  }, [userUnit]);

  const handleGetCitiesWeather = async () => {
    if (user) {
      const citiesInfo = await cityServices.getCities(user.id);
      const cities = await cityServices.getCitiesWeather(citiesInfo || []);
      setCities(cities || []);
      setSelectedCity(cities[0]);
    }
  };

  return (
    cities && selectedCity &&
    <main className="flex min-h-screen flex-col">
      <Navbar cities={cities || []} setCities={setCities} userUnit={userUnit || null} setUserUnit={setUserUnit} />
      <div className="flex flex-col lg:flex-row w-full px-5 pt-3">
        <div className="grid flex-grow p-2 gap-5 max-w-6xl">
          <WeatherPanel selectedCity={selectedCity || null} />
          <OverviewPanel selectedCity={selectedCity || null} />
        </div>
        <div className="grid flex-grow p-2 gap-5 md:min-w-[24rem]">
          <Map selectedCity={selectedCity || null} />
          <ForecastPanel selectedCity={selectedCity || null} />
        </div>
      </div>
      <CitiesWeather cities={cities || []} setSelectedCity={setSelectedCity}/>
    </main>
  )
}