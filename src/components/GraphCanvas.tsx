"use client";

import { useMemo } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { HobbyNode, HobbyEdge } from "@/types/graph";

type Props = {
  nodes: HobbyNode[];
  edges: HobbyEdge[];
  selectedId: string | null;
  onSelectNode: (id: string) => void;
};

export default function GraphCanvas({
  nodes: hobbyNodes,
  edges: hobbyEdges,
  selectedId,
  onSelectNode,
}: Props) {
  const flowNodes: Node[] = useMemo(
    () =>
      hobbyNodes.map((n) => ({
        id: n.id,
        position: n.position,
        data: { label: n.label },
        style: {
          background: n.id === selectedId ? (n.color ?? "#7F77DD") : "#FFFFFF",
          color: n.id === selectedId ? "#FFFFFF" : "#1A1916",
          border: `2px solid ${n.id === selectedId ? (n.color ?? "#7F77DD") : "#E8E4DA"}`,
          borderRadius: n.type === "interest" ? "20px" : "14px",
          padding: n.type === "interest" ? "10px 16px" : "8px 14px",
          fontWeight: n.type === "interest" ? "600" : "400",
          fontSize: n.type === "interest" ? "14px" : "13px",
          boxShadow:
            n.id === selectedId
              ? `0 0 0 4px ${n.color ?? "#7F77DD"}28, 0 4px 16px ${n.color ?? "#7F77DD"}30`
              : "0 1px 4px rgba(0,0,0,0.06)",
          transition: "all 0.2s ease",
          minWidth: 120,
          textAlign: "center" as const,
          cursor: "pointer",
        },
      })),
    [hobbyNodes, selectedId],
  );

  const flowEdges: Edge[] = useMemo(
    () =>
      hobbyEdges.map((e) => {
        const sourceNode = hobbyNodes.find((n) => n.id === e.source);
        return {
          id: e.id,
          source: e.source,
          target: e.target,
          animated: false,
          style: {
            stroke: sourceNode?.color ?? "#D3D0C8",
            strokeWidth: 1.5,
            opacity: 0.45,
          },
        };
      }),
    [hobbyEdges, hobbyNodes],
  );

  const handleNodeClick: NodeMouseHandler = (_, node) => onSelectNode(node.id);

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-2xl border border-[#E8E4DA] bg-[#FDFCF8]">
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#E8E4DA" gap={24} size={1} />
        <Controls
          showInteractive={false}
          style={{
            background: "white",
            border: "1px solid #E8E4DA",
            borderRadius: 12,
          }}
        />
      </ReactFlow>
    </div>
  );
}
