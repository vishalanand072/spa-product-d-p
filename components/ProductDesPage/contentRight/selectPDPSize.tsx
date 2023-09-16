import { Image, Link, RadioGroup } from "@nextui-org/react";
import { CustomRadio } from "../../globalComponents/customRadio";
import React from "react";
import { CustomRadioRounded } from "@/components/globalComponents/customRadioRounded";

const Select_PDA_Size = () => {
  const [selected, setSelected] = React.useState("Conchiglia");
  return (
    <>
      <div className="gap-2 grid grid-cols-2 pb-3">
        <div className="text-left uppercase">
          <b>Size</b> {selected}
        </div>
        <div className="text-right uppercase">
          <Link color="foreground" href="#" underline="always" className="pl-1">
            DESIGNER
          </Link>
        </div>
      </div>
      <RadioGroup
        orientation="horizontal"
        value={selected}
        onValueChange={setSelected}
      >
        <CustomRadioRounded value="XS">XS</CustomRadioRounded>
        <CustomRadioRounded value="S">S</CustomRadioRounded>{" "}
        <CustomRadioRounded value="M">M</CustomRadioRounded>{" "}
        <CustomRadioRounded value="L">L</CustomRadioRounded>
        <CustomRadioRounded isDisabled={true} value="XXL">
          XXL
        </CustomRadioRounded>
      </RadioGroup>
    </>
  );
};

export default Select_PDA_Size;
