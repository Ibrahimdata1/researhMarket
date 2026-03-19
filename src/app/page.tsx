"use client";

import Navbar from "@/components/Navbar";
import { MarketSizeChart, GrowthRateChart, OpportunityMatrixChart } from "@/components/MarketOverviewCharts";
import SectorAnalysis from "@/components/SectorAnalysis";
import CompetitorTable from "@/components/CompetitorTable";
import StrategySection from "@/components/StrategySection";
import HalalCareerSection from "@/components/HalalCareerSection";
import { digitalEconomyOverview } from "@/lib/data";

export default function Home() {
  const ov = digitalEconomyOverview;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-medium mb-6">
            วิจัยตลาดเทคโนโลยีไทย 2025-2026 (ข้อมูลล่าสุด มี.ค. 2026)
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">ส่องโอกาส</span> ธุรกิจ
            <br />
            <span className="gradient-text">เทคโนโลยี</span>ในไทย
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            เราค้นคว้าข้อมูลจริงจากแหล่งที่น่าเชื่อถือ เพื่อดูว่าวงการไหนในไทย
            ยังขาดเทคโนโลยีดีๆ แล้วบริษัทเทคของเรา
            จะเข้าไปทำธุรกิจตรงไหนได้บ้าง
          </p>
          <p className="text-2xl md:text-3xl font-bold gradient-text mb-8">
            RunawayTech
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#overview"
              className="btn-gradient px-6 py-3 rounded-lg text-background font-semibold text-sm"
            >
              ดูข้อมูลวิเคราะห์
            </a>
            <a
              href="#strategy"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent/30 transition-colors"
            >
              ดูแผนเจาะตลาด
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            {
              label: "ตลาดออนไลน์ไทย (ปี 2025)",
              value: `$${ov.totalGMV2025}B`,
              sub: `ประมาณ 1.9 ล้านล้านบาท โตขึ้น ${ov.growthRate}% จากปีก่อน`,
              color: "text-accent",
            },
            {
              label: "คนไทยออนไลน์",
              value: `${ov.internetUsers}M`,
              sub: `${ov.internetPenetration}% ของประชากร, 5G ครอบคลุม ${ov.fiveGCoverage}%`,
              color: "text-green",
            },
            {
              label: "Startup ไทย & Unicorn",
              value: `${ov.unicorns} Unicorn`,
              sub: `Flash, LINE MAN, Ascend Money, Bitkub, OPN`,
              color: "text-blue",
            },
            {
              label: "ลงทุน Data Center ปี 2025",
              value: `$${ov.dataCenterInvestment}B`,
              sub: `Google Cloud เปิดที่กรุงเทพ ม.ค. 2026`,
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
      </section>

      <div className="section-divider" />

      {/* Section: Market Overview */}
      <section id="overview" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">ภาพรวม:</span> ตลาดเทคโนโลยีไทยใหญ่แค่ไหน?
          </h2>
          <p className="text-muted max-w-3xl">
            กราฟด้านล่างเปรียบเทียบ 11 วงการธุรกิจที่ใช้เทคโนโลยีในไทย
            ว่าวงการไหนมีเงินหมุนเวียนมากที่สุด และวงการไหนกำลังโตเร็วที่สุด
            เพื่อหาโอกาสที่ดีที่สุดในการเริ่มทำธุรกิจเทค
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <MarketSizeChart />
          <GrowthRateChart />
        </div>

        <div className="mt-6">
          <OpportunityMatrixChart />
        </div>

        <div className="mt-6 card p-5">
          <h3 className="font-semibold mb-3 text-accent">
            สรุปง่ายๆ: ทำไมตลาดเทคไทยน่าทำธุรกิจ?
          </h3>
          <div className="grid gap-3 md:grid-cols-2 text-sm text-muted">
            <div className="flex gap-2">
              <span className="text-accent shrink-0">1.</span>
              <span>
                <strong className="text-foreground">ดิจิทัลโตเร็วกว่าเศรษฐกิจ 3 เท่า</strong> — GDP ดิจิทัลไทยโต 6.2% ต่อปี
                ในขณะที่เศรษฐกิจทั่วไปโตแค่ 2.4% (ปี 2025) — เงินย้ายมาออนไลน์เร็วมาก
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">2.</span>
              <span>
                <strong className="text-foreground">3 ธนาคารดิจิทัลเปิดตัวกลางปี 2026</strong> — CP Group, กรุงไทย+AIS,
                SCBX+KakaoBank ได้ใบอนุญาตแล้ว ต้องเปิดภายใน มิ.ย. 2026 — จะเขย่าวงการการเงินไทย
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">3.</span>
              <span>
                <strong className="text-foreground">ร้านค้าเล็กๆ 3.2 ล้านร้าน ยังไม่ใช้เทคโนโลยี</strong> — รัฐบาลให้ลดภาษี
                200% สำหรับค่าใช้จ่ายดิจิทัลของ SME (มิ.ย. 2025 - ธ.ค. 2027) — SME มีแรงจูงใจซื้อซอฟต์แวร์
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">4.</span>
              <span>
                <strong className="text-foreground">Data Center บูมสุดๆ</strong> — ลงทุน $23.1B ในปี 2025
                Google Cloud เปิดที่กรุงเทพ ม.ค. 2026, CP+BlackRock ทำ Giga data center $3-5B
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Section: Sector Deep Dive */}
      <section id="sectors" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">เจาะลึก</span> แต่ละวงการ
          </h2>
          <p className="text-muted max-w-3xl">
            คลิกที่แต่ละวงการเพื่อดูข้อมูลละเอียด: ใครครองตลาดอยู่, รายได้เท่าไร,
            จุดแข็งและจุดอ่อนของคู่แข่ง แล้วเราจะเข้าไปแย่งตลาดตรงไหนได้
          </p>
        </div>

        <SectorAnalysis />
      </section>

      <div className="section-divider" />

      {/* Section: Competitor Overview Table */}
      <section id="competitors" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">ตารางเปรียบเทียบ</span> คู่แข่งทุกวงการ
          </h2>
          <p className="text-muted max-w-3xl">
            ดูภาพรวมว่าในแต่ละวงการ ใครเป็นเจ้าตลาด กินส่วนแบ่งเท่าไร
            มีรายได้เท่าไร แล้วจุดอ่อนอะไรที่ RunawayTech สามารถเข้าไปทำได้ดีกว่า
          </p>
        </div>

        <div className="card p-4 md:p-6">
          <CompetitorTable />
        </div>
      </section>

      <div className="section-divider" />

      {/* Section: Strategy */}
      <section id="strategy" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            แผนธุรกิจ <span className="gradient-text">RunawayTech</span>
          </h2>
          <p className="text-muted max-w-3xl">
            จากข้อมูลที่วิเคราะห์มาทั้งหมด เราเลือก 4 ผลิตภัณฑ์ที่น่าทำที่สุด
            โดยดูจากว่า ตลาดโตเร็วไหม, เข้าตลาดยากหรือง่าย, คู่แข่งแข็งแกร่งแค่ไหน
          </p>
        </div>

        <StrategySection />

        {/* Execution Roadmap */}
        <div className="mt-8 card p-5">
          <h3 className="font-semibold mb-4 text-accent">
            แผนปฏิบัติการ: ทำอะไรบ้างใน 18 เดือนแรก
          </h3>
          <div className="space-y-4">
            {[
              {
                phase: "ช่วงที่ 1: วางรากฐาน (เดือน 1-3)",
                color: "text-accent",
                tasks: [
                  "สร้างทีม: โปรแกรมเมอร์ 2 คน + ดีไซเนอร์ 1 คน + เซลส์ 1 คน",
                  "สร้างแอปตัวแรก RunawayOS (ระบบจัดการร้านค้า: ขายของ + ออกบิล + บันทึกรายจ่าย)",
                  "หาร้านค้า 20 ร้านในกรุงเทพมาทดลองใช้ฟรี 3 เดือน",
                  "จดทะเบียน BOI เพื่อรับสิทธิ์ลดภาษี",
                ],
              },
              {
                phase: "ช่วงที่ 2: ปรับปรุงจนลูกค้าชอบ (เดือน 4-9)",
                color: "text-green",
                tasks: [
                  "เอา feedback จากร้านค้า 20 ร้าน มาปรับปรุงแอป แล้วขยายเป็น 100 ร้าน",
                  "เพิ่มระบบเงินเดือนพนักงาน + รับชำระเงินผ่าน QR Code",
                  "ทำคอนเทนต์สอนร้านค้าทำบัญชีง่ายๆ ผ่าน TikTok/YouTube",
                  "เริ่มเก็บเงิน: ให้ใช้ฟรีแบบจำกัด แล้วจ่ายเพิ่มถ้าอยากได้ฟีเจอร์เต็ม",
                  "เริ่มพัฒนาแอประบบคลินิก RunawayCare",
                ],
              },
              {
                phase: "ช่วงที่ 3: ขยายธุรกิจ (เดือน 10-18)",
                color: "text-blue",
                tasks: [
                  "ขยายลูกค้า RunawayOS ให้ถึง 500 ร้านค้า",
                  "เปิดตัว RunawayCare ให้คลินิก 50 แห่งทดลองใช้",
                  "ระดมทุนรอบแรก 17-51 ล้านบาท",
                  "จับมือกับสมาคมร้านค้า/หอการค้า เพื่อหาลูกค้าเพิ่ม",
                  "เริ่มพัฒนา RunawayPeople (ระบบจัดการ HR สำหรับบริษัทเล็ก)",
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
                      <span className={`${phase.color} shrink-0`}>&#9654;</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Section: Halal Career & Business */}
      <section id="halal" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">อาชีพ & ธุรกิจฮาลาล</span> สำหรับนักเรียนศาสนา
          </h2>
          <p className="text-muted max-w-3xl">
            วิเคราะห์เชิงลึก: ทำงานที่ไหนในไทยที่ฮาลาลและ Muslim-friendly?
            ทำธุรกิจอะไรที่ฮาลาล ได้เงินดี ทำง่าย แล้วยังบาลานซ์กับการเรียนศาสนาเป็นอุละมาอ์ได้?
            พร้อมเส้นทางสู่ซาอุดีอาระเบีย (ฮิจเราะฮ์) ด้วยทักษะดุนยาที่แข็งแกร่ง
          </p>
        </div>

        <HalalCareerSection />
      </section>

      <div className="section-divider" />

      {/* Section: Sources */}
      <section id="sources" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">แหล่งข้อมูล</span> ที่ใช้อ้างอิง
          </h2>
          <p className="text-muted text-sm">
            ตัวเลขทุกตัวในเว็บนี้มาจากรายงานวิจัยและข่าวที่เชื่อถือได้ ไม่ได้คิดเอง
          </p>
        </div>
        <div className="card p-5">
          <div className="grid gap-2 md:grid-cols-2 text-sm text-muted">
            {[
              "Google e-Conomy SEA 2025 Report — Thailand $56B GMV",
              "Sea Ltd Q4 & Full Year 2025 Earnings (มี.ค. 2026)",
              "Grab Q3 2025 Results — Thailand highest growth",
              "ธนาคารแห่งประเทศไทย — ใบอนุญาต Virtual Bank (19 มิ.ย. 2025)",
              "DataReportal — Digital 2026 Thailand (67.8M users)",
              "Mordor Intelligence — Thailand CEP, Mobile Payments, HR SaaS",
              "DealStreetAsia — Food Delivery, Startup Funding 2025-2026",
              "Nation Thailand — Foodpanda exit, Temu impact, Factory closures",
              "Bangkok Post — KEX delisting, Lazada pivot, Virtual banks (2025-2026)",
              "TechCrunch — LINE MAN IPO, Ascend Money unicorn",
              "Tracxn — Thailand Startups, AgriTech, HealthTech data",
              "Grand View Research — Thailand Telehealth Market 2030",
              "IMARC Group — Thailand EdTech, AgriTech, E-Commerce Markets",
              "GetLatka — PEAK revenue 2024",
              "PropertyScout — Series A announcement (Altara Ventures)",
              "PR Newswire — J&T Express 30B parcels record (2025)",
              "BOI Thailand — New incentives package (ม.ค. 2026)",
              "DEPA — SME digital grants & AI initiatives 2025-2026",
              "Booking Holdings Q4 2025 Earnings — Agoda Asia growth",
              "Caproasia — LINE MAN Wongnai IPO Hong Kong/NY (ก.พ. 2026)",
            ].map((src) => (
              <div key={src} className="flex gap-2">
                <span className="text-accent shrink-0">&#9679;</span>
                {src}
              </div>
            ))}
          </div>
          <p className="text-muted/60 text-xs mt-4">
            ข้อมูลทั้งหมดรวบรวมจากแหล่งข้อมูลสาธารณะ รายงานวิจัยตลาด และบทความข่าวที่เชื่อถือได้ ณ มีนาคม 2026
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="gradient-text text-xl font-bold mb-3">
          RunawayTech — วิเคราะห์ตลาดด้วยข้อมูลจริง
        </p>
        <p className="text-muted text-sm max-w-lg mx-auto mb-6">
          ทุกตัวเลขในเว็บนี้มาจากรายงานวิจัยตลาดที่ตรวจสอบได้ ไม่ใช่การเดาหรือคิดเอง
        </p>
        <p className="text-muted/50 text-xs">
          &copy; 2026 RunawayTech Market Intelligence
        </p>
      </footer>
    </>
  );
}
