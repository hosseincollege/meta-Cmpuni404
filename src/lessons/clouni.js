export default [

  /* =======================
     فصل ۱ | Cloud Motivation
  ======================= */
  {
    section: "فصل ۱ | Cloud Motivation",
    topics: [
      {
        title: "1.1 همه‌جا",
        content:
          "رایانش ابری به استفاده گسترده از منابع و خدمات محاسباتی آنلاین اشاره دارد که از طریق اینترنت در دسترس هستند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Cloud usage, Online services, Scalability – رایانش ابری، خدمات آنلاین، مقیاس‌پذیری"
          }
        ]
      },
      {
        title: "1.2 محاسبات انعطاف‌پذیر",
        content:
          "ابر بستری برای تأمین منابع محاسباتی منعطف ایجاد می‌کند که می‌توانند متناسب با نیاز رشد یا کاهش یابند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Flexibility, Incremental growth, Cyclic demand – انعطاف‌پذیری، رشد تدریجی، تقاضای چرخه‌ای"
          }
        ]
      },
      {
        title: "1.3 دیوار توان و چند‌هسته‌ای",
        content:
          "محدودیت افزایش فرکانس پردازنده‌ها به دلیل مصرف انرژی و گرما باعث حرکت به سمت پردازنده‌های چند‌هسته‌ای شد.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Power wall, Moore’s Law, Multicore processors – دیوار توان، قانون مور، پردازنده‌های چند‌هسته‌ای"
          }
        ]
      },
      {
        title: "1.4 از چند هسته به چند ماشین",
        content:
          "با رسیدن پردازنده‌ها به محدودیت مقیاس‌پذیری، سیستم‌های توزیع‌شده و خوشه‌ها معرفی شدند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Distributed systems, Clusters, Scalability limits – سیستم‌های توزیع‌شده، خوشه‌ها"
          }
        ]
      },
      {
        title: "1.5 خوشه‌ها و توازن بار",
        content:
          "توزیع بار کاری بین ماشین‌های مختلف، امکان مقیاس‌پذیری وب‌سایت‌ها را فراهم می‌کند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Load balancing, Web scalability, Traffic distribution – متعادل‌سازی بار، توزیع ترافیک"
          }
        ]
      },
      {
        title: "1.6 رک‌های سرور",
        content:
          "سرورها به‌صورت فیزیکی در رک‌ها در مراکز داده قرار می‌گیرند و به توان و خنک‌سازی نیاز دارند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Server racks, Physical infrastructure, Cooling – رک سرور، زیرساخت فیزیکی، خنک‌سازی"
          }
        ]
      },
      {
        title: "1.7 انگیزه اقتصادی دیتاسنتر",
        content:
          "تمرکز سرورها در مراکز داده بزرگ باعث کاهش هزینه و افزایش بهره‌وری منابع می‌شود.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Data center, Cost reduction, Centralization – مرکز داده، کاهش هزینه، تمرکزگرایی"
          }
        ]
      },
      {
        title: "1.8 چرا ابر",
        content:
          "ابر یک انتزاع اینترنتی از منابع محاسباتی با دسترسی از راه دور است.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Cloud concept, Internet abstraction, Remote access – مفهوم ابر، انتزاع اینترنتی"
          }
        ]
      }
    ]
  },

  /* =======================
    فصل ۲ | Elastic Computing and Its Advantages
  ======================= */
  {
    section: "فصل ۲ | Elastic Computing , Advantages",
    topics: [
      {
        title: "2.1 مقدمه",
        content:
          "محاسبات الاستیک امکان افزایش یا کاهش پویا‌ی منابع محاسباتی را متناسب با نیاز فراهم می‌کند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Elastic computing, Virtualization, Cloud scalability, Business models – محاسبات الاستیک، مجازی‌سازی، مقیاس‌پذیری ابری، مدل‌های کسب‌وکار"
          }
        ]
      },
      {
        title: "2.2 ابرهای چندمستاجره",
        content:
          "در ابرهای چندمستاجره، چندین کاربر به‌طور هم‌زمان از یک زیرساخت مشترک استفاده می‌کنند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Multi-tenancy, Server consolidation, Cost reduction, Data isolation – چندمستاجره بودن، ادغام سرورها، کاهش هزینه، جداسازی داده‌ها"
          }
        ]
      },
      {
        title: "2.3 مفهوم محاسبات الاستیک",
        content:
          "محاسبات الاستیک بر تخصیص منابع به‌صورت پویا و پرداخت به‌ازای میزان مصرف تمرکز دارد.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Elastic computing, Dynamic resource allocation, Pay-as-you-go, Peak demand – محاسبات الاستیک، تخصیص پویای منابع، پرداخت به‌ازای مصرف، تقاضای اوج"
          }
        ]
      },
      {
        title: "2.4 سرورهای مجازی",
        content:
          "سرورهای مجازی امکان ایجاد، حذف و تغییر سریع منابع را بدون محدودیت فیزیکی فراهم می‌کنند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Virtualized servers, Rapid provisioning, Physical sharing, Logical isolation – سرورهای مجازی‌سازی‌شده، تأمین سریع منابع، اشتراک فیزیکی، جداسازی منطقی"
          }
        ]
      },
      {
        title: "2.5 ارائه‌دهندگان ابر",
        content:
          "مجازی‌سازی به ارائه‌دهندگان ابر کمک می‌کند تا منابع را بهینه و خدمات را مقیاس‌پذیر مدیریت کنند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Service scaling, Load balancing, Resource utilization, Provider efficiency – مقیاس‌پذیری خدمات، متعادل‌سازی بار، بهره‌وری منابع، کارایی ارائه‌دهنده"
          }
        ]
      },
      {
        title: "2.6 کمک به مشتریان",
        content:
          "مشتریان با استفاده از سرورهای مجازی می‌توانند برنامه‌ها را سریع مستقر و آزمایش کنند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Ease of deployment, Rapid scaling, Testing environments, Virtual isolation – سهولت استقرار، مقیاس‌پذیری سریع، محیط‌های آزمایشی، جداسازی مجازی"
          }
        ]
      },
      {
        title: "2.7 مدل‌های کسب‌وکار",
        content:
          "ارائه‌دهندگان ابر از مدل‌های مختلف خدماتی برای ایجاد درآمد استفاده می‌کنند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Cloud business models, Service layers, Revenue generation, Industry structure – مدل‌های کسب‌وکار ابری، لایه‌های خدمات، تولید درآمد، ساختار صنعت"
          }
        ]
      },
      {
        title: "2.8 زیرساخت به‌عنوان سرویس",
        content:
          "در IaaS منابع فیزیکی مانند سرور و شبکه به‌صورت مجازی به کاربران ارائه می‌شود.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "IaaS, Physical infrastructure, Virtual machines, Network control – زیرساخت به‌عنوان سرویس، زیرساخت فیزیکی، ماشین مجازی، کنترل شبکه"
          }
        ]
      },
      {
        title: "2.9 پلتفرم به‌عنوان سرویس",
        content:
          "PaaS بستری برای توسعه و اجرای نرم‌افزار بدون مدیریت زیرساخت فراهم می‌کند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "PaaS, Application development, Middleware, Runtime environments – پلتفرم به‌عنوان سرویس، توسعه نرم‌افزار، میان‌افزار، محیط‌های زمان اجرا"
          }
        ]
      },
      {
        title: "2.10 نرم‌افزار به‌عنوان سرویس",
        content:
          "SaaS نرم‌افزارها را از طریق وب و بدون نیاز به نصب محلی در اختیار کاربران قرار می‌دهد.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "SaaS, Subscription model, Web-based software, High availability – نرم‌افزار به‌عنوان سرویس، مدل اشتراکی، نرم‌افزار مبتنی بر وب، دسترس‌پذیری بالا"
          }
        ]
      },
      {
        title: "2.11 دسکتاپ به‌عنوان سرویس",
        content:
          "DaaS محیط دسکتاپ کاربران را به‌صورت متمرکز و از راه دور ارائه می‌کند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "DaaS, Remote desktop, Thin client, Centralized computing – دسکتاپ به‌عنوان سرویس، دسکتاپ از راه دور، کلاینت نازک، محاسبات متمرکز"
          }
        ]
      },
      {
        title: "2.12 خلاصه",
        content:
          "این فصل نشان داد که کشش‌پذیری و مجازی‌سازی پایه مدل‌های مختلف خدمات ابری هستند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Elasticity, Virtualization benefits, Cloud service models, IaaS, PaaS, SaaS, DaaS – کشش‌پذیری، مزایای مجازی‌سازی، مدل‌های سرویس ابری، IaaS، PaaS، SaaS، DaaS"
          }
        ]
      }
    ]
  },

  /* =======================
      فصل ۳ | Types of Clouds & Cloud Providers
    ======================= */
  {
    section: "فصل ۳ | Types  & Providers",
    topics: [
      {
        title: "3.1 مقدمه",
        content:
          "این فصل انواع ابرها و مدل‌های مختلف ارائه‌دهندگان خدمات ابری را معرفی می‌کند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Elastic computing, Virtualization, Cloud business models, Cloud adoption – محاسبات الاستیک، مجازی‌سازی، مدل‌های کسب‌وکار ابری، پذیرش ابر"
          }
        ]
      },
      {
        title: "3.2 ابرهای خصوصی و عمومی",
        content:
          "ابرها می‌توانند به‌صورت خصوصی در داخل سازمان یا به‌صورت عمومی توسط ارائه‌دهندگان تجاری عرضه شوند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Private cloud, Public cloud, Internal cloud, Commercial cloud – ابر خصوصی، ابر عمومی، ابر داخلی، ابر تجاری"
          }
        ]
      },
      {
        title: "3.3 ابر خصوصی",
        content:
          "ابر خصوصی زیرساختی اختصاصی برای یک سازمان است.",
        subtopics: [
          {
            title: "تعریف",
            content:
              "ابر خصوصی به‌صورت داخلی و تحت مالکیت کامل سازمان استفاده می‌شود."
          },
          {
            title: "مثال ابر خصوصی",
            content:
              "نمونه‌ها به بهبود بهره‌وری منابع و توازن بار کمک می‌کنند."
          },
          {
            title: "نکته",
            content:
              "مالکیت داخلی امکان اشتراک کنترل‌شده منابع را فراهم می‌کند."
          },
          {
            title: "Keywords",
            content:
              "Private cloud, Internal data center, Resource utilization, Load imbalance, Ownership – ابر خصوصی، مرکز داده داخلی، بهره‌وری منابع، توازن بار، مالکیت"
          }
        ]
      },
      {
        title: "3.4 ابر عمومی",
        content:
          "ابر عمومی توسط ارائه‌دهندگان خارجی ایجاد و منابع آن اجاره داده می‌شوند.",
        subtopics: [
          {
            title: "زیرساخت",
            content:
              "مراکز داده در مالکیت ارائه‌دهنده ابر عمومی قرار دارند."
          },
          {
            title: "Keywords",
            content:
              "Public cloud provider, Leasing, Virtualized servers – ارائه‌دهنده ابر عمومی، اجاره سرویس، سرور مجازی‌سازی‌شده"
          }
        ]
      },
      {
        title: "3.5 مزایای ابر عمومی",
        content:
          "ابر عمومی مزایای اقتصادی و فنی متعددی ارائه می‌دهد.",
        subtopics: [
          {
            title: "اقتصاد مقیاس",
            content:
              "هزینه به‌دلیل مقیاس بالا کاهش می‌یابد."
          },
          {
            title: "تخصص فنی",
            content:
              "ارائه‌دهندگان از نیروی متخصص و فناوری‌های پیشرفته استفاده می‌کنند."
          },
          {
            title: "Keywords",
            content:
              "Economies of scale, Expertise, Advanced services, AI/ML – اقتصاد مقیاس، تخصص، خدمات پیشرفته، هوش مصنوعی"
          }
        ]
      },
      {
        title: "3.6 قفل شدن به ارائه‌دهنده",
        content:
          "وابستگی به یک ارائه‌دهنده می‌تواند تغییر سیستم را دشوار کند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Provider lock-in, Switching cost, Vendor dependency – قفل ارائه‌دهنده، هزینه تغییر، وابستگی به فروشنده"
          }
        ]
      },
      {
        title: "3.7 مزایای ابر خصوصی",
        content:
          "ابر خصوصی کنترل و انطباق بیشتری فراهم می‌کند.",
        subtopics: [
          {
            title: "کنترل و دید",
            content:
              "مدیریت و نظارت مستقیم بر زیرساخت امکان‌پذیر است."
          },
          {
            title: "کاهش تأخیر",
            content:
              "نزدیکی جغرافیایی باعث کاهش latency می‌شود."
          },
          {
            title: "محافظت از افزایش قیمت",
            content:
              "در برابر افزایش قیمت‌های آینده محافظت ایجاد می‌شود."
          },
          {
            title: "Keywords",
            content:
              "Control, Visibility, Compliance, Reduced latency, Cost stability – کنترل، دید، انطباق، کاهش تأخیر، ثبات هزینه"
          }
        ]
      },
      {
        title: "3.8 ابر ترکیبی",
        content:
          "ابر ترکیبی ترکیبی از ابر عمومی و خصوصی است.",
        subtopics: [
          {
            title: "کاربردها",
            content:
              "برای سناریوهای کنترلی و انعطاف‌پذیر مناسب است."
          },
          {
            title: "سرریز محاسبات",
            content:
              "در اوج بار، پردازش به ابر عمومی منتقل می‌شود."
          },
          {
            title: "معایب",
            content:
              "پیچیدگی عملیاتی و مدیریت امنیت افزایش می‌یابد."
          },
          {
            title: "نکته",
            content:
              "به بهینه‌سازی هزینه و مدیریت داده‌های محدود کمک می‌کند."
          },
          {
            title: "Keywords",
            content:
              "Hybrid cloud, Cloud bursting, Overflow computing, Cost optimization – ابر ترکیبی، سرریز ابری، بهینه‌سازی هزینه"
          }
        ]
      },
      {
        title: "3.9 چندابری",
        content:
          "چندابری به استفاده هم‌زمان از چند ارائه‌دهنده ابری اشاره دارد.",
        subtopics: [
          {
            title: "چالش‌ها",
            content:
              "نیازمند هماهنگی، سازگاری و مدیریت پیچیده است."
          },
          {
            title: "Keywords",
            content:
              "Multi-cloud, Interoperability, Data migration, Lock-in avoidance – چندابری، هم‌کنش‌پذیری، انتقال داده، اجتناب از قفل"
          }
        ]
      },
      {
        title: "3.10 هایپراسکیلرها",
        content:
          "هایپراسکیلرها ارائه‌دهندگان ابری با زیرساخت عظیم هستند.",
        subtopics: [
          {
            title: "ارائه‌دهندگان اصلی",
            content:
              "AWS، Azure و Google Cloud بازیگران اصلی این حوزه‌اند."
          },
          {
            title: "رشد بازار",
            content:
              "رشد سریع ابر ناشی از سرمایه‌گذاری گسترده در فناوری‌های نو است."
          },
          {
            title: "Keywords",
            content:
              "Hyperscale, AWS, Azure, GCP, Cloud market growth – هایپراسکیل، آمازون، آژور، گوگل کلاد، رشد بازار ابر"
          }
        ]
      }
    ]
  },

  /* =======================
      فصل ۴ | Data Center Infrastructure and Equipment
    ======================= */
  {
    section: "فصل ۴ | Data Center",
    topics: [
      {
        title: "4.1 مقدمه",
        content:
          "این فصل به معرفی زیرساخت‌ها و تجهیزات فیزیکی مراکز داده می‌پردازد.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Data center infrastructure, Cooling systems, Virtualization, Cloud computing – زیرساخت مرکز داده، سیستم‌های خنک‌کننده، مجازی‌سازی، رایانش ابری"
          }
        ]
      },
      {
        title: "4.2 رک‌ها، راهروها و پادها",
        content:
          "چیدمان فیزیکی مراکز داده شامل رک‌ها، راهروها و پادها برای مدیریت تجهیزات است.",
        subtopics: [
          {
            title: "طراحی منطقی",
            content:
              "طراحی منطقی پادها امکان توسعه ماژولار و تکرارپذیری را فراهم می‌کند."
          },
          {
            title: "نکته",
            content:
              "پادهای از پیش ساخته نصب سریع و آسان را ممکن می‌سازند."
          },
          {
            title: "Keywords",
            content:
              "Data center layout, Racks, Aisles, Pods (PoD), Physical organization, Pod replication, Modular design, Pre-built pods, Point of Delivery – چیدمان مرکز داده، رک‌ها، راهروها، پاد، طراحی ماژولار، پادهای از پیش ساخته"
          }
        ]
      },
      {
        title: "4.3 اندازه پاد",
        content:
          "اندازه پاد بر اساس تعداد رک‌ها و نیاز مقیاس‌پذیری تعیین می‌شود.",
        subtopics: [
          {
            title: "عوامل طراحی",
            content:
              "عوامل طراحی پاد شامل رشد تدریجی و توان و خنک‌کننده است."
          },
          {
            title: "Keywords",
            content:
              "Pod size, Rack count, Modular scaling, Incremental growth, Manageability, Power and cooling – اندازه پاد، تعداد رک، رشد تدریجی، مدیریت‌پذیری، توان و خنک‌کننده"
          }
        ]
      },
      {
        title: "4.4 توان و خنک‌کننده",
        content:
          "تأمین توان و سیستم‌های خنک‌کننده برای پادها نقش حیاتی در پایداری مرکز داده دارند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Power distribution, Cooling systems, Energy efficiency – توزیع توان، سیستم‌های خنک‌کننده، بهره‌وری انرژی"
          }
        ]
      },
      {
        title: "4.5 راهروهای گرم و سرد",
        content:
          "تفکیک راهروهای گرم و سرد مدیریت جریان هوا را بهینه می‌کند.",
        subtopics: [
          {
            title: "گردش هوا",
            content:
              "گردش مداوم هوا مانع تجمع گرما در یک نقطه می‌شود."
          },
          {
            title: "دودکش‌ها",
            content:
              "دودکش‌ها گرما را از نقاط داغ پادها خارج می‌کنند."
          },
          {
            title: "Keywords",
            content:
              "Thermal containment, Hot aisle, Cold aisle, Airflow management, Heat exhaust, Chimney cooling – مهار حرارتی، راهروی گرم، راهروی سرد، مدیریت جریان هوا، خنک‌سازی دودکشی"
          }
        ]
      },
      {
        title: "4.6 مراکز داده چراغ‌خاموش",
        content:
          "در مراکز داده چراغ‌خاموش، عملیات بدون حضور نیروی انسانی انجام می‌شود.",
        subtopics: [
          {
            title: "مزایا",
            content:
              "مدل چراغ‌خاموش باعث کاهش هزینه، افزایش امنیت و کاهش خطا می‌شود."
          },
          {
            title: "نکته",
            content:
              "مدیریت خودکار ریسک حملات و خطاهای انسانی را کاهش می‌دهد."
          },
          {
            title: "Keywords",
            content:
              "Lights-out data center, Automation, Remote management, Energy efficiency – مرکز داده چراغ‌خاموش، خودکارسازی، مدیریت از راه دور، بهره‌وری انرژی"
          }
        ]
      },
      {
        title: "4.7 آینده خنک‌کننده مایع",
        content:
          "خنک‌کننده مایع راهکاری برای مراکز داده با تراکم بالا محسوب می‌شود.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Liquid cooling, Heat transfer efficiency, High-density computing – خنک‌کننده مایع، کارایی انتقال حرارت، محاسبات با تراکم بالا"
          }
        ]
      }
    ]
  },

  /* =======================
      فصل ۵ | Virtual Machines, Virtualization, and Cloud Migration
    ======================= */
  {
    section: "فصل ۵ | Virtual Machines, Migration",
    topics: [
      {
        title: "5.1 مقدمه",
        content:
          "این بخش مفاهیم پایه ماشین‌های مجازی و مجازی‌سازی در رایانش ابری را معرفی می‌کند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Virtualization, Virtual machines (VM), Elastic computing, Cloud infrastructure – مجازی‌سازی، ماشین مجازی، محاسبات الاستیک، زیرساخت ابری"
          }
        ]
      },
      {
        title: "5.2 انواع مجازی‌سازی",
        content:
          "روش‌های مختلف پیاده‌سازی مجازی‌سازی در سیستم‌ها بررسی می‌شوند.",
        subtopics: [
          {
            title: "شبیه‌سازی نرم‌افزاری",
            content:
              "در شبیه‌سازی نرم‌افزاری، دستورالعمل‌ها به‌صورت نرم‌افزاری اجرا می‌شوند."
          },
          {
            title: "شبیه‌سازی نرم‌افزاری (نکته)",
            content:
              "این روش به دلیل سربار بالا برای مراکز داده مناسب نیست."
          },
          {
            title: "پارا‌مجازی‌سازی",
            content:
              "پارا‌مجازی‌سازی نیازمند تغییر در سیستم‌عامل مهمان است."
          },
          {
            title: "پارا‌مجازی‌سازی (نکته)",
            content:
              "اجرای سریع‌تر با کنترل مستقیم هایپروایزر حاصل می‌شود."
          },
          {
            title: "Keywords",
            content:
              "Virtualization approaches, Software emulation, Para-virtualization, Full virtualization – شبیه‌سازی نرم‌افزاری، پارا‌مجازی‌سازی، مجازی‌سازی کامل"
          }
        ]
      },
      {
        title: "5.3 مجازی‌سازی کامل",
        content:
          "مجازی‌سازی کامل امکان اجرای سیستم‌عامل‌های مختلف بدون تغییر را فراهم می‌کند.",
        subtopics: [
          {
            title: "شبیه‌سازی دستورالعمل‌های تجاری",
            content:
              "امکان اجرای سیستم‌عامل‌های تجاری بدون تغییر فراهم است."
          },
          {
            title: "تأسیسات و عملیات ایزوله",
            content:
              "ماشین‌های مجازی به‌صورت کاملاً ایزوله اجرا می‌شوند."
          },
          {
            title: "اجرای کارآمد",
            content:
              "اجرای نزدیک به سرعت سخت‌افزار ممکن می‌شود."
          },
          {
            title: "مجازی‌سازی کامل (نکته)",
            content:
              "شفافیت اجرای دستورالعمل‌ها باعث کارایی بالا می‌شود."
          },
          {
            title: "Keywords",
            content:
              "Commercial instruction set, VM isolation, Native performance – دستورالعمل تجاری، ایزوله‌سازی VM، عملکرد نزدیک به بومی"
          }
        ]
      },
      {
        title: "5.4 VM و هایپروایزر",
        content:
          "ساختار مفهومی ماشین‌های مجازی و نقش هایپروایزر تشریح می‌شود.",
        subtopics: [
          {
            title: "سازماندهی سیستم‌های VM",
            content:
              "ساختار مفهومی سیستم‌های ماشین مجازی بررسی می‌شود."
          },
          {
            title: "هایپروایزر نوع ۱",
            content:
              "هایپروایزر نوع ۱ مستقیماً روی سخت‌افزار اجرا می‌شود."
          },
          {
            title: "Keywords",
            content:
              "VM architecture, Type 1 hypervisor, Bare-metal – معماری VM، هایپروایزر نوع ۱، اجرای مستقیم"
          }
        ]
      },
      {
        title: "5.5 سطوح دسترسی و امنیت اجرای VM",
        content:
          "سطوح دسترسی پردازنده نقش مهمی در امنیت و کارایی VM دارند.",
        subtopics: [
          {
            title: "اجرای کارآمد و سطوح دسترسی",
            content:
              "سطوح دسترسی پردازنده در اجرای VM نقش کلیدی دارند."
          },
          {
            title: "حالت کاربر و هسته",
            content:
              "تفکیک حالت کاربر و هسته امنیت سیستم را افزایش می‌دهد."
          },
          {
            title: "Keywords",
            content:
              "Privilege levels, Kernel mode, User mode – سطوح دسترسی، حالت هسته، حالت کاربر"
          }
        ]
      },
      {
        title: "5.6 مهاجرت به ابر",
        content:
          "مهاجرت به ابر شامل انتقال برنامه‌ها و زیرساخت به محیط ابری است.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Cloud migration, On-premise to cloud, Cost optimization – مهاجرت ابری، انتقال از دیتاسنتر، بهینه‌سازی هزینه"
          }
        ]
      },
      {
        title: "5.7 چالش‌ها و ملاحظات مهاجرت",
        content:
          "مهاجرت به ابر نیازمند بررسی چالش‌های فنی و سازمانی است.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Security, Compatibility, Downtime – امنیت، سازگاری، زمان ازکارافتادگی"
          }
        ]
      },
      {
        title: "5.8 استراتژی‌های مهاجرت 6R",
        content:
          "شش استراتژی اصلی برای مهاجرت سیستم‌ها به ابر معرفی می‌شوند.",
        subtopics: [
          {
            title: "Rehost و Replatform",
            content:
              "انتقال مستقیم یا نیمه‌بهینه به محیط ابری انجام می‌شود."
          },
          {
            title: "Repurchase و Refactor",
            content:
              "استفاده از SaaS یا بهینه‌سازی کد مدنظر است."
          },
          {
            title: "Rearchitect و Retire و Retain",
            content:
              "سیستم‌ها بازطراحی، حذف یا نگه‌داری می‌شوند."
          },
          {
            title: "Keywords",
            content:
              "6R strategy, Lift and shift, SaaS, Microservices – استراتژی ۶R، انتقال مستقیم، SaaS، میکروسرویس"
          }
        ]
      },
      {
        title: "5.9 مراحل مهاجرت",
        content:
          "گام‌های اصلی فرآیند مهاجرت تشریح می‌شوند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Assessment, Planning, Migration, Optimization, CI/CD – ارزیابی، برنامه‌ریزی، انتقال، بهینه‌سازی"
          }
        ]
      },
      {
        title: "5.10 ابزارهای مهاجرت",
        content:
          "ابزارهای رایج برای خودکارسازی مهاجرت معرفی می‌شوند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Cloud migration tools, Infrastructure as Code, Terraform – ابزار مهاجرت ابری، زیرساخت به‌عنوان کد، تررافورم"
          }
        ]
      },
      {
        title: "5.11 کانتینرها و Cloud-Native",
        content:
          "کانتینرها به‌عنوان مجازی‌سازی سبک در معماری‌های مدرن معرفی می‌شوند.",
        subtopics: [
          {
            title: "مقدمه کانتینرها",
            content:
              "کانتینرها به‌عنوان مجازی‌سازی سبک معرفی می‌شوند."
          },
          {
            title: "اهمیت کانتینرها",
            content:
              "کانتینرها توسعه و استقرار را ساده می‌کنند."
          },
          {
            title: "کانتینر vs VM",
            content:
              "تفاوت‌های کلیدی کانتینر و ماشین مجازی بررسی می‌شود."
          },
          {
            title: "Keywords",
            content:
              "Containers, Docker, Microservices – کانتینرها، داکر، میکروسرویس"
          }
        ]
      },
      {
        title: "5.12 میکروسرویس",
        content:
          "معماری میکروسرویس و ابزارهای اصلی آن معرفی می‌شوند.",
        subtopics: [
          {
            title: "معماری میکروسرویس",
            content:
              "سیستم به سرویس‌های مستقل تقسیم می‌شود."
          },
          {
            title: "میکروسرویس و کانتینر",
            content:
              "استقرار میکروسرویس‌ها با کانتینر انجام می‌شود."
          },
          {
            title: "Docker",
            content:
              "داکر ابزار اصلی مدیریت کانتینرها است."
          },
          {
            title: "معماری Docker",
            content:
              "اجزای اصلی معماری داکر تشریح می‌شوند."
          },
          {
            title: "Keywords",
            content:
              "Docker engine, Images, Container deployment – موتور داکر، ایمیج، استقرار کانتینری"
          }
        ]
      },
      {
        title: "5.13 Kubernetes",
        content:
          "کوبرنیتس برای مدیریت، مقیاس‌پذیری و استقرار کانتینرها استفاده می‌شود.",
        subtopics: [
          {
            title: "معماری Kubernetes",
            content:
              "ساختار نودها و اجزای اصلی کوبرنیتس توضیح داده می‌شود."
          },
          {
            title: "کاربردهای واقعی",
            content:
              "نمونه‌های واقعی پذیرش کانتینرها بررسی می‌شوند."
          },
          {
            title: "مطالعه موردی فروشگاه آنلاین",
            content:
              "سناریوی واقعی استقرار فروشگاه اینترنتی بررسی می‌شود."
          },
          {
            title: "Keywords",
            content:
              "Kubernetes, Pods, Services, Scaling – کوبرنیتس، پاد، سرویس، مقیاس‌پذیری"
          }
        ]
      },
      {
        title: "5.14 جمع‌بندی",
        content:
          "نکات کلیدی فصل به‌صورت خلاصه مرور می‌شوند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Virtualization summary, Containers, Cloud migration – جمع‌بندی مجازی‌سازی، کانتینرها، مهاجرت ابری"
          }
        ]
      }
    ]
  },

  /* =======================
      فصل ۶ | Cloud Computing Concepts and Models
    ======================= */
  {
    section: "فصل ۶ | Concepts and Models",
    topics: [
      {
        title: "6.1 مقدمه",
        content:
          "این فصل مفاهیم پایه رایانش ابری و مدل‌های مختلف آن را معرفی می‌کند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Cloud computing, Shared resources, Internet-based services – رایانش ابری، منابع اشتراکی، سرویس‌های مبتنی بر اینترنت"
          }
        ]
      },
      {
        title: "6.2 رایانش در محل (On-Premises)",
        content:
          "مدل سنتی مالکیت زیرساخت و مدیریت محلی منابع محاسباتی بررسی می‌شود.",
        subtopics: [
          {
            title: "مدل مالکیت (رشد)",
            content:
              "رشد سرویس‌ها نیازمند خرید و تکرار سخت‌افزار است."
          },
          {
            title: "مدل مالکیت (جهانی)",
            content:
              "گسترش جهانی در مدل سنتی پیچیده و پرهزینه است."
          },
          {
            title: "Keywords",
            content:
              "Service expansion, Hardware replication, Global expansion, Data replication – گسترش سرویس، تکثیر سخت‌افزار، گسترش جهانی، تکثیر داده"
          }
        ]
      },
      {
        title: "6.3 رایانش مدل اجاره‌ای",
        content:
          "در این مدل منابع محاسباتی به‌صورت اشتراکی و اجاره‌ای استفاده می‌شوند.",
        subtopics: [
          {
            title: "مدل اجاره‌ای",
            content:
              "منابع از طریق اشتراک و مرورگر وب در دسترس قرار می‌گیرند."
          },
          {
            title: "نقش ارائه‌دهنده",
            content:
              "ارائه‌دهنده مسئول مراکز داده و زیرساخت است."
          },
          {
            title: "Keywords",
            content:
              "Rental model, Subscription, Data centers, Internet connection – مدل اجاره‌ای، اشتراک، مراکز داده، اتصال اینترنت"
          }
        ]
      },
      {
        title: "6.4 سرویس‌های مدل ابری",
        content:
          "ابر منابع محاسباتی و تحلیلی را به‌عنوان سرویس ارائه می‌دهد.",
        subtopics: [
          {
            title: "تله‌متری",
            content:
              "تله‌متری امکان اندازه‌گیری و پایش از راه دور را فراهم می‌کند."
          },
          {
            title: "Keywords",
            content:
              "Compute, Storage, Networking, Analytics, Telemetry – محاسبات، ذخیره‌سازی، شبکه، تحلیل، تله‌متری"
          }
        ]
      },
      {
        title: "6.5 فناوری‌های اصلی رایانش ابری",
        content:
          "سه فناوری اصلی برای پیاده‌سازی سرویس‌های ابری معرفی می‌شوند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Virtual machines, Containers, Serverless – ماشین‌های مجازی، کانتینرها، سرورلس"
          }
        ]
      },
      {
        title: "6.6 مزایای رایانش ابری",
        content:
          "ابر مجموعه‌ای از مزایای فنی و اقتصادی ارائه می‌دهد.",
        subtopics: [
          {
            title: "چابک",
            content:
              "نیاز به نگهداری و ارتقاء سخت‌افزار حذف می‌شود."
          },
          {
            title: "PAYG",
            content:
              "مدل پرداخت بر اساس میزان مصرف باعث کاهش هزینه می‌شود."
          },
          {
            title: "مقیاس‌پذیر",
            content:
              "افزایش منابع به‌صورت عمودی یا افقی امکان‌پذیر است."
          },
          {
            title: "مقیاس عمودی در مقابل افقی",
            content:
              "هر روش مزایا و محدودیت‌های خاص خود را دارد."
          },
          {
            title: "الاستیک",
            content:
              "مدیریت خودکار منابع بر اساس بار کاری انجام می‌شود."
          },
          {
            title: "قابل اعتماد",
            content:
              "داده‌ها در چندین مکان پشتیبان‌گیری می‌شوند."
          },
          {
            title: "امن",
            content:
              "ابر از امنیت فیزیکی و منطقی پیشرفته استفاده می‌کند."
          },
          {
            title: "تحمل خطا",
            content:
              "در صورت خرابی، درخواست‌ها مسیریابی مجدد می‌شوند."
          },
          {
            title: "بازیابی فاجعه",
            content:
              "امکان بازگردانی سریع داده‌ها وجود دارد."
          },
          {
            title: "منطبق",
            content:
              "ابر با استانداردها و مقررات بین‌المللی سازگار است."
          },
          {
            title: "Keywords",
            content:
              "Scalability, Elasticity, Security, Compliance, Disaster recovery – مقیاس‌پذیری، الاستیسیته، امنیت، انطباق، بازیابی فاجعه"
          }
        ]
      },
      {
        title: "6.7 مفاهیم هزینه در رایانش ابری",
        content:
          "دو مفهوم کلیدی هزینه در ابر بررسی می‌شوند.",
        subtopics: [
          {
            title: "CAPEX در مقابل OPEX",
            content:
              "تفاوت هزینه‌های سرمایه‌ای و عملیاتی توضیح داده می‌شود."
          },
          {
            title: "CAPEX و OPEX در ابر",
            content:
              "ابر هزینه‌ها را از CAPEX به OPEX تبدیل می‌کند."
          },
          {
            title: "Keywords",
            content:
              "CAPEX, OPEX, Fixed cost, Operational cost – هزینه سرمایه‌ای، هزینه عملیاتی، هزینه ثابت، هزینه جاری"
          }
        ]
      },
      {
        title: "6.8 مدل‌های استقرار ابر",
        content:
          "ابر در سه مدل مختلف استقرار ارائه می‌شود.",
        subtopics: [
          {
            title: "ابر عمومی",
            content:
              "منابع از ارائه‌دهندگان بزرگ اجاره می‌شوند."
          },
          {
            title: "ابر خصوصی",
            content:
              "زیرساخت به‌صورت اختصاصی استفاده می‌شود."
          },
          {
            title: "ابر هیبریدی",
            content:
              "ترکیبی از ابر عمومی و خصوصی است."
          },
          {
            title: "Keywords",
            content:
              "Public cloud, Private cloud, Hybrid cloud – ابر عمومی، ابر خصوصی، ابر هیبریدی"
          }
        ]
      },
      {
        title: "6.9 دسته‌بندی سرویس‌های ابری",
        content:
          "سرویس‌های ابری در سه دسته اصلی ارائه می‌شوند.",
        subtopics: [
          {
            title: "IaaS",
            content:
              "مدل اجاره زیرساخت و مدیریت سیستم‌عامل است."
          },
          {
            title: "PaaS",
            content:
              "پلتفرم اجرای اپلیکیشن و پایگاه داده را ارائه می‌دهد."
          },
          {
            title: "SaaS",
            content:
              "نرم‌افزار به‌صورت آماده و مدیریت‌شده استفاده می‌شود."
          },
          {
            title: "Keywords",
            content:
              "IaaS, PaaS, SaaS, Virtual machine, Web apps – زیرساخت به‌عنوان سرویس، پلتفرم به‌عنوان سرویس، نرم‌افزار به‌عنوان سرویس"
          }
        ]
      },
      {
        title: "6.10 منابع محاسباتی آژور",
        content:
          "سرویس‌های محاسباتی اصلی مایکروسافت آژور معرفی می‌شوند.",
        subtopics: [
          {
            title: "Keywords",
            content:
              "Azure Virtual Machines, Containers, App Services, Serverless – ماشین مجازی آژور، کانتینرها، سرویس اپلیکیشن، سرورلس"
          }
        ]
      }
    ]
  }

];
