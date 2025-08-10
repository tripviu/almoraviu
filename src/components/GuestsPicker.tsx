"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  label?: string;
  defaultAdults?: number;
  defaultChildren?: number;
  defaultRooms?: number;
  inputNames?: { adults?: string; children?: string; rooms?: string; };
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function GuestsPicker({
  label = "Guests & rooms",
  defaultAdults = 2,
  defaultChildren = 0,
  defaultRooms = 1,
  inputNames = { adults: "adults", children: "children", rooms: "rooms" },
}: Props) {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(defaultAdults);
  const [children, setChildren] = useState(defaultChildren);
  const [rooms, setRooms] = useState(defaultRooms);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!panelRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const summary = `${adults} adult${adults === 1 ? "" : "s"} · ${children} child${children === 1 ? "" : "ren"} · ${rooms} room${rooms === 1 ? "" : "s"}`;

  return (
    <div className="relative" ref={panelRef}>
      <div className="block text-[11px] text-gray-500 mb-1">{label}</div>

      <input type="hidden" name={inputNames.adults} value={adults} readOnly />
      <input type="hidden" name={inputNames.children} value={children} readOnly />
      <input type="hidden" name={inputNames.rooms} value={rooms} readOnly />

      <button type="button" onClick={() => setOpen(v => !v)} className="w-full border rounded px-3 py-2 text-left bg-white">
        <div className="text-gray-900 flex items-center gap-2">
          <span aria-hidden>👤</span>
          <span className="truncate">{summary}</span>
        </div>
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-[340px] bg-white border rounded-xl shadow-lg p-4">
          {[
            { icon:"👤", label:"Adults",   value:adults,   set:setAdults,   min:1, max:16 },
            { icon:"🧒", label:"Children", value:children, set:setChildren, min:0, max:16 },
            { icon:"🛏️", label:"Rooms",   value:rooms,    set:setRooms,    min:1, max:9  },
          ].map(row => (
            <div key={row.label} className="flex items-center justify-between py-2">
              <div className="text-gray-800 flex items-center gap-2"><span aria-hidden>{row.icon}</span>{row.label}</div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => row.set(clamp(row.value - 1, row.min, row.max))} className="w-8 h-8 border rounded hover:bg-gray-50">−</button>
                <div className="w-8 text-center">{row.value}</div>
                <button type="button" onClick={() => row.set(clamp(row.value + 1, row.min, row.max))} className="w-8 h-8 border rounded hover:bg-gray-50">+</button>
              </div>
            </div>
          ))}

          <div className="pt-2 flex justify-end">
            <button type="button" className="px-3 py-2 text-sm border rounded hover:bg-gray-50 mr-2" onClick={() => { setAdults(2); setChildren(0); setRooms(1); }}>Reset</button>
            <button type="button" className="px-3 py-2 text-sm bg-black text-white rounded hover:opacity-90" onClick={() => setOpen(false)}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
}
