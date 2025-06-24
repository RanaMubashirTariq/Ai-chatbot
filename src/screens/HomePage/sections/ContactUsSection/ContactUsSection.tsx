import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactUsSection = (): JSX.Element => {
  // Topics data for the "Let's Talk About" section
  const topics = [
    "Customer Experience",
    "Quality and Trust",
    "Dependable Service",
  ];

  return (
    <section className="flex w-full items-center justify-between  px-[135px] py-[65px] max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[680px]:py-[32px] max-[680px]:gap-[32px] max-[680px]:items-center max-[680px]:justify-center max-[680px]:flex-col">
      <div className="flex flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-6">
            <Badge className="px-6 py-[9px] rounded-[20px] border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] font-medium-button text-theme-schemeprimary-01 max-[680px]:px-[12px] max-[680px]:py-[6px]">
              Contact Us
            </Badge>

            <div className="flex flex-col items-start gap-4">
              <h2 className="font-heading-h2 text-[#ffffff] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] max-[1100px]:text-[36px] max-[1100px]:leading-[120%] max-[680px]:text-[24px] max-[680px]:leading-[120%]">
                Get in Touch With Us
              </h2>

              <p className="max-w-[606px] font-paragraph-p1-size-18px-regular text-neutral-02 text-[length:var(--paragraph-p1-size-18px-regular-font-size)] tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] max-[1100px]:text-[16px] max-[1100px]:leading-[120%] max-[680px]:text-[14px] max-[680px]:leading-[120%]">
                We&apos;re here to support you! Feel free to reach out for
                assistance, feedback, or any questions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <h4 className="font-heading-h4 text-[#ffffff] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] max-[1100px]:text-[20px] max-[1100px]:leading-[120%] max-[680px]:text-[16px] max-[680px]:leading-[120%]">
            Let&apos;s Talk About:
          </h4>

          <div className="flex flex-col items-start gap-4">
            {topics.map((topic, index) => (
              <div
                key={`topic-${index}`}
                className="flex items-center justify-center gap-2 pl-2 pr-4 py-2 bg-[#18181d] rounded-[32px]"
              >
                <div className="flex items-center justify-center p-1.5 bg-theme-schemeprimary-01 rounded-2xl data-[state=open]:rotate-90">
                   <img src="/arrow-right.svg" alt="" className="w-6 h-6 max-[680px]:w-[20px] max-[680px]:h-[20px]" />
                </div>
                <span className="font-paragraph-p2-size-16px-regular text-neutral-02 text-[length:var(--paragraph-p2-size-16px-regular-font-size)] tracking-[var(--paragraph-p2-size-16px-regular-letter-spacing)] leading-[var(--paragraph-p2-size-16px-regular-line-height)] max-[1100px]:text-[14px] max-[1100px]:leading-[120%] max-[680px]:text-[12px] max-[680px]:leading-[120%]">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card className="bg-[#18181d] rounded-[25px] border border-solid border-[#cdff08]">
        <CardHeader className="pb-0">
          <CardTitle className="font-h-extra text-[#ffffff] text-[length:var(--h-extra-font-size)] tracking-[var(--h-extra-letter-spacing)] leading-[var(--h-extra-line-height)] max-[1100px]:text-[20px] max-[1100px]:leading-[120%] max-[680px]:text-[18px] max-[680px]:leading-[120%]">
            Get a quote
          </CardTitle>
          <CardDescription className="max-w-[397px] font-paragraph-p1-size-18px-regular text-neutral-02 text-[length:var(--paragraph-p1-size-18px-regular-font-size)] tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] max-[1100px]:text-[16px] max-[1100px]:leading-[120%] max-[680px]:text-[14px] max-[680px]:leading-[120%]">
            Fill up the form and our Team will get back to you within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-5">
          <Input
            placeholder="Name"
            className="px-5 py-[15px] bg-[#ffffff1a] rounded-xl font-normal text-neutral-03 text-lg leading-[22px] [font-family:'Inter',Helvetica] tracking-[0]"
          />
          <Input
            placeholder="Email"
            className="px-5 py-[15px] bg-[#ffffff1a] rounded-xl font-normal text-neutral-03 text-lg leading-[22px] [font-family:'Inter',Helvetica] tracking-[0]"
          />
          <Input
            placeholder="Subject"
            className="px-5 py-[15px] bg-[#ffffff1a] rounded-xl font-normal text-neutral-03 text-lg leading-[22px] [font-family:'Inter',Helvetica] tracking-[0]"
          />
          <Textarea
            placeholder="Your Message"
            className="px-5 py-[15px] min-h-[95px] bg-[#ffffff1a] rounded-xl font-normal text-neutral-03 text-lg leading-[22px] [font-family:'Inter',Helvetica] tracking-[0]"
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full px-6 py-[15px] bg-theme-schemeprimary-01 rounded-[58px] font-big-buttton-2 text-neutral-05 text-[length:var(--big-buttton-2-font-size)] tracking-[var(--big-buttton-2-letter-spacing)] leading-[var(--big-buttton-2-line-height)]">
            Send Message
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
