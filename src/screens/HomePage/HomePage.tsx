import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CategorySection } from "./sections/CategorySection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { DashboardFirst } from "./sections/Dashboard-1";

export const HomePage = (): JSX.Element => {
  // Data for trusted companies logos
  const trustedCompanies = [
    {
      alt: "Group",
      src: "/group-1000005110.svg",
      width: "205px",
      height: "39px",
      left: "1.5px",
    },
    {
      alt: "Logoipsum",
      src: "/logoipsum-297-1.svg",
      width: "195px",
      height: "39px",
      left: "15px",
    },
    {
      alt: "Logoipsum",
      src: "/logoipsum-288-1.svg",
      width: "169px",
      height: "39px",
      left: "7px",
    },
    {
      alt: "Logoipsum",
      src: "/logoipsum-286-1.svg",
      width: "205px",
      height: "39px",
      left: "7px",
    },
    {
      alt: "Logoipsum",
      src: "/logoipsum-253-1.svg",
      width: "154px",
      height: "29px",
      top: "5px",
      left: "35px",
    },
  ];

  return (
    <div className="bg-neutral-05 flex flex-col items-center w-full">
      {/* Hero and Dashboard Sections */}
      <section className="w-full relative">
        <img
          className="w-[416px] h-[778px] absolute top-[932px] right-0 max-[1249px]:w-[300px] max-[1249px]:h-[300px] max-[1249px]:top-[800px] max-[1249px]:right-[0px]"
          alt="Ellipse"
          src="/ellipse-136.svg"
        />

        <HeroSection />




        {/* <DashboardSection /> */}
        <DashboardFirst />

        <div className="w-full mt-16 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center gap-8">
      <h4 className="font-heading-h4 text-neutral-01 text-center text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)]">
        Trusted by Global Industry Leaders
      </h4>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap animate-slide">
          {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
            <Card
              key={index}
              className="inline-block bg-[#18181d] border-none rounded-[18px] min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[269px] px-6 py-4 max-[550px]:px-0 max-[500px]:py-0"
            >
              <CardContent className="px-6 py-4 flex justify-center items-center h-full">
                <img
                  src={company.src}
                  alt={company.alt}
                  className="object-contain max-h-15 w-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>



       
      </section>

      {/* Features Overview Section */}
      <FeaturesOverviewSection />

      {/* Features and Category Sections */}
      <section className="w-full">
        <FeaturesSection />
        <CategorySection />
      </section>

      {/* Testimonials, FAQ, and Contact Sections */}
      <section className="w-full">
        <TestimonialsSection />
        <FaqSection />
        <ContactUsSection />
      </section>

      {/* Call to Action and Footer Sections */}
      <section className="w-full">
        <CallToActionSection />
        <FooterSection />
      </section>
    </div>
  );
};
