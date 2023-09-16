import React from "react";
import { Tabs, Tab, Link } from "@nextui-org/react";

const PDA_ConetentLeft = () => {
  const tabsContents = [
    {
      id: 0,
      title: "details",
      content:
        "The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.",
    },
    {
      id: 1,
      title: "delivery",
      content:
        "The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.",
    },
    {
      id: 2,
      title: "fit",
      content:
        "The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.",
    },
    {
      id: 4,
      title: "share",
      content:
        "The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.",
    },
  ];

  return (
    <>
      <div className="sticky top-20">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 font-helvetica",
            cursor: "w-full bg-[#000]",
            tab: "max-w-fit px-0 h-8",
            tabContent:
              "group-data-[selected=true]:font-bold  group-data-[selected=true]:text-[#000]",
          }}
        >
          {tabsContents.map((item, index) => (
            <Tab
              className="pl-0"
              key={`${item.title}-${index}`}
              title={
                <div className="flex items-center space-x-2 uppercase ">
                  <span>{item.title}</span>
                </div>
              }
            >
              <div
                style={{ maxWidth: "375px" }}
                className="text-left ml-0 pl-0"
              >
                {item.content}
                <div className="my-4">
                  See the
                  <Link
                    color="foreground"
                    href="#"
                    underline="always"
                    className="pl-1"
                  >
                    EDITORS NOTE
                  </Link>
                </div>
                <div>
                  Learn about the
                  <Link
                    color="foreground"
                    href="#"
                    underline="always"
                    className="pl-1"
                  >
                    DESIGNER
                  </Link>
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default PDA_ConetentLeft;
