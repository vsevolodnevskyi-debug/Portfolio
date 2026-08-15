/* ---------- i18n ---------- */
const I18N = {
en: {}, /* English lives in the HTML itself; en dict captured at load */
uk: {
  'nav.about':'Про мене','nav.expertise':'Експертиза','nav.work':'Роботи','nav.projects':'Проєкти','nav.services':'Послуги','nav.cta':'Звʼязатися',
  'proj.kicker':'04 — Open source та проєкти',
  'proj.h2':'Код, який можна взяти й використати.',
  'proj.sub':'Окрім операційної роботи, я створюю та публікую інструменти, плагіни й автоматизації. Усе нижче — відкрите: клонуйте, адаптуйте, використовуйте у своєму стеку.',
  'proj.ghb':'Усі проєкти живуть на GitHub',
  'proj.ghs':'Open source, під ліцензією MIT там, де це можливо — вільно форкати й використовувати.',
  'proj.ghbtn':'Перейти на GitHub →',
  'proj.badge.soon':'Скоро','proj.badge.live':'Онлайн','proj.badge.wip':'У роботі',
  'proj.link.soon':'Репозиторій готується',
  'proj.link.repo':'Перейти до репозиторію →',
  'proj.c1h':'Набір агентів для операційної роботи',
  'proj.c1p':'Набір Claude Code агентів та MCP-інтеграцій для повторюваних бізнес-процесів: research-пайплайни, генерація документів і оркестрація задач у Notion, Google Workspace та пошті.',
  'proj.c2h':'Цей портфоліо-сайт',
  'proj.c2p':'Портфоліо в одному файлі, без залежностей: вбудована тримовна i18n, scroll-анімації та відео-візитка — без фреймворків, без збірки, деплоїться будь-де менш ніж за хвилину.',
  'proj.c3h':'Власні плагіни та скіли',
  'proj.c3p':'Багаторазові скіли, які пакують воркфлоу один раз і далі виконують його однаково щоразу — генерація документів, структуроване дослідження, регулярна звітність. Будівельні блоки клієнтських автоматизацій, які публікую в міру готовності.',
  'hero.tag':'Відкритий до ролей і консалтингу',
  'hero.h1':'Я перетворюю застарілі процеси, які потребували постійного ручного втручання, на <em>автоматизовані ШІ системи</em>, які працюватимуть автономно.',
  'hero.lede':'AI Automation консультант з 10+ роками керування delivery та процесів в IT і бізнесі. Я налагоджую ваші процеси, знаходжу те, що зʼїдає ваш час — і будую ШІ автоматизації, які його повертають.',
  'hero.btn1':'Працювати зі мною','hero.btn2':'Мої роботи',
  'hero.hm1':'років у проєктному/delivery менеджменті та операційних процесах','hero.hm2':'спеціалістів під керівництвом','hero.hm3':'доменів: бізнес, ШІ, психологія, продажі, операційна діяльність, проєктний менеджмент, аудит',
  'hero.vc':'Знайомтесь — 70 сек',
  'hero.vcnote':'Живий запис у кафе — без AI, без монтажу.',
  'about.kicker':'01 — Про мене',
  'about.h2':'Спершу — операційний лідер.<br>Потім — AI-інженер. Обидва свідомо.',
  'about.p1':'Більшість AI-консультантів знають інструменти, але ніколи не були дотичні до бізнесу. Більшість операційних менеджерів стикаються з болем, але не можуть чітко побудувати рішення як власник. <strong>Я вмію і те, і інше.</strong>',
  'about.p2':'Чотири роки я був проєктним менеджером з <strong>дуже широкою зоною відповідальності</strong> — вона сягала delivery-менеджера, product owner-а, бізнес-аналітика та операційного менеджера — в аутсорс software development компанії. Брав участь в узгодженні delivery-фреймворків проєкту, ресурсного планування та білінгових моделей перед початком проєкту, вів 3–5 паралельних проєктів з командами різного розміру (включно з 15+ людей) і керував розробкою мобільних та веб-рішень.',
  'about.p3':'Зараз я консультую малі та середні бізнеси й будую автоматизовані AI-системи на <strong>Claude, власних агентах та MCP-інтеграціях</strong>. Проводжу аудити малого та середнього бізнесу, щоб знайти, де автоматизація справді окупається. Не AI заради хайпу — AI заради збережених годин.',
  'about.f1k':'БАЗА','about.f1v':'Уппсала, Швеція — remote-friendly по всьому світу',
  'about.f2k':'ФОКУС','about.f2v':'AI-автоматизація · агентні воркфлоу · бізнес-операції',
  'about.f3k':'СТЕК',
  'about.f4k':'МОВИ','about.f4v':'Англійська, українська, російська, шведська (вивчаю)',
  'about.f5k':'ОСВІТА','about.f5v':'Магістр наук: цивільне будівництво та інженерія · Психологія (гештальт-психотерапевт) · Сертифіковані курси та онлайн-навчання: проєктний менеджмент, delivery та операційний менеджмент, ШІ девелопмент',
  'exp.kicker':'02 — Експертиза',
  'exp.h2':'Три дисципліни, одна мета:<br>щоб ваш бізнес працював легше.',
  'exp.sub':'Кожен проєкт спирається на всі три — саме тому автоматизації приживаються.',
  'exp.c1p':'Агентні воркфлоу на Claude Code та MCP: системи, що читають вашу пошту, оновлюють Notion, готують звіти та зʼєднують багатокрокові процеси від початку до кінця.',
  'exp.c2p':'Повне володіння циклом delivery: фреймворки, ресурсне планування, білінгові моделі, ризик-менеджмент і звітність — побудовано з нуля й перевірено на реальних командах.',
  'exp.c2ch1':'Delivery-фреймворки','exp.c2ch2':'Ресурсне планування','exp.c2ch3':'Ризик-менеджмент','exp.c2ch4':'Звітність',
  'exp.c3h':'Бізнес-консалтинг',
  'exp.c3p':'Структуровані аудити SMB-операцій: delivery, HR, продукт, маркетинг — з пріоритизованими роадмапами, де автоматизація та процесні фікси окупають себе.',
  'exp.c3ch1':'Бізнес-аудити','exp.c3ch2':'Мапування процесів','exp.c3ch3':'Роадмапи зростання','exp.c3ch4':'Оптимізація маржі',
  'work.kicker':'03 — Вибрані роботи',
  'work.h2':'Системи, які я побудував.',
  'work.sub':'Від операцій цілої компанії до особистої AI-інфраструктури — принцип один: змапуй процес, прибери тертя, автоматизуй решту.',
  'work.c1h':'Проєктні операції в аутсорс software-компанії',
  'work.c1p':'Як проєктний менеджер із розширеною зоною відповідальності — delivery, product ownership, бізнес-аналіз, операції — я працював із клієнтами з найперших стадій: discovery, дизайн, визначення обсягу. Разом із delivery-менеджером готував комерційно оптимальні моделі проєктів, налаштовував SMART-звітність під потреби клієнта — з прогнозуванням видатків і бюджету — та вів ризик-менеджмент на рівні проєкту в цілому.',
  'work.c1r':'3–5 паралельних проєктів з командами 15+ спеціалістів; прозорий стан delivery в реальному часі й керовані фінансові показники на рівні проєкту.',
  'work.c2h':'Агентний операційний хаб — Claude Code + MCP',
  'work.c2p':'Особиста операційна система на Claude Code з MCP-інтеграціями в Notion, Google Workspace, пошту та календар. AI-агенти ведуть повторювані процеси: research-пайплайни, генерацію документів, структуроване накопичення знань та оркестрацію задач — перетворюючи багатогодинні рутини на хвилини під наглядом.',
  'work.c2r':'Повторювана інтелектуальна робота зведена до «переглянь і затверди»; патерн тепер пропонується консалтинговим клієнтам.',
  'work.c3h':'Аудит SMB → роадмап зростання',
  'work.c3p':'Структурована методологія аудиту для малого та середнього бізнесу: інтервʼю та мапування процесів у операціях, delivery, HR, продукті й маркетингу; аналіз вузьких місць; пріоритизований роадмап, що відділяє швидкі перемоги автоматизації від структурних змін.',
  'work.c3r':'Власники отримують чіткий послідовний план: що автоматизувати, що перебудувати, що не чіпати.',
  'work.c4h':'Аудит діючого бізнесу → офер на трансформацію',
  'work.c4p':'Діючий малий бізнес (під NDA) потребував перебудови процесів. На стадії оферу я провів поверхневий аудит за відкритими даними та першими розмовами, визначив ключові точки втрат і зростання, вибудував план трансформації та запакував його у структурований офер: обсяг, етапи, очікувані результати. (Це стандартна бізнес-пропозиція поверхневого аналізу — застосовна до будь-якого нового кейсу.)',
  'work.c4r':'Клієнт бачить план і цінність ще до старту робіт — офер на консалтинговий проєкт готовий.',
  'svc.kicker':'05 — Послуги',
  'svc.h2':'Як ми можемо працювати разом.',
  'svc.c1p':'Обираємо ваш найболючіший повторюваний процес — і я будую навколо нього робочу агентну автоматизацію, інтегровану з вашими інструментами (Notion, Google Workspace, пошта, CRM). Ви отримуєте робочу систему, а не презентацію.',
  'svc.c2h':'Бізнес-аудит і роадмап зростання',
  'svc.c2p':'Структуроване занурення у ваші операції, delivery, HR, продукт і маркетинг. Ви отримуєте пріоритизований роадмап: швидкі перемоги, кандидати на автоматизацію та структурні фікси — з чесними оцінками ROI.',
  'svc.c3h':'Fractional Delivery / Operations Lead',
  'svc.c3p':'Постійне парт-тайм лідерство для вашої delivery- чи операційної функції: фреймворки, планування, звітність і оркестрація команд — з AI-автоматизацією з першого дня.',
  'svc.c4h':'Фултайм-ролі',
  'svc.c4p':'Відкритий до сеньйорних позицій на стику операційного лідерства та AI: AI Automation Engineer/Consultant, Delivery Manager, Head of Operations, Product Operations Lead. Віддалено або на місці у Швеції.',
  'ct.kicker':'06 — Контакти',
  'ct.h2':'Знайдімо години, які втрачає ваш бізнес.',
  'ct.p':'Розкажіть про ваш процес, команду або роль, на яку наймаєте — я відповім конкретними першими кроками, а не сейлз-пітчем.',
  'ct.btn1':'Написати мені','ct.btn2':'Забронювати 30-хв дзвінок','ct.loc':'Уппсала, Швеція',
  'ct.or':'АБО',
  'ct.f.name':'Ваше імʼя','ct.f.email':'Email','ct.f.company':'Компанія / посада (необовʼязково)',
  'ct.f.msg':'Що потрібно вирішити?','ct.f.send':'Надіслати повідомлення',
  'ct.f.privacy':'Ваші дані надходять напряму до моєї поштової скриньки й використовуються лише для відповіді вам. Вони не продаються й не передаються третім особам, і я видаляю їх на ваш запит.',
  'ft.tag':'Спроєктовано й опубліковано агентним AI — звісно ж.'
},
sv: {
  'nav.about':'Om mig','nav.expertise':'Expertis','nav.work':'Arbeten','nav.projects':'Projekt','nav.services':'Tjänster','nav.cta':'Kontakta mig',
  'proj.kicker':'04 — Öppen källkod & projekt',
  'proj.h2':'Kod du kan ta och använda.',
  'proj.sub':'Utöver operativt arbete bygger och publicerar jag verktyg, plugins och automatiseringar. Allt nedan är öppet — klona det, anpassa det, använd det i din egen stack.',
  'proj.ghb':'Alla projekt finns på GitHub',
  'proj.ghs':'Öppen källkod, MIT-licensierad där det är möjligt — fritt att forka och använda.',
  'proj.ghbtn':'Visa GitHub-profil →',
  'proj.badge.soon':'Kommer snart','proj.badge.live':'Live','proj.badge.wip':'Pågår',
  'proj.link.soon':'Repository förbereds',
  'proj.link.repo':'Visa repository →',
  'proj.c1h':'Verktygslåda för agentbaserad drift',
  'proj.c1p':'En uppsättning Claude Code-agenter och MCP-integrationer för återkommande affärsprocesser: research-pipelines, dokumentgenerering och uppgiftsorkestrering i Notion, Google Workspace och e-post.',
  'proj.c2h':'Den här portföljsajten',
  'proj.c2p':'En portfölj i en enda fil, utan beroenden: inbyggd i18n på tre språk, scroll-animationer och en inbäddad videopresentation — inget ramverk, inget byggsteg, driftsätts var som helst på under en minut.',
  'proj.c3h':'Egna plugins & skills',
  'proj.c3p':'Återanvändbara skills som paketerar ett arbetsflöde en gång och sedan kör det likadant varje gång — dokumentgenerering, strukturerad research, återkommande rapportering. Byggstenarna bakom kundautomatiseringarna, publicerade allteftersom de mognar.',
  'hero.tag':'Tillgänglig för roller & konsultuppdrag',
  'hero.h1':'Jag förvandlar manuella processer till <em>AI-system</em> som sköter sig själva.',
  'hero.lede':'AI Automation-konsult med 10+ års erfarenhet av att leda delivery och processer inom IT och affärsverksamhet. Jag trimmar dina processer, hittar det som stjäl din tid — och bygger AI-automatiseringar som ger den tillbaka.',
  'hero.btn1':'Jobba med mig','hero.btn2':'Se mitt arbete',
  'hero.hm1':'år inom projekt-/delivery-ledning och operativa processer','hero.hm2':'specialister under min ledning','hero.hm3':'domäner: affär, AI, psykologi, försäljning, operations, projektledning, granskning',
  'hero.vc':'Möt mig — 60 sek',
  'hero.vcnote':'AI-avatarintro, byggd med <b>HeyGen</b> — ett av verktygen i min stack.',
  'about.kicker':'01 — Om mig',
  'about.h2':'Operativ ledare först.<br>AI-ingenjör sedan. Båda med avsikt.',
  'about.p1':'De flesta AI-konsulter kan verktygen men har aldrig drivit en affärsfunktion. De flesta operations-chefer känner smärtan men kan inte bygga lösningen. <strong>Jag gör båda.</strong>',
  'about.p2':'I fyra år var jag projektledare med <strong>utökat ansvar</strong> — som sträckte sig över delivery management, product ownership, affärsanalys och operations — på ett outsourcing-mjukvaruföretag. Jag deltog i att förankra projektets delivery-ramverk, resursplanering och faktureringsmodeller före projektstart, drev 3–5 parallella projekt med team av olika storlek (inklusive 15+ personer) och ledde utvecklingen av mobil- och webblösningar.',
  'about.p3':'Nu bygger jag AI-drivna system med <strong>Claude Code, egna agenter och MCP-integrationer</strong> — och granskar små och medelstora företag för att hitta var automatisering faktiskt lönar sig. Inte AI för hajpen. AI för timmarna den sparar.',
  'about.f1k':'BAS','about.f1v':'Uppsala, Sverige — remote-vänlig världen över',
  'about.f2k':'FOKUS','about.f2v':'AI-automatisering · agentflöden · affärsverksamhet',
  'about.f3k':'STACK',
  'about.f4k':'SPRÅK','about.f4v':'Engelska, ukrainska, ryska, svenska (lär mig)',
  'about.f5k':'UTBILDNING','about.f5v':'MSc i byggteknik och ingenjörsvetenskap · Psykologi (gestaltpsykoterapeut) · Certifierade kurser och onlineutbildning: projektledning, delivery- och operations-ledning, AI-utveckling',
  'exp.kicker':'02 — Expertis',
  'exp.h2':'Tre discipliner, ett uppdrag:<br>få din verksamhet att flyta lättare.',
  'exp.sub':'Varje uppdrag bygger på alla tre — det är därför automatiseringarna faktiskt håller.',
  'exp.c1p':'Agentbaserade arbetsflöden byggda med Claude Code och MCP: system som läser din inkorg, uppdaterar din Notion, skriver utkast till rapporter och kedjar flerstegsprocesser från början till slut.',
  'exp.c2p':'Fullt leveransägarskap: ramverk, resursplanering, faktureringsmodeller, riskhantering och rapportering — byggt från noll och beprövat i verkliga team.',
  'exp.c2ch1':'Delivery-ramverk','exp.c2ch2':'Resursplanering','exp.c2ch3':'Riskhantering','exp.c2ch4':'Rapportering',
  'exp.c3h':'Affärsrådgivning',
  'exp.c3p':'Strukturerade granskningar av SMB-verksamhet inom delivery, HR, produkt och marknadsföring — med prioriterade färdplaner där automatisering och processförbättringar betalar sig själva.',
  'exp.c3ch1':'Affärsgranskningar','exp.c3ch2':'Processkartläggning','exp.c3ch3':'Tillväxtfärdplaner','exp.c3ch4':'Marginaloptimering',
  'work.kicker':'03 — Utvalda arbeten',
  'work.h2':'System jag har byggt.',
  'work.sub':'Från företagsövergripande verksamhet till personlig AI-infrastruktur — samma princip: kartlägg processen, ta bort friktionen, automatisera resten.',
  'work.c1h':'Projektverksamhet på ett outsourcing-mjukvaruföretag',
  'work.c1p':'Som projektledare med utökat ansvar — delivery, product ownership, affärsanalys och operations — arbetade jag med kunder från de tidigaste faserna: discovery, design och omfattningsdefinition. Tillsammans med delivery-chefen tog jag fram kommersiellt optimala projektupplägg, etablerade SMART-baserad kundrapportering med kostnads- och budgetprognoser och drev riskhantering på projektnivå som helhet.',
  'work.c1r':'Drev 3–5 parallella projekt med team på 15+ specialister; realtidsinsyn i leveransstatus och styrda finansiella nyckeltal på projektnivå.',
  'work.c2h':'Agentbaserat verksamhetsnav — Claude Code + MCP',
  'work.c2p':'Personligt operativsystem byggt på Claude Code med MCP-integrationer mot Notion, Google Workspace, e-post och kalender. AI-agenter hanterar återkommande flöden: research-pipelines, dokumentgenerering, strukturerad kunskapsinsamling och uppgiftsorkestrering — och förvandlar timslånga rutiner till övervakade minuter.',
  'work.c2r':'Repetitivt kunskapsarbete reducerat till granska-och-godkänn; ett återanvändbart mönster som nu erbjuds konsultkunder.',
  'work.c3h':'SMB-granskning → tillväxtfärdplan',
  'work.c3p':'Strukturerad granskningsmetodik för små och medelstora företag: intervjuer och processkartläggning inom verksamhet, delivery, HR, produkt och marknadsföring; flaskhalsanalys; och en prioriterad färdplan som skiljer snabba automatiseringsvinster från strukturella åtgärder.',
  'work.c3r':'Ägarna får en tydlig, sekvenserad plan — vad som ska automatiseras, vad som ska omstruktureras och vad som ska lämnas ifred.',
  'work.c4h':'Granskning av ett aktivt företag → transformationsoffert',
  'work.c4p':'Ett aktivt småföretag (under NDA) behövde bygga om sina processer. I offertskedet gjorde jag en översiktlig granskning utifrån öppna data och inledande samtal, identifierade de viktigaste förlust- och tillväxtpunkterna, byggde en transformationsplan och paketerade den i en strukturerad offert: omfattning, etapper och förväntade resultat. (Detta är mitt standarderbjudande för översiktlig analys — tillämpbart på varje nytt case.)',
  'work.c4r':'Kunden ser planen och värdet innan arbetet börjar — konsultofferten är klar.',
  'svc.kicker':'05 — Tjänster',
  'svc.h2':'Så kan vi arbeta tillsammans.',
  'svc.c1p':'Vi väljer ditt mest smärtsamma återkommande arbetsflöde och jag bygger en fungerande agentbaserad automatisering kring det — integrerad med dina befintliga verktyg (Notion, Google Workspace, e-post, CRM). Du får ett fungerande system, inte en presentation.',
  'svc.c2h':'Affärsgranskning & tillväxtfärdplan',
  'svc.c2p':'En strukturerad djupdykning i din verksamhet, delivery, HR, produkt och marknadsföring. Du får en prioriterad, sekvenserad färdplan: snabba vinster, automatiseringskandidater och strukturella åtgärder — med ärliga ROI-uppskattningar.',
  'svc.c3h':'Fraktionell Delivery / Operations Lead',
  'svc.c3p':'Löpande deltidsledarskap för din delivery- eller operations-funktion: ramverk, planering, rapportering och teamorkestrering — med AI-automatisering inbyggd från dag ett.',
  'svc.c4h':'Heltidsroller',
  'svc.c4p':'Öppen för seniora roller där operativt ledarskap möter AI: AI Automation Engineer/Consultant, Delivery Manager, Head of Operations, Product Operations Lead. På distans eller på plats i Sverige.',
  'ct.kicker':'06 — Kontakt',
  'ct.h2':'Låt oss hitta timmarna ditt företag förlorar.',
  'ct.p':'Berätta om ditt arbetsflöde, ditt team eller rollen du rekryterar till — jag svarar med konkreta första steg, inte en säljpitch.',
  'ct.btn1':'Mejla mig','ct.btn2':'Boka ett 30-minuterssamtal','ct.loc':'Uppsala, Sverige',
  'ct.or':'ELLER',
  'ct.f.name':'Ditt namn','ct.f.email':'E-post','ct.f.company':'Företag / roll (valfritt)',
  'ct.f.msg':'Vad vill du lösa?','ct.f.send':'Skicka meddelande',
  'ct.f.privacy':'Dina uppgifter skickas direkt till min inkorg och används endast för att svara dig. De säljs aldrig och delas inte vidare, och jag raderar dem på begäran.',
  'ft.tag':'Designad & lanserad med agentbaserad AI — såklart.'
}
};

/* Per-language video: UK keeps the original hand-filmed intro,
   EN and SV play the English-voiced studio version. */
const VIDEO_SRC = {
  en: { src: 'assets/visit-card-en.mp4', poster: 'assets/visit-card-en-poster.jpg' },
  uk: { src: 'assets/visit-card-uk.mp4', poster: 'assets/visit-card-uk-poster.jpg' },
  sv: { src: 'assets/visit-card-en.mp4', poster: 'assets/visit-card-en-poster.jpg' }
};

const PAGE_TITLE = {
  en: 'Vsevolod Nevskyi — AI Automation Consultant',
  uk: 'Всеволод Невський — AI Automation консультант',
  sv: 'Vsevolod Nevskyi — AI Automation-konsult'
};

/* capture English defaults from markup */
document.querySelectorAll('[data-i18n]').forEach(el => { I18N.en[el.dataset.i18n] = el.innerHTML; });

const vid = document.getElementById('introVideo');
const card = document.getElementById('videoCard');

function setLang(lang) {
  if (!I18N[lang]) lang = 'en';
  document.documentElement.lang = lang;
  document.title = PAGE_TITLE[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = I18N[lang][el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('#langSwitch button').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang));
  /* swap video track + poster for the selected language */
  const v = VIDEO_SRC[lang];
  const srcEl = vid.querySelector('source');
  if (srcEl.getAttribute('src') !== v.src) {
    const wasPlaying = !vid.paused;
    srcEl.setAttribute('src', v.src);
    vid.setAttribute('poster', v.poster);
    vid.load();
    card.classList.remove('playing');
    if (wasPlaying) { vid.play(); card.classList.add('playing'); }
  }
  try { localStorage.setItem('lang', lang); } catch(e) {}
  const lf = document.getElementById('formLang');
  if (lf) lf.value = lang;
}

document.querySelectorAll('#langSwitch button').forEach(b =>
  b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('lang'); } catch(e) {}
const browser = (navigator.language || 'en').slice(0,2);
setLang(saved || (['uk','sv','en'].includes(browser) ? browser : 'en'));

/* ---------- reveal ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- video ----------
   The card adapts to whichever video is loaded: the Ukrainian intro is
   vertical (9:16), the English/Swedish one is landscape (16:9). */
vid.addEventListener('loadedmetadata', () => {
  const landscape = vid.videoWidth > vid.videoHeight;
  card.classList.toggle('landscape', landscape);
  const grid = document.querySelector('.hero-grid');
  if (grid) grid.classList.toggle('wide-video', landscape);
});

card.addEventListener('click', () => {
  if (vid.paused) { vid.play(); card.classList.add('playing'); }
  else { vid.pause(); card.classList.remove('playing'); }
});
vid.addEventListener('ended', () => card.classList.remove('playing'));

/* ---------- outbound click tracking (privacy-friendly, no cookies) ----------
   Sends an anonymous event only if Vercel Analytics is loaded.
   No personal data, no fingerprinting, no third-party trackers. */
document.querySelectorAll('[data-track]').forEach(el => {
  el.addEventListener('click', () => {
    try {
      if (window.va) window.va('event', { name: 'cta_click', data: { target: el.dataset.track } });
    } catch (e) { /* tracking must never break navigation */ }
  });
});

/* ---------- contact form ---------- */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const btn = document.getElementById('cfSubmit');
  const statusEl = document.getElementById('cfStatus');

  const MSG = {
    en: { sending: 'Sending…', ok: 'Thank you — your message is on its way. I usually reply within one working day.',
          err: 'Something went wrong. Please email me directly at vsevolod.nevskyi@gmail.com.',
          slow: 'Please wait a moment before sending again.',
          invalid: 'Please fill in your name, a valid email, and a message.',
          emailRequired: 'Email is required — otherwise I have no way to reply.',
          emailFormat: 'This does not look like a valid email address.',
          emailNoDot: 'The domain looks incomplete — did you miss the ending, like .com?',
          didYouMean: 'Did you mean', useIt: 'use it' },
    uk: { sending: 'Надсилаю…', ok: 'Дякую — ваше повідомлення надіслано. Зазвичай відповідаю протягом одного робочого дня.',
          err: 'Щось пішло не так. Напишіть мені напряму: vsevolod.nevskyi@gmail.com.',
          slow: 'Зачекайте трохи, перш ніж надсилати ще раз.',
          invalid: 'Будь ласка, вкажіть імʼя, коректний email і повідомлення.',
          emailRequired: 'Email обовʼязковий — інакше я не зможу вам відповісти.',
          emailFormat: 'Це не схоже на коректну адресу пошти.',
          emailNoDot: 'Домен виглядає неповним — можливо, бракує закінчення, наприклад .com?',
          didYouMean: 'Можливо, ви мали на увазі', useIt: 'підставити' },
    sv: { sending: 'Skickar…', ok: 'Tack — ditt meddelande är skickat. Jag svarar oftast inom en arbetsdag.',
          err: 'Något gick fel. Mejla mig direkt på vsevolod.nevskyi@gmail.com.',
          slow: 'Vänta en stund innan du skickar igen.',
          invalid: 'Fyll i ditt namn, en giltig e-postadress och ett meddelande.',
          emailRequired: 'E-post krävs — annars kan jag inte svara dig.',
          emailFormat: 'Det här ser inte ut som en giltig e-postadress.',
          emailNoDot: 'Domänen ser ofullständig ut — saknas ändelsen, till exempel .com?',
          didYouMean: 'Menade du', useIt: 'använd den' }
  };
  const t = (k) => (MSG[document.documentElement.lang] || MSG.en)[k];

  /* ----- email validation -----
     Note: this checks that an address is well-formed and catches likely typos.
     Confirming that a mailbox actually exists is impossible from the browser —
     it needs a server-side SMTP or verification-API lookup. */
  const email = document.getElementById('cfEmail');
  const emailHint = document.getElementById('cfEmailHint');

  const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

  const KNOWN_DOMAINS = [
    'gmail.com','googlemail.com','outlook.com','hotmail.com','live.com','msn.com',
    'yahoo.com','yahoo.co.uk','icloud.com','me.com','mac.com','aol.com',
    'proton.me','protonmail.com','pm.me','gmx.com','gmx.net','mail.com','zoho.com',
    'ukr.net','i.ua','meta.ua','yandex.ru','mail.ru','rambler.ru',
    'telia.com','hotmail.se','live.se','spray.se','bredband.net','comhem.se','outlook.se'
  ];

  /* Damerau-Levenshtein (optimal string alignment): counts a swap of two
     adjacent letters as one mistake, which is what "gmial" instead of
     "gmail" actually is — plain Levenshtein would score that as two. */
  function editDistance(a, b) {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m || !n) return m || n;
    const d = Array.from({ length: m + 1 }, (_, i) =>
      Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
        }
      }
    }
    return d[m][n];
  }

  function suggestDomain(domain) {
    if (KNOWN_DOMAINS.includes(domain)) return null;
    let best = null, bestDist = 99;
    for (const d of KNOWN_DOMAINS) {
      const dist = editDistance(domain, d);
      if (dist < bestDist) { bestDist = dist; best = d; }
    }
    /* only suggest when it is clearly a near-miss, not a different address */
    const limit = best && best.length <= 9 ? 1 : 2;
    return bestDist > 0 && bestDist <= limit ? best : null;
  }

  function clearHint() { emailHint.textContent = ''; emailHint.className = 'field-hint'; email.classList.remove('invalid'); }

  /* returns true when the field is good enough to send */
  function checkEmail(showRequired) {
    const val = email.value.trim();
    clearHint();

    if (!val) {
      if (showRequired) {
        emailHint.textContent = t('emailRequired');
        emailHint.className = 'field-hint bad';
        email.classList.add('invalid');
      }
      return false;
    }

    if (!EMAIL_RE.test(val)) {
      const afterAt = val.split('@')[1];
      emailHint.textContent = (afterAt && !afterAt.includes('.')) ? t('emailNoDot') : t('emailFormat');
      emailHint.className = 'field-hint bad';
      email.classList.add('invalid');
      return false;
    }

    /* well-formed — look for a likely typo in the domain */
    const [local, domain] = val.split('@');
    const fix = suggestDomain(domain.toLowerCase());
    if (fix) {
      emailHint.className = 'field-hint';
      emailHint.textContent = t('didYouMean') + ' ';
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = local + '@' + fix;
      b.addEventListener('click', () => { email.value = local + '@' + fix; clearHint(); });
      emailHint.appendChild(b);
      emailHint.appendChild(document.createTextNode('? '));
      /* a suggestion is advisory — the address may still be correct */
    }
    return true;
  }

  email.addEventListener('blur', () => checkEmail(false));
  email.addEventListener('input', () => { if (email.classList.contains('invalid')) checkEmail(false); });

  /* client-side rate limit: max 3 sends per 10 minutes, min 20s between sends.
     This is a UX guard only — the real limit is enforced by the form provider. */
  const WINDOW_MS = 10 * 60 * 1000, MAX_IN_WINDOW = 3, MIN_GAP_MS = 20 * 1000;
  const readLog = () => { try { return JSON.parse(localStorage.getItem('cf_log') || '[]'); } catch (e) { return []; } };
  const writeLog = (l) => { try { localStorage.setItem('cf_log', JSON.stringify(l)); } catch (e) {} };

  let busy = false;
  const formLoadedAt = Date.now();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (busy) return;

    /* honeypot + time-trap: bots submit instantly and fill hidden fields */
    if (form.botcheck.value || Date.now() - formLoadedAt < 3000) {
      statusEl.className = 'status ok';
      statusEl.textContent = t('ok');
      form.reset();
      return;
    }

    const now = Date.now();
    const log = readLog().filter(ts => now - ts < WINDOW_MS);
    if (log.length >= MAX_IN_WINDOW || (log.length && now - log[log.length - 1] < MIN_GAP_MS)) {
      statusEl.className = 'status err';
      statusEl.textContent = t('slow');
      return;
    }

    /* email gets its own check so the person sees exactly what is wrong */
    if (!checkEmail(true)) {
      statusEl.className = 'status';
      statusEl.textContent = '';
      email.focus();
      return;
    }

    if (!form.checkValidity()) {
      statusEl.className = 'status err';
      statusEl.textContent = t('invalid');
      const firstBad = form.querySelector(':invalid');
      if (firstBad) firstBad.focus();
      return;
    }

    busy = true;
    btn.disabled = true;
    statusEl.className = 'status';
    statusEl.textContent = t('sending');

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        log.push(now); writeLog(log);
        statusEl.className = 'status ok';
        statusEl.textContent = t('ok');
        form.reset();
        clearHint();
        try { if (window.va) window.va('event', { name: 'contact_form_sent' }); } catch (err) {}
      } else {
        throw new Error('submit failed');
      }
    } catch (err) {
      statusEl.className = 'status err';
      statusEl.textContent = t('err');
    } finally {
      busy = false;
      btn.disabled = false;
    }
  });
})();
