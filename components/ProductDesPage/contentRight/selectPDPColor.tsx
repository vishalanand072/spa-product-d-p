import { Image, RadioGroup } from "@nextui-org/react";
import { CustomRadio } from "@/components/globalComponents/customRadio";
import React from "react";
const Select_PDA_Color = () => {
  const [selected, setSelected] = React.useState("Conchiglia");

  return (
    <>
      <div className="text-left uppercase">
        <b>Color</b> {selected}
      </div>
      <RadioGroup
        orientation="horizontal"
        value={selected}
        onValueChange={setSelected}
      >
        <CustomRadio value="Conchiglia" className="text-center">
          <Image src="../assets/ProductImage/Color-Varient-1.png"></Image>
        </CustomRadio>
        <CustomRadio value="color2">
          <Image src="../assets/ProductImage/Color-Varient-2.png"></Image>
        </CustomRadio>
      </RadioGroup>
    </>
  );
};

export default Select_PDA_Color;
