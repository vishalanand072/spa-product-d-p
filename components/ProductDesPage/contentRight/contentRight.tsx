import { Button, Image } from "@nextui-org/react";
import Select_PDA_Color from "./selectPDPColor";
import Select_PDA_Size from "./selectPDPSize";

const PDA_ContentRight = () => {
  return (
    <>
      <div className="text-left sticky top-32">
        <div className="md:text-[48px] -md:text-[32px] leading-[96%]">
          JONATHAN SIMKHAI
        </div>
        <div className="py-2"> Lurex Linen Viscose Jacket in Conchiglia</div>
        <div className="font-bold text-left">$225</div>
        <div className="py-4">
          <Select_PDA_Color></Select_PDA_Color>
        </div>

        <Select_PDA_Size></Select_PDA_Size>

        <div className="flex flex-grow gap-4 items-center py-4">
          <Button
            color="primary"
            radius="full"
            style={{ width: "100%" }}
            className="py-1"
            endContent={<Image src="../assets/icons/Right-Arrow.svg"></Image>}
          >
            Add to Cart
          </Button>
        </div>
        <div>
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </div>
        <div className="py-4">Speak to a Personal Stylist CHAT NOW</div>
      </div>
    </>
  );
};

export default PDA_ContentRight;
