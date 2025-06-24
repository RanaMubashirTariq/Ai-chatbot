import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const DashboardSection = (): JSX.Element => {
  // AI feature cards data
  const featureCards = [
    {
      title: "Code Research",
      iconUrl: "/group-19.svg",
      chartUrl: "/union.svg",
    },
    {
      title: "Text Search",
      iconUrl: "/group-20.svg",
      chartUrl: "/union.svg",
    },
    {
      title: "Image Generation",
      iconUrl: "/group-21.svg",
      chartUrl: "/union.svg",
    },
    {
      title: "UI Generation",
      iconUrl: "/group-22.svg",
      chartUrl: "/union.svg",
    },
  ];

  // Menu items data
  const menuItems = [
    { icon: "/chat-1.svg", label: "Chat Bot", active: true },
    { icon: "/help.svg", label: "Help Center" },
    { icon: "/flag.svg", label: "Report" },
    { icon: "/settings.svg", label: "Settings" },
    { icon: "/log-out.svg", label: "Logout" },
  ];

  // Trending topics data
  const trendingTopics = [
    { label: "Web3", iconUrl: "/group-15.svg" },
    { label: "Figma", iconUrl: "/group-15.svg" },
    { label: "Website Design", iconUrl: "/group-15.svg" },
    { label: "Design with AI", iconUrl: "/group-15.svg" },
  ];

  // Chat history data
  const chatHistory = [
    {
      date: "Today",
      chats: [
        "How to make a website?",
        "What is Framer? Tell me...",
        "How can I use Figma to ..",
        "What is color style in Fig...",
      ],
    },
    {
      date: "11 August 2024",
      chats: [
        "Tell me something about..",
        "How to Design a Homepa..",
        "What is Aidy?",
      ],
    },
  ];

  return (
    <Card className="relative w-[1170px] h-[827px] bg-[#1a1a1a] rounded-[28px] overflow-hidden border-[0.5px] border-solid border-[#cdff08] shadow-[0px_4px_24px_#cdff082e] mx-[auto] mb-[130px] max-[1249px]:w-[100%]">
      {/* Header */}
      <div className="flex h-[66px] bg-[#161616]">
        <div className="flex-none pl-8 flex items-center">
          <h2 className="font-bold text-neutral-50 text-xl leading-5">Aidy</h2>
        </div>
        <div className="flex-1 flex items-center justify-between px-8">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-neutral-02 text-[11px] text-center whitespace-nowrap">
              Plugins
            </span>
            <Badge className="bg-[#cdff0840] text-[#cdff08] opacity-30 px-2.5 py-1.5 rounded-[17.67px] shadow-[0px_0px_11.58px_#9c9c9c29] font-semibold text-[11px]">
              GPT-4
            </Badge>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-neutral-02 text-[11px] text-center whitespace-nowrap">
              Enabled Plugins:
            </span>
            <span className="font-extrabold text-neutral-50 text-xs text-center">
              Design-GPT
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 pr-4 ">
          <img alt="Notifications" src="/notifications.svg"/>
          <img alt="Chat" src="/chat.svg" />
          <Avatar className="w-9 h-9 rounded-full">
            <img src="/ellipse-1510-1.jpg" alt="User avatar"  className="w-9 h-9 rounded-full"/>
          </Avatar>
        </div>
      </div>

      {/* Main content */}
      <div className="flex h-[760px]">
        {/* Left sidebar */}
        <div className="w-[200px] bg-[#14141466] flex flex-col">
          <div className="py-[25px] px-5 bg-[#161616]">
            <span className="font-medium text-white text-xs leading-3">
              Menu
            </span>
          </div>

          <div className="flex flex-col gap-[9px] px-5 mt-[25px]">
            {menuItems.map((item, index) => (
              <div
                key={`menu-${index}`}
                className={`flex items-center gap-3 py-1.5 px-3 rounded-[10px] ${item.active ? "bg-[#ffffff0f]" : ""}`}
              >
                <img src={item.icon} alt={item.label} />
                <span className="font-semibold text-neutral-02 text-[10px] leading-[10px] opacity-60">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Trending topics */}
          <div className="mt-auto">
            <div className="py-[25px] px-5 border-t border-b border-[#2c333f40]">
              <span className="font-medium text-neutral-50 text-xs leading-3">
                Trending Topic
              </span>
            </div>

            <div className="flex flex-col gap-2 p-5">
              {trendingTopics.map((topic, index) => (
                <div
                  key={`topic-${index}`}
                  className="flex items-center justify-between p-2.5 bg-[#ffffff0a] rounded-lg"
                >
                  <span className="opacity-80 font-medium text-neutral-100 text-[8px] leading-[8px]">
                    {topic.label}
                  </span>
                  <div className="w-3.5 h-3.5 p-px">
                    <div className="w-2.5 h-2 -rotate-45">
                      <img
                        className="w-[13px] h-[13px] -top-0.5 -left-px rotate-45"
                        alt="Arrow"
                        src={topic.iconUrl}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <Separator className="border-[#2c333f] my-4" /> */}

            {/* User profile */}
            <div className="p-2 m-4  bg-[#ffffff0d] rounded-xl">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  <Avatar className="w-[26px] h-[26px] rounded-full ">
                    <img src="/ellipse-1510-1.jpg" alt="User avatar" className="w-full h-full" />
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-neutral-50 text-xs leading-3">
                      Maria Hill
                    </span>
                    <span className="font-normal text-neutral-500 text-[8px] leading-[8px]">
                      @maria.34
                    </span>
                  </div>
                </div>
                <Badge className="bg-[#9090901a] px-2 py-1.5 font-semibold text-neutral-300 text-[8px] leading-[8px]">
                  Free
                </Badge>
              </div>
              <Button className="w-full mt-6 bg-[#ffffff0f] text-neutral-50 font-semibold text-[10px] leading-[10px] py-3">
                Upgrade to Plus
              </Button>
            </div>
          </div>
        </div>

        {/* Main chat area */}
        <div className=" flex-1 flex flex-col">
          <div className="  flex-1 p-8">
            <Card className=" bg-[#1b1b1b] border-[#2b2b2b] rounded-3xl p-[25px]">
              <CardContent className="p-0 relative ">
                <div className="flex justify-between mb-[22px]">
                  {featureCards.map((card, index) => (
                    <div
                      key={`feature-${index}`}
                      className="flex flex-col items-start gap-[11px]"
                    >
                      <div className="flex flex-col max-w-[155px] items-end gap-[43px] p-5 bg-[#f3f5f70f] rounded-[18px]">
                        <div className="w-[34px] h-[34px] bg-[#ffffff1a] rounded-[100px] overflow-hidden flex items-center justify-center">
                          <div
                            className="w-[18px] h-[17px] opacity-30 bg-cover"
                            style={{ backgroundImage: `url(${card.iconUrl})` }}
                          />
                        </div>
                        <img
                          className="w-full h-[51.29px]"
                          alt="Chart"
                          src={card.chartUrl}
                        />
                      </div>
                      <span className="opacity-60 font-medium text-neutral-02 text-sm leading-[14px] whitespace-nowrap">
                        {card.title}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-neutral-500 text-sm leading-[21px]">
                  Great! If any of the plans above look good to you and you're
                  ready to move forward, we can start putting together a
                  detailed quote. We'll also consider any special medications
                  you're taking or if you'd like to stay aligned with your
                  current provider. Shall we get started?
                </p>

                <img
                  className="absolute w-[71px] h-[71px] bottom-[-61px] right-[32px] rounded-full"
                  alt="Ellipse"
                  src="/ellipse-1510-1.jpg"
                />
              </CardContent>
            </Card>

            <div className="flex justify-between mt-[35px]">
              <div className="flex items-center gap-2.5">
                <span className="font-semibold text-neutral-03 text-[9.8px] leading-[13.4px]">
                  Chat History
                </span>
                <Badge className="bg-[#cdff090d] px-[7px] py-1 rounded-md">
                  <span className="opacity-30 font-medium text-[#cdff08] text-[8px] leading-[13.4px]">
                    100/600
                  </span>
                </Badge>
              </div>
            </div>

            <Card className="mt-3 bg-[#202020] rounded-[22px] p-3 pb-[30px]">
              <CardContent className="p-0 relative">
                <div className="flex items-center gap-2 pl-4 pr-1.5 py-1.5 bg-[#ffffff08] rounded-2xl">
                  <div className="flex items-center justify-between flex-1">
                    <span className="font-semibold text-neutral-02 text-xs">
                      Can you make some beautiful flowers?
                    </span>
                    <div className="p-1.5 bg-[#cdff090f] rounded-2xl">
                      <div className="absolute top-[71px] left-[50px] w-[35px] h-[35px] opacity-30 z-10">
                        <img
                          className="w-[35px] h-[35px] rounded-full"
                          alt="Send"
                          src="/group-23.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300 text-[8px] tracking-[0.08px] leading-[14.6px] mt-3">
                  Yes! Here are flowers for you.
                </p>
              </CardContent>
            </Card>

            <div className="flex items-center gap-3 mt-8">
              <div className="flex-1 flex items-center gap-2.5 px-3.5 py-3 bg-[#363636] rounded-[100px] border border-solid border-[#4d4d4d]">
                <img
                  className="w-4 h-4"
                  alt="Message icon"
                  src="/group-23.svg"
                />
                <Input
                  className="border-0 bg-transparent text-neutral-100 text-[9.1px] leading-[9.1px] font-medium p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Hi how may i help you, please enter..."
                />
              </div>
              <Button className="px-6 py-[13px] bg-[#ffffff0d] rounded-[100px] text-neutral-03 text-[10px] font-semibold">
                Send
              </Button>
              <Button className="px-6 py-[13px] bg-[#ffffff99] rounded-[100px] text-neutral-05 text-[10px] font-semibold">
                Clear
              </Button>
            </div>
          </div>

          <div className="py-4 bg-[#2323294c] text-center">
            <span className="font-medium text-neutral-500 text-[8px]">
              © 2024 — All Right Reserved, Built by Grooic
            </span>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-[200px] border-l border-[#2f3135] flex flex-col">
          <div className="p-5 bg-[#cdff0808] flex items-center justify-between">
            <span className="font-medium text-neutral-50 text-xs">Chats</span>
            <Badge className="bg-[#cdff0814] rounded-[100px] py-[7px] px-2">
              <span className="opacity-30 font-bold text-color-schemeprimary-01 text-[8px]">
                12
              </span>
            </Badge>
          </div>

          <div className="px-4 mt-[17px]">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-neutral-50 text-[9.8px] leading-[13.4px]">
                Chat History
              </span>
              <Badge className="bg-[#ffffff0f] px-[7px] py-1 rounded-md font-medium text-white text-[8px] leading-[13.4px]">
                100/600
              </Badge>
            </div>

            <div className="mt-[17px] flex flex-col gap-8">
              {chatHistory.map((section, sectionIndex) => (
                <div
                  key={`section-${sectionIndex}`}
                  className="flex flex-col gap-2.5"
                >
                  <span
                    className={`font-semibold text-color-schemeprimary-01 text-[9.8px] leading-[13.4px] ${sectionIndex === 0 ? "opacity-40" : "opacity-30"}`}
                  >
                    {section.date}
                  </span>

                  {section.chats.map((chat, chatIndex) => (
                    <div
                      key={`chat-${sectionIndex}-${chatIndex}`}
                      className="flex items-center justify-between px-3 py-4 bg-[#ffffff12] rounded-[10.97px]"
                    >
                      <span className="opacity-60 font-semibold text-neutral-100 text-[9.8px] leading-[13.4px] w-[126px]">
                        {chat}
                      </span>
                      <img
                        className="w-2.5 h-2.5"
                        alt="Options"
                        src="/frame-74.svg"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center gap-[13px] p-4 mb-8">
            <Button className="bg-white opacity-50 text-black font-semibold text-[8px] px-5 py-3 rounded-[10px]">
              New Chat
            </Button>
            <Button className="bg-[#ffffff1a] text-white font-semibold text-[8px] px-5 py-3 rounded-[10px]">
              Delete All
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
