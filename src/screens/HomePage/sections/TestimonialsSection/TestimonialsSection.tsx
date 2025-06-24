import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      quote:
        '"Aidy has enhanced client interactions. Its intuitive design and fast, accurate responses streamlined onboarding."',
      name: "Brooklyn Simmons",
      position: "CEO of Wednesday",
      stars: 5,
    },
    {
      quote:
        "\"Aidy's knack for effortlessly managing complex interactions is truly impressive. it's much more than just a support tool.\"",
      name: "Cameron Williamson",
      position: "Co-founder of Monday",
      stars: 5,
    },
    {
      quote:
        '"This chatbot has greatly enhanced our customer service with quick, effective responses and satisfaction."',
      name: "Leslie Alexander",
      position: "Director of Saturday",
      stars: 4.5,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-14 py-16  px-[135px] w-full max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[680px]:py-[32px]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <Badge className="px-6 py-[9px] rounded-[20px] border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] bg-transparent text-theme-schemeprimary-01 font-medium-button text-base max-[680px]:text-[12px]">
            Customer Reviews
          </Badge>

          <h2 className="font-heading-h2 text-[#ffffff] text-[48px] text-center leading-[120%] max-[1100px]:text-[36px] max-[1100px]:leading-[120%] max-[680px]:text-[24px] max-[680px]:leading-[120%]">
            What Our Clients Say
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center gap-11 w-full">
        <div className="flex flex-col md:flex-row items-start gap-[30px] w-full max-[680px]:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`testimonial-${index}`}
              className="flex flex-col items-start gap-8 px-[30px] py-[25px] bg-[#18181d] rounded-[30px] shadow-[12px_8px_36px_#0a1d0f0f] flex-1 max-[680px]:gap-4 max-[1100px]:px-[15px] max-[1100px]:py-[15px]"
            >
              <CardContent className="flex flex-col items-start gap-[22px] p-0 w-full max-[680px]:gap-4">
                <img className="w-10 h-10  max-[680px]:w-8 max-[680px]:h-8" alt="Quote" src="/quote.svg" />

                <div className="flex flex-col items-start gap-[15px] w-full">
                  <p className=" font-paragraph-p1-size-18px-regular text-neutral-02 text-[18px] leading-[160%] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical] max-[1100px]:text-[16px] max-[1100px]:leading-[120%]  max-[680px]:text-[14px] max-[680px]:leading-[120%]">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-start gap-[6.68px]">
                    {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                      <img
                        key={`star-${i}`}
                        className="w-[29.06px] h-[29.06px] max-[1100px]:w-[20px] max-[1100px]:h-[20px]"
                        alt="StarIcon rating"
                        src="/ant-design-star-filled-3.svg"
                      />
                    ))}
                    {testimonial.stars % 1 !== 0 && (
                      <img
                        className="w-[29.06px] h-[29.06px] max-[1100px]:w-[20px] max-[1100px]:h-[20px]"
                        alt="Half star rating"
                        src="/ant-design-star-filled-3.svg"
                      />
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center gap-4 p-0 w-full">
                <div className="flex flex-col items-start justify-center gap-2">
                  <h4 className="font-paragraph-p1-size-18px-semibold text-[#ffffff] text-[18px] leading-[160%] max-[1100px]:text-[16px] max-[1100px]:leading-[120%] max-[680px]:text-[14px] max-[680px]:leading-[120%]">
                    {testimonial.name}
                  </h4>
                  <p className="opacity-80 font-paragraph-p2-size-16px-medium text-neutral-02 text-[16px] leading-[160%] max-[1100px]:text-[14px] max-[1100px]:leading-[120%] max-[680px]:text-[12px] max-[680px]:leading-[120%]">
                    {testimonial.position}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex items-start gap-[25px]">
          <Button
            variant="outline"
            className="p-3 w-[40px] h-[40px] bg-[#18181d] rounded-[30px] border-none hover:bg-[#2a2a33]"
            aria-label="Previous testimonial"
          >
            <img className="w-6 h-6" alt="Previous" src="/arrow-left-alt.svg" />
          </Button>
          <Button
            variant="outline"
            className="p-3 w-[40px] h-[40px] bg-[#18181d] rounded-[30px] border-none hover:bg-[#2a2a33]"
            aria-label="Next testimonial"
          >
            <img className="w-6 h-6" alt="Next" src="/arrow-right-alt.svg" />
          </Button>
        </div>
      </div>
    </section>
  );
};
