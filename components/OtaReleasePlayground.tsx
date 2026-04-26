"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, CircleSlash, RotateCcw, ShieldAlert } from "lucide-react";
import { otaScenarios } from "@/data/siteContent";

function iconForState(state: "pass" | "reject" | "skip" | "recover") {
  if (state === "pass") return <Check size={16} />;
  if (state === "reject") return <ShieldAlert size={16} />;
  if (state === "recover") return <RotateCcw size={16} />;
  return <CircleSlash size={16} />;
}

export function OtaReleasePlayground() {
  const [scenarioId, setScenarioId] = useState(otaScenarios[0].id);
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");
  const scenario = otaScenarios.find((item) => item.id === scenarioId) ?? otaScenarios[0];
  const targetSlot = activeSlot === "A" ? "B" : "A";
  const releaseDirection = activeSlot === "A" ? "forward" : "backward";
  const transferStart = activeSlot === "A" ? "0%" : "100%";
  const transferEnd =
    scenario.id === "bad-manifest" ? (activeSlot === "A" ? "24%" : "76%") : activeSlot === "A" ? "100%" : "0%";
  const slotDescription = useMemo(
    () => `Running slot ${activeSlot}; release package targets inactive slot ${targetSlot}.`,
    [activeSlot, targetSlot],
  );

  return (
    <div className="playground" data-active-slot={activeSlot} data-scenario={scenario.id}>
      <div className="scenario-tabs" role="tablist" aria-label="OTA scenarios">
        {otaScenarios.map((item) => (
          <button
            className={`tab-button ${item.id === scenarioId ? "active" : ""}`}
            key={item.id}
            onClick={() => setScenarioId(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="slot-tabs" aria-label="Active slot selector">
        {(["A", "B"] as const).map((slot) => (
          <button
            className={`tab-button ${activeSlot === slot ? "active" : ""}`}
            key={slot}
            onClick={() => setActiveSlot(slot)}
            type="button"
          >
            Active Slot {slot}
          </button>
        ))}
      </div>

      <div className="ota-playground-grid">
        <motion.div
          className="dark-panel panel"
          key={`${scenario.id}-${activeSlot}`}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="eyebrow dark">{scenario.label}</p>
          <h2>{scenario.headline}</h2>
          <p className="dark-copy">{scenario.description}</p>
          <div className="slot-stage" data-direction={releaseDirection} aria-label={slotDescription}>
            <div className="slot-box active-slot">
              <span className="slot-status">Running image</span>
              <div className="slot-letter">{activeSlot}</div>
              <p>confirmed firmware</p>
            </div>
            <div className="slot-transfer" aria-hidden="true">
              <span className="slot-transfer-line" />
              <span className="slot-transfer-glow" />
              <motion.span
                className="release-packet"
                key={`${scenario.id}-${activeSlot}-packet`}
                initial={{ left: transferStart }}
                animate={{ left: transferEnd }}
                transition={{
                  duration: scenario.id === "bad-manifest" ? 0.95 : 1.65,
                  ease: [0.16, 1, 0.3, 1],
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: scenario.id === "bad-manifest" ? 0.55 : 0.25,
                }}
              />
            </div>
            <div className="slot-box target">
              <span className="slot-status">Inactive target</span>
              <div className="slot-letter">{targetSlot}</div>
              <p>download target</p>
            </div>
          </div>
        </motion.div>

        <div className="gate-list">
          {scenario.gates.map((gate, index) => (
            <motion.div
              className={`gate ${gate.state}`}
              key={`${scenario.id}-${gate.label}`}
              initial={{ opacity: 0, x: 36, y: 14 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.54, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="gate-scan" aria-hidden="true" />
              <span className="gate-icon">{iconForState(gate.state)}</span>
              <div>
                <h4>{gate.label}</h4>
                <p>{gate.detail}</p>
              </div>
              <span className="status-pill">{gate.state}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={`panel outcome-panel ${scenario.id}`}>
        <div className="outcome-orb" aria-hidden="true" />
        <div>
          <p className="eyebrow">Outcome</p>
          <h2>{scenario.finalState}</h2>
          <p>{slotDescription}</p>
        </div>
        <div className="outcome-readout" aria-hidden="true">
          <span>active {activeSlot}</span>
          <strong>{scenario.id === "fallback" ? "recover" : scenario.id.includes("bad") ? "reject" : "confirm"}</strong>
          <span>target {targetSlot}</span>
        </div>
      </div>
    </div>
  );
}
