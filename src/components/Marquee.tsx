import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  duration?: number; // Speed in seconds
  gapClass?: string; // Tailwind gap class e.g. "gap-6"
}

export default function Marquee({ children, duration = 30, gapClass = "gap-6" }: MarqueeProps) {
  // Convert children to array to make sure we can map and duplicate them
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="w-full overflow-hidden flex relative pause-on-hover py-4 select-none">
      {/* Shadow overlay to fade edges (creates premium visual feel) */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

      <div 
        className={`flex ${gapClass} animate-marquee`} 
        style={{ '--duration': `${duration}s` } as React.CSSProperties}
      >
        {/* Group 1 */}
        <div className={`flex ${gapClass} shrink-0`}>
          {childrenArray.map((child, idx) => (
            <div key={`g1-${idx}`} className="shrink-0">
              {child}
            </div>
          ))}
        </div>
        
        {/* Group 2 (Duplicated for seamless loop) */}
        <div className={`flex ${gapClass} shrink-0`}>
          {childrenArray.map((child, idx) => (
            <div key={`g2-${idx}`} className="shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
