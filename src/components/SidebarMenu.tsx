import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

type SidebarMenuProps = {
  menuItems: string[];
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menuItems }) => {
  const [active, setActive] = useState<string>("Overview");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <div className="w-full lg:w-1/5 relative">
      {/* Toggle Button for screen < lg */}
      <button
        className="flex items-center gap-2 text-lg px-4 py-2 border rounded-md bg-gray-100 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-5 h-5" />
        Menu
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-white px-4 pt-6 lg:pt-10 lg:sticky lg:top-20 h-fit z-10`}
      >
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className={`block pl-4 text-lg font-medium transition-colors ${
                  active === item ? "text-black" : "text-gray-500"
                }`}
              >
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full transition-all ${
                    active === item ? "bg-yellow-400" : "bg-transparent"
                  }`}
                ></span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
