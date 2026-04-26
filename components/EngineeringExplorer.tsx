"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { engineeringNodes, engineeringPaths } from "@/data/siteContent";

export function EngineeringExplorer() {
  const [selectedPathId, setSelectedPathId] = useState(engineeringPaths[0].id);
  const [activeStep, setActiveStep] = useState(0);
  const selectedPath = engineeringPaths.find((path) => path.id === selectedPathId) ?? engineeringPaths[0];
  const activeNodeOrder = useMemo(
    () => new Map(selectedPath.nodeIds.map((nodeId, index) => [nodeId, index])),
    [selectedPath],
  );
  const nodeById = useMemo(() => new Map(engineeringNodes.map((node) => [node.id, node])), []);
  const detailNode =
    engineeringNodes.find((node) => node.id === selectedPath.nodeIds[selectedPath.nodeIds.length - 1]) ??
    engineeringNodes[0];

  const selectPath = (pathId: string) => {
    setSelectedPathId(pathId);
    setActiveStep(0);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % selectedPath.nodeIds.length);
    }, 1180);

    return () => window.clearInterval(timer);
  }, [selectedPath]);

  return (
    <div className="explorer">
      <div className="path-tabs" role="tablist" aria-label="Engineering guided paths">
        {engineeringPaths.map((path) => (
          <button
            className={`tab-button ${path.id === selectedPathId ? "active" : ""}`}
            key={path.id}
            onClick={() => selectPath(path.id)}
            type="button"
          >
            {path.label}
          </button>
        ))}
      </div>

      <div className="split-page">
        <motion.div className="system-grid" data-path={selectedPath.id} layout>
          {engineeringNodes.map((node) => {
            const routeOrder = activeNodeOrder.get(node.id);
            const onRoute = routeOrder !== undefined;
            const isCurrent = routeOrder === activeStep;
            const isPast = onRoute && routeOrder < activeStep;

            return (
              <motion.div
                className={`system-node ${onRoute ? "on-route" : ""} ${isPast ? "past-step" : ""} ${
                  isCurrent ? "current-step" : ""
                }`}
                key={node.id}
                layout
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="node-topline">
                  {routeOrder !== undefined ? <span className="node-order">0{routeOrder + 1}</span> : <span />}
                  {isCurrent ? <span className="node-live">live</span> : null}
                </div>
                <strong>{node.title}</strong>
                <span className="node-layer">{node.layer}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.aside
          className="detail-panel"
          key={selectedPath.id}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="eyebrow dark">{selectedPath.label}</p>
          <h2>{selectedPath.headline}</h2>
          <p className="dark-copy">{selectedPath.summary}</p>
          <div className="route-readout" aria-label="Selected route sequence">
            {selectedPath.nodeIds.map((nodeId, index) => {
              const node = nodeById.get(nodeId);

              return node ? (
                <motion.span
                  className={`route-chip ${index === activeStep ? "current-step" : ""}`}
                  initial={{ y: 8 }}
                  animate={{ y: 0 }}
                  key={`${selectedPath.id}-${nodeId}`}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <small>0{index + 1}</small>
                  {node.title}
                </motion.span>
              ) : null;
            })}
          </div>
          <h3>{detailNode.title}</h3>
          <p className="dark-copy">{detailNode.summary}</p>
          <div className="file-list">
            {detailNode.files.map((file) => (
              <span className="file-pill" key={file}>
                {file}
              </span>
            ))}
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
