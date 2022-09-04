import React, { useState } from "react";
import { Info, MoreVert, ThumbDown, ThumbUp } from "@material-ui/icons";
import SPRates from "./SPRates";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import SPCommentsNavigation from "./SPCommentsNavigation";
import RandomKey from "./../../../Modules/RandomKey";
import "./../../../css/content/Comments.css";

function SPComments() {
  const [comments, setComments] = useState(true);

  const commentsList = [
    { id: 1, comment: "واقعا خوبه", rate: "5" },
    {
      id: 2,
      comment: "برای مادرم خریدم خیلی راضیه کیفیت دوربینش هم قابل قبوله",
      rate: "4.2",
    },
    {
      id: 3,
      comment: "برای مادرم خریدم خیلی راضیه کیفیت دوربینش هم قابل قبوله",
      rate: "4.2",
    },
    {
      id: 4,
      comment: "برای مادرم خریدم خیلی راضیه کیفیت دوربینش هم قابل قبوله",
      rate: "4.2",
    },
    {
      id: 5,
      comment: "برای مادرم خریدم خیلی راضیه کیفیت دوربینش هم قابل قبوله",
      rate: "4.2",
    },
  ];

  return (
    <div id="product-comments" className="rtl text-right">
      <h4>دیدگاه‌ها</h4>
      <div className={!comments ? "ellipces-collapse d-flex" : "d-flex"}>
        <SPRates />
        <div className="comments">
          <div className="rate d-flex align-items-center ">
            <ThumbUp />
            <p className="mb-0 mx-2">
              ۸۴% (۴۰) نفر از خریداران، این کالا را پیشنهاد کرده اند
            </p>
            <Info />
          </div>
          {/* <div className="gallery d-flex">gallery</div> */}
          <hr />
          <div className="commentsList">
            <SPCommentsNavigation />
            <hr />
            {commentsList.map((comment) => (
              <div key={RandomKey()}>
                <div key={comment.id} className="d-flex flex-column">
                  <div className="commentDetailes d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div>
                        <span className="rate badge bg-green p-2">
                          {comment.rate}
                        </span>
                      </div>
                      <span className="mx-3"> . </span>
                      <span className="date">25 تیر 1401</span>
                      <span className="badge bg-gray mx-3 border-light">
                        خریدار
                      </span>
                    </div>
                    <MoreVert className="ms-3" />
                  </div>
                  <hr className="border-bottom border-secondary" />
                  <span className="text-green d-flex align-items-center">
                    <ThumbUp className="ms-4" />
                    پیشنهاد می‌کنم div.
                  </span>
                  <p className="comment pb-0 mt-3">{comment.comment}</p>
                  <hr className="border-bottom border-secondary" />
                  <div className="d-flex justify-content-end align-items-center likeProduct mt-3">
                    <span className="ms-3">آیا این دیدگاه مفید بود؟</span>
                    <div className="d-flex align-items-center">
                      <span className="me-2"> 0</span>
                      <ThumbUp className="text-gray me-2" />
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="me-2">0</span>
                      <ThumbDown className="text-gray me-2" />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="moreButtonStyle mt-2"
        onClick={() => {
          setComments(!comments);
        }}
      >
        {!comments ? "بیشتر" : "بستن"}
        <Icon path={mdiChevronLeft} size={1} />
      </button>
    </div>
  );
}

export default SPComments;
