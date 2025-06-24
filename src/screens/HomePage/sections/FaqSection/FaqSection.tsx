import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const FaqSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      id: "item-1",
      number: "1.",
      question: "What is Aidy Chatbot?",
      answer:
        "Aidy is an AI-powered chatbot designed to help you achieve your goals and improve your productivity. It offers personalized information, reminders, and encouragement tailored to your specific needs.",
      isOpen: true,
    },
    {
      id: "item-2",
      number: "2.",
      question: "How does Aidy work?",
      answer: "",
      isOpen: false,
    },
    {
      id: "item-3",
      number: "3.",
      question: "What features does Aidy offer?",
      answer: "",
      isOpen: false,
    },
    {
      id: "item-4",
      number: "4.",
      question: "Is my data safe with Aidy?",
      answer: "",
      isOpen: false,
    },
    {
      id: "item-5",
      number: "5.",
      question: "Who can benefit from using Aidy?",
      answer: "",
      isOpen: false,
    },
    {
      id: "item-6",
      number: "6.",
      question: "Can I Join with my team on Aidy?",
      answer: "",
      isOpen: false,
    },
  ];

  const [openItem, setOpenItem] = useState("item-1");

  return (
    <section className="relative flex  gap-[75px] px-[135px] py-[65px] max-[1250px]:flex-col max-[1100px]:px-[100px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[680px]:py-[32px] max-[680px]:gap-[32px] max-[680px]:items-center max-[680px]:justify-center max-[1000px]:py-[32px] ">
      {/* Left side - Header card */}
      <Card className="flex w-[100%] flex-col items-center gap-8 px-[50px] py-[103px] bg-[#18181d] rounded-[36px] border-none max-[1250px]:w-[100%] max-[1250px]:px-[25px] max-[1250px]:py-[50px]">
        <div className="flex flex-col items-center gap-10 w-full max-[1300px]:w-[450px] max-[1000px]:w-[350px] max-[680px]:w-[250px]">
          <div className="w-[82.99px] h-[87.13px] bg-[url(/group.svg)] bg-[100%_100%]" />

          <div className="flex flex-col items-center gap-4 w-full">
            <Badge className="px-6 py-[9px] rounded-[20px] border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] bg-transparent">
              <span className="font-medium-button font-[number:var(--medium-button-font-weight)] text-theme-schemeprimary-01 text-[length:var(--medium-button-font-size)] tracking-[var(--medium-button-letter-spacing)] leading-[var(--medium-button-line-height)] [font-style:var(--medium-button-font-style)]">
                FAQs
              </span>
            </Badge>

            <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#ffffff] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] max-[1250px]:text-[36px] max-[1250px]:leading-[120%] max-[1000px]:text-[24px] max-[1000px]:leading-[120%] max-[680px]:text-[18px] max-[680px]:leading-[120%]">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <CardContent className="p-0">
          <p className="w-[425.12px] font-paragraph-p1-size-18px-regular font-[number:var(--paragraph-p1-size-18px-regular-font-weight)] text-x3-background-colorswhite-color text-[length:var(--paragraph-p1-size-18px-regular-font-size)] text-center tracking-[var(--paragraph-p1-size-18px-regular-letter-spacing)] leading-[var(--paragraph-p1-size-18px-regular-line-height)] [font-style:var(--paragraph-p1-size-18px-regular-font-style)]  max-[1000px]:text-[14px] max-[1000px]:leading-[120%] max-[680px]:text-[12px] max-[680px]:leading-[120%] max-[680px]:w-[100%]">
            Your quick guide to common inquiries and solutions.
          </p>
        </CardContent>
      </Card>

      {/* Right side - FAQ accordion */}
      <div className="flex flex-col gap-[30px] relative max-[1250px]:w-[100%]">
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="max-w-[570px] max-[1300px]:max-w-[450px] max-[1250px]:max-w-[100%]"
        >
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={
                  isOpen
                    ? "bg-theme-schemeprimary-01 rounded-3xl shadow-[0px_12px_36px_#e19f6d1f] p-[30px] mb-[30px]"
                    : "mb-0"
                }
              >
                <AccordionTrigger className="flex justify-between items-center py-0 px-0">
                  <div className="flex items-center gap-5 py-5 relative max-[1100px]:w-[100%] max-[360px]:gap-2">
                    <span
                      className={`flex justify-center items-center w-9 h-[43px] mt-[-1.00px] font-['Inter',Helvetica] text-3xl text-center tracking-[0] leading-9 whitespace-nowrap ${isOpen ? "font-medium text-[#18181d]" : "font-normal text-neutral-03"} max-[1250px]:text-[20px] max-[1250px]:leading-[120%] max-[1000px]:text-[18px] max-[1000px]:leading-[120%] max-[680px]:text-[13px] max-[680px]:leading-[120%] max-[360px]:w-[20px] max-[360px]:h-[30px]`}
                    >
                      {item.number}
                    </span>
                    <h4
                      className={`font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)] ${isOpen ? "text-[#18181d]" : "text-neutral-03"} max-[1300px]:text-[18px] max-[1250px]:leading-[120%] max-[1000px]:text-[18px] max-[1000px]:leading-[120%] max-[680px]:text-[13px] max-[680px]:leading-[120%]`}
                    >
                      {item.question}
                    </h4>
                  </div>
                  {/* Icon on the right */}
                  <span className="ml-4 flex items-center absolute right-0">
                    {isOpen ? (
                             <img src="/minus.svg" alt="" className="max-[480px]:w-[20px] max-[480px]:h-[20px]" />
                    ) : (
                      <img src="/plus.svg" alt="" className="max-[480px]:w-[20px] max-[480px]:h-[20px]" />
                    )}
                  </span>
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="pl-14 pr-0 py-0 mt-[15px]">
                    <p className="w-[414px] mt-[-1.00px] font-paragraph-p2-size-16px-regular font-[number:var(--paragraph-p2-size-16px-regular-font-weight)] text-neutral-05 text-[length:var(--paragraph-p2-size-16px-regular-font-size)] tracking-[var(--paragraph-p2-size-16px-regular-letter-spacing)] leading-[var(--paragraph-p2-size-16px-regular-line-height)] [font-style:var(--paragraph-p2-size-16px-regular-font-style)]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
