import Icon from "@mdi/react";
import React from "react";
import { mdiStar } from "@mdi/js";

function SPRates() {
  return (
    <div className="rates">
      <div className="sticky-top">
        <div className="rate">
          <span>4.3</span>
          <span>از 5</span>
        </div>
        <div className="stars d-flex">
          <Icon path={mdiStar} size={0.8} color={"gold"} />
          <Icon path={mdiStar} size={0.8} color={"gold"} />
          <Icon path={mdiStar} size={0.8} color={"gold"} />
          <Icon path={mdiStar} size={0.8} color={"gold"} />
          <Icon path={mdiStar} size={0.8} color={"gold"} />
          <p>
            <span>۳۷۵۴</span> .نفر امتیاز داده‌اند
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <p>کیفیت ساخت</p>
            <div className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div>4.1</div>
            </div>
          </div>
          <div className="box">
            <p>ارزش خرید به نسبت قیمت</p>

            <div className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div>4.1</div>
            </div>
          </div>
          <div className="box">
            <p>نوآوری</p>
            <div className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div>4.1</div>
            </div>
          </div>
          <div className="box">
            <p>امکانات و قابلیت ها</p>
            <div className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div>4.1</div>
            </div>
          </div>
          <div className="box">
            <p>سهولت استفاده</p>
            <div className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div>4.1</div>
            </div>
          </div>
          <div className="box">
            <p>طراحی و ظاهر</p>
            <div className="progress-container">
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div>4.1</div>
            </div>
          </div>
        </div>
        <p>شما هم درباره این کالا دیدگاه ثبت کنید</p>
        <button className="btn btn-outline-danger btn-block mx-2 mb-4">
          ثبت دیدگاه
        </button>
      </div>
    </div>
  );
}

export default SPRates;
