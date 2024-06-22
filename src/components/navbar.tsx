import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "./ui/input";
import Settings from "./settings";
import { useUser } from "@/contexts/user-context";
import { CityServices } from "@/services/city-services";
import City from "@/interfaces/city";
import { toast } from "./ui/use-toast";
import { CityDTO } from "@/interfaces/city-dto";

export default function Navbar(props: { cities: CityDTO[] | [], setCities: Dispatch<SetStateAction<[] | CityDTO[] | undefined>> }) {
  const cities = props.cities;
  const [unit, setUnit] = useState('C°');
  const { user } = useUser();
  const cityServices = new CityServices();

  function handleUnitSystem() {
    setUnit(unit === 'C°' ? 'F°' : 'C°');
  }

  const handleAddCity = async (city: string) => {
    try {
      const data: City = {
        name: city,
        userId: user?.id || ''
      };
      const newCity = await cityServices.addCity(data);
      if (newCity) {
        const cityData = await cityServices.getCitiesWeather([newCity]);
        const newCities: CityDTO[] = cities || [];

        newCities.push(cityData[0]);
        props.setCities(newCities);

        toast({
          title: 'Success',
          description: 'City added successfully',
          duration: 5000,
          className: 'bg-[#1E1F24] text-white'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while trying to add city',
        duration: 5000,
        className: 'bg-[#1E1F24] text-white'
      });
    }
  };

  const handleKeyUp = async (event: any) => {
    if (event.keyCode === 13) {
      await handleAddCity(event.target.value);
      event.target.value = '';
    }
  };

  function setSwitchStyle(temmperatureUnit: string) {
    if (temmperatureUnit === 'F') {
      return unit === 'F°' ? 'bg-[#34376d] rounded-[15px] w-10 text-center text-white mr-1 border border-[#42434e]' : 'mx-3';
    } else return unit === 'C°' ? 'bg-[#34376d] rounded-[15px] w-10 text-center text-white ml-1 border border-[#42434e]' : 'mx-3';
  }

  return (
    <div className="flex flex-col md:flex-row pt-5 px-10">
      <div className="flex justify-center md:justify-start">
        <Settings cities={cities || []} setCities={props.setCities} />
        <div className="ml-5">
          <p className="font-bold text-[10pt]">Hi, {user?.name}</p>
          <h1 className="font-bold text-[16pt]">{new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</h1>
        </div>
      </div>
      <div className="flex justify-center mt-2 md:flex-grow md:justify-end items-center gap-4">
        <Input onKeyUp={handleKeyUp} className="h-8 w-72 bg-[#2E2E38] rounded-[15px] border-[#42434e] text-[#FFFFFF]" type="text" placeholder="Search a City" />
        <div
          className="flex cursor-pointer items-center justify-center h-8 bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]"
          onClick={handleUnitSystem}
        >
          <div className="flex justify-between">
            <span className={setSwitchStyle('C')}>
              C°
            </span>
            <span className={setSwitchStyle('F')}>
              F°
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}