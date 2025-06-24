import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";

export const FeaturesOverviewSection = (): JSX.Element => {
  const featureItems = [
    {
      text: "Multi-Language Support",
    },
    {
      text: "Code Optimization and Refactoring",
    },
    {
      text: "Code Testing and Validation",
    },
  ];

  return (
    <section className="flex items-center justify-between w-full py-16 px-[135px] gap-16 max-[1100px]:px-[100px] max-[1100px]:py-8 max-[1000px]:px-[50px] max-[680px]:px-[25px]  max-[1000px]:gap-8 max-[800px]:flex-col-reverse">
      <div className="flex flex-col items-start gap-12 max-[1300px]:gap-6">
        <div className="flex flex-col items-start gap-8 max-[1300px]:gap-6">
          <div className="flex flex-col items-start gap-6 max-[680px]:gap-2">
            <div className="flex flex-col items-start gap-4 ">
              <Badge className="px-6 py-2 rounded-[20px] bg-transparent border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] font-medium-button font-[number:var(--medium-button-font-weight)] text-theme-schemeprimary-01 text-[length:var(--medium-button-font-size)]">
                Feature
              </Badge>

              <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#ffffff] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] max-w-[500px] max-[1100px]:text-3xl">
                Clean and Efficient Code Generation
              </h2>
            </div>

            <p className="max-w-[500px] font-paragraph-p1-size-18px-regular font-[number:var(--paragraph-p1-size-18px-regular-font-weight)] text-neutral-02 text-[length:var(--paragraph-p1-size-18px-regular-font-size)] tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] [font-style:var(--paragraph-p1-size-18px-regular-font-style)] max-[1100px]:text-[16px]">
              Boost your development speed with Aidy&#39;s clean and efficient
              code generation.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[307px] items-start gap-6">
          {featureItems.map((item, index) => (
            <div key={index} className="flex gap-3 w-full items-center">
              <div className="flex-shrink-0 w-6 h-6">
                <img className="w-6 h-6" alt="Icons" src="/icons.svg" />
              </div>

              <p className="font-paragraph-p2-size-16px-medium font-[number:var(--paragraph-p2-size-16px-medium-font-weight)] text-neutral-02 text-[length:var(--paragraph-p2-size-16px-medium-font-size)] tracking-[var(--paragraph-p2-size-16px-medium-letter-spacing)] leading-[var(--paragraph-p2-size-16px-medium-line-height)] [font-style:var(--paragraph-p2-size-16px-medium-font-style)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Card className="relative w-full max-w-[595px] h-[425px] bg-[#ffffff0f] rounded-[28px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-none max-[1300px]:h-[470px] max-[1100px]:max-w-[400px] max-[1100px]:h-[350px] max-[1000px]:max-w-[100%] max-[1000px]:h-[auto] max-[680px]:max-w-[280px] max-[680px]:h-[300px]">
        <div className="relative h-[425px]">
          <img
            className="absolute w-[560px] h-[425px] top-[35px] left-[35px] max-[1300px]:h-[470px]  max-[1100px]:w-[400px] max-[1100px]:h-[280px] max-[1000px]:w-[300px] max-[1000px]:h-[200px] max-[680px]:w-[280px] max-[680px]:h-[300px]"
            alt="Code example"
            src="/imge.png"
          />
          <div className="w-full h-full left-0 blur-[132px] bg-[linear-gradient(180deg,rgba(205,255,9,0)_82%,rgba(205,255,9,1)_100%)] absolute top-0" />
        </div>
      </Card>
    </section>
  );
};
