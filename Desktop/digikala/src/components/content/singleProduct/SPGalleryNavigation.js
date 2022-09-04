import React from "react";
import {
  mdiBellRingOutline,
  mdiChartAreaspline,
  mdiCompare,
  mdiFormatListBulleted,
  mdiHeart,
  mdiShareVariant,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

function SPGalleryNavigation() {
  return (
    <div className="gallery-navigation">
      <ul>
        <li>
          <Link to="/">
            <Icon path={mdiHeart} size={1} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Icon path={mdiShareVariant} size={1} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Icon path={mdiBellRingOutline} size={1} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Icon path={mdiChartAreaspline} size={1} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Icon path={mdiCompare} size={1} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Icon path={mdiFormatListBulleted} size={1} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SPGalleryNavigation;
