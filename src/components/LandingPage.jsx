import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="text-center mt-16">
        <img
          src="/assets/logo-rect-black.png"
          alt="Littmas Logo"
          className="w-64 mx-auto"
        />
        <h1 className="text-4xl font-semibold mt-6">The Future of AI-Driven Legal Research</h1>
        <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">
          Littmas is revolutionizing litigation support with AI-powered case law analysis, automated legal briefs, and real-time court tracking.
        </p>
        <form
          name="get-started"
          method="POST"
          data-netlify="true"
          className="mt-6 flex flex-col items-center"
        >
          <input type="hidden" name="form-name" value="get-started" />
          <Input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="px-4 py-2 rounded-xl text-black w-64"
            required
          />
          <Button 
            type="submit"
            className="mt-4 bg-white text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-300"
          >
            Get Started
          </Button>
        </form>
      </div>
      
      {/* Features Section */}
      <div className="mt-20 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-800 rounded-xl text-center">
          <h3 className="text-xl font-bold">AI-Powered Case Law Analysis</h3>
          <p className="text-gray-400 mt-2">Find relevant precedents faster than ever.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl text-center">
          <h3 className="text-xl font-bold">Automated Legal Briefs</h3>
          <p className="text-gray-400 mt-2">Generate structured legal briefs with AI.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl text-center">
          <h3 className="text-xl font-bold">Court Case Tracking</h3>
          <p className="text-gray-400 mt-2">Stay updated with real-time case status and cause lists.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl text-center">
          <h3 className="text-xl font-bold">API for Legal Data</h3>
          <p className="text-gray-400 mt-2">Seamlessly integrate case information into your workflow.</p>
        </div>
      </div>
    </div>
  );
}
