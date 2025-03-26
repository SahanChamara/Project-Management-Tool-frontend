import { Separator } from "@/components/ui/separator";
export default function Footer() {
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