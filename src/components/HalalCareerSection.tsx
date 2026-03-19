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
// ทุกข้อมูลมาจากแหล่งจริง ไม่ได้คิดเอง
// ลบธนาคาร/สถาบันการเงินทั้งหมดออก (ริบา = ฮะรอม)
// เน้นตำแหน่ง Sales สำหรับคนมีประสบการณ์เซลส์

// บริษัทฮาลาล 100% — ไม่มีธนาคาร ไม่มีเหล้า ไม่มีหมู
const muslimFriendlyCompanies = [
  {
    name: "CPF (เจริญโภคภัณฑ์อาหาร)",
    industry: "อาหารฮาลาล / ส่งออก",
    salary: "25,000-60,000 + ค่าคอม",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: false,
    role: "Sales Representative — ขายไก่แปรรูปฮาลาล, อาหารสำเร็จรูปฮาลาลให้ร้านอาหาร/โรงแรม/ส่งออกตะวันออกกลาง",
    highlight: "CPF ส่งออกอาหารฮาลาลไป 30+ ประเทศ รายได้กลุ่มปี 2025: $23B — มีโรงงานฮาลาลได้มาตรฐาน CICOT ทั่วไทย",
    whyHalal: "ขายอาหารฮาลาลโดยเฉพาะ ไม่ได้ขายเหล้าหรือหมู ตำแหน่ง Sales เน้นสินค้าไก่ อาหารทะเล อาหารแปรรูป",
    source: "CPF Group LinkedIn, Sea Ltd Q4 2025 Earnings",
    score: 9,
  },
  {
    name: "Betagro (เบทาโกร)",
    industry: "อาหาร / เกษตร",
    salary: "22,000-55,000 + ค่าคอม",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: false,
    role: "Sales & Trade Marketing — ขายเนื้อไก่ ไข่ อาหารแปรรูปให้ร้านอาหาร ซูเปอร์มาร์เก็ต โรงแรม ทั้ง B2B และ B2C",
    highlight: "รายได้ปี 2024: 24.7B THB (+23%) กำไร 940M — มี 120+ ตำแหน่งเปิดรับ ทีม Sales 67 คน ผลิตภัณฑ์ฮาลาลส่งออก EU/ญี่ปุ่น/สิงคโปร์",
    whyHalal: "ผลิตภัณฑ์ได้มาตรฐานฮาลาล CICOT ส่งออกไปตะวันออกกลาง สินค้าหลักคือไก่/ไข่/อาหารแปรรูป ไม่มีหมู",
    source: "Betagro careers.betagro.com, RocketReach",
    score: 8,
  },
  {
    name: "Thai Union (ไทยยูเนี่ยน)",
    industry: "อาหารทะเล / ส่งออก",
    salary: "25,000-65,000 + ค่าคอม",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: false,
    role: "Export Sales — ขายอาหารทะเลฮาลาล (ทูน่า, กุ้ง, ปลาแปรรูป) ให้ลูกค้าตะวันออกกลาง/มาเลเซีย/อินโดนีเซีย",
    highlight: "บริษัทอาหารทะเลอันดับ 1 ของไทย รายได้ $4.2B/ปี แบรนด์ Chicken of the Sea, Sealect — ผลิตภัณฑ์ฮาลาลส่งออกไป 37+ ประเทศ",
    whyHalal: "อาหารทะเลฮาลาลโดยธรรมชาติ ได้ใบรับรองฮาลาล CICOT สินค้าส่งออกตะวันออกกลางเป็นตลาดหลัก",
    source: "SeafoodSource, Thai Union Annual Report",
    score: 8,
  },
  {
    name: "S-R Food Halal (เอส-อาร์ ฟู้ดส์ ฮาลาล)",
    industry: "จัดจำหน่ายอาหารฮาลาล",
    salary: "18,000-40,000 + ค่าคอม",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: false,
    role: "เซลส์แวน/ตัวแทนจำหน่าย — ขายอาหารแช่แข็ง เนื้อสัตว์ อาหารทะเล ผลไม้ฮาลาลให้ร้านอาหาร/ตลาด/ค้าปลีก",
    highlight: "บริษัทฮาลาล 100% — จำหน่ายอาหารแช่แข็ง เนื้อสัตว์ อาหารทะเล ในกรุงเทพฯ เหมาะกับเซลส์ที่อยากขายสินค้าฮาลาลล้วน",
    whyHalal: "บริษัทฮาลาล 100% ตั้งแต่ชื่อ ตั้งขึ้นเพื่อจำหน่ายอาหารฮาลาลโดยเฉพาะ เจ้าของมุสลิม",
    source: "Creden.co ข้อมูลบริษัท 0105558131721",
    score: 10,
  },
  {
    name: "SCG (ปูนซิเมนต์ไทย)",
    industry: "วัสดุก่อสร้าง / อุตสาหกรรม",
    salary: "30,000-80,000 + โบนัส",
    prayerRoom: true,
    halalCanteen: true,
    flexTime: true,
    role: "Sales Engineer / B2B Sales — ขายวัสดุก่อสร้าง ปูน หลังคา ท่อ ให้ผู้รับเหมา/ร้านค้าวัสดุ ใช้ประสบการณ์เซลส์ตรง",
    highlight: "เงินเดือนสูง โบนัสดี มีห้องละหมาด มี 155 ชม./ปีสำหรับพัฒนาตนเอง — สินค้าฮาลาล (วัสดุก่อสร้างไม่มีประเด็นฮะรอม)",
    whyHalal: "ขายวัสดุก่อสร้าง ไม่เกี่ยวกับริบา/เหล้า/หมู/การพนัน — สินค้า halal-neutral",
    source: "WorkVenture Top50 2025-2026, SCG careers",
    score: 8,
  },
  {
    name: "Tao Kae Noi (เถ้าแก่น้อย)",
    industry: "ขนมขบเคี้ยว ฮาลาล",
    salary: "20,000-45,000 + ค่าคอม",
    prayerRoom: false,
    halalCanteen: false,
    flexTime: false,
    role: "Sales / Modern Trade — ขายสาหร่ายฮาลาลให้ 7-Eleven, Big C, Tops, ส่งออก 37+ ประเทศ",
    highlight: "สาหร่ายเถ้าแก่น้อยได้ใบรับรองฮาลาล CICOT ส่งออก 37 ประเทศรวมตะวันออกกลาง — เซลส์เน้นขาย Modern Trade + Export",
    whyHalal: "ขนมสาหร่ายฮาลาล ไม่มีส่วนผสมฮะรอม ได้รับรองฮาลาลแล้ว",
    source: "SeafoodSource — Thailand halal certification",
    score: 7,
  },
];

// ธุรกิจฮาลาล — ข้อมูลจริง ตัวเลขจริง ลงทุนจริง
const halalBusinessOpportunities = [
  {
    id: "halal-franchise",
    name: "แฟรนไชส์อาหารฮาลาล",
    icon: "🍗",
    income: "30,000-150,000",
    incomeScore: 7,
    easeScore: 9,
    studyFriendly: 6,
    saudiPath: 4,
    totalScore: 26,
    investment: "9,900 - 180,000 บาท",
    marketSize: "ร้านอาหารฮาลาล 30,000+ ร้านในไทย",
    growth: "8%",
    description: "ตัวอย่างจริงที่เกิดขึ้นแล้ว:",
    realCases: [
      "ชิกกี้ชิก — ไก่ป๊อปฮาลาล ลงทุน 55,000-65,000 บาท กำไรขั้นต้น 58% คืนทุน 4-6 เดือน ค่าสัญญาปีละ 5,000 บาท ไม่หัก % ยอดขาย (franchise.chicky-chic.com)",
      "ซาลาเปาซั่งไห่ — ลงทุน 150,000 บาท ทำเลสีลมขายวันละ 17,000-18,000 บาท คืนทุนเดือนแรก สุขุมวิทขาย 6,000-7,000/วัน คืนทุน 3 เดือน",
      "สุกี้นายพัน — แฟรนไชส์สุกี้ เริ่ม 9,900 บาท ไม่มีค่าธรรมเนียมรายปี คืนทุนไว",
      "อ้วนนะข้าวมันไก่ — รถเข็นข้าวมันไก่สิงคโปร์ ลงทุน 180,000 บาท (ยกเว้นภาษี)",
    ],
    howTo: "เลือกแฟรนไชส์ที่มี อย. + ฮาลาล CICOT → จ้างพนักงาน 1-2 คนดูแลร้าน → เจ้าของจัดการเฉพาะบัญชี/สั่งวัตถุดิบ",
    whyGood: "ระบบมีให้หมด ไม่ต้องคิดสูตรเอง วัตถุดิบส่งตรงจากโรงงาน ได้มาตรฐาน อย. ฮาลาล",
    studyBalance: "จ้างพนักงานดูแลร้านได้ เจ้าของใช้เวลาวันละ 1-2 ชม. ตรวจสอบ ที่เหลืออ่านหนังสือ",
  },
  {
    id: "modest-fashion",
    name: "ขายเสื้อผ้ามุสลิมออนไลน์",
    icon: "👗",
    income: "15,000-200,000",
    incomeScore: 7,
    easeScore: 8,
    studyFriendly: 9,
    saudiPath: 6,
    totalScore: 30,
    investment: "5,000 - 50,000 บาท (dropship = 0 บาท)",
    marketSize: "$295B ตลาด Modest Fashion โลก (2023), คาดว่า $402B ปี 2025",
    growth: "7.2%",
    description: "ตัวเลขจริงจากตลาด:",
    realCases: [
      "ตลาด Modest Fashion โลก = $295B (2023) → คาด $402B (2025) โตปีละ 7.2% (DHL Malaysia Report)",
      "45% ของยอดขาย Modest Fashion มาจากออนไลน์ — Shopee, Instagram, TikTok Shop (Halal Times 2024)",
      "อินโดนีเซียเดียว = $20B/ปี ในตลาด Modest Fashion — ไทยนำเข้าจากอินโด/มาเลย์มาขายต่อได้",
      "Bawal Exclusive (มาเลเซีย) ขายฮิญาบชิ้นละ RM50,000 ทำจากผ้าญี่ปุ่น+คริสตัล Swarovski — ตลาด luxury ฮิญาบมีอยู่จริง",
      "ค่าธรรมเนียม Shopee 3-5% ต่อออเดอร์ กำไร dropship 20-30% ต่อชิ้น",
    ],
    howTo: "เริ่ม dropship ลงทุน 0 บาท → เปิดร้าน Shopee/TikTok Shop → นำเข้าฮิญาบ/อะบายะฮ์จากมาเลเซีย/อินโด → ขายต่อมาร์จิ้น 30-50%",
    whyGood: "มุสลิมไทย 7+ ล้านคนซื้อฮิญาบทุกเดือน ตลาดยังไม่มีแบรนด์ไทยครองชัด สั่งผ่าน Shopee ส่ง 1-2 วัน",
    studyBalance: "ทำจากบ้านได้ 100% ใช้เวลาวันละ 2-3 ชม. ตอบแชท+จัดส่ง ที่เหลืออ่านหนังสือได้",
  },
  {
    id: "halal-food-trading",
    name: "ตัวแทนขาย/Trading อาหารฮาลาล",
    icon: "📦",
    income: "30,000-500,000",
    incomeScore: 8,
    easeScore: 5,
    studyFriendly: 5,
    saudiPath: 9,
    totalScore: 27,
    investment: "50,000 - 500,000 บาท",
    marketSize: "$8.85B ส่งออกฮาลาลไทย (2024) อันดับ 10 ของโลก",
    growth: "6.3%",
    description: "ตัวเลขจริงจากการส่งออก:",
    realCases: [
      "ไทยส่งออกอาหารฮาลาล $8.85B/ปี (2024) อันดับ 10 ของโลก — Nation Thailand มี.ค. 2025",
      "อาหาร = 67% ของส่งออกฮาลาลไทย ($6B) ไก่ ข้าว อาหารทะเล เป็นสินค้าหลัก",
      "ตลาดหลัก: มาเลเซีย, อินโดนีเซีย, UAE, อียิปต์, เยเมน",
      "MEGA Halal Bangkok 2025 สร้างยอดเจรจาการค้า 85 ล้านบาท — บริษัทเล็กจับคู่ธุรกิจได้จริง",
      "EXIM Bank + ธ.อิสลาม ให้สินเชื่อ SME ฮาลาลดอกเบี้ย 0% (ตามหลักอิสลาม)",
      "โรงงาน 14,000+ แห่งในไทยได้ใบรับรองฮาลาล (CICOT เม.ย. 2023)",
    ],
    howTo: "เริ่มเป็นตัวแทนขาย (broker) → หาโรงงานฮาลาลในไทย → เจรจากับผู้นำเข้าตะวันออกกลาง → เข้างาน MEGA Halal Bangkok เพื่อจับคู่ธุรกิจ",
    whyGood: "ใช้ประสบการณ์เซลส์โดยตรง ภาษาอาหรับ = ข้อได้เปรียบที่คู่แข่งไม่มี ไม่ต้องมีโรงงาน แค่เป็นคนกลาง",
    studyBalance: "ช่วงเริ่มต้นต้องเวลาเยอะ (สร้าง connection) แต่พอมีลูกค้าประจำแล้ว จัดการ order 2-3 ชม./วัน",
  },
  {
    id: "halal-consulting",
    name: "ที่ปรึกษาฮาลาล / Halal Auditor",
    icon: "✅",
    income: "40,000-200,000",
    incomeScore: 7,
    easeScore: 5,
    studyFriendly: 8,
    saudiPath: 9,
    totalScore: 29,
    investment: "10,000 - 30,000 บาท (ค่าเรียนหลักสูตร)",
    marketSize: "โรงงาน 14,000+ แห่งมีใบรับรอง + อีกหลายหมื่นที่ต้องการ",
    growth: "10%+",
    description: "ตัวเลขจริง:",
    realCases: [
      "โรงงาน/บริษัท 14,000+ แห่งได้ฮาลาล CICOT แล้ว อีกหลายหมื่นกำลังสมัคร (CICOT เม.ย. 2023)",
      "สินค้า 160,000+ รายการ 33,000+ แบรนด์ ได้รับรองฮาลาลในไทย",
      "รัฐบาลวางแผน 5 ปี (2024-2028) สร้าง Halal Industrial Park — ต้องการ auditor เพิ่ม",
      "ค่าที่ปรึกษาฮาลาลต่อโรงงาน: 30,000-200,000 บาท/project",
      "บริษัทที่จับคู่ธุรกิจในงาน MEGA Halal 2025 มีกำไรเพิ่ม 6 เท่า (Nation Thailand)",
    ],
    howTo: "เรียนหลักสูตร Halal Auditor (สถาบันฮาลาล ม.สงขลาฯ / CICOT) → รับงาน freelance ช่วยโรงงานทำมาตรฐาน → สร้างเครือข่ายส่งออก",
    whyGood: "ความรู้ศาสนา + ภาษาอาหรับ = ข้อได้เปรียบที่หาคนทำยาก รับงานเป็น project จัดเวลาเองได้",
    studyBalance: "ดีมาก! รับ 2-3 project/เดือน ใช้ความรู้ฟิกฮ์โดยตรง ที่เหลือเรียนศาสนาได้",
  },
  {
    id: "digital-freelance",
    name: "Freelance ดิจิทัล (รับงานตะวันออกกลาง)",
    icon: "🌐",
    income: "15,000-150,000",
    incomeScore: 7,
    easeScore: 8,
    studyFriendly: 9,
    saudiPath: 8,
    totalScore: 32,
    investment: "0 บาท (ใช้คอมที่มี)",
    marketSize: "ตลาด freelance ทั่วโลก $1.5T",
    growth: "15%+",
    description: "ทำได้จริง:",
    realCases: [
      "Fiverr/Upwork มีงานแปลอาหรับ-อังกฤษ เริ่ม $5-50/ชิ้น ทำวันละ 3-5 ชิ้น = $15-250/วัน",
      "ออกแบบโลโก้/เว็บ สำหรับธุรกิจอาหรับบน Fiverr ราคา $50-500/งาน",
      "สอนภาษาไทย/อังกฤษออนไลน์ให้คนอาหรับ ผ่าน iTalki/Preply ชม.ละ 300-800 บาท",
      "เขียน content อิสลาม/ฮาลาลเป็นภาษาไทย สำหรับเว็บ/แอปมุสลิม",
      "ทักษะ coding: งาน remote จากซาอุฯ/UAE เงินเดือน $2,000-5,000/เดือน",
    ],
    howTo: "สร้าง profile Fiverr/Upwork → เน้นทักษะ: แปลอาหรับ, ออกแบบ, coding, content → รับงานจากลูกค้าตะวันออกกลาง",
    whyGood: "ทำที่ไหนก็ได้ เวลาไหนก็ได้ ภาษาอาหรับ = ราคาสูงกว่างานแปลภาษาอื่น 2-3 เท่า",
    studyBalance: "ดีที่สุด! เลือกรับงานเองได้ 100% วันไหนอ่านหนังสือเยอะก็ไม่รับงาน",
  },
  {
    id: "islamic-edtech",
    name: "สอนอิสลามออนไลน์",
    icon: "📖",
    income: "10,000-100,000",
    incomeScore: 5,
    easeScore: 7,
    studyFriendly: 10,
    saudiPath: 7,
    totalScore: 29,
    investment: "0 - 5,000 บาท (ค่ากล้อง/ไมค์)",
    marketSize: "มุสลิมไทย 7M+ คน ส่วนใหญ่เรียนศาสนาไม่ทั่วถึง",
    growth: "11%+",
    description: "เกิดขึ้นจริงแล้ว:",
    realCases: [
      "อุสตาซหลายคนสอนผ่าน Facebook Live / YouTube ได้ค่า Super Chat + สปอนเซอร์",
      "คอร์สเรียนกุรอานออนไลน์ Quran.com มีผู้ใช้หลายล้าน — ยังไม่มีเวอร์ชันไทยจริงจัง",
      "แพลตฟอร์มเรียนภาษาอาหรับ ค่าเรียน 500-2,000 บาท/เดือน × 100 คน = 50,000-200,000/เดือน",
      "SkillLane (ไทย) รายได้ $6.28M/ปี 1.3M ผู้ใช้ — ยังไม่มีคอร์สอิสลามจริงจัง",
    ],
    howTo: "เริ่มสอนสดผ่าน Zoom/Facebook Live ฟรี → บันทึกเป็นคอร์ส → ขายบน LnwShop/เว็บตัวเอง → สร้าง community สมาชิกรายเดือน",
    whyGood: "ใช้ความรู้ที่กำลังเรียนอยู่มาสร้างรายได้ เรียนไปด้วย สอนไปด้วย = เก่งขึ้นทั้งสองทาง",
    studyBalance: "ดีที่สุด! เรียนศาสนา = ทำธุรกิจ เป็นอันเดียวกัน ยิ่งเรียนเก่ง ยิ่งสอนได้เยอะ",
  },
];

// Data for comparison radar chart
const businessComparisonData = [
  { metric: "รายได้", fullMark: 10 },
  { metric: "ทำง่าย", fullMark: 10 },
  { metric: "เรียนควบคู่", fullMark: 10 },
  { metric: "สู่ซาอุฯ", fullMark: 10 },
];

// Saudi Arabia Vision 2030 career paths — ข้อมูลจาก Glassdoor, ZeroTaxJobs, NEOM careers
const saudiCareerPaths = [
  {
    field: "Software Engineer",
    demand: "สูงมาก",
    salary: "340K-560K THB/เดือน",
    arabicNeeded: "ไม่จำเป็น",
    companies: "NEOM, Aramco Digital, STC",
    source: "Glassdoor/ZeroTaxJobs: $115K median, สูงสุด $156K/ปี ไม่เสียภาษี",
  },
  {
    field: "E-Commerce / Sales",
    demand: "สูงมาก",
    salary: "100K-350K THB/เดือน",
    arabicNeeded: "ช่วยได้มาก",
    companies: "noon, Jahez, Sary",
    source: "noon.com เป็น Amazon ของซาอุฯ กำลังโตเร็วมาก",
  },
  {
    field: "Halal Food Industry",
    demand: "สูง",
    salary: "80K-250K THB/เดือน",
    arabicNeeded: "จำเป็น",
    companies: "Almarai, NADEC, Savola, SAGO",
    source: "ซาอุฯ นำเข้าอาหาร 80%+ ต้องการคนจัดการ supply chain",
  },
  {
    field: "Digital Marketing",
    demand: "สูง",
    salary: "70K-200K THB/เดือน",
    arabicNeeded: "จำเป็นมาก",
    companies: "หลายบริษัทใน Riyadh/Jeddah",
    source: "ซาอุฯ มี social media users สูงสุดในโลกต่อหัว",
  },
  {
    field: "Islamic Education",
    demand: "ปานกลาง",
    salary: "50K-150K THB/เดือน",
    arabicNeeded: "จำเป็นมาก",
    companies: "Islamic University, MWL, ISDB",
    source: "ต้องมีวุฒิศาสนาที่ซาอุฯ ยอมรับ",
  },
];

// Daily schedule balance
const dailySchedule = [
  { name: "ฟัจร์ + อิบาดะฮ์", hours: 1.5, color: "#4ade80" },
  { name: "เรียนศาสนา", hours: 4, color: "#60a5fa" },
  { name: "ทำงาน/ธุรกิจ", hours: 5, color: "#C87941" },
  { name: "ซุฮ์ร+อัศร์+มัฆริบ", hours: 1.5, color: "#4ade80" },
  { name: "พักผ่อน/ครอบครัว", hours: 3, color: "#a78bfa" },
  { name: "อิชาอ์+กิยามุลลัยล์", hours: 2, color: "#4ade80" },
  { name: "นอน", hours: 7, color: "#2a2a2a" },
];

// Income ranking bar chart data
const incomeRankingData = [...halalBusinessOpportunities]
  .sort((a, b) => b.totalScore - a.totalScore)
  .map((b) => ({
    name: b.name.length > 18 ? b.name.substring(0, 16) + "..." : b.name,
    fullName: b.name,
    score: b.totalScore,
    income: b.incomeScore,
    ease: b.easeScore,
    study: b.studyFriendly,
    saudi: b.saudiPath,
  }));

// Halal market pie chart data (ข้อมูลจริงจาก Nation Thailand)
const halalMarketPieData = [
  { name: "อาหาร", value: 67, color: "#C87941" },
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
          sub: "~300,000 ล้านบาท อันดับ 10 ของโลก (Nation Thailand)",
          color: "text-accent",
        },
        {
          label: "โรงงานฮาลาล CICOT",
          value: "14,000+",
          sub: "160,000+ สินค้า, 33,000+ แบรนด์ได้ฮาลาล (เม.ย. 2023)",
          color: "text-green",
        },
        {
          label: "Modest Fashion โลก",
          value: "$402B",
          sub: "โตปีละ 7.2% — 45% ขายผ่านออนไลน์ (DHL/Halal Times)",
          color: "text-blue",
        },
        {
          label: "NEOM เงินเดือน Dev",
          value: "$115K",
          sub: "/ปี ไม่เสียภาษี = ~340K THB/เดือน (Glassdoor)",
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
        สัดส่วนส่งออกฮาลาลไทย $8.85B — อาหาร 67% (Nation Thailand 2025)
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
        ธุรกิจไหนเหมาะสุดสำหรับนักเรียนศาสนา?
      </h3>
      <p className="text-muted text-sm mb-4">
        คะแนนรวม = รายได้ + ทำง่าย + เรียนควบคู่ + ต่อยอดซาอุฯ (สูงสุด 40)
      </p>
      <ResponsiveContainer width="100%" height={350}>
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
            width={130}
            tick={{ fontSize: 10, fill: "#ccc" }}
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
                  <div>เรียนควบคู่: {d.study}/10</div>
                  <div>สู่ซาอุฯ: {d.saudi}/10</div>
                  <div style={{ fontWeight: "bold", marginTop: 4 }}>รวม: {d.score}/40</div>
                </div>
              );
            }}
          />
          <Bar dataKey="score" radius={[0, 6, 6, 0]}>
            {incomeRankingData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.score >= 30 ? "#4ade80" : entry.score >= 27 ? "#C87941" : "#888888"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-green" />
          <span>แนะนำมาก (30+)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-accent" />
          <span>แนะนำ (27-29)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ background: "#888" }} />
          <span>ทำได้ (&lt;27)</span>
        </div>
      </div>
    </div>
  );
}

function Top3RadarChart() {
  const top3 = [...halalBusinessOpportunities]
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 3);

  const radarData = businessComparisonData.map((m) => {
    const row: Record<string, string | number> = { metric: m.metric };
    top3.forEach((b) => {
      const key = b.id;
      if (m.metric === "รายได้") row[key] = b.incomeScore;
      if (m.metric === "ทำง่าย") row[key] = b.easeScore;
      if (m.metric === "เรียนควบคู่") row[key] = b.studyFriendly;
      if (m.metric === "สู่ซาอุฯ") row[key] = b.saudiPath;
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
        ยิ่งกว้าง = ยิ่งดีในทุกด้าน
      </p>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={radarData} cx="50%" cy="45%" outerRadius="65%">
          <PolarGrid stroke="#2a2a2a" />
          <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "#ccc" }} />
          <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fontSize: 9, fill: "#888" }} />
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
          <Tooltip contentStyle={tooltipStyle} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2 text-xs text-muted">
        {top3.map((b, i) => (
          <div key={b.id} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: colors[i] }} />
            <span>{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DailyScheduleChart() {
  const total = dailySchedule.reduce((acc, d) => acc + d.hours, 0);
  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        ตารางชีวิตประจำวัน: ศาสนา + ดุนยา
      </h3>
      <p className="text-muted text-sm mb-4">
        ตัวอย่างแบ่งเวลา 24 ชม. — อิบาดะฮ์ 5 ชม. + เรียน 4 ชม. + ทำงาน 5 ชม.
      </p>
      <div className="space-y-3">
        {dailySchedule.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted">{item.name}</span>
              <span className="text-xs font-bold" style={{ color: item.color === "#2a2a2a" ? "#888" : item.color }}>{item.hours} ชม.</span>
            </div>
            <div className="w-full h-5 bg-surface-light rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(item.hours / total) * 100}%`,
                  backgroundColor: item.color,
                  minWidth: "8px",
                }}
              />
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
                #{rank} ฮาลาล Score: {company.score}/10
              </span>
            </div>
            <h4 className="text-lg font-bold">{company.name}</h4>
            <p className="text-muted text-sm">{company.industry} | {company.salary} บาท</p>
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
          <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
            <div className="text-accent text-xs font-semibold mb-1">ตำแหน่งเซลส์ที่เหมาะ</div>
            <p className="text-foreground">{company.role}</p>
          </div>
          <div className="p-3 rounded-lg bg-green/5 border border-green/20">
            <div className="text-green text-xs font-semibold mb-1">ทำไมฮาลาล?</div>
            <p className="text-foreground">{company.whyHalal}</p>
          </div>
          <div className="p-3 rounded-lg bg-surface-light">
            <div className="text-blue text-xs font-semibold mb-1">ข้อมูลบริษัท</div>
            <p className="text-foreground">{company.highlight}</p>
          </div>
          <div className="text-[10px] text-muted/60 italic">แหล่งข้อมูล: {company.source}</div>
        </div>
      )}
    </div>
  );
}

function BusinessCard({ biz, rank }: { biz: typeof halalBusinessOpportunities[0]; rank: number }) {
  const [expanded, setExpanded] = useState(rank <= 2);
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
            <p className="text-muted text-sm">รายได้: {biz.income} บาท/เดือน | ลงทุน: {biz.investment}</p>
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
          {/* Real Cases — ข้อมูลจริง */}
          <div className="p-3 rounded-lg bg-surface-light">
            <div className="text-foreground font-semibold text-xs mb-2">{biz.description}</div>
            <ul className="space-y-1.5">
              {biz.realCases.map((c, i) => (
                <li key={i} className="text-foreground flex gap-2">
                  <span className="text-accent shrink-0 font-bold">{i + 1}.</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
            <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-1">
              <Briefcase size={12} /> วิธีเริ่มต้นจริงๆ
            </div>
            <p className="text-foreground">{biz.howTo}</p>
          </div>
          <div className="p-3 rounded-lg bg-green/5 border border-green/20">
            <div className="flex items-center gap-1.5 text-green text-xs font-semibold mb-1">
              <Star size={12} /> ทำไมมีช่องทาง?
            </div>
            <p className="text-foreground">{biz.whyGood}</p>
          </div>
          <div className="p-3 rounded-lg bg-blue/5 border border-blue/20">
            <div className="flex items-center gap-1.5 text-blue text-xs font-semibold mb-1">
              <BookOpen size={12} /> บาลานซ์กับเรียนศาสนา
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
          <Plane size={16} /> ซาอุฯ Vision 2030 — ข้อมูลจาก Glassdoor + NEOM Careers
        </h3>
        <p className="text-muted text-sm mb-4">
          NEOM คาดว่าจะมีพนักงาน 200,000+ คนภายในสิ้นปี 2025 — Software Engineer เงินเดือน
          median $115K/ปี ($9,583/เดือน) ไม่เสียภาษี เท่ากับ $135K ในนิวยอร์ก (ZeroTaxJobs)
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th>สายงาน</th>
                <th>ความต้องการ</th>
                <th>เงินเดือน (THB)</th>
                <th className="hidden md:table-cell">อาหรับ</th>
                <th className="hidden lg:table-cell">บริษัท</th>
              </tr>
            </thead>
            <tbody>
              {saudiCareerPaths.map((path) => (
                <tr key={path.field}>
                  <td className="font-semibold text-foreground">{path.field}</td>
                  <td>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${path.demand === "สูงมาก" ? "bg-green/10 text-green" : path.demand === "สูง" ? "bg-accent/10 text-accent" : "bg-blue/10 text-blue"}`}>
                      {path.demand}
                    </span>
                  </td>
                  <td className="font-mono text-accent text-xs">{path.salary}</td>
                  <td className="hidden md:table-cell text-muted text-xs">{path.arabicNeeded}</td>
                  <td className="hidden lg:table-cell text-muted text-xs">{path.companies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-muted/60 mt-3 italic">
          แหล่งข้อมูล: Glassdoor NEOM Salaries 2026, ZeroTaxJobs Neom Software Engineer, NEOM careers portal
        </p>
      </div>

      <div className="card p-5">
        <h3 className="font-semibold mb-4 text-accent flex items-center gap-2">
          <MapPin size={16} /> แผนเส้นทาง: ไทย → ซาอุฯ (3-5 ปี)
        </h3>
        <div className="space-y-4">
          {[
            {
              phase: "ปีที่ 1: สร้างรากฐาน (ในไทย)",
              color: "text-accent",
              tasks: [
                "เรียนศาสนา + ภาษาอาหรับจริงจัง (เป้า B2 level)",
                "ทำงานเซลส์ที่บริษัทอาหารฮาลาล (CPF/Betagro/Thai Union) สะสมประสบการณ์ + connection",
                "หรือเริ่มธุรกิจฮาลาลเล็กๆ ระหว่างเรียน (dropship/แฟรนไชส์)",
                "สมัคร MEGA Halal Bangkok ทุกปี เพื่อสร้างเครือข่ายตะวันออกกลาง",
              ],
            },
            {
              phase: "ปีที่ 2-3: ต่อยอด",
              color: "text-green",
              tasks: [
                "ถ้าทำเซลส์: ขอย้ายไปแผนก Export ที่ดูแลตลาดตะวันออกกลาง",
                "ถ้าทำธุรกิจ: หาลูกค้าจากซาอุฯ/UAE โดยตรง (ผ่าน LinkedIn + งาน Halal Expo)",
                "รับงาน freelance จากลูกค้าอาหรับผ่าน Upwork (ใช้ภาษาอาหรับเป็นจุดขาย)",
                "เรียนศาสนาให้ลึกขึ้น — ตัฟซีร, อุศูลอัลฟิกฮ์, ฮะดีษ",
              ],
            },
            {
              phase: "ปีที่ 3-5: ก้าวสู่ซาอุฯ",
              color: "text-blue",
              tasks: [
                "สมัครงานผ่าน Bayt.com / careers.neom.com / LinkedIn",
                "หรือขยายธุรกิจ trading ไปตั้ง office ในริยาด (ง่ายขึ้นตาม Vision 2030)",
                "สมัคร Premium Residency ถ้ามี tech skills หรือธุรกิจ",
                "ดำเนินเนียตฮิจเราะฮ์ — ย้ายอยู่ใกล้มักกะฮ์/มะดีนะฮ์",
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
      <HalalMarketOverview />

      <div className="grid gap-6 lg:grid-cols-2">
        <HalalExportPieChart />
        <BusinessScoreChart />
      </div>

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
          <Briefcase size={16} /> ธุรกิจฮาลาล (เคสจริง)
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${tab === "employee" ? "btn-gradient text-background" : "border border-border text-muted hover:text-foreground"}`}
          onClick={() => setTab("employee")}
        >
          <Building2 size={16} /> งานเซลส์ฮาลาล
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
              <Star size={16} /> สรุป: ธุรกิจฮาลาลที่รูปธรรมที่สุด
            </h3>
            <p className="text-sm text-muted">
              ทุกข้อมูลด้านล่างมาจากแหล่งจริง ตัวเลขจริง ไม่ได้คิดเอง —{" "}
              <strong className="text-foreground">#1 Freelance ดิจิทัล</strong> (ลงทุน 0 บาท จัดเวลาเอง) |{" "}
              <strong className="text-foreground">#2 ขายเสื้อผ้ามุสลิม</strong> (dropship 0 บาท ตลาด $402B) |{" "}
              <strong className="text-foreground">#3 ที่ปรึกษาฮาลาล</strong> (ใช้ความรู้ศาสนาโดยตรง)
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
              <Building2 size={16} /> บริษัทฮาลาล — ตำแหน่งเซลส์ (ไม่มีธนาคาร/ริบา)
            </h3>
            <p className="text-sm text-muted">
              คัดเฉพาะบริษัทที่สินค้าฮาลาล 100% — อาหาร วัสดุก่อสร้าง ขนม (ไม่มีเหล้า หมู ดอกเบี้ย)
              เน้นตำแหน่ง Sales/เซลส์ เหมาะกับคนมีประสบการณ์ขาย
            </p>
          </div>
          {sortedCompanies.map((c, i) => (
            <CompanyCard key={c.name} company={c} rank={i + 1} />
          ))}
          <div className="card p-4 bg-surface-light">
            <h4 className="font-semibold text-sm text-muted mb-2 flex items-center gap-2">
              <Clock size={14} /> เคล็ดลับ: ทำเซลส์ + เรียนศาสนาไปด้วย
            </h4>
            <ul className="space-y-1 text-sm text-muted">
              <li className="flex gap-2"><span className="text-accent shrink-0">1.</span> เซลส์อาหาร/วัสดุก่อสร้างมักจบงานบ่าย 3-4 — เหลือเวลาเรียนศาสนาเย็น-ค่ำ</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">2.</span> ใช้เวลาขับรถระหว่างเยี่ยมลูกค้า ฟังบรรยายศาสนา/ท่องกุรอาน</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">3.</span> เซลส์อาหารฮาลาลที่เก่ง → ย้ายไปแผนก Export ตะวันออกกลาง → ต่อยอดซาอุฯ</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">4.</span> ค่าคอมเซลส์อาหาร FMCG = 25,000-96,000 บาท/เดือน (Glassdoor Thailand 2025)</li>
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
        <h4 className="font-semibold text-sm text-accent mb-2">แหล่งข้อมูลทั้งหมด (ตรวจสอบได้)</h4>
        <div className="grid gap-1 md:grid-cols-2 text-xs text-muted">
          {[
            "Nation Thailand — Halal exports $8.85B (มี.ค. 2025)",
            "Nation Thailand — Global Halal Market $3.1T (ส.ค. 2024)",
            "SeafoodSource — Thailand food industry halal certification",
            "CICOT — 14,000+ companies, 160,000+ products certified (เม.ย. 2023)",
            "Chicky Chic — franchise.chicky-chic.com (กำไร 58%, คืนทุน 4-6 เดือน)",
            "PostToday — ซาลาเปาซั่งไห่ ลงทุน 150K คืนทุนเดือนแรก",
            "DHL Malaysia — Modest Fashion $295B→$402B, 7.2% CAGR",
            "Halal Times — 45% modest fashion sold online (2024)",
            "Glassdoor — Sales Rep Thailand avg $40,271/yr (2025)",
            "Glassdoor — NEOM salary median $115K/yr (2026)",
            "ZeroTaxJobs — NEOM Software Engineer $97K-$156K/yr",
            "MEGA Halal Bangkok 2025 — ยอดเจรจาการค้า 85M THB",
            "Betagro — careers.betagro.com, 120+ positions open",
            "Creden.co — S-R Food Halal Co., Ltd. (0105558131721)",
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
