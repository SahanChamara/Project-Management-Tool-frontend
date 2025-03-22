// AuthPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUp from '@/components/auth/SignUp';
import SignIn from '@/components/auth/SignIn';

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex min-h-screen bg-slate-50 p-4 items-center justify-center">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-xl">
        {/* Left Side - Branding & Info */}
        <div className="relative hidden lg:block lg:w-1/2 bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 text-white">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center gap-2 text-xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-square">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span>Smart Task Manager</span>
            </div>

            <div className="my-10">
              <h2 className="mb-4 text-3xl font-bold">Welcome to the future of task management</h2>
              <p className="text-lg opacity-90">
                Smart Task Manager uses AI to prioritize your tasks and boost team productivity.
              </p>
            </div>
          </div>

          {/* Background pattern overlay */}
          <div className="absolute inset-0 bg-[url('/api/placeholder/500/800')] opacity-5"></div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-10">
          <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Log In</TabsTrigger>
              <TabsTrigger value="signup">
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/*  <div className='grid w-full grid-cols-2 mb-6'>
              <Link to="/sign-up" className='underline underline-offset-4'>
                Sign Up
              </Link>
            </div> */}

            <SignIn />
            <SignUp />

          </Tabs>
        </div>
      </div>
      <div>
        {/* <Sidebar/> */}
      </div>
    </div>
  );
}