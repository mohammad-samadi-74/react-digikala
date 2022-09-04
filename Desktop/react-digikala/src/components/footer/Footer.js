import {
  ChevronLeft,
  ExpandLess,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import Aparat from "./../../images/icons/aparat.svg";
import Enamad from "./../../images/enamad.png";
import Kasbokar from "./../../images/kasbokar.png";
import Rezi from "./../../images/rezi.png";
import "../../css/footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-white mt-4 border-top" id="footer">
        <div className="container-xl">
          {/* logo and phone number */}
          <div className="d-flex justify-content-between align-items-center mt-4 flex-lg-r">
            <a href="#pagTop" className="back-to-top-button">
              <ExpandLess /> بازگشت به بالا
            </a>
            <img className="footer-logo" src="/images/logo-2.svg" alt="logo" />
          </div>
          <div className="d-flex rtl phone-number">
            <span>تلفن پشتیبانی:</span>
            <span className="number"> ۶۱۹۳۰۰۰۰ - ۰۲۱ </span>
            <span className="number"> ۶۲۹۹۹۹۱۱ - ۰۲۱ </span>
            <span>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</span>
          </div>
          {/* logo and phone number */}
          {/* post options */}
          <div className="post">
            <div>
              <img src="/images/post-1.svg" alt="post-logo" />
              <span>امکان تحویل اکسپرس</span>
            </div>
            <div>
              <img src="/images/post-2.svg" alt="post-logo" />
              <span>امکان پرداخت در محل</span>
            </div>
            <div>
              <img src="/images/post-3.svg" alt="post-logo" />
              <span>7 روز هفته و 24 ساعته</span>
            </div>
            <div>
              <img src="/images/post-4.svg" alt="post-logo" />
              <span>7 روز ضمانت بازگشت کالا</span>
            </div>
            <div>
              <img src="/images/post-5.svg" alt="post-logo" />
              <span>ضمانت اصل بودن کالا</span>
            </div>
          </div>
          {/* post options */}
          <hr />

          <div className="footer-navigation rtl">
            <div className="row">
              {/* navigation */}
              <div className="col-lg-3 col-12">
                <nav>
                  <h3>با دیجی کالا</h3>
                  <ul>
                    <li>
                      <a href="#">اتاق خبر دیجی کالا</a>
                    </li>
                    <li>
                      <a href="#">فروش در دیجی کالا</a>
                    </li>
                    <li>
                      <a href="#">فرصت های شغلی</a>
                    </li>
                    <li>
                      <a href="#">تماس با دیجی کالا</a>
                    </li>
                    <li>
                      <a href="#">درباره دیجی کالا</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 col-12">
                <nav>
                  <h3>خدمات مشتریان</h3>
                  <ul>
                    <li>
                      <a href="#">پاسخ به پرسش های متداول</a>
                    </li>
                    <li>
                      <a href="#">رویه های بازگرداندن کالا</a>
                    </li>
                    <li>
                      <a href="#">شرایط استفاده</a>
                    </li>
                    <li>
                      <a href="#">حریم خصوصی</a>
                    </li>
                    <li>
                      <a href="#">گزارش باگ</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 col-12">
                <nav>
                  <h3>راهنمای خرید از دیجی کالا</h3>
                  <ul>
                    <li>
                      <a href="#">نحوه ثبت سفارش</a>
                    </li>
                    <li>
                      <a href="#">رویه ارسال سفارش</a>
                    </li>
                    <li>
                      <a href="#">شیوه های پرداخت</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 col-12 d-flex flex-column">
                <p>با ما همراه باشید.</p>
                <div className="footer-socials">
                  <span>
                    <a href="#" className="instagram">
                      <Instagram />
                    </a>
                  </span>
                  <span>
                    <a href="#" className="twitter">
                      <Twitter />
                    </a>
                  </span>
                  <span>
                    <a href="#" className="linkedIn">
                      <LinkedIn />
                    </a>
                  </span>
                  <span>
                    <a href="#" className="aparat">
                      <img src={Aparat} alt="aparat" />
                    </a>
                  </span>
                </div>
                <p>از جدیدترین تخفیف‌ها باخبر شوید.</p>
                <div className="d-flex news">
                  <input
                    type="text"
                    placeholder="آدرس ایمیل خود را وارد کنید."
                  />
                  <button>ثبت</button>
                </div>
              </div>
              {/* navigation */}
            </div>
            <div className="app-download d-flex justify-content-between align-items-center">
              <div className="app-download__right">
                <img src="/images/applogo.svg" alt="applogo" />
                <p>دانلود اپلیکیشن دیجی کالا</p>
              </div>
              <div className="app-download__left">
                <div className="playstore">
                  <img src="/images/playstore.svg" alt="playstore" />
                </div>
                <div className="bazar">
                  <img src="/images/bazar.svg" alt="bazar" />
                </div>
                <div className="myket">
                  <img src="/images/myket.png" alt="myket" />
                </div>
                <div className="sib">
                  <img src="/images/sib.svg" alt="sib" />
                </div>
              </div>
            </div>
            <div className="row copyright rtl">
              <div className="col-lg-8 col-12 description">
                <h5>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h5>
                <p>
                  دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با
                  بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷
                  روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام
                  با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران
                  تبدیل شود. به محض ورود به سایت دیجی‌کالا با دنیایی از کالا رو
                  به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند
                  در اینجا پیدا خواهید کرد.
                  <br />
                  مشاهده بیشتر
                  <ChevronLeft />
                </p>
              </div>
              <div className="col-lg-4 col-12">
                <div className="d-flex copyright-images">
                  <div>
                    <a href="#">
                      <img src={Rezi} alt="rezi" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={Kasbokar} alt="kasbokar" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={Enamad} alt="enamad" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center copyright-text">
                <p>
                  استفاده از مطالب فروشگاه اینترنتی دیجی‌کالا فقط برای مقاصد
                  غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق
                  به شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) می‌باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* brands */}
      <div className="container-fluid brands-container px-0">
        <div className="container-xl brands px-0">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-1.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-2.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-3.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-4.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-5.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-6.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-7.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-8.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-9.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-10.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-11.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-12.svg" alt="brand" />
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
              <a href="#">
                <img src="/images/brand-13.svg" alt="brand" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* brands */}
    </footer>
  );
}

export default Footer;
