import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import {
  ArrowBackIos,
  Build,
  Laptop,
  LocationOn,
  Menu,
  Store,
  Whatshot,
  Close,
} from "@material-ui/icons";
import {
  mdiTshirtCrew,
  mdiBabyFaceOutline,
  mdiShopping,
  mdiHeartCircle,
  mdiSofa,
  mdiPencilRuler,
  mdiTent,
  mdiBarley,
  mdiGift,
  mdiSale,
  mdiWalletGiftcard,
  mdiGiftOpen,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Dropdown } from "react-bootstrap";
import "../../css/header/SecondNavigation.css";
import AccordionTab from "./AccordionTab";
import AccordionItem from "./AccordionItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

function SecondNavigation({ setShow }) {
  useEffect(() => {
    window.addEventListener("resize", () => {
      setShow(false);
    });
  }, []);

  return (
    <>
      <button
        className="closeNavigationButton d-lg-none me-auto rounded text-capitalize"
        onClick={() => {
          setShow(false);
        }}
      >
        <Close />
      </button>
      <div className="secondNavigation">
        <div className="secondNavigation__right">
          <div className="categoriesBtn">
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="categories">
                <Menu />
                دسته بندی کالا ها
              </Dropdown.Toggle>
              <Dropdown.Menu className="categories-dropdown py-0">
                <div className="d-flex">
                  <div className="base-categories d-flex flex-column ">
                    <AccordionItem
                      text="کالای دیجیتال"
                      Icon={Laptop}
                      key="1"
                      index="1"
                    />
                    <AccordionItem
                      text="خودرو, ابزار و تجهیزات جانبی"
                      Icon={Build}
                      key="2"
                      index="2"
                    />
                    <AccordionItem
                      text="مد و پوشاک"
                      path={mdiTshirtCrew}
                      Icon={Icon}
                      key="3"
                      index="3"
                    />
                    <AccordionItem
                      text="اسباب بازی, کودک و نوزاد"
                      path={mdiBabyFaceOutline}
                      Icon={Icon}
                      key="4"
                      index="4"
                    />
                    <AccordionItem
                      text="کالا های سپر مارکتی"
                      path={mdiShopping}
                      Icon={Icon}
                      key="5"
                      index="5"
                    />
                    <AccordionItem
                      text="زیبایی و سلامت"
                      path={mdiHeartCircle}
                      Icon={Icon}
                      key="6"
                      index="6"
                    />
                    <AccordionItem
                      text="خانه و اشپز خانه"
                      path={mdiSofa}
                      Icon={Icon}
                      key="7"
                      index="7"
                    />
                    <AccordionItem
                      text="کتاب, لوازم التحریر وهنر"
                      path={mdiPencilRuler}
                      Icon={Icon}
                      key="8"
                      index="8"
                    />
                    <AccordionItem
                      text="ورزش و سفر"
                      path={mdiTent}
                      Icon={Icon}
                      key="9"
                      index="9"
                    />
                    <AccordionItem
                      text="محصولات بومی و محلی"
                      path={mdiBarley}
                      Icon={Icon}
                      key="10"
                      index="10"
                    />
                  </div>
                  <div className="small-categories bg-white">
                    {[...Array(10)].map((x, index) => (
                      <AccordionTab key={index + 1} id={index + 1} />
                    ))}
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="navigation__parts">
            <div className="nav__item">
              <Dropdown className="supermarket-dropdown">
                <Dropdown.Toggle variant="transparent" id="supermarket">
                  <Store />
                  <span> سوپرمارکت </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="supermarket">
                  <div className="d-flex">
                    <div className="supermarket__right">
                      <div className="base-category">شگفت‌انگیز سوپرمارکتی</div>
                      <hr className="my-2" />
                      <div className="base-category">سوپرمارکت دیجی‌کالا</div>
                      <div className="category">محصولات پروتئینی</div>
                      <div className="category">تنقلات</div>
                      <div className="category">صبحانه</div>
                      <div className="category">نوشیدنی</div>
                      <div className="category">کالاهای اساسی و خوار و بار</div>
                      <div className="category">خشکبار و شیرینی</div>
                    </div>
                    <div className="supermarket__left d-flex flex-column">
                      <div>
                        <img
                          src="../../images/supermarket.png"
                          alt="supermarket-picture"
                          className="img-fluid jet-image"
                        />
                      </div>
                      <div className="d-flex mt-4">
                        <img
                          className="jet-logo"
                          src="../../images/jet.svg"
                          alt="jet-icon img-fluid"
                        />
                        <div className="d-flex justify-content-between align-items-center px-3 jet-div">
                          <div>
                            <h5>
                              دیجی کالاجت
                              <span>جدید</span>
                            </h5>
                            <p>
                              کالاهای سوپرمارکتی با
                              <span>ارسال رایگان</span>
                              زیر 30 دقیقه
                            </p>
                          </div>
                          <ArrowBackIos />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="nav__item">
              <Dropdown className="discounts-dropdown">
                <Dropdown.Toggle variant="transparent" id="discounts">
                  <FontAwesomeIcon icon={faPercent} className="percentIcon" />
                  <span> تخفیف ها و پیشنهادات </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="discounts">
                  <div className="d-flex">
                    <div className="discounts__right">
                      <div className="title d-flex justify-content-start align-items-center mb-0">
                        <p>مشاهده همه تخفیف‌ها و پیشنهادها</p>
                        <ArrowBackIos />
                      </div>
                      <div className="d-flex">
                        <div className="right-items">
                          <div className="base-category">
                            کالاهای شگفت‌انگیز
                          </div>
                          <div className="base-category">
                            شگفت‌انگیز سوپرمارکتی
                          </div>
                          <div className="base-category">فروش ویژه</div>
                          <div className="category">کالای دیجیتال</div>
                          <div className="category">
                            خودرو، ابزار و تجهیزات صنعتی
                          </div>
                          <div className="category">مد و پوشاک</div>
                          <div className="category">
                            اسباب بازی، کودک و نوزاد
                          </div>
                          <div className="category">کالاهای سوپرمارکتی</div>
                          <div className="category">زیبایی و سلامت</div>
                          <div className="category">خانه و آشپزخانه</div>
                          <div className="category">
                            کتاب، لوازم تحریر و هنر
                          </div>
                        </div>
                        <div className="left-items">
                          <div className="category">محصولات بومی و محلی</div>
                          <ul>
                            <li className="category">
                              عطر کمتر از ۹۹ هزار تومان
                            </li>
                            <li className="category">
                              اسباب بازی کمتر از ۹۹ هزار تومان
                            </li>
                          </ul>
                          <hr />
                          <div className="category">
                            <Whatshot />
                            پرفروش‌ترین‌ کالاها
                          </div>
                          <div className="category">
                            <Icon path={mdiGift} />
                            با هر خرید هدیه بگیرید!
                          </div>
                          <div className="category">
                            <Icon path={mdiSale} />
                            تخفیف پایان فصل
                          </div>
                          <div className="category">
                            <Icon path={mdiWalletGiftcard} />
                            کارت هدیه خرید از دیجی‌کالا
                          </div>
                          <div className="category">
                            <Icon path={mdiGiftOpen} />
                            تازه‌های فروشنده‌های جدید
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="discounts__left d-flex justify-content-center align-items-center">
                      <img src="../../images/discount.jpg" alt="discount" />
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="nav__item">
              <p className="mb-0">دیجی کالای من </p>
            </div>
            <div className="nav__item">
              <Dropdown className="digiplus-dropdown">
                <Dropdown.Toggle variant="transparent" id="digiplus">
                  <img src="../../images/digiplus.svg" alt="digiplus" />
                  <span> دیجی پلاس </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="digiplus">
                  <div className="d-flex">
                    <div className="digiplus__right">
                      <h5>
                        خدمات ویژه کاربران
                        <img
                          className="img-fluid"
                          src="../../images/digiplus-text.svg"
                          alt="digiplus"
                        />
                      </h5>
                      <p>
                        ارسال رایگان بدون محدودیت قیمت، هدیه نقدی و بازگشت کالا
                        تا ۳۰ روز پس از تحویل
                      </p>
                      <Link to="/home" className="px-2">
                        اطلاعات بیشتر و عضویت
                        <ArrowBackIos />
                      </Link>
                      <hr className="mx-3 my-2" />
                      <ul className="px-4 mb-0">
                        <li>
                          کالاهای
                          <img
                            className="img-fluid"
                            src="../../images/digiplus-text.svg"
                            alt="digiplus"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="digiplus__left">
                      <img
                        className="img-fluid mw-100"
                        src="../../images/digiplus-nav-image.jpg"
                        alt="digiplus"
                      />
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="nav__item">
              <p className="mb-0"> دیجی کلاب </p>
            </div>
            <div className="nav__item digipay">
              <img src="../../images/digipay.png" alt="digipay" />
              دیجی پی
            </div>
          </div>
        </div>
        <div className="secondNavigation__left">
          <span> لطفا شهر و استان خود را انتخاب کنید </span>
          <LocationOn />
        </div>
      </div>
    </>
  );
}

export default SecondNavigation;
