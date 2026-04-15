"use client";

import { useState } from "react";
import type { UseCase } from "@/lib/use-cases";

const nodeColors = {
  problem: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", dot: "bg-red-500" },
  data: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", dot: "bg-blue-500" },
  ai: { bg: "bg-orange/10", border: "border-orange/30", text: "text-orange", dot: "bg-orange" },
  result: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-500" }
} as const;

type NodeKey = keyof typeof nodeColors;

function FlowNode({
  nodeKey,
  label,
  detail,
  isActive,
  onClick
}: {
  nodeKey: NodeKey;
  label: string;
  detail: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const colors = nodeColors[nodeKey];

  return (
    <button
      onClick={onClick}
      className={`group relative w-full cursor-pointer rounded-xl border p-5 text-left transition-all duration-300 ${
        isActive
          ? `${colors.bg} ${colors.border} scale-[1.02]`
          : "border-border bg-bg-card hover:border-border-hover hover:bg-bg-card-hover"
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${isActive ? colors.dot : "bg-text-muted/30"}`} />
        <span className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${isActive ? colors.text : "text-text-muted"}`}>
          {label}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-6 text-text-secondary">{detail}</p>
      </div>
    </button>
  );
}

function ConnectorArrow({ isActive }: { isActive: boolean }) {
  return (
    <div className="hidden md:flex items-center justify-center py-0 px-1 shrink-0">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`transition-colors duration-300 ${isActive ? "text-orange" : "text-text-muted/20"}`}
      >
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ConnectorArrowVertical({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex md:hidden items-center justify-center py-1">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`transition-colors duration-300 ${isActive ? "text-orange" : "text-text-muted/20"}`}
      >
        <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function UseCaseFlow({ useCase }: { useCase: UseCase }) {
  const [activeNode, setActiveNode] = useState<NodeKey>("problem");

  const nodes: { key: NodeKey; label: string; detail: string }[] = [
    { key: "problem", ...useCase.flow.problem },
    { key: "data", ...useCase.flow.data },
    { key: "ai", ...useCase.flow.ai },
    { key: "result", ...useCase.flow.result }
  ];

  const activeIndex = nodes.findIndex((n) => n.key === activeNode);

  return (
    <div>
      {/* Flow – Desktop: horizontal, Mobile: vertical */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-start gap-0">
        {nodes.map((node, i) => (
          <div key={node.key} className="contents">
            <FlowNode
              nodeKey={node.key}
              label={node.label}
              detail={node.detail}
              isActive={activeNode === node.key}
              onClick={() => setActiveNode(node.key)}
            />
            {i < nodes.length - 1 && <ConnectorArrow isActive={i < activeIndex} />}
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex flex-col md:hidden">
        {nodes.map((node, i) => (
          <div key={node.key}>
            <FlowNode
              nodeKey={node.key}
              label={node.label}
              detail={node.detail}
              isActive={activeNode === node.key}
              onClick={() => setActiveNode(node.key)}
            />
            {i < nodes.length - 1 && <ConnectorArrowVertical isActive={i < activeIndex} />}
          </div>
        ))}
      </div>

      {/* Meta: Systems + ROI */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-bg-card p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
            Involvierte Systeme
          </p>
          <div className="flex flex-wrap gap-2">
            {useCase.systems.map((sys) => (
              <span
                key={sys}
                className="rounded-md border border-border bg-surface px-3 py-1 text-xs text-text-secondary"
              >
                {sys}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
            Ergebnis
          </p>
          <p className="text-sm leading-6 text-text-secondary">{useCase.roi}</p>
        </div>
      </div>
    </div>
  );
}
