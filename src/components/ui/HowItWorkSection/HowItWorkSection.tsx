export default function HowItWorksSection() {
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