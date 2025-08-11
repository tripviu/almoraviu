"use client";
import { useState } from "react";

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallback,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  loading?: "eager" | "lazy";
}) {
  const [broken, setBroken] = useState(false);
  const url =
    !broken ? src : (fallback || "https://source.unsplash.com/1200x800/?travel,landscape");
  return (
    <img
      src={url}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setBroken(true)}
    />
  );
}
