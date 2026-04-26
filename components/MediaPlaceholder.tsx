"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";

type MediaPlaceholderProps = {
  id?: string;
  label: string;
  title: string;
  src?: string;
  alt?: string;
  tone?: "dark" | "light";
  minHeight?: number;
  priority?: boolean;
};

export function MediaPlaceholder({
  id,
  label,
  title,
  src,
  alt,
  tone = "dark",
  minHeight,
  priority = false,
}: MediaPlaceholderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openLightbox = () => {
    if (src) {
      setIsClosing(false);
      setIsOpen(true);
    }
  };

  const closeLightbox = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 320);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox();
    }
  };

  return (
    <>
      <div
        id={id}
        className={`media-placeholder ${tone === "light" ? "light" : ""} ${src ? "has-media" : ""}`}
        style={minHeight ? { minHeight } : undefined}
        role={src ? "button" : undefined}
        tabIndex={src ? 0 : undefined}
        aria-label={src ? `Open ${title}` : undefined}
        onClick={openLightbox}
        onKeyDown={src ? handleKeyDown : undefined}
      >
        {src ? (
          <Image
            className="media-image"
            src={src}
            alt={alt ?? title}
            fill
            priority={priority}
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        ) : null}
        <div className="placeholder-content">
          <div>
            <p className="placeholder-label">{label}</p>
            <p className="placeholder-title">{title}</p>
          </div>
        </div>
      </div>

      {src && isOpen
        ? createPortal(
        <div
          className={`media-lightbox ${isClosing ? "closing" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={closeLightbox}
        >
          <button className="media-lightbox-close" type="button" onClick={closeLightbox}>
            Close
          </button>
          <div className="media-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="media-lightbox-frame image">
              <Image
                className="lightbox-image"
                src={src}
                alt={alt ?? title}
                width={1800}
                height={1200}
              />
            </div>
            <div className="media-lightbox-caption">
              <p className="eyebrow dark">{label}</p>
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
