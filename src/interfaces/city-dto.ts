import { WeatherData } from "./weather-data";

export interface CityDTO {
  id: string;
  lat: number;
  lon: number;
  name: string;
  country: string;
  userId: string;
  weather: WeatherData;
}