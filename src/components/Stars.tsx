export default function Stars({value=0}:{value?:number}){
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex gap-1" aria-label={`${full} stars`} role="img">
      {Array.from({length:5}).map((_,i)=>(
        <span key={i} style={{color:'var(--tv-gold)'}}>{i < full ? "★" : "☆"}</span>
      ))}
    </div>
  )
}
