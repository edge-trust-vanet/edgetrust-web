import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Server,
  Cloud,
  Car,
  Cpu,
  ShieldAlert,
  ShieldCheck,
  Download,
  Copy,
  Check,
  ExternalLink,
  Activity,
  Database,
  Gauge,
  Lock,
  Filter,
  Layers,
  Zap,
  Info,
  FileText,
  ChevronRight,
  BarChart3,
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

const GithubIcon = ({ size = 20, className = "" }) => (
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse"></span> ONLINE
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Edge Latency</div>
          <div className="text-[11px] text-white/50 tracking-wider font-mono">0.38 µs (LR)</div>
        </div>
      </div>

      {/* Right side minimal feed */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 pointer-events-none z-20 items-end text-right">
        <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Live Evaluation</div>
        <div className="text-[11px] text-white/50 tracking-wider font-mono transition-all duration-500">
          V-{nodeId} // Trust: {trust}
        </div>
      </div>
    </>
  )
}

// 15 VeReMi Attack Matrix Data
interface AttackDef {
  id: number
  name: string
  category: 'kinematic' | 'trajectory' | 'network'
  formula: string
  detectTier: string
  detectionRate: string
  hazard: string
}

const ATTACK_MATRIX: AttackDef[] = [
  { id: 1, name: 'Constant Position Offset', category: 'kinematic', formula: 'Δx, Δy = c ≠ 0', detectTier: 'Tier 1 (OBU)', detectionRate: '98.9%', hazard: 'Creates ghost safety margins, leading to rear-end collisions.' },
  { id: 2, name: 'Constant Speed Injection', category: 'kinematic', formula: 'v_rep = c ≠ v_actual', detectTier: 'Tier 1 (OBU)', detectionRate: '99.2%', hazard: 'Causes adaptive cruise control (ACC) desynchronization.' },
  { id: 3, name: 'Constant Heading Offset', category: 'kinematic', formula: 'θ_rep = c ≠ θ_actual', detectTier: 'Tier 1 (OBU)', detectionRate: '98.4%', hazard: 'Misleads intersection conflict monitors and blind spot radars.' },
  { id: 4, name: 'Random Position Offset', category: 'kinematic', formula: 'Δx, Δy ~ U(-50, 50) m', detectTier: 'Tier 1 / Tier 2', detectionRate: '97.8%', hazard: 'Induces artificial emergency braking across platoons.' },
  { id: 5, name: 'Random Speed Jitter', category: 'kinematic', formula: 'v ~ U(0, 50) m/s', detectTier: 'Tier 1 (OBU)', detectionRate: '98.1%', hazard: 'Injects speed shockwaves in high-speed highway lanes.' },
  { id: 6, name: 'Random Heading Perturbation', category: 'kinematic', formula: 'θ ~ U(0, 2π)', detectTier: 'Tier 1 (OBU)', detectionRate: '97.5%', hazard: 'Triggers false evasive swerve maneuvers in adjacent lanes.' },
  { id: 7, name: 'Event Position Jamming', category: 'trajectory', formula: 'Fake crash @ (x_0, y_0)', detectTier: 'Tier 2 (RSU)', detectionRate: '96.8%', hazard: 'Diverts highway traffic into artificial congestion corridors.' },
  { id: 8, name: 'Delayed Message Injection', category: 'trajectory', formula: 'Δt_delay > 500 ms', detectTier: 'Tier 1 (Timestamp)', detectionRate: '99.4%', hazard: 'Replays stale emergency brake signals, halting traffic flow.' },
  { id: 9, name: 'Sybil Identity Cloning', category: 'network', formula: 'Forged MAC / Fake IDs', detectTier: 'Tier 2 (RSU Multi-hop)', detectionRate: '97.1%', hazard: 'Dominates cooperative ballot & votes to blackball honest vehicles.' },
  { id: 10, name: 'Ghost Vehicle Injection', category: 'trajectory', formula: 'Phantom kinematic trace', detectTier: 'Tier 2 / Tier 3', detectionRate: '96.9%', hazard: 'Forces vehicles into dangerous abrupt lane-change hazards.' },
  { id: 11, name: 'Grid Position Spoofing', category: 'kinematic', formula: 'Snapping off-road coords', detectTier: 'Tier 1 (Map Match)', detectionRate: '99.1%', hazard: 'Corrupts cooperative situational awareness models.' },
  { id: 12, name: 'Zigzag Path Oscillation', category: 'trajectory', formula: 'θ(t) = A sin(ωt)', detectTier: 'Tier 1 (Centripetal)', detectionRate: '98.6%', hazard: 'Violates physical steering kinematics without mechanical failure.' },
  { id: 13, name: 'DoS Beacon Flooding', category: 'network', formula: 'Freq > 50 BSM/s', detectTier: 'Tier 1 (Rate Limiter)', detectionRate: '99.5%', hazard: 'Exhausts DSRC control channel bandwidth for critical alerts.' },
  { id: 14, name: 'Sudden Deceleration Illusion', category: 'trajectory', formula: 'a_rep = -9.8 m/s²', detectTier: 'Tier 2 (Radar Fusion)', detectionRate: '97.6%', hazard: 'Causes catastrophic pile-ups through bogus emergency braking.' },
  { id: 15, name: 'Adaptive Trajectory Drift', category: 'trajectory', formula: 'Δp(t) = ε · t', detectTier: 'Tier 3 (AdaBoost+Trust)', detectionRate: '97.45%', hazard: 'Evades simple thresholds by drifting position < 0.1 m/s.' },
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
    setTimeout(() => setCopiedBib(false), 2500)
  }

  return (
    <div className="w-full bg-[#080a0e] text-white selection:bg-white selection:text-black font-sans scroll-smooth relative">
      
      {/* ── Fixed Universal Navigation Bar ── */}
      <Nav />

      {/* ── 1. HERO SECTION (Unchanged Animated Experience) ── */}
      <section className="w-full h-screen overflow-hidden relative">
        <VanetCanvas />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(8,10,14,0.55) 100%)',
          }}
        />
        
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-[#080a0e] to-transparent pointer-events-none z-0" />

        <MinimalHUD />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center mt-12 sm:mt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] text-white/70 uppercase tracking-widest font-mono">
                Decentralized Vehicular Trust & Edge Intelligence
              </span>
            </div>

            <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] max-w-5xl">
              EDGE-ASSISTED <em>TRUST</em><br />
              <em>FOR</em> VEHICULAR<br />
              NETWORKS
            </h1>
            <p className="mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-xl leading-relaxed">
              A hierarchical multi-tier architecture uniting physical kinematics, Bayesian reputation decay, and sub-microsecond edge machine learning for autonomous safety.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#architecture"
                className="group flex items-center gap-2 bg-white text-black rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold hover:bg-white/90 transition-all duration-200"
              >
                Explore Architecture
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#models"
                className="flex items-center gap-2 border border-white/20 text-white rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                <Activity size={14} />
                Edge ML Benchmarks
              </a>
              <Link
                to="/survey"
                className="flex items-center gap-2 border border-white/20 text-white rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                <Users size={14} />
                Driver Survey (150+)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. EXECUTIVE PERFORMANCE KPI BANNER ── */}
      <section className="border-y border-white/[0.08] bg-white/[0.02] backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
            {[
              { val: '97.45%', label: 'Detection Accuracy', sub: 'AdaBoost 50-stump edge model' },
              { val: '1.85%', label: 'False Positive Rate', sub: '-85.1% reduction vs ML-alone' },
              { val: '0.38 µs', label: 'Model Latency', sub: 'Sub-microsecond linear filter' },
              { val: '0.38 ms', label: 'End-to-End Decision', sub: '65x speedup vs cloud round-trip' },
              { val: '34.2%', label: 'Bandwidth Pruned', sub: 'OBU pre-filter traffic savings' },
              { val: '0.00%', label: 'Cross-Split Leakage', sub: 'SHA-256 audited zero collision' },
            ].map((kpi, idx) => (
              <div key={idx} className="flex flex-col border-l border-white/[0.08] pl-4 first:border-l-0">
                <span className="text-2xl lg:text-3xl font-light font-instrument-serif text-white tracking-tight">
                  {kpi.val}
                </span>
                <span className="text-xs text-white/80 font-medium mt-1">{kpi.label}</span>
                <span className="text-[10px] text-white/40 font-mono mt-0.5">{kpi.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PROBLEM & SOLUTION PHILOSOPHY ── */}
      <section id="problem" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-widest text-red-400 font-mono mb-3">Vulnerability Analysis</div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              The Fatal Flaw of <em className="text-white/40">Pure Cryptography</em>
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-sm sm:text-base">
              Standard IEEE 1609.2 PKI verifies message authenticity and vehicle identity cryptographically. However, <span className="text-white font-medium">it cannot determine whether an authorized vehicle is actively broadcasting fabricated physical states</span>.
            </p>
            <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.03] backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <ShieldAlert className="text-red-400" size={20} />
                <h3 className="font-semibold text-white text-sm">Insider Telemetry Spoofing</h3>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Legitimate private keys can broadcast falsified GPS coordinates, deceptive velocity shifts, and phantom collision alerts. Downstream autonomous emergency braking (AEB) systems accept signed bogus packets blindly, causing highway pile-ups and gridlocks.
              </p>
              <div className="text-[11px] font-mono text-red-400/80 bg-red-950/30 p-2.5 rounded border border-red-500/20">
                MAR (Malicious Acceptance Rate): 8.95% under static ML alone.
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-3">System Paradigm</div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              The <em className="text-white/40">EdgeTrust</em> Solution
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-sm sm:text-base">
              Security must exist at the physical edge. Roadside Units (RSUs) and On-Board Units (OBUs) form a decentralized, multi-tiered trust fabric that correlates deterministic Newtonian physics with temporal Bayesian reputation.
            </p>
            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-emerald-400" size={20} />
                <h3 className="font-semibold text-white text-sm">Dual-Dimension Verification</h3>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Every Basic Safety Message (BSM) undergoes instantaneous kinematic plausibility checks at Tier 1, followed by collaborative neighbor reputation aggregation at Tier 2 and AdaBoost ML inference at Tier 3.
              </p>
              <div className="text-[11px] font-mono text-emerald-400/80 bg-emerald-950/30 p-2.5 rounded border border-emerald-500/20">
                FPR reduced to 1.85% | Sub-microsecond local inference.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FOUR-TIER ARCHITECTURE DEEP DIVE ── */}
      <section id="architecture" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-white/60 mb-3 uppercase tracking-wider">
            System Design
          </div>
          <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl mb-4">
            Four-Tier Hierarchical Framework
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Engineered to fulfill the strict sub-10ms latency deadlines of SAE J2735 and IEEE 1609.2 while delivering defense-in-depth against insider attacks.
          </p>
        </div>

        {/* Embedded High-Res Architecture Diagram */}
        <div className="mb-16 p-4 md:p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest">
                Figure 1: Hierarchical EdgeTrust-VANET Architecture
              </span>
            </div>
            <button
              onClick={() =>
                setSelectedFigure({
                  src: '/figures/architecture_4tier.png',
                  title: 'Figure 1: Hierarchical 4-Tier EdgeTrust-VANET Architecture',
                  subtitle: 'Detailed flow between On-Board Units (OBU), Roadside Units (RSU), Edge Cluster Aggregators, and Ledger/Cloud.',
                })
              }
              className="text-xs text-white/50 hover:text-white flex items-center gap-1 font-mono transition-colors"
            >
              Zoom High-Res <ExternalLink size={12} />
            </button>
          </div>
          <div
            onClick={() =>
              setSelectedFigure({
                src: '/figures/architecture_4tier.png',
                title: 'Figure 1: Hierarchical 4-Tier EdgeTrust-VANET Architecture',
                subtitle: 'Detailed flow between On-Board Units (OBU), Roadside Units (RSU), Edge Cluster Aggregators, and Ledger/Cloud.',
              })
            }
            className="cursor-zoom-in rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center group"
          >
            <img
              src="/figures/architecture_4tier.png"
              alt="4-Tier Architecture Diagram"
              className="max-h-[520px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
          <p className="text-center text-[11px] text-white/40 font-mono mt-3">
            Click diagram to inspect all 4 operational tiers, mathematical feedback loops, and verification gates.
          </p>
        </div>

        {/* 4 Tiers Functional Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              tier: 'Tier 1',
              title: 'On-Board Unit (OBU)',
              role: 'Physical Plausibility & Pre-Filter',
              icon: Car,
              metrics: '0.38 µs | 34.2% Pruned',
              details: [
                'Newtonian kinematic bounds: v ≤ 50 m/s, |a| ≤ 8 m/s².',
                'Kalman filter dead-reckoning residual estimation.',
                'Instantaneous direct interaction trust computation.',
                'Drops blatant malformed BSMs before radio transmission.',
              ],
            },
            {
              tier: 'Tier 2',
              title: 'Roadside Unit (RSU)',
              role: 'Bayesian Collaborative Trust',
              icon: Cpu,
              metrics: 'λ = 0.95 | α* = 0.65',
              details: [
                'Multi-hop indirect neighbor aggregation (T_indirect).',
                'Time-decay confidence attenuation factor λ = 0.95.',
                'Spatial triangulation against Sybil and ghost vehicles.',
                'Synthesizes unified trust: T_final = α T_dir + (1-α) T_indir.',
              ],
            },
            {
              tier: 'Tier 3',
              title: 'Edge Cluster Head',
              role: 'Two-Stage ML Inference',
              icon: Server,
              metrics: '5.0 µs | 97.45% Acc',
              details: [
                '50 shallow decision stumps in AdaBoost ensemble.',
                'Input vector: 14 kinematic and reputation features.',
                'Adaptive drift and stealthy perturbation isolation.',
                'Broadcasts emergency Certificate Revocation (CRL).',
              ],
            },
            {
              tier: 'Tier 4',
              title: 'Cloud & Ledger',
              role: 'Auditability & Retraining',
              icon: Cloud,
              metrics: 'Immutable | Global Sync',
              details: [
                'Decentralized blacklist synchronization across regions.',
                'Federated model retraining on novel threat vectors.',
                'Long-term vehicular provenance & forensic replay.',
                'Zero-leakage cross-split cryptographic auditing.',
              ],
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">
                    {t.tier}
                  </span>
                  <t.icon size={18} className="text-white/60" />
                </div>
                <h3 className="font-instrument-serif text-2xl text-white mb-1">{t.title}</h3>
                <div className="text-xs text-white/50 font-mono mb-4">{t.role}</div>
                <ul className="space-y-2 text-xs text-white/60 font-light mb-6">
                  {t.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-white/30 mt-1">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span>Metric:</span>
                <span>{t.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. 15-ATTACK VEREMI THREAT MATRIX ── */}
      <section id="threats" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 font-mono mb-2">Empirical Coverage</div>
            <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl">
              15 VeReMi Attack Scenarios
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light max-w-xl mt-3">
              Full defensive coverage against all standardized attack behaviors defined in the Vehicular Reference Misbehavior (VeReMi) benchmark.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All 15 Attacks' },
              { id: 'kinematic', label: 'Kinematic (6)' },
              { id: 'trajectory', label: 'Trajectory (5)' },
              { id: 'network', label: 'Network/Sybil (4)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setAttackFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  attackFilter === tab.id
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Attack Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAttacks.map((atk) => (
            <div
              key={atk.id}
              className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                    Attack #{atk.id}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <Check size={12} /> {atk.detectionRate}
                  </span>
                </div>
                <h4 className="font-medium text-white text-base mb-1.5">{atk.name}</h4>
                <div className="text-[11px] font-mono text-white/50 bg-black/40 px-2 py-1 rounded border border-white/5 mb-3 inline-block">
                  {atk.formula}
                </div>
                <p className="text-xs text-white/60 leading-relaxed mb-4">{atk.hazard}</p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>Detecting Layer:</span>
                <span className="text-white/70">{atk.detectTier}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. DATASET PROVENANCE & ZERO-LEAKAGE AUDIT ── */}
      <section id="dataset" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-2">
              Provenance & Methodology
            </div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              23,970 Multi-Source BSMs with <em className="text-white/40">Zero Leakage</em>
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-sm sm:text-base">
              To avoid the common flaw of synthetic memorization, EdgeTrust-VANET combines synthetic VeReMi benchmarks, SUMO Manhattan grid mobility, and empirical real-world testbed traces into a unified evaluation standard.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { source: 'VeReMi Simulation Benchmark', count: '17,474 BSMs', pct: '72.9%', desc: '15 standardized attack types under high-speed highway mobility' },
                { source: 'OMNeT++ / SUMO Urban Grid', count: '5,000 BSMs', pct: '20.9%', desc: 'Multipath fading, shadow obstacles, and multi-lane intersections' },
                { source: 'V-RADD Empirical Testbed', count: '1,496 BSMs', pct: '6.3%', desc: 'Real physical GPS jitter and DSRC radio interference' },
              ].map((src, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                    <span>{src.source}</span>
                    <span className="text-emerald-400">{src.pct} ({src.count})</span>
                  </div>
                  <p className="text-[11px] text-white/50">{src.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.kaggle.com/datasets/nishanthkarthik/edgetrust-vanet-dataset"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs rounded-full px-6 py-3 hover:bg-white/90 transition-colors"
              >
                <Database size={14} /> View Kaggle Dataset <ExternalLink size={12} />
              </a>
              <div className="text-xs text-white/50 font-mono">
                GroupKFold by Node ID
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-4 md:p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/60">
                  Figure 2: Cryptographic SHA-256 Leakage Audit
                </span>
                <button
                  onClick={() =>
                    setSelectedFigure({
                      src: '/figures/leakage_audit.png',
                      title: 'Figure 2: Cryptographic SHA-256 Zero-Leakage Audit',
                      subtitle: 'Pairwise hash collision matrix between Train, Validation, and Test splits confirming 0.00% leakage.',
                    })
                  }
                  className="text-xs text-white/50 hover:text-white flex items-center gap-1 font-mono transition-colors"
                >
                  Zoom <ExternalLink size={12} />
                </button>
              </div>
              <div
                onClick={() =>
                  setSelectedFigure({
                    src: '/figures/leakage_audit.png',
                    title: 'Figure 2: Cryptographic SHA-256 Zero-Leakage Audit',
                    subtitle: 'Pairwise hash collision matrix between Train, Validation, and Test splits confirming 0.00% leakage.',
                  })
                }
                className="cursor-zoom-in rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center group"
              >
                <img
                  src="/figures/leakage_audit.png"
                  alt="Cryptographic Zero-Leakage Audit"
                  className="w-full max-h-[360px] object-contain group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="mt-4 p-4 rounded-xl bg-black/30 border border-white/5 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div>
                  <div className="text-white/40 text-[10px]">Train vs Val</div>
                  <div className="text-emerald-400 font-semibold mt-0.5">0 Collisions</div>
                </div>
                <div>
                  <div className="text-white/40 text-[10px]">Train vs Test</div>
                  <div className="text-emerald-400 font-semibold mt-0.5">0 Collisions</div>
                </div>
                <div>
                  <div className="text-white/40 text-[10px]">Val vs Test</div>
                  <div className="text-emerald-400 font-semibold mt-0.5">0 Collisions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. 14-FEATURE EXTRACTION & IMPORTANCE ANALYSIS ── */}
      <section id="features" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-white/60 mb-3 uppercase tracking-wider">
            Feature Engineering
          </div>
          <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl mb-4">
            14-Dimensional Feature Representation
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            The mathematical input vector x ∈ ℝ¹⁴ balances instantaneous Newtonian physical plausibility against multi-hop historical reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="p-4 md:p-6 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/60">
                  Figure 3: Unified Feature Importance Distribution
                </span>
                <button
                  onClick={() =>
                    setSelectedFigure({
                      src: '/figures/unified_feature_importance.png',
                      title: 'Figure 3: Unified Feature Importance Analysis',
                      subtitle: 'Decision weights illustrating that reputation features govern 55.86% while kinematics provide the foundational 44.14%.',
                    })
                  }
                  className="text-xs text-white/50 hover:text-white flex items-center gap-1 font-mono transition-colors"
                >
                  Zoom <ExternalLink size={12} />
                </button>
              </div>
              <div
                onClick={() =>
                  setSelectedFigure({
                    src: '/figures/unified_feature_importance.png',
                    title: 'Figure 3: Unified Feature Importance Analysis',
                    subtitle: 'Decision weights illustrating that reputation features govern 55.86% while kinematics provide the foundational 44.14%.',
                  })
                }
                className="cursor-zoom-in rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center group"
              >
                <img
                  src="/figures/unified_feature_importance.png"
                  alt="Feature Importance Analysis"
                  className="w-full max-h-[380px] object-contain group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white text-base">Dynamic Trust & Reputation</h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                  55.86% Weight
                </span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Captures longitudinal behavior over time. Direct trust (T_direct: 21.4%), indirect neighborhood trust (T_indirect: 18.6%), anomaly persistence (S_persist: 9.1%), and beacon frequency (f_msg: 6.76%).
              </p>
              <div className="text-[11px] font-mono text-white/40">
                Prevents on-off oscillations and slow stealthy kinematic drifts.
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white text-base">Kinematics & Signal Layer</h3>
                <span className="text-xs font-mono text-white/80 bg-white/10 px-2 py-0.5 rounded">
                  44.14% Weight
                </span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Instantaneous Newtonian plausibility. Velocity residual |v_rep - v_est| (12.8%), spatial position deviation Δx, Δy (10.5%), longitudinal acceleration (7.9%), heading error Δθ (5.8%), and RSSI/PDR (7.64%).
              </p>
              <div className="text-[11px] font-mono text-white/40">
                Guarantees zero-lag rejection of abrupt reckless anomalies at Tier 1.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TWO-STAGE ML BENCHMARKS & EDGE EVALUATION ── */}
      <section id="models" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-white/60 mb-3 uppercase tracking-wider">
            Empirical ML Evaluation
          </div>
          <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl mb-4">
            Edge Machine Learning Benchmarks
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Rigorous comparison of classification accuracy, memory footprint, and CPU cycle execution time on automotive-grade microcontrollers.
          </p>
        </div>

        {/* Triple Benchmark Figures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              src: '/figures/unified_model_comparison.png',
              title: 'Figure 4: Unified Model Comparison',
              desc: 'Cross-model benchmark: Accuracy, Precision, Recall, and F1 across 5 architectures.',
            },
            {
              src: '/figures/adaboost_edge_analysis.png',
              title: 'Figure 5: AdaBoost Edge Dynamics',
              desc: 'Convergence curves across 50 decision stumps and tree depth hyperparameter optimization.',
            },
            {
              src: '/figures/confusion_matrix.png',
              title: 'Figure 6: Edge Normalized Confusion Matrix',
              desc: '97.45% True Positive, 1.85% False Positive Rate under full VeReMi test evaluation.',
            },
          ].map((fig, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-white/60 truncate">{fig.title}</span>
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
                  className="cursor-zoom-in rounded-xl overflow-hidden bg-black/40 border border-white/5 p-2 flex items-center justify-center mb-3 h-48"
                >
                  <img src={fig.src} alt={fig.title} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed">{fig.desc}</p>
            </div>
          ))}
        </div>

        {/* Quantitative Benchmark Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-white/50 font-mono text-[11px]">
                <th className="p-4">Classifier Model</th>
                <th className="p-4">Accuracy</th>
                <th className="p-4">Precision</th>
                <th className="p-4">Recall</th>
                <th className="p-4">F1 Score</th>
                <th className="p-4">Inference Latency</th>
                <th className="p-4">Model Size (RAM)</th>
                <th className="p-4">Automotive Suitability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] font-mono">
              <tr className="text-white/70 hover:bg-white/[0.02]">
                <td className="p-4 font-sans font-medium text-white">Logistic Regression (L2)</td>
                <td className="p-4">91.20%</td>
                <td className="p-4">91.80%</td>
                <td className="p-4">89.90%</td>
                <td className="p-4">90.84%</td>
                <td className="p-4 text-emerald-400">0.38 µs</td>
                <td className="p-4">0.8 KB</td>
                <td className="p-4 text-white/50 font-sans">Ideal Tier 1 OBU Pre-filter</td>
              </tr>
              <tr className="text-white/70 hover:bg-white/[0.02]">
                <td className="p-4 font-sans font-medium text-white">Decision Tree (CART, d=5)</td>
                <td className="p-4">93.40%</td>
                <td className="p-4">93.90%</td>
                <td className="p-4">92.30%</td>
                <td className="p-4">93.09%</td>
                <td className="p-4">1.20 µs</td>
                <td className="p-4">3.2 KB</td>
                <td className="p-4 text-white/50 font-sans">Moderate non-linear capacity</td>
              </tr>
              <tr className="text-white/70 hover:bg-white/[0.02]">
                <td className="p-4 font-sans font-medium text-white">Random Forest (100 Trees)</td>
                <td className="p-4">96.80%</td>
                <td className="p-4">97.40%</td>
                <td className="p-4">96.00%</td>
                <td className="p-4">96.70%</td>
                <td className="p-4">24.50 µs</td>
                <td className="p-4">145 KB</td>
                <td className="p-4 text-white/50 font-sans">Exceeds OBU L1 Cache limits</td>
              </tr>
              <tr className="text-white/70 hover:bg-white/[0.02]">
                <td className="p-4 font-sans font-medium text-white">XGBoost (Depth 6)</td>
                <td className="p-4">97.10%</td>
                <td className="p-4">97.60%</td>
                <td className="p-4">96.40%</td>
                <td className="p-4">97.00%</td>
                <td className="p-4">38.20 µs</td>
                <td className="p-4">210 KB</td>
                <td className="p-4 text-white/50 font-sans">Heavy floating-point demand</td>
              </tr>
              <tr className="bg-emerald-500/[0.08] text-white font-medium border-l-2 border-emerald-400">
                <td className="p-4 font-sans text-emerald-300 flex items-center gap-1.5">
                  <Zap size={14} className="text-emerald-400" />
                  AdaBoost (Our Selected Model)
                </td>
                <td className="p-4 text-emerald-300 font-bold">97.45%</td>
                <td className="p-4 text-emerald-300">98.15%</td>
                <td className="p-4 text-emerald-300">96.42%</td>
                <td className="p-4 text-emerald-300">97.28%</td>
                <td className="p-4 text-emerald-400 font-bold">5.00 µs</td>
                <td className="p-4 text-emerald-400 font-bold">12.4 KB</td>
                <td className="p-4 text-emerald-300 font-sans">Optimal Edge Sweet-Spot</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 9. THREE-STAGE ARCHITECTURAL ABLATION STUDY ── */}
      <section id="ablation" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-2">
              Systematic Isolation
            </div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Three-Stage <em className="text-white/40">Ablation Study</em>
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-sm sm:text-base">
              Does edge security truly require both machine learning AND a dynamic reputation framework? We isolated each subsystem across the full 23,970 test records to prove that neither component suffices alone.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                  <span>Stage A: Standalone ML (No Trust)</span>
                  <span className="text-red-400">FPR: 12.42%</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Lacks temporal memory. Sudden honest braking triggers frequent false alarms, disrupting downstream autonomous cruise control.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                  <span>Stage B: Standalone Trust (No ML)</span>
                  <span className="text-amber-400">Acc: 88.60%</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Vulnerable to stealthy zero-day attacks and slow adaptive drifts (&lt; 0.1 m/s) that stay inside static reputation bounds.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.04]">
                <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                  <span className="text-emerald-300 font-semibold">Stage C: EdgeTrust-VANET (Full Hybrid)</span>
                  <span className="text-emerald-400 font-bold">FPR: 1.85% (-85.1%)</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Unites instantaneous Newtonian validation with longitudinal Bayesian consensus. Achieves 97.45% accuracy and cuts Malicious Acceptance Rate to 3.58%.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-4 md:p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/60">
                  Figure 7: Ablation Study Comparison (ML vs Trust vs EdgeTrust)
                </span>
                <button
                  onClick={() =>
                    setSelectedFigure({
                      src: '/figures/ablation_study_analysis.png',
                      title: 'Figure 7: Three-Stage Architectural Ablation Analysis',
                      subtitle: 'Direct comparison demonstrating that EdgeTrust-VANET slashes false positive rate by 85.1% while maintaining peak accuracy.',
                    })
                  }
                  className="text-xs text-white/50 hover:text-white flex items-center gap-1 font-mono transition-colors"
                >
                  Zoom <ExternalLink size={12} />
                </button>
              </div>
              <div
                onClick={() =>
                  setSelectedFigure({
                    src: '/figures/ablation_study_analysis.png',
                    title: 'Figure 7: Three-Stage Architectural Ablation Analysis',
                    subtitle: 'Direct comparison demonstrating that EdgeTrust-VANET slashes false positive rate by 85.1% while maintaining peak accuracy.',
                  })
                }
                className="cursor-zoom-in rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center group"
              >
                <img
                  src="/figures/ablation_study_analysis.png"
                  alt="Ablation Study Analysis"
                  className="w-full max-h-[380px] object-contain group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="mt-4 p-4 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs font-mono text-white/70">
                <span>FPR Reduction: -85.1%</span>
                <span>MAR Reduction: -60.0%</span>
                <span className="text-emerald-400">Full Synergy Confirmed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. NETWORK SCALABILITY, DELAY & TRUST OPTIMIZATION ── */}
      <section id="scalability" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-white/60 mb-3 uppercase tracking-wider">
            Network Scalability & Robustness
          </div>
          <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl mb-4">
            High Density & Delay Sensitivity
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Evaluated under extreme wireless channel conditions: from 500 nodes/km² congested urban Manhattan grids to sparse rural highways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              src: '/figures/scalability_urban_vs_rural.png',
              title: 'Figure 8: Urban vs Rural Scalability',
              desc: 'Packet Delivery Ratio (PDR) across 100 to 500 node densities. Urban retains 67.49% PDR; Rural holds 85.21%.',
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
            <div key={idx} className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-white/60 truncate">{fig.title}</span>
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
                  className="cursor-zoom-in rounded-xl overflow-hidden bg-black/40 border border-white/5 p-2 flex items-center justify-center mb-3 h-48"
                >
                  <img src={fig.src} alt={fig.title} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed">{fig.desc}</p>
            </div>
          ))}
        </div>

        {/* Scalability Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-3 text-emerald-400">
              <Radio size={18} />
              <h3 className="font-semibold text-white text-sm">Urban Congestion Defense</h3>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              At 500 nodes/km², the 34.2% local OBU pre-filter preserves radio channel bandwidth, preventing RSU edge server packet starvation.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-3 text-emerald-400">
              <RefreshCw size={18} />
              <h3 className="font-semibold text-white text-sm">Dead-Reckoning Resilience</h3>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Intermittent cellular/DSRC drops up to 500 ms are extrapolated via vehicle kinematic states without falsely penalizing honest nodes.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-3 text-emerald-400">
              <Gauge size={18} />
              <h3 className="font-semibold text-white text-sm">Sybil Collusion Barrier</h3>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Setting α* = 0.65 ensures that direct physical sensor observations always outweigh indirect neighborhood gossip, blocking Sybil ballot stuffing.
            </p>
          </div>
        </div>
      </section>

      {/* ── 11. EMBEDDED HARDWARE FEASIBILITY ── */}
      <section id="hardware" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-2">
              Automotive Deployment
            </div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Embedded Microcontroller Feasibility
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-sm sm:text-base">
              A security architecture is useless if it cannot run on production automotive Electronic Control Units (ECUs). EdgeTrust-VANET is sized specifically for ASIL-D automotive silicon.
            </p>

            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-white">
                <span>Target Processor</span>
                <span className="text-emerald-400">ARM Cortex-R5 / NXP S32G</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-white">
                <span>Clock Speed</span>
                <span className="text-white/70">1.0 GHz Lockstep Core</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-white">
                <span>Cycle Count per Packet</span>
                <span className="text-emerald-400">~1,200 CPU Cycles</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-white">
                <span>Flash Model Storage</span>
                <span className="text-white/70">12.4 KB (L1 Cache Resident)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-white">
                <span>Working Scratchpad (RAM)</span>
                <span className="text-emerald-400">&lt; 2.0 KB</span>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed font-mono">
              ✓ Complies with SAE J2735 100ms beacon deadline with 99.98% timing margin.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <Cpu className="text-white/60 mb-3" size={24} />
                <h4 className="font-medium text-white text-base mb-1">OBU On-Board Engine</h4>
                <div className="text-[11px] font-mono text-emerald-400 mb-3">0.38 µs Inference Time</div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Logistic regression and kinematic bounds executed in fixed-point arithmetic without requiring a dedicated hardware neural accelerator.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <Server className="text-white/60 mb-3" size={24} />
                <h4 className="font-medium text-white text-base mb-1">RSU Edge Gateway</h4>
                <div className="text-[11px] font-mono text-emerald-400 mb-3">&gt;12,000 BSMs / sec</div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Single-core throughput capable of simultaneously verifying messages from over 1,200 concurrent connected vehicles within a 300m radius.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <Lock className="text-white/60 mb-3" size={24} />
                <h4 className="font-medium text-white text-base mb-1">Zero DRAM Dependency</h4>
                <div className="text-[11px] font-mono text-emerald-400 mb-3">&lt; 2 KB Stack Footprint</div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Entire model weights and state registers fit into local SRAM, preventing external bus memory latency bottlenecks.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <Activity className="text-white/60 mb-3" size={24} />
                <h4 className="font-medium text-white text-base mb-1">ASIL-D Certified Flow</h4>
                <div className="text-[11px] font-mono text-emerald-400 mb-3">ISO 26262 Deterministic</div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Bounded worst-case execution time (WCET) guarantees no non-deterministic garbage collection or unbounded loops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. DRIVER TRUST & FIELD SURVEY HIGHLIGHT ── */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-emerald-500/[0.03] backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono mb-3">
              <Users size={12} /> 150+ Verified Participants
            </div>
            <h3 className="font-instrument-serif text-3xl sm:text-4xl text-white mb-3">
              Human Trust & Driver Acceptance Survey
            </h3>
            <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
              We evaluated user acceptance across automotive engineers, researchers, and commercial drivers. 88.4% of respondents demand transparent HUD trust meters over silent automated fail-safes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              to="/survey"
              className="group flex items-center gap-2 bg-white text-black rounded-full px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-all duration-200"
            >
              Explore Survey Analytics
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 13. PAPER, BIBTEX & ARTIFACT DOWNLOAD HUB ── */}
      <section id="artifacts" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-2">
              Academic Publications
            </div>
            <h2 className="font-instrument-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Research Paper & Artifacts
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-sm sm:text-base">
              The complete research manuscript, mathematical proofs, experimental figures, and Overleaf-ready LaTeX source bundle are openly available.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href="/edgetrust_paper_latex_bundle.zip"
                download
                className="w-full flex items-center justify-between p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-xs font-mono text-white"
              >
                <div className="flex items-center gap-2.5">
                  <Download size={16} className="text-emerald-400" />
                  <span>Download Overleaf LaTeX Bundle (.ZIP)</span>
                </div>
                <span className="text-white/40">4.2 MB</span>
              </a>

              <a
                href="https://github.com/edge-trust-vanet/edgetrust-core"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-xs font-mono text-white"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon size={16} />
                  <span>Core Algorithms & LaTeX Repo</span>
                </div>
                <ExternalLink size={14} className="text-white/40" />
              </a>

              <a
                href="https://www.kaggle.com/datasets/nishanthkarthik/edgetrust-vanet-dataset"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-xs font-mono text-white"
              >
                <div className="flex items-center gap-2.5">
                  <Database size={16} className="text-emerald-400" />
                  <span>23,970 BSM Benchmark Dataset</span>
                </div>
                <ExternalLink size={14} className="text-white/40" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-white/50 flex items-center gap-2">
                  <FileText size={14} /> BibTeX Citation
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {copiedBib ? (
                    <>
                      <Check size={14} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Citation
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-black/60 border border-white/5 text-[11px] font-mono text-white/80 overflow-x-auto leading-relaxed select-all">
                {bibtexCode}
              </pre>
              <p className="mt-3 text-[11px] text-white/40 font-mono">
                Under review at IEEE Transactions on Intelligent Transportation Systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. RESEARCH TEAM & ADVISOR ── */}
      <section id="team" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-white/60 mb-3 uppercase tracking-wider">
            Department of Computer Science & Engineering
          </div>
          <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl mb-3">
            The Research Team
          </h2>
          <p className="text-white/50 font-mono text-xs tracking-wide uppercase">
            Under the supervision of <span className="text-white font-medium">Ms. Neethu M R</span>, Assistant Professor
          </p>
          <p className="text-white/40 text-xs mt-1">
            Amrita School of Computing, Amrita Vishwa Vidyapeetham
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: 'Nishanth Karthik', id: 'CB.SC.U4CSE23523', role: 'ML Architecture & Lead', img: nishanthImg },
            { name: 'Aashiq M', id: 'CB.SC.U4CSE23560', role: 'Trust Engine & Protocols', img: aashiqImg },
            { name: 'Vivek K', id: 'CB.SC.U4CSE23360', role: 'Simulation & VeReMi Scenarios', img: vivekImg },
            { name: 'Abhinav R', id: 'CB.SC.U4CSE23563', role: 'Hardware & Microcontroller Benchmarks', img: abhinavImg },
            { name: 'Mounik Sai', id: 'CB.SC.U4CSE23561', role: 'Dataset Provenance & Leakage Audit', img: mounikImg },
          ].map((member, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-white/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 text-xl font-instrument-serif overflow-hidden border border-white/20 shadow-lg">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  member.name.charAt(0)
                )}
              </div>
              <div>
                <h4 className="font-medium text-white text-sm mb-1">{member.name}</h4>
                <div className="text-[10px] text-emerald-400 font-mono mb-1">{member.role}</div>
                <p className="text-white/40 text-[10px] font-mono">{member.id}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 border-t border-white/10 text-center text-white/40 text-xs font-light">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-white font-medium">EdgeTrust-VANET</span>
            <span className="text-white/30">|</span>
            <span>Decentralized Trust for Autonomous Vehicular Networks</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="https://github.com/edge-trust-vanet" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.kaggle.com/datasets/nishanthkarthik/edgetrust-vanet-dataset" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Kaggle
            </a>
            <Link to="/survey" className="hover:text-white transition-colors">
              Survey
            </Link>
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>
        <p className="mt-8 text-[11px] text-white/30 font-mono">
          © 2026 EdgeTrust-VANET Research Initiative. Amrita Vishwa Vidyapeetham.
        </p>
      </footer>

      {/* ── HIGH RESOLUTION FIGURE LIGHTBOX MODAL ── */}
      {selectedFigure && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedFigure(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0d1017] border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <h3 className="font-instrument-serif text-xl sm:text-2xl text-white">
                  {selectedFigure.title}
                </h3>
                <p className="text-xs text-white/50 font-mono mt-0.5">
                  {selectedFigure.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedFigure(null)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center bg-black/50 rounded-2xl p-4 border border-white/5">
              <img
                src={selectedFigure.src}
                alt={selectedFigure.title}
                className="max-h-[68vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex items-center justify-between pt-4 text-xs font-mono text-white/40">
              <span>EdgeTrust-VANET Experimental Proof</span>
              <button
                onClick={() => setSelectedFigure(null)}
                className="text-white/70 hover:text-white transition-colors"
              >
                Close View (ESC)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
