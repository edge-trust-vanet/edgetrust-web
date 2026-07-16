import { useEffect, useState } from 'react'
import { ArrowRight, Server, Cloud, Car, Cpu, ShieldAlert, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import VanetCanvas from '../components/VanetCanvas'

// Team Images
import aashiqImg from '../../assets/aashiq.jpg'
import abhinavImg from '../../assets/abhinav.jpeg'
import mounikImg from '../../assets/mounik.png'
import nishanthImg from '../../assets/nishanth.jpeg'
import vivekImg from '../../assets/vivek.jpeg'

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const MinimalHUD = () => {
  const [nodeId, setNodeId] = useState(831)
  const [trust, setTrust] = useState(0.94)

  useEffect(() => {
    const interval = setInterval(() => {
      setNodeId(Math.floor(100 + Math.random() * 800))
      setTrust(Number((0.85 + Math.random() * 0.14).toFixed(2)))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Left side minimal telemetry */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 pointer-events-none z-20">
        <div className="flex flex-col gap-1">
          <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Status</div>
          <div className="text-[11px] text-white/50 tracking-wider font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse"></span> ONLINE
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Latency</div>
          <div className="text-[11px] text-white/50 tracking-wider font-mono">12ms</div>
        </div>
      </div>

      {/* Right side minimal feed */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 pointer-events-none z-20 items-end text-right">
        <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Live Evaluation</div>
        <div className="text-[11px] text-white/50 tracking-wider font-mono transition-all duration-500">
          V-{nodeId} // T:{trust}
        </div>
      </div>
    </>
  )
}

export default function Landing() {
  return (
    <div className="w-full bg-[#080a0e] text-white selection:bg-white selection:text-black font-sans scroll-smooth">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="w-full h-screen overflow-hidden relative">
        <VanetCanvas />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(8,10,14,0.55) 100%)',
          }}
        />
        
        <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 bg-gradient-to-t from-[#080a0e] to-transparent pointer-events-none z-0" />

        <MinimalHUD />

        <div className="relative z-10 flex flex-col h-full">
          <Nav />
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center -mt-10 sm:-mt-16 md:-mt-20">
            <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl">
              EDGE-ASSISTED <em>TRUST</em><br />
              <em>FOR</em> VEHICULAR<br />
              NETWORKS
            </h1>
            <p className="mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-xl leading-relaxed">
              Edge-based Trust Management and Machine Learning Framework for Secure Vehicular Ad Hoc Networks (VANETs).
            </p>
            <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/survey"
                className="group flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
              >
                Read the Survey
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="https://github.com/edge-trust-vanet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/40 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-white/10 hover:border-white/60 transition-all duration-200"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT SECTION ── */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              The <em className="text-white/50">Problem</em> with PKI
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-lg">
              Traditional Public Key Infrastructure (PKI) authenticates vehicles perfectly, but it possesses a fatal flaw: it cannot determine whether an authenticated node behaves maliciously <span className="text-white font-medium">after</span> joining the network.
            </p>
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="mt-1">
                <ShieldAlert className="text-red-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Insider Attacks</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Sybil attacks, blackholes, and false information dissemination can easily bypass standard cryptographic checks.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              The <em className="text-white/50">EdgeTrust</em> Solution
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-lg">
              We push security to the edge. Roadside Units (RSUs) act as edge computing nodes to continuously monitor behavior, ensuring network integrity in real time.
            </p>
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="mt-1">
                <ShieldCheck className="text-green-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Behavioral Trust Management</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Integrating dynamic trust scores with machine learning-based attack detection directly at the network edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ARCHITECTURE SECTION ── */}
      <section id="architecture" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto border-b border-white/10">
        <div className="text-center mb-20">
          <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl mb-6">System Architecture</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
            A hierarchical four-layer framework designed for minimal latency and maximum accuracy in intelligent transportation systems.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/20 -translate-y-1/2 z-0"></div>
          
          {/* Layers */}
          {[
            { icon: Car, title: 'Vehicle Layer', desc: 'Beacon generation & safety messages' },
            { icon: Cpu, title: 'Edge Layer (RSUs)', desc: 'Trust computation & ML inference' },
            { icon: Server, title: 'Fog Layer', desc: 'Regional trust synchronization' },
            { icon: Cloud, title: 'Cloud Layer', desc: 'Dataset storage & analytics' }
          ].map((layer, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center bg-[#080a0e] p-4 w-full md:w-1/4">
              <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <layer.icon size={32} className="text-white/80" />
              </div>
              <h3 className="text-xl font-instrument-serif mb-2 text-center">{layer.title}</h3>
              <p className="text-white/50 text-sm text-center font-light leading-relaxed px-4">
                {layer.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. SIMULATION SECTION ── */}
      <section id="simulation" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Simulation<br/><em className="text-white/50">Environment</em>
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-8">
              We leverage an industry-standard open-source toolchain to model both microscopic vehicle mobility and wireless network packet behavior accurately.
            </p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/30 pb-1 hover:border-white transition-colors">
              Read development updates <ArrowRight size={14} />
            </Link>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'SUMO', subtitle: 'Traffic Simulator', desc: 'Models the continuous, microscopic road traffic and vehicle flows in a custom grid network.' },
              { title: 'OMNeT++', subtitle: 'Network Simulator', desc: 'Simulates the wireless communication layers, packet delays, and node interactions.' },
              { title: 'Veins', subtitle: 'VANET Framework', desc: 'The bridge. Seamlessly links OMNeT++ with SUMO for real-time IVC simulations.' }
            ].map((tool, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full">
                <h3 className="text-2xl font-instrument-serif mb-1">{tool.title}</h3>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-4">{tool.subtitle}</div>
                <p className="text-white/60 text-sm font-light leading-relaxed mt-auto">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TEAM SECTION ── */}
      <section id="team" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl mb-4">The Team</h2>
          <p className="text-white/50 font-light tracking-wide uppercase text-sm">Under the guidance of Ms. Neethu M R</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'Mounik Sai', id: 'CB.SC.U4CSE23561', img: mounikImg },
            { name: 'Aashiq', id: 'CB.SC.U4CSE23560', img: aashiqImg },
            { name: 'Vivek', id: 'CB.SC.U4CSE23360', img: vivekImg },
            { name: 'Nishanth', id: 'CB.SC.U4CSE23523', img: nishanthImg },
            { name: 'Abhinav', id: 'CB.SC.U4CSE23563', img: abhinavImg }
          ].map((member, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4 text-xl font-instrument-serif overflow-hidden border border-white/20">
                {member.img ? (
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  member.name.charAt(0)
                )}
              </div>
              <h4 className="font-medium text-white mb-1">{member.name}</h4>
              <p className="text-white/40 text-xs font-mono">{member.id}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center border-t border-white/10 text-white/30 text-xs font-light">
        <p>© 2026 EdgeTrust-VANET Research Project. All rights reserved.</p>
      </footer>

    </div>
  )
}
