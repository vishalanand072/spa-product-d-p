import { Image } from "@nextui-org/react";
import { photos } from "../productList/productList";
import HeartFav from "@/components/globalComponents/heartFav";

const PDA_ContentMiddle = () => {
  let count = 0;
  return (
    <>
      <div className="row text-center">
        <div className="hero container mx-auto flex justify-center">
          <div className="w-2/3">
            <div
              className="sticky top-20 flex justify-end"
              style={{ zIndex: 25 }}
            >
              <HeartFav id="heart1" label=" " />
            </div>
            <div></div>
            {photos.map((val, ind) => {
              console.log((photos.length - count) % 3);
              //Logic for two columns
              if (photos.length - count >= 3) {
                return (
                  <div className="-mt-10">
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
                  </div>
                );
              }
              //Logic for 1 column
              else if (photos.length - count > 0) {
                return (
                  <div className="-mt-10">
                    <Image
                      isZoomed
                      width="100%"
                      alt="Image"
                      src={photos[count].src}
                    />
                    <div className="hidden">{(count += 1)}</div>
                  </div>
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
