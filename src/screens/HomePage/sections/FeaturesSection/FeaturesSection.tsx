import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Data for feature cards in the first card
  const featureCards = [
    {
      title: "Code Research",
      iconUrl: "/group-19.svg",
      imageUrl: "/union.svg",
    },
    {
      title: "Text Search",
      iconUrl: "/group-20.svg",
      imageUrl: "/union.svg",
    },
    {
      title: "Image Generation",
      iconUrl: "/group-21.svg",
      imageUrl: "/union.svg",
    },
    {
      title: "UI Generation",
      iconUrl: "/group-22.svg",
      imageUrl: "/union.svg",
    },
  ];

  // Data for today's chat history
  const todayChats = [
    { title: "How to make a website?", width: "w-[126px]" },
    { title: "How can I use Figma to ..", width: "w-[126px]" },
    { title: "What is Framer? Tell me...", width: "w-[126px]" },
    { title: "What is color style in Fig...", width: "w-[126px]" },
  ];

  // Data for previous chat history
  const previousChats = [
    { title: "Tell me something....", width: "w-[109.4px]" },
    { title: "How to Design..", width: "w-[117px]" },
    { title: "What is AI App ?", width: "w-[99.73px]" },
  ];

  return (
    <section className="flex flex-col  gap-14 w-full items-center   px-[135px] py-[65px] max-[1300px]:px-[100px] max-[1300px]:py-[50px] max-[1000px]:px-[50px] max-[680px]:px-[25px] max-[1000px]:py-[30px]">
      <div className="flex flex-col items-center gap-4">
        <Badge className="px-6 py-[9px] rounded-[20px] border border-solid border-[#cdff08] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px] bg-transparent text-theme-schemeprimary-01 font-medium-button text-base">
          Feature
        </Badge>

        <h2 className="font-heading-h2 text-[#ffffff] text-4xl md:text-[48px] text-center leading-[120%] max-w-[597px] max-[680px]:text-[24px] max-[680px]:leading-[120%]">
          Dynamic Features of Our AI Chatbot
        </h2>
      </div>

      <div className="flex  items-start gap-[30px] w-full max-[1100px]:flex-col max-[1100px]:gap-10 max-[1100px]:items-center ">
        {/* First Card - Chat Interface */}
        <Card className="flex-1 w-full  flex flex-col   items-start gap-[11px] p-5 bg-[#131318] rounded-3xl border-none">
          <CardContent className="p-0 w-full  space-y-[5.59px]">
            <div className="flex flex-col  items-start gap-[3.73px] w-full">
              {/* Feature Cards Section */}
              <div className="flex flex-col items-start gap-[11.18px] pt-[18.63px] pb-[13.97px] px-[15px] bg-[#1b1b1b] rounded-[17.9px] border-[0.75px] border-solid border-[#2b2b2b] w-full">
                <div className="w-full flex flex-wrap items-center  gap-[10.44px] flex-1 max-[1300px]:gap-10 max-[1300px]:justify-center ">
                  {featureCards.map((feature, index) => (
                    <div
                      key={index}
                      className="flex-col items-start gap-[8.2px] inline-flex"
                    >
                      <div className="flex flex-col w-[115.59px] items-end gap-[32.07px] p-[14.91px] bg-[#f3f5f70f] rounded-[13.42px]">
                        <div className="relative w-[25.36px] h-[25.36px] bg-[#ffffff1a] rounded-[74.57px] overflow-hidden">
                          <div className="relative w-[13px] h-[13px] top-1.5 left-1.5 opacity-30">
                            <div
                              className={`w-3 h-3 bg-[url(${feature.iconUrl})] bg-[100%_100%]`}
                            />
                          </div>
                        </div>
                        <img
                          className="self-stretch w-full h-[38.25px]"
                          alt="Union"
                          src={feature.imageUrl}
                        />
                      </div>
                      <div className="opacity-60 font-medium text-neutral-02 text-[10.4px] leading-[10.4px] whitespace-nowrap">
                        {feature.title}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="w-full font-normal text-neutral-500 text-[10.4px] leading-[15.7px]">
                  Great! If any of the plans above look good to you and
                  you&apos;re ready to move forward, we can start putting
                  together a detailed quote.
                </p>
              </div>

              {/* Chat History Label */}
              <div className="flex gap-1.5 items-center max-[1300px]:mt-[20px]">
                <div className="opacity-60 font-semibold text-[#ffffff] text-[7.3px] leading-[10px] whitespace-nowrap">
                  Chat History
                </div>
                <Badge className="px-[5.22px] py-[2.98px] rounded-[4.47px] bg-[#cdff090d]">
                  <span className="opacity-30 font-medium text-[#cdff08] text-[6px] leading-[10px]">
                    100/600
                  </span>
                </Badge>
              </div>
            </div>

            {/* Chat Message */}
            <div className="flex flex-col items-start gap-[8.95px] w-full">
              <div className="flex flex-col items-center gap-[8.95px] pt-[8.95px] pb-[22.37px] px-[8.95px] bg-[#202020] rounded-[16.41px] overflow-hidden w-full">
                <div className="flex w-full items-center gap-[5.97px] pl-[11.93px] pr-[4.47px] py-[4.47px] bg-[#ffffff08] rounded-[11.93px]">
                  <div className="flex items-center justify-between w-full">
                    <div className="font-semibold text-neutral-03 text-[8.9px]">
                      Can you make some beautiful flowers?
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[5.97px] p-[4.47px] bg-[#cdff090f] rounded-[11.93px] overflow-hidden">
                      <div className="relative w-[10.44px] h-[10.44px] opacity-30">
                        <img
                          className="absolute w-2 h-2 top-px left-px"
                          alt="Group"
                          src="/group-14.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="w-full font-normal text-neutral-300 text-[6px] tracking-[0.06px] leading-[10.9px]">
                  Yes! Here are flowers for you.
                </p>
              </div>
            </div>
          </CardContent>

          {/* Chat Input Area */}
          <div className="flex items-start justify-between w-full mt-4">
            <div className="flex flex-col items-start gap-[7.46px] px-[10.44px] py-[8.95px] bg-[#363636] rounded-[74.57px] overflow-hidden">
              <div className="flex w-[373.6px] items-center gap-[7.46px]">
                <img
                  className="w-[11.93px] h-[11.93px]"
                  alt="Material symbols sms"
                  src="/material-symbols-sms-outline-rounded.svg"
                />
                <div className="font-medium text-neutral-100 text-[6.8px] leading-[6.8px]">
                  Hi how may i help you, please enter...
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[8.95px]">
              <Button
                variant="ghost"
                className="px-[17.9px] py-[9.69px] bg-[#ffffff0d] rounded-[74.57px] h-auto"
              >
                <span className="font-semibold text-neutral-300 text-[7.5px] leading-[10px]">
                  Send
                </span>
              </Button>
              <Button
                variant="ghost"
                className="px-[17.9px] py-[9.69px] bg-[#ffffff47] rounded-[74.57px] h-auto"
              >
                <span className="font-semibold text-[#ffffff] text-[7.5px] leading-[10px]">
                  Clear
                </span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Second Card - Chat History */}
        <Card className="flex-1  flex flex-col items-center gap-[17px] p-5 bg-[#131318] rounded-3xl border-none">
          <CardContent className="p-0 w-full">
            <div className="flex flex-col items-center gap-3.5 pb-5 w-full rounded-[18px] overflow-hidden border border-solid border-[#8a8a8a21]">
              {/* Header */}
              <div className="flex w-full items-center justify-between px-5 py-3 bg-[#cdff0808]">
                <div className="flex items-center justify-center gap-2.5">
                  <span className="font-medium text-[#ffffff] text-xs">
                    Chats
                  </span>
                </div>
                <Badge className="flex items-center justify-center pt-2 pb-[7px] px-2 bg-[#cdff0814] rounded-[100px]">
                  <span className="opacity-30 font-bold text-color-schemeprimary-01 text-[8px]">
                    12
                  </span>
                </Badge>
              </div>

              {/* Chat History Header */}
              <div className="flex w-full max-w-[490px] justify-between items-center px-5">
                <div className="font-semibold text-[#ffffff] text-[9.8px] leading-[13.4px] whitespace-nowrap">
                  Chat History
                </div>
                <Badge className="px-[7px] py-1 bg-[#ffffff0f] rounded-md">
                  <span className="font-medium text-[#ffffff] text-[8px] leading-[13.4px]">
                    100/600
                  </span>
                </Badge>
              </div>

              {/* Chat History Content */}
              <div className="flex flex-col  items-start gap-[19px] px-4">
                {/* Today's Chats */}
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="opacity-40 font-semibold text-color-schemeprimary-01 text-[9.8px] leading-[13.4px] whitespace-nowrap">
                    Today
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {todayChats.map((chat, index) => (
                      <div
                        key={`today-${index}`}
                        className="flex w-60 justify-between px-3 py-4 rounded-[10.97px] items-center bg-[#ffffff12]"
                      >
                        <div
                          className={`${chat.width} opacity-60 font-semibold text-white text-[9.8px] leading-[13.4px]`}
                        >
                          {chat.title}
                        </div>
                        <img
                          className="w-2.5 h-2.5"
                          alt="Frame"
                          src="/frame-74.svg"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Previous Chats */}
                <div className=" flex flex-col items-start gap-2 w-full">
                  <div className="opacity-30 font-semibold text-color-schemeprimary-01 text-[9.8px] leading-[13.4px] whitespace-nowrap">
                    11 August 2024
                  </div>
                  <div className="flex flex-wrap items-start gap-2.5">
                    {previousChats.map((chat, index) => (
                      <div
                        key={`prev-${index}`}
                        className="inline-flex justify-center gap-2 px-[15px] py-3 rounded-lg items-center bg-[#ffffff12]"
                      >
                        <div
                          className={`${chat.width} opacity-60 font-semibold text-white text-[9.8px] leading-[13.4px]  max-[680px]:w-[100%]`}
                        >
                          {chat.title}
                        </div>
                        <img
                          className="w-2.5 h-2.5"
                          alt="Frame"
                          src="/frame-74.svg"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-start gap-2.5 mt-2">
                    {previousChats.map((chat, index) => (
                      <div
                        key={`prev2-${index}`}
                        className="inline-flex justify-center gap-2 px-[15px] py-3 rounded-lg items-center bg-[#ffffff12]"
                      >
                        <div
                          className={`${chat.width} opacity-60 font-semibold text-white text-[9.8px] leading-[13.4px]`}
                        >
                          {chat.title}
                        </div>
                        <img
                          className="w-2.5 h-2.5"
                          alt="Frame"
                          src="/frame-74.svg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
