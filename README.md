# EdgeTrust-VANET Web Platform

**Interactive Research Portal, Microscopic Mobility Simulation, and Architectural Documentation Platform**

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0%2B-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4%2B-38B2AC.svg)](https://tailwindcss.com/)
[![Firebase Hosting](https://img.shields.io/badge/Hosting-Firebase-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-Academic%20Research-lightgrey.svg)]()

---

## Technical Overview

`edgetrust-web` is the public-facing interactive research dissemination, simulation visualization, and documentation platform for the **EdgeTrust-VANET** project.

While the core C++ simulation engine resides in `edgetrust-core` and the model training workflows reside in `edgetrust-ml`, this web application provides researchers, evaluators, and automotive engineers with an interactive environment to explore:
1. **Real-Time Microscopic Vehicular Mobility:** A 60 FPS HTML5 Canvas engine modeling Vehicle-to-Vehicle (V2V) and Vehicle-to-Infrastructure (V2I) DSRC beacon exchanges, kinematic trajectories, and live RSU coverage fields.
2. **Four-Tier Architecture Explorer:** Deep architectural inspection of Tier 1 (OBU Kinematic Firewall), Tier 2 (RSU Edge Inference), Tier 3 (Regional Fog Consensus), and Tier 4 (SDN Adaptive Routing).
3. **17-Model Benchmark Suite:** Interactive metric filtering, latency-accuracy Pareto frontiers, and confusion matrices across 17 evaluated machine learning architectures.
4. **16-Threat Taxonomy Matrix:** Interactive classification of vehicular attack models (position spoofing, sudden stop illusions, Sybil phantom vehicles, and blackhole drops).
5. **Systematic Literature Survey Viewer:** Structured catalog and critical analysis of 285 peer-reviewed vehicular security publications.
6. **Development Engineering Log:** Chronological technical devlog documenting the progression from SUMO mobility generation to C++ inference unrolling and Veins integration.

---

## Core Capabilities and Architecture

```
edgetrust-web/src/
├── components/
│   ├── Nav.tsx               # Minimalist persistent navigation bar with route synchronization
│   └── VanetCanvas.tsx       # Microscopic mobility simulation engine (HTML5 Canvas 60 FPS)
├── pages/
│   ├── Landing.tsx           # Primary research portal, architecture explorer, benchmark suites
│   ├── Survey.tsx            # Systematic literature survey reader (285 analyzed publications)
│   ├── Blog.tsx              # Engineering devlog index with tag-based filtering
│   └── BlogPost.tsx          # Technical devlog article reader with code syntax rendering
└── data/                     # Structured JSON research benchmarks, metrics, and literature survey
```

### Microscopic Mobility Simulation (`VanetCanvas.tsx`)
The hero canvas executes a customized discrete-time kinematic mobility model:
- Renders dual-direction multi-lane arterial road networks with periodic vehicle insertion.
- Computes Euclidean distances between vehicles and roadside edge infrastructure.
- Visualizes 10 Hz DSRC 802.11p beacon broadcasts using expanding wave propagation circles.
- Dynamically highlights compromised vehicles in real time as they trigger RSU quarantine thresholds.

### Benchmark and Threat Explorer (`Landing.tsx`)
- Displays exact statistical metrics across 3,539 unseen test vehicles.
- Allows live switching between Model Families (Bagging, Boosting, Neural Networks, Linear, and Instance-Based).
- Presents comprehensive ablation study breakdowns and empirical latency trade-offs.

### Systematic Literature Survey (`Survey.tsx`)
- Categorizes 285 peer-reviewed vehicular security papers into cryptographic schemes, machine learning anomaly detectors, and behavioral trust architectures.
- Provides search, taxonomy tagging, and gap analysis for future V2X research directions.

---

## Technology Stack

- **User Interface Framework:** React 18 (Functional Components with TypeScript)
- **Application Bundler & Dev Server:** Vite 5
- **Styling Architecture:** Tailwind CSS with custom academic typography tokens
- **Routing:** React Router DOM (v6)
- **Vector Graphics & Icons:** Lucide React
- **Simulation Graphics:** Native HTML5 Canvas 2D Context
- **Deployment & Edge Delivery:** Firebase Hosting / Cloudflare Edge CDN

---

## Local Development and Deployment

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (version 18.0.0 or higher) and `npm` are installed:

```bash
node -v
npm -v
```

### 2. Repository Setup and Installation
Clone the repository and install all project dependencies:

```bash
git clone https://github.com/edge-trust-vanet/edgetrust-web.git
cd edgetrust-web
npm install
```

### 3. Running the Local Development Server
Launch Vite in development mode with Hot Module Replacement (HMR):

```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

### 4. Production Build and Type Checking
Compile TypeScript and bundle optimized static assets for production:

```bash
npm run build
```

The production-ready distribution will be generated in the `dist/` directory.

### 5. Deployment to Firebase Hosting
Deploy the build artifacts to Firebase:

```bash
firebase deploy --only hosting
```

---

## Repository Directory Structure

```
edgetrust-web/
├── README.md                            # Technical web platform documentation
├── package.json                         # Node dependencies and build scripts
├── tsconfig.json                        # TypeScript compiler configuration
├── vite.config.ts                       # Vite build configuration
├── tailwind.config.js                   # Tailwind utility tokens and palette
├── firebase.json                        # Firebase hosting and rewrite rules
├── index.html                           # Root HTML entry point
├── public/                              # Public static assets, icons, and diagrams
│   └── architecture.png                 # Reference system architecture diagram
└── src/
    ├── main.tsx                         # React application bootstrap
    ├── App.tsx                          # Route definitions and layout wrapper
    ├── index.css                        # Global CSS resets and custom scrollbars
    ├── components/
    │   ├── Nav.tsx                      # Persistent top navigation bar
    │   └── VanetCanvas.tsx              # HTML5 canvas vehicular simulation
    └── pages/
        ├── Landing.tsx                  # Research portal and interactive benchmark
        ├── Survey.tsx                   # Systematic literature survey reader
        ├── Blog.tsx                     # Technical development blog index
        └── BlogPost.tsx                 # Detailed engineering article reader
```

---

## Research Team and Institutional Affiliation

Developed as part of the **EdgeTrust-VANET** research initiative at **Amrita Vishwa Vidyapeetham, Amrita School of Computing, Coimbatore, India**:

- **Ms. Neethu M R** - *Project Guide & Assistant Professor, Department of Computer Science and Engineering*
- **Madisetty Mounik Sai** - *Undergraduate Researcher* (`CB.SC.U4CSE23561`)
- **Edavalapati Aashiq** - *Undergraduate Researcher* (`CB.SC.U4CSE23560`)
- **Chitturi Vivek Vardhan** - *Undergraduate Researcher* (`CB.SC.U4CSE23360`)
- **Nishanth K** - *Undergraduate Researcher* (`CB.SC.U4CSE23523`)
- **Juturu Naga Abhinava Sai** - *Undergraduate Researcher* (`CB.SC.U4CSE23563`)

---

## Academic Citation

```bibtex
@inproceedings{edgetrust_vanet_2026,
  author    = {Neethu, M. R. and Mounik Sai, M. and Aashiq, E. and Vivek Vardhan, C. and Nishanth, K. and Abhinav, J.},
  title     = {EdgeTrust-VANET: A Decentralized Four-Tier Hierarchical Trust Management and Kinematic Filtering Framework for Vehicular Ad-Hoc Networks},
  booktitle = {Proceedings of the IEEE International Conference on Communications (ICC) / VTC},
  year      = {2026},
  pages     = {1--8},
  address   = {Coimbatore, India}
}
```
