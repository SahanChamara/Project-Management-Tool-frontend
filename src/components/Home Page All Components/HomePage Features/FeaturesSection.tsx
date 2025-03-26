import { Card, CardContent } from "../../ui/card";

export default function FeaturesSection() {
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