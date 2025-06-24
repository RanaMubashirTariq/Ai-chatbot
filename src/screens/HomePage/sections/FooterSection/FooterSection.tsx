import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Footer navigation links data
  const footerLinks = [
    {
      title: "Pages",
      links: ["About", "Team", "Pricing", "Blog"],
    },
    {
      title: "Support",
      links: ["Contact Us", "Discord"],
    },
    {
      title: "Community",
      links: ["Telegram", "Skool", "Referrals"],
    },
  ];

  return (
    <footer className="flex flex-col items-center gap-16 pt-20 pb-0 px-[25px] bg-[#18181d] w-full max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[550px]:gap-[20px] max-[550px]:pt-[32px]">
      <div className="flex flex-col w-full max-w-[1170px] items-start gap-14 max-[550px]:gap-[20px]">
        {/* Logo and Social Media Icons */}
        <div className="flex items-center justify-between relative w-full  max-[550px]:flex-col max-[550px]:gap-[20px]">
          <div className="inline-flex items-center gap-[7.59px]">
            <div className="relative w-[44.57px] h-[34.14px] bg-[url(/logo.svg)] bg-[100%_100%] max-[1100px]:w-[32px] max-[1100px]:h-[24px] max-[1000px]:w-[24px] max-[1000px]:h-[18px] max-[680px]:w-[18px] max-[680px]:h-[14px]" />
            <div className="text-4xl leading-[41.7px] font-['Inter',Helvetica] font-bold text-white text-center tracking-[0] whitespace-nowrap max-[1100px]:text-[32px] max-[1100px]:leading-[120%] max-[1000px]:text-[24px] max-[1000px]:leading-[120%] max-[680px]:text-[18px] max-[680px]:leading-[120%]">
              Aidy
            </div>
          </div>

          <div className="inline-flex items-center gap-5">
            <img
              className="w-6 h-6"
              alt="Social media icon"
              src="/frame-2.svg"
            />
            <img className="w-6 h-6" alt="Social media icon" src="/frame.svg" />
            <img
              className="w-6 h-6"
              alt="Social media icon"
              src="/frame-1.svg"
            />
            <img
              className="w-6 h-6"
              alt="Social media icon"
              src="/frame-3.svg"
            />
          </div>
        </div>

        <Separator className="w-full bg-white/10" />

        {/* Footer Links and Newsletter */}
        <div className="flex flex-wrap items-start justify-between w-full gap-8  max-[550px]:gap-[20px]">
          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div
              key={`footer-section-${index}`}
              className="flex flex-col items-start gap-6"
            >
              <h3 className="font-paragraph-p1-size-18px-semibold font-[number:var(--paragraph-p1-size-18px-semibold-font-weight)] text-white text-[length:var(--paragraph-p1-size-18px-semibold-font-size)] tracking-[var(--paragraph-p1-size-18px-semibold-letter-spacing)] leading-[var(--paragraph-p1-size-18px-semibold-line-height)] whitespace-nowrap max-[550px]:text-[16px] max-[550px]:leading-[120%]">
                {section.title}
              </h3>
              <nav className="flex flex-col items-start gap-[15px]">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={`${section.title}-link-${linkIndex}`}
                    href="#"
                    className="font-paragraph-p1-size-18px-regular font-[number:var(--paragraph-p1-size-18px-regular-font-weight)] text-neutral-02 text-[length:var(--paragraph-p1-size-18px-regular-font-size)] tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] whitespace-nowrap hover:text-white transition-colors max-[550px]:text-[14px] max-[550px]:leading-[120%]"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="flex flex-col items-start gap-6">
            <h3 className="font-paragraph-p1-size-18px-semibold font-[number:var(--paragraph-p1-size-18px-semibold-font-weight)] text-white text-[length:var(--paragraph-p1-size-18px-semibold-font-size)] tracking-[var(--paragraph-p1-size-18px-semibold-letter-spacing)] leading-[var(--paragraph-p1-size-18px-semibold-line-height)] whitespace-nowrap max-[550px]:text-[16px] max-[550px]:leading-[120%]">
              Newsletter
            </h3>
            <div className="flex flex-col items-start gap-5">
              <p className="w-[270px] font-paragraph-p1-size-18px-regular font-[number:var(--paragraph-p1-size-18px-regular-font-weight)] text-neutral-02 text-[length:var(--paragraph-p1-size-18px-regular-font-size)] tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] max-[550px]:text-[14px] max-[550px]:leading-[120%]">
                Join our newsletter for exclusive updates and insights.
              </p>
              <div className="flex w-[270px] items-center gap-2 bg-[#ffffff1a] rounded-[1000px] p-1">
                <Input
                  className="flex-1 border-none bg-transparent text-black-400 font-paragraph-p1-size-18px-regular placeholder:text-black-400 focus-visible:ring-0 focus-visible:ring-offset-0 max-[550px]:text-[14px] max-[550px]:leading-[120%]"
                  placeholder="Enter your email"
                />
                <Button
                  size="icon"
                  className="bg-theme-schemeprimary-01 rounded-full h-10 w-10 p-0 max-[550px]:h-[28px] max-[550px]:w-[28px]"
                >
                   <ArrowRightIcon className="ml-2 h-4 w-4 text-black" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col items-center gap-10 pt-0 pb-[60px] px-[135px] w-full max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[550px]:gap-[20px] max-[550px]:pb-[32px]">
        <Separator className="w-full bg-white/10 max-[550px]:w-[100%]" />
        <p className="font-paragraph-p1-size-18px-medium font-[number:var(--paragraph-p1-size-18px-medium-font-weight)] text-neutral-02 text-[length:var(--paragraph-p1-size-18px-medium-font-size)] text-center tracking-[var(--paragraph-p1-size-18px-medium-letter-spacing)] leading-[var(--paragraph-p1-size-18px-medium-line-height)] max-[550px]:text-[14px] max-[550px]:leading-[120%]">
          © 2024 — All Right Reserved, Built by Grooic
        </p>
      </div>
    </footer>
  );
};
