"use client";

import { useMemo, useCallback } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  type Node,
  type Edge,
  type NodeMouseHandler,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { HobbyNode, HobbyEdge } from "@/types/graph";

type Props = {
  nodes: HobbyNode[];
  edges: HobbyEdge[];
  selectedId: string | null;
  onSelectNode: (id: string) => void;
};

function makeFlowNode(n: HobbyNode, selectedId: string | null): Node {
  const isSelected = n.id === selectedId;
  const isInterest = n.type === "interest";
  const color = n.color ?? "#7F77DD";

  return {
    id: n.id,
    position: n.position,
    data: { label: n.label },
    style: {
      background: isSelected ? color : isInterest ? "#FFFFFF" : "#FDFCF8",
      color: isSelected ? "#FFFFFF" : "#1A1916",
      border: isSelected
        ? `2px solid ${color}`
        : isInterest
          ? `2px solid ${color}`
          : `1.5px solid ${color}40`,
      borderRadius: isInterest ? "24px" : "12px",
      padding: isInterest ? "10px 20px" : "7px 14px",
      fontWeight: isInterest ? "600" : "400",
      fontSize: isInterest ? "14px" : "12px",
      letterSpacing: isInterest ? "-0.01em" : "0",
      boxShadow: isSelected
        ? `0 0 0 4px ${color}28, 0 6px 20px ${color}35`
        : isInterest
          ? `0 2px 8px ${color}22`
          : "0 1px 3px rgba(0,0,0,0.05)",
      transition: "all 0.18s ease",
      minWidth: isInterest ? 110 : 100,
      maxWidth: isInterest ? 140 : 130,
      textAlign: "center" as const,
      cursor: "pointer",
      whiteSpace: "nowrap" as const,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  };
}

export default function GraphCanvas({
  nodes: hobbyNodes,
  edges: hobbyEdges,
  selectedId,
  onSelectNode,
}: Props) {
  const flowNodes: Node[] = useMemo(
    () => hobbyNodes.map((n) => makeFlowNode(n, selectedId)),
    [hobbyNodes, selectedId],
  );

  const flowEdges: Edge[] = useMemo(
    () =>
      hobbyEdges.map((e) => {
        const src = hobbyNodes.find((n) => n.id === e.source);
        return {
          id: e.id,
          source: e.source,
          target: e.target,
          animated: false,
          style: {
            stroke: src?.color ?? "#D3D0C8",
            strokeWidth: 1.5,
            opacity: 0.4,
          },
        };
      }),
    [hobbyEdges, hobbyNodes],
  );

  const handleNodeClick: NodeMouseHandler = useCallback(
    (_, node) => onSelectNode(node.id),
    [onSelectNode],
  );

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-2xl border border-[#E8E4DA] bg-[#FDFCF8]">
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.25 }}
        minZoom={0.3}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#E8E4DA" gap={28} size={1} />
        <Controls
          showInteractive={false}
          style={{
            background: "white",
            border: "1px solid #E8E4DA",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        />
      </ReactFlow>
    </div>
  );
}
