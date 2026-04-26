"use client";

import Image from "next/image";
import { Camera, Play } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import type { MediaProof } from "@/data/siteContent";

type MediaProofCardProps = {
  item: MediaProof;
};

export function MediaProofCard({ item }: MediaProofCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isVideo = item.type === "video";
  const shouldMute = !item.hasAudio;

  const openLightbox = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 320);
  };

  return (
    <>
      <article className="media-proof-card" id={item.id}>
        <div className={`media-proof-frame ${isVideo ? "video" : "image"}`}>
          {isVideo ? (
            <button
              className="video-poster-button"
              type="button"
              onClick={openLightbox}
              aria-label={`Play ${item.title}`}
            >
              <span className="video-shell">
                {item.poster ? (
                  <Image
                    className="proof-poster"
                    src={item.poster}
                    alt=""
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    priority={false}
                  />
                ) : (
                  <video className="proof-video" muted playsInline preload="metadata">
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </span>
              <span className="poster-play-icon" aria-hidden="true">
                <Play size={22} fill="currentColor" />
              </span>
            </button>
          ) : (
            <button
              className="image-poster-button"
              type="button"
              onClick={openLightbox}
              aria-label={`Open ${item.title}`}
            >
              <Image
                className="proof-image"
                src={item.src}
                alt={item.alt ?? item.title}
                fill
                loading="eager"
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </button>
          )}
          <span className="media-kind">
            {isVideo ? <Play size={14} /> : <Camera size={14} />}
            {isVideo ? "Video" : "Image"}
          </span>
        </div>
        <div className="media-proof-body">
          <p className="eyebrow">{item.label}</p>
          <h3>{item.title}</h3>
          <strong>{item.result}</strong>
          <p>{item.detail}</p>
        </div>
      </article>

      {isOpen
        ? createPortal(
        <div
          className={`media-lightbox ${isClosing ? "closing" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={closeLightbox}
        >
          <button className="media-lightbox-close" type="button" onClick={closeLightbox}>
            Close
          </button>
          <div className="media-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className={`media-lightbox-frame ${isVideo ? "" : "image"}`}>
              {isVideo ? (
                <div className="video-shell">
                  <video
                    className="proof-video"
                    controls
                    muted={shouldMute}
                    playsInline
                    poster={item.poster}
                    preload="metadata"
                    autoPlay={shouldMute}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <Image
                  className="lightbox-image"
                  src={item.src}
                  alt={item.alt ?? item.title}
                  width={1800}
                  height={1200}
                />
              )}
            </div>
            <div className="media-lightbox-caption">
              <p className="eyebrow dark">{item.label}</p>
              <h3>{item.title}</h3>
            </div>
          </div>
        </div>,
          document.body,
        )
        : null}
    </>
  );
}
