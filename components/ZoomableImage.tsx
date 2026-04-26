"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

type ZoomableImageProps = {
  src: string;
  alt: string;
  title: string;
  label?: string;
  sizes: string;
  imageClassName: string;
  buttonClassName?: string;
  priority?: boolean;
};

export function ZoomableImage({
  src,
  alt,
  title,
  label,
  sizes,
  imageClassName,
  buttonClassName = "zoomable-image-button",
  priority = false,
}: ZoomableImageProps) {
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
        aria-label={`Open ${title}`}
        onClick={openLightbox}
      >
        <Image
          className={imageClassName}
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
        />
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
          <button className="media-lightbox-close" type="button" onClick={closeLightbox}>
            Close
          </button>
          <div className="media-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="media-lightbox-frame image">
              <Image className="lightbox-image" src={src} alt={alt} width={1800} height={1200} />
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
