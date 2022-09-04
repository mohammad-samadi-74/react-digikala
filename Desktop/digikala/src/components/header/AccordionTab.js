import { ArrowBackIos } from "@material-ui/icons";
import "../../css/header/AccordionTab.css";

function AccordionTab({ id }) {
  let tab1 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته بندی های کالا های دیجیتال</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 co-12">
          <div className="base-category">لوازم جانبی گوشی</div>
          <div className="category">کیف و کاور گوشی</div>
          <div className="category">پاور بانک</div>
          <div className="category">پایه نگه دارنده گوشی</div>

          <div className="base-category">گوشی موبایل</div>
          <div className="category">سامسونگ</div>
          <div className="category">هوآوی</div>
          <div className="category">اپل</div>
          <div className="category">شیاومی</div>
          <div className="category">آنر</div>
          <div className="category">نوکیا</div>

          <div className="base-category">واقعیت مجازی</div>
          <div className="base-category">مچ بند و ساعت هوشمند</div>
        </div>
        <div className="col-lg-3 co-12">
          <div className="base-category">هدفون،هدستوهندزفری</div>
          <div className="base-category">اسپیکر بلوتوث و با سیم</div>
          <div className="base-category">هارد،فلش و ssd</div>
          <div className="base-category">دوربین</div>
          <div className="category">دوربین عکاسی دیجیتال</div>
          <div className="category">دوربین ورزشی و فیلم برداری</div>
          <div className="category">دوربین چاپ سریع</div>
          <div className="base-category">لوازم جانبی دوربین</div>
          <div className="category">لنز</div>
          <div className="category">کیف</div>
          <div className="category">کارت حافظه</div>
          <div className="category">کاغذ چاپ عکس</div>
          <div className="base-category">دوربین دوچشمی و شکاری</div>
        </div>
        <div className="col-lg-3 co-12">
          <div className="base-category">تلسکوپ</div>
          <div className="base-category">پلی لستیشن , ایکس باکس و بازی</div>
          <div className="base-category">کامپیوتر و تجهیزات جانبی</div>
          <div className="category">تجهیزات مخصوص بازی</div>
          <div className="category">مانیتور</div>
          <div className="category">کیس های اسمبل شده</div>
          <div className="category">قطعات داخل کامپیوتر</div>
          <div className="category">موس</div>
          <div className="category">کیبورد</div>
          <div className="base-category">لپ تاپ</div>
          <div className="base-category">لوازم جانبی لپ تاپ</div>
          <div className="category">کیف , کوله و کاور</div>
          <div className="category">کابل صدا , AUX و HDMI</div>
        </div>
        <div className="col-lg-3 co-12">
          <div className="base-category">تبلت</div>
          <div className="base-category">شارژر تبلت و موبایل</div>
          <div className="base-category">کیف , کاور , لوازم جانبی تبلت</div>
          <div className="base-category">باتری</div>
          <div className="base-category">دوربین های تحت شبکه</div>
          <div className="base-category">مودم و تجهیزات شبکه</div>
          <div className="base-category">ماشین های اداری</div>
          <div className="category">تلفن , بی سیم و سانترال</div>
          <div className="category">فکس</div>
          <div className="category">پرینتر</div>
          <div className="category">لوازم جانبی اداری</div>
          <div className="base-category">کتابخوان فیدیبوک</div>
          <div className="base-category">کارت هدیه خرید از دیجی کالا</div>
        </div>
      </div>
    </div>
  );

  let tab2 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته بندی های وسایل نقلیه وصنعتی</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="base-category">خودرو های ایرانی و خارجی</div>
          <div className="base-category">موتور سیکلت</div>
          <div className="base-category">لوازم جانبی خودرو و موتور سیکلت</div>
          <div className="category">لوازم تزیینی</div>
          <div className="category">سیستم صوتی و تصویری</div>
          <div className="category">نظافت و نگهداری خودرو</div>
          <div className="category">کلاه کاسکت و لوازم جانبی موتور</div>
          <div className="base-category">لوازم یدکی خودرو و موتور سیکلت</div>
          <div className="category">دیسک و صفحه کلاچ</div>
          <div className="category">جلوبندی و تعلیق</div>
          <div className="category">چراغ خودرو</div>
          <div className="category">تسمه خودرو</div>
          <div className="category">کمک فنر</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">لوازم مصرفی خودرو و موتور سیکلت</div>
          <div className="category">لاستیک و تایر</div>
          <div className="category">لنت ترمز</div>
          <div className="category">روغن موتور و ضد یخ</div>
          <div className="category">مکمل روغن و سوخت و انواع فیلتر</div>
          <div className="base-category">ابزار برقی</div>
          <div className="category">دریل، پیچ گوشتی برقی و شارژی</div>
          <div className="category">فرز و سنگ رومیزی</div>
          <div className="category">موتور برق</div>
          <div className="category">مکنده و دمنده</div>
          <div className="category">کارواش</div>
          <div className="category">کمپرسور و جک خودرو</div>
          <div className="category">ابزار همه کاره برقی و شارژی</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">ابزار غیر برقی</div>
          <div className="category">ابزار دستی</div>
          <div className="category">مجموعه ابزار</div>
          <div className="category">نردبان</div>
          <div className="category">پیچ گوشتی و فازمتر</div>
          <div className="category">نظم دهنده ابزار</div>
          <div className="category">متر، تراز، اندازه‌گیری دقیق</div>
          <div className="category">لوازم روانکاری</div>
          <div className="category">چسب صنعتی</div>
          <div className="base-category">لوازم و یراق آلات ساختمانی</div>
          <div className="category">شیرآلات</div>
          <div className="category">رنگ</div>
          <div className="category">دستگیره در</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">لوازم باغبانی</div>
          <div className="category">قیچی‌، چاقو و ابزار باغبانی</div>
          <div className="category">بذر و تخم گیاهان</div>
          <div className="category">تبر، بیل و کلنگ</div>
          <div className="category">خاک، کود و آفت کش</div>
          <div className="base-category">نور و روشنایی</div>
          <div className="category">لوسترو آباژور</div>
          <div className="category">لامپ</div>
          <div className="category">چندراهی برق و محافظ ولتاژ</div>
          <div className="base-category">تجهیزات ایمنی و کار</div>
          <div className="category">کفش ایمنی</div>
          <div className="base-category">حفاظتی و امنیتی</div>
          <div className="category">گاوصندوق</div>
        </div>
      </div>
    </div>
  );

  let tab3 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته بندی های وسایل نقلیه وصنعتی</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="base-category">مردانه</div>
          <div className="base-category">لباس مردانه</div>
          <div className="category">تی شرت و پولو شرت</div>
          <div className="category">پیراهن</div>
          <div className="category">شلوار</div>
          <div className="category">لباس زیر</div>

          <div className="base-category">کفش مردانه</div>
          <div className="category">کفش روزمره</div>
          <div className="category">کفش رسمی</div>

          <div className="base-category">اکسسوری مردانه</div>
          <div className="category">ساعت</div>
          <div className="category">کیف</div>
          <div className="category">کمربند</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">زنانه</div>
          <div className="base-category">لباس زنانه</div>
          <div className="category">پوشش اسلامی و مانتو</div>
          <div className="category">بلوز و شومیز</div>
          <div className="category">تی شرت و پولوشرت</div>
          <div className="category">شلوار و سرهمی</div>
          <div className="category">لباس زیر</div>
          <div className="base-category">کفش زنانه</div>
          <div className="category">کفش روزمره</div>
          <div className="category">کفش تخت</div>

          <div className="base-category">اکسسوری زنانه</div>
          <div className="category">ساعت</div>
          <div className="category">کیف</div>
          <div className="category">شال و روسری</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">زیورآلات زنانه</div>
          <div className="category">دستبند</div>
          <div className="category">گوشواره</div>
          <div className="category">گردنبند</div>

          <div className="base-category">زیورآلات طلا زنانه</div>
          <div className="category">دستبند</div>
          <div className="category">گوشواره</div>
          <div className="category">آویز</div>
          <div className="category">گردنبند</div>

          <div className="base-category">زیورآلات نقره زنانه</div>
          <div className="base-category">عینک آفتابی زنانه</div>
          <div className="base-category">عینک آفتابی مردانه</div>
          <div className="category"></div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">پوشاک ورزشی مردانه</div>
          <div className="base-category">پوشاک ورزشی زنانه</div>
          <div className="base-category">کفش ورزشی مردانه</div>
          <div className="base-category">کفش ورزشی زنانه</div>
          <div className="base-category">پوشاک ورزشی پسرانه</div>
          <div className="base-category">پوشاک ورزشی دخترانه</div>
          <div className="base-category">کفش ورزشی پسرانه</div>
          <div className="base-category">کفش ورزشی دخترانه</div>
          <div className="base-category">کوله پشتی مردانه</div>
          <div className="base-category">بچه گانه</div>
          <div className="category">نوزاد</div>
          <div className="category">پسرانه</div>
          <div className="category">دخترانه</div>
        </div>
      </div>
    </div>
  );

  let tab4 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته بندی های اسباب بازی و کودک</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="base-category">بهداشت و حمام کودک و نوزاد</div>
          <div className="category">پوشک</div>
          <div className="category">دستمال مرطوب</div>
          <div className="category">حوله</div>
          <div className="category">وان حمام نوزاد</div>
          <div className="category">مینی واش</div>
          <div className="category">شامپو کودک و نوزاد</div>
          <div className="base-category">پوشاک و کفش کودک و نوزاد</div>
          <div className="category">لباس کودک و لباس نوزادی</div>
          <div className="category">کفش</div>
          <div className="category">کفش ورزشی</div>
          <div className="category">جوراب و پاپوش کودک و نوزاد</div>
          <div className="category">کلاه و پیشبند نوزاد</div>
        </div>

        <div className="col-lg-3 col-12">
          <div className="base-category">تبلت</div>
          <div className="base-category">XBox, PS4 و بازی</div>
          <div className="base-category">اسباب بازی</div>
          <div className="category">فکری و آموزشی</div>
          <div className="category">پازل، لگو و ساختنی</div>
          <div className="category">عروسک و فیگور</div>
          <div className="category">اسپینر، ابزار شوخی و سرگرمی</div>
          <div className="category">تفنگ، تیر و لوازم بازی جنگی</div>

          <div className="base-category">بازی و سرگرمی کودک</div>
          <div className="category">ماشین بازی، موتور، سه چرخه</div>
          <div className="category">دوچرخه</div>
          <div className="category">تشک بازی و پارک بازی</div>
          <div className="category">تاب و سرسره</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">سلامت، ایمنی و مراقبت</div>
          <div className="category">تصفیه هوا</div>
          <div className="category">ترازو</div>
          <div className="category">دوربین و پیجر اتاق کودک</div>
          <div className="category">تب سنج و دماسنج</div>
          <div className="category">محافظ و ابزار ایمنی</div>
          <div className="base-category">خواب کودک</div>
          <div className="category">مبلمان اتاق کودک</div>
          <div className="category">چراغ خواب کودک</div>
          <div className="category">تشک کودک</div>
          <div className="category">سرویس خواب</div>
          <div className="category">پتو</div>
          <div className="category">بالش شیردهی</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">ملزومات گردش و سفر</div>
          <div className="category">کالسکه و کریر</div>
          <div className="category">صندلی خودرو کودک و نوزاد</div>
          <div className="category">ساک لوازم نوزاد</div>
          <div className="category">لوازم جانبی گردش و سفر</div>
          <div className="category">آغوشی</div>

          <div className="base-category">لوازم شخصی</div>
          <div className="category">پستانک و ملزومات</div>
          <div className="category">شیردوش</div>
          <div className="category">شورت آموزشی</div>

          <div className="base-category">غذاخوری</div>
          <div className="category">صندلی غذاخوری</div>
          <div className="category">شیشه شیر، سرلاک، داروخوری</div>
        </div>
      </div>
    </div>
  );

  let tab5 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته بندی های کالا های سوپرمارکتی</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="base-category">کالای اساسی و خوار و بار</div>
          <div className="category">نان</div>
          <div className="category">برنج</div>
          <div className="category">روغن</div>
          <div className="category">قند</div>
          <div className="category">شکر</div>
          <div className="category">سس</div>
          <div className="category">رب و کنسرو گوجه</div>
          <div className="category">خیارشور و ترشیجات</div>
          <div className="category">آبلیمو، آبغوره و سرکه</div>
          <div className="category">ماکارونی، پاستا و رشته</div>
          <div className="category">زعفران، زرشک و تزیینات غذا</div>
          <div className="category">حبوبات و سویا</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">صبحانه</div>
          <div className="category">مربا</div>
          <div className="category">عسل</div>
          <div className="category">حلواشکری، ارده و کنجد</div>

          <div className="base-category">مواد پروتئینی</div>
          <div className="category">سوسیس و کالباس</div>
          <div className="category">گوشت گوسفندی</div>
          <div className="category">گوشت مرغ</div>
          <div className="category">تخم مرغ</div>
          <div className="category">گوشت گاو و گوساله</div>
          <div className="category">میگو</div>
          <div className="category">ماهی</div>
          <div className="category">تن ماهی</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">لبنیات</div>
          <div className="category">شیر</div>
          <div className="category">ماست</div>
          <div className="category">پنیر</div>
          <div className="category">خامه</div>
          <div className="base-category">نوشیدنی ها</div>
          <div className="category">چای</div>
          <div className="category">دمنوش</div>
          <div className="category">قهوه</div>
          <div className="category">آب و آب معدنی</div>
          <div className="category">ماءالشعیر</div>
          <div className="category">نوشابه</div>
          <div className="category">شربت و آبمیوه</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">میوه و سبزی</div>
          <div className="base-category">غذای آماده و نودل</div>
          <div className="base-category">فرآورده‌های منجمد</div>
          <div className="base-category">کنسرو و کمپوت</div>
          <div className="base-category">تنقلات</div>
          <div className="category">شکلات، تافی و آبنبات</div>
          <div className="category">بیسکویت و ویفر</div>
          <div className="category">مغز طعم‌دار خشکبار</div>
          <div className="category">کیک و کلوچه</div>
          <div className="category">چیپس و پاپ کورن</div>
          <div className="category">پفک و اسنک</div>
          <div className="category">آدامس و خوشبوکننده</div>

          <div className="base-category">خشکبار و شیرینی</div>
        </div>
      </div>
    </div>
  );

  let tab6 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته بندی های آرایشی و بهداشتی</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="base-category">لوازم آرایشی</div>
          <div className="category">آرایش چشم و ابرو</div>
          <div className="category">آرایش لب</div>
          <div className="category">آرایش صورت</div>
          <div className="category">مواد آرایش مو</div>
          <div className="category">سنگ پا، بهداشت و زیبایی ناخن</div>
          <div className="category">تجهیزات جانبی آرایشی</div>
          <div className="base-category">لوازم بهداشتی</div>
          <div className="category">کرم و مراقبت پوست</div>
          <div className="category">شامپو و مراقبت مو</div>
          <div className="category">بهداشت دهان و دندان</div>
          <div className="category">بهداشت و مراقبت بدن</div>
          <div className="category">ضد تعریق</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">لوازم شخصی برقی</div>
          <div className="category">ماشین اصلاح صورت</div>
          <div className="category">ماشین اصلاح سر</div>
          <div className="category">سشوار</div>
          <div className="category">اصلاح بدن آقایان</div>
          <div className="category">اصلاح بدن بانوان</div>
          <div className="category">اصلاح موی گوش، بینی و ابرو</div>
          <div className="category">برس پاک سازی</div>
          <div className="category">اتو مو و حالت دهنده</div>
          <div className="category">بیگودی و فر کننده</div>
          <div className="category">مسواک برقی</div>
          <div className="category">لیزر</div>

          <div className="base-category">ست هدیه</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">عطر، ادکلن، اسپری و ست</div>
          <div className="category">مردانه</div>
          <div className="category">زنانه</div>
          <div className="category">جیبی</div>
          <div className="category">اسپری</div>

          <div className="base-category">طلا، نقره و زیورآلات زنانه</div>
          <div className="category">زیورآلات نقره زنانه</div>
          <div className="category">زیورآلات طلا زنانه</div>
          <div className="category">حلقه و انگشتر طلای زنانه</div>
          <div className="category">دستبند طلا زنانه</div>
          <div className="category">گردنبند طلا زنانه</div>
          <div className="category">گوشواره طلا زنانه</div>

          <div className="base-category">زیورآلات نقره مردانه</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">ابزار سلامت و طبی</div>
          <div className="category">مچ بند و ساعت هوشمند</div>
          <div className="category">کالای خواب و استراحت طبی</div>
          <div className="category">ترازو</div>
          <div className="category">تست قندخون</div>
          <div className="category">تب سنج</div>
          <div className="category">فشارسنج</div>
          <div className="category">ابزار مراقبت پا</div>
          <div className="category">نمایشگر ضربان قلب</div>
          <div className="category">ماساژور</div>
          <div className="category">تشک و پتوی برقی</div>
          <div className="category">ویلچر</div>
        </div>
      </div>
    </div>
  );

  let tab7 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته‌بندی‌های خانه، آشپزخانه و ابزار</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="base-category">صوتی و تصویری</div>
          <div className="category">تلویزیون</div>
          <div className="category">سینمای خانگی و ساندبار</div>
          <div className="category">گیرنده دیجیتال تلویزیون</div>
          <div className="base-category">دکوراتیو</div>
          <div className="category">مبلمان خانگی</div>
          <div className="category">دکوراسیون اداری</div>
          <div className="category">آینه</div>
          <div className="category">پرده</div>
          <div className="category">تابلو</div>
          <div className="category">ساعت دیواری ورومیزی</div>
          <div className="category">شمع، گل و گلدان</div>
          <div className="base-category">فرش ماشینی، دستبافت، تابلو</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">لوازم برقی خانگی</div>
          <div className="category">یخچال و فریزر</div>
          <div className="category">ماشین لباسشویی</div>
          <div className="category">ماشین ظرفشویی</div>
          <div className="category">جاروبرقی</div>
          <div className="category">جارو شارژی</div>
          <div className="category">تلفن، بی سیم و سانترال</div>
          <div className="category">کولر، پنکه، تصفیه هوا</div>
          <div className="category">قهوه و چای ساز، آب میوه گیر</div>
          <div className="category">ترازوی آشپزخانه</div>
          <div className="category">اتو بخار و پرسی</div>

          <div className="base-category">حیوانات خانگی، غذا ولوازم</div>
          <div className="category">آکواریوم، غذا و لوازم آبزیان</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">سرو و پذیرایی</div>
          <div className="category">سرویس غذاخوری</div>
          <div className="category">قاشق، چنگال و کارد</div>
          <div className="category">پارچ، بطری، لیوان و ماگ</div>
          <div className="category">ظروف پذیرایی</div>
          <div className="base-category">نور و روشنایی</div>
          <div className="category">لامپ، چراغ و ریسه</div>
          <div className="category">لوستر و چراغتزیینی</div>

          <div className="base-category">آشپزخانه</div>
          <div className="category">سرویس و ظروف پخت و پز</div>
          <div className="category">فلاسک و کلمن</div>
          <div className="category">کتری، قوری، لوازم سرو چای</div>
          <div className="category">ظروف یکبار مصرف</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">مواد شوینده</div>
          <div className="category">شوینده لباس</div>
          <div className="category">تمیزکننده سطوح</div>
          <div className="category">تمیزکننده ظروف</div>
          <div className="base-category">دستمال کاغذی</div>
          <div className="base-category">ملحفه، سرویس، لوازم خواب</div>
          <div className="base-category">حوله و وسایل حمام</div>
          <div className="base-category">پادری، کمد، لوازم اتاق خواب</div>
          <div className="base-category">لوازم دستشویی و روشویی</div>
          <div className="base-category">فندک و لوازم جانبی</div>
          <div className="base-category">گُل، خاک، کود، لوازم باغبانی</div>
        </div>
      </div>
    </div>
  );

  let tab8 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته‌بندی‌های کتاب، لوازم تحریر و هنر</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="base-category">کتاب و مجله</div>
          <div className="category">کتاب چاپی</div>
          <div className="category">مجلات خارجی و داخلی</div>
          <div className="base-category">کتاب صوتی</div>
          <div className="base-category">محتوای آموزشی</div>
          <div className="category">آموزش موسیقی</div>
          <div className="category">آموزش ورزش و سرگرمی</div>
          <div className="category">آموزش زبان</div>
          <div className="category">آموزش نرم افزار و کامپیوتر</div>
          <div className="base-category">نرم افزار</div>
          <div className="base-category">بازی کنسول و کامپیوتر</div>
          <div className="base-category">فیلم سینمایی، سریال و مستند</div>
          <div className="base-category">آلبوم موسیقی</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">لوازم التحریر</div>
          <div className="category">لوازم اداری و اقلام مصرفی</div>
          <div className="category">کیف، کوله پشتی وجامدادی</div>
          <div className="category">چراغ مطالعه</div>
          <div className="category">کاغذ کادو، پاکت و کارت هدیه</div>
          <div className="category">نوشت افزار</div>
          <div className="category">دفتر وکاغذ</div>
          <div className="category">خودکار و روان نویس</div>
          <div className="category">ابزار نقاشی و رنگ آمیزی</div>
          <div className="category">میز تحریر</div>
          <div className="category">آلبوم عکس</div>
          <div className="category">کاغذ چاپ و پرینتر</div>
          <div className="category">مداد و مداد رنگی</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">آلات موسیقی</div>
          <div className="category">لوازم جانبی ادوات موسیقی</div>
          <div className="category">گیتار</div>
          <div className="category">کیبورد و ارگ</div>
          <div className="category">پیانو دیجیتال</div>
          <div className="category">درام، پرکاشن و دف</div>
          <div className="category">تجهیزات استودیویی</div>
          <div className="category">ویولن</div>
          <div className="category">سازهای ایرانی</div>

          <div className="base-category">فرش ماشینی، دستبافت، تابلو</div>
          <div className="category">فرش ماشینی</div>
          <div className="category">فرش دستباف</div>
          <div className="category">تابلو فرش</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">صنایع دستی</div>
          <div className="category">کالاهای مسی</div>
          <div className="category">سفال، سرامیک و چینی</div>
          <div className="category">کیف چرمی</div>
          <div className="category">ترمه،‌ قلمکار و دستبافت</div>
          <div className="category">خاتم، منبت، حصیری و چوبی</div>
          <div className="category">تابلو وساعت</div>
          <div className="category">میناکاری</div>
          <div className="category">فیروزه کوبی</div>
          <div className="category">سوزن دوزی</div>
          <div className="category">محصولات استخوانی</div>
          <div className="category">جعبه و دست سازه های هنری</div>
        </div>
      </div>
    </div>
  );

  let tab9 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته‌بندی‌های ورزش و سفر</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="base-category">پوشاک ورزشی مردانه</div>
          <div className="base-category">پوشاک ورزشی زنانه</div>
          <div className="base-category">کفش ورزشی مردانه</div>
          <div className="base-category">کفش ورزشی زنانه</div>
          <div className="base-category">پوشاک ورزشی پسرانه</div>
          <div className="base-category">پوشاک ورزشی دخترانه</div>
          <div className="base-category">کفش ورزشی پسرانه</div>
          <div className="base-category">کفش ورزشی دخترانه</div>
          <div className="base-category">تجهیزات سفر</div>
          <div className="category">چمدان و ساک</div>
          <div className="category">کیف و کوله پشتی</div>
          <div className="base-category">دوچرخه</div>
          <div className="category">لوازم جانبی دوچرخه</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">کوهنوردی و کمپینگ</div>
          <div className="category">کفش کوهنوردی</div>
          <div className="category">عصای کوهنوردی</div>
          <div className="category">چراغ قوه و چراغ پیشانی</div>
          <div className="category">چاقو و ابزار چند کاره</div>
          <div className="category">قمقمه و فلاسک</div>
          <div className="category">چادر</div>
          <div className="category">کیسه خواب</div>
          <div className="category">زیرانداز سفری</div>

          <div className="base-category">لوازم جانبی کوهنوردی و سفر</div>
          <div className="base-category">چتر</div>
          <div className="base-category">ساک ورزشی</div>
          <div className="base-category">قمقمه و شیکر</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">لوازم ورزشی</div>
          <div className="base-category">ورزش های هوازی وبدنسازی</div>
          <div className="category">تجهیزات جانبی ایروبیک و تناسب اندام</div>
          <div className="category">دمبل</div>
          <div className="category">طناب</div>
          <div className="category">بارفیکس</div>
          <div className="category">تردمیل</div>
          <div className="category">لوازم پوششی و محافظتی ورزشی</div>
          <div className="base-category">ورزش های توپی</div>
          <div className="category">توپ</div>
          <div className="category">راکت</div>

          <div className="base-category">ورزش‌های آبی</div>
          <div className="base-category">ورزش‌های رزمی</div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="base-category">اسکوتر برقی</div>
          <div className="base-category">اسکیت و اسکوتر</div>
        </div>
      </div>
    </div>
  );

  let tab10 = (
    <div className="sm-categories">
      <div className="title d-none d-lg-block">
        <p>
          <span>همه دسته‌بندی‌های محصولات بومی و محلی</span>
          <ArrowBackIos />
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="base-category">خوراکی‌های بومی محلی</div>
          <div className="category">حلوا شکری، ارده و کنجد</div>
          <div className="category">خرمای محلی</div>
          <div className="category">عسل محلی</div>
          <div className="category">عرقیات و گلاب اصیل</div>
          <div className="category">ادویه و چاشنی محلی</div>
          <div className="category">چای محلی</div>
          <div className="category">زعفران، زرشک و تزئینات غذا</div>
          <div className="category">سبزی خشک محلی</div>
          <div className="category">حبوبات و سویا محلی</div>
          <div className="category">قند و نبات محلی</div>
          <div className="category">ماهی تازه</div>
          <div className="category">روغن محلی </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="base-category">خانه و کاشانه بومی محلی</div>
          <div className="base-category">ظروف سنتی</div>
          <div className="category">کاسه و کاسه بشقاب سنتی</div>
          <div className="category">بشقاب سنتی</div>
          <div className="category">پارچ سنتی</div>
          <div className="category">لیوان سنتی</div>
          <div className="category">قندان سنتی</div>
          <div className="category">دیگ و قابلمه سنتی</div>
          <div className="category">شکلات خوری دست‌ساز</div>

          <div className="base-category">ابزار آشپزخانه سنتی</div>
          <div className="category">دیس و سینی سنتی</div>
          <div className="category">تخته سرو سنتی</div>
          <div className="category">سبد دستبافت سنتی</div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="base-category">دکوراتیو سنتی</div>
          <div className="category">آویز سرپرده سنتی</div>
          <div className="category">کیس و کاور سنتی</div>
          <div className="category">گلدان سنتی</div>
          <div className="category"> مجسمه سنتی</div>
          <div className="category">چراغ خواب و آباژور</div>
          <div className="base-category">حمام و خواب</div>
          <div className="category">کوسن سنتی</div>
          <div className="base-category">انواع قالی و قالیچه</div>
          <div className="category">گلیم</div>
          <div className="base-category">پوشیدنی‌های بومی محلی</div>
          <div className="category">پوشاک بومی و محلی</div>
          <div className="category">اکسسوری بومی و محلی</div>
        </div>
      </div>
    </div>
  );

  return (
    <div id={`menu-collapse-tab-${id}`} className={id == 1 ? "activeTab" : ""}>
      {id == 1 ? tab1 : ""}
      {id == 2 ? tab2 : ""}
      {id == 3 ? tab3 : ""}
      {id == 4 ? tab4 : ""}
      {id == 5 ? tab5 : ""}
      {id == 6 ? tab6 : ""}
      {id == 7 ? tab7 : ""}
      {id == 8 ? tab8 : ""}
      {id == 9 ? tab9 : ""}
      {id == 10 ? tab10 : ""}
    </div>
  );
}

export default AccordionTab;
