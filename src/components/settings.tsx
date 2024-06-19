import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Settings() {

  const cities = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
    },
    {
      id: 2,
      name: 'London',
      country: 'United Kingdom',
    },
    {
      id: 3,
      name: 'New York',
      country: 'United States',
    },
    {
      id: 4,
      name: 'Tokyo',
      country: 'Japan',
    },
    {
      id: 5,
      name: 'Sydney',
      country: 'Australia',
    },
    {
      id: 6,
      name: 'Cape Town',
      country: 'South'
    },
    {
      id: 7,
      name: 'Rio de Janeiro',
      country: 'Brazil',
    },
    {
      id: 8,
      name: 'Moscow',
      country: 'Russia',
    },
    {
      id: 9,
      name: 'Istanbul',
      country: 'Turkey',
    },
    {
      id: 10,
      name: 'Cairo',
      country: 'Egypt',
    },
  ]
  return (
    <Drawer>
      <DrawerTrigger>
        <img src="" alt="" className="bg-red-100 rounded-full w-14 h-14 self-center" />
      </DrawerTrigger>
      <DrawerContent className="flex flex-col items-center bg-[#2E2E38]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex justify-center">
            <DrawerTitle>Manage Your Informations</DrawerTitle>
          </DrawerHeader>
        </div>
        <Tabs defaultValue="cities" className="md:min-w-[500px] h-[30rem]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cities">Cities</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          <TabsContent value="cities">
            <div className="flex flex-col h-[25rem] gap-2 mt-5 pt-5 overflow-scroll">
              {
                cities.length > 0 ?
                  cities.map(city => (
                    <div className="flex w-full justify-between p-5 bg-[#1E1F24] rounded-[1rem]" key={city.id}>
                      <span>{city.name} - {city.country}</span>
                      <FaRegTrashAlt className="text-red-500" />
                    </div>
                  )) : <p className="text-white text-center">No city added yet</p>
              }
            </div>
          </TabsContent>
          <TabsContent value="account">
            <div className="flex flex-col items-center gap-14 p-10">
              <div className="flex flex-col items-center">
                <img src="" alt="" className="bg-red-100 rounded-full w-32 h-32 self-center" />
                <h1 className="font-bold mt-5">User Name</h1>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Button className="w-48 text-yellow-50">Logout</Button>
                <Button className="w-48 text-red-500 border border-red-500">Delete my account</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
}