import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Server,
  Cloud,
  Car,
  Cpu,
  Download,
  Copy,
  Check,
  ExternalLink,
  Activity,
  Database,
  Lock,
  Layers,
  FileText,
  Radio,
  RefreshCw,
  X,
  Users
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import VanetCanvas from '../components/VanetCanvas'

// Team Images
import aashiqImg from '../../assets/aashiq.jpg'
import abhinavImg from '../../assets/abhinav.jpeg'
import mounikImg from '../../assets/mounik.png'
import nishanthImg from '../../assets/nishanth.jpeg'
import vivekImg from '../../assets/vivek.jpeg'

const GithubIcon = ({ size = 18, className = "" }) => (
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
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 pointer-events-none z-20">
        <div>
          <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Status</div>
          <div className="text-xs text-white/60 tracking-wider font-mono mt-0.5">ONLINE // OBU T-1</div>
        </div>
        <div>
          <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Inference Latency</div>
          <div className="text-xs text-white/60 tracking-wider font-mono mt-0.5">0.38 µs (C++ LR)</div>
        </div>
      </div>

      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 pointer-events-none z-20 items-end text-right">
        <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Telemetry Monitor</div>
        <div className="text-xs text-white/60 tracking-wider font-mono">
          V-{nodeId} · T:{trust}
        </div>
      </div>
    </>
  )
}

interface AttackDef {
  id: number
  name: string
  category: 'kinematic' | 'trajectory' | 'network'
  formula: string
  tier: string
  detectionRate: string
  hazard: string
}

const ATTACK_MATRIX: AttackDef[] = [
  { id: 1, name: 'Constant Position Offset', category: 'kinematic', formula: 'Δx, Δy = c ≠ 0', tier: 'Tier 1 (OBU)', detectionRate: '98.9%', hazard: 'Fabricates ghost safety headway, triggering rear-end collisions.' },
  { id: 2, name: 'Constant Speed Injection', category: 'kinematic', formula: 'v_rep = c ≠ v_actual', tier: 'Tier 1 (OBU)', detectionRate: '99.2%', hazard: 'Forces adaptive cruise control (ACC) desynchronization.' },
  { id: 3, name: 'Constant Heading Offset', category: 'kinematic', formula: 'θ_rep = c ≠ θ_actual', tier: 'Tier 1 (OBU)', detectionRate: '98.4%', hazard: 'Deceives intersection conflict alerts and blind-spot monitors.' },
  { id: 4, name: 'Random Position Offset', category: 'kinematic', formula: 'Δx, Δy ~ U(-50, 50) m', tier: 'Tier 1 (OBU)', detectionRate: '97.8%', hazard: 'Induces artificial emergency braking across cooperative platoons.' },
  { id: 5, name: 'Random Speed Jitter', category: 'kinematic', formula: 'v ~ U(0, 50) m/s', tier: 'Tier 1 (OBU)', detectionRate: '98.1%', hazard: 'Injects phantom kinematic shockwaves in high-speed lanes.' },
  { id: 6, name: 'Random Heading Perturbation', category: 'kinematic', formula: 'θ ~ U(0, 2π)', tier: 'Tier 1 (OBU)', detectionRate: '97.5%', hazard: 'Triggers erratic lane-change aborts in adjacent traffic.' },
  { id: 7, name: 'Event Position Jamming', category: 'trajectory', formula: 'Fake Event @ (x_0, y_0)', tier: 'Tier 2 (RSU)', detectionRate: '96.8%', hazard: 'Diverts highway corridors into artificial traffic bottlenecks.' },
  { id: 8, name: 'Delayed Message Injection', category: 'trajectory', formula: 'Δt_delay > 500 ms', tier: 'Tier 1 (Timestamp)', detectionRate: '99.4%', hazard: 'Replays stale emergency brakes, deadlocking intersection flow.' },
  { id: 9, name: 'Sybil Vehicle Cloning', category: 'network', formula: 'Forged MAC / Fake IDs', tier: 'Tier 2 (RSU Consensus)', detectionRate: '97.1%', hazard: 'Ballot-stuffs cooperative voting to frame honest nodes.' },
  { id: 10, name: 'Ghost Vehicle Injection', category: 'trajectory', formula: 'Phantom Kinematic Trace', tier: 'Tier 2 / Tier 3', detectionRate: '96.9%', hazard: 'Forces dangerous swerving maneuvers to avoid nonexistent vehicles.' },
  { id: 11, name: 'Grid Position Spoofing', category: 'kinematic', formula: 'Snapping Off-road Coords', tier: 'Tier 1 (Map Match)', detectionRate: '99.1%', hazard: 'Corrupts cooperative situational awareness maps.' },
  { id: 12, name: 'Zigzag Path Oscillation', category: 'trajectory', formula: 'θ(t) = A sin(ωt)', tier: 'Tier 1 (Centripetal)', detectionRate: '98.6%', hazard: 'Violates steering dynamics without mechanical actuation.' },
  { id: 13, name: 'DoS Traffic Flooding', category: 'network', formula: 'Freq > 50 BSM/s', tier: 'Tier 1 (Rate Limiter)', detectionRate: '99.5%', hazard: 'Saturates DSRC control channels, dropping critical safety alerts.' },
  { id: 14, name: 'Sudden Deceleration Illusion', category: 'trajectory', formula: 'a_rep = -9.8 m/s²', tier: 'Tier 2 (Radar Fusion)', detectionRate: '97.6%', hazard: 'Fabricates panic stops, provoking highway chain-reaction crashes.' },
  { id: 15, name: 'Adaptive Trajectory Drift', category: 'trajectory', formula: 'Δp(t) = ε · t (ε < 0.1 m/s)', tier: 'Tier 2 (AdaBoost)', detectionRate: '97.45%', hazard: 'Evades simple kinematic thresholds through slow stealthy creep.' },
]

export default function Landing() {
  const [attackFilter, setAttackFilter] = useState<'all' | 'kinematic' | 'trajectory' | 'network'>('all')
  const [selectedFigure, setSelectedFigure] = useState<{ src: string; title: string; subtitle: string } | null>(null)
  const [copiedBib, setCopiedBib] = useState(false)

  const filteredAttacks = attackFilter === 'all'
    ? ATTACK_MATRIX
    : ATTACK_MATRIX.filter((a) => a.category === attackFilter)

  const bibtexCode = `@inproceedings{karthik2026edgetrust,
  title={EdgeTrust-VANET: A Decentralized Trust Management and Machine Learning Framework for Secure Vehicular Ad Hoc Networks},
  author={Karthik, Nishanth and M, Aashiq and K, Vivek and R, Abhinav and Sai, Mounik and M R, Neethu},
  booktitle={IEEE Transactions on Intelligent Transportation Systems (Under Review)},
  year={2026},
  url={https://github.com/edge-trust-vanet}
}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtexCode)
    setCopiedBib(true)
    setTimeout(() => setCopiedBib(false), 2000)
  }

  return (
    <div className="w-full bg-[#080a0e] text-white selection:bg-white selection:text-black font-sans scroll-smooth relative">
      
      {/* ── Fixed Minimalist Nav Bar ── */}
      <Nav />

      {/* ── 1. HERO SECTION (Canvas Animation Retained Intact) ── */}
      <section className="w-full h-screen overflow-hidden relative">
        <VanetCanvas />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(8,10,14,0.65) 100%)',
          }}
        />
        
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080a0e] to-transparent pointer-events-none z-0" />

        <MinimalHUD />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center mt-12 sm:mt-8">
            <div className="text-[10px] text-white/50 uppercase tracking-[0.25em] font-mono mb-5">
              Decentralized Vehicular Trust & Edge Intelligence
            </div>

            <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] max-w-5xl">
              EDGE-ASSISTED <em>TRUST</em><br />
              <em>FOR</em> VEHICULAR<br />
              NETWORKS
            </h1>
            <p className="mt-4 md:mt-5 text-white/60 text-sm sm:text-base font-light max-w-xl leading-relaxed">
              Hierarchical multi-tier framework combining deterministic Newtonian kinematics, Beta-Bayesian reputation decay, and sub-microsecond edge machine learning.
            </p>
            
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#architecture"
                className="bg-white text-black rounded-full px-6 py-2.5 text-xs font-semibold hover:bg-white/90 transition-colors"
              >
                View Architecture
              </a>
              <a
                href="#models"
                className="border border-white/20 text-white rounded-full px-6 py-2.5 text-xs font-medium hover:bg-white/5 transition-colors"
              >
                ML Benchmarks
              </a>
              <a
                href="#dataset"
                className="border border-white/20 text-white rounded-full px-6 py-2.5 text-xs font-medium hover:bg-white/5 transition-colors"
              >
                23,970 Dataset
              </a>
              <Link
                to="/survey"
                className="border border-white/20 text-white rounded-full px-6 py-2.5 text-xs font-medium hover:bg-white/5 transition-colors"
              >
                Driver Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. EXECUTIVE PERFORMANCE METRICS BANNER ── */}
      <section className="border-y border-white/[0.08] bg-[#0c0e14] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { val: '97.45%', label: 'Detection Accuracy', note: 'AdaBoost 50-tree edge model' },
              { val: '1.85%', label: 'False Positive Rate', note: '-85.1% reduction vs ML-alone' },
              { val: '0.38 µs', label: 'OBU Model Latency', note: 'Sub-microsecond linear filter' },
              { val: '0.38 ms', label: 'End-to-End Decision', note: '65x speedup vs 24.8ms cloud' },
              { val: '34.2%', label: 'Bandwidth Pruned', note: 'Local OBU kinematic firewall' },
              { val: '0.00%', label: 'Cross-Split Leakage', note: 'SHA-256 cryptographically verified' },
            ].map((kpi, idx) => (
              <div key={idx} className="border-l border-white/[0.08] pl-4 first:border-l-0">
                <div className="text-2xl sm:text-3xl font-light font-instrument-serif text-white tracking-tight">
                  {kpi.val}
                </div>
                <div className="text-xs text-white/80 font-medium mt-1">{kpi.label}</div>
                <div className="text-[10px] text-white/40 font-mono mt-0.5">{kpi.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FOUR-TIER ARCHITECTURE SPECIFICATION ── */}
      <section id="architecture" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="mb-12">
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">01 / Architecture</div>
          <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl text-white">
            Hierarchical 4-Tier Framework
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mt-2 font-light">
            Engineered to resolve the conflict between high-accuracy anomaly detection and strict sub-10ms IEEE 1609.2 deadlines.
          </p>
        </div>

        {/* Embedded High-Contrast Clean Architecture Diagram */}
        <div className="mb-14 rounded-2xl border border-white/10 bg-[#0d1017] p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-mono text-white/60">
              Figure 1: Complete 4-Tier EdgeTrust-VANET System Architecture
            </span>
            <button
              onClick={() =>
                setSelectedFigure({
                  src: '/figures/architecture.png',
                  title: 'Figure 1: Hierarchical 4-Tier System Architecture',
                  subtitle: 'Centralized SDN Controller, Regional Fog Computing, Edge RSUs, and Vehicle OBUs.',
                })
              }
              className="text-xs text-white/50 hover:text-white flex items-center gap-1 font-mono transition-colors"
            >
              Expand Figure <ExternalLink size={12} />
            </button>
          </div>

          {/* Clean High-Contrast Presentation Card */}
          <div
            onClick={() =>
              setSelectedFigure({
                src: '/figures/architecture.png',
                title: 'Figure 1: Hierarchical 4-Tier System Architecture',
                subtitle: 'Centralized SDN Controller, Regional Fog Computing, Edge RSUs, and Vehicle OBUs.',
              })
            }
            className="cursor-zoom-in bg-white rounded-xl p-4 sm:p-8 flex items-center justify-center hover:opacity-[0.98] transition-opacity"
          >
            <img
              src="/figures/architecture.png"
              alt="EdgeTrust-VANET 4-Tier Architecture Diagram"
              className="max-h-[580px] w-auto object-contain"
            />
          </div>
          <div className="mt-3 text-center text-[11px] font-mono text-white/40">
            Click diagram to inspect full mathematical formulations, inter-tier buses, and threshold parameters.
          </div>
        </div>

        {/* Clean 4-Tier Technical Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-xl border border-white/10 bg-[#0c0e14]">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/50">
              <span>TIER 4</span>
              <Cloud size={16} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Centralized SDN Controller</h3>
            <div className="text-[11px] font-mono text-white/40 mb-3">Global Routing & CRL Sync</div>
            <ul className="text-xs text-white/60 space-y-2 font-light">
              <li>• OpenFlow Flow Tables & global network topology mapping.</li>
              <li>• Dynamic Certificate Revocation List (CRL) broadcast.</li>
              <li>• Trust Dijkstra routing penalty: <code className="text-white/80 font-mono text-[11px]">C_ij = d_ij / (T_i · T_j)</code>.</li>
              <li>• Optical fiber backbone interconnection (10 Gbps).</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-[#0c0e14]">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/50">
              <span>TIER 3</span>
              <Server size={16} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Regional Fog Computing</h3>
            <div className="text-[11px] font-mono text-white/40 mb-3">Beta-Bayesian Consensus</div>
            <ul className="text-xs text-white/60 space-y-2 font-light">
              <li>• Cross-RSU trust fusion: <code className="text-white/80 font-mono text-[11px]">T_Fog = (N_A T_A + N_B T_B)/(N_A + N_B)</code>.</li>
              <li>• 10-second rolling consensus window (W = 10 s).</li>
              <li>• Safety-first deterministic override (ε_tol = 0.20, T_block = 0.40).</li>
              <li>• Low-latency local fiber ring (&lt; 1 ms RTT).</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-[#0c0e14]">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/50">
              <span>TIER 2</span>
              <Cpu size={16} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Edge Roadside Units</h3>
            <div className="text-[11px] font-mono text-white/40 mb-3">Compiled C++ Predictors</div>
            <ul className="text-xs text-white/60 space-y-2 font-light">
              <li>• 85m communication radius per RSU.</li>
              <li>• Sub-microsecond inference: 0.38 µs LR / 5.0 µs AdaBoost.</li>
              <li>• 14-dimensional feature extraction (<code className="text-white/80 font-mono text-[11px]">x ∈ ℝ¹⁴</code>).</li>
              <li>• 3-class priority QoS queue for critical safety advisories.</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-[#0c0e14]">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/50">
              <span>TIER 1</span>
              <Car size={16} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Vehicle On-Board Units</h3>
            <div className="text-[11px] font-mono text-white/40 mb-3">Kinematic Heuristic Firewall</div>
            <ul className="text-xs text-white/60 space-y-2 font-light">
              <li>• Physical bounds: <code className="text-white/80 font-mono text-[11px]">|a| ≤ 8.0 m/s², j ≤ 10 m/s³</code>.</li>
              <li>• Displacement bound: <code className="text-white/80 font-mono text-[11px]">Δd ≤ vΔt + 0.5 aΔt² + ε_GPS</code>.</li>
              <li>• Drops 34.2% of malformed/noisy traffic before uplink.</li>
              <li>• IEEE 802.11p / 5.89 GHz DSRC channel (10 Hz BSMs).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4. 15-ATTACK VEREMI THREAT MATRIX ── */}
      <section id="threats" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">02 / Threat Taxonomy</div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl text-white">
              15 VeReMi Attack Scenarios
            </h2>
            <p className="text-white/60 text-sm max-w-xl mt-2 font-light">
              Comprehensive attack coverage verified against the Vehicular Reference Misbehavior benchmark suite.
            </p>
          </div>

          {/* Minimal Tab Filters */}
          <div className="flex gap-1.5 p-1 rounded-lg bg-[#0c0e14] border border-white/10">
            {[
              { id: 'all', label: 'All 15' },
              { id: 'kinematic', label: 'Kinematic (6)' },
              { id: 'trajectory', label: 'Trajectory (5)' },
              { id: 'network', label: 'Network (4)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setAttackFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                  attackFilter === tab.id
                    ? 'bg-white text-black font-medium'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Table */}
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0c0e14]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/10 text-white/40 font-mono text-[11px] bg-black/20">
                <th className="p-4 w-16">ID</th>
                <th className="p-4">Attack Scenario</th>
                <th className="p-4">Mathematical Specification</th>
                <th className="p-4">Defense Layer</th>
                <th className="p-4">Empirical Detection</th>
                <th className="p-4">Vehicular Safety Hazard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] font-mono">
              {filteredAttacks.map((atk) => (
                <tr key={atk.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 text-white/40 font-mono">#{atk.id}</td>
                  <td className="p-4 font-sans font-medium text-white">{atk.name}</td>
                  <td className="p-4 text-white/70">{atk.formula}</td>
                  <td className="p-4 text-white/50">{atk.tier}</td>
                  <td className="p-4 text-white font-semibold">{atk.detectionRate}</td>
                  <td className="p-4 font-sans text-white/60">{atk.hazard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 5. DATASET PROVENANCE & ZERO-LEAKAGE AUDIT ── */}
      <section id="dataset" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">03 / Dataset Provenance</div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              23,970 Multi-Source Records
            </h2>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
              Synthesized across three independent benchmark environments to ensure models generalize to real radio environments rather than memorizing synthetic simulator artifacts.
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-xl border border-white/10 bg-[#0c0e14] flex justify-between items-center text-xs font-mono">
                <div>
                  <div className="text-white font-medium">VeReMi Simulation Benchmark</div>
                  <div className="text-[11px] text-white/40 font-sans mt-0.5">High-speed highway mobility with 15 standard misbehaviors.</div>
                </div>
                <div className="text-right">
                  <div className="text-white">17,474 BSMs</div>
                  <div className="text-[11px] text-white/40">72.9%</div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-[#0c0e14] flex justify-between items-center text-xs font-mono">
                <div>
                  <div className="text-white font-medium">OMNeT++ / SUMO Manhattan Grid</div>
                  <div className="text-[11px] text-white/40 font-sans mt-0.5">Urban intersection multipath fading and shadow obstacles.</div>
                </div>
                <div className="text-right">
                  <div className="text-white">5,000 BSMs</div>
                  <div className="text-[11px] text-white/40">20.9%</div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-[#0c0e14] flex justify-between items-center text-xs font-mono">
                <div>
                  <div className="text-white font-medium">V-RADD Real-World Empirical Traces</div>
                  <div className="text-[11px] text-white/40 font-sans mt-0.5">Physical GPS sensor jitter and real DSRC packet drops.</div>
                </div>
                <div className="text-right">
                  <div className="text-white">1,496 BSMs</div>
                  <div className="text-[11px] text-white/40">6.3%</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.kaggle.com/datasets/mouniksai/vehicular-misbehavior-dataset-edgetrust-vanet/data"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-semibold text-xs rounded-full px-5 py-2.5 hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                <Database size={14} /> Kaggle Dataset <ExternalLink size={12} />
              </a>
              <span className="text-xs text-white/40 font-mono">Disjoint GroupKFold by Node ID</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-4 rounded-2xl border border-white/10 bg-[#0d1017]">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-mono text-white/60">
                  Figure 2: Cryptographic SHA-256 Cross-Split Leakage Audit
                </span>
                <button
                  onClick={() =>
                    setSelectedFigure({
                      src: '/figures/leakage_audit.png',
                      title: 'Figure 2: Cryptographic SHA-256 Leakage Audit',
                      subtitle: 'Pairwise hash collision matrix between Train, Validation, and Test partitions proving 0.00% leakage.',
                    })
                  }
                  className="text-xs text-white/40 hover:text-white"
                >
                  <ExternalLink size={12} />
                </button>
              </div>
              <div
                onClick={() =>
                  setSelectedFigure({
                    src: '/figures/leakage_audit.png',
                    title: 'Figure 2: Cryptographic SHA-256 Leakage Audit',
                    subtitle: 'Pairwise hash collision matrix between Train, Validation, and Test partitions proving 0.00% leakage.',
                  })
                }
                className="cursor-zoom-in bg-black/40 rounded-xl p-3 flex items-center justify-center border border-white/5"
              >
                <img
                  src="/figures/leakage_audit.png"
                  alt="SHA-256 Leakage Audit"
                  className="max-h-[340px] w-auto object-contain"
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-mono p-3 bg-black/20 rounded-lg border border-white/5">
                <div>
                  <div className="text-white/40 text-[10px]">Train vs Val</div>
                  <div className="text-white font-medium mt-0.5">0 Collisions (0.00%)</div>
                </div>
                <div>
                  <div className="text-white/40 text-[10px]">Train vs Test</div>
                  <div className="text-white font-medium mt-0.5">0 Collisions (0.00%)</div>
                </div>
                <div>
                  <div className="text-white/40 text-[10px]">Val vs Test</div>
                  <div className="text-white font-medium mt-0.5">0 Collisions (0.00%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. 14-FEATURE VECTOR & DECISION IMPORTANCE ── */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="mb-12">
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">04 / Feature Space</div>
          <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl text-white">
            14-Dimensional Input Space (x ∈ ℝ¹⁴)
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mt-2 font-light">
            Dynamic reputation accounts for 55.86% of decision weight, while instantaneous kinematics provide the foundational 44.14%.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="p-4 rounded-2xl border border-white/10 bg-[#0d1017]">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-mono text-white/60">
                  Figure 3: Unified Feature Importance Distribution
                </span>
                <button
                  onClick={() =>
                    setSelectedFigure({
                      src: '/figures/unified_feature_importance.png',
                      title: 'Figure 3: Feature Importance Analysis',
                      subtitle: 'Relative contribution of dynamic trust metrics versus physical kinematics.',
                    })
                  }
                  className="text-xs text-white/40 hover:text-white"
                >
                  <ExternalLink size={12} />
                </button>
              </div>
              <div
                onClick={() =>
                  setSelectedFigure({
                    src: '/figures/unified_feature_importance.png',
                    title: 'Figure 3: Feature Importance Analysis',
                    subtitle: 'Relative contribution of dynamic trust metrics versus physical kinematics.',
                  })
                }
                className="cursor-zoom-in bg-black/40 rounded-xl p-3 flex items-center justify-center border border-white/5"
              >
                <img
                  src="/figures/unified_feature_importance.png"
                  alt="Feature Importance"
                  className="max-h-[360px] w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-xl border border-white/10 bg-[#0c0e14]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-white">Dynamic Reputation Group</h4>
                <span className="text-xs font-mono text-white bg-white/10 px-2 py-0.5 rounded">55.86% Total Weight</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                Direct interaction trust (T_direct: 21.4%), collaborative multi-hop trust (T_indirect: 18.6%), anomaly persistence (S_persist: 9.1%), and transmission frequency (f_msg: 6.76%).
              </p>
              <div className="text-[11px] font-mono text-white/40">
                Neutralizes on-off oscillation attacks and slow stealthy trajectory creep.
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-[#0c0e14]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-white">Physical & Kinematics Group</h4>
                <span className="text-xs font-mono text-white bg-white/10 px-2 py-0.5 rounded">44.14% Total Weight</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                Velocity residual |v_rep - v_est| (12.8%), spatial position offset Δx, Δy (10.5%), longitudinal acceleration (7.9%), heading error Δθ (5.8%), and signal RSSI/PDR (7.64%).
              </p>
              <div className="text-[11px] font-mono text-white/40">
                Guarantees zero-lag instantaneous rejection of sudden fabricated alerts at Tier 1.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TWO-STAGE ML BENCHMARKS & EDGE EVALUATION ── */}
      <section id="models" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="mb-12">
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">05 / Edge ML Benchmarks</div>
          <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl text-white">
            Classifier Performance & Edge Microcontroller Sizing
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mt-2 font-light">
            Evaluated on real vehicle computing constraints. AdaBoost with 50 decision stumps achieves the optimal balance of accuracy, memory footprint, and CPU cycle execution time.
          </p>
        </div>

        {/* Figures Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              src: '/figures/unified_model_comparison.png',
              title: 'Figure 4: Model Accuracy Comparison',
              desc: 'Cross-model benchmark comparing LR, CART, RF, XGBoost, and AdaBoost across Precision, Recall, and F1.',
            },
            {
              src: '/figures/adaboost_edge_analysis.png',
              title: 'Figure 5: AdaBoost Convergence & Depth',
              desc: 'Convergence analysis over 50 decision stumps demonstrating asymptotic stabilization without overfitting.',
            },
            {
              src: '/figures/confusion_matrix.png',
              title: 'Figure 6: Normalized Confusion Matrix',
              desc: '97.45% True Positive, 1.85% False Positive Rate under complete VeReMi test validation.',
            },
          ].map((fig, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-white/10 bg-[#0d1017]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-white/50 truncate">{fig.title}</span>
                <button
                  onClick={() =>
                    setSelectedFigure({
                      src: fig.src,
                      title: fig.title,
                      subtitle: fig.desc,
                    })
                  }
                  className="text-white/40 hover:text-white"
                >
                  <ExternalLink size={12} />
                </button>
              </div>
              <div
                onClick={() =>
                  setSelectedFigure({
                    src: fig.src,
                    title: fig.title,
                    subtitle: fig.desc,
                  })
                }
                className="cursor-zoom-in bg-black/40 rounded-lg p-2 h-44 flex items-center justify-center border border-white/5"
              >
                <img src={fig.src} alt={fig.title} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-[11px] text-white/40 mt-2 font-light">{fig.desc}</p>
            </div>
          ))}
        </div>

        {/* Quantitative Table */}
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0c0e14]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/10 text-white/40 font-mono text-[11px] bg-black/20">
                <th className="p-4">Classifier Architecture</th>
                <th className="p-4">Accuracy</th>
                <th className="p-4">Precision</th>
                <th className="p-4">Recall</th>
                <th className="p-4">F1 Score</th>
                <th className="p-4">Inference Latency</th>
                <th className="p-4">Memory Footprint</th>
                <th className="p-4">Embedded Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] font-mono">
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-sans font-medium text-white">Logistic Regression (L2)</td>
                <td className="p-4">91.20%</td>
                <td className="p-4">91.80%</td>
                <td className="p-4">89.90%</td>
                <td className="p-4">90.84%</td>
                <td className="p-4 text-white">0.38 µs</td>
                <td className="p-4">0.8 KB</td>
                <td className="p-4 font-sans text-white/50">Tier 1 OBU Pre-filter</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-sans font-medium text-white">Decision Tree (CART, d=5)</td>
                <td className="p-4">93.40%</td>
                <td className="p-4">93.90%</td>
                <td className="p-4">92.30%</td>
                <td className="p-4">93.09%</td>
                <td className="p-4">1.20 µs</td>
                <td className="p-4">3.2 KB</td>
                <td className="p-4 font-sans text-white/50">Moderate capacity</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-sans font-medium text-white">Random Forest (100 Trees)</td>
                <td className="p-4">96.80%</td>
                <td className="p-4">97.40%</td>
                <td className="p-4">96.00%</td>
                <td className="p-4">96.70%</td>
                <td className="p-4">24.50 µs</td>
                <td className="p-4">145 KB</td>
                <td className="p-4 font-sans text-white/50">Exceeds OBU L1 Cache</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-sans font-medium text-white">XGBoost (d=6)</td>
                <td className="p-4">97.10%</td>
                <td className="p-4">97.60%</td>
                <td className="p-4">96.40%</td>
                <td className="p-4">97.00%</td>
                <td className="p-4">38.20 µs</td>
                <td className="p-4">210 KB</td>
                <td className="p-4 font-sans text-white/50">High power consumption</td>
              </tr>
              <tr className="bg-white/[0.04] text-white font-semibold">
                <td className="p-4 font-sans text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  AdaBoost (Selected Edge Model)
                </td>
                <td className="p-4">97.45%</td>
                <td className="p-4">98.15%</td>
                <td className="p-4">96.42%</td>
                <td className="p-4">97.28%</td>
                <td className="p-4 text-white">5.00 µs</td>
                <td className="p-4 text-white">12.4 KB</td>
                <td className="p-4 font-sans text-white">Optimal Edge Sweet-Spot</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 8. THREE-STAGE ABLATION STUDY ── */}
      <section id="ablation" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">06 / Ablation Studies</div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Three-Stage Architectural Ablation
            </h2>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
              Empirical proof that neither static machine learning nor decentralized trust is sufficient when operated in isolation.
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-white/10 bg-[#0c0e14]">
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-white">Stage A: ML Alone (No Trust)</span>
                  <span className="text-white/60">FPR: 12.42%</span>
                </div>
                <p className="text-[11px] text-white/40">
                  Zero longitudinal memory. Innocent abrupt highway braking triggers severe false positives.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-[#0c0e14]">
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-white">Stage B: Trust Alone (No ML)</span>
                  <span className="text-white/60">Accuracy: 88.60%</span>
                </div>
                <p className="text-[11px] text-white/40">
                  Vulnerable to zero-day stealthy trajectory creep (&lt; 0.1 m/s) that stays inside threshold envelopes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/20 bg-white/5">
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-white font-semibold">Stage C: Full EdgeTrust-VANET</span>
                  <span className="text-white font-bold">FPR: 1.85% (-85.1%)</span>
                </div>
                <p className="text-[11px] text-white/70">
                  Complete defense-in-depth: 97.45% accuracy, 3.58% MAR, and deterministic sub-microsecond filtering.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-4 rounded-2xl border border-white/10 bg-[#0d1017]">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-mono text-white/60">
                  Figure 7: Ablation Analysis (ML vs Trust vs Full EdgeTrust)
                </span>
                <button
                  onClick={() =>
                    setSelectedFigure({
                      src: '/figures/ablation_study_analysis.png',
                      title: 'Figure 7: Architectural Ablation Study',
                      subtitle: 'Direct comparison demonstrating that EdgeTrust-VANET slashes FPR by 85.1% while maintaining peak accuracy.',
                    })
                  }
                  className="text-xs text-white/40 hover:text-white"
                >
                  <ExternalLink size={12} />
                </button>
              </div>
              <div
                onClick={() =>
                  setSelectedFigure({
                    src: '/figures/ablation_study_analysis.png',
                    title: 'Figure 7: Architectural Ablation Study',
                    subtitle: 'Direct comparison demonstrating that EdgeTrust-VANET slashes FPR by 85.1% while maintaining peak accuracy.',
                  })
                }
                className="cursor-zoom-in bg-black/40 rounded-xl p-3 flex items-center justify-center border border-white/5"
              >
                <img
                  src="/figures/ablation_study_analysis.png"
                  alt="Ablation Study Analysis"
                  className="max-h-[360px] w-auto object-contain"
                />
              </div>
              <div className="mt-3 flex justify-between text-xs font-mono p-3 bg-black/20 rounded-lg border border-white/5 text-white/60">
                <span>FPR Reduction: -85.1%</span>
                <span>MAR Reduction: -60.0%</span>
                <span className="text-white font-medium">Synergistic Cross-Tier Feedback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. SCALABILITY, DELAY & ALPHA SENSITIVITY ── */}
      <section id="scalability" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="mb-12">
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">07 / Network Robustness</div>
          <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl text-white">
            High Density Scalability & Delay Tolerance
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mt-2 font-light">
            Stress-tested across 100 to 500 node densities, packet delays up to 2000 ms, and reputation weight optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              src: '/figures/scalability_urban_vs_rural.png',
              title: 'Figure 8: Urban vs Rural Scalability',
              desc: 'Packet Delivery Ratio (PDR) across 100 to 500 nodes/km². Urban retains 67.49% PDR; Rural retains 85.21%.',
            },
            {
              src: '/figures/delayed_messages_simulation.png',
              title: 'Figure 9: Delay Tolerance & Dead Reckoning',
              desc: 'BSM transmission delays up to 500 ms handled gracefully via dead-reckoning; stale replay isolation triggers at >1500 ms.',
            },
            {
              src: '/figures/trust_alpha_sensitivity.png',
              title: 'Figure 10: Trust Weight Alpha Sensitivity',
              desc: 'Pareto curve identifying α* = 0.65 as optimal weight balancing direct sensor certainty with indirect consensus.',
            },
          ].map((fig, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-white/10 bg-[#0d1017]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-white/50 truncate">{fig.title}</span>
                <button
                  onClick={() =>
                    setSelectedFigure({
                      src: fig.src,
                      title: fig.title,
                      subtitle: fig.desc,
                    })
                  }
                  className="text-white/40 hover:text-white"
                >
                  <ExternalLink size={12} />
                </button>
              </div>
              <div
                onClick={() =>
                  setSelectedFigure({
                    src: fig.src,
                    title: fig.title,
                    subtitle: fig.desc,
                  })
                }
                className="cursor-zoom-in bg-black/40 rounded-lg p-2 h-44 flex items-center justify-center border border-white/5"
              >
                <img src={fig.src} alt={fig.title} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-[11px] text-white/40 mt-2 font-light">{fig.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10. DRIVER TRUST SURVEY SPOTLIGHT ── */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="p-8 rounded-2xl border border-white/10 bg-[#0c0e14] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">08 / Human Factors</div>
            <h3 className="font-instrument-serif text-2xl sm:text-3xl text-white">
              Driver Acceptance & Empirical Survey (150+ Participants)
            </h3>
            <p className="text-white/60 text-xs sm:text-sm font-light mt-1 max-w-xl">
              Surveying automotive engineers, researchers, and drivers: 88.4% demand transparent HUD trust meters over silent automated fail-safes.
            </p>
          </div>
          <Link
            to="/survey"
            className="bg-white text-black font-semibold text-xs rounded-full px-6 py-3 hover:bg-white/90 transition-colors inline-flex items-center gap-2 shrink-0"
          >
            <Users size={14} /> View Survey Analytics
          </Link>
        </div>
      </section>

      {/* ── 11. RESEARCH TEAM & SUPERVISION ── */}
      <section id="team" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="mb-12">
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">09 / Project Team</div>
          <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl text-white">
            Authors & Academic Supervision
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-1 font-light">
            Under the guidance of <span className="text-white font-medium">Ms. Neethu M R</span>, Assistant Professor, Dept. of Computer Science & Engineering, Amrita Vishwa Vidyapeetham.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { name: 'Nishanth Karthik', id: 'CB.SC.U4CSE23523', img: nishanthImg },
            { name: 'Aashiq M', id: 'CB.SC.U4CSE23560', img: aashiqImg },
            { name: 'Vivek K', id: 'CB.SC.U4CSE23360', img: vivekImg },
            { name: 'Abhinav R', id: 'CB.SC.U4CSE23563', img: abhinavImg },
            { name: 'Mounik Sai', id: 'CB.SC.U4CSE23561', img: mounikImg },
          ].map((member, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-white/10 bg-[#0c0e14] text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 overflow-hidden mb-3 border border-white/20">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-instrument-serif">{member.name.charAt(0)}</span>
                )}
              </div>
              <h4 className="font-medium text-white text-xs mb-1">{member.name}</h4>
              <div className="text-[10px] text-white/40 font-mono">{member.id}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12. ARTIFACTS, LATEX BUNDLE & BIBTEX ── */}
      <section id="artifacts" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">10 / Artifacts</div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl text-white mb-3">
              Research Manuscript & Code
            </h2>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-6">
              Complete IEEE manuscript, source algorithms, and benchmark datasets are publicly accessible.
            </p>

            <div className="space-y-2.5">
              <a
                href="/edgetrust_paper_latex_bundle.zip"
                download
                className="w-full flex items-center justify-between p-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-xs font-mono text-white"
              >
                <div className="flex items-center gap-2">
                  <Download size={14} />
                  <span>Download Overleaf LaTeX Bundle (.ZIP)</span>
                </div>
                <span className="text-white/40">4.2 MB</span>
              </a>

              <a
                href="https://github.com/edge-trust-vanet/edgetrust-core"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-lg border border-white/10 bg-[#0c0e14] hover:bg-white/5 transition-colors text-xs font-mono text-white"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon size={14} />
                  <span>Core Implementation & Paper Repo</span>
                </div>
                <ExternalLink size={12} className="text-white/40" />
              </a>

              <a
                href="https://www.kaggle.com/datasets/mouniksai/vehicular-misbehavior-dataset-edgetrust-vanet/data"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-lg border border-white/10 bg-[#0c0e14] hover:bg-white/5 transition-colors text-xs font-mono text-white"
              >
                <div className="flex items-center gap-2">
                  <Database size={14} />
                  <span>Kaggle Benchmark Dataset</span>
                </div>
                <ExternalLink size={12} className="text-white/40" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-5 rounded-xl border border-white/10 bg-[#0c0e14]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-white/50 flex items-center gap-1.5">
                  <FileText size={13} /> BibTeX Citation
                </span>
                <button
                  onClick={copyToClipboard}
                  className="text-xs font-mono text-white/80 hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedBib ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedBib ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-lg bg-black/60 border border-white/5 text-[11px] font-mono text-white/80 overflow-x-auto leading-relaxed select-all">
                {bibtexCode}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 border-t border-white/10 text-center text-white/40 text-xs font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>EdgeTrust-VANET · Decentralized Trust for Autonomous Vehicular Networks</div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="https://github.com/edge-trust-vanet" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://www.kaggle.com/datasets/mouniksai/vehicular-misbehavior-dataset-edgetrust-vanet/data" target="_blank" rel="noopener noreferrer" className="hover:text-white">Kaggle</a>
            <Link to="/survey" className="hover:text-white">Survey</Link>
            <Link to="/blog" className="hover:text-white">Blog</Link>
          </div>
        </div>
      </footer>

      {/* ── FIGURE LIGHTBOX MODAL ── */}
      {selectedFigure && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 animate-in fade-in duration-150"
          onClick={() => setSelectedFigure(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0d1017] border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div>
                <h3 className="font-instrument-serif text-xl text-white">
                  {selectedFigure.title}
                </h3>
                <p className="text-xs text-white/50 font-mono mt-0.5">
                  {selectedFigure.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedFigure(null)}
                className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center bg-white rounded-xl p-4">
              <img
                src={selectedFigure.src}
                alt={selectedFigure.title}
                className="max-h-[64vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
