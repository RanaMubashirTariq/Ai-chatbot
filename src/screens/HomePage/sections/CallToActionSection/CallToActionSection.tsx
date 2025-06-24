import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#18181d] overflow-hidden py-16 max-[680px]:py-[32px] max-[680px]:gap-[32px] max-[680px]:items-center max-[680px]:justify-center max-[680px]:px-[25px]">
      {/* Decorative elements */}
      <div className="absolute right-0 top-[-115px] w-[444px] h-[525px] max-[1100px]:w-[300px] max-[1100px]:h-[350px] max-[1000px]:w-[200px] max-[1000px]:h-[250px] max-[680px]:w-[100px] max-[680px]:h-[150px]">
        <div className="absolute w-72 h-[234px] top-[291px] left-0 bg-[#cdff091f] rounded-[143.91px/117.23px] blur-[130px] max-[1100px]:w-[50px] max-[1100px]:h-[150px] max-[1000px]:w-[30px] max-[1000px]:h-[100px] max-[680px]:w-[10px] max-[680px]:h-[50px]" />
        <div className="absolute w-[231px] h-[239px] top-0 left-[141px] rounded-[115.5px/119.5px] border-2 border-solid border-[#ffffff29] max-[1100px]:w-[150px] max-[1100px]:h-[150px] max-[1000px]:w-[100px] max-[1000px]:h-[100px] max-[680px]:w-[50px] max-[680px]:h-[50px]" />
        <img
          className="absolute w-[417px] h-[364px] top-0 left-[27px] max-[1100px]:w-[300px] max-[1100px]:h-[250px] max-[1000px]:w-[200px] max-[1000px]:h-[150px] max-[680px]:w-[100px] max-[680px]:h-[70px]"
          alt="Ellipse"
          src="/ellipse-666.svg"
        />
        <div className="absolute w-[9px] h-[9px] top-[232px] left-[231px] bg-theme-schemeprimary-01 rounded-[4.5px] border border-solid border-[#09090f]" />
      </div>

      <div className="relative mx-auto max-w-[921px]">
        <div className="absolute w-[329px] h-60 top-0 left-[41px] bg-[#cdff090f] rounded-[164.5px/120px] blur-[90px]" />

        <div className="flex flex-col items-center gap-12 pt-28">
          <div className="flex flex-col items-center gap-6">
            <h2 className="w-full max-w-[555px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#ffffff] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] max-[1100px]:text-[36px] max-[1100px]:leading-[120%] max-[1000px]:text-[24px] max-[1000px]:leading-[120%] max-[680px]:text-[18px] max-[680px]:leading-[120%]">
              Experience the Future of AI With Aidy
            </h2>
            <p className="font-paragraph-p1-size-18px-regular font-[number:var(--paragraph-p1-size-18px-regular-font-weight)] text-neutral-02 text-[length:var(--paragraph-p1-size-18px-regular-font-size)] text-center tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] [font-style:var(--paragraph-p1-size-18px-regular-font-style)] max-[1100px]:text-[16px] max-[1100px]:leading-[120%] max-[1000px]:text-[14px] max-[1000px]:leading-[120%] max-[680px]:text-[12px] max-[680px]:leading-[120%]">
              Join millions and upgrade to Aidy today to feel the difference!
            </p>
          </div>

          <div className="flex items-start gap-4 max-[680px]:flex-col max-[680px]:gap-[12px] max-[680px]:items-center max-[680px]:justify-center max-[680px]:w-[100%]">
            <Button className="px-6 py-[15px] bg-theme-schemeprimary-01 rounded-[58px] h-auto max-[680px]:px-[12px] max-[680px]:py-[6px]">
              <span className="font-big-buttton-2 font-[number:var(--big-buttton-2-font-weight)] text-neutral-05 text-[length:var(--big-buttton-2-font-size)] tracking-[var(--big-buttton-2-letter-spacing)] leading-[var(--big-buttton-2-line-height)] [font-style:var(--big-buttton-2-font-style)] max-[680px]:w-[100%]">
                Get Started
              </span>
              <ArrowRightIcon className="ml-2 h-4 w-4 text-black" />
            </Button>

            <Button
              
              className="px-6 py-[15px] rounded-[58px] border-[1.5px] border-solid border-[#eaeaea] h-auto max-[680px]:px-[12px] max-[680px]:py-[6px]"
            >
              <span className="font-big-buttton-2 font-[number:var(--big-buttton-2-font-weight)] text-neutral-02 text-[length:var(--big-buttton-2-font-size)] tracking-[var(--big-buttton-2-letter-spacing)] leading-[var(--big-buttton-2-line-height)] [font-style:var(--big-buttton-2-font-style)] max-[680px]:w-[100%]">
                Request a Demo
              </span>
            </Button>
          </div>
        </div>

        <img
          className="absolute w-[230px] h-56 top-[135px] left-[-135px] max-[1100px]:w-[150px] max-[1100px]:h-[100px] max-[1100px]:left-[-50px] max-[1000px]:w-[100px] max-[1000px]:h-[70px] max-[800px]:left-[300px] max-[800px]:top-[20px] max-[480px]:left-[150px]"
          alt="Polygon"
          src="/polygon-3.svg"
        />
      </div>
    </section>
  );
};
