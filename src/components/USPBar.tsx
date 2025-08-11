export default function USPBar() {
  const items = [
    { title: "Halal-first", desc: "Filters voor voedsel, privacy & gebedsvoorzieningen.", icon: "🕋" },
    { title: "Wereldwijd", desc: "Topsteden, strandresorts en hidden gems.", icon: "🌍" },
    { title: "Betrouwbare reviews", desc: "Echte ervaringen, helder en eerlijk.", icon: "⭐" },
    { title: "Veilig betalen", desc: "Geen verborgen kosten. Heldere prijzen.", icon: "💳" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-6 bg-white rounded-2xl border p-6 shadow-sm">
        {items.map((it) => (
          <div key={it.title} className="flex items-start gap-3">
            <div className="text-2xl" aria-hidden>{it.icon}</div>
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-gray-600 text-sm">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
