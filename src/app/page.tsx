'use client'

import { Button } from "@/components/ui/button";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col mt-5 md:justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img className="w-44 md:w-64" src="./fill/animation-ready/clear-day.svg" alt="" />
        <div className="mt-10 md:ml-10">
          <h1 className="px-10 md:w-[30rem] font-bold text-[16pt] md:text-[20pt]">Do you need a umbrela or sunscreens tomorrow?</h1>
          <h1 className="mt-5 px-10 md:w-[25rem] font-medium text-[12pt] md:text-[16pt]">Find out with Weather
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FBFBFB] to-[#34376D]"> Now </span>
            Your daily weather guide!</h1>
          <div className="flex flex-col md:flex-row items-center mt-5">
            <div className="flex flex-col gap-2 mt-5">
              <Button className="flex justify-between w-48">
                <FaMeta />
                Sign In with Meta
              </Button>
              <Button className="flex justify-between w-48">
                <FaGoogle />
                Sign In with Google
              </Button>
            </div>
            <Separator className="h-0 md:h-20 md:ml-5 md:mt-5" orientation="vertical" />
            <Button 
              className="mt-5 ml-6 bg-gradient-to-r from-[#34376D] to-[#2E2E38] max-w-44 px-10 md:w-96"
              onClick={() => router.push('/dashboard')}
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
