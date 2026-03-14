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
  totalGMV2024: 49,            // billion USD (actual)
  totalGMV2025: 56,            // billion USD (Google e-Conomy SEA 2025)
  growthRate: 16,              // % YoY (2024→2025)
  gdpContribution: 6,         // % of GDP (digital economy, 2nd largest in ASEAN)
  gdpContributionTHB: 4690,   // billion THB (digital GDP 2025, +6.2% YoY)
  digitalPaymentGTV: 34.08,   // billion USD mobile payments 2026
  startupEcosystemValue: 4.9, // billion USD
  totalStartups: 2100,
  unicorns: 5,                 // Flash Express, LINE MAN, Ascend Money, Bitkub, OPN
  vcMarket2025: 552,           // million USD VC market 2025
  globalRanking: 53,           // up from 54 (+12.7% growth)
  seaRanking: 4,
  internetUsers: 67.8,         // million (Oct 2025, DataReportal)
  internetPenetration: 94.7,   // % (Oct 2025)
  fiveGCoverage: 95,           // %
  dataCenterInvestment: 23.1,  // billion USD approved 2025
  gdpGrowth2025: 2.4,          // % actual
  gdpForecast2026: "1.5-2.5",  // % NESDC
  source: "Google e-Conomy SEA 2025, DataReportal Digital 2026, NESDC, StartupBlink"
};

export const sectors: SectorData[] = [
  {
    id: "food-delivery",
    name: "ฟู้ดเดลิเวอรี่",
    nameEn: "Food Delivery",
    icon: "🍜",
    marketSizeTHB: "178",
    marketSizeUSD: "5.24",
    growthRate: "8",
    dominantPlayers: [
      {
        name: "Grab",
        marketShare: 46,
        revenue: "กลุ่มทั้งหมด 2025: $3.38-3.40B, ไทยโต 22% สูงสุดในภูมิภาค",
        valuation: "$14B (Nasdaq: GRAB)",
        strengths: [
          "แอปทำได้ทุกอย่าง (เรียกรถ + สั่งอาหาร + จ่ายเงิน)",
          "เข้าตลาดก่อนคนอื่นตั้งแต่ปี 2013",
          "มีระบบจ่ายเงิน GrabPay ที่ผูกผู้ใช้ไว้กับแอป",
          "เครือข่าย rider มากที่สุดในไทย",
        ],
        weaknesses: [
          "ค่า GP สูง 30-35% ร้านอาหารบ่นมาก",
          "บริการลูกค้าช้า แชทบอทตอบไม่ตรงประเด็น",
          "แอปซับซ้อน ฟีเจอร์เยอะเกินจนหาอะไรไม่เจอ",
          "ไม่ได้โฟกัสแค่อาหาร ทำหลายอย่างเลยไม่เก่งสักอย่าง",
        ],
      },
      {
        name: "LINE MAN Wongnai",
        marketShare: 40,
        revenue: "~$750M ต่อปี (เม.ย. 2025), มีกำไรครั้งแรกปี 2025",
        valuation: "$1B+ (Unicorn, กำลังจะ IPO ที่ฮ่องกงหรือนิวยอร์ก)",
        strengths: [
          "ฐานข้อมูลร้านอาหารจาก Wongnai 400K+ ร้าน",
          "ผูกกับ LINE app ที่คนไทยใช้ทุกวัน, 10 ล้าน MAU",
          "เพิ่งมีกำไรครั้งแรกปี 2025 หลังขาดทุนมาหลายปี",
          "ซื้อกิจการ Rabbit LINE Pay + FoodStory POS",
        ],
        weaknesses: [
          "พึ่งพาแอป LINE มากเกินไป ถ้า LINE หายไปก็ลำบาก",
          "IPO ถูกเลื่อนจากตลาดไทย ไปหาตลาดต่างประเทศแทน",
          "คนส่งอาหารน้อยกว่า Grab โดยเฉพาะนอกเมืองใหญ่",
          "รีวิวร้านอาหารเก่า ไม่อัพเดตทันเวลา",
        ],
      },
      {
        name: "ShopeeFood",
        marketShare: 7,
        revenue: "ไม่เปิดเผยแยก",
        valuation: "ส่วนหนึ่งของ Sea Ltd ($25B)",
        strengths: [
          "ดึงลูกค้า Shopee 40 ล้านคนมาใช้ได้เลย",
          "โปรโมชั่นราคาถูกดึงลูกค้า",
        ],
        weaknesses: [
          "เป็นแค่บริการเสริม ไม่ใช่ธุรกิจหลักของ Shopee",
          "คนส่งอาหารไม่เพียงพอในหลายพื้นที่",
        ],
      },
    ],
    totalAddressableMarket: "200B THB (รวมร้านอาหารทั้ง dine-in + delivery + cloud kitchen)",
    opportunityScore: 6,
    entryDifficulty: 9,
    description:
      "ตลาดสั่งอาหารออนไลน์ไทยปี 2025 มีมูลค่ากว่า 178,000 ล้านบาท ($5.24B) — Grab กับ LINE MAN ครอง ~90% ของตลาด หลัง foodpanda ปิดตัว 23 พ.ค. 2025 (ขาดทุนสะสม 13,800 ล้านบาท) Robinhood รับช่วงต่อลูกค้า/ไรเดอร์",
    keyInsight:
      "ร้านอาหารต้องจ่ายค่าคอมมิชชั่นให้แอปสั่งอาหาร 30-35% ของยอดขาย ซึ่งสูงมาก — โอกาสคือ: ทำซอฟต์แวร์ช่วยร้านอาหารจัดการออร์เดอร์จากทุกแอปในที่เดียว แล้วค่อยๆ สร้างช่องทางขายตรงให้ร้าน",
    source: "Momentum Works 2025, Statista, DealStreetAsia, Nation Thailand (พ.ค. 2025)",
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
        revenue: "ไทย 2024: 49.96B THB (กำไร 4.63B) | Sea Ltd ปี 2025: $23B (+36% YoY)",
        valuation: "Sea Ltd ~$50B (NYSE: SE, มี.ค. 2026)",
        strengths: [
          "แอปอันดับ 1 ในไทย ด้านซื้อของออนไลน์",
          "Sea Ltd ปี 2025 กำไร $1.6B (+260%) แข็งแกร่งมาก",
          "Instant delivery 1 ชม. ในกรุงเทพ เริ่มแล้ว",
          "Live commerce แข็งแกร่ง",
        ],
        weaknesses: [
          "ถูก TikTok Shop แย่งส่วนแบ่งตลาดอย่างรวดเร็ว",
          "ถูก Temu กดราคาจนร้านไทยแข่งไม่ได้",
          "สินค้าจีนราคาถูกท่วม คุณภาพต่ำ",
          "ปลด ShopeeFood/ShopeePay พนักงาน 300 คน (มิ.ย. 2025)",
        ],
      },
      {
        name: "Lazada",
        marketShare: 30,
        revenue: "30.16B THB (2024, กำไร 1.46B) | EBITDA บวกครั้งแรกรอบ 12 ปี (ก.ค. 2024)",
        valuation: "ส่วนหนึ่งของ Alibaba Group",
        strengths: [
          "LazMall 170,000 ร้าน brand แท้ — pivot เป็น 'ตลาดสินค้าคุณภาพ'",
          "เพิ่งมีกำไรครั้งแรกในรอบ 12 ปี (ก.ค. 2024)",
          "LazMall ยอดขายโต 51% — คนเริ่มหนีสินค้าจีนราคาถูกมาซื้อของดี",
        ],
        weaknesses: [
          "ส่วนแบ่งตลาดลดจาก 30% เหลือ ~22% ถูก TikTok Shop แซง",
          "ยังตามหลัง Shopee ห่างมาก",
          "ต้องแข่งกับ Temu ที่ขายถูกกว่าอีก",
        ],
      },
      {
        name: "TikTok Shop",
        marketShare: 21,
        revenue: "ไทย 2024: 12B THB (ขาดทุน 3.6B) | Q1 2025 GMV: $2.8B (โต 3 เท่า!)",
        valuation: "ส่วนหนึ่งของ ByteDance ($300B)",
        strengths: [
          "GMV โตขึ้น 3 เท่าใน Q1 2025 — เร็วที่สุดในไทย",
          "ผู้ขาย 3 ล้านร้านค้า, video sellers โต 175%",
          "Live selling ยอดพุ่งมาก — เปลี่ยนวิธีซื้อของคนไทย",
        ],
        weaknesses: [
          "ขาดทุน 3,600 ล้านบาทในปี 2024 แม้ยอดขายจะสูง",
          "ถูก ETDA จัดเป็น 'แพลตฟอร์มที่มีผลกระทบสูง' ต้องปฏิบัติตามกฎเข้มขึ้น",
          "สินค้าเกรดต่ำ ขาดความน่าเชื่อถือ",
        ],
      },
    ],
    totalAddressableMarket: "1,600B THB by 2027",
    opportunityScore: 5,
    entryDifficulty: 10,
    description:
      "ตลาดซื้อของออนไลน์ไทยปี 2025 มีมูลค่า $33B (43.5 ล้านผู้ใช้) — Shopee 49%, TikTok Shop โตขึ้น 3 เท่าแซง Lazada ขึ้นที่ 2, Temu บุกไทยทำโรงงาน 2,000 แห่งปิดตัว",
    keyInsight:
      "ไม่ควรแข่งกับแพลตฟอร์มใหญ่ แต่โอกาสคือ: ทำเครื่องมือช่วยร้านค้า 3 ล้านร้านที่ขายบน TikTok/Shopee/Lazada พร้อมกัน — จัดการสต็อก, โพสต์ขายหลายแอป, วิเคราะห์ยอดขาย, ตัดวิดีโอขายของ",
    source: "Sea Ltd Q4 2025 Earnings, Nation Thailand, Bangkok Post (มี.ค. 2026)",
  },
  {
    id: "fintech",
    name: "ฟินเทค & Digital Payment",
    nameEn: "FinTech & Payments",
    icon: "💳",
    marketSizeTHB: "1,160",
    marketSizeUSD: "34.08",
    growthRate: "14.7",
    dominantPlayers: [
      {
        name: "PromptPay (ธปท.)",
        marketShare: 41,
        revenue: "โครงสร้างพื้นฐานของรัฐ — ไม่เก็บเงินโดยตรง",
        valuation: "โครงสร้างพื้นฐานรัฐบาล (ธนาคารแห่งประเทศไทย)",
        strengths: [
          "90 ล้านบัญชี (มากกว่าประชากร 72 ล้านคน!)",
          "74 ล้านธุรกรรมต่อวัน (มิ.ย. 2025)",
          "ก.ย. 2025: 2,160 ล้านธุรกรรม มูลค่า 4.2 ล้านล้านบาท",
          "โอนข้ามประเทศ QR โต 119% ต้นปี 2025",
        ],
        weaknesses: [
          "ไม่มีระบบสะสมแต้ม/รางวัล",
          "ไม่มีเครื่องมือวิเคราะห์ข้อมูลให้ร้านค้า",
          "ยังขาดระบบเชื่อมต่อกับซอฟต์แวร์ร้านค้าเล็กๆ",
          "MRT กรุงเทพจะเป็น cashless เต็มรูปแบบ มิ.ย. 2026",
        ],
      },
      {
        name: "TrueMoney Wallet",
        marketShare: 52.6,
        revenue: "Ascend Money ~$750M/ปี (ก.ย. 2025) | 32 ล้านผู้ใช้",
        valuation: "$1.5B (Unicorn ตัวแรกของ fintech ไทย, 2021)",
        strengths: [
          "52.6% ส่วนแบ่งตลาดกระเป๋าเงินดิจิทัล, 32 ล้านผู้ใช้",
          "ได้ใบอนุญาตธนาคารดิจิทัล (Virtual Bank) มิ.ย. 2025!",
          "7-Eleven 14,000+ สาขาเป็นจุดเติมเงิน, ขยาย 7 ประเทศ",
        ],
        weaknesses: [
          "ผูกกับ True/CP ecosystem มาก",
          "ต้องแข่งกับอีก 2 ธนาคารดิจิทัลที่จะเปิดตัวกลางปี 2026",
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
      "ตลาด mobile payments ไทยปี 2026 มูลค่า $34B — คนไทย 89% ใช้กระเป๋าเงินดิจิทัล (สูงที่สุดในโลก) พร้อมเพย์ 90 ล้านบัญชี 74 ล้านธุรกรรม/วัน — เรื่องใหญ่: 3 ธนาคารดิจิทัลจะเปิดตัวกลางปี 2026 (CP Group, กรุงไทย+AIS, SCBX+KakaoBank+WeBank)",
    keyInsight:
      "ธนาคารดิจิทัล 3 แห่งเปิดตัวกลางปี 2026 จะเขย่าวงการ — แต่ร้านค้าเล็กๆ 3.2 ล้านร้านยังขาดเครื่องมือจัดการเงิน (ออกบิล, ดูกระแสเงินสด, บันทึกรายจ่าย) ยังใช้ Excel อยู่",
    source: "ธปท. ประกาศ 19 มิ.ย. 2025, Mordor Intelligence, Nation Thailand (มี.ค. 2026)",
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
        revenue: "24.7B THB (2024, +23%) กำไร 940M (จากขาดทุน 559M ปีก่อน)",
        valuation: "$2.1B (Unicorn ตัวแรกของไทย, ระดมทุนรวม $997M)",
        strengths: [
          "กลับมามีกำไรแล้ว (+268% จากปีก่อน)",
          "เครือข่ายกว้างครอบคลุมทั่วประเทศ ราคาถูกสุด",
          "ใช้เทคโนโลยีจัดการ ลดต้นทุน",
          "กำลังเตรียม IPO",
        ],
        weaknesses: [
          "ปิด 67 สาขา + ถอนตัวจากมาเลเซียทั้งหมด (ม.ค.) เพื่อลดต้นทุน",
          "ขาดทุนสะสม 5,300 ล้านบาทจากปี 2018-2023",
          "คุณภาพบริการไม่สม่ำเสมอ พัสดุเสียหายบ่อย",
          "บริการลูกค้าแย่ ติดต่อยาก",
        ],
      },
      {
        name: "J&T Express",
        marketShare: 25,
        revenue: "ไทย 2024: 25.4B THB (+37%) | กลุ่ม 2025: 30.13B พัสดุ (+22.2%)",
        valuation: "ส่วนหนึ่งของ J&T Global (HKEx listed, revenue $10.9B)",
        strengths: [
          "รายได้สูงสุดในตลาดไทย (เหนือ Flash Express)",
          "SEA โต 67.8% — บูมตาม TikTok Shop",
          "กำลังใส่ระบบคัดแยกอัตโนมัติระดับโรงงานทั่วไทย (แห่งแรกใน SEA)",
        ],
        weaknesses: [
          "ยังตามหลัง Flash Express ในด้าน brand",
          "ค่าส่งเฉลี่ยสูงกว่า Flash",
          "พึ่งพา TikTok Shop มากเกิน ถ้า TikTok โดน ban จะกระทบ",
        ],
      },
      {
        name: "Kerry Express (KEX)",
        marketShare: 15,
        revenue: "ขาดทุนสะสม 12.9B THB | ถูก SF Holding (จีน) ซื้อ 81.43% แล้วถอนออกจากตลาดหุ้น",
        valuation: "ถอนออกจากตลาดหุ้น SET (มิ.ย. 2025) ราคา tender 1.50 บาท/หุ้น",
        strengths: [
          "ยังมี Brand เก่าแก่ น่าเชื่อถือ",
          "มี SF Holding (บริษัทขนส่งยักษ์ใหญ่จีน) หนุนหลัง",
        ],
        weaknesses: [
          "ถูกถอนออกจากตลาดหุ้น — สัญญาณว่ากิจการไม่ดี",
          "ขาดทุนหนักต่อเนื่อง 3 ปี แข่งราคาไม่ได้",
          "เทคโนโลยีเก่า ตามคู่แข่งไม่ทัน",
          "ตกจากที่ 1 เหลืออันดับ 4",
        ],
      },
    ],
    totalAddressableMarket: "$4.04B by 2030",
    opportunityScore: 6,
    entryDifficulty: 9,
    description:
      "ตลาดส่งพัสดุไทยมีมูลค่า 115,000 ล้านบาท ส่งของ 7-8 ล้านชิ้นต่อวัน — Flash Express กับ J&T ครองตลาด ส่วน Kerry ขาดทุนหนักหลายปีติดต่อกัน",
    keyInsight:
      "โอกาสคือ: ทำซอฟต์แวร์ช่วยร้านค้าออนไลน์จัดการคลังสินค้า, วางแผนเส้นทางส่ง, และบริการแพ็คส่งของแทนร้านค้า",
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
        revenue: "PropertyGuru Q2 2024: S$41M (+10%) | ถูก EQT ซื้อไป $1.1B แล้วถอนจาก NYSE",
        valuation: "ถูก EQT ซื้อกิจการ ~$1.1B (ต้นปี 2025, ถอนจากตลาดหุ้นแล้ว)",
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
        name: "PropertyScout",
        marketShare: 10,
        revenue: "ไม่เปิดเผย",
        valuation: "ระดมทุนรวม $10.6M (Series A $5M จาก Altara Ventures)",
        strengths: [
          "แพลตฟอร์มซื้อขาย/เช่าครบวงจร — ฐานข้อมูลใหญ่และแม่นยำที่สุดในไทย",
          "UX ดี ทันสมัย กำลังขยายไป SEA",
          "มีแผนซื้อกิจการเพิ่ม",
        ],
        weaknesses: [
          "ยังเล็กกว่า DDproperty มาก",
          "ยังต้องระดมทุนเพิ่ม",
          "ยังไม่พิสูจน์ว่าจะมีกำไร",
        ],
      },
    ],
    totalAddressableMarket: "200B THB (รวม property management + transactions)",
    opportunityScore: 8,
    entryDifficulty: 6,
    description:
      "กว่า 60% ของคนที่จะซื้อ/เช่าบ้าน-คอนโด เริ่มต้นค้นหาทางออนไลน์ ตลาดรวม 40,800 ล้านบาท — แต่เว็บส่วนใหญ่แค่ลงประกาศ ไม่ได้ช่วยอะไรมากกว่านั้น",
    keyInsight:
      "ยังไม่มีใครทำแอปที่ครบวงจร ตั้งแต่ค้นหาบ้าน → เปรียบเทียบราคา → ทำสัญญา → จัดการห้องเช่าหลังซื้อ — ตรงนี้เป็นช่องว่างใหญ่มาก",
    source: "Ken Research, DDProperty, PropertyGuru Annual Report",
  },
  {
    id: "healthtech",
    name: "เฮลท์เทค & Telemedicine",
    nameEn: "HealthTech & Telemedicine",
    icon: "🏥",
    marketSizeTHB: "50",
    marketSizeUSD: "1.47",
    growthRate: "29.1",
    dominantPlayers: [
      {
        name: "MorDee (True Digital)",
        marketShare: 25,
        revenue: "ไม่เปิดเผย | ผู้ใช้ 400,000+ (โต 100% จาก 200K ปี 2023)",
        valuation: "ส่วนหนึ่งของ True Corp/CP Group ($15B+)",
        strengths: [
          "แอปพบหมอออนไลน์ตัวแรกของไทย — 500+ หมอ 20+ สาขา",
          "ผูกกับ True + CP Group ecosystem",
          "ร่วมมือกับ สปสช. ให้คนมีบัตรทองใช้ฟรีใน 5 จังหวัด",
        ],
        weaknesses: [
          "ผู้ใช้ยังน้อย (400K) เทียบกับคนไทย 72 ล้านคน",
          "หมอในระบบไม่เพียงพอ",
          "ไม่เชื่อมกับระบบของโรงพยาบาลได้ดี",
          "ใช้ยาก โดยเฉพาะคนสูงอายุ",
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
      "ตลาดสุขภาพดิจิทัลไทยปี 2025 มูลค่า 50,000 ล้านบาท (คาดว่าจะโตเป็น 61,700 ล้านบาทภายในปี 2029) โตเร็วที่สุด 29%/ปี — มี 329 startup ด้านสุขภาพ แต่ส่วนใหญ่ยังเล็กมาก",
    keyInsight:
      "คลินิกเล็กๆ 20,000+ แห่งยังใช้กระดาษ — แต่โรงพยาบาลใหญ่เริ่มใช้ AI ช่วยวินิจฉัยโรค (แม่นยำ 90%+, เร็วขึ้น 30-50%) — โอกาส: ทำซอฟต์แวร์คลินิกราคาถูก + เชื่อม AI วินิจฉัย",
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
      "ตลาดเรียนออนไลน์ไทยมีมูลค่า 59,700 ล้านบาท ยังกระจัดกระจายไม่มีเจ้าไหนครองตลาดเด็ดขาด — การเรียนพิเศษส่วนใหญ่ยังเป็นแบบเจอตัวไม่ใช่ออนไลน์",
    keyInsight:
      "ช่องว่างใหญ่คือ: คอร์สพัฒนาทักษะสำหรับคนทำงาน โดยเฉพาะทักษะดิจิทัล, AI, วิเคราะห์ข้อมูล — ที่บริษัทต้องการคนเป็นแต่หาไม่ได้",
    source: "Technavio, Startup in Thailand, 6W Research",
  },
  {
    id: "hrtech",
    name: "เอชอาร์เทค",
    nameEn: "HR Tech & Recruitment",
    icon: "👥",
    marketSizeTHB: "10.02",
    marketSizeUSD: "0.294",
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
      "ตลาดเทคโนโลยีด้านบุคคลปี 2025 มีมูลค่า 10,020 ล้านบาท ($294M) คาดว่าจะโตเป็น $539M ภายในปี 2030 — อัตราว่างงานไทยแค่ 1% (ต่ำมาก) ทำให้บริษัทแย่งตัวคนกันหนัก แต่เครื่องมือหาคน/จัดการพนักงานยังเป็นแค่เว็บลงประกาศงาน",
    keyInsight:
      "บริษัทเล็กๆ 3.2 ล้านรายในไทย ส่วนใหญ่ยังใช้ Excel จัดการเงินเดือน ลาหยุด สัญญาจ้าง ประกันสังคม — โอกาสคือทำระบบ HR ออนไลน์ราคาถูกที่ทำทุกอย่างนี้ครบในที่เดียว",
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
      "ตลาดซอฟต์แวร์บนคลาวด์สำหรับธุรกิจไทยมีมูลค่า 15,000 ล้านบาท โตเร็วกว่า 20% ต่อปี — แต่ร้านค้า/บริษัทเล็กๆ 3.2 ล้านรายส่วนใหญ่ยังไม่ใช้ ยังพึ่ง Excel กับกระดาษ",
    keyInsight:
      "โอกาสทอง: ทำแอปจัดการร้านค้าครบในตัวเดียว (บัญชี + ขายหน้าร้าน + จัดการสต็อก + เงินเดือนพนักงาน + จัดการลูกค้า) ที่ใช้ง่ายจนเปลี่ยนจาก Excel มาใช้ได้ภายในวันเดียว — PEAK ทำแค่บัญชี FlowAccount ก็ยังทำไม่ครบ",
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
      "เทคโนโลยีเกษตรไทยยังเล็กมาก (2,730 ล้านบาท) ทั้งที่การเกษตรคือ 8.5% ของเศรษฐกิจไทย มีเกษตรกร 12 ล้านคน มี startup แค่ 81 ราย ส่วนใหญ่ยังเริ่มต้น",
    keyInsight:
      "การทำแอปให้เกษตรกรใช้โดยตรงทำได้ยาก เพราะหลายคนไม่คุ้นเทคโนโลยี — ทางที่ดีกว่าคือทำระบบตรวจสอบย้อนกลับสินค้าเกษตรและระบบ IoT ติดตามคุณภาพ สำหรับโรงงานแปรรูป/ผู้ส่งออกที่ต้องทำตามมาตรฐานส่งออก",
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
      "ตลาดจองที่พัก/ท่องเที่ยวออนไลน์ในไทยมีมูลค่า 121,000 ล้านบาท — Agoda ครองไป 69% ของคนไทยที่ใช้จองที่พักออนไลน์ รายได้ท่องเที่ยวในประเทศ 952,000 ล้านบาทต่อปี",
    keyInsight:
      "โอกาสไม่ใช่การแข่งกับ Agoda โดยตรง แต่อยู่ที่: ทำซอฟต์แวร์จัดการโรงแรม/รีสอร์ทเล็กๆ (จัดการห้อง + โพสต์ขายหลายเว็บ + วิเคราะห์ราคา) ที่ยังใช้สมุดจดหรือ Excel อยู่",
    source: "IMARC Group, Bloomberg, Ken Research, Statista",
  },
];

// Market size comparison chart data
export const marketSizeChartData = [
  { name: "E-Commerce", size: 33000, color: "#C87941" },
  { name: "FinTech/Payments", size: 34080, color: "#E8B878" },
  { name: "Food Delivery", size: 5240, color: "#fb923c" },
  { name: "Logistics", size: 3400, color: "#60a5fa" },
  { name: "HealthTech", size: 1470, color: "#4ade80" },
  { name: "PropTech", size: 1200, color: "#a78bfa" },
  { name: "EdTech", size: 1760, color: "#f472b6" },
  { name: "SaaS/SME", size: 440, color: "#22d3ee" },
  { name: "HR Tech", size: 294, color: "#94a3b8" },
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
