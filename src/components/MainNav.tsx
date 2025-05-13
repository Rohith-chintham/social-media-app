
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-primary">SocialApp</h1>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link to="/">
            <Button variant="ghost" size="sm">
              Home
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Notifications
          </Button>
          <Button variant="ghost" size="sm">
            Messages
          </Button>
          <Link to="/profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden cursor-pointer">
              <img 
                src="https://source.unsplash.com/random/100x100/?portrait" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
