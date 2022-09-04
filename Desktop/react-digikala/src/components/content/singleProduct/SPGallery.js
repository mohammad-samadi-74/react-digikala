import { mdiDotsHorizontalCircle } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import SPGalleryNavigation from "./SPGalleryNavigation";

function SPGallery({ gallery }) {
  const { wallpaper } = gallery;
  return (
    <div className="product-gallery d-flex flex-column">
      <div className="d-flex flex-row-reverse px-2">
        <SPGalleryNavigation />
        <div className="gallery d-flex align-items-center justify-content-center">
          <img src={wallpaper} alt="product" />
        </div>
      </div>
      <div className="more-images rtl px-4 mb-5">
        <div className="d-flex justify-content-around">
          <div>
            <img src={wallpaper} alt="image" />
          </div>
          <div>
            <img src={wallpaper} alt="image" />
          </div>
          <div>
            <img src={wallpaper} alt="image" />
          </div>

          <div className="more">
            <img src={wallpaper} alt="image" />
            <div className="more-icon rounded-circle">
              <Icon path={mdiDotsHorizontalCircle} size={2} color={"#ccc"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPGallery;
