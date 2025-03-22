// AuthPage.tsx
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function Register() {
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
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="font-normal">Remember me</Label>
                  </div>
                  <Button variant="link" className="px-0 text-indigo-600 hover:text-indigo-800">
                    Forgot Password?
                  </Button>
                </div>
                
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Log In
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM11 18H13V16H11V18ZM10.05 9.62C10.55 8.8 11.21 8.5 12 8.5C12.89 8.5 13.5 9.11 13.5 10C13.5 10.82 13.14 11.17 12.41 11.7C11.56 12.31 11 13.1 11 14V15H13V14.08C13 13.12 13.33 13.03 14.12 12.5C14.92 11.95 16 11.17 16 9.5C16 7.57 14.4 6.5 12 6.5C10.42 6.5 9.01 7.17 8.32 8.36L10.05 9.62Z" />
                    </svg>
                    Microsoft
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="emailSignup">Email Address</Label>
                  <Input id="emailSignup" type="email" placeholder="you@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="passwordSignup">Password</Label>
                  <Input id="passwordSignup" type="password" placeholder="••••••••" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="font-normal">
                    I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Create Account
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM11 18H13V16H11V18ZM10.05 9.62C10.55 8.8 11.21 8.5 12 8.5C12.89 8.5 13.5 9.11 13.5 10C13.5 10.82 13.14 11.17 12.41 11.7C11.56 12.31 11 13.1 11 14V15H13V14.08C13 13.12 13.33 13.03 14.12 12.5C14.92 11.95 16 11.17 16 9.5C16 7.57 14.4 6.5 12 6.5C10.42 6.5 9.01 7.17 8.32 8.36L10.05 9.62Z" />
                    </svg>
                    Microsoft
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div>
        {/* <Sidebar/> */}
      </div>
    </div>
  );
}