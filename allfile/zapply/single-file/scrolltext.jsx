import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const AMOUNT = 25; 
  const cont = useRef(null);
  const [reveal, setreveal] = useState(0);
  const calculat = () => {
    if (!cont.current) return;
    const { height, top } = cont.current.getBoundingClientRect();
    const viewss = window.innerHeight;
    const totalss = height + viewss;
    const scrolledss = viewss - top;
    let progress = (scrolledss / totalss) * 100;
    progress = Math.min(100, Math.max(0, progress));
    setreveal(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', calculat);
    calculat(); 
    return () => window.removeEventListener('scroll', calculat);
  }, []);








  const fadeStart = Math.max(0, reveal - AMOUNT);
  const maskStyle = {
    maskImage: `linear-gradient(to bottom, black 0%, black ${fadeStart}%, transparent ${reveal}%)`,
    WebkitMaskImage: `linear-gradient(to bottom, black 0%, black ${fadeStart}%, transparent ${reveal}%)`,
  };
  const content = "In 2025, space exploration has entered a transformative era characterized by record-breaking activity and a shift toward sustainable, long-term human presence beyond Earth. This year, the global community celebrated a historic milestone: 25 years of continuous human habitation aboard the International Space Station, which remains a vital hub for microgravity research and international cooperation. While NASA’s ambitious Artemis II mission—set to carry the first crew around the Moon—has seen its target date shift toward 2026 to ensure maximum safety, 2025 has remained packed with critical milestones. Commercial partnerships have proven essential, with private robotic landers like Firefly Aerospace's Blue Ghost successfully touching down on the lunar surface in March 2025 to deploy scientific instruments. Meanwhile, the New Space economy is thriving as companies like Blue Origin successfully debuted the New Glenn rocket, and SpaceX continues to refine the Starship system, moving closer to the in-space propellant transfers required for deep-space travel. Beyond the Moon, the solar system is teeming with robotic activity; China launched its Tianwen-2 mission to sample a near-Earth asteroid, and NASA’s ESCAPADE mission departed for Mars in November 2025 to study the Red Planet’s magnetic environment. Closer to home, 2025 has seen an explosion in orbital infrastructure, with the launch of massive satellite constellations aimed at global connectivity and the debut of the first commercial space station modules by companies like Vast. Scientific discovery also reached new heights as the Lucy probe performed its first close-up flyby of an asteroid in the main belt, while the James Webb Space Telescope continued to peel back the layers of the early universe. However, this surge in activity has intensified challenges regarding orbital sustainability, prompting renewed international efforts to manage space debris and establish clear regulatory frameworks for lunar resource utilization. From private citizens visiting the edge of space on suborbital flights to the deployment of advanced AI for autonomous spacecraft navigation, 2025 represents a pivotal bridge to a future where humanity is no longer a single-planet species.";
  return (
    <div className="bg-[#fafafa]  font-inter text-white">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="my-10 p-4 sm:p-8 bg-blue-950 rounded-2xl border border-blue-700/50">
          <div ref={cont} className="p-8 lg:p-12 text-2xl lg:text-3xl font-semibold leading-relaxed text-white" style={maskStyle}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}


