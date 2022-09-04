import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

function SPInfo() {
  const [info, setInfo] = useState(false);

  const productInformation = [
    { name: "ابعاد", value: "۱۶۴x۷۵.۸x۸.۹ " },
    { name: "وزن", value: "۲۰۵ گرم" },
    { name: "توضیحات سیم کارت", value: "سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر) " },
    { name: "ساختار بدنه", value: "قاب پشتی و فریم از پلاستیک " },
    { name: "تعداد سیم کارت", value: "دو عدد " },
    {
      name: "پردازنده‌ی مرکزی",
      value: "Quad-Core Cortex-A۵۵ &amp; Quad-core Cortex-A۵۵ CPU ",
    },
    { name: "حافظه داخلی", value: "۶۴ گیگابایت " },
    { name: "مقدار RAM", value: "چهار گیگابایت " },
    { name: "اندازه", value: "۶.۵ اینچ" },
    { name: "رزولوشن", value: "۱۶۰۰ × ۷۲۰ پیکسل" },
    { name: "فن‌آوری موبایل", value: ["A-GPS", "GLONASS", "GALILEO", "BDS"] },
    {
      name: "قابلیت‌های دوربین",
      value:
        "دارای چهار دوربین در قاب پشتی | دوربین‌هایی با رزولوشن ۴۸، ۵، ۲ و ۲ مگاپیکسل - دوربین اول از نوع عریض (Wide)، با رزولوشن ۴۸ مگاپیکسل، دریچه‌ی دیافراگم f/۲.۰، فاصله کانونی لنز ۲۶ میلی‌متر (Focal Length ۲۶ mm) و مجهز به فناوری فوکوس اتوماتیک از نوع AF - دوربین دوم از نوع فوق‌عریض (Ultrawide) با رزولوشن ۵ مگاپیکسل، دریچه‌ی دیافراگم f/۲.۲ - دوربین سوم از نوع ماکرو (Macro) با رزولوشن ۲ مگاپیکسل و دریچه‌ی دیافراگم f/۲.۴ - دوربین چهارم برای ایجاد عمق تصویر (Depth) با رزولوشن ۲ مگاپیکسل و دریچه‌ی دیافراگم f/۲.۴ قابلیت عکاسی پانوراما (Panorama) قابلیت عکاسی HDR ",
    },
    {
      name: "فیلمبرداری",
      value: "رزولوشن ۱۰۸۰ × ۱۹۲۰ و سرعت ۳۰ فریم بر ثانیه (۱۰۸۰p@۳۰FPS) ",
    },
    { name: "سیستم عامل", value: "Android ۱۱ " },
    {
      name: "مشخصات باتری",
      value:
        "لیتیوم-پلیمری با ظرفیت ۵۰۰۰ میلی آمپر ساعت امکان شارژ سریع باتری با توان ۱۵ وات (Fast Battery Charging ۱۵W) ",
    },
  ];

  return (
    <div id="product-info" className="rtl text-right">
      <h4>مشخصات</h4>
      <div className={!info ? "ellipces-collapse" : ""}>
        <ul>
          {productInformation.map((item) => (
            <li key={item.name}>
              <div className="name">{item.name}</div>
              <div className="value">
                {typeof item.value == "string" ? (
                  item.value
                ) : (
                  <div className="d-flex flex-column">
                    {item.value.map((val) => (
                      <div key={val}>{val}</div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="moreButtonStyle mt-2"
        onClick={() => {
          setInfo(!info);
        }}
      >
        {!info ? "بیشتر" : "بستن"}
        <Icon path={mdiChevronLeft} size={1} />
      </button>
    </div>
  );
}

export default SPInfo;
