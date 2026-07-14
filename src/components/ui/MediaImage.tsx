"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { clsx } from "clsx";

type MediaImageProps = Omit<ImageProps, "onLoad" | "onError"> & {
  /** Extra classes on the wrapper (shimmer container) */
  wrapperClassName?: string;
};

/**
 * Next/Image with a gold shimmer skeleton until the asset paints.
 * Use anywhere a plain Image would show a black hole while remote URLs load.
 */
export function MediaImage({
  className,
  wrapperClassName,
  alt,
  fill,
  priority,
  ...rest
}: MediaImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const skeleton = (
    <div
      aria-hidden
      className={clsx(
        "media-skeleton pointer-events-none absolute inset-0 transition-opacity duration-500",
        loaded || failed ? "opacity-0" : "opacity-100"
      )}
    />
  );

  if (fill) {
    return (
      <div className={clsx("absolute inset-0 overflow-hidden bg-[#14110c]", wrapperClassName)}>
        {skeleton}
        {!failed ? (
          <Image
            {...rest}
            alt={alt}
            fill
            priority={priority}
            className={clsx(
              className,
              "transition-opacity duration-700 ease-out",
              !loaded && "!opacity-0"
            )}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#14110c] text-xs text-[var(--fg-muted)]">
            Image unavailable
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={clsx("relative overflow-hidden bg-[#14110c]", wrapperClassName)}>
      {skeleton}
      {!failed ? (
        <Image
          {...rest}
          alt={alt}
          priority={priority}
          className={clsx(
            className,
            "transition-opacity duration-700 ease-out",
            !loaded && "!opacity-0"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : null}
    </div>
  );
}
