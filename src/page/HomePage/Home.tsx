// App.jsx - Main component
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/ui/Header/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafc] text-[#4a5568]">
      <Header/>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

/* // Header Component
function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 font-bold text-lg text-[#4e6af0]">
            <i className="fas fa-tasks text-xl"></i>
            <span>Smart Task Manager</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Features", "How It Works", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#4a5568] hover:text-[#4e6af0] font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-[#4e6af0] text-[#4e6af0] hover:bg-[#4e6af0] hover:text-white">
              Log In
            </Button>
            <Button className="bg-[#4e6af0] hover:bg-[#3f55c0] text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} */

// Hero Section
function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#f5f7ff] to-[#e6eeff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
          AI-Powered Task Management for Teams
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-[#4a5568]">
          Smart Task Manager helps you organize tasks, prioritize them automatically with AI, 
          and collaborate with your team in real-time.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button size="lg" className="bg-[#4e6af0] hover:bg-[#3f55c0] text-white">
            Get Started Free
          </Button>
          <Button size="lg" variant="outline" className="border-[#4e6af0] text-[#4e6af0] hover:bg-[#4e6af0] hover:text-white">
            Watch Demo
          </Button>
        </div>
        
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="/api/placeholder/1000/600" 
            alt="Smart Task Manager Dashboard Preview"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-robot",
      title: "AI-Powered Prioritization",
      description: "Our system analyzes your past behavior to automatically assign priority levels to your tasks."
    },
    {
      icon: "fas fa-users",
      title: "Real-Time Collaboration",
      description: "Share tasks, comment, and track updates in real-time with your team members."
    },
    {
      icon: "fas fa-bell",
      title: "Smart Notifications",
      description: "Get alerts when tasks are updated, assigned, or approaching deadlines."
    },
    {
      icon: "fas fa-chart-line",
      title: "Performance Analytics",
      description: "Track your productivity and team performance with detailed analytics and reports."
    },
    {
      icon: "fas fa-lock",
      title: "Secure Authentication",
      description: "Role-based access control ensures your data is secure and accessible only to authorized users."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description: "Access your tasks from any device with our fully responsive web application."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-4">
            Key Features
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#4a5568]">
            Discover how Smart Task Manager can transform your productivity and team collaboration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-transform hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-[#f5f7ff] text-[#4e6af0] flex items-center justify-center mb-6 mx-auto">
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-[#2d3748] mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-[#4a5568] text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description: "Sign up for free and set up your personal or team workspace in seconds."
    },
    {
      number: 2,
      title: "Add Your Tasks",
      description: "Start adding tasks, set deadlines, and invite your team members to collaborate."
    },
    {
      number: 3,
      title: "Let AI Do the Work",
      description: "Our AI analyzes your tasks and helps prioritize them based on urgency and your past behavior."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#f5f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-4">
            How It Works
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#4a5568]">
            Get started with Smart Task Manager in three simple steps
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4e6af0] text-white flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2d3748] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#4a5568]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-4">
          Ready to Boost Your Productivity?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-[#4a5568]">
          Join thousands of teams who have transformed their workflow with Smart Task Manager.
        </p>
        <Button size="lg" className="bg-[#4e6af0] hover:bg-[#3f55c0] text-white">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Roadmap"],
    Resources: ["Documentation", "Blog", "Tutorials", "Support"],
    Company: ["About Us", "Careers", "Contact", "Press"],
    Legal: ["Terms of Service", "Privacy Policy", "Security", "GDPR"]
  };

  return (
    <footer className="bg-[#2d3748] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="bg-gray-600" />
        
        <div className="pt-6 text-center text-gray-300 text-sm">
          &copy; 2025 Smart Task Manager. All rights reserved.
        </div>
      </div>
    </footer>
  );
}