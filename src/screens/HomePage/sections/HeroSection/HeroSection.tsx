import { ArrowRightIcon, ChevronDownIcon, Menu as MenuIcon, X as XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", hasDropdown: false },
    { name: "Pages", hasDropdown: true },
    { name: "Pricing", hasDropdown: false },
    { name: "Contact Us", hasDropdown: false },
  ];

  return (
    <section className="relative w-full h-[645px] overflow-hidden max-[680px]:h-[450px]">
      <div className="relative w-full h-full">
        <img
          className="absolute w-full h-[645px] top-0 left-0 object-cover"
          alt="Vector background"
          src="/vector.svg"
        />

        {/* Decorative blurred elements */}
        <div className="absolute w-[369px] h-[607px] top-[181px] left-[118px] bg-theme-schemeprimary-01 rounded-[184.71px/303.48px] rotate-[-27.23deg] blur-[170px] opacity-20" />
        <div className="absolute w-[326px] h-[535px] top-[197px] right-[100px] bg-theme-schemeprimary-01 rounded-[162.86px/267.59px] rotate-[-29.58deg] blur-[170px] opacity-25" />

        {/* Navigation bar */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-[135px] py-[18px] z-10  max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px]">
          <div className="flex items-center gap-[6.8px]">
            <img src="/logo.svg" alt="Logo" />
            <div className="text-[32.3px] leading-[37.4px] font-bold text-white [font-family:'Inter',Helvetica]">
              Aidy
            </div>
          </div>

          {/* Desktop Navigation links */}
          <div className=" min-[851px]:block max-[880px]:hidden">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-[50px]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink className="flex items-center gap-2.5 font-big-buttton-2 text-white">
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDownIcon className="w-[18px] h-[18px]" />
                      )}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Button */}
          <div className=" min-[851px]:block max-[880px]:hidden">
            <Button className="px-6 py-[15px] bg-[#cdff08] rounded-[58px] text-neutral-05 font-big-buttton-2">
              Get Started
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Hamburger Icon for mobile */}
          <button
            className="block min-[851px]:hidden text-white focus:outline-none z-20"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center gap-8 min-[851px]:hidden z-10">
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white text-2xl font-big-buttton-2 flex items-center gap-2"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDownIcon className="w-[18px] h-[18px]" />}
                  </a>
                ))}
              </nav>
              <Button className="px-6 py-[15px] bg-[#cdff08] rounded-[58px] text-neutral-05 font-big-buttton-2 w-60">
                Get Started
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
        </header>

        {/* Hero content */}
        <div className="flex flex-col items-center gap-14 absolute top-[185px] left-1/2 transform -translate-x-1/2 w-[873px] max-[1100px]:w-[700px] max-[1000px]:w-[600px] max-[680px]:w-[300px] max-[680px]:top-[100px] max-[680px]:gap-5">
          <div className="flex flex-col items-center gap-8 w-full max-[680px]:gap-4">
            <h1 className="font-heading-display-h1 text-white text-center leading-[var(--heading-display-h1-line-height)] text-[74px] font-bold max-[1100px]:text-[54px] max-[1000px]:text-[44px] max-[680px]:text-[34px]">
              The Future of <br />
              The Next-Gen Chatbot
            </h1>

            <p className="font-paragraph-p1-size-18px-regular text-neutral-02 text-center leading-[var(--paragraph-p1-size-18px-regular-line-height)] max-[1100px]:text-[14px] max-[1000px]:text-[12px] max-[680px]:text-[10px]">
              Meet Aidy, the next-gen AI chatbot designed to enhance
              conversations with intuitive responses, seamless integration, and
              powerful automation.
            </p>
          </div>

          <div className="flex items-center gap-4 max-[680px]:flex-col max-[680px]:gap-2">
            <Button className="px-6 py-[15px] bg-theme-schemeprimary-01 rounded-[58px] text-neutral-05 font-big-buttton-2 max-[680px]:w-full">
              Get Started
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>

            <Button
             
              className="px-6 py-[15px] rounded-[58px] border-[1.5px] border-[#eaeaea] text-neutral-02 font-big-buttton-2 max-[680px]:w-full"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
