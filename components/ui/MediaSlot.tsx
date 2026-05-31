/* eslint-disable @next/next/no-img-element */
"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import {
  getMediaSlot,
  type MediaFallbackType,
  type NepalMediaSlotId,
} from "@/content/nepal-media-slots";

type MediaSlotProps = {
  slotId: NepalMediaSlotId;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
};

const fallbackClassByType: Record<MediaFallbackType, string> = {
  hero: "media-slot--hero",
  games: "media-slot--games",
  sports: "media-slot--sports",
  offers: "media-slot--offers",
  partnership: "media-slot--partnership",
  cta: "media-slot--cta",
};

export function MediaSlot({
  slotId,
  className,
  priority = false,
  decorative = false,
}: MediaSlotProps) {
  const slot = getMediaSlot(slotId);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const image = imageRef.current;

    if (!image || !image.complete) {
      return;
    }

    if (image.naturalWidth > 0) {
      setLoaded(true);
      return;
    }

    setFailed(true);
  }, [slot.targetPath]);

  const classes = [
    "media-slot",
    fallbackClassByType[slot.fallbackType],
    loaded ? "is-loaded" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  const isDecorative = decorative;

  return (
    <div
      className={classes}
      data-overlay-safe-area={slot.overlaySafeArea}
      data-visual-intent={slot.visualIntent}
      style={
        {
          "--slot-ratio": slot.ratio,
        } as CSSProperties
      }
    >
      <div aria-hidden="true" className="media-slot__fallback">
        <span className="media-slot__grid" />
        <span className="media-slot__ridge media-slot__ridge--one" />
        <span className="media-slot__ridge media-slot__ridge--two" />
        <span className="media-slot__orb" />
        <span className="media-slot__edge" />
      </div>

      {!failed ? (
        <>
          {/* This component intentionally owns the raw image element so the styled
              fallback can stay visible until the local asset actually loads. */}
          <img
            alt={isDecorative ? "" : slot.alt}
            aria-hidden={isDecorative ? true : undefined}
            className={`media-slot__image media-slot__image--${slot.fit}`}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            loading={priority ? "eager" : "lazy"}
            onError={() => setFailed(true)}
            onLoad={() => setLoaded(true)}
            ref={imageRef}
            src={slot.targetPath}
          />
        </>
      ) : null}
    </div>
  );
}
