"use client";

import Navbar from "@/components/Navbar";
import { MarketSizeChart, GrowthRateChart, OpportunityMatrixChart } from "@/components/MarketOverviewCharts";
import SectorAnalysis from "@/components/SectorAnalysis";
import CompetitorTable from "@/components/CompetitorTable";
import StrategySection from "@/components/StrategySection";
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
            Thailand Tech Market Intelligence 2024-2025
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">Data-Driven</span> วิเคราะห์
            <br />
            ตลาด<span className="gradient-text"> Tech ไทย</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            วิจัยเชิงลึกอุตสาหกรรม Tech ในไทย — ขนาดตลาด, คู่แข่ง, ส่วนแบ่ง,
            จุดอ่อน-จุดแข็ง พร้อมกลยุทธ์เจาะตลาดสำหรับ
          </p>
          <p className="text-2xl md:text-3xl font-bold gradient-text mb-8">
            RunawayTech
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#overview"
              className="btn-gradient px-6 py-3 rounded-lg text-background font-semibold text-sm"
            >
              ดู Data วิเคราะห์
            </a>
            <a
              href="#strategy"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent/30 transition-colors"
            >
              กลยุทธ์เจาะตลาด
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            {
              label: "Digital Economy GMV 2024",
              value: `$${ov.totalGMV2024}B`,
              sub: `เติบโต ${ov.growthRate}% → $${ov.totalGMV2025}B ในปี 2025`,
              color: "text-accent",
            },
            {
              label: "สัดส่วนต่อ GDP",
              value: `${ov.gdpContribution}%`,
              sub: `${ov.gdpContributionTHB.toLocaleString()}B THB`,
              color: "text-green",
            },
            {
              label: "Startup Ecosystem",
              value: `${ov.totalStartups.toLocaleString()}`,
              sub: `${ov.unicorns} Unicorns, มูลค่า $${ov.startupEcosystemValue}B`,
              color: "text-blue",
            },
            {
              label: "Startup Funding 2024",
              value: `$${ov.seedFunding2024}M+`,
              sub: `อันดับ ${ov.seaRanking} ใน SEA`,
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
            <span className="gradient-text">ภาพรวมตลาด</span> Tech ไทย
          </h2>
          <p className="text-muted max-w-3xl">
            เปรียบเทียบขนาดตลาดและอัตราการเติบโตของ 11 sectors เพื่อหาโอกาสที่ดีที่สุดสำหรับ tech startup
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
            สรุปภาพรวม: ทำไมตลาด Tech ไทยน่าสนใจ
          </h3>
          <div className="grid gap-3 md:grid-cols-2 text-sm text-muted">
            <div className="flex gap-2">
              <span className="text-accent shrink-0">1.</span>
              <span>
                <strong className="text-foreground">Digital Economy โต 16%/ปี</strong> — จาก $49B เป็น $56B
                เร็วกว่า GDP ที่โตแค่ 2.7% ถึง 6 เท่า
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">2.</span>
              <span>
                <strong className="text-foreground">92% คนไทยใช้ Digital Payment</strong> — infrastructure
                พร้อม, PromptPay 74M transactions/วัน
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">3.</span>
              <span>
                <strong className="text-foreground">SME 3.2 ล้านราย ยังไม่ digitize</strong> — penetration
                ของ cloud SaaS ต่ำมาก, ส่วนใหญ่ยังใช้ Excel/กระดาษ
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">4.</span>
              <span>
                <strong className="text-foreground">Government BOI ลดภาษี 13 ปี</strong> — สำหรับ startup
                ใน targeted sectors, depa ให้ grant + cloud credits
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
            <span className="gradient-text">วิเคราะห์เชิงลึก</span> 11 อุตสาหกรรม
          </h2>
          <p className="text-muted max-w-3xl">
            คลิกแต่ละ sector เพื่อดูรายละเอียด: ส่วนแบ่งตลาด, คู่แข่งหลัก, จุดแข็ง-จุดอ่อน, โอกาสเข้าตลาด
          </p>
        </div>

        <SectorAnalysis />
      </section>

      <div className="section-divider" />

      {/* Section: Competitor Overview Table */}
      <section id="competitors" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">Competitor</span> Landscape
          </h2>
          <p className="text-muted max-w-3xl">
            ตารางรวมคู่แข่งหลักทุก sector — เปรียบเทียบ market share, revenue, และจุดอ่อนที่ RunawayTech สามารถ exploit ได้
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
            กลยุทธ์ <span className="gradient-text">RunawayTech</span> เจาะตลาด
          </h2>
          <p className="text-muted max-w-3xl">
            4 product lines ที่แนะนำ จัดลำดับความสำคัญจาก data — โอกาสสูง, เข้าง่าย,
            ตลาดโตเร็ว, คู่แข่งยังไม่แข็งแกร่ง
          </p>
        </div>

        <StrategySection />

        {/* Execution Roadmap */}
        <div className="mt-8 card p-5">
          <h3 className="font-semibold mb-4 text-accent">
            Execution Roadmap: 18 เดือนแรก
          </h3>
          <div className="space-y-4">
            {[
              {
                phase: "Phase 1: Foundation (เดือน 1-3)",
                color: "text-accent",
                tasks: [
                  "สร้างทีม core: 2 full-stack devs + 1 designer + 1 sales",
                  "MVP ของ RunawayOS (POS + Invoice + Expense tracker)",
                  "หา 20 ร้านค้า beta users ใน BKK ฟรี 3 เดือน",
                  "จด BOI สำหรับ tax incentives",
                ],
              },
              {
                phase: "Phase 2: Product-Market Fit (เดือน 4-9)",
                color: "text-green",
                tasks: [
                  "Iterate จาก feedback beta users ถึง 100 ร้าน",
                  "เพิ่ม Payroll module + PromptPay QR integration",
                  "Content marketing: TikTok สอน SME ทำบัญชี",
                  "เริ่ม revenue: Free → Paid conversion",
                  "เริ่ม develop RunawayCare MVP (clinic SaaS)",
                ],
              },
              {
                phase: "Phase 3: Scale (เดือน 10-18)",
                color: "text-blue",
                tasks: [
                  "ขยายฐานลูกค้า RunawayOS ถึง 500 ร้าน",
                  "Launch RunawayCare สำหรับ 50 คลินิก beta",
                  "Raise Seed Round $500K-$1.5M",
                  "หา partnership กับสมาคมร้านค้า/หอการค้า",
                  "เริ่ม develop RunawayPeople (HR SaaS)",
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

      {/* Section: Sources */}
      <section id="sources" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">แหล่งข้อมูล</span> & Sources
          </h2>
        </div>
        <div className="card p-5">
          <div className="grid gap-2 md:grid-cols-2 text-sm text-muted">
            {[
              "Google e-Conomy SEA Report 2024",
              "Momentum Works — Food Delivery, E-Commerce Reports",
              "Mordor Intelligence — Thailand CEP, Ride-hailing, Fintech Markets",
              "Statista — Thailand Food Delivery, Digital Payments, SaaS",
              "Grand View Research — Thailand Telehealth Market",
              "Ken Research — Thailand HR Tech, PropTech, Fintech",
              "IMARC Group — Thailand AgriTech, Online Travel Markets",
              "Bangkok Post — Business & Tech sections 2024-2025",
              "Nation Thailand — E-commerce, Logistics revenue reports",
              "TechCrunch — LINE MAN Wongnai IPO coverage",
              "GetLatka — PEAK revenue data 2024",
              "FlowAccount — Company profile & user data",
              "Trade.gov — Thailand Digital Economy overview",
              "World Bank — Thailand Digital Future report",
              "DealStreetAsia — Flash Express, LINE MAN funding",
              "Thai Venture Capital Association (TVCA) — Funding data",
              "Verified Market Research — Thailand Mobile Payments",
              "6W Research — Thailand EdTech Market Outlook",
              "IMARC Group — Thailand Online Travel, AgriTech, EdTech Markets",
              "Bloomberg — Agoda CEO interview, Thailand tourism data",
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
          RunawayTech — Data-Driven Market Entry
        </p>
        <p className="text-muted text-sm max-w-lg mx-auto mb-6">
          วิเคราะห์ตลาดด้วย data จริง ไม่ใช่ gut feeling — ทุกตัวเลขมาจากแหล่งข้อมูลที่ตรวจสอบได้
        </p>
        <p className="text-muted/50 text-xs">
          &copy; 2026 RunawayTech Market Intelligence. All data from public sources.
        </p>
      </footer>
    </>
  );
}
