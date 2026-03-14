"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { strategies, revenueProjection } from "@/lib/data";
import type { StrategyRec } from "@/lib/data";
import { Rocket, Target, DollarSign, Lightbulb, ChevronDown, ChevronUp, Crown } from "lucide-react";

const tooltipStyle = {
  background: "#141414",
  border: "1px solid #2a2a2a",
  borderRadius: 8,
  color: "#ededed",
};

function RevenueProjectionChart() {
  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        คาดการณ์รายได้ RunawayTech (ล้าน THB)
      </h3>
      <p className="text-muted text-sm mb-4">
        3 สถานการณ์: Conservative / Moderate / Aggressive (รวมทุก product line)
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={revenueProjection} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#ccc" }} />
          <YAxis
            tickFormatter={(v) => `${v}M`}
            tick={{ fontSize: 11, fill: "#888" }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any) => [`${value}M THB`, ""]}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="aggressive"
            name="Aggressive"
            stroke="#4ade80"
            fill="#4ade80"
            fillOpacity={0.15}
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="moderate"
            name="Moderate"
            stroke="#C87941"
            fill="#C87941"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="conservative"
            name="Conservative"
            stroke="#888888"
            fill="#888888"
            fillOpacity={0.1}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-muted text-[10px] mt-2 italic">
        * คาดการณ์จาก benchmark กับ SaaS startup ไทย (PEAK, FlowAccount) และ Southeast Asian SaaS growth rates
      </p>
    </div>
  );
}

function StrategyCard({ strategy, rank }: { strategy: StrategyRec; rank: number }) {
  const [expanded, setExpanded] = useState(rank === 1);

  const priorityColors = ["text-accent", "text-green", "text-blue", "text-purple"];
  const priorityBg = ["bg-accent/10", "bg-green/10", "bg-blue/10", "bg-purple/10"];

  return (
    <div className={`card p-5 ${rank === 1 ? "animate-pulse-glow border-accent/40" : ""}`}>
      <button
        className="w-full text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {rank === 1 && <Crown size={16} className="text-accent" />}
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${priorityBg[rank - 1]} ${priorityColors[rank - 1]}`}>
                Priority #{rank}
              </span>
              <span className="text-xs text-muted">{strategy.sector}</span>
            </div>
            <h3 className="text-xl font-bold">
              <span className="gradient-text">{strategy.productName}</span>
            </h3>
            <p className="text-muted text-sm mt-1">{strategy.tagline}</p>
          </div>
          {expanded ? <ChevronUp size={20} className="text-muted shrink-0" /> : <ChevronDown size={20} className="text-muted shrink-0" />}
        </div>
      </button>

      {/* Always-visible quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        <div className="p-2 rounded-lg bg-surface-light text-center">
          <div className="text-muted text-[10px]">Target Market</div>
          <div className="text-xs font-semibold mt-0.5">{strategy.targetMarket.split(" ").slice(0, 4).join(" ")}...</div>
        </div>
        <div className="p-2 rounded-lg bg-surface-light text-center">
          <div className="text-muted text-[10px]">TAM</div>
          <div className="text-accent font-mono text-xs font-bold mt-0.5">{strategy.tam.split(" ")[0]}</div>
        </div>
        <div className="p-2 rounded-lg bg-surface-light text-center">
          <div className="text-muted text-[10px]">แย่งได้</div>
          <div className="text-green font-mono text-xs font-bold mt-0.5">{strategy.capturable.split("=")[1]?.trim().split(" ")[0]}</div>
        </div>
        <div className="p-2 rounded-lg bg-surface-light text-center">
          <div className="text-muted text-[10px]">Revenue Y3</div>
          <div className="text-accent font-mono text-xs font-bold mt-0.5">{strategy.revenueY3.split(" ")[0]}</div>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 space-y-4 animate-fade-in">
          {/* Target & Market */}
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-surface-light">
              <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-2">
                <Target size={12} /> Target Market
              </div>
              <p className="text-sm text-foreground">{strategy.targetMarket}</p>
              <div className="mt-2 text-xs text-muted">
                <span className="font-semibold text-accent">TAM:</span> {strategy.tam}
              </div>
              <div className="text-xs text-muted">
                <span className="font-semibold text-green">Capturable:</span> {strategy.capturable}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-surface-light">
              <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-2">
                <DollarSign size={12} /> Revenue Model
              </div>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Pricing:</span> {strategy.pricing}
              </p>
              <p className="text-sm text-muted mt-1">
                <span className="font-semibold text-foreground">Y3 Target:</span> {strategy.revenueY3}
              </p>
            </div>
          </div>

          {/* How to Enter */}
          <div className="p-3 rounded-lg bg-surface-light">
            <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-2">
              <Rocket size={12} /> วิธีเจาะตลาดเป็นขั้นตอน
            </div>
            <ol className="space-y-1.5">
              {strategy.howToEnter.map((step, i) => (
                <li key={i} className="text-sm text-foreground flex gap-2">
                  <span className="text-accent font-bold shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Competitive Advantage */}
          <div className="p-3 rounded-lg bg-green/5 border border-green/20">
            <div className="flex items-center gap-1.5 text-green text-xs font-semibold mb-2">
              <Lightbulb size={12} /> ทำไม RunawayTech ถึงชนะได้
            </div>
            <ul className="space-y-1">
              {strategy.competitiveAdvantage.map((adv) => (
                <li key={adv} className="text-sm text-foreground flex gap-2">
                  <span className="text-green shrink-0">&#9654;</span>
                  {adv}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StrategySection() {
  return (
    <div className="space-y-6">
      <RevenueProjectionChart />

      <div className="space-y-4">
        {strategies.map((s, i) => (
          <StrategyCard key={s.id} strategy={s} rank={i + 1} />
        ))}
      </div>
    </div>
  );
}
