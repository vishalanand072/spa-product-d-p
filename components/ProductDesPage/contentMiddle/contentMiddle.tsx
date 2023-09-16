import { Image } from "@nextui-org/react";
import { photos } from "./productList";

const PDA_ContentMiddle = () => {
  let count = 0;
  return (
    <>
      <div className="row text-center">
        <div className="hero container mx-auto flex justify-center">
          <div className=" w-2/3">
            {photos.map((val, ind) => {
              console.log((photos.length - count) % 3);
              if (photos.length - count >= 3) {
                return (
                  <>
                    <Image
                      isZoomed
                      width="100%"
                      alt="Image"
                      src={photos[count].src}
                    />
                    <div className="flex">
                      <Image
                        isZoomed
                        width="100%"
                        alt="Image"
                        src={photos[count + 1].src}
                      />{" "}
                      <Image
                        isZoomed
                        width="100%"
                        alt="Image"
                        src={photos[count + 2].src}
                      />
                    </div>
                    <div className="hidden">{(count = count + 3)}</div>
                  </>
                );
              } else if (photos.length - count > 0) {
                return (
                  <>
                    <Image
                      isZoomed
                      width="100%"
                      alt="Image"
                      src={photos[count].src}
                    />
                    <div className="hidden">{(count += 1)}</div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PDA_ContentMiddle;
