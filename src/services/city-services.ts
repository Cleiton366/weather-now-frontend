import City from "@/interfaces/city";
import { CityDTO } from "@/interfaces/city-dto";


export class CityServices {

  async getCities(id : string) : Promise<City[] | null> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/city/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data : City[] = await res.json();
    return data ? data : null;
  }
  
  async getCitiesWeather(cities : City[] | null) : Promise<CityDTO[] | []> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/city/weather`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cities }),
    });
    const data : CityDTO[] = await res.json();
    return data ? data : [];
  }

  async addCity(city : City) : Promise<City | null>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/city`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(city),
    });
    const data : City = await res.json();
    return data ? data : null;
  }

  async deleteCity(id : string) : Promise<void>{
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/city/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}