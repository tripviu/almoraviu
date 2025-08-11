"use client";
import { useEffect, useState } from "react";

export default function useCountdown(endsAtISO: string) {
  const [left, setLeft] = useState<number>(() => Math.max(0, new Date(endsAtISO).getTime() - Date.now()));
  useEffect(() => {
    const t = setInterval(() => setLeft(Math.max(0, new Date(endsAtISO).getTime() - Date.now())), 1000);
    return () => clearInterval(t);
  }, [endsAtISO]);

  const s = Math.floor(left / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return { d, h, m, s: sec, done: left <= 0 };
}
