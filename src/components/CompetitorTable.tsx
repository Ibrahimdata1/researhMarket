"use client";

import { sectors } from "@/lib/data";

export default function CompetitorTable() {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Sector</th>
              <th>ผู้เล่นหลัก</th>
              <th>Market Share</th>
              <th>Revenue</th>
              <th>จุดอ่อนหลัก</th>
              <th>โอกาสเจาะ</th>
            </tr>
          </thead>
          <tbody>
            {sectors.map((sector) =>
              sector.dominantPlayers.slice(0, 2).map((player, idx) => (
                <tr key={`${sector.id}-${player.name}`}>
                  {idx === 0 && (
                    <td rowSpan={Math.min(sector.dominantPlayers.length, 2)} className="font-semibold align-top">
                      <span className="mr-1">{sector.icon}</span>
                      {sector.name}
                    </td>
                  )}
                  <td className="font-medium">{player.name}</td>
                  <td>
                    <span className="font-mono text-accent font-bold">{player.marketShare}%</span>
                  </td>
                  <td className="text-xs">{player.revenue.split("(")[0].trim()}</td>
                  <td className="text-xs text-red max-w-[200px]">
                    {player.weaknesses[0]}
                  </td>
                  {idx === 0 && (
                    <td rowSpan={Math.min(sector.dominantPlayers.length, 2)} className="text-xs text-green max-w-[200px] align-top">
                      {sector.keyInsight.split("—")[0]}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="text-muted text-[10px] italic">
        * ข้อมูลจากรายงานประจำปี, Momentum Works, Statista, GetLatka, Bangkok Post, Nation Thailand — อัพเดตล่าสุด มี.ค. 2026
      </p>
    </div>
  );
}
