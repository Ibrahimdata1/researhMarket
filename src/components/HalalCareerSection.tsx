"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import {
  Building2,
  Briefcase,
  BookOpen,
  Plane,
  Clock,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  MapPin,
} from "lucide-react";

const tooltipStyle = {
  background: "#141414",
  border: "1px solid #2a2a2a",
  borderRadius: 8,
  color: "#ededed",
};

// ======== DATA ========

// Muslim-friendly companies in Thailand
const muslimFriendlyCompanies = [
  {
    name: "CP ALL / 7-Eleven",
    industry: "ค้าปลีก / เทคโนโลยี",
    salary: "25,000-80,000",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: true,
    muslimPopulation: "มีพนักงานมุสลิมจำนวนมากโดยเฉพาะ 3 จังหวัดชายแดนใต้",
    techRoles: "Data Analyst, Software Dev, Supply Chain Tech, Digital Marketing",
    highlight: "สวัสดิการดี, มีห้องละหมาด, อาหารฮาลาลในโรงอาหาร, เครือ CP มีธุรกิจฮาลาลเยอะ",
    score: 9,
  },
  {
    name: "SCG (ปูนซิเมนต์ไทย)",
    industry: "วัสดุก่อสร้าง / IT",
    salary: "30,000-100,000",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: true,
    muslimPopulation: "มีนโยบาย Diversity & Inclusion",
    techRoles: "IT Engineer, Data Scientist, ERP Specialist, IoT Engineer",
    highlight: "เงินเดือนสูง, มีห้องละหมาดในออฟฟิศ, 155 ชม./ปี สำหรับพัฒนาตนเอง",
    score: 8,
  },
  {
    name: "PTT / ปตท.",
    industry: "พลังงาน / Digital",
    salary: "35,000-120,000",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: true,
    muslimPopulation: "มีมัสยิดใกล้สำนักงานใหญ่",
    techRoles: "Digital Transformation, AI/ML Engineer, Cloud Engineer",
    highlight: "เงินเดือนสูงมาก, โบนัส 6-8 เดือน, สวัสดิการครอบครัว, มีห้องละหมาด",
    score: 9,
  },
  {
    name: "Agoda (Booking Holdings)",
    industry: "Travel Tech",
    salary: "50,000-200,000",
    prayerRoom: true,
    halalCanteen: false,
    flexTime: true,
    muslimPopulation: "ทีมงานหลากหลายเชื้อชาติ/ศาสนา, มีห้อง meditation/prayer",
    techRoles: "Software Engineer, Data Scientist, Product Manager, UX Designer",
    highlight: "เงินเดือนสูงมาก, Work from anywhere, วัฒนธรรมเปิดกว้าง, ไม่มีบังคับเรื่องเครื่องแต่งกาย",
    score: 8,
  },
  {
    name: "LINE Thailand",
    industry: "Tech / Messaging",
    salary: "40,000-150,000",
    prayerRoom: true,
    halalCanteen: false,
    flexTime: true,
    muslimPopulation: "วัฒนธรรมญี่ปุ่น-ไทย เปิดกว้างเรื่องศาสนา",
    techRoles: "Backend Engineer, Frontend Dev, ML Engineer, DevOps",
    highlight: "Flexible hours, WFH 3 วัน/สัปดาห์, ห้องพักผ่อน/ละหมาดได้",
    score: 7,
  },
  {
    name: "Kasikorn Bank (KBank)",
    industry: "ธนาคาร / FinTech",
    salary: "30,000-100,000",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: false,
    muslimPopulation: "มีผลิตภัณฑ์ Islamic Banking",
    techRoles: "FinTech Dev, Data Engineer, Cybersecurity, Mobile Dev",
    highlight: "มีสายงาน Islamic Banking โดยเฉพาะ, ห้องละหมาดในอาคาร, โบนัสดี",
    score: 8,
  },
  {
    name: "Islamic Bank of Thailand (ธ.อิสลาม)",
    industry: "ธนาคารอิสลาม",
    salary: "25,000-70,000",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: false,
    muslimPopulation: "100% ฮาลาล — ธนาคารอิสลามแห่งเดียวในไทย",
    techRoles: "IT Support, System Admin, Digital Banking Dev",
    highlight: "100% ฮาลาล, ละหมาดเวลาทำงานได้, วันศุกร์ละหมาดญุมอะฮ์ได้, ทำงานอิสลามล้วน",
    score: 10,
  },
  {
    name: "Central Group",
    industry: "ค้าปลีก / E-Commerce",
    salary: "25,000-90,000",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: true,
    muslimPopulation: "มี Muslim-friendly facilities ในห้างหลายแห่ง",
    techRoles: "E-Commerce Dev, Data Analyst, UX/UI, Digital Marketing",
    highlight: "ห้องละหมาดในห้าง Central, อาหารฮาลาลหลากหลาย, Tech team กำลังโต",
    score: 7,
  },
];

// Halal business opportunities
const halalBusinessOpportunities = [
  {
    id: "halal-food-export",
    name: "ส่งออกอาหารฮาลาล",
    icon: "🍗",
    difficulty: 7,
    income: "100K-1M+",
    incomeScore: 9,
    easeScore: 4,
    studyFriendly: 5,
    saudiPath: 9,
    totalScore: 27,
    marketSize: "$8.85B (ส่งออกฮาลาลไทย 2024)",
    growth: "6.3%",
    description: "ไทยส่งออกอาหารฮาลาล $8.85B/ปี อันดับ 10 ของโลก — ไก่ อาหารทะเล ข้าว เป็นสินค้าหลัก",
    howTo: "เริ่มจากเป็น trading company ซื้ออาหารจากโรงงานที่มีมาตรฐานฮาลาล แล้วส่งออกไปตะวันออกกลาง",
    whyGood: "ตลาดซาอุฯ นำเข้าอาหารเยอะมาก สร้าง connection ได้เลย",
    studyBalance: "ต้องเวลาเยอะช่วงเริ่มต้น แต่พอระบบเสร็จแล้วจัดการง่าย",
  },
  {
    id: "halal-ecommerce",
    name: "E-Commerce ฮาลาล",
    icon: "🛒",
    difficulty: 4,
    income: "30K-300K",
    incomeScore: 7,
    easeScore: 8,
    studyFriendly: 9,
    saudiPath: 7,
    totalScore: 31,
    marketSize: "$4.1B (ตลาดฮาลาลไทย 2025)",
    growth: "8.8%",
    description: "ขายสินค้าฮาลาลออนไลน์ — เสื้อผ้ามุสลิม, อาหารฮาลาล, ของใช้อิสลาม, น้ำหอมอาหรับ, หนังสือศาสนา",
    howTo: "เปิดร้านบน Shopee/Lazada/TikTok Shop ขายสินค้าฮาลาล เริ่มด้วย dropship ไม่ต้องสต็อกของ",
    whyGood: "ทำจากที่ไหนก็ได้ จัดเวลาเอง สั่งของจากมาเลเซีย/ซาอุฯ มาขายไทย",
    studyBalance: "ดีมาก! จัดเวลาเองได้ ใช้เวลาวันละ 2-3 ชม. จัดส่ง + ตอบแชท ที่เหลืออ่านหนังสือได้",
  },
  {
    id: "halal-saas",
    name: "SaaS สำหรับธุรกิจฮาลาล",
    icon: "💻",
    difficulty: 6,
    income: "50K-500K",
    incomeScore: 8,
    easeScore: 6,
    studyFriendly: 7,
    saudiPath: 10,
    totalScore: 31,
    marketSize: "$7.7T (ตลาดฮาลาลโลก 2025)",
    growth: "20%+",
    description: "ทำซอฟต์แวร์สำหรับร้านอาหารฮาลาล, ร้าน Muslim fashion, หรือระบบ Halal certification tracking",
    howTo: "สร้างแอปจัดการร้านอาหารฮาลาล (POS + เมนู + สต็อกวัตถุดิบฮาลาล) หรือ Halal supply chain tracker",
    whyGood: "ขายได้ทั่วโลก! ตลาดซาอุฯ กำลังเปลี่ยนเป็น digital — Vision 2030 ต้องการ tech เยอะ",
    studyBalance: "ช่วงสร้างต้องเวลาเยอะ แต่พอ product เสร็จแล้วรายได้มาเอง (recurring revenue)",
  },
  {
    id: "islamic-edtech",
    name: "แพลตฟอร์มเรียนอิสลามออนไลน์",
    icon: "📖",
    difficulty: 5,
    income: "30K-200K",
    incomeScore: 6,
    easeScore: 7,
    studyFriendly: 10,
    saudiPath: 8,
    totalScore: 31,
    marketSize: "$59.7B (EdTech ไทย) + ตลาดอิสลามศึกษาทั่วโลก",
    growth: "11.4%",
    description: "แพลตฟอร์มสอนอิสลาม — เรียนกุรอาน, ภาษาอาหรับ, ฟิกฮ์, ตัฟซีร ออนไลน์",
    howTo: "เริ่มจากสอนสดผ่าน Zoom แล้วบันทึกเป็นคอร์ส ขายบนเว็บตัวเอง",
    whyGood: "ใช้ความรู้ที่กำลังเรียนอยู่มาสร้างรายได้ — เรียนไปด้วย สอนไปด้วย เก่งขึ้นทั้งสองทาง",
    studyBalance: "ดีที่สุด! เรียนศาสนา = ทำธุรกิจ เป็นอันเดียวกันเลย",
  },
  {
    id: "halal-consulting",
    name: "ที่ปรึกษาฮาลาล / Halal Certification",
    icon: "✅",
    difficulty: 5,
    income: "50K-300K",
    incomeScore: 7,
    easeScore: 6,
    studyFriendly: 8,
    saudiPath: 9,
    totalScore: 30,
    marketSize: "โรงงานอาหาร 8,000+ แห่งในไทยที่ต้องการ Halal cert",
    growth: "10%+",
    description: "ช่วยโรงงาน/ร้านอาหาร/โรงแรมทำมาตรฐานฮาลาล รับรองสินค้า และเปิดตลาดตะวันออกกลาง",
    howTo: "เรียนหลักสูตร Halal auditor → รับงานที่ปรึกษา → สร้างเครือข่ายกับ CICOT/สถาบันฮาลาล",
    whyGood: "ความรู้ศาสนาที่กำลังเรียน + ภาษาอาหรับ = ข้อได้เปรียบสูงมาก",
    studyBalance: "ดี! รับงานเป็น project จัดเวลาได้ ใช้ความรู้ศาสนาโดยตรง",
  },
  {
    id: "modest-fashion",
    name: "แฟชั่นมุสลิม (Modest Fashion)",
    icon: "👗",
    difficulty: 4,
    income: "20K-200K",
    incomeScore: 6,
    easeScore: 8,
    studyFriendly: 8,
    saudiPath: 7,
    totalScore: 29,
    marketSize: "$311B (Global Modest Fashion 2024)",
    growth: "5.7%",
    description: "ออกแบบและขายเสื้อผ้ามุสลิม — ฮิญาบ, อะบายะฮ์, จิลบาบ, ชุดละหมาด, ชุดโต๊บ",
    howTo: "เริ่มจากขายออนไลน์ นำเข้าจากมาเลเซีย/อินโด หรือผลิตเอง แล้วขายบน Shopee + Instagram",
    whyGood: "มุสลิมไทย 7+ ล้านคนต้องการ, ส่งออกไปมาเลเซีย/อินโด/ตะวันออกกลางได้",
    studyBalance: "ดี! ทำจากบ้านได้ จ้างคนตัดเย็บ จัดเวลาส่งของวันละ 1-2 ชม.",
  },
  {
    id: "halal-franchise",
    name: "แฟรนไชส์อาหารฮาลาล",
    icon: "🍜",
    difficulty: 3,
    income: "30K-150K",
    incomeScore: 6,
    easeScore: 9,
    studyFriendly: 6,
    saudiPath: 5,
    totalScore: 26,
    marketSize: "ร้านอาหารฮาลาลในไทย 30,000+ ร้าน",
    growth: "8%",
    description: "ซื้อแฟรนไชส์อาหารฮาลาล เช่น ลูกชิ้นปลา ชานม ข้าวมันไก่ โรตี — ลงทุนน้อย 3-5 หมื่น",
    howTo: "เลือกแฟรนไชส์ที่มี อย.+ฮาลาล ลงทุน 30,000-50,000 บาท จ้างคนดูแลร้าน",
    whyGood: "ระบบมีให้พร้อม ไม่ต้องคิดเมนูเอง จ้างคนดูแลได้",
    studyBalance: "ปานกลาง — ต้องมีคนดูแลร้าน หรือจ้างพนักงาน ไม่ต้องอยู่ตลอด",
  },
  {
    id: "digital-freelance",
    name: "Freelance ดิจิทัล (Halal Income)",
    icon: "🌐",
    difficulty: 3,
    income: "20K-200K",
    incomeScore: 7,
    easeScore: 9,
    studyFriendly: 9,
    saudiPath: 8,
    totalScore: 33,
    marketSize: "ตลาด freelance ทั่วโลก $1.5T",
    growth: "15%+",
    description: "รับงาน freelance: เขียนโค้ด, ออกแบบเว็บ, แปลภาษาอาหรับ, สอนออนไลน์, เขียน content",
    howTo: "สร้าง portfolio → ลงทะเบียน Fiverr/Upwork → รับงานจากลูกค้าตะวันออกกลาง (ใช้ภาษาอาหรับเป็นข้อได้เปรียบ)",
    whyGood: "ทำที่ไหนก็ได้ เวลาไหนก็ได้ ค่อยๆ สร้าง passive income ได้ รับงานจากซาอุฯ โดยตรง",
    studyBalance: "ดีที่สุด! เลือกรับงานเองได้ กำหนดเวลาเอง ถ้ามีทักษะ coding/design รายได้ดี",
  },
];

// Data for comparison radar chart
const businessComparisonData = [
  { metric: "รายได้", fullMark: 10 },
  { metric: "ทำง่าย", fullMark: 10 },
  { metric: "เรียนศาสนาควบคู่", fullMark: 10 },
  { metric: "เส้นทางสู่ซาอุฯ", fullMark: 10 },
];

// Saudi Arabia Vision 2030 career paths
const saudiCareerPaths = [
  {
    field: "Software Engineering / AI",
    demand: "สูงมาก",
    salary: "200K-600K THB/เดือน",
    visa: "Premium Residency available",
    arabicNeeded: "ไม่จำเป็น (ใช้อังกฤษ)",
    companies: "NEOM, Saudi Aramco, STC, Elm, Foodics",
  },
  {
    field: "Halal Food Technology",
    demand: "สูง",
    salary: "100K-300K THB/เดือน",
    visa: "Work Visa",
    arabicNeeded: "ช่วยได้มาก",
    companies: "SAGO, Almarai, NADEC, Savola",
  },
  {
    field: "Islamic FinTech",
    demand: "สูงมาก",
    salary: "150K-500K THB/เดือน",
    visa: "Premium Residency available",
    arabicNeeded: "ช่วยได้",
    companies: "STC Pay, Tamara, Tabby, Saudi Digital Bank",
  },
  {
    field: "Digital Marketing",
    demand: "สูง",
    salary: "80K-250K THB/เดือน",
    visa: "Work Visa / Freelance Visa",
    arabicNeeded: "จำเป็นมาก",
    companies: "หลายบริษัทใน Riyadh/Jeddah",
  },
  {
    field: "Islamic Education / Da'wah Tech",
    demand: "ปานกลาง-สูง",
    salary: "60K-200K THB/เดือน",
    visa: "Work Visa",
    arabicNeeded: "จำเป็นมาก",
    companies: "MWL, ISDB, Islamic University, อิหม่ามต่างๆ",
  },
  {
    field: "E-Commerce / Logistics",
    demand: "สูงมาก",
    salary: "100K-350K THB/เดือน",
    visa: "Work Visa",
    arabicNeeded: "ช่วยได้",
    companies: "noon, Jahez, SMSA Express, Sary",
  },
];

// Daily schedule balance
const dailySchedule = [
  { name: "ฟัจร์ + อิบาดะฮ์เช้า", hours: 1.5, color: "#4ade80" },
  { name: "เรียนศาสนา / อ่านหนังสือ", hours: 4, color: "#60a5fa" },
  { name: "ทำงาน / ธุรกิจ", hours: 5, color: "#C87941" },
  { name: "ละหมาด ซุฮ์ร + อัศร์ + มัฆริบ", hours: 1.5, color: "#4ade80" },
  { name: "พักผ่อน / ครอบครัว", hours: 3, color: "#a78bfa" },
  { name: "มุรอญะอะฮ์ + อิชาอ์ + กิยามุลลัยล์", hours: 2, color: "#4ade80" },
  { name: "นอน", hours: 7, color: "#2a2a2a" },
];

// Income ranking bar chart data
const incomeRankingData = halalBusinessOpportunities
  .sort((a, b) => b.totalScore - a.totalScore)
  .map((b) => ({
    name: b.name.length > 20 ? b.name.substring(0, 18) + "..." : b.name,
    fullName: b.name,
    score: b.totalScore,
    income: b.incomeScore,
    ease: b.easeScore,
    study: b.studyFriendly,
    saudi: b.saudiPath,
  }));

// Halal market pie chart data
const halalMarketPieData = [
  { name: "อาหารฮาลาล", value: 67, color: "#C87941" },
  { name: "เคมีภัณฑ์", value: 20, color: "#60a5fa" },
  { name: "เครื่องสำอาง", value: 5, color: "#f472b6" },
  { name: "แฟชั่น", value: 4, color: "#a78bfa" },
  { name: "อื่นๆ", value: 4, color: "#888888" },
];

// ======== COMPONENTS ========

function HalalMarketOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {[
        {
          label: "ส่งออกฮาลาลไทย (2024)",
          value: "$8.85B",
          sub: "ประมาณ 300,000 ล้านบาท อันดับ 10 ของโลก",
          color: "text-accent",
        },
        {
          label: "ตลาดฮาลาลโลก (2025)",
          value: "$7.7T",
          sub: "คาดว่าจะโตเป็น $10T ภายในปี 2030",
          color: "text-green",
        },
        {
          label: "มุสลิมในไทย",
          value: "7M+",
          sub: "~10% ของประชากร กระจุกตัว 5 จังหวัดภาคใต้ + กรุงเทพ",
          color: "text-blue",
        },
        {
          label: "โรงงานฮาลาลในไทย",
          value: "8,000+",
          sub: "ได้มาตรฐาน CICOT, IEAT Halal Industrial Park กำลังสร้าง",
          color: "text-purple",
        },
      ].map((s) => (
        <div key={s.label} className="card p-4 text-center">
          <div className="text-muted text-xs mb-1">{s.label}</div>
          <div className={`text-2xl md:text-3xl font-bold font-mono ${s.color}`}>
            {s.value}
          </div>
          <div className="text-muted text-xs mt-1">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}

function HalalExportPieChart() {
  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        ไทยส่งออกฮาลาลอะไรบ้าง?
      </h3>
      <p className="text-muted text-sm mb-4">
        สัดส่วนการส่งออกฮาลาลของไทย $8.85B — อาหารเป็นอันดับ 1 (67%)
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={halalMarketPieData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label={({ name, value }) => `${name} ${value}%`}
          >
            {halalMarketPieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={tooltipStyle}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any) => [`${value}%`, "สัดส่วน"]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function BusinessScoreChart() {
  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        ธุรกิจไหนเหมาะสุดสำหรับผู้เรียนศาสนา?
      </h3>
      <p className="text-muted text-sm mb-4">
        คะแนนรวม = รายได้ + ทำง่าย + เรียนศาสนาควบคู่ + เส้นทางสู่ซาอุฯ (สูงสุด 40)
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={incomeRankingData}
          layout="vertical"
          margin={{ top: 5, right: 40, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 40]}
            tick={{ fontSize: 11, fill: "#888" }}
          />
          <YAxis
            dataKey="name"
            type="category"
            width={150}
            tick={{ fontSize: 11, fill: "#ccc" }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            content={({ payload }: any) => {
              if (!payload?.[0]) return null;
              const d = payload[0].payload;
              return (
                <div style={{ ...tooltipStyle, padding: "8px 12px" }}>
                  <div style={{ fontWeight: "bold", marginBottom: 4 }}>{d.fullName}</div>
                  <div>รายได้: {d.income}/10</div>
                  <div>ทำง่าย: {d.ease}/10</div>
                  <div>เรียนศาสนาควบคู่: {d.study}/10</div>
                  <div>เส้นทางสู่ซาอุฯ: {d.saudi}/10</div>
                  <div style={{ fontWeight: "bold", marginTop: 4 }}>รวม: {d.score}/40</div>
                </div>
              );
            }}
          />
          <Bar dataKey="score" radius={[0, 6, 6, 0]}>
            {incomeRankingData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.score >= 31 ? "#4ade80" : entry.score >= 28 ? "#C87941" : "#888888"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-green" />
          <span>แนะนำมาก (31+)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-accent" />
          <span>แนะนำ (28-30)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ background: "#888" }} />
          <span>ทำได้ (&lt;28)</span>
        </div>
      </div>
    </div>
  );
}

function Top3RadarChart() {
  const top3 = halalBusinessOpportunities
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 3);

  const radarData = businessComparisonData.map((m) => {
    const row: Record<string, string | number> = { metric: m.metric };
    top3.forEach((b) => {
      const key = b.id;
      if (m.metric === "รายได้") row[key] = b.incomeScore;
      if (m.metric === "ทำง่าย") row[key] = b.easeScore;
      if (m.metric === "เรียนศาสนาควบคู่") row[key] = b.studyFriendly;
      if (m.metric === "เส้นทางสู่ซาอุฯ") row[key] = b.saudiPath;
    });
    return row;
  });

  const colors = ["#4ade80", "#C87941", "#60a5fa"];

  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        เปรียบเทียบ Top 3 ธุรกิจฮาลาล
      </h3>
      <p className="text-muted text-sm mb-4">
        ยิ่งกว้าง = ยิ่งดีในทุกด้าน (รายได้, ทำง่าย, เรียนศาสนาได้, ต่อยอดซาอุฯ)
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="#2a2a2a" />
          <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12, fill: "#ccc" }} />
          <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fontSize: 10, fill: "#888" }} />
          {top3.map((b, i) => (
            <Radar
              key={b.id}
              name={b.name}
              dataKey={b.id}
              stroke={colors[i]}
              fill={colors[i]}
              fillOpacity={0.15}
              strokeWidth={2}
            />
          ))}
          <Legend />
          <Tooltip contentStyle={tooltipStyle} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function DailyScheduleChart() {
  const total = dailySchedule.reduce((acc, d) => acc + d.hours, 0);
  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        ตารางชีวิตประจำวัน: บาลานซ์ศาสนา + ดุนยา
      </h3>
      <p className="text-muted text-sm mb-4">
        ตัวอย่างการแบ่งเวลา 24 ชม. — เรียนศาสนา 4 ชม. + อิบาดะฮ์ 5 ชม. + ทำงาน 5 ชม.
      </p>
      <div className="space-y-2">
        {dailySchedule.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <div className="w-32 md:w-48 text-sm text-muted shrink-0 truncate">{item.name}</div>
            <div className="flex-1 h-7 bg-surface-light rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2 text-xs font-bold text-background"
                style={{
                  width: `${(item.hours / total) * 100}%`,
                  backgroundColor: item.color,
                  minWidth: "40px",
                }}
              >
                {item.hours} ชม.
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded-lg bg-green/10 border border-green/20">
          <div className="text-green font-bold text-lg">5 ชม.</div>
          <div className="text-muted text-xs">อิบาดะฮ์ + ละหมาด</div>
        </div>
        <div className="p-2 rounded-lg bg-blue/10 border border-blue/20">
          <div className="text-blue font-bold text-lg">4 ชม.</div>
          <div className="text-muted text-xs">เรียนศาสนา</div>
        </div>
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
          <div className="text-accent font-bold text-lg">5 ชม.</div>
          <div className="text-muted text-xs">ทำงาน / ธุรกิจ</div>
        </div>
      </div>
    </div>
  );
}

function CompanyCard({ company, rank }: { company: typeof muslimFriendlyCompanies[0]; rank: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`card p-4 ${company.score >= 9 ? "border-green/30" : ""}`}>
      <button className="w-full text-left" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${company.score >= 9 ? "bg-green/10 text-green" : company.score >= 8 ? "bg-accent/10 text-accent" : "bg-blue/10 text-blue"}`}>
                #{rank} Muslim-Friendly Score: {company.score}/10
              </span>
            </div>
            <h4 className="text-lg font-bold">{company.name}</h4>
            <p className="text-muted text-sm">{company.industry} | เงินเดือน: {company.salary} บาท</p>
          </div>
          {expanded ? <ChevronUp size={20} className="text-muted shrink-0" /> : <ChevronDown size={20} className="text-muted shrink-0" />}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {company.prayerRoom && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-green/10 text-green">ห้องละหมาด</span>
          )}
          {company.halalCanteen && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">อาหารฮาลาล</span>
          )}
          {company.flexTime && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue/10 text-blue">เวลายืดหยุ่น</span>
          )}
        </div>
      </button>
      {expanded && (
        <div className="mt-3 space-y-2 animate-fade-in text-sm">
          <div className="p-3 rounded-lg bg-surface-light">
            <div className="text-accent text-xs font-semibold mb-1">ตำแหน่งเทคที่เปิดรับ</div>
            <p className="text-foreground">{company.techRoles}</p>
          </div>
          <div className="p-3 rounded-lg bg-surface-light">
            <div className="text-green text-xs font-semibold mb-1">จุดเด่นสำหรับมุสลิม</div>
            <p className="text-foreground">{company.highlight}</p>
          </div>
          <div className="p-3 rounded-lg bg-surface-light">
            <div className="text-blue text-xs font-semibold mb-1">สภาพแวดล้อมมุสลิม</div>
            <p className="text-foreground">{company.muslimPopulation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function BusinessCard({ biz, rank }: { biz: typeof halalBusinessOpportunities[0]; rank: number }) {
  const [expanded, setExpanded] = useState(rank <= 3);
  return (
    <div className={`card p-4 ${rank <= 3 ? "border-green/30" : ""}`}>
      <button className="w-full text-left" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{biz.icon}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${rank <= 3 ? "bg-green/10 text-green" : "bg-accent/10 text-accent"}`}>
                #{rank} คะแนน {biz.totalScore}/40
              </span>
            </div>
            <h4 className="text-lg font-bold">{biz.name}</h4>
            <p className="text-muted text-sm">รายได้: {biz.income} บาท/เดือน | ตลาด: {biz.marketSize}</p>
          </div>
          {expanded ? <ChevronUp size={20} className="text-muted shrink-0" /> : <ChevronDown size={20} className="text-muted shrink-0" />}
        </div>
        <div className="grid grid-cols-4 gap-1 mt-2">
          <div className="text-center p-1 rounded bg-surface-light">
            <div className="text-[10px] text-muted">รายได้</div>
            <div className="text-xs font-bold text-accent">{biz.incomeScore}/10</div>
          </div>
          <div className="text-center p-1 rounded bg-surface-light">
            <div className="text-[10px] text-muted">ทำง่าย</div>
            <div className="text-xs font-bold text-blue">{biz.easeScore}/10</div>
          </div>
          <div className="text-center p-1 rounded bg-surface-light">
            <div className="text-[10px] text-muted">เรียนควบคู่</div>
            <div className="text-xs font-bold text-green">{biz.studyFriendly}/10</div>
          </div>
          <div className="text-center p-1 rounded bg-surface-light">
            <div className="text-[10px] text-muted">ซาอุฯ</div>
            <div className="text-xs font-bold text-purple">{biz.saudiPath}/10</div>
          </div>
        </div>
      </button>
      {expanded && (
        <div className="mt-3 space-y-2 animate-fade-in text-sm">
          <div className="p-3 rounded-lg bg-surface-light">
            <p className="text-foreground">{biz.description}</p>
          </div>
          <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
            <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-1">
              <Briefcase size={12} /> วิธีเริ่มต้น
            </div>
            <p className="text-foreground">{biz.howTo}</p>
          </div>
          <div className="p-3 rounded-lg bg-green/5 border border-green/20">
            <div className="flex items-center gap-1.5 text-green text-xs font-semibold mb-1">
              <Star size={12} /> ทำไมธุรกิจนี้ดี?
            </div>
            <p className="text-foreground">{biz.whyGood}</p>
          </div>
          <div className="p-3 rounded-lg bg-blue/5 border border-blue/20">
            <div className="flex items-center gap-1.5 text-blue text-xs font-semibold mb-1">
              <BookOpen size={12} /> บาลานซ์กับการเรียนศาสนา
            </div>
            <p className="text-foreground">{biz.studyBalance}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function SaudiPathSection() {
  return (
    <div className="space-y-4">
      <div className="card p-5">
        <h3 className="font-semibold mb-3 text-accent flex items-center gap-2">
          <Plane size={16} /> เส้นทางสู่ซาอุดีอาระเบีย — Saudi Vision 2030
        </h3>
        <p className="text-muted text-sm mb-4">
          ซาอุฯ กำลังเปลี่ยนแปลงครั้งใหญ่ตาม Vision 2030 — ต้องการแรงงานทักษะสูงกว่า 1 ล้านตำแหน่งภายในปี 2026
          โดยเฉพาะสาย Tech, FinTech, E-Commerce — คนไทยมุสลิมที่มีทักษะ + ภาษาอาหรับ = ได้เปรียบมาก
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th>สายงาน</th>
                <th>ความต้องการ</th>
                <th>เงินเดือน (THB)</th>
                <th className="hidden md:table-cell">ภาษาอาหรับ</th>
                <th className="hidden lg:table-cell">บริษัทตัวอย่าง</th>
              </tr>
            </thead>
            <tbody>
              {saudiCareerPaths.map((path) => (
                <tr key={path.field}>
                  <td className="font-semibold text-foreground">{path.field}</td>
                  <td>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${path.demand === "สูงมาก" ? "bg-green/10 text-green" : "bg-accent/10 text-accent"}`}>
                      {path.demand}
                    </span>
                  </td>
                  <td className="font-mono text-accent">{path.salary}</td>
                  <td className="hidden md:table-cell text-muted">{path.arabicNeeded}</td>
                  <td className="hidden lg:table-cell text-muted text-xs">{path.companies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Roadmap to Saudi */}
      <div className="card p-5">
        <h3 className="font-semibold mb-4 text-accent flex items-center gap-2">
          <MapPin size={16} /> แผนเส้นทาง: จากไทย → ซาอุดีอาระเบีย (3-5 ปี)
        </h3>
        <div className="space-y-4">
          {[
            {
              phase: "ปีที่ 1: สร้างรากฐาน (ในไทย)",
              color: "text-accent",
              tasks: [
                "เรียนศาสนา + ภาษาอาหรับอย่างจริงจัง (อย่างน้อย B2 level)",
                "สร้างทักษะ Tech — เขียนโค้ด, Digital Marketing, หรือ FinTech",
                "เริ่มธุรกิจออนไลน์ฮาลาล เพื่อสร้างรายได้ + ประสบการณ์",
                "ทำงานที่บริษัท Muslim-friendly เพื่อสะสมประสบการณ์",
              ],
            },
            {
              phase: "ปีที่ 2-3: พัฒนาขึ้น",
              color: "text-green",
              tasks: [
                "ขยายธุรกิจให้มีลูกค้าจากตะวันออกกลาง",
                "รับงาน Freelance จากลูกค้าซาอุฯ/UAE ผ่าน Upwork",
                "เข้าร่วมงาน MEGA Halal Bangkok เพื่อสร้าง connection",
                "สร้าง portfolio + LinkedIn ที่แข็งแกร่ง (เขียนเป็นอาหรับ + อังกฤษ)",
                "เรียนศาสนาให้ลึกขึ้น — ตัฟซีร, อุศูลอัลฟิกฮ์, ฮะดีษ",
              ],
            },
            {
              phase: "ปีที่ 3-5: ก้าวสู่ซาอุฯ",
              color: "text-blue",
              tasks: [
                "สมัครงานผ่าน Bayt.com, LinkedIn, หรือ NEOM careers",
                "หรือขยายธุรกิจไปเปิดสาขาในซาอุฯ (ง่ายขึ้นตาม Vision 2030)",
                "สมัคร Premium Residency ถ้าเป็น Tech professional",
                "ใช้ connection ที่สร้างมาเพื่อหาโอกาสในริยาด/เจดดะห์",
                "ดำเนินเนียตฮิจเราะฮ์ — ย้ายไปอยู่ใกล้มักกะฮ์/มะดีนะฮ์",
              ],
            },
          ].map((phase) => (
            <div key={phase.phase} className="p-3 rounded-lg bg-surface-light">
              <h4 className={`font-semibold text-sm ${phase.color} mb-2`}>
                {phase.phase}
              </h4>
              <ul className="space-y-1">
                {phase.tasks.map((task) => (
                  <li key={task} className="text-sm text-muted flex gap-2">
                    <CheckCircle size={14} className={`${phase.color} shrink-0 mt-0.5`} />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ======== MAIN EXPORT ========

export default function HalalCareerSection() {
  const [tab, setTab] = useState<"employee" | "business" | "saudi">("business");
  const sortedCompanies = [...muslimFriendlyCompanies].sort((a, b) => b.score - a.score);
  const sortedBiz = [...halalBusinessOpportunities].sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div className="space-y-6">
      {/* Market Overview Stats */}
      <HalalMarketOverview />

      {/* Charts: Pie + Business Score */}
      <div className="grid gap-6 lg:grid-cols-2">
        <HalalExportPieChart />
        <BusinessScoreChart />
      </div>

      {/* Radar + Daily Schedule */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Top3RadarChart />
        <DailyScheduleChart />
      </div>

      {/* Tab Selector */}
      <div className="flex gap-2 flex-wrap">
        <button
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${tab === "business" ? "btn-gradient text-background" : "border border-border text-muted hover:text-foreground"}`}
          onClick={() => setTab("business")}
        >
          <Briefcase size={16} /> ธุรกิจฮาลาล
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${tab === "employee" ? "btn-gradient text-background" : "border border-border text-muted hover:text-foreground"}`}
          onClick={() => setTab("employee")}
        >
          <Building2 size={16} /> ทำงานบริษัท Muslim-Friendly
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${tab === "saudi" ? "btn-gradient text-background" : "border border-border text-muted hover:text-foreground"}`}
          onClick={() => setTab("saudi")}
        >
          <Plane size={16} /> เส้นทางสู่ซาอุฯ
        </button>
      </div>

      {/* Tab Content */}
      {tab === "business" && (
        <div className="space-y-4 animate-fade-in">
          <div className="card p-4 bg-green/5 border-green/20">
            <h3 className="font-semibold text-green mb-2 flex items-center gap-2">
              <Star size={16} /> สรุป: ธุรกิจฮาลาลที่ดีที่สุดสำหรับนักเรียนศาสนา
            </h3>
            <p className="text-sm text-muted">
              <strong className="text-foreground">อันดับ 1: Freelance ดิจิทัล</strong> — จัดเวลาเองได้ 100% รายได้ดี ต่อยอดซาอุฯ ได้ |{" "}
              <strong className="text-foreground">อันดับ 2: E-Commerce ฮาลาล</strong> — ลงทุนน้อย ทำจากบ้าน |{" "}
              <strong className="text-foreground">อันดับ 3: SaaS / แพลตฟอร์มอิสลาม</strong> — Recurring income สร้างครั้งเดียว
            </p>
          </div>
          {sortedBiz.map((biz, i) => (
            <BusinessCard key={biz.id} biz={biz} rank={i + 1} />
          ))}
        </div>
      )}

      {tab === "employee" && (
        <div className="space-y-4 animate-fade-in">
          <div className="card p-4 bg-accent/5 border-accent/20">
            <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
              <Building2 size={16} /> บริษัทในไทยที่เป็นมิตรกับมุสลิม
            </h3>
            <p className="text-sm text-muted">
              คัดเลือกบริษัทที่มีห้องละหมาด, อาหารฮาลาล, เวลายืดหยุ่น — เรียงตามคะแนน Muslim-Friendly Score
              จากข้อมูลพนักงานมุสลิมจริง + นโยบาย Diversity ของบริษัท
            </p>
          </div>
          {sortedCompanies.map((c, i) => (
            <CompanyCard key={c.name} company={c} rank={i + 1} />
          ))}
          <div className="card p-4 bg-surface-light">
            <h4 className="font-semibold text-sm text-muted mb-2 flex items-center gap-2">
              <Clock size={14} /> เคล็ดลับ: ทำงานบริษัท + เรียนศาสนาไปด้วย
            </h4>
            <ul className="space-y-1 text-sm text-muted">
              <li className="flex gap-2"><span className="text-accent shrink-0">1.</span> เลือกบริษัทที่มี Flexible hours หรือ WFH — ประหยัดเวลาเดินทาง 2-3 ชม./วัน</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">2.</span> ใช้เวลาเช้าก่อนเข้างาน (หลังฟัจร์) อ่านหนังสือศาสนา 1-2 ชม.</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">3.</span> ใช้พักกลางวัน (ละหมาดซุฮ์ร) ฟังบรรยายศาสนาผ่าน podcast</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">4.</span> เย็นหลังมัฆริบ เรียนออนไลน์กับอุสตาซ/เชค 1-2 ชม.</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">5.</span> วันหยุดสัปดาห์ ใช้เรียนศาสนาเต็มวัน — หะละเกาะฮ์, มัจลิสอิลม์</li>
            </ul>
          </div>
        </div>
      )}

      {tab === "saudi" && (
        <div className="animate-fade-in">
          <SaudiPathSection />
        </div>
      )}

      {/* Sources */}
      <div className="card p-4 mt-4">
        <h4 className="font-semibold text-sm text-accent mb-2">แหล่งข้อมูลส่วนฮาลาล</h4>
        <div className="grid gap-1 md:grid-cols-2 text-xs text-muted">
          {[
            "Nation Thailand — Thailand halal exports reach US$8.85 billion (2025)",
            "Nation Thailand — Thailand Eyes Greater Share of Global Halal Market $3.1T (2027)",
            "6W Research — Thailand Halal Food Market Outlook 2025-2031",
            "GM Insights — Global Halal Foods Market CAGR 9.1% to $6T by 2034",
            "IMARC Group — Global Halal Food Market $6,329B by 2034",
            "MEGA Halal Bangkok 2025-2026 — Trade results 85M THB",
            "Saudi Vision 2030 — 1M+ new jobs by 2026",
            "Bayt.com — Vision 2030 Jobs Saudi Arabia (มี.ค. 2026)",
            "Allied Muslim Chamber of Business — Top 30 Muslim Business Ideas 2026",
            "Halal Times — 50 Small Halal Business Ideas 2026",
            "Thai Franchise Center — 10 แฟรนไชส์ฮาลาลน่าลงทุน",
            "WorkVenture — Top50 Companies in Thailand 2025-2026",
          ].map((src) => (
            <div key={src} className="flex gap-1.5">
              <span className="text-accent shrink-0">&#9679;</span>
              {src}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
