import { useMemo, useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("ko");

  const content = useMemo(
    () => ({
      ko: {
        brand: "베스트1 에어컨",
        topLine: "믿음과 신뢰를 바탕으로 최고의 서비스를 제공합니다",
        heroTitle: "정확한 진단 · 깔끔한 설치 · 신속한 수리",
        heroDesc:
          "텍사스 지역 상업용 및 가정용 에어컨·히터·냉장/냉동 장비 설치 및 수리를 도와드립니다.",
        callNow: "지금 전화하기",
        getQuote: "문의하기",
        nav: {
          services: "서비스",
          about: "회사소개",
          contact: "연락처",
          license: "라이센스",
        },
        trustItems: [
          "상업용 & 가정용 서비스",
          "정확한 진단과 정직한 가격",
          "주정부 면허 보유 및 책임보험 가입",
        ],
        servicesTitle: "서비스 항목",
        servicesSubtitle: "현재 안내용 초안입니다. 세부 내용은 추후 업데이트 가능합니다.",
        services: [
          {
            title: "에어컨 / 히터",
            desc: "냉방 및 난방 시스템 진단, 수리, 설치, 교체",
          },
          {
            title: "냉장고 / 냉동고",
            desc: "상업용 및 가정용 냉장·냉동 장비 점검 및 수리",
          },
          {
            title: "워크인 쿨러 / 프리저",
            desc: "레스토랑 및 비즈니스용 워크인 장비 설치 및 유지보수",
          },
          {
            title: "식당 장비",
            desc: "업소용 냉동·냉장 및 관련 장비 서비스",
          },
        ],
        aboutTitle: "회사 소개",
        aboutBody:
          "베스트1 에어컨은 텍사스 지역에서 상업용 및 가정용 HVAC 및 냉동/냉장 관련 서비스를 제공합니다. 고객이 믿고 맡길 수 있도록 정확한 진단, 책임감 있는 작업, 정직한 가격을 중요하게 생각합니다.",
        aboutPlaceholder:
          "추가 예정: 경력 연수, 운영 지역, 긴급 서비스 여부, 특별 강점 등",
        licenseTitle: "라이센스 및 비즈니스 정보",
        licenseItems: [
          "License No. TACLB106409R",
          "주정부 면허 보유",
          "책임보험 가입",
          "추가 예정: 사업자 등록명 / 보험 상세 / 서비스 가능 도시",
        ],
        contactTitle: "연락처",
        contactSubtitle: "빠른 상담이 필요하시면 전화 또는 이메일로 문의해주세요.",
        addressLabel: "주소",
        emailLabel: "이메일",
        phoneLabel: "전화번호",
        serviceAreaTitle: "서비스 지역",
        serviceAreaBody: "추가 예정: Dallas, Fort Worth, Euless, Irving, Carrollton, Plano 등",
        footer: "Best 1 Air Conditioning & Refrigeration",
      },
      en: {
        brand: "Best 1 Air",
        topLine: "Trusted service built on experience and reliability",
        heroTitle: "Accurate diagnostics · Clean installation · Fast repair",
        heroDesc:
          "Serving Texas with residential and commercial HVAC, refrigeration, and equipment repair services.",
        callNow: "Call Now",
        getQuote: "Contact Us",
        nav: {
          services: "Services",
          about: "About",
          contact: "Contact",
          license: "License",
        },
        trustItems: [
          "Residential & Commercial Service",
          "Honest pricing and accurate diagnostics",
          "Licensed and insured",
        ],
        servicesTitle: "Services",
        servicesSubtitle: "This is a draft version. More details can be added later.",
        services: [
          {
            title: "A/C & Heating",
            desc: "Diagnostics, repair, installation, and replacement for cooling and heating systems",
          },
          {
            title: "Refrigerators & Freezers",
            desc: "Residential and commercial refrigeration service and repair",
          },
          {
            title: "Walk-in Coolers & Freezers",
            desc: "Installation, repair, and maintenance for restaurant and business equipment",
          },
          {
            title: "Restaurant Equipment",
            desc: "Service for commercial refrigeration and related equipment",
          },
        ],
        aboutTitle: "About",
        aboutBody:
          "Best 1 Air provides residential and commercial HVAC and refrigeration services in Texas. We focus on accurate diagnostics, dependable workmanship, and fair pricing that customers can trust.",
        aboutPlaceholder:
          "Coming soon: years of experience, service areas, emergency service availability, and key strengths",
        licenseTitle: "License & Business Info",
        licenseItems: [
          "License No. TACLB106409R",
          "State licensed",
          "Insured",
          "Coming soon: legal business name / insurance details / full service area list",
        ],
        contactTitle: "Contact",
        contactSubtitle: "Call or email us for service inquiries and estimates.",
        addressLabel: "Address",
        emailLabel: "Email",
        phoneLabel: "Phone",
        serviceAreaTitle: "Service Area",
        serviceAreaBody: "Coming soon: Dallas, Fort Worth, Euless, Irving, Carrollton, Plano, and nearby cities",
        footer: "Best 1 Air Conditioning & Refrigeration",
      },
    }),
    []
  );

  const t = content[language];

  return (
    <div className="min-h-screen bg-blue-500 text-white text-5xl">
      <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-bold tracking-tight text-slate-900">{t.brand}</p>
            <p className="text-sm text-slate-500">Best 1 Air Conditioning & Refrigeration</p>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#services" className="transition hover:text-blue-600">{t.nav.services}</a>
              <a href="#about" className="transition hover:text-blue-600">{t.nav.about}</a>
              <a href="#license" className="transition hover:text-blue-600">{t.nav.license}</a>
              <a href="#contact" className="transition hover:text-blue-600">{t.nav.contact}</a>
            </nav>
            <div className="flex rounded-full border border-sky-200 bg-sky-50 p-1 text-sm">
              <button
                onClick={() => setLanguage("ko")}
                className={`rounded-full px-3 py-1.5 ${language === "ko" ? "bg-blue-600 text-white" : "text-slate-600"}`}
              >
                한국어
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 ${language === "en" ? "bg-blue-600 text-white" : "text-slate-600"}`}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">{t.topLine}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{t.heroDesc}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:4694323839"
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                {t.callNow} · 469-432-3839
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-50"
              >
                {t.getQuote}
              </a>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {t.trustItems.map((item) => (
                <div key={item} className="rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm">
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-xl shadow-sky-100/60">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-50 to-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Quick Info</p>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                  <p className="text-slate-500">{t.phoneLabel}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">469-432-3839</p>
                </div>
                <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                  <p className="text-slate-500">{t.addressLabel}</p>
                  <p className="mt-1 font-semibold text-slate-900">222 Canterbury St, Euless, TX 76039</p>
                </div>
                <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                  <p className="text-slate-500">{t.emailLabel}</p>
                  <p className="mt-1 break-all font-semibold text-slate-900">hoonybest1dc@gmail.com</p>
                </div>
                <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                  <p className="text-slate-500">License</p>
                  <p className="mt-1 font-semibold text-slate-900">TACLB106409R</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-3 md:hidden">
            <button
              onClick={() => setLanguage("ko")}
              className={`rounded-full px-4 py-2 text-sm ${language === "ko" ? "bg-blue-600 text-white" : "border border-sky-200 bg-white text-slate-600"}`}
            >
              한국어
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-4 py-2 text-sm ${language === "en" ? "bg-blue-600 text-white" : "border border-sky-200 bg-white text-slate-600"}`}
            >
              ENG
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">{t.servicesTitle}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{t.servicesTitle}</h2>
          <p className="mt-3 text-slate-600">{t.servicesSubtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/40"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-blue-100" />
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2 md:py-14">
        <div id="about" className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-lg shadow-sky-100/40">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">{t.aboutTitle}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{t.aboutTitle}</h2>
          <p className="mt-5 leading-8 text-slate-600">{t.aboutBody}</p>
          <div className="mt-6 rounded-2xl border border-dashed border-sky-200 bg-sky-50 p-4 text-sm text-slate-600">
            {t.aboutPlaceholder}
          </div>
        </div>

        <div id="license" className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-lg shadow-sky-100/40">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">{t.licenseTitle}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{t.licenseTitle}</h2>
          <ul className="mt-5 space-y-3 text-slate-600">
            {t.licenseItems.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl bg-sky-50 p-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-r from-blue-600 to-sky-500 p-8 text-white shadow-2xl shadow-blue-200/50">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">{t.serviceAreaTitle}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{t.serviceAreaTitle}</h2>
          <p className="mt-4 max-w-3xl text-blue-50">{t.serviceAreaBody}</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-lg shadow-sky-100/40">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">{t.contactTitle}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{t.contactTitle}</h2>
            <p className="mt-3 text-slate-600">{t.contactSubtitle}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <a href="tel:4694323839" className="rounded-2xl bg-sky-50 p-5 transition hover:bg-sky-100">
                <p className="text-sm text-slate-500">{t.phoneLabel}</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">469-432-3839</p>
              </a>
              <a href="mailto:hoonybest1dc@gmail.com" className="rounded-2xl bg-sky-50 p-5 transition hover:bg-sky-100">
                <p className="text-sm text-slate-500">{t.emailLabel}</p>
                <p className="mt-1 break-all text-lg font-semibold text-slate-900">hoonybest1dc@gmail.com</p>
              </a>
            </div>

            <div className="mt-4 rounded-2xl bg-sky-50 p-5">
              <p className="text-sm text-slate-500">{t.addressLabel}</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">222 Canterbury St, Euless, TX 76039</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-dashed border-sky-200 bg-white/70 p-7 shadow-lg shadow-sky-100/30">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Logo / Photos</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Placeholder Area</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Add the company logo, work photos, service truck photo, or brand badges here later.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-8 text-center text-slate-500">
              Company logo / service photo placeholder
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-sky-100 bg-white/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{t.footer}</p>
          <p>License No. TACLB106409R</p>
        </div>
      </footer>
    </div>
  );
}