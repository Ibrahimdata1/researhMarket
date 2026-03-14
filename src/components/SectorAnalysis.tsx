"use client";

import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { sectors } from "@/lib/data";
import type { SectorData } from "@/lib/data";
import { ChevronDown, ChevronUp, Target, Shield, Zap, AlertTriangle } from "lucide-react";

const COLORS = ["#C87941", "#E8B878", "#60a5fa", "#a78bfa", "#4ade80", "#f87171", "#22d3ee"];

function MarketSharePie({ players }: { players: SectorData["dominantPlayers"] }) {
  const data = players.map((p) => ({
    name: p.name,
    value: p.marketShare,
  }));
  const others = 100 - data.reduce((a, b) => a + b.value, 0);
  if (others > 0) data.push({ name: "Others", value: others });

  return (
    <div className="flex items-center gap-2">
      <ResponsiveContainer width={140} height={140}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={60}
            dataKey="value"
            stroke="#0a0a0a"
            strokeWidth={2}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#141414",
              border: "1px solid #2a2a2a",
              borderRadius: 8,
              color: "#ededed",
              fontSize: 12,
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any) => [`${value}%`, "Market Share"]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-1">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center gap-2 text-xs">
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: COLORS[i % COLORS.length] }}
            />
            <span className="text-muted">{d.name}</span>
            <span className="font-mono font-bold text-foreground">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlayerCard({ player, index }: { player: SectorData["dominantPlayers"][0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg p-3 hover:border-accent/30 transition-colors">
      <button
        className="w-full text-left flex items-center justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full shrink-0"
            style={{ background: COLORS[index % COLORS.length] }}
          />
          <span className="font-semibold text-sm">{player.name}</span>
          <span className="text-accent font-mono text-xs">{player.marketShare}%</span>
        </div>
        {expanded ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
      </button>

      {expanded && (
        <div className="mt-3 space-y-3 text-sm animate-fade-in">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-muted">Revenue:</span>
              <div className="font-mono text-foreground">{player.revenue}</div>
            </div>
            <div>
              <span className="text-muted">Valuation:</span>
              <div className="font-mono text-foreground">{player.valuation}</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1 text-green text-xs font-semibold mb-1">
              <Shield size={12} /> จุดแข็ง (ทำไมถึงครองตลาดได้)
            </div>
            <ul className="space-y-0.5">
              {player.strengths.map((s) => (
                <li key={s} className="text-xs text-muted flex gap-1.5">
                  <span className="text-green shrink-0">+</span> {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-1 text-red text-xs font-semibold mb-1">
              <AlertTriangle size={12} /> จุดอ่อน (ช่องโหว่ที่เราเข้าไปแย่งได้)
            </div>
            <ul className="space-y-0.5">
              {player.weaknesses.map((w) => (
                <li key={w} className="text-xs text-muted flex gap-1.5">
                  <span className="text-red shrink-0">-</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function SectorCard({ sector }: { sector: SectorData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card p-5" id={`sector-${sector.id}`}>
      <button
        className="w-full text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{sector.icon}</span>
            <div>
              <h3 className="font-bold text-lg">
                {sector.name}{" "}
                <span className="text-muted text-sm font-normal">({sector.nameEn})</span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/15 text-accent font-mono">
                  ${sector.marketSizeUSD}B
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green/15 text-green font-mono">
                  CAGR {sector.growthRate}%
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue/15 text-blue">
                  โอกาส {sector.opportunityScore}/10
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple/15 text-purple">
                  ความยาก {sector.entryDifficulty}/10
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0 ml-2">
            {expanded ? <ChevronUp size={20} className="text-muted" /> : <ChevronDown size={20} className="text-muted" />}
          </div>
        </div>
      </button>

      <p className="text-muted text-sm mt-3">{sector.description}</p>

      {/* Key Insight always visible */}
      <div className="mt-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
        <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-1">
          <Zap size={12} /> โอกาสที่ RunawayTech เข้าไปทำได้
        </div>
        <p className="text-sm text-foreground">{sector.keyInsight}</p>
      </div>

      {expanded && (
        <div className="mt-4 space-y-4 animate-fade-in">
          {/* Market Share Pie */}
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-1.5">
              <Target size={14} className="text-accent" />
              ส่วนแบ่งตลาด & คู่แข่ง
            </h4>
            <MarketSharePie players={sector.dominantPlayers} />
          </div>

          {/* Player details */}
          <div className="space-y-2">
            {sector.dominantPlayers.map((player, i) => (
              <PlayerCard key={player.name} player={player} index={i} />
            ))}
          </div>

          {/* Additional info */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2 rounded-lg bg-surface-light">
              <span className="text-muted">TAM (Total Addressable Market)</span>
              <div className="font-mono text-accent mt-0.5">{sector.totalAddressableMarket}</div>
            </div>
            <div className="p-2 rounded-lg bg-surface-light">
              <span className="text-muted">แหล่งข้อมูล</span>
              <div className="text-foreground mt-0.5">{sector.source}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SectorAnalysis() {
  return (
    <div className="grid gap-4">
      {sectors.map((sector) => (
        <SectorCard key={sector.id} sector={sector} />
      ))}
    </div>
  );
}
