"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

type ZoomableVideoProps = {
  src: string;
  poster?: string;
  title: string;
  label?: string;
  buttonClassName?: string;
};

export function ZoomableVideo({
  src,
  poster,
  title,
  label,
  buttonClassName = "zoomable-video-button",
}: ZoomableVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
      <button
        className={buttonClassName}
        type="button"
        aria-label={`Play ${title}`}
        onClick={openLightbox}
      >
        {poster ? (
          <Image
            className="evidence-video-poster"
            src={poster}
            alt=""
            fill
            sizes="(max-width: 960px) 50vw, 33vw"
          />
        ) : (
          <video className="evidence-video-preview" muted playsInline preload="metadata">
            <source src={src} type="video/mp4" />
          </video>
        )}
        <span className="evidence-play-icon" aria-hidden="true">
          <Play size={20} fill="currentColor" />
        </span>
      </button>

      {isOpen
        ? createPortal(
            <div
              className={`media-lightbox ${isClosing ? "closing" : ""}`}
              role="dialog"
              aria-modal="true"
              aria-label={title}
              onClick={closeLightbox}
            >
              <button
                className="media-lightbox-close"
                type="button"
                onClick={closeLightbox}
              >
                Close
              </button>
              <div className="media-lightbox-panel" onClick={(event) => event.stopPropagation()}>
                <div className="media-lightbox-frame">
                  <div className="video-shell">
                    <video
                      className="proof-video"
                      controls
                      muted
                      playsInline
                      poster={poster}
                      preload="metadata"
                      autoPlay
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="media-lightbox-caption">
                  {label ? <p className="eyebrow dark">{label}</p> : null}
                  <h3>{title}</h3>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
