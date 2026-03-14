"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
  Legend,
} from "recharts";
import { marketSizeChartData, growthRateChartData, opportunityMatrix } from "@/lib/data";

const tooltipStyle = {
  background: "#141414",
  border: "1px solid #2a2a2a",
  borderRadius: 8,
  color: "#ededed",
};

export function MarketSizeChart() {
  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        ขนาดตลาด Tech แต่ละอุตสาหกรรม (ล้าน USD)
      </h3>
      <p className="text-muted text-sm mb-4">
        เปรียบเทียบมูลค่าตลาดของแต่ละ sector ในปี 2024
      </p>
      <ResponsiveContainer width="100%" height={420}>
        <BarChart
          data={marketSizeChartData}
          layout="vertical"
          margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            tickFormatter={(v) => v >= 1000 ? `$${(v / 1000).toFixed(0)}B` : `$${v}M`}
            tick={{ fontSize: 11, fill: "#888" }}
          />
          <YAxis
            dataKey="name"
            type="category"
            width={110}
            tick={{ fontSize: 12, fill: "#ccc" }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any) => [
              Number(value) >= 1000 ? `$${(Number(value) / 1000).toFixed(1)}B` : `$${value}M`,
              "Market Size",
            ]}
          />
          <Bar dataKey="size" radius={[0, 6, 6, 0]}>
            {marketSizeChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-muted text-[10px] mt-2 italic">
        * ข้อมูลจาก Mordor Intelligence, Statista, Momentum Works, Ken Research ปี 2024
      </p>
    </div>
  );
}

export function GrowthRateChart() {
  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        อัตราการเติบโต CAGR (%) แต่ละ Sector
      </h3>
      <p className="text-muted text-sm mb-4">
        Sector ที่โตเร็วกว่า 15% (เส้นประ) = โอกาสสูง
      </p>
      <ResponsiveContainer width="100%" height={420}>
        <BarChart data={growthRateChartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: "#ccc" }}
            angle={-35}
            textAnchor="end"
            height={70}
          />
          <YAxis
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11, fill: "#888" }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any) => [`${value}%`, "CAGR"]}
          />
          <ReferenceLine
            y={15}
            stroke="#C87941"
            strokeWidth={2}
            strokeDasharray="8 4"
            label={{
              value: "High Growth 15%",
              position: "right",
              fill: "#C87941",
              fontSize: 11,
              fontWeight: "bold",
            }}
          />
          <Bar dataKey="rate" radius={[6, 6, 0, 0]}>
            {growthRateChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.rate >= 15 ? "#4ade80" : entry.color}
                fillOpacity={entry.rate >= 15 ? 1 : 0.6}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-2 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-green" />
          <span>High Growth (&gt;15% CAGR)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-5 border-t-2 border-dashed border-accent" />
          <span>เส้นแบ่ง 15%</span>
        </div>
      </div>
    </div>
  );
}

export function OpportunityMatrixChart() {
  const data = opportunityMatrix.map((d) => ({
    ...d,
    z: Math.max(Math.log(d.size + 1) * 100, 200),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (!cx || !cy) return null;
    const radius = Math.max(Math.min(Math.log(payload.size + 1) * 4, 30), 8);
    const isHighOpp = payload.opportunity >= 8;
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill={isHighOpp ? "#4ade80" : "#C87941"}
          fillOpacity={0.7}
          stroke={isHighOpp ? "#4ade80" : "#C87941"}
          strokeWidth={2}
        />
        <text
          x={cx}
          y={cy - radius - 6}
          textAnchor="middle"
          fill="#ededed"
          fontSize={10}
          fontWeight="bold"
        >
          {payload.sector}
        </text>
      </g>
    );
  };

  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        Opportunity Matrix: โอกาส vs ความยาก
      </h3>
      <p className="text-muted text-sm mb-4">
        มุมบนซ้าย = โอกาสสูง เข้าง่าย (Sweet spot สำหรับ startup)
      </p>
      <ResponsiveContainer width="100%" height={450}>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="difficulty"
            name="Entry Difficulty"
            domain={[1, 11]}
            tick={{ fontSize: 11, fill: "#888" }}
            label={{
              value: "ความยากในการเข้าตลาด →",
              position: "bottom",
              fill: "#888",
              fontSize: 12,
            }}
          />
          <YAxis
            type="number"
            dataKey="opportunity"
            name="Opportunity"
            domain={[4, 10]}
            tick={{ fontSize: 11, fill: "#888" }}
            label={{
              value: "คะแนนโอกาส →",
              angle: -90,
              position: "insideLeft",
              fill: "#888",
              fontSize: 12,
            }}
          />
          <ZAxis type="number" dataKey="z" range={[200, 2000]} />
          <Tooltip
            contentStyle={tooltipStyle}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            content={({ payload }: any) => {
              if (!payload?.[0]) return null;
              const d = payload[0].payload;
              return (
                <div style={{ ...tooltipStyle, padding: "8px 12px" }}>
                  <div style={{ fontWeight: "bold", marginBottom: 4 }}>{d.sector}</div>
                  <div>โอกาส: {d.opportunity}/10</div>
                  <div>ความยาก: {d.difficulty}/10</div>
                  <div>ขนาดตลาด: ${d.size >= 1000 ? `${(d.size / 1000).toFixed(1)}B` : `${d.size}M`}</div>
                </div>
              );
            }}
          />
          <Legend content={() => (
            <div className="flex items-center gap-4 justify-center mt-2 text-xs text-muted">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-green" />
                <span>โอกาสสูง (Score ≥8)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span>โอกาสปานกลาง</span>
              </div>
              <span className="text-muted/60">ขนาดวงกลม = ขนาดตลาด</span>
            </div>
          )} />
          <Scatter data={data} shape={<CustomDot />} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
