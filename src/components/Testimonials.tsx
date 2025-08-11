"use client";
import { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import Skeleton from "./Skeleton";

type Review = Parameters<typeof ReviewCard>[0]["r"];

const DUMMY: Review[] = [
  {
    id:"r1",
    name:"Amina",
    country:"Netherlands",
    city:"Istanbul",
    avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    rating:4.8,
    text:"Loved how easy it was to find halal-friendly hotels. The prayer room filter saved me so much time!",
    date:"2025-08-10"
  },
  {
    id:"r2",
    name:"Yusuf",
    country:"UK",
    city:"Dubai",
    avatar:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
    rating:5.0,
    text:"Accurate info on no-alcohol properties. Finally a platform that respects our values without excluding anyone.",
    date:"2025-07-22"
  },
  {
    id:"r3",
    name:"Sofia",
    country:"Germany",
    city:"Makkah",
    avatar:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
    rating:4.7,
    text:"The app is beautiful and fast. Loved the clear halal score and proximity to mosques.",
    date:"2025-06-12"
  },
  {
    id:"r4",
    name:"Karim",
    country:"France",
    city:"Doha",
    avatar:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
    rating:4.9,
    text:"Great deals and honest descriptions. Booking felt safer and simpler.",
    date:"2025-05-28"
  }
];

export default function Testimonials() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => { setReviews(DUMMY); setLoading(false); }, 600);
    return () => clearTimeout(t);
  }, []);

  function scrollBy(delta:number){
    scroller.current?.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What travelers say</h2>
        <div className="flex gap-2">
          <button onClick={()=>scrollBy(-360)} className="h-9 w-9 rounded-full border bg-white hover:bg-gray-50">‹</button>
          <button onClick={()=>scrollBy(360)} className="h-9 w-9 rounded-full border bg-white hover:bg-gray-50">›</button>
        </div>
      </div>

      <div ref={scroller} className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin">
        {loading
          ? Array.from({length:4}).map((_,i)=>(
              <div key={i} className="w-[300px] sm:w-[360px] shrink-0">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 mt-3 w-full" />
              </div>
            ))
          : reviews.map(r => <ReviewCard key={r.id} r={r} />)
        }
      </div>
    </section>
  );
}
