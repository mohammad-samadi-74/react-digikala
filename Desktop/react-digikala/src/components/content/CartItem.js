import React from "react";
import { Delete } from "@material-ui/icons";
import { mdiPageNextOutline } from "@mdi/js";
import { mdiShieldCheckOutline } from "@mdi/js";
import { mdiArchiveCheckOutline } from "@mdi/js";
import { mdiTruckFast } from "@mdi/js";
import { mdiTruck } from "@mdi/js";
import { mdiStore } from "@mdi/js";
import { Icon } from "@mdi/react";
import "../../css/content/CartItem.css";
import { partition } from "../../Helpers";

function CartItem(props) {
  const item = props.item;
  const discount = Math.round((item.price * item.offPercent) / 100) ?? null;

  return (
    <div className="cart-item d-flex" key={item.id}>
      {/* item image */}
      <div className="image">
        <img src={item.image} alt="product-image" />

        {/* amazing-discount-image */}
        {item.amazingDiscount ? (
          <div className="amazing-discount-image">
            <img
              className="amazing-discount-image"
              src="../images/amazing-discount.svg"
              alt="amazing-discount"
            />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* item more */}
      <div className="more d-flex flex-column">
        {/* item name */}
        <div className="name">{item.name}</div>

        {/* item garranty */}
        <div className="garranty">
          <Icon path={mdiShieldCheckOutline} size={0.75} />
          <p>گارانتی اصالت و سلامت فیزیکی کالا </p>
        </div>

        {/* item seller */}
        <div className="sellers">
          <Icon path={mdiStore} size={0.75} />
          <p>{item.seller}</p>
        </div>

        {/* item delivery */}
        <div className="delivery">
          <div className="digikala-store">
            <Icon path={mdiArchiveCheckOutline} size={0.75} />
            <span>موجود در انبار دیجی‌کالا</span>
          </div>
          <i>|</i>
          <div className="deliveries">
            <div className="digikala-delivery">
              <Icon path={mdiTruck} size={0.75} />
              <span>ارسال دیجی‌کالا</span>
            </div>
            <div className="digikala-supermarket-fast-delivery">
              <Icon path={mdiTruckFast} size={0.75} />
              <span>ارسال سریع سوپرمارکتی دیجی‌کالا </span>
            </div>
          </div>
        </div>

        {discount ? (
          <div className="discount-information">
            تخفیف {partition(discount)} تومان
          </div>
        ) : (
          ""
        )}

        {/* operations */}
        <div className="operations d-flex">
          <div className="count">
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>

          {/* delete */}
          <button className="delete-item">
            <Delete />
            حذف
          </button>

          {/* next-order */}
          <button className="move-to-next-order">
            <Icon path={mdiPageNextOutline} size={0.75} />
            ذخیره در لیست خرید بعدی
          </button>

          {/* price */}
          <div className="price"> {partition(item.price - discount)} تومان</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
