import { Link } from "@nextui-org/react";

const ContentBottom = () => {
  return (
    <>
      <div className="flex justify-center gap-4  py-4">
        <div className="text-center uppercase whitespace-nowrap">
          <Link color="foreground" href="#" underline="always" className="pl-1">
            Jonathan Simkhai
          </Link>
        </div>
        <div className=" uppercase whitespace-nowrap">
          <Link color="foreground" href="#" underline="always" className="pl-1">
            Blazers
          </Link>
        </div>
        <div className="text-center uppercase whitespace-nowrap">
          <Link color="foreground" href="#" underline="always" className="pl-1">
            Viscose
          </Link>
        </div>
      </div>
      <div className="font-bold uppercase font-helvetica pt-20 py-4">
        a note from the editor
      </div>
      <div className="text-[32px] -lg:text-[20px] pt-4">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.{" "}
      </div>
      <div className="py-4">
        By <u>MINNA SHIM</u>, Fashion Editor
      </div>
    </>
  );
};

export default ContentBottom;
