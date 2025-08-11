"use client";
import { useEffect, useRef, useState } from "react";
import OfferCard from "./OfferCard";
import Skeleton from "./Skeleton";

type Offer = Parameters<typeof OfferCard>[0]["offer"];

const DUMMY: Offer[] = [
  { id:"dxb-a", title:"Palm Jumeirah Retreat", city:"Dubai",
    img:"https://images.unsplash.com/photo-1501117716987-c8e2a4d8d72f?q=80&w=1600&auto=format&fit=crop",
    price:189, oldPrice:239, endsAt:new Date(Date.now()+ 2*86400e3 + 4*3600e3).toISOString(), href:"/hotels/dxb-001" },
  { id:"ist-a", title:"Sultanahmet Boutique", city:"Istanbul",
    img:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    price:129, oldPrice:169, endsAt:new Date(Date.now()+ 1*86400e3 + 3*3600e3).toISOString(), href:"/hotels/ist-001" },
  { id:"mak-a", title:"Haram View Suites", city:"Makkah",
    img:"https://images.unsplash.com/photo-1558980664-10eaaffc86de?q=80&w=1600&auto=format&fit=crop",
    price:220, oldPrice:260, endsAt:new Date(Date.now()+ 3*86400e3 + 2*3600e3).toISOString(), href:"/hotels/mak-001" },
  { id:"kul-a", title:"KLCC Sky Hotel", city:"Kuala Lumpur",
    img:"https://images.unsplash.com/photo-1518544887871-80f7fb19c47a?q=80&w=1600&auto=format&fit=crop",
    price:95, oldPrice:120, endsAt:new Date(Date.now()+ 0.8*86400e3).toISOString(), href:"/hotels/kul-001" },
  { id:"doh-a", title:"West Bay Marina", city:"Doha",
    img:"https://images.unsplash.com/photo-1586075041138-934d2c4383d0?q=80&w=1600&auto=format&fit=crop",
    price:160, oldPrice:199, endsAt:new Date(Date.now()+ 4*86400e3).toISOString(), href:"/hotels/doh-001" }
];

export default function OffersRail() {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState<Offer[]>([]);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => { setOffers(DUMMY); setLoading(false); }, 600); // skeleton demo
    return () => clearTimeout(t);
  }, []);

  function scrollBy(delta:number){
    scroller.current?.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Limited-time offers</h2>
        <div className="flex gap-2">
          <button onClick={()=>scrollBy(-360)} className="h-9 w-9 rounded-full border bg-white hover:bg-gray-50">‹</button>
          <button onClick={()=>scrollBy(360)} className="h-9 w-9 rounded-full border bg-white hover:bg-gray-50">›</button>
        </div>
      </div>

      <div ref={scroller} className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin">
        {loading
          ? Array.from({length:5}).map((_,i)=>(
              <div key={i} className="w-[280px] sm:w-[320px] shrink-0">
                <Skeleton className="aspect-[16/10]" />
                <Skeleton className="h-5 mt-3 w-3/4" />
                <Skeleton className="h-4 mt-2 w-1/2" />
                <Skeleton className="h-6 mt-3 w-2/3" />
              </div>
            ))
          : offers.map(o => <OfferCard key={o.id} offer={o} />)
        }
      </div>
    </section>
  );
}
