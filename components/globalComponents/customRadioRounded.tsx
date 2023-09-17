import { useRadio, VisuallyHidden, RadioProps, cn } from "@nextui-org/react";

export const CustomRadioRounded = (props: RadioProps) => {
  const { Component, children, getBaseProps, getInputProps, isDisabled } =
    useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "w-[80px] cursor-pointer border-2 border-default rounded-[20px] gap-4 py-1",
        "data-[selected=true]:border-black",
        "data-[selected=true]:bg-black",
        "data-[selected=true]:text-white",
        "data-[disabled]:strikethrough",
        "data-[disabled]:text-[#A6A6A6]"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} hidden />
      </VisuallyHidden>
      <div className="text-center ">{children && <span>{children}</span>}</div>
    </Component>
  );
};
