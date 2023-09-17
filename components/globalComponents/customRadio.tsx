import { useRadio, VisuallyHidden, RadioProps, cn } from "@nextui-org/react";

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "max-w-[300px] cursor-pointer border-2 border-default rounded-0 gap-4 p-0",
        "data-[selected=true]:border-black "
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} hidden />
      </VisuallyHidden>
      <div>{children && <span {...getLabelProps()}>{children}</span>}</div>
    </Component>
  );
};
