import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import $ from "jquery";
import { ArrowBackIos, Info } from "@material-ui/icons";
import { partition } from "./../../Helpers";
import {
  mdiAlertCircleOutline,
  mdiChevronLeft,
  mdiInformationOutline,
  mdiStar,
  mdiStore,
  mdiThumbUpOutline,
  mdiTruckOutline,
  mdiShieldCheckOutline,
  mdiStoreCheck,
  mdiCircleSmall,
  mdiStoreCheckOutline,
} from "@mdi/js";
import ProductIntroduction from "./ProductIntroduction";
import Product from "../../pages/Product";
import SPGallery from "./singleProduct/SPGallery";
import SPSellers from "./singleProduct/SPSellers";
import { Button, IconButton } from "@material-ui/core";

function SingleProduct({ title, price, off, description, wallpaper }) {
  const colors = [
    { name: "سفید", value: "white", color: "#fff" },
    { name: "آبی", value: "blue", color: "#2196f3" },
    { name: "مشکی", value: "black", color: "#000" },
    { name: "قرمز", value: "red", color: "#f44336" },
  ];

  const attributes = [
    { name: "حافظه داخلی", value: "64 گیگابایت" },
    { name: "بازه‌ی اندازه صفحه نمایش", value: "6.0 اینچ و بزرگتر" },
    { name: "شبکه های ارتباطی", value: "4G، 3G، 2G" },
  ];

  const sellers = [
    {
      name: "دیجی کالا",
      satisfaction: 87.2,
      function: "عالی",
      post: "دیجی کالا",
      postProcess: 0,
      warranty: { name: "داریا همراه پایتخت", month: 18 },
      price: 3870000,
      offPercent: 4,
    },
    {
      name: "دیجی کالا",
      satisfaction: 89.3,
      function: "عالی",
      post: "دیجی کالا",
      postProcess: 0,
      warranty: { name: "دیجی کالا", month: 18 },
      price: 3889000,
    },
    {
      name: "یمین فرادید",
      function: "عالی",
      post: "دیجی کالا",
      postProcess: 1,
      warranty: { name: "حامی", month: 18 },
      price: 3990000,
    },
    {
      name: "آواژنگ",
      function: "خیلی خوب",
      post: "دیجی کالا",
      postProcess: 1,
      warranty: { name: "آواژنگ", month: 18 },
      price: 3990000,
    },
  ];

  let changeColor = (item, e) => {
    $(`#input-color-${item.value}`)[0].checked = true;
    let target = e.target;
    $(".colors-inputs span").removeClass("active");
    $(target).addClass("active");
  };

  return (
    <div className="bg-white singleProduct-container">
      <div className="singleProduct container-xl px-0 ">
        {/* categories navbar */}
        <div className="product-categories d-flex rtl justify-content-between align-items-center">
          <p className="mb-0">
            دیجی کالا / کالای دیجیتال / موبایل / گوشی موبایل
          </p>
          <div className="align-items-center d-none d-lg-flex">
            <p className="mb-0"> کالای خود را در دیجی کالا بفروشید.</p>
            <Icon path={mdiStore} size={0.75} className="me-2" />
          </div>
        </div>

        {/* product info */}
        <div className="product-content row ">
          {/* left */}
          <div className="col-lg-9 col-12 px-4 px-lg-2">
            {/* title and category */}
            <div className="title-information d-flex flex-row-reverse">
              <div className="mark-logo">
                <img
                  src="/images/content/marks/samsung-logo.jpg"
                  alt="mark-logo"
                />
              </div>
              <div className="rtl text-right">
                <p className="category">
                  <Link to="/">سامسونگ</Link> /
                  <Link to="/">گوشی موبایل سامسونگ</Link>
                </p>
                <p className="title">{title}</p>
              </div>
            </div>

            {/* product-info-section */}
            <div className="product-info-section d-flex flex-lg-row-reverse flex-column rtl text-right">
              <div className="info__right">
                <div className="short-info d-flex align-items-center">
                  <p>
                    Samsung Galaxy A12 Nacho SM-A127F/DS Dual SIM 64GB And 4GB
                    RAM Mobile Phone
                  </p>
                  <hr />
                </div>
                {/* likes section */}
                <div className="likes-section d-flex  align-items-center mt-3">
                  <Icon
                    path={mdiThumbUpOutline}
                    size={0.75}
                    color={"#4caf50"}
                  />
                  <p className="mb-0">
                    ۸۸٪ (۷۸۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
                  </p>
                  <Icon
                    path={mdiInformationOutline}
                    size={0.75}
                    color={"#81858b"}
                  />
                </div>

                {/* rate section */}
                <div className="rate-section d-flex align-items-center rtl">
                  <Icon path={mdiStar} size={0.75} color={"#fac74b"} />
                  <p className="mb-0">
                    <span className="rate">4/3 </span>(
                    <span className="views">۲۱۳۳</span>)
                    <span className="space">.</span>
                    <Link to="/">
                      <span className="comments">۱۱۰۷</span>
                      دیدگاه کاربران
                    </Link>
                    <span className="space">.</span>
                    <Link to="/">
                      <span className="answers">۲۲۴</span>
                      پرسش و پاسخ
                    </Link>
                  </p>
                </div>

                {/* product information */}
                <div className="product-information mt-3">
                  {/* product color */}
                  <p>رنگ : سفید</p>
                  <div className="colors" id="colors">
                    {colors.map((item, index) => (
                      <div
                        className="d-inline colors-inputs"
                        key={"color-" + item.value}
                      >
                        <input
                          id={`input-color-${item.value}`}
                          type="radio"
                          name="color"
                          value={item.value}
                          key={index}
                          className="color-box"
                          style={{ visibility: "hidden" }}
                          selected={index == 0 ? true : false}
                        />
                        <span
                          onClick={changeColor.bind(this, item)}
                          style={{
                            width: "24px",
                            height: "24px",
                            backgroundColor: item.color,
                            display: "inline-block",
                            borderRadius: "50%",
                          }}
                          className={index == 0 ? "active" : ""}
                        ></span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* product attributes */}
                <div className="product-attributes">
                  <p>ویژگی های کالا</p>
                  <ul>
                    {attributes.map(({ name, value }) => (
                      <li key={`attr-${name}`} className="d-flex">
                        <div>{name}</div>
                        <span> : </span>
                        <div>{value}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* warning */}
                <div className="warning d-flex align-items-center text-secondary">
                  <div>
                    <Icon path={mdiAlertCircleOutline} size={1} />
                  </div>
                  <p>
                    هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد
                    فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق
                    #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در
                    آدرس اینترنتی hmti.ir/06
                    <br />
                    امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید"
                    تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد.
                  </p>
                </div>

                {/* digiplus section info */}
                <div className="digiplus-info">
                  <div className="d-flex justify-content-between">
                    <h5>
                      <img
                        src="/images/digiplus.svg"
                        alt="digiplus"
                        path={mdiTruckOutline}
                        size={1}
                        color={"#ef4056"}
                        className="me-2"
                      />
                      خدمات ویژه کاربران دیجی پلاس
                    </h5>
                    <Link to="/" className="d-flex align-items-center">
                      شما هم عضو شوید
                      <Icon path={mdiChevronLeft} size={1} />
                    </Link>
                  </div>
                  <p>ارسال رایگان . امکان ارسال فوری</p>
                </div>

                {/* delivery info */}
                <div
                  className="delivery-info"
                  style={{
                    background:
                      'url("./images/delivery-picture.png") no-repeat , #fff',
                  }}
                >
                  <h5>
                    <Icon
                      path={mdiTruckOutline}
                      size={1}
                      color={"#ef4056"}
                      className="me-2"
                    />
                    ارسال رایگان سفارش
                  </h5>
                  <p>سفارش های بالای 300 هزار تومان</p>
                </div>
              </div>

              {/* left section */}
              <div className="info__left">
                {/* seller info */}
                <div className="seller-section">
                  <div className="d-flex justify-content-between">
                    <div>فروشنده</div>
                    <Link to="/">5 فروشنده دیگر</Link>
                  </div>

                  <SPSellers />
                  <hr />

                  {/* Warranty */}
                  <div className="warranty d-flex">
                    <Icon path={mdiShieldCheckOutline} size={0.9} />
                    <div>گارانتی ۱۸ ماهه دیجی کالا</div>
                  </div>
                  <hr />

                  {/* Store */}
                  <div className="store text-right">
                    <div className="d-flex justify-content-between">
                      <Icon path={mdiStoreCheck} size={0.9} />
                      <div>موجود در انبار دیجی کالا</div>
                      <ArrowBackIos className="backarrow-icon" />
                    </div>
                    <div className="d-flex align-items-center">
                      <Icon path={mdiCircleSmall} size={0.9} />
                      <Icon path={mdiTruckOutline} size={0.8} />
                      <p className="mb-0">ارسال دیجی کالا</p>
                    </div>
                  </div>
                  <hr />

                  {/* price */}
                  <div className="price">
                    <div className="d-flex justify-content-end align-items-center discount d-flex">
                      <del>{partition(price)}</del>
                      <span className="badge py-1 px-2 me-2">
                        <i style={{ fontSize: "12px" }}>%</i>
                        {partition(off)}
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-end main-price">
                      <span className="me-2">
                        {partition(price - (price * off) / 100)}
                      </span>
                      تومان
                    </div>
                    <button className="btn btn-block">
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>

                {/* info */}
                <div className="information d-flex align-items-center mt-4 py-3 justify-content-between">
                  <Info />
                  <p className="mb-0">فرآیند قیمت گذاری و نظارت بر قیمت ها</p>
                  <ArrowBackIos />
                </div>

                <Link to="home" />
              </div>
              {/* ! left section */}
            </div>
          </div>

          {/* right */}
          <div className="col-lg-3 col-12 px-lg-4">
            {/* product gallery */}
            <SPGallery gallery={{ wallpaper }} />
          </div>
        </div>
        <hr />

        {/* warranty section */}
        <div
          id="warrantySection"
          className="rtl d-flex justify-content-arround px-4 flex-wrap"
        >
          <Link to="/">
            <div className="d-flex">
              <img src="/images/warranty-section-1.svg" alt="logo" />
              <span>امکان تحویل اکسپرس</span>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <img src="/images/warranty-section-2.svg" alt="logo" />
              <span>24 ساعته,7 روز هفته</span>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <img src="/images/warranty-section-3.svg" alt="logo" />
              <span>امکان پرداخت در محل</span>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <img src="/images/warranty-section-4.svg" alt="logo" />
              <span>هفت روز ضمانت بازگشت کالا</span>
            </div>
          </Link>
          <Link to="/">
            <div className="d-flex">
              <img src="/images/warranty-section-5.svg" alt="logo" />
              <span>ضمانت اصل بودن کالا</span>
            </div>
          </Link>
        </div>
        <hr />

        {/* sellers section */}
        <div id="sellers" className="rtl text-right mt-3 pb-4 px-4">
          <p>فروشندگان این کالا</p>
          <div className="sellers">
            {sellers.map((seller, index) => (
              <div
                className="seller d-flex align-items-center"
                index={index}
                key={index}
              >
                {seller.name == "دیجی کالا" ? (
                  <img src="/images/digikala-logo.png" alt="logo" />
                ) : (
                  <Icon path={mdiStoreCheckOutline} size={1} />
                )}
                <div className="seller-information">
                  <div className="name">{seller.name}</div>
                  {/* seller rates */}
                  <div className="function d-flex">
                    {seller.satisfaction ? (
                      <div className="satisfaction">
                        <span className="value">{seller.satisfaction}</span>
                        &nbsp;
                        <span>رضایت خریداران</span>
                        <span className="seperator me-2"></span>
                        &nbsp;&nbsp;&nbsp;
                      </div>
                    ) : (
                      ""
                    )}

                    {seller.function ? (
                      <div className="rate">
                        <span>عملکرد :</span>&nbsp;
                        <span className="value">{seller.function}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* post info */}
                {seller.post ? (
                  <div className="post d-flex  mt-0">
                    <Icon path={mdiTruckOutline} size={0.8} />
                    <p className="mb-0">{seller.post}</p>
                  </div>
                ) : (
                  ""
                )}
                {/* warranty info */}
                <div className="warranty">
                  <Icon path={mdiShieldCheckOutline} size={0.9} />
                  <span>گارانتی 18 ماهه دیجی کالا</span>
                </div>

                {/* price info */}
                <div className="price d-flex">
                  {seller.offPercent ? (
                    <del>{partition(seller.price)}</del>
                  ) : (
                    ""
                  )}
                  {seller.offPercent ? (
                    <span className="priceValue">
                      {partition(
                        seller.price - (seller.offPercent / 100) * seller.price
                      )}
                    </span>
                  ) : (
                    <span className="priceValue">
                      {partition(seller.price)}
                    </span>
                  )}

                  <span>تومان</span>
                  {seller.offPercent ? (
                    <span className="badge discount-percent">
                      {seller.offPercent}
                      <i>%</i>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <button className="btn btn-sm">افزودن به سبد خرید</button>
                </div>
                <div className="d-flex justify-content-end d-lg-none my-4">
                  <span className="more-sellers-button text-secondary me-auto">
                    فروشنده های بیشتر ...
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* product introduction  section*/}
        <ProductIntroduction />
      </div>
    </div>
  );
}

export default SingleProduct;
