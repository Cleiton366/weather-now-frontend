import { useState } from "react";
import { Input } from "./ui/input";


export default function Navbar() {
  const [unit, setUnit] = useState('C°');

  function handleUnitSystem() {
    setUnit(unit === 'C°' ? 'F°' : 'C°');
  }

  function setSwitchStyle(temmperatureUnit: string) {
    if (temmperatureUnit === 'F') {
      return unit === 'F°' ? 'bg-[#34376d] rounded-[15px] w-10 text-center text-white mr-1 border border-[#42434e]' : 'mx-3';
    } else return unit === 'C°' ? 'bg-[#34376d] rounded-[15px] w-10 text-center text-white ml-1 border border-[#42434e]' : 'mx-3';
  }


  return (
    <div className="flex flex-col md:flex-row pt-5 px-10">
      <div className="flex justify-center md:justify-start">
        <img src="" alt="" className="bg-red-100 rounded-full w-8 h-8 self-center" />
        <div className="ml-5">
          <p className="font-bold text-[10pt]">Hi, User</p>
          <h1 className="font-bold text-[16pt]">{new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</h1>
        </div>
      </div>
      <div className="flex justify-center mt-2 md:flex-grow md:justify-end items-center gap-4">
        <Input className="h-8 w-72 bg-[#2E2E38] rounded-[15px] border-[#42434e] text-[#FFFFFF]" type="text" placeholder="Search a City" />
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