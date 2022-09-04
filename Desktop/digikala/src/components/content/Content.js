import React from "react";
import Advertise from "./Advertise";
import ProductSection from "./ProductSection";
import SliderAdvertise from "./SliderAdvertise";
import "../../css/content/Content.css";
import ProductOfferSlider from "./ProductOfferSlider";
import MiddleNavigation from "./MiddleNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function Content() {
  return (
    <main>
      <div className="content">
        {/* single product slider section */}
        <div className="container-xl">
          <Advertise src="./images/content/image-1.jpg" key="adv-1" />
          <div className="row">
            <div className="col-sm-4 col-12">
              <div className="d-flex flex-row flex-sm-column">
                <Advertise
                  src="./images/content/image-2.jpg"
                  className="advertise-product"
                  key="adv-2"
                />
                <Advertise
                  src="./images/content/image-3.jpg"
                  className="advertise-product"
                  key="adv-3"
                />
              </div>
            </div>
            <div className="col-sm-8 px-2">
              <SliderAdvertise
                images={[
                  "/images/content/slider-1.jpg",
                  "/images/content/slider-2.jpg",
                  "/images/content/slider-3.jpg",
                  "/images/content/slider-4.jpg",
                  "/images/content/slider-5.jpg",
                  "/images/content/slider-6.jpg",
                  "/images/content/slider-7.jpg",
                  "/images/content/slider-8.jpg",
                ]}
              />
            </div>
          </div>
        </div>

        {/* first products section slider */}
        <ProductSection className="bg-red" logo="/images/content/image-4.png" />

        {/* advertise section */}
        <div className="container-xl d-flex my-4 advertise-row">
          <div className="row">
            <Advertise
              src="./images/content/image-4.jpg"
              key="adv-4"
              className="col-6 col-md-3"
            />
            <Advertise
              src="./images/content/image-5.jpg"
              key="adv-5"
              className="col-6 col-md-3"
            />
            <Advertise
              src="./images/content/image-6.jpg"
              key="adv-6"
              className="col-6 col-md-3"
            />
            <Advertise
              src="./images/content/image-7.jpg"
              key="adv-7"
              className="col-6 col-md-3"
            />
          </div>
        </div>

        {/* second products section slider */}
        <ProductSection
          logo="./images/content/image-9.png"
          className="bg-green"
        />

        {/* advertise section */}
        <div className="container-xl px-0">
          <div className="row mt-4 px-0">
            <div className="col-12 col-sm-6 pr-2">
              <Advertise src="./images/content/image-10.jpg" key="adv-8" />
            </div>
            <div className="col-12 col-sm-6 pl-2">
              <Advertise src="./images/content/image-11.jpg" key="adv-9" />
            </div>
          </div>
        </div>

        {/* products (most recent views category) slider section */}
        <div className="container-xl mt-4 px-0">
          <div className="row flex-row-reverse">
            <div className="col-12 col-lg-9 bg-white py-4 px-3 shadow-sm rounded-lg">
              <ProductOfferSlider title="گوشی موبایل" products={[]} />
            </div>
            {/* offered product */}
            <div className="d-none d-lg-block  col-lg-3 rtl text-right ps-0">
              <div className="moment-offer-product bg-white mr-2 py-4 px-3 shadow-sm rounded-lg h-100">
                <h4>پیشنهاد لحظه ای برای شما</h4>
                <div className="d-flex flex-column justify-content-between">
                  <div className="px-5 my-4">
                    <img
                      src="./images/content/products/product-5.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="title">
                    گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت
                    ظرفیت 256 گیگابایت و 8 گیگابایت رم
                  </div>
                  <div className="d-flex align-items-center my-3 justify-content-end px-2 font-number-b">
                    <div>5800000</div>
                    <span className="me-2 ">تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* middle navigation */}
        <div className="container-xl mt-4 px-0 d-none d-lg-block bg-white shadow-sm rounded-lg">
          <div className="d-flex flex-column p-4">
            <h5 className="middle-navigation-title mt-3 mb-4">
              بیش از 4000 کالا در دسته بندی های مختلف
            </h5>
            <MiddleNavigation />
          </div>
        </div>

        {/* products slider section */}
        <div className="container-xl mt-4 pt-3 px-0">
          <div className="row flex-row-reverse">
            <div className="d-none d-lg-block col-lg-3 rtl text-right pl-4">
              <div className="shadow-lg rounded-lg bg-white h-100 mx-1 px-4 py-4 d-flex flex-column justify-content-center align-items-center customise-panel">
                <img src="./images/content/icons/custom.svg" />
                <h4>شخصی سازی پیشنهاد ها!</h4>
                <p>
                  برای مشاهده پیشنهادهای مناسب خود و همچنین داشتن تجربه بهتر
                  لطفا وارد حساب کاربری شوید.
                </p>
                <a href="#" className="login__button">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  ورود به حساب دیجی کالا
                </a>
                <a className="signup__button" href="#">
                  ثبت نام رایگان در صورت نداشتن حساب کاربری
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-9 bg-white py-4 px-3 shadow-sm rounded-lg">
              <ProductOfferSlider title="کیف وکاور گوش" products={[]} />
            </div>
          </div>
        </div>

        {/* advertise section */}
        <div className="container-xl d-flex my-4 advertise-row px-0">
          <Advertise
            className="pl-0"
            src="./images/content/image-12.jpg"
            key="adv-10"
          />
          <Advertise src="./images/content/image-13.jpg" key="adv-11" />
          <Advertise src="./images/content/image-14.jpg" key="adv-12" />
          <Advertise
            className="pr-0"
            src="./images/content/image-15.jpg"
            key="adv-13"
          />
        </div>

        {/* products slider section */}
        <div className="container-xl bg-white rounded-lg shadow-lg mt-4 pt-3">
          <ProductOfferSlider title="هدفون , هدست و هندزفری" products={[]} />
        </div>

        {/* products slider section */}
        <div className="container-xl bg-white rounded-lg shadow-lg mt-4 pt-3">
          <ProductOfferSlider title="لپ تاپ و الترابوک" products={[]} />
        </div>

        {/* advertise section */}
        <div className="container-xl d-flex my-4 advertise-row px-0">
          <Advertise
            className="pl-0"
            src="./images/content/image-16.jpg"
            key="adv-14"
          />
          <Advertise
            className="pr-0"
            src="./images/content/image-17.jpg"
            key="adv-15"
          />
        </div>

        <div className="container-xl bg-white rounded-lg shadow-lg mt-4 pt-3">
          <ProductOfferSlider title="سایر لوازم خودرو" products={[]} />
        </div>

        <div className="container-xl bg-white rounded-lg shadow-lg mt-4 pt-3">
          <ProductOfferSlider title="کفش ورزشی مردانه" products={[]} />
        </div>

        <div className="container-xl bg-white rounded-lg shadow-lg mt-4 pt-3">
          <ProductOfferSlider title="محصولات پربازدید اخیر" products={[]} />
        </div>

        <div className="container-xl d-flex my-4 advertise-row px-0">
          <Advertise
            className="px-0"
            src="./images/content/image-18.jpg"
            key="adv-15"
          />
        </div>

        <div className="container-xl bg-white rounded-lg shadow-lg mt-4 pt-3">
          <ProductOfferSlider title="منتخب جدید ترین کالاها" products={[]} />
        </div>

        <div className="container-xl bg-white rounded-lg shadow-lg mt-4 pt-3">
          <ProductOfferSlider title="محصولات پرفروش اخیر" products={[]} />
        </div>
      </div>
    </main>
  );
}

export default Content;
