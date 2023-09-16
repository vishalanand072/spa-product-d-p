import PDA_ConetentLeft from "./contentLeft/contentLeft";
import PDA_ContentMiddle from "./contentMiddle/contentMiddle";
import PDA_ContentRight from "./contentRight/contentRight";

const Product_Page = () => {
  return (
    <>
      <div className="conatiner px-10 w-full mx-auto sm:gap-5 -lg:gap-0 grid grid-cols-4 sm:grid-cols-4 -lg:grid-cols-1 text-center transition-all ease-in-out delay-1000 ">
        <div className="-lg:hidden">
          <PDA_ConetentLeft></PDA_ConetentLeft>
        </div>
        <div className="col-span-2">
          <PDA_ContentMiddle></PDA_ContentMiddle>
        </div>
        <div className="md:pt-18 -lg:pt-2">
          <PDA_ContentRight></PDA_ContentRight>
        </div>
      </div>
      <div className="col-span-2"></div>
    </>
  );
};

export default Product_Page;
