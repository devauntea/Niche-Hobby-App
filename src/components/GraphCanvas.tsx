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

type GraphCanvasProps = {
  onSelectNode: (id: string) => void;
};

export default function GraphCanvas({ onSelectNode }: GraphCanvasProps) {
  const nodes: Node[] = useMemo(
    () => [
      {
        id: "fitness",
        position: { x: 250, y: 80 },
        data: { label: "Fitness" },
        style: {
          background: "#7c3aed",
          color: "white",
          border: "1px solid #a78bfa",
          borderRadius: "16px",
          padding: 12,
          width: 170,
          textAlign: "center",
        },
      },
      {
        id: "rock-climbing",
        position: { x: 80, y: 240 },
        data: { label: "Rock Climbing" },
        style: {
          background: "#18181b",
          color: "white",
          border: "1px solid #3f3f46",
          borderRadius: "16px",
          padding: 12,
          width: 170,
          textAlign: "center",
        },
      },
      {
        id: "zumba",
        position: { x: 260, y: 280 },
        data: { label: "Zumba" },
        style: {
          background: "#18181b",
          color: "white",
          border: "1px solid #3f3f46",
          borderRadius: "16px",
          padding: 12,
          width: 170,
          textAlign: "center",
        },
      },
      {
        id: "cycling",
        position: { x: 460, y: 240 },
        data: { label: "Cycling" },
        style: {
          background: "#18181b",
          color: "white",
          border: "1px solid #3f3f46",
          borderRadius: "16px",
          padding: 12,
          width: 170,
          textAlign: "center",
        },
      },
    ],
    [],
  );

  const edges: Edge[] = useMemo(
    () => [
      {
        id: "e1",
        source: "fitness",
        target: "rock-climbing",
        animated: true,
      },
      {
        id: "e2",
        source: "fitness",
        target: "zumba",
        animated: true,
      },
      {
        id: "e3",
        source: "fitness",
        target: "cycling",
        animated: true,
      },
    ],
    [],
  );

  const handleNodeClick: NodeMouseHandler = (_, node) => {
    onSelectNode(node.id);
  };

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
