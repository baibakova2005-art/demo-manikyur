import {
  DemoBar,
  Header,
  Section,
  Faq,
  ZayavkaForm,
  Footer,
  btnPrimary,
  btnGhost,
} from "./ui.jsx";

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <svg viewBox="0 0 64 64" className="size-8" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#9b2c4c" />
      <path d="M24 50V30c0-6 3.5-12 8-16 4.5 4 8 10 8 16v20z" fill="#faf6f2" />
      <rect x="21" y="46" width="22" height="8" rx="3" fill="#c7955b" />
    </svg>
    <span className="font-display text-xl font-semibold tracking-tight">
      Лак и Линия
    </span>
  </span>
);

const LINKS = {
  items: [
    { href: "#tseny", label: "Услуги и цены" },
    { href: "#ottenki", label: "Оттенки" },
    { href: "#mastera", label: "Мастера" },
    { href: "#voprosy", label: "Вопросы" },
  ],
};

const USLUGI = [
  {
    name: "Маникюр без покрытия",
    time: "45 минут",
    price: "1 500 ₽",
    text: "Аппаратная или комбинированная обработка, форма, масло для кутикулы.",
  },
  {
    name: "Маникюр + гель-лак",
    time: "1 час 30 минут",
    price: "2 400 ₽",
    text: "Снятие старого покрытия, выравнивание, однотонный гель-лак. Гарантия 7 дней.",
    hit: true,
  },
  {
    name: "Укрепление + гель-лак",
    time: "2 часа",
    price: "2 900 ₽",
    text: "Для тонких и ломких ногтей: база-укрепление, чтобы покрытие не отходило у краёв.",
  },
  {
    name: "Педикюр + гель-лак",
    time: "1 час 45 минут",
    price: "3 200 ₽",
    text: "Обработка стоп и пальцев, покрытие. Отдельное кресло с подогревом воды.",
  },
];

const OTTENKI = [
  ["Молоко", "#f1e6dc"],
  ["Нюд", "#e2bfa8"],
  ["Пыльная роза", "#c98f8f"],
  ["Карамель", "#b9794d"],
  ["Бордо", "#6d1f2f"],
  ["Вишня", "#9b2c4c"],
  ["Коралл", "#e0735a"],
  ["Шалфей", "#9aa98e"],
  ["Графит", "#3b3438"],
  ["Лаванда", "#b7a6c9"],
  ["Небо", "#9cb7cf"],
  ["Золото", "#c7955b"],
];

const FAQ = [
  {
    q: "Сколько держится покрытие?",
    a: "Обычно три недели. Если за первые 7 дней появится скол или отслойка, приходите — исправим бесплатно, без записи в очередь.",
  },
  {
    q: "Как стерилизуете инструменты?",
    a: "Мытьё, дезинфекция и сухожаровой шкаф. Инструменты лежат в запечатанном крафт-пакете, который мастер вскрывает при вас. Пилки и бафы одноразовые.",
  },
  {
    q: "Можно снять покрытие, сделанное в другом салоне?",
    a: "Да, снятие чужого покрытия стоит 400 ₽. Снимаем аппаратом, не срезая ноготь.",
  },
  {
    q: "Что если я опаздываю?",
    a: "Напишите нам. Если опоздание больше 15 минут, мастер может не успеть сделать всё, и мы предложим перенести часть работы.",
  },
  {
    q: "Как отменить запись?",
    a: "Ответьте на сообщение-напоминание, которое приходит за день. Отмена бесплатная, если сообщить за 3 часа.",
  },
];

function HeroArt() {
  return (
    <svg
      viewBox="0 0 480 520"
      className="h-auto w-full"
      role="img"
      aria-labelledby="hero-art-title"
    >
      <title id="hero-art-title">
        Флаконы гель-лака в фирменных оттенках студии
      </title>
      <defs>
        <linearGradient id="arch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4e8e4" />
          <stop offset="1" stopColor="#ead3cc" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M40 520V240C40 129.5 129.5 40 240 40s200 89.5 200 200v280z"
        fill="url(#arch)"
      />
      <circle cx="372" cy="120" r="34" fill="#c7955b" opacity="0.25" />
      <circle cx="98" cy="190" r="14" fill="#9b2c4c" opacity="0.18" />
      {[
        { x: 92, h: 190, c: "#e2bfa8" },
        { x: 196, h: 250, c: "#9b2c4c" },
        { x: 300, h: 210, c: "#6d1f2f" },
      ].map((b) => (
        <g key={b.x}>
          <rect
            x={b.x + 22}
            y={470 - b.h - 92}
            width="44"
            height="96"
            rx="10"
            fill="#2a1519"
          />
          <rect
            x={b.x + 30}
            y={470 - b.h - 60}
            width="28"
            height="8"
            rx="4"
            fill="#c7955b"
          />
          <rect
            x={b.x}
            y={470 - b.h}
            width="88"
            height={b.h}
            rx="26"
            fill={b.c}
          />
          <rect
            x={b.x}
            y={470 - b.h}
            width="88"
            height={b.h}
            rx="26"
            fill="url(#glass)"
          />
        </g>
      ))}
      <rect x="40" y="470" width="400" height="50" fill="#e4c9c1" />
      <path d="M396 300l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="#c7955b" />
    </svg>
  );
}

export default function App() {
  return (
    <>
      <DemoBar />
      <Header
        brand={<Logo />}
        links={LINKS}
        cta={{ href: "#zapis", label: "Записаться" }}
      />

      <main>
        {/* Первый экран: что это, для кого, что сделать */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-soft px-4 py-1.5 text-sm font-semibold text-accent-text">
                Студия маникюра · 3 минуты от метро Сокол
              </p>
              <h1 className="font-display text-[clamp(2.4rem,1.4rem+4.2vw,4.4rem)] leading-[1.04] tracking-[-0.02em]">
                Маникюр, который держится{" "}
                <em className="italic text-accent-text">три недели</em> — без
                сколов
              </h1>
              <p className="mt-6 max-w-[52ch] text-[18px] leading-relaxed text-muted">
                Снимаем старое покрытие аппаратом без царапин, выравниваем
                ноготь и покрываем гель-лаком. Скол за первые 7 дней исправим
                бесплатно.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#zapis" className={btnPrimary}>
                  Выбрать время
                </a>
                <a href="#tseny" className={btnGhost}>
                  Посмотреть цены
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">
                Подтвердим запись в течение 15 минут, без звонков — сообщением
              </p>
            </div>
            <div className="mx-auto w-full max-w-[420px]">
              <HeroArt />
            </div>
          </div>
        </section>

        {/* Быстрое доверие — узкая полоса */}
        <div className="border-y border-line bg-surface">
          <ul className="mx-auto grid max-w-6xl gap-x-8 gap-y-4 px-5 py-6 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Инструменты из крафт-пакета при вас",
              "Одноразовые пилки и бафы",
              "Гарантия 7 дней на покрытие",
              "Работаем каждый день 9:00–21:00",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-soft text-accent-text"
                >
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Section
          eyebrow="Знакомо?"
          title="Покрытие отходит через неделю, а после визита болят пальцы"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Скол на пятый день",
                "Причина почти всегда в подготовке: покрытие легло на неровный или жирный ноготь. Мы выравниваем пластину перед базой.",
              ],
              [
                "Порезы и воспаление",
                "Мастер торопится и срезает лишнее. У нас на маникюр с покрытием заложено полтора часа, а не час.",
              ],
              [
                "«Все цвета одинаковые»",
                "В палитре 12 базовых оттенков и сезонные. Покажем их на типсах при дневном свете, а не в каталоге.",
              ],
            ].map(([h, t]) => (
              <article
                key={h}
                className="rounded-[var(--radius-card)] border border-line bg-surface p-7"
              >
                <h3 className="text-lg font-bold">{h}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="tseny"
          tone="bg-surface border-y border-line"
          eyebrow="Услуги и цены"
          title="Цена известна до начала, без доплат в кресле"
          lead="Время указано с запасом: мастер не торопится, а вы знаете, во сколько освободитесь."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {USLUGI.map((u) => (
              <article
                key={u.name}
                className={`relative flex flex-col rounded-[var(--radius-card)] border p-7 ${u.hit ? "border-accent bg-bg shadow-[var(--shadow-card)]" : "border-line bg-bg"}`}
              >
                {u.hit && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-on-accent">
                    Чаще всего выбирают
                  </span>
                )}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold">{u.name}</h3>
                  <p className="font-display text-2xl font-semibold whitespace-nowrap">
                    {u.price}
                  </p>
                </div>
                <p className="mt-1 text-sm font-semibold text-accent-text">
                  {u.time}
                </p>
                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {u.text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-[15px] text-muted">
            Снятие чужого покрытия — 400 ₽. Дизайн — от 100 ₽ за ноготь.
          </p>
          <a href="#zapis" className={`${btnPrimary} mt-8`}>
            Записаться на удобное время
          </a>
        </Section>

        <Section
          id="ottenki"
          eyebrow="Палитра"
          title="12 базовых оттенков, которые подходят к офису и к отпуску"
        >
          <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
            {OTTENKI.map(([name, c]) => (
              <li key={name} className="flex flex-col items-center text-center">
                <span
                  aria-hidden="true"
                  className="block h-28 w-16 rounded-t-[999px] rounded-b-[18px] shadow-[var(--shadow-card)] ring-1 ring-black/5"
                  style={{
                    background: `linear-gradient(100deg in oklab, rgba(255,255,255,.45), transparent 40%), ${c}`,
                  }}
                />
                <span className="mt-3 text-[15px] font-semibold">{name}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="mastera"
          tone="bg-surface border-y border-line"
          eyebrow="Кто будет делать"
          title="Три мастера, у каждого своя сильная сторона"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "АК",
                "Алина",
                "Опыт 7 лет",
                "Укрепление тонких ногтей и нюдовые оттенки.",
              ],
              [
                "ВС",
                "Вера",
                "Опыт 5 лет",
                "Педикюр и работа с проблемной кутикулой.",
              ],
              [
                "МР",
                "Марина",
                "Опыт 4 года",
                "Дизайн: френч, втирка, минималистичные рисунки.",
              ],
            ].map(([ini, name, exp, t]) => (
              <article
                key={name}
                className="rounded-[var(--radius-card)] border border-line bg-bg p-7"
              >
                <span
                  aria-hidden="true"
                  className="grid size-16 place-items-center rounded-full bg-accent font-display text-xl text-on-accent"
                >
                  {ini}
                </span>
                <h3 className="mt-5 text-xl font-bold">{name}</h3>
                <p className="text-sm font-semibold text-accent-text">{exp}</p>
                <p className="mt-3 leading-relaxed text-muted">{t}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="py-[clamp(64px,10vw,120px)]">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid items-center gap-8 rounded-[32px] bg-accent p-[clamp(28px,5vw,64px)] text-on-accent md:grid-cols-[1.3fr_1fr]">
              <div>
                <h2 className="font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] leading-[1.1]">
                  Скол за 7 дней — исправим бесплатно
                </h2>
                <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-white/90">
                  Напишите нам и приходите в ближайшее свободное окно. Гарантия
                  не действует, если ноготь сломан механически.
                </p>
              </div>
              <a
                href="#zapis"
                className="inline-flex min-h-12 items-center justify-center justify-self-start rounded-full bg-bg px-7 py-3 font-semibold text-ink transition hover:-translate-y-0.5 md:justify-self-end"
              >
                Записаться
              </a>
            </div>
          </div>
        </section>

        <Section
          id="voprosy"
          eyebrow="Вопросы"
          title="Что спрашивают перед первым визитом"
        >
          <div className="max-w-3xl">
            <Faq items={FAQ} />
          </div>
        </Section>

        <Section id="zapis" tone="bg-surface border-t border-line">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-text">
                Запись
              </p>
              <h2 className="font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] leading-[1.1] tracking-[-0.015em]">
                Оставьте номер — подберём время и мастера
              </h2>
              <p className="mt-4 max-w-[48ch] text-[17px] leading-relaxed text-muted">
                Напишем в течение 15 минут с 9:00 до 21:00. Без звонков, если не
                попросите.
              </p>
              <dl className="mt-10 grid gap-6 text-[15px]">
                <div>
                  <dt className="font-semibold">Адрес</dt>
                  <dd className="mt-1 text-muted">
                    Москва, 3 минуты пешком от метро Сокол (в демо адрес не
                    указан)
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Часы работы</dt>
                  <dd className="mt-1 text-muted">Каждый день, 9:00–21:00</dd>
                </div>
                <div>
                  <dt className="font-semibold">Телефон</dt>
                  <dd className="mt-1 text-muted">
                    +7 900 000-00-00 (демо-номер)
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-bg p-[clamp(20px,4vw,40px)]">
              <ZayavkaForm
                button="Записаться"
                note="Ни к чему не обязывает: время подтвердим сообщением"
                fields={[
                  {
                    name: "imya",
                    label: "Имя",
                    required: true,
                    autoComplete: "name",
                    placeholder: "Как к вам обращаться",
                  },
                  {
                    name: "telefon",
                    label: "Телефон",
                    type: "tel",
                    required: true,
                    autoComplete: "tel",
                    placeholder: "+7 900 000-00-00",
                  },
                  {
                    name: "usluga",
                    label: "Услуга",
                    type: "select",
                    options: USLUGI.map((u) => u.name),
                    placeholder: "Выберите услугу",
                  },
                  {
                    name: "vremya",
                    label: "Когда удобно",
                    type: "choice",
                    options: ["Будни днём", "Будни вечером", "Выходные"],
                  },
                ]}
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer
        brand={<Logo />}
        about="Студия маникюра и педикюра у метро Сокол. Стерильные инструменты и гарантия на покрытие."
        contacts={[
          "+7 900 000-00-00 (демо)",
          "Каждый день 9:00–21:00",
          "Москва, м. Сокол",
        ]}
      />
    </>
  );
}
