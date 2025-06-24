import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CategorySection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      icon: {
        type: "custom",
        bgImage: "/ellipse-1022.svg",
        innerContent: (
          <div className="absolute w-10 h-10 top-5 left-8 bg-[url(/vector-171.svg)] bg-[100%_100%]">
            <div className="relative w-7 h-5 top-[11px] left-1.5 bg-[url(/vector-172.svg)] bg-[100%_100%]">
              <div className="absolute w-1.5 h-1.5 top-[5px] left-1 bg-theme-schemeprimary-01 rounded-[2.85px]" />
              <div className="absolute w-1.5 h-1.5 top-[5px] left-[18px] bg-theme-schemeprimary-01 rounded-[2.85px]" />
            </div>
          </div>
        ),
      },
      title: "Prompt Collection",
      description:
        "Spark creativity with a vast collection of prompts designed to ignite your imagination.",
    },
    {
      icon: {
        type: "image",
        bgImage: "/ellipse-1022.svg",
        innerImage: {
          src: "/group-7.svg",
          className: "absolute w-[42px] h-[42px] top-0.5 left-0.5",
        },
        wrapperClass: "absolute w-[46px] h-[46px] top-[17px] left-[26px]",
      },
      title: "Flexible Outputs",
      description:
        "Customize outputs by adjusting parameters, providing feedback, and refining the content.",
    },
    {
      icon: {
        type: "image",
        bgImage: "/ellipse-1022.svg",
        innerImage: {
          src: "/group-8.svg",
          className: "absolute w-11 h-[47px] top-px left-[3px]",
        },
        wrapperClass: "absolute w-[50px] h-[49px] top-4 left-[26px]",
      },
      title: "Instant response",
      description:
        "Get real-time suggestions to keep the conversation going smoothly.",
    },
    {
      icon: {
        type: "background",
        bgImage: "/ellipse-1022.svg",
        innerBg: {
          className:
            "absolute w-[45px] h-[45px] top-4 left-7 bg-[url(/group-9.svg)] bg-[100%_100%]",
        },
      },
      title: "Browser Extension",
      description:
        "Manage conversations, summarize web pages, and engage with pdfs effortlessly.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-12 py-16 px-[135px] max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px]  max-[1000px]:py-[32px]">
      <div className="flex flex-col items-center gap-14 w-full max-[680px]:gap-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 max-[680px]:gap-2">
            <Badge className="px-6 py-[9px] rounded-[20px] border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] bg-transparent">
              <span className="font-medium-button font-[number:var(--medium-button-font-weight)] text-theme-schemeprimary-01 text-[length:var(--medium-button-font-size)] tracking-[var(--medium-button-letter-spacing)] leading-[var(--medium-button-line-height)] [font-style:var(--medium-button-font-style)]">
                Category
              </span>
            </Badge>

            <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#ffffff] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-center max-[1100px]:text-[36px] max-[1100px]:leading-[150%] max-[680px]:text-[20px] max-[680px]:leading-[120%]">
              Discover Our Full Suite of Aidy
            </h2>
          </div>

          <p className="max-w-[717px] font-paragraph-p1-size-18px-regular font-[number:var(--paragraph-p1-size-18px-regular-font-weight)] text-neutral-02 text-[length:var(--paragraph-p1-size-18px-regular-font-size)] text-center tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] [font-style:var(--paragraph-p1-size-18px-regular-font-style)] max-[1100px]:text-[16px] max-[1100px]:leading-[120%] max-[680px]:text-[14px] max-[680px]:leading-[120%]">
            The next-level chatbot assistant you need
          </p>
        </div>

        <div className="grid grid-cols-2 max-[1000px]:grid-cols-1  gap-[30px] w-full max-w-[1170px] max-[680px]:gap-8">
          {featureCards.map((card, index) => (
            <Card key={index} className="bg-transparent border-none">
              <CardContent className="flex items-center gap-[50px] px-5 py-[30px] max-[1100px]:gap-[30px] max-[6800px]:px-0 max-[1100px]:py-[10px] max-[680px]:gap-4 max-[680px]:px-0 max-[680px]:py-[10px]">
                <div className="relative flex-shrink-0">
                  <img
                    className="relative w-[89.12px] h-[79.77px]"
                    alt="Ellipse"
                    src={card.icon.bgImage}
                  />

                  {card.icon.type === "custom" && card.icon.innerContent}

                  {card.icon.type === "image" && (
                    <div className={card.icon.wrapperClass}>
                      <img
                        className={card.icon.innerImage.className}
                        alt="Group"
                        src={card.icon.innerImage.src}
                      />
                    </div>
                  )}

                  {card.icon.type === "background" && (
                    <div className={card.icon.innerBg.className} />
                  )}
                </div>

                <div className="flex flex-col items-start gap-4 flex-1">
                  <h4 className="w-full font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[#ffffff] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] max-[1100px]:text-[20px] max-[1100px]:leading-[120%] max-[680px]:text-[16px] max-[680px]:leading-[120%]">
                    {card.title}
                  </h4>
                  <p className="w-full font-paragraph-p1-size-18px-regular font-[number:var(--paragraph-p1-size-18px-regular-font-weight)] text-neutral-02 text-[length:var(--paragraph-p1-size-18px-regular-font-size)] tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] [font-style:var(--paragraph-p1-size-18px-regular-font-style)] max-[1100px]:text-[16px] max-[1100px]:leading-[120%] max-[680px]:text-[14px] max-[680px]:leading-[120%]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button className="px-6 py-[15px] bg-theme-schemeprimary-01 rounded-[58px] text-neutral-05 max-[680px]:px-4 max-[680px]:py-[10px]">
        <span className="font-big-buttton-2 font-[number:var(--big-buttton-2-font-weight)] text-[length:var(--big-buttton-2-font-size)] tracking-[var(--big-buttton-2-letter-spacing)] leading-[var(--big-buttton-2-line-height)] [font-style:var(--big-buttton-2-font-style)] max-[680px]:text-[14px] max-[680px]:leading-[120%]">
          Get Started
        </span>
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
};
