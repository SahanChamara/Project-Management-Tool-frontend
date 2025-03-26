import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

// Header Component
export default function Header() {
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
                <Link to='/sign-in' > Log In </Link>
              </Button>
              <Button className="bg-[#4e6af0] hover:bg-[#3f55c0] text-white">
              <Link to='/sign-up' > Sign Up </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }