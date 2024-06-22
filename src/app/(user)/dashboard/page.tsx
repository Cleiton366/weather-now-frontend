'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { UserProvider } from "@/contexts/user-context";
import MainContainer from "@/components/main-container";

export default function Dashboard() {
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
  }, []);

  return (
    <UserProvider>
      <MainContainer />
    </UserProvider>
  );
}
