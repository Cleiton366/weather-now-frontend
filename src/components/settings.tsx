import { Dispatch, SetStateAction } from "react";
import { AlertDialogButton } from "./alert-dialog-button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FaRegTrashAlt } from "react-icons/fa";
import { useToast } from "./ui/use-toast";
import { UserServices } from "@/services/user-services";
import { useRouter } from "next/navigation";
import { CityServices } from "@/services/city-services";
import { useUser } from "@/contexts/user-context";
import { CityDTO } from "@/interfaces/city-dto";

export default function Settings(props: {
  cities: CityDTO[] | [],
  setCities: Dispatch<SetStateAction<[] | CityDTO[] | undefined>>
  handleGetCitiesWeather: () => Promise<void>
}) {
  const { toast } = useToast();
  const { user } = useUser();
  const { cities, setCities, handleGetCitiesWeather } = props;
  const router = useRouter();
  const userServices = new UserServices();
  const cityServices = new CityServices();

  const handleLogout = async () => {
    try {
      router.push('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while trying to logout',
        duration: 5000,
        className: 'bg-[#1E1F24] text-white'
      })
    }
  }

  const handleDeleteAccount = async () => {
    try {
      await userServices.deleteUser(user?.id || '');
      router.push('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while trying to delete account',
        duration: 5000,
        className: 'bg-[#1E1F24] text-white'
      })
    }
  }

  const handleDeleteCity = async (id: string) => {
    try {
      await cityServices.deleteCity(id);
      const newCities = cities?.filter(city => city.id !== id);
      newCities.length > 0 ? setCities(newCities) : await handleGetCitiesWeather();
      toast({
        title: 'City Deleted',
        description: 'City has been deleted successfully',
        duration: 5000,
        className: 'bg-[#1E1F24] text-white'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while trying to delete city',
        duration: 5000,
        className: 'bg-[#1E1F24] text-white'
      })
    }
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <div>
          <img src={user?.profilePicture} alt="" className="bg-red-100 rounded-full w-14 h-14 self-center" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col items-center bg-[#2E2E38]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex justify-center">
            <DrawerTitle>Manage Your Informations</DrawerTitle>
          </DrawerHeader>
        </div>
        <Tabs defaultValue="cities" className="md:min-w-[500px] h-[30rem]">
          <TabsList className="grid w-full grid-cols-2 bg-[#1E1F24]">
            <TabsTrigger className="data-[state=active]:bg-[#34376D] data-[state]:text-white" value="cities">Cities</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-[#34376D] data-[state]:text-white" value="account">Account</TabsTrigger>
          </TabsList>
          <TabsContent value="cities">
            <div className="flex flex-col h-[25rem] gap-2 mt-5 pt-5 overflow-scroll">
              {
                cities ?
                  (
                    cities.length > 0 ? cities.map(city => (
                      <div className="flex w-full justify-between p-5 bg-[#1E1F24] rounded-[1rem]" key={city.id}>
                        <span>{city.name} - {city.country}</span>
                        <FaRegTrashAlt onClick={() => handleDeleteCity(city?.id || '')} className="text-red-500 cursor-pointer" />
                      </div>
                    ))
                      : <p className="text-white text-center">No city added yet</p>
                  ) : (<div />)
              }
            </div>
          </TabsContent>
          <TabsContent value="account">
            <div className="flex flex-col items-center gap-14 p-10">
              <div className="flex flex-col items-center">
                <img src={user?.profilePicture} alt="" className="bg-red-100 rounded-full w-32 h-32 self-center" />
                <h1 className="font-bold mt-5">{user?.name}</h1>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <AlertDialogButton
                  buttonText="Logout"
                  buttonStyle="w-48 text-yellow-50 bg-primary border-2 border-[#42434e]"
                  buttonAction={handleLogout}
                  tittle="Logout"
                  description="Are you sure you want to logout?"
                />
                <AlertDialogButton
                  buttonText="Delete Account"
                  buttonStyle="w-48 text-red-500 bg-primary border border-red-500"
                  buttonAction={handleDeleteAccount}
                  tittle="Delete my account"
                  description="Are you sure you want to delete your account? This action cannot be undone."
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
}