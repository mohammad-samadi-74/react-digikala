import { mdiCircleMultiple, mdiInformationOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import "../../css/content/CartInfo.css";
import { partition } from "../../Helpers";

function CartInfo() {
  return (
    <div className="cart-info">
      {/* price section */}
      <div className="total-price">
        {/* total price */}
        <div className="total">
          <div>قیمت کالاها (۳) </div>
          <div>{partition(269000)} تومان</div>
        </div>

        {/* total off */}
        <div className="total-off">
          <div> تخفیف کالاها </div>
          <div>(7٪) {partition(18000)} تومان</div>
        </div>

        <div className="total-off-price">
          <div>جمع سبد خرید</div>
          <div> {partition(251000)} تومان </div>
        </div>

        <p>
          هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌
          محاسبه و به این مبلغ اضافه خواهد شد{" "}
        </p>

        <button>ادامه فرآیند خرید</button>

        {/* digiclub score sction */}
        <div className="digiclub-score">
          <div>
            <Icon path={mdiCircleMultiple} size={0.75} />
            <p>امتیاز دیجی‌کلاب</p>
            <Icon path={mdiInformationOutline} size={0.75} />
          </div>
          <div>{26} امتیاز</div>
        </div>
      </div>

      <p className="information">
        کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش مراحل بعدی
        را تکمیل کنید.
      </p>

      <div
        className="delivery-section-info"
        style={{
          background: 'url("./images/delivery-picture.png") no-repeat , #fff',
        }}
      >
        <div>
          <h5>ارسال رایگان سفارش</h5>
          <p>سفارش های بالای 300 هزار تومان</p>
        </div>
      </div>
    </div>
  );
}

export default CartInfo;
