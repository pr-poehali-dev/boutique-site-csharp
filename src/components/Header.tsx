import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/products", label: "Товары" },
    { path: "/news", label: "Новости" },
    { path: "/admin", label: "Админ" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="text-2xl font-medium font-montserrat text-black tracking-tight"
          >
            Boutique
          </Link>

          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
