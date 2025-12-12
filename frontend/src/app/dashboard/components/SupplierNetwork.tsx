"use client";

import { useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import type { ForceGraphMethods, NodeObject, LinkObject } from "react-force-graph-2d";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false });

interface MyNode extends NodeObject {
  id: string;
  risk: number;
  group: number;
}

interface MyLink extends LinkObject {
  source: string;
  target: string;
}

const baseNodes: MyNode[] = [
  { id: "Treasury", group: 1, risk: 30 },
  { id: "Mara Supplies", group: 2, risk: 75 },
  { id: "Nyota Engineering", group: 2, risk: 82 },
  { id: "CoastTech", group: 2, risk: 58 },
  { id: "Auditor", group: 3, risk: 20 }
];

const baseLinks: MyLink[] = [
  { source: "Treasury", target: "Mara Supplies" },
  { source: "Treasury", target: "Nyota Engineering" },
  { source: "Nyota Engineering", target: "CoastTech" }
];

const reasoning: Record<string, string[]> = {
  Treasury: ["Root payer institution", "Possible conflict of interest chain"],
  "Mara Supplies": ["Repeated invoices on same PO", "Large escalation vs historical median"],
  "Nyota Engineering": ["Suspicious routing via CoastTech", "Timing overlaps Treasury"],
  CoastTech: ["IP overlap with Nyota", "Shared registration address"],
  Auditor: ["Low-risk compliance partner"]
};

export default function SupplierNetwork() {
  const fgRef = useRef<ForceGraphMethods<any, any> |undefined>(undefined);
  const [hoverNode, setHoverNode] = useState<MyNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<MyNode | null>(null);

  const graphData = useMemo(() => ({ nodes: baseNodes, links: baseLinks }), []);

  const isConnected = (a: MyNode, b: MyNode) =>
    baseLinks.some(
      (l) =>
        (l.source === a.id && l.target === b.id) ||
        (l.source === b.id && l.target === a.id)
    );

  return (
    <section className="
      bg-white/5 backdrop-blur-xl 
      border border-white/10 
      rounded-2xl p-4 
      w-39%
      min-h-[340px]
      shadow-[0_0_25px_rgba(0,0,0,0.25)]
      hover:shadow-[0_0_35px_rgba(0,0,0,0.45)]
      transition-all duration-300
    ">
      <h3 className="text-lg font-semibold mb-3 text-white/90 tracking-wide">
        Supplier Network
      </h3>

      <div className="flex flex-row gap-3 w-full h-[300px] min-w-0">

        {/* GRAPH */}
        <div className="
          flex-1 
          bg-black/25 
          rounded-xl 
          border border-white/10 
          overflow-hidden
          shadow-inner
        ">
          <ForceGraph2D
            ref={fgRef}
            graphData={graphData}
            nodeRelSize={6}
            enableNodeDrag
            linkDirectionalParticles={2}
            linkDirectionalParticleSpeed={0.004}
            cooldownTicks={18}
            onNodeClick={(node) => setSelectedNode(node as MyNode)}
            onNodeHover={(node) => setHoverNode((node as MyNode) || null)}
            nodeCanvasObject={(node, ctx, gs) => {
              const n = node as MyNode;
              const fontSize = 11 / gs;
              const label = n.id;

              let color = "#22c55e";
              if (n.risk >= 70) color = "#ef4444";
              else if (n.risk >= 40) color = "#eab308";

              if (hoverNode && (hoverNode.id === n.id || isConnected(hoverNode, n))) {
                color = "#38bdf8";
              }

              // Glow effect
              ctx.shadowBlur = 12;
              ctx.shadowColor = color + "aa";

              ctx.beginPath();
              ctx.arc(n.x!, n.y!, 7, 0, Math.PI * 2);
              ctx.fillStyle = color;
              ctx.fill();

              ctx.shadowBlur = 0;

              ctx.font = `${fontSize}px Inter`;
              ctx.fillStyle = "white";
              ctx.textAlign = "center";
              ctx.textBaseline = "top";
              ctx.fillText(label, n.x!, n.y! + 9);
            }}
          />
        </div>

        {/* SIDEBAR */}
        {selectedNode && (
          <div className="
            w-45 
            bg-black/30 
            border border-white/10 
            rounded-xl 
            p-3 
            flex flex-col gap-2 
            shadow-lg
          ">
            <div className="text-white text-base font-semibold">
              {selectedNode.id}
            </div>

            <div className="text-sm text-gray-300">
              Risk Score:
              <span
                className={
                  selectedNode.risk >= 70
                    ? "text-red-400"
                    : selectedNode.risk >= 40
                    ? "text-yellow-400"
                    : "text-green-400"
                }
              >
                {" "}{selectedNode.risk}
              </span>
            </div>

            <div className="text-sm mt-2 text-gray-200 font-medium tracking-wide">
              Explainable AI
            </div>

            <ul className="text-xs text-gray-300 list-disc pl-4 space-y-1">
              {reasoning[selectedNode.id]?.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
