"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";

const heroSlides = [
  {
    src: "/media/photos/velo-installed-whiteboard-marked.jpg",
    alt: "Velo installed on a whiteboard with simple labels marking the physical reminder system.",
    label: "Installed prototype",
    title: "Whiteboard-mounted Velo with the product surface visible.",
  },
  {
    src: "/media/photos/velo-installed-bag-wide.jpg",
    alt: "Velo installed on a whiteboard with keys and a small bag hanging from the hooks.",
    label: "Real use context",
    title: "A daily carry reminder with keys, bag, screen, and hook LEDs in one frame.",
  },
];

export function HeroPhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const activeSlide = heroSlides[activeIndex];

  const goTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + heroSlides.length) % heroSlides.length);
  };

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

  const handleFrameKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox();
    }
  };

  return (
    <>
      <div className="hero-carousel" aria-label="Velo product photos">
        <div
          className="hero-carousel-frame"
          role="button"
          tabIndex={0}
          aria-label={`Open ${activeSlide.title}`}
          onClick={openLightbox}
          onKeyDown={handleFrameKeyDown}
        >
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            className={`hero-carousel-image ${index === activeIndex ? "active" : ""}`}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        ))}
        <div className="hero-carousel-caption">
          <p>{activeSlide.label}</p>
          <span>{activeSlide.title}</span>
        </div>
        <div className="hero-liquid-badges" aria-label="Velo engineering highlights">
          <span>
            <strong>Reliable</strong>
            ready
          </span>
          <span>
            <strong>Handy</strong>
            daily
          </span>
          <span>
            <strong>Smart</strong>
            aware
          </span>
        </div>
        </div>

        <div className="hero-carousel-controls" aria-label="Photo carousel controls">
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Previous photo"
            onClick={() => goTo(activeIndex - 1)}
          >
            <ChevronLeft size={19} />
          </button>
          <div className="carousel-dots" role="tablist" aria-label="Choose photo">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
                aria-label={`Show photo ${index + 1}`}
                aria-selected={index === activeIndex}
                role="tab"
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Next photo"
            onClick={() => goTo(activeIndex + 1)}
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      {isOpen
        ? createPortal(
        <div
          className={`media-lightbox ${isClosing ? "closing" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={activeSlide.title}
          onClick={closeLightbox}
        >
          <button className="media-lightbox-close" type="button" onClick={closeLightbox}>
            Close
          </button>
          <div className="media-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="media-lightbox-frame image">
              <Image
                className="lightbox-image"
                src={activeSlide.src}
                alt={activeSlide.alt}
                width={1800}
                height={1200}
                priority={false}
              />
            </div>
            <div className="media-lightbox-caption">
              <p className="eyebrow dark">{activeSlide.label}</p>
              <h3>{activeSlide.title}</h3>
            </div>
          </div>
        </div>,
          document.body,
        )
        : null}
    </>
  );
}
