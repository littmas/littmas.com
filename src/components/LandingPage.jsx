import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import "./index.css"; // Import CSS for styling

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <img src="/assets/logo-rect-black.png" alt="Littmas Logo" className="logo" />
        <h1>The Future of AI-Driven Legal Research</h1>
        <p>
          Littmas is revolutionizing litigation support with AI-powered case law analysis, automated legal briefs, and real-time court tracking.
        </p>
        <form name="get-started" method="POST" data-netlify="true" className="form">
          <input type="hidden" name="form-name" value="get-started" />
          <Input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input"
            required
          />
          <Button type="submit" className="button">Get Started</Button>
        </form>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-box">
          <h3>AI-Powered Case Law Analysis</h3>
          <p>Find relevant precedents faster than ever.</p>
        </div>
        <div className="feature-box">
          <h3>Automated Legal Briefs</h3>
          <p>Generate structured legal briefs with AI.</p>
        </div>
        <div className="feature-box">
          <h3>Court Case Tracking</h3>
          <p>Stay updated with real-time case status and cause lists.</p>
        </div>
        <div className="feature-box">
          <h3>API for Legal Data</h3>
          <p>Seamlessly integrate case information into your workflow.</p>
        </div>
      </div>
    </div>
  );
}
