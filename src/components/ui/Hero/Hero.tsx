import { Button } from "../button";

export default function HeroSection() {
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