"use client";
type Props = {
  href: string;
  title: string;
  subtitle?: string;
  img: string;
  badge?: string;
};
export default function DestinationCard({ href, title, subtitle, img, badge }: Props) {
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
          onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = `https://source.unsplash.com/800x500/?${encodeURIComponent(title)},city`; }}
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 text-white text-xs font-medium px-2 py-1">
            {badge}
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="text-[15px] font-semibold text-gray-900">{title}</div>
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      </div>
    </a>
  );
}
