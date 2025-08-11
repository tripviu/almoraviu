"use client";
type Props = {
  href: string;
  title: string;
  subtitle?: string;
  img: string;
  badge?: string;
  staysCount?: number;
};
export default function DestinationCard({ href, title, subtitle, img, badge, staysCount }: Props) {
  return (
    <a
      href={href}
      className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
      aria-label={`${title}${subtitle ? ", " + subtitle : ""}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = `https://source.unsplash.com/800x500/?${encodeURIComponent(title)},skyline`; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1 shadow-sm">
            {badge}
          </span>
        )}

        <div className="absolute left-3 right-3 bottom-3 text-white drop-shadow-sm">
          <div className="text-lg font-semibold leading-tight">{title}</div>
          <div className="text-sm text-white/85">{subtitle}</div>
          {typeof staysCount === "number" && (
            <div className="mt-1 text-[12px] text-white/85">
              {staysCount} stays available
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
