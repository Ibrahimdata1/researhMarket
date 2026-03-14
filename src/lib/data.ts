// ============================================================
// Thailand Tech Market Research Data
// All data sourced from public reports, news articles, and market research
// Sources: Momentum Works, Mordor Intelligence, Statista, Bangkok Post,
//          TechCrunch, Nation Thailand, Ken Research, Grand View Research
// ============================================================

export interface SectorData {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  marketSizeTHB: string;      // in billion THB
  marketSizeUSD: string;      // in billion USD
  growthRate: string;          // CAGR %
  dominantPlayers: {
    name: string;
    marketShare: number;       // percentage
    revenue: string;           // THB or USD
    valuation: string;
    strengths: string[];
    weaknesses: string[];
  }[];
  totalAddressableMarket: string;
  opportunityScore: number;    // 1-10
  entryDifficulty: number;     // 1-10 (10 = hardest)
  description: string;
  keyInsight: string;
  source: string;
}

export const digitalEconomyOverview = {
  totalGMV2024: 49,            // billion USD
  totalGMV2025: 56,            // billion USD projected
  growthRate: 16,              // % YoY
  gdpContribution: 23.9,      // % of GDP
  gdpContributionTHB: 4440,   // billion THB
  digitalPaymentGTV: 163,     // billion USD in 2025
  startupEcosystemValue: 4.9, // billion USD
  totalStartups: 2100,
  unicorns: 5,
  seedFunding2024: 500,        // million USD total startup funding
  globalRanking: 54,
  seaRanking: 4,
  internetUsers: 61.21,        // million
  internetPenetration: 85.3,   // %
  source: "Google e-Conomy SEA 2024, Trade.gov, TVCA"
};

export const sectors: SectorData[] = [
  {
    id: "food-delivery",
    name: "ฟู้ดเดลิเวอรี่",
    nameEn: "Food Delivery",
    icon: "🍜",
    marketSizeTHB: "143",
    marketSizeUSD: "4.2",
    growthRate: "12",
    dominantPlayers: [
      {
        name: "Grab",
        marketShare: 46,
        revenue: "ไม่เปิดเผย (Grab Thailand)",
        valuation: "$40B (ทั้งกลุ่ม, SET-listed)",
        strengths: [
          "Super App (ride-hailing + food + payments)",
          "First-mover advantage ตั้งแต่ 2013",
          "GrabPay ecosystem ผูกผู้ใช้",
          "เครือข่าย rider มากที่สุดในไทย",
        ],
        weaknesses: [
          "ค่า GP สูง 30-35% ร้านอาหารบ่นมาก",
          "Customer service ช้า AI chatbot ไม่ตอบโจทย์",
          "UI/UX ซับซ้อน feature เยอะเกิน",
          "ไม่ focus เฉพาะ food — ถูก dilute ด้วย services อื่น",
        ],
      },
      {
        name: "LINE MAN Wongnai",
        marketShare: 40,
        revenue: "~$451M (15.3B THB) ปี 2024",
        valuation: "$1B+ (Unicorn, กำลัง IPO)",
        strengths: [
          "ฐานข้อมูลร้านอาหารจาก Wongnai 400K+ ร้าน",
          "ผูกกับ LINE app ที่คนไทยใช้ทุกวัน",
          "Market share โตจาก 36% เป็น 40% ใน 1 ปี",
          "เพิ่งมีกำไรครั้งแรกปี 2025",
        ],
        weaknesses: [
          "พึ่งพา LINE ecosystem มากเกินไป",
          "ยังไม่มี payment wallet ของตัวเอง",
          "Rider network เล็กกว่า Grab ในต่างจังหวัด",
          "ข้อมูล review เก่า ไม่ update ทันเวลา",
        ],
      },
      {
        name: "ShopeeFood",
        marketShare: 7,
        revenue: "ไม่เปิดเผยแยก",
        valuation: "ส่วนหนึ่งของ Sea Ltd ($25B)",
        strengths: [
          "Leverage ฐานลูกค้า Shopee 40M+ คน",
          "โปรโมชั่นราคาถูกดึงลูกค้า",
        ],
        weaknesses: [
          "ยังเป็น add-on ไม่ใช่ core business",
          "Rider ไม่เพียงพอในหลายพื้นที่",
        ],
      },
    ],
    totalAddressableMarket: "200B THB (รวมร้านอาหารทั้ง dine-in + delivery + cloud kitchen)",
    opportunityScore: 6,
    entryDifficulty: 9,
    description:
      "ตลาดฟู้ดเดลิเวอรี่ไทยเป็น duopoly ระหว่าง Grab และ LINE MAN ที่ครอง 86% ของตลาด หลัง foodpanda ถอนตัวไปปี 2024 ตลาดรวมกันมีมูลค่า $4.2B ในปี 2024",
    keyInsight:
      "ร้านอาหารเจ็บปวดจากค่า GP 30-35% — โอกาสสำหรับ B2B SaaS ที่ช่วยร้านอาหารจัดการ multi-platform + สร้าง direct channel",
    source: "Momentum Works 2024, Statista, Bangkok Post",
  },
  {
    id: "ecommerce",
    name: "อีคอมเมิร์ซ",
    nameEn: "E-Commerce",
    icon: "🛒",
    marketSizeTHB: "1,100",
    marketSizeUSD: "33",
    growthRate: "14",
    dominantPlayers: [
      {
        name: "Shopee",
        marketShare: 50,
        revenue: "49.96B THB (2024)",
        valuation: "ส่วนหนึ่งของ Sea Ltd ($25B)",
        strengths: [
          "แอปอันดับ 1 ในไทยด้าน e-commerce",
          "Free shipping + voucher ดึงลูกค้า",
          "ShopeePay ผูก ecosystem",
          "Live commerce แข็งแกร่ง",
        ],
        weaknesses: [
          "กำไรน้อย (4.63B จาก 50B revenue = ~9%)",
          "พึ่งพาส่วนลดหนัก ลูกค้าไม่ loyal",
          "สินค้าจีนราคาถูกท่วม คุณภาพต่ำ",
          "Seller support ไม่ดี ระบบปรับนโยบายบ่อย",
        ],
      },
      {
        name: "Lazada",
        marketShare: 30,
        revenue: "30.16B THB (2025)",
        valuation: "ส่วนหนึ่งของ Alibaba Group",
        strengths: [
          "Backend logistics LazFlash แข็งแกร่ง",
          "Alibaba technology + AI recommendation",
          "LazMall สำหรับ brand ใหญ่",
        ],
        weaknesses: [
          "Market share หดลงเรื่อยๆ",
          "UX ไม่ดีเท่า Shopee",
          "ผู้บริหารเปลี่ยนบ่อย ขาดทิศทาง",
        ],
      },
      {
        name: "TikTok Shop",
        marketShare: 15,
        revenue: "ไม่เปิดเผย",
        valuation: "ส่วนหนึ่งของ ByteDance ($300B)",
        strengths: [
          "Social commerce + content ดึง Gen Z",
          "Affiliate marketing แข็งแกร่ง",
          "Live selling ยอดพุ่งมาก",
        ],
        weaknesses: [
          "ยังไม่มี logistics ของตัวเอง",
          "ความเสี่ยงด้าน regulation",
          "สินค้าเกรดต่ำ ขาดความน่าเชื่อถือ",
        ],
      },
    ],
    totalAddressableMarket: "1,600B THB by 2027",
    opportunityScore: 5,
    entryDifficulty: 10,
    description:
      "ตลาดอีคอมเมิร์ซไทยโตจาก 980B เป็น 1,100B THB ในปี 2024 (+14%) Shopee ครอง ~50% ตามด้วย Lazada 30% และ TikTok Shop กำลังมาแรง",
    keyInsight:
      "โอกาสไม่ใช่การแข่งกับ platform ใหญ่ แต่อยู่ที่ e-commerce enabler — tools สำหรับ seller: inventory, multi-channel, analytics, fulfillment",
    source: "Nation Thailand, Momentum Works, eCommerceDB",
  },
  {
    id: "fintech",
    name: "ฟินเทค & Digital Payment",
    nameEn: "FinTech & Payments",
    icon: "💳",
    marketSizeTHB: "1,080",
    marketSizeUSD: "31.8",
    growthRate: "18.1",
    dominantPlayers: [
      {
        name: "PromptPay (ธปท.)",
        marketShare: 41,
        revenue: "Infrastructure — ไม่มี revenue ตรง",
        valuation: "Government infrastructure",
        strengths: [
          "90M+ registrations ครอบคลุมเกือบทุกคนไทย",
          "74M transactions/day",
          "ฟรี ไม่มีค่าธรรมเนียม",
          "ผูกกับทุก mobile banking app",
        ],
        weaknesses: [
          "ไม่มี loyalty/reward system",
          "ไม่รองรับ cross-border ดี",
          "ไม่มี merchant analytics",
          "ขาด API สำหรับ SME integration",
        ],
      },
      {
        name: "TrueMoney Wallet",
        marketShare: 52.6,
        revenue: "ไม่เปิดเผย (Ascend Money - Unicorn)",
        valuation: "$1B+ (Ascend Money, backed by CP Group + Ant Group)",
        strengths: [
          "52.6% ส่วนแบ่งตลาด e-wallet",
          "7-Eleven 14,000+ สาขาเป็นจุดเติมเงิน",
          "Cross-border payments ใน ASEAN",
        ],
        weaknesses: [
          "ผูกกับ True/CP ecosystem มาก",
          "ไม่ popular กับคนรุ่นใหม่เท่า banking apps",
          "UI/UX ยุ่งเหยิง features เยอะเกิน",
        ],
      },
      {
        name: "K PLUS (KBank)",
        marketShare: 20,
        revenue: "KBank digital banking ~30B THB",
        valuation: "ส่วนหนึ่งของ KBank (SET: KBANK)",
        strengths: [
          "Mobile banking อันดับ 1 ของไทย",
          "K+ market สำหรับ investment",
          "UX ดีที่สุดในกลุ่มแบงค์",
        ],
        weaknesses: [
          "เป็นแบงค์ ปรับตัวช้า",
          "ค่าธรรมเนียมบาง services สูง",
          "Innovation ถูก regulate หนัก",
        ],
      },
    ],
    totalAddressableMarket: "$118.5B by 2032 (mobile payments)",
    opportunityScore: 7,
    entryDifficulty: 8,
    description:
      "92% ของคนไทยใช้ digital payment แล้ว PromptPay มี 90M+ registrations, TrueMoney ครอง 52.6% ของ e-wallet market ตลาด mobile payments $31.8B ในปี 2024",
    keyInsight:
      "แม้ payment จะ saturated แต่ SME financial tools (invoicing, cashflow, expense management) ยังมี gap มหาศาล — SME 3.2M ราย ส่วนใหญ่ยังใช้ Excel",
    source: "Mordor Intelligence, Verified Market Research, Nation Thailand",
  },
  {
    id: "logistics",
    name: "โลจิสติกส์ & ขนส่งพัสดุ",
    nameEn: "Logistics & Parcel Delivery",
    icon: "📦",
    marketSizeTHB: "115",
    marketSizeUSD: "3.4",
    growthRate: "7.16",
    dominantPlayers: [
      {
        name: "Flash Express",
        marketShare: 28,
        revenue: "24.7B THB (2024, +23% YoY)",
        valuation: "$2B (Thailand's 1st Unicorn)",
        strengths: [
          "เครือข่ายกว้างครอบคลุมทั่วประเทศ",
          "ราคาถูกที่สุดในตลาด",
          "เพิ่งมีกำไร 940M THB ปี 2024",
          "Tech-driven operations",
        ],
        weaknesses: [
          "คุณภาพบริการไม่สม่ำเสมอ พัสดุเสียหายบ่อย",
          "Customer service แย่ ติดต่อยาก",
          "ระบบ tracking ไม่ real-time จริง",
          "พึ่งพา e-commerce platform มากเกิน",
        ],
      },
      {
        name: "J&T Express",
        marketShare: 25,
        revenue: "25.4B THB (2024, +37% YoY)",
        valuation: "ส่วนหนึ่งของ J&T Global (HKEx listed)",
        strengths: [
          "Revenue สูงสุดในตลาด",
          "กำไร 819M THB (+111% YoY)",
          "เครือข่าย drop-off กว้าง",
        ],
        weaknesses: [
          "Brand perception ยังตามหลัง Flash",
          "ค่าส่งเฉลี่ยสูงกว่า Flash",
          "Innovation ช้า ตาม trend",
        ],
      },
      {
        name: "Kerry Express (KEX)",
        marketShare: 15,
        revenue: "ขาดทุนสะสม 12.9B THB (2022-2024)",
        valuation: "SET: KEX (market cap ลดลงมาก)",
        strengths: [
          "Brand เก่าแก่ น่าเชื่อถือ",
          "จุด drop-off ตาม 7-Eleven",
        ],
        weaknesses: [
          "ขาดทุนหนักต่อเนื่อง 3 ปี",
          "ไม่สามารถแข่งราคาได้",
          "Technology outdated",
          "กำลัง restructure",
        ],
      },
    ],
    totalAddressableMarket: "$4.04B by 2030",
    opportunityScore: 6,
    entryDifficulty: 9,
    description:
      "ตลาดส่งพัสดุไทยมีมูลค่า 115B THB ส่ง 7-8 ล้านชิ้น/วัน Flash Express และ J&T ครองตลาด ขณะที่ Kerry ขาดทุนหนัก",
    keyInsight:
      "โอกาสอยู่ที่ logistics SaaS — warehouse management, route optimization, และ fulfillment-as-a-service สำหรับ SME seller",
    source: "Mordor Intelligence, Bangkok Post, Nation Thailand",
  },
  {
    id: "proptech",
    name: "อสังหาฯ เทค",
    nameEn: "PropTech",
    icon: "🏠",
    marketSizeTHB: "40.8",
    marketSizeUSD: "1.2",
    growthRate: "15",
    dominantPlayers: [
      {
        name: "DDproperty (PropertyGuru)",
        marketShare: 40,
        revenue: "ส่วนหนึ่งของ PropertyGuru Group (NYSE listed)",
        valuation: "PropertyGuru ~$1.3B (ทั้งกลุ่ม)",
        strengths: [
          "Brand อันดับ 1 ในไทย",
          "Data + analytics ดีที่สุด",
          "ผูกกับ developer รายใหญ่",
        ],
        weaknesses: [
          "Focus แค่ listing ไม่ครอบคลุม transaction",
          "ไม่มี transaction management integration",
          "ค่าลงประกาศแพง สำหรับ agent รายเล็ก",
          "ไม่มี property management tools",
        ],
      },
      {
        name: "Hipflat",
        marketShare: 15,
        revenue: "ไม่เปิดเผย",
        valuation: "Startup stage",
        strengths: [
          "Data-driven valuation tools",
          "UX ดี modern",
          "ข้อมูลราคาตลาดละเอียด",
        ],
        weaknesses: [
          "ฐานผู้ใช้เล็กกว่า DDproperty มาก",
          "ไม่มี agent network",
          "Revenue model ยังไม่ชัด",
        ],
      },
    ],
    totalAddressableMarket: "200B THB (รวม property management + transactions)",
    opportunityScore: 8,
    entryDifficulty: 6,
    description:
      "60%+ ของ property transactions เริ่มต้นออนไลน์ ตลาด PropTech $1.2B แต่ส่วนใหญ่เป็นแค่ listing portal — ยังขาด end-to-end solution",
    keyInsight:
      "Gap ใหญ่: ไม่มีใครทำ end-to-end property transaction + management ครบวงจร (search → compare → contract → management) เหมือน Zillow + Buildium ของไทย",
    source: "Ken Research, DDProperty, PropertyGuru Annual Report",
  },
  {
    id: "healthtech",
    name: "เฮลท์เทค & Telemedicine",
    nameEn: "HealthTech & Telemedicine",
    icon: "🏥",
    marketSizeTHB: "54.4",
    marketSizeUSD: "1.6",
    growthRate: "29.1",
    dominantPlayers: [
      {
        name: "MorDee (True Digital)",
        marketShare: 25,
        revenue: "ไม่เปิดเผย",
        valuation: "ส่วนหนึ่งของ True Corp ($15B+)",
        strengths: [
          "First-mover ใน telemedicine ไทย",
          "ผูกกับ True ecosystem + hospitals",
          "ได้ทั้ง B2C และ B2B",
        ],
        weaknesses: [
          "Adoption rate ยังต่ำมาก",
          "หมอในระบบไม่เพียงพอ",
          "ไม่ integrate กับ HIS ของ รพ.",
          "UX ยุ่งยาก คนแก่ใช้ไม่เป็น",
        ],
      },
      {
        name: "Doctor Anywhere",
        marketShare: 15,
        revenue: "ไม่เปิดเผย (ทั้ง SEA)",
        valuation: "$200M+ (regional)",
        strengths: [
          "Regional presence ทั่ว SEA",
          "Corporate wellness programs",
          "Pharmacy delivery",
        ],
        weaknesses: [
          "ไม่ localize สำหรับไทยดีพอ",
          "ราคาแพงกว่าคู่แข่งท้องถิ่น",
          "ไม่มี offline touchpoints",
        ],
      },
    ],
    totalAddressableMarket: "$9.51B by 2030",
    opportunityScore: 9,
    entryDifficulty: 7,
    description:
      "ตลาด telehealth ไทย $1.6B โตเร็วที่สุดที่ CAGR 29.1% แต่ adoption ยังต่ำ ขาดแพลตฟอร์มที่เชื่อมโยงทุกฝ่ายได้จริง",
    keyInsight:
      "คลินิกเล็ก 20,000+ แห่งยังใช้กระดาษ — โอกาสสำหรับ Clinic SaaS (EHR + นัดหมาย + telemedicine + จ่ายยา) แบบ subscription ราคาถูก",
    source: "Grand View Research, Research and Markets, True Blog",
  },
  {
    id: "edtech",
    name: "เอ็ดเทค",
    nameEn: "EdTech",
    icon: "📚",
    marketSizeTHB: "59.7",
    marketSizeUSD: "1.76",
    growthRate: "11.44",
    dominantPlayers: [
      {
        name: "StartDee",
        marketShare: 20,
        revenue: "ไม่เปิดเผย (pre-revenue stage)",
        valuation: "Series A funded",
        strengths: [
          "K-12 focus — 7.1M smartphone-equipped students",
          "Content คุณภาพ ติวเตอร์ดัง",
          "Founded by พิธา ลิ้มเจริญรัตน์ — brand recognition",
        ],
        weaknesses: [
          "Revenue model ยังไม่ proven",
          "ต้องแข่งกับ YouTube ฟรี",
          "Retention rate ต่ำ",
        ],
      },
      {
        name: "SkillLane",
        marketShare: 25,
        revenue: "~221M THB (ปี 2022, ~$6.28M)",
        valuation: "Listed company — Series B+",
        strengths: [
          "ผู้นำ online course — 1.3M users",
          "คอร์สหลากหลาย 3,900+",
          "Partnership กับ corporate training",
        ],
        weaknesses: [
          "Course quality ไม่สม่ำเสมอ",
          "Completion rate ต่ำ <20%",
          "ไม่มี certification ที่ employer ยอมรับ",
        ],
      },
    ],
    totalAddressableMarket: "$15.38B growth 2025-2029 (K-12 alone)",
    opportunityScore: 7,
    entryDifficulty: 5,
    description:
      "EdTech ไทยยังกระจัดกระจาย ไม่มีผู้เล่นรายใหญ่ที่ครองตลาดจริงๆ K-12 กำลังโต 15% CAGR แต่ส่วนใหญ่ยังเป็น offline tutoring",
    keyInsight:
      "Upskilling/Reskilling สำหรับ workforce เป็น gap ใหญ่ — โดยเฉพาะ digital skills, AI, data ที่บริษัทต้องการแต่หาคนไม่ได้",
    source: "Technavio, Startup in Thailand, 6W Research",
  },
  {
    id: "hrtech",
    name: "เอชอาร์เทค",
    nameEn: "HR Tech & Recruitment",
    icon: "👥",
    marketSizeTHB: "8.84",
    marketSizeUSD: "0.26",
    growthRate: "12",
    dominantPlayers: [
      {
        name: "JobThai",
        marketShare: 35,
        revenue: "~$58.9M (~2B THB) ประมาณการ 2026",
        valuation: "Private company (profitable)",
        strengths: [
          "150,000+ daily users, 3M+ daily pageviews",
          "1.6M+ resumes, 95,000+ jobs updated daily",
          "UX ง่าย ตรงจุด",
        ],
        weaknesses: [
          "เป็นแค่ job board ไม่ใช่ HR solution",
          "ไม่มี ATS (Applicant Tracking System)",
          "ไม่มี AI matching",
          "ไม่ serve กลุ่ม white collar ดี",
        ],
      },
      {
        name: "JobsDB (SEEK)",
        marketShare: 30,
        revenue: "ส่วนหนึ่งของ SEEK Ltd (ASX listed)",
        valuation: "SEEK ~$7B (ทั้งกลุ่ม)",
        strengths: [
          "ครอง white collar / professional",
          "Regional presence",
          "Data + salary insights",
        ],
        weaknesses: [
          "ค่าลงประกาศแพงมาก สำหรับ SME",
          "UX เก่า ไม่ทันสมัย",
          "ไม่มี payroll / HR tools integration",
        ],
      },
    ],
    totalAddressableMarket: "30B THB (HR tech + payroll + recruitment + training)",
    opportunityScore: 8,
    entryDifficulty: 5,
    description:
      "ตลาด HR Tech ไทย $260M กำลังโต แต่ส่วนใหญ่ยังเป็นแค่ job boards ไม่มี all-in-one HR platform สำหรับ SME",
    keyInsight:
      "SME ไทย 3.2M ราย ส่วนใหญ่ยังทำ HR ด้วยมือ — payroll, ลาหยุด, สัญญาจ้าง, ประกันสังคม ทำบน Excel ทั้งหมด โอกาสสำหรับ HRIS SaaS ราคา SME",
    source: "Ken Research, Bangkok Post, Manatal",
  },
  {
    id: "sme-saas",
    name: "SME SaaS & บัญชี",
    nameEn: "SME SaaS & Accounting",
    icon: "📊",
    marketSizeTHB: "15",
    marketSizeUSD: "0.44",
    growthRate: "20.76",
    dominantPlayers: [
      {
        name: "PEAK",
        marketShare: 30,
        revenue: "$3.3M (~112M THB) ปี 2024",
        valuation: "Startup — growing fast",
        strengths: [
          "Revenue โต 37.5% YoY ($2.4M→$3.3M)",
          "ทีมเล็ก 39 คน — efficient",
          "ออกแบบสำหรับกฎหมายบัญชีไทยโดยเฉพาะ",
          "Integration กับกรมสรรพากร",
        ],
        weaknesses: [
          "ยังเล็กมาก revenue แค่ $3.3M",
          "Feature ยังไม่ครบ (ขาด payroll, inventory)",
          "Marketing budget น้อย awareness ต่ำ",
          "ยังไม่มี mobile app ที่ดี",
        ],
      },
      {
        name: "FlowAccount",
        marketShare: 35,
        revenue: "~$13.5M (~459M THB) ประมาณการ",
        valuation: "Funded $5.11M total (500 Global, Money Forward)",
        strengths: [
          "130,000+ active users — ฐานใหญ่สุด",
          "UI ง่าย เหมาะ non-accountant",
          "มี payroll module (FlowPayroll)",
          "Brand recognition ดี",
        ],
        weaknesses: [
          "Features ตื้น ไม่เหมาะธุรกิจโตแล้ว",
          "ไม่มี inventory management",
          "API integration จำกัด",
          "ยังไม่ profitable (คาดการณ์)",
        ],
      },
    ],
    totalAddressableMarket: "$1.13B by 2029",
    opportunityScore: 9,
    entryDifficulty: 4,
    description:
      "ตลาด SaaS ไทย $440M โต 20.76% CAGR แต่ SME 3.2M รายส่วนใหญ่ยังไม่ใช้ cloud software — penetration ต่ำมาก",
    keyInsight:
      "โอกาสทอง: All-in-one SME OS (บัญชี + POS + inventory + payroll + CRM) ที่ทำให้ SME เปลี่ยนจาก Excel เป็น cloud ได้ใน 1 วัน — ตลาดที่ PEAK/FlowAccount ยังทำไม่ครบ",
    source: "Statista, GetLatka, FlowAccount",
  },
  {
    id: "agritech",
    name: "อะกรีเทค",
    nameEn: "AgriTech",
    icon: "🌾",
    marketSizeTHB: "2.73",
    marketSizeUSD: "0.08",
    growthRate: "6.08",
    dominantPlayers: [
      {
        name: "Ricult",
        marketShare: 10,
        revenue: "ไม่เปิดเผย",
        valuation: "Early stage",
        strengths: [
          "AI weather + crop prediction",
          "ได้รับทุนจาก Bill Gates",
          "Focus ข้าว — Thailand's #1 crop",
        ],
        weaknesses: [
          "Scale ยาก เกษตรกรไม่ใช้ smartphone เก่ง",
          "Revenue model ไม่ชัด",
          "ต้องพึ่ง government programs",
        ],
      },
    ],
    totalAddressableMarket: "$113.96M by 2029 (AgriTech) + $27.31B (Agribusiness)",
    opportunityScore: 6,
    entryDifficulty: 7,
    description:
      "AgriTech ไทยยังเล็กมาก $80M แต่ agriculture คือ 8.5% ของ GDP ไทย มีเกษตรกร 12M คน startup 81 ราย แต่ส่วนใหญ่ยังอยู่ stage เริ่มต้น",
    keyInsight:
      "โอกาสที่ farmer-facing app ไม่ใช่ทางออก — ควร focus B2B: supply chain traceability, IoT monitoring สำหรับ food processors + exporters ที่ต้อง comply กับมาตรฐานส่งออก",
    source: "IMARC Group, GlobeNewsWire, AGROWTH Platform",
  },
  {
    id: "traveltech",
    name: "แทรเวลเทค",
    nameEn: "Travel Tech",
    icon: "✈️",
    marketSizeTHB: "121",
    marketSizeUSD: "3.56",
    growthRate: "9.81",
    dominantPlayers: [
      {
        name: "Agoda",
        marketShare: 69,
        revenue: "~$5B (ทั่วโลก, ส่วนหนึ่งของ Booking Holdings)",
        valuation: "ส่วนหนึ่งของ Booking Holdings ($140B+)",
        strengths: [
          "69% คนไทยที่ใช้ OTA เลือก Agoda",
          "ก่อตั้งในไทย มี tech team ใหญ่ที่ BKK",
          "ได้รับการสนับสนุนจากรัฐ (เราเที่ยวด้วยกัน)",
          "ราคาแข่งขันได้ดีที่สุดในไทย",
        ],
        weaknesses: [
          "เป็นของ Booking Holdings (ต่างชาติ) ไม่ใช่ไทย",
          "Focus แค่ที่พัก ไม่ครอบคลุม experience/tour",
          "ค่า commission สูง 15-25% สำหรับโรงแรม",
          "ไม่มี B2B hotel management SaaS",
        ],
      },
      {
        name: "Traveloka",
        marketShare: 15,
        revenue: "ไม่เปิดเผยเฉพาะไทย",
        valuation: "$3B (regional, Indonesia-based)",
        strengths: [
          "Super app: flight + hotel + activity + payment",
          "แข็งแกร่งในกลุ่ม ASEAN travelers",
        ],
        weaknesses: [
          "ไม่ใช่ที่ 1 ในไทย (Agoda ครอง)",
          "UX ซับซ้อน features เยอะ",
          "ยังขาดทุนในหลายตลาด",
        ],
      },
    ],
    totalAddressableMarket: "$8.26B by 2033",
    opportunityScore: 6,
    entryDifficulty: 8,
    description:
      "ตลาดท่องเที่ยวออนไลน์ $3.56B ในปี 2024 — Agoda ครอง 69% ของผู้ใช้ OTA ไทย รายได้ท่องเที่ยวในประเทศ 952B THB ในปี 2024 โต 11.64%",
    keyInsight:
      "โอกาสอยู่ที่ B2B: Hospitality SaaS สำหรับโรงแรม/รีสอร์ทขนาดเล็ก (PMS + channel manager + revenue management) ที่ยังใช้ Excel จัดการ",
    source: "IMARC Group, Bloomberg, Ken Research, Statista",
  },
];

// Market size comparison chart data
export const marketSizeChartData = [
  { name: "E-Commerce", size: 33000, color: "#C87941" },
  { name: "FinTech/Payments", size: 31800, color: "#E8B878" },
  { name: "Food Delivery", size: 4200, color: "#fb923c" },
  { name: "Logistics", size: 3400, color: "#60a5fa" },
  { name: "HealthTech", size: 1600, color: "#4ade80" },
  { name: "PropTech", size: 1200, color: "#a78bfa" },
  { name: "EdTech", size: 1760, color: "#f472b6" },
  { name: "SaaS/SME", size: 440, color: "#22d3ee" },
  { name: "HR Tech", size: 260, color: "#94a3b8" },
  { name: "Travel Tech", size: 3560, color: "#fb923c" },
  { name: "AgriTech", size: 80, color: "#4ade80" },
];

// Growth rate comparison
export const growthRateChartData = [
  { name: "HealthTech", rate: 29.1, color: "#4ade80" },
  { name: "SaaS/SME", rate: 20.76, color: "#22d3ee" },
  { name: "FinTech", rate: 18.1, color: "#E8B878" },
  { name: "PropTech", rate: 15, color: "#a78bfa" },
  { name: "EdTech", rate: 11.44, color: "#f472b6" },
  { name: "E-Commerce", rate: 14, color: "#C87941" },
  { name: "Food Delivery", rate: 12, color: "#fb923c" },
  { name: "HR Tech", rate: 12, color: "#94a3b8" },
  { name: "Travel Tech", rate: 9.81, color: "#fb923c" },
  { name: "Logistics", rate: 7.16, color: "#60a5fa" },
  { name: "AgriTech", rate: 6.08, color: "#4ade80" },
];

// Opportunity matrix data
export const opportunityMatrix = [
  { sector: "SME SaaS", opportunity: 9, difficulty: 4, size: 440 },
  { sector: "HealthTech", opportunity: 9, difficulty: 7, size: 1600 },
  { sector: "PropTech", opportunity: 8, difficulty: 6, size: 1200 },
  { sector: "HR Tech", opportunity: 8, difficulty: 5, size: 260 },
  { sector: "FinTech", opportunity: 7, difficulty: 8, size: 31800 },
  { sector: "EdTech", opportunity: 7, difficulty: 5, size: 1760 },
  { sector: "Food Delivery", opportunity: 6, difficulty: 9, size: 4200 },
  { sector: "Logistics", opportunity: 6, difficulty: 9, size: 3400 },
  { sector: "AgriTech", opportunity: 6, difficulty: 7, size: 80 },
  { sector: "Travel Tech", opportunity: 6, difficulty: 8, size: 3560 },
  { sector: "E-Commerce", opportunity: 5, difficulty: 10, size: 33000 },
];

// Revenue projection for RunawayTech
export const revenueProjection = [
  { year: "Y1", conservative: 2, moderate: 5, aggressive: 10 },
  { year: "Y2", conservative: 8, moderate: 18, aggressive: 35 },
  { year: "Y3", conservative: 20, moderate: 45, aggressive: 85 },
  { year: "Y4", conservative: 40, moderate: 90, aggressive: 160 },
  { year: "Y5", conservative: 70, moderate: 150, aggressive: 280 },
];

// Strategy recommendations for RunawayTech
export interface StrategyRec {
  id: string;
  sector: string;
  productName: string;
  tagline: string;
  targetMarket: string;
  tam: string;
  capturable: string;
  revenueY3: string;
  howToEnter: string[];
  competitiveAdvantage: string[];
  pricing: string;
  priority: number;
}

export const strategies: StrategyRec[] = [
  {
    id: "sme-os",
    sector: "SME SaaS",
    productName: "RunawayOS",
    tagline: "ระบบจัดการธุรกิจ SME ครบจบในแอปเดียว",
    targetMarket: "SME ไทย 3.2 ล้านราย ที่ยังใช้ Excel/กระดาษ",
    tam: "$1.13B by 2029",
    capturable: "5% = $56.5M (1.9B THB)",
    revenueY3: "45M THB (1,500 ลูกค้า x 2,500/เดือน)",
    howToEnter: [
      "เริ่มจาก POS + Invoice + Expense เชื่อม e-Tax ของสรรพากร",
      "ให้ Free tier สำหรับ 1 ร้าน — upsell payroll, inventory, CRM",
      "Partnership กับสมาคมร้านค้า, หอการค้าจังหวัด",
      "Content marketing สอน SME ทำบัญชีผ่าน TikTok/YouTube",
      "Referral program: ร้านชวนร้าน ได้ฟรี 1 เดือน",
    ],
    competitiveAdvantage: [
      "All-in-one (PEAK ทำแค่บัญชี, FlowAccount ยังไม่ครบ)",
      "AI auto-categorize รายรับรายจ่ายจาก bank statement",
      "ราคาถูกกว่า 50% — ใช้ AI ลด support cost",
      "Mobile-first (คู่แข่งเป็น desktop-first)",
    ],
    pricing: "Free → 499 → 999 → 2,499 THB/เดือน",
    priority: 1,
  },
  {
    id: "clinic-saas",
    sector: "HealthTech",
    productName: "RunawayCare",
    tagline: "ระบบคลินิกอัจฉริยะ — นัดหมาย จ่ายยา เก็บเงิน จบในที่เดียว",
    targetMarket: "คลินิกเอกชน 20,000+ แห่งทั่วไทย",
    tam: "$9.51B by 2030 (telehealth), ~$500M clinic SaaS",
    capturable: "3% = ~$15M (510M THB)",
    revenueY3: "30M THB (500 คลินิก x 5,000/เดือน)",
    howToEnter: [
      "เริ่มจากระบบนัดหมาย + ประวัติคนไข้ (EHR lite) ฟรี",
      "Upsell: telemedicine, ระบบเก็บเงิน, ส่งยาถึงบ้าน",
      "เดินสาย demo ตาม clinic ในกรุงเทพ 500 แห่งแรก",
      "Partnership กับ บ. ยา, lab สำหรับ referral fee",
      "Integrate กับ PromptPay/QR payment ให้คลินิกรับเงินง่าย",
    ],
    competitiveAdvantage: [
      "MorDee เป็น B2C, ไม่มีใครทำ B2B clinic SaaS จริงจัง",
      "ระบบภาษาไทย ออกแบบมาสำหรับ workflow คลินิกไทย",
      "AI ช่วยบันทึก OPD notes จากเสียง",
      "เชื่อม สปสช./ประกันสังคม ลด paperwork",
    ],
    pricing: "Free → 1,999 → 4,999 → 9,999 THB/เดือน",
    priority: 2,
  },
  {
    id: "hr-platform",
    sector: "HR Tech",
    productName: "RunawayPeople",
    tagline: "HRIS สำหรับ SME ไทย — Payroll, ลาหยุด, ประกันสังคม ครบจบ",
    targetMarket: "SME 3.2M ราย ที่มีพนักงาน 5-200 คน (~500K บริษัท)",
    tam: "$260M (HR Tech) + ขยายไป payroll/benefits",
    capturable: "5% = $13M (442M THB)",
    revenueY3: "25M THB (800 บริษัท x 2,600/เดือน)",
    howToEnter: [
      "เริ่มจาก free payroll calculator + ประกันสังคม auto-file",
      "Upsell: leave management, time attendance, recruitment",
      "SEO + content: 'วิธีคำนวณเงินเดือน', 'ประกันสังคม SME'",
      "Partnership กับสำนักงานบัญชีเป็น reseller",
      "Integrate กับ PEAK/FlowAccount เพื่อ cross-sell",
    ],
    competitiveAdvantage: [
      "JobThai/JobsDB เป็นแค่ job board, ไม่ทำ HRIS",
      "คู่แข่ง global (BambooHR, Gusto) ไม่ localize ภาษาไทย",
      "Auto-calculate ภาษี, ประกันสังคม, กองทุนสำรองฯ ตามกฎหมายไทย",
      "ราคา SME-friendly — ไม่ต้องจ่าย 10,000+/เดือน เหมือน SAP",
    ],
    pricing: "Free (≤5 คน) → 29/คน/เดือน → 59/คน/เดือน",
    priority: 3,
  },
  {
    id: "proptech-platform",
    sector: "PropTech",
    productName: "RunawayProperty",
    tagline: "ค้นหา เปรียบเทียบ ซื้อ/เช่า จัดการอสังหาฯ ครบวงจร",
    targetMarket: "ผู้ซื้อ/เช่าอสังหาฯ + นายหน้า 50,000+ ราย + เจ้าของห้องเช่า",
    tam: "$1.2B (PropTech) expanding to $5B+ (transactions)",
    capturable: "3% PropTech = $36M (1.2B THB)",
    revenueY3: "20M THB",
    howToEnter: [
      "เริ่มจาก property management SaaS สำหรับเจ้าของห้องเช่า",
      "Free listing platform ที่ดีกว่า DDproperty (AI match)",
      "Property comparison + valuation tools integration",
      "เก็บค่า premium listing + transaction fee",
    ],
    competitiveAdvantage: [
      "DDproperty ทำแค่ listing, ไม่ครอบคลุม post-purchase",
      "End-to-end: search → compare → contract → sign → manage",
      "AI property valuation + rental yield calculator",
      "Tenant management app สำหรับเจ้าของ",
    ],
    pricing: "Free listing → Premium 299/เดือน → Agent Pro 1,999/เดือน",
    priority: 4,
  },
];
