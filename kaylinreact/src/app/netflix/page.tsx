"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"

export default function NetflixLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 md:p-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-red-600 text-2xl md:text-4xl font-bold">KAYLIN</div>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Login form container */}
          <div className="bg-black/75 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <h1 className="text-white text-3xl font-medium mb-8">Sign In</h1>

            <form className="space-y-6">
              {/* Email field */}
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-14 px-4 rounded-md focus:bg-gray-600 focus:border-white focus:ring-0"
                    placeholder="Email or mobile number"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-14 px-4 pr-12 rounded-md focus:bg-gray-600 focus:border-white focus:ring-0"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Sign in button */}
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-base font-medium rounded-md">
                Sign In
              </Button>

              {/* Remember me and help */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    className="border-gray-500 data-[state=checked]:bg-gray-500 data-[state=checked]:border-gray-500"
                  />
                  <Label htmlFor="remember" className="text-gray-300 cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <a href="#" className="text-gray-300 hover:text-white hover:underline">
                  Need help?
                </a>
              </div>
            </form>

            {/* Sign up section */}
            <div className="mt-16 text-gray-400">
              <span>New to Netflix? </span>
              <a href="#" className="text-white hover:underline font-medium">
                Sign up now
              </a>
              .
            </div>

            {/* reCAPTCHA notice */}
            <div className="mt-4 text-xs text-gray-500 leading-relaxed">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more
              </a>
              .
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-400 text-sm mb-6">
            Questions? Call{" "}
            <a href="tel:1-844-505-2993" className="hover:underline">
              1-844-505-2993
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <div className="space-y-3">
              <a href="#" className="block hover:underline">
                FAQ
              </a>
              <a href="#" className="block hover:underline">
                Cookie Preferences
              </a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block hover:underline">
                Help Center
              </a>
              <a href="#" className="block hover:underline">
                Corporate Information
              </a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block hover:underline">
                Terms of Use
              </a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block hover:underline">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
