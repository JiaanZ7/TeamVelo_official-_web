"use client";

import Image from "next/image";
import { useState, type CSSProperties, type KeyboardEvent } from "react";
import { motion } from "framer-motion";

const liquidHighlights = [
  {
    eyebrow: "Product",
    title: "A real device surface, mounted where reminders matter.",
    detail: "Screen, hooks, sensor, and room context are visible in one physical scene.",
    src: "/media/photos/velo-installed-bag-wide.jpg",
    alt: "Velo installed on a whiteboard with a bag and keys hanging below.",
  },
  {
    eyebrow: "Release",
    title: "The desktop tool turns firmware into signed A/B releases.",
    detail: "Slot A, slot B, manifest signing, upload, and endpoint verification run as one flow.",
    src: "/media/photos/velo-release-tool-upload-v1026.png",
    alt: "Velo release tool showing uploaded V1.0.26 artifacts.",
  },
  {
    eyebrow: "Security",
    title: "A signed OTA survives reboot and hardware reset.",
    detail: "The proof path shows check, install, reset persistence, and confirmed firmware state.",
    src: "/media/photos/velo-poster-v1026-success-ccw.jpg",
    alt: "Poster frame for Velo V1.0.26 successful OTA validation.",
  },
  {
    eyebrow: "Recovery",
    title: "Bad packages and fallback are shown as product behavior.",
    detail: "Negative releases are rejected or recovered from, not hidden as lab-only failures.",
    src: "/media/photos/velo-poster-v1027-bad-package-ccw.jpg",
    alt: "Poster frame for Velo V1.0.27 bad package rejection.",
  },
  {
    eyebrow: "Cloud",
    title: "Node-RED routes weather, reminders, OTA, and rollback state.",
    detail: "The cloud flow is part of the deliverable, not an invisible backend assumption.",
    src: "/media/photos/velo-node-red-flow-preview.png",
    alt: "Node-RED flow preview for the Velo product backend.",
  },
];

const CARD_CENTER_SECONDS = 1.72;
const IMAGE_ZOOM_SECONDS = 4;

export function LiquidHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalHighlights = liquidHighlights.length;
  const progressTrackWidth = 152;
  const progressThumbWidth = 30;
  const progressX =
    totalHighlights > 1
      ? (activeIndex / (totalHighlights - 1)) * progressTrackWidth - progressThumbWidth / 2
      : -progressThumbWidth / 2;
  const getProgressLeft = (index: number) =>
    `${totalHighlights > 1 ? (index / (totalHighlights - 1)) * 100 : 0}%`;

  const getRelativeOffset = (index: number) => {
    let offset = index - activeIndex;

    if (offset > totalHighlights / 2) {
      offset -= totalHighlights;
    }

    if (offset < -totalHighlights / 2) {
      offset += totalHighlights;
    }

    return offset;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <section className="liquid-highlights" id="proof-highlights">
      <div className="container liquid-highlights-header">
        <h2 className="headline small">Get the proof highlights.</h2>
      </div>

      <div className="liquid-window" aria-label="Proof highlight carousel">
        <div className="liquid-track">
          {liquidHighlights.map((highlight, index) => {
            const isActive = index === activeIndex;
            const offset = getRelativeOffset(index);
            const distance = Math.abs(offset);
            const travel =
              offset === 0
                ? "-50%"
                : `calc(-50% ${offset > 0 ? "+" : "-"} min(${Math.abs(offset) * 72}vw, ${
                    Math.abs(offset) * 1140
                  }px))`;
            const cardStyle = {
              "--card-opacity": distance > 1 ? 0.16 : isActive ? 1 : 0.46,
              "--card-scale": isActive ? 1 : distance > 1 ? 0.9 : 0.92,
              "--card-x": travel,
              zIndex: 10 - distance,
            } as CSSProperties;

            return (
              <motion.article
                aria-label={`Show ${highlight.eyebrow} proof highlight`}
                aria-pressed={isActive}
                className={`liquid-card ${isActive ? "active" : ""}`}
                key={highlight.title}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                role="button"
                tabIndex={0}
                style={cardStyle}
              >
                <motion.div
                  className="liquid-image-zoom"
                  animate={{ scale: isActive ? [1.006, 1.075] : 1.006 }}
                  initial={false}
                  transition={{
                    delay: isActive ? CARD_CENTER_SECONDS : 0,
                    duration: isActive ? IMAGE_ZOOM_SECONDS : 0.24,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Image
                    className="liquid-card-image"
                    src={highlight.src}
                    alt={highlight.alt}
                    fill
                    sizes="76vw"
                    priority={index === 0}
                  />
                </motion.div>
                <span className="liquid-card-glow" />
                <div className="liquid-card-copy">
                  <p>{highlight.eyebrow}</p>
                  <h3>{highlight.title}</h3>
                  <span>{highlight.detail}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="liquid-progress" aria-label="Choose proof highlight">
        <div className="liquid-progress-track">
          <motion.span
            animate={{ x: progressX }}
            className="liquid-progress-fill"
            initial={false}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="liquid-progress-dots">
            {liquidHighlights.map((highlight, index) => {
              return (
                <button
                  aria-label={`Show ${highlight.eyebrow} proof highlight`}
                  aria-pressed={index === activeIndex}
                  className={index === activeIndex ? "active" : ""}
                  key={highlight.title}
                  onClick={() => setActiveIndex(index)}
                  style={{ left: getProgressLeft(index) }}
                  type="button"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
