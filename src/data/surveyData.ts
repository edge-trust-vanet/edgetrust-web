export const meta = {
  tag: 'Comprehensive Literature Review',
  title:
    'Edge-Assisted Trust-Based Secure Communication and Road Hazard Awareness in VANETs',
  subtitle: 'A synthesis of 285 peer-reviewed publications (2014–2026)',
  pills: [
    { strong: '285', rest: 'papers reviewed' },
    { strong: '30', rest: 'top papers analysed' },
    { strong: '2014–2026', rest: 'time span' },
    { strong: 'IEEE, ACM, Springer, Elsevier', rest: 'sources' },
  ],
  guide: 'Ms Neethu M R',
  team: [
    { name: 'Mounik Sai', id: 'CB.SC.U4CSE23561' },
    { name: 'Aashiq', id: 'CB.SC.U4CSE23560' },
    { name: 'Vivek', id: 'CB.SC.U4CSE23360' },
    { name: 'Nishanth', id: 'CB.SC.U4CSE23523' },
    { name: 'Abhinav', id: 'CB.SC.U4CSE23563' },
  ],
}

export const navItems = [
  { id: 'toc', num: 'TOC', label: 'Table of Contents' },
  { id: 'abstract', num: '—', label: 'Abstract' },
  { id: 'introduction', num: '1', label: 'Introduction' },
  {
    id: 'methodology',
    num: '2',
    label: 'Search Strategy',
    sub: [
      { id: 'databases', label: '2.1 Databases' },
      { id: 'queries', label: '2.2 Keywords' },
      { id: 'inclusion', label: '2.3 Inclusion Criteria' },
      { id: 'exclusion', label: '2.4 Exclusion Criteria' },
      { id: 'results', label: '2.5 Search Results' },
    ],
  },
  { id: 'summary', num: '3', label: 'Summary Table' },
  { id: 'annotation', num: '4', label: 'Annotated Bibliography' },
  {
    id: 'thematic',
    num: '5',
    label: 'Thematic Synthesis',
    sub: [
      { id: 'trust-models', label: '5.1 Trust Models' },
      { id: 'misbehavior-detection', label: '5.2 Misbehavior Detection' },
      { id: 'edge-rsu', label: '5.3 Edge/RSU Architectures' },
      { id: 'sdn-resilience', label: '5.4 SDN Resilience' },
      { id: 'sensor-pothole', label: '5.5 Pothole Detection' },
      { id: 'simulation', label: '5.6 Simulation & Datasets' },
    ],
  },
  { id: 'ml-comparison', num: '6', label: 'ML Approaches' },
  { id: 'datasets-tools', num: '7', label: 'Datasets & Tools' },
  { id: 'gaps', num: '8', label: 'Gaps & Open Problems' },
  { id: 'research-questions', num: '9', label: 'Research Questions' },
  { id: 'experimental', num: '10', label: 'Experimental Design' },
]

export const abstract = [
  'This literature review synthesizes 285 peer-reviewed publications (2014–2026) on edge-assisted, trust-adaptive misbehavior detection and trusted event dissemination in Vehicular Ad Hoc Networks (VANETs). The review examines trust management models, machine learning-based misbehavior detection, edge/RSU architectures, SDN integration, sensor-based hazard detection, and simulation methodologies.',
  'Key findings reveal that hybrid trust models combining direct observation and indirect reputation achieve 86–95% detection accuracy, while federated learning and blockchain approaches address privacy concerns. However, significant gaps persist in real-world validation, lightweight edge-deployable ML models, adaptive trust mechanisms for dynamic attack scenarios, and integrated frameworks combining trust management with secure event dissemination.',
  'This review identifies critical research opportunities in RSU misbehavior detection, SDN-based resilient control planes, and sensor-fusion approaches for pothole detection, providing a roadmap for developing comprehensive VANET security solutions.',
]

export const introduction = [
  'Vehicular Ad Hoc Networks (VANETs) form the communication backbone of Intelligent Transportation Systems (ITS), enabling vehicles to exchange safety-critical information about accidents, congestion, road hazards, and emergency events. However, the open and dynamic nature of VANETs exposes them to diverse security threats, including false data injection, Sybil attacks, message replay, selfish forwarding, and compromised infrastructure nodes. These attacks can have catastrophic consequences, from traffic disruptions to life-threatening accidents.',
  'Trust management and misbehavior detection have emerged as essential security mechanisms to ensure the reliability of disseminated information. Traditional centralized approaches face scalability challenges in highly mobile networks with thousands of vehicles. Recent advances in edge computing, where Roadside Units (RSUs) provide computational resources near the network edge, offer promising solutions for real-time, low-latency misbehavior detection. Additionally, Software-Defined Networking (SDN) architectures enable flexible, programmable control planes that can adapt to evolving attack patterns.',
  'This comprehensive literature review examines the state-of-the-art in edge-assisted, trust-adaptive misbehavior detection and trusted event dissemination in VANETs. We analyze 285 publications spanning trust models, machine learning techniques, edge architectures, SDN integration, sensor-based hazard detection, and simulation methodologies. Our goal is to identify effective approaches, highlight critical gaps, and provide a concrete roadmap for developing integrated VANET security solutions that combine trust management, misbehavior detection, and secure event dissemination.',
]

export const methodology = {
  databases: [
    { name: 'SciSpace', desc: 'Deep search, paper search, and full-text search capabilities' },
    { name: 'Google Scholar', desc: 'Broad coverage of academic publications' },
    { name: 'ArXiv', desc: 'Preprints and recent research' },
  ],
  queryGroups: [
    {
      label: 'Core Security Queries',
      queries: [
        'edge-assisted trust-adaptive misbehavior detection VANETs',
        'trust management + misbehavior detection + edge computing + VANETs',
        'trust-based misbehavior + edge/RSU + VANETs',
        'edge-assisted trust management + VANETs',
      ],
    },
    {
      label: 'ML and Detection Queries',
      queries: ['ML/anomaly detection + VANETs + misbehavior', 'machine learning misbehavior detection VANETs'],
    },
    {
      label: 'Infrastructure Queries',
      queries: ['SDN in VANETs + security', 'SDN controller placement + vehicular networks', 'SDN vehicular networks'],
    },
    {
      label: 'Sensor and Application Queries',
      queries: [
        'pothole detection + sensors + accelerometer/IMU',
        'pothole detection + ML + sensors',
        'sensor-based pothole detection',
      ],
    },
    {
      label: 'Simulation Queries',
      queries: ['VANET simulation tools + SUMO + OMNeT++/Veins', 'simulation with attack datasets + VANETs'],
    },
  ],
  inclusion: [
    'Publication Type: Peer-reviewed journal articles, conference proceedings, or high-quality arXiv preprints',
    'Venues: IEEE, ACM, Springer, Elsevier, and other reputable publishers',
    'Time Period: Published between 2014 and 2026',
    'Validation: Included experimental, simulation, or emulation validation (not purely theoretical)',
    'Relevance: Addressed at least one core topic area (trust management, misbehavior detection, edge computing, SDN, sensor-based detection, or simulation methodologies)',
  ],
  exclusion: [
    'Lacked experimental or simulation validation',
    'Were purely theoretical without practical implementation considerations',
    'Focused exclusively on cryptographic protocols without trust or detection mechanisms',
    'Were not available in English',
    'Were duplicate publications or earlier versions of included papers',
  ],
  results: {
    retrieved: '1,213 papers across all databases',
    dedup: '285 unique papers',
    final: 'Top 30 papers ranked by relevance',
    note: 'The final merged dataset was reranked based on relevance to all specified topic areas with experimental validation, ensuring comprehensive coverage of edge-assisted trust management, misbehavior detection, SDN integration, sensor-based hazard detection, and simulation methodologies.',
  },
}

export const summaryTableColumns = [
  '#',
  'Author/Ref',
  'Year',
  'Venue',
  'Problem Addressed',
  'Method/Approach',
  'Validation/Dataset',
  'Key Results',
  'Strengths',
  'Limitations',
]

export const summaryTable: string[][] = [
  ['6', 'Junejo et al. [6]', '2020', 'Scientific Programming', 'Identifying dishonest nodes, credential revocation in MiTM attacks', 'Lightweight trust model: 5 parameters (location, integrity, authentication, timestamp, peer alert), RSUs as trusted sources', 'SUMO + OMNeT++ + VEINS, OpenStreetMap', '95% F-score with 40% MiTM attackers vs. 90% for MARINE', 'Privacy-preserving pseudonym scheme, lightweight design', 'Simulation-only validation'],
  ['7', 'Abhishek et al. [7]', '2019', 'ICC China', 'RSU misbehavior causing packet corruption/dropping', 'Trust-based detection: vehicle feedback to central server, aggregated trust values, threshold-based classification', 'Not specified', 'Demonstrates effectiveness, adversary parameter impact', 'Addresses RSU compromise, includes malicious vehicle detection', 'Central server dependency, scalability concerns'],
  ['8', 'HDRS [8]', '2022', 'IEEE Trans. ITS', 'Detecting malicious vehicles, vulnerabilities in traditional reputation schemes', 'Hybrid reputation system: separate vehicle/RSU evaluations, reliability filtering, dynamic update intervals (AHP)', 'Simulation results', '30% increase in collusion detection, 16% increase in intelligent attack detection', 'Novel hybrid approach, dynamic adaptation', 'Specific simulators not mentioned'],
  ['9', 'Lam et al. [9]', '2024', 'IEEE IoT Journal', 'Data hijacking and interception, trust management', 'MEFPB: Dempster-Shafer fusion of direct/indirect trust and transmission path, path-backtracking mechanism', 'Not specified', 'High malicious behavior detection rate', 'Novel transmission path indicator, multidimensional fusion', 'Computational complexity not addressed'],
  ['10', 'Siddiqua et al. [10]', '2022', 'JASBS', 'Malicious RSU detection in edge-enabled VANETs', 'Trust-based scheme: stable R2R interaction, sensor data alteration detection', 'SUMO + NetEdit + NS-3, 25 RSUs, 500 vehicles, 14×14 km', '92% recall, 86% accuracy, FPR up to 30%', 'R2R interaction analysis, sensor data validation', 'High FPR, cannot exclude malicious RSUs from network'],
  ['11', 'Zhang et al. [11]', '2019', 'IEEE Access', 'Trust-based multiservice delivery with misbehavior tolerance', 'Fog computing for dynamic trust weights, differential resource allocation, trust-aware traffic allocation', 'Extensive simulations', '12–40% higher successful delivery, 10–20% higher network utility', 'Integrated detection and tolerance, fog-enabled', 'Fog infrastructure requirements not detailed'],
  ['12', 'Nagaraju [12]', 'N/A', 'N/A', 'RSU misbehavior detection', 'Trust-based model', 'Not specified', 'Limited results', 'Addresses RSU misbehavior', 'Lacks ML, secure dissemination, SDN integration'],
  ['13', 'Siddiqua et al. [13]', '2022', 'arXiv', 'Malicious RSU detection in edge-enabled VANETs', 'R2R interaction, sensor data alteration detection', 'SUMO + NetEdit + NS-3, 25 RSUs, 500 vehicles', '92% recall, 86% accuracy', 'Robust sensor data validation', 'FPR up to 30%, persistent congestion from beacon flooding'],
  ['14', 'Shahariar et al. [14]', '2024', 'IJACSA', 'Untrue attacks by trusted drivers, fixed reward/punishment limitations', 'Fuzzy RSU controller: incident severity, driver history, RSU confidence; Markov chain for lying behavior', 'Veins simulator', 'Encourages driver behavior improvement', 'Dynamic fuzzy assessment, behavioral modeling', 'Simulation-only, lacks lightweight ML'],
  ['15', 'Roy et al. [15]', '2019', 'N/A', 'Inaccurate information, malicious vehicles disrupting traffic monitoring', 'Edge cloud-based privacy-preserving model: heuristic using GPS and velocity', 'VENTOS + SUMO + OMNeT++, simulated cloud', 'Effective malicious vehicle filtering', 'Edge cloud integration, privacy preservation', 'Requires at least one non-malicious vehicle in ROI'],
  ['16', 'Liu et al. [16]', '2021', 'WASA', 'Cyber attacks due to large attack surfaces, time-space limitations in edge computing', 'DITVEN: digital twin vehicular edge network, distributed trust evaluation, time/space-aware anomaly detection', 'Not specified', 'Not specified', 'Digital twin approach, distributed trust, time/space aware', 'Limitations not stated in metadata'],
  ['17', 'Paranjothi [17]', 'N/A', 'N/A', 'Rogue node detection and prevention', 'On-demand IDS, stochastic SUMO simulation', 'SUMO with randomness', 'Not specified', 'Stochastic simulation for realism', 'Lacks trust-adaptive mechanisms, ML, SDN'],
  ['18', 'Amari et al. [18]', '2023', 'IEEE Access', 'Efficient and robust trust management in VANETs', 'Extensive survey: classification and comparison of trust approaches', 'Survey paper', 'Comprehensive overview', 'Extensive classification, identifies challenges', 'Survey paper, not primary research contribution'],
  ['19', 'Siddiqua et al. [19]', '2022', 'arXiv', 'Malicious RSU detection', 'Trust-based mechanism: R2R interaction', 'SUMO + NS-3', '92% recall, 86% accuracy', 'R2R analysis', 'High FPR, cannot exclude malicious RSUs'],
  ['20', 'CARES [20]', '2022', 'ACM Trans. Internet Tech.', 'Malicious vehicles propagating false information in crowdsensing', 'Context-aware trust estimation: transfer learning for quick trust values, Q-learning for dynamic adjustment', 'Extensive simulation', 'Outperforms existing schemes in detection accuracy', 'Transfer learning for quick adaptation, Q-learning for dynamics', 'Simulation-only validation'],
  ['21', 'Almaziad et al. [21]', '2025', 'Procedia CS', 'Hybrid trust management VANET', 'VANETGuard system', 'Not specified', 'Not specified', 'Hybrid approach', 'Details not available in metadata'],
  ['22', 'Alkhalidy et al. [22]', '2022', 'Future Internet', 'False emergency alerts, malicious node detection', 'Fuzzy logic model with multiple factors, RSU-managed clusters', 'Simulations', 'Detects and evicts all malicious nodes over time, increases success rate to ideal levels', 'Fuzzy logic for trust evaluation, RSU cluster management', 'Simulation-only, time to full detection not specified'],
  ['23', 'Yang et al. [23]', '2016', 'Mobile Info. Systems', 'Anomaly detection in IV collaboration', 'Trust-based scheme with affinity propagation, cluster heads for intracluster management, distributed supervising, central arbitrator', 'Not specified', '<1% detection failure rate', 'Low failure rate, distributed + central hybrid', 'Older work (2016), limited edge computing focus'],
  ['24', 'Gupta et al. [24]', '2023', 'Wireless Personal Comm.', 'Malicious node detection', 'Enhanced beacon trust management with clustering protocol (EBTM-CP)', 'Not specified', 'Not specified', 'Beacon-based trust, clustering', 'Details not available in metadata'],
  ['25', 'Abhishek et al. [25]', '2022', 'J. Comm. Networks', 'Adversaries compromising RSUs, selective packet dropping/corruption', 'Trust-based detection: vehicles report uplink/downlink trust to RSU gateway, threshold-based classification', 'MATLAB simulations', 'Demonstrates detection performance and adversary parameter impact', 'Addresses RSU compromise, uplink/downlink trust separation', 'MATLAB-only, not integrated with realistic VANET simulators'],
  ['26', 'Siddiqua et al. [26]', '2025', 'JASBS', 'Malicious RSU detection', 'Trust-based mechanism', 'Not specified', '92% detection', 'R2R interaction', 'Details not fully available'],
  ['27', 'Sedar [27]', '2024', 'Dissertation', 'Misbehavior detection and trustworthy collaboration', 'Dissertation research', 'Not specified', 'Not specified', 'Comprehensive research', 'Dissertation, not peer-reviewed journal'],
  ['28', 'Blockchain FL [28]', '2022', 'IEEE Trans. Network Service Mgmt.', 'Dishonest vehicles transmitting false information, privacy in centralized ML', 'Blockchain-based federated learning, differential privacy (Gaussian mechanism)', 'Not specified', 'Satisfied accuracy and efficiency', 'Privacy-preserving FL, blockchain integration', 'Blockchain overhead, FL convergence time'],
  ['29', 'Eunice et al. [29]', '2019', 'IJACSA', 'Secured multi-hop clustering and routing', 'Location-based routing protocol', 'Not specified', 'Not specified', 'Multi-hop clustering', 'Limited focus on misbehavior detection'],
  ['30', 'Haydari et al. [30]', '2022', 'Sensors', 'False data injection and stealthy DDoS attacks', 'RSU-based online IDS: novel ML techniques for centralized detection and mitigation', 'Traffic simulator, real traffic dataset', '78% improvement (best case), 27% improvement (worst case) vs. state-of-the-art', 'Superior detection and localization, real dataset validation', 'Centralized RSU approach, scalability not addressed'],
]

export const bibliography = [
  { id: '4.1', title: 'Tariq et al. (2025) – D-CASBR Framework [1]', year: '2025', venue: 'World Electric Vehicle Journal', tag: 'ML + Blockchain + Fog', body: 'This paper proposes the D-CASBR (Decentralized Consortium Authentication and Security-Based Reputation) framework for V2X networks, integrating hybrid machine learning (ElasticNet and Gradient Boosting) for real-time anomaly detection, consortium blockchain for secure information exchange, and a fog-enabled reputation system for trust management. The framework achieves 95% anomaly detection accuracy with minimal false positives, addressing latency issues and eliminating single points of failure.', relevance: 'Provides a comprehensive framework integrating ML-based detection, blockchain-based trust, and fog/edge computing — all core components of our proposed system.' },
  { id: '4.2', title: 'Zheng et al. (2024) – 2PT-CIDS [2]', year: '2024', venue: 'IEEE Trans. ITS', tag: 'Game Theory + Deep RL', body: 'Zheng et al. address the dual challenges of rapid anomaly detection and privacy-preserving notification in VANETs through their two-layer privacy-aware trust evaluation CIDS framework (2PT-CIDS). The system employs game-theoretic information incentive mechanisms (Stackelberg and noncooperative games) and reinforcement learning (reward-shaping double duelling deep Q network, D3QN) to prevent privacy leakage while enhancing detection.', relevance: 'Demonstrates advanced privacy-preserving mechanisms for collaborative detection, addressing a critical concern in trust-based systems.' },
  { id: '4.3', title: 'Misbehavior Detection Survey (2022) [3]', year: '2022', venue: 'Research Square', tag: 'Survey', body: 'This comprehensive survey classifies misbehavior detection schemes for VANETs based on architecture (centralized, distributed, hybrid), approach (cryptographic, trust-based, ML-based), and data characteristics. It highlights that machine learning techniques, particularly using the VeReMi dataset, achieve high accuracy (97–99% for various classifiers), but most techniques lack real-time implementation and suffer from communication overhead due to digital signatures and certificates.', relevance: 'Provides a comprehensive taxonomy of existing approaches, identifies critical gaps (real-time implementation, overhead reduction), and validates the importance of ML-based detection methods.' },
  { id: '4.4', title: 'Zhang et al. (2021) – AIT System [4]', year: '2021', venue: 'IEEE IoT Journal', tag: 'Deep Learning + Blockchain', body: 'The AIT (AI-enabled Trust Management) system combines deep learning for vehicle trust management with blockchain technology for validating reports and enabling RSU-based revocation of untrustworthy vehicles. Experimental results show AIT outperforms existing approaches in accuracy and efficiency.', relevance: 'Demonstrates the integration of AI/deep learning with blockchain for trust management and RSU-based enforcement.' },
  { id: '4.5', title: 'Ahmed et al. (2022) – Blockchain-Based Trust Management [5]', year: '2022', venue: 'IET Networks', tag: 'Blockchain + Trust', body: 'Ahmed et al. propose a blockchain-based authentication scheme to protect vehicle identity privacy and a trust management model that evaluates both vehicle and data trustworthiness to detect false information. Simulation validation shows better performance than state-of-the-art models in identifying malicious vehicles.', relevance: 'Addresses both authentication and trust management with blockchain, providing insights into privacy-preserving identity management and dual-layer trust evaluation.' },
  { id: '4.6', title: 'Junejo et al. (2020) – Lightweight Trust Model [6]', year: '2020', venue: 'Scientific Programming', tag: 'Lightweight Trust + SUMO/OMNeT++', body: 'This work proposes a lightweight, attack-resistant trust model using a pseudonym scheme for privacy preservation, evaluating five parameters (Location Closeness, Data Integrity, Authentication, Time Stamp Verification, Peer Alert Message). Evaluated with SUMO/OMNeT++/VEINS and OpenStreetMap, achieves a 95% F-score with 40% MiTM attackers, outperforming MARINE (90%).', relevance: 'Demonstrates a practical, lightweight trust model validated with realistic simulation tools.' },
  { id: '4.7', title: 'Abhishek et al. (2019) – RSU Misbehavior Detection [7]', year: '2019', venue: 'ICC China', tag: 'RSU Trust + Threshold', body: 'Addresses detecting compromised RSUs via a trust-based system collecting vehicle feedback about RSU behavior, aggregating trust values centrally for threshold-based classification, plus detection of vehicles reporting false feedback.', relevance: 'Directly addresses RSU misbehavior detection, a critical gap in most VANET security research that focuses primarily on vehicle misbehavior.' },
  { id: '4.8', title: 'HDRS (2022) – Hybrid Reputation System [8]', year: '2022', venue: 'IEEE Trans. ITS', tag: 'Hybrid Reputation + AHP', body: 'Allows separate evaluations by vehicles and RSUs, incorporates a reliability evaluation module, and dynamically adjusts reputation update intervals via AHP and reliability. Increases collusion-attack detection by 30% and intelligent-attack detection by 16%.', relevance: 'Introduces dynamic adaptation mechanisms for reputation updates — a key requirement for trust-adaptive systems.' },
  { id: '4.9', title: 'Lam et al. (2024) – MEFPB Scheme [9]', year: '2024', venue: 'IEEE IoT Journal', tag: 'Dempster-Shafer + Path Backtracking', body: 'Uses Dempster-Shafer theory to fuse direct trust, indirect trust, and message transmission path as trust indicators, plus a path-backtracking mechanism to trace malicious behaviors.', relevance: 'Introduces a novel trust indicator (transmission path) and a mechanism for tracing attack sources, valuable for forensic analysis and adaptive response.' },
  { id: '4.10', title: 'Siddiqua et al. (2022) – Malicious RSU Detection [10]', year: '2022', venue: 'JASBS', tag: 'R2R Interaction + NS-3', body: 'Proposes a trust-based scheme detecting malicious RSUs using stable, frequent RSU-to-RSU interaction and sensor-data alteration detection. Evaluated with SUMO/NetEdit/NS-3 (25 RSUs, 500 vehicles, 14×14 km): 92% recall, 86% accuracy, FPR up to 30%.', relevance: 'Provides detailed simulation setup and quantitative results for RSU misbehavior detection across varying percentages of malicious RSUs and vehicles.' },
  { id: '4.11', title: 'Zhang et al. (2019) – Fog-Enabled Multiservice Delivery [11]', year: '2019', venue: 'IEEE Access', tag: 'Fog Computing + Trust-Aware Routing', body: 'Investigates trust-based multiservice delivery in fog-enabled VANETs with integrated misbehavior detection and tolerance, using dynamic trust weights and trust-aware heterogeneous traffic allocation. Achieves 12–40% higher successful service delivery and 10–20% higher network utility.', relevance: 'Demonstrates fog/edge computing integration with trust-based service delivery and misbehavior tolerance.' },
  { id: '4.12', title: 'Shahariar et al. (2024) – Fuzzy Reward and Punishment [14]', year: '2024', venue: 'IJACSA', tag: 'Fuzzy Logic + Markov Chain', body: 'Addresses "untrue attacks" by trusted drivers via a fuzzy RSU controller determining rewards/punishments from incident severity, driver history, and RSU confidence, with a Markov chain modeling lying behavior. Evaluated with Veins.', relevance: 'Introduces behavioral modeling and adaptive incentive mechanisms that can encourage honest reporting.' },
  { id: '4.13', title: 'Roy et al. (2019) – Edge Cloud-Based Traffic Monitoring [15]', year: '2019', venue: 'N/A', tag: 'Edge Cloud + Privacy Preservation', body: 'Proposes an edge cloud-based, privacy-preserving decision-making model using a GPS/velocity heuristic to filter malicious vehicles. Validated with VENTOS, SUMO, and OMNeT++ over a simulated cloud.', relevance: 'Provides a practical heuristic for data validation using GPS and velocity information.' },
  { id: '4.14', title: 'Liu et al. (2021) – Digital Twin Vehicular Edge Network [16]', year: '2021', venue: 'WASA', tag: 'Digital Twin + Edge AI', body: 'Proposes DITVEN, a digital twin vehicular edge network addressing time-space limitations in edge computing via distributed trust evaluation and time/space-aware anomaly detection (reachability density, outlier factor, curl/divergence).', relevance: 'Offers a novel digital-twin architectural approach for edge-assisted detection.' },
  { id: '4.15', title: 'CARES (2022) – Context-Aware Trust Estimation [20]', year: '2022', venue: 'ACM Trans. Internet Tech.', tag: 'Transfer Learning + Q-Learning', body: 'Uses transfer learning to quickly obtain accurate trust values without prior vehicle knowledge, plus Q-learning-based dynamic adjustment to detect malicious vehicles and filter untrustworthy input. Outperforms existing schemes.', relevance: 'Demonstrates transfer learning and reinforcement learning for adaptive trust estimation in crowdsensing scenarios.' },
  { id: '4.16', title: 'Alkhalidy et al. (2022) – Fuzzy Logic Malicious Node Detection [22]', year: '2022', venue: 'Future Internet', tag: 'Fuzzy Logic + RSU Clusters', body: 'Proposes a fuzzy logic model evaluating node trust across multiple factors; vehicles are organized into RSU-managed clusters that assess node credibility and evict malicious nodes over time.', relevance: 'Provides an alternative to probabilistic trust models via fuzzy logic and RSU-based cluster management.' },
  { id: '4.17', title: 'Yang et al. (2016) – Affinity Propagation for Anomaly Detection [23]', year: '2016', venue: 'Mobile Info. Systems', tag: 'Clustering + Distributed Supervision', body: 'Introduces a trust-based anomaly detection scheme using affinity propagation clustering, cluster heads for intracluster trust, a distributed supervising mechanism, and a central reputation arbitrator. Achieves <1% detection failure rate.', relevance: 'Provides insights into clustering-based trust management with distributed supervision and central arbitration.' },
  { id: '4.18', title: 'Abhishek et al. (2022) – Trust-Based Adversary Detection in Edge Computing [25]', year: '2022', venue: 'J. Comm. Networks', tag: 'RSU Gateway + Uplink/Downlink Trust', body: 'Addresses adversaries compromising RSUs via selective packet dropping/corruption, using vehicle-reported uplink/downlink trust values aggregated at the RSU gateway for threshold-based classification. Validated with MATLAB simulations.', relevance: 'Separates uplink/downlink trust evaluation, offering insights into fine-grained trust assessment.' },
  { id: '4.19', title: 'Blockchain-Based Federated Learning (2022) [28]', year: '2022', venue: 'IEEE Trans. Network Service Mgmt.', tag: 'Federated Learning + Differential Privacy', body: 'Proposes a blockchain-based federated learning scheme for misbehavior detection with differential privacy (Gaussian mechanism) for strict privacy protection, achieving satisfied accuracy and efficiency for common data falsification attacks.', relevance: 'Addresses privacy-preserving collaborative learning by combining blockchain with federated learning.' },
  { id: '4.20', title: 'Haydari et al. (2022) – RSU-Based Online IDS [30]', year: '2022', venue: 'Sensors', tag: 'Online ML + Real Traffic Dataset', body: 'Proposes RSU-based online intrusion detection/mitigation for false data injection and stealthy DDoS attacks. Evaluated with a traffic simulator and real traffic dataset, achieving 78% improvement (best case) and 27% (worst case) vs. state-of-the-art.', relevance: 'Demonstrates superior detection performance with real dataset validation, informing ML-based online detection at RSUs.' },
]

export const themes = [
  { id: 'trust-models', num: '5.1', title: 'Trust Models', points: [
    { label: 'Direct Trust Models', body: 'Compute trust based on direct observations of node behavior. Junejo et al. [6] propose a five-parameter trust estimation model. Direct trust models offer simplicity and low overhead but are limited by sparse interactions in highly mobile VANETs.' },
    { label: 'Indirect Trust Models (Reputation-Based)', body: 'HDRS [8] implements a hybrid approach with separate vehicle/RSU evaluations and a reliability filter, achieving 30% higher collusion detection and 16% higher intelligent-attack detection.' },
    { label: 'Multidimensional Trust Fusion', body: 'Lam et al. [9] propose MEFPB using Dempster-Shafer theory to fuse direct trust, indirect trust, and transmission path, enabling path-backtracking for malicious behavior tracing.' },
    { label: 'Context-Aware Trust', body: 'CARES [20] introduces context-aware trust estimation using transfer learning and Q-learning-based dynamic adjustment for autonomous malicious-vehicle detection.' },
    { label: 'Blockchain-Based Trust', body: 'Zhang et al. [4] combine deep learning with blockchain for RSU-based revocation; Ahmed et al. [5] propose blockchain authentication with a dual vehicle/data trust model.' },
    { label: 'Fuzzy Logic Trust', body: 'Alkhalidy et al. [22] employ fuzzy logic in RSU-managed clusters; Shahariar et al. [14] propose a fuzzy RSU controller for reward/punishment based on incident severity and driver history.' },
  ], finding: 'Hybrid trust models combining direct observation with indirect reputation achieve the highest detection rates (86–95% accuracy). Dynamic adaptation mechanisms (HDRS, CARES) significantly improve resilience against intelligent and collusion attacks, but most models lack real-world validation.' },
  { id: 'misbehavior-detection', num: '5.2', title: 'Misbehavior Detection Methods', points: [
    { label: 'Machine Learning-Based Detection', body: 'Survey [3] finds ML techniques achieve 97–99% accuracy on VeReMi (MA-CIDS/RF ≈97%, CIDS/SVM ≈99% F-measure). Haydari et al. [30] achieve 78% improvement over SOTA for false data injection and stealthy DDoS.' },
    { label: 'Deep Learning Approaches', body: 'Zhang et al. [4] use deep learning for trust management (AIT); Zheng et al. [2] integrate D3QN in 2PT-CIDS for privacy-aware anomaly detection.' },
    { label: 'Federated Learning for Privacy-Preserving Detection', body: 'Blockchain-based FL [28] enables collaborative training across distributed edge devices with Gaussian-mechanism differential privacy.' },
    { label: 'Hybrid ML Approaches', body: 'Tariq et al. [1] integrate ElasticNet and Gradient Boosting in D-CASBR, achieving 95% accuracy with minimal false positives.' },
  ], finding: 'ML-based detection consistently outperforms rule-based approaches, but real-time, edge-deployable lightweight variants remain underexplored.' },
  { id: 'edge-rsu', num: '5.3', title: 'Edge/RSU Architectures', points: [
    { label: 'RSU as Trust Anchor', body: 'Multiple works (Junejo et al. [6], Abhishek et al. [7], [25]) rely on RSUs as trusted infrastructure aggregating vehicle-reported trust values.' },
    { label: 'Fog-Enabled Architectures', body: 'Zhang et al. [11] use fog computing for dynamic trust weights and differential resource allocation; Tariq et al. [1] combine fog with blockchain for reputation management.' },
    { label: 'RSU Misbehavior', body: 'RSU compromise detection remains comparatively underexplored versus vehicle misbehavior detection, despite RSUs being trusted infrastructure nodes ([7], [10], [13], [25]).' },
  ], finding: 'Edge/RSU architectures reduce latency versus centralized cloud approaches, but RSU-to-RSU (R2R) collaborative validation is still an emerging technique.' },
  { id: 'sdn-resilience', num: '5.4', title: 'SDN Resilience', points: [
    { label: 'Programmable Control Planes', body: 'SDN is proposed as a way to enable dynamic security policy adaptation in response to evolving attack patterns, though direct integration with trust management is rare in the corpus.' },
    { label: 'Controller Placement & Resilience', body: 'Controller placement strategy (centralized vs. distributed) and Byzantine fault tolerance for SDN controllers are identified as open areas requiring further investigation.' },
  ], finding: 'SDN-VANET security integration is a comparatively young sub-area, with an identified gap around adaptive, attack-aware policy enforcement.' },
  { id: 'sensor-pothole', num: '5.5', title: 'Pothole Detection', points: [
    { label: 'Sensor-Based Approaches', body: 'Accelerometer/IMU-based pothole detection is significantly underrepresented in the corpus relative to trust/misbehavior-detection literature.' },
    { label: 'Validation Challenges', body: 'Sensor noise, calibration differences across vehicle types, and distinguishing genuine hazards from other irregularities are cited as open challenges.' },
  ], finding: 'Sensor-fusion (accelerometer + IMU + GPS + camera) combined with trust-based validation of crowd-sourced hazard reports is identified as a promising, underexplored direction.' },
  { id: 'simulation', num: '5.6', title: 'Simulation & Datasets', points: [
    { label: 'Simulator Stack', body: 'SUMO, OMNeT++, VEINS, and NS-3 dominate the corpus, frequently combined (e.g., SUMO + OMNeT++ + VEINS + OpenStreetMap in [6]).' },
    { label: 'Dataset Scarcity', body: 'VeReMi is the primary labeled benchmark; real-world traffic-trace validation ([30]) is rare across the reviewed works.' },
  ], finding: 'The field leans heavily on synthetic, simulation-generated data — real-world dataset scarcity is one of the most consistently cited limitations.' },
]

export const mlComparisonNote =
  'Machine learning techniques applied across the corpus range from classical classifiers (Random Forest, SVM) on the VeReMi dataset achieving 97–99% accuracy, to reinforcement learning (D3QN in 2PT-CIDS [2]), transfer learning + Q-learning (CARES [20]), and privacy-preserving federated learning [28]. Hybrid ML (ElasticNet + Gradient Boosting) in D-CASBR [1] achieves 95% accuracy with minimal false-positive rate. RSU-based online IDS [30] validated on real traffic data delivers up to 78% improvement over prior state-of-the-art.'

export const baselines = [
  'Random Forest & SVM on VeReMi Dataset [3]: Standard benchmarks achieving 97–99% accuracy.',
  'Hybrid ML (ElasticNet + Gradient Boosting) [1]: D-CASBR achieving 95% accuracy with minimal FPR.',
  'Federated Learning with Differential Privacy [28]: Baseline for privacy-preserving collaborative detection.',
  'Transfer Learning + Q-Learning (CARES) [20]: Baseline for adaptive context-aware detection.',
  'Real Dataset Validation [30]: Baseline for real-world performance assessment.',
]

export const featureEngineering = [
  { label: 'Behavioral Features', body: 'Message frequency, response patterns, cooperation levels' },
  { label: 'Spatial Features', body: 'Location consistency, proximity to reported events, movement patterns' },
  { label: 'Temporal Features', body: 'Timestamp verification, message freshness, historical behavior' },
  { label: 'Network Features', body: 'Packet loss rates, latency, retransmission patterns' },
  { label: 'Trust Features', body: 'Direct trust scores, indirect reputation, aggregated trust values' },
  { label: 'Sensor Features', body: 'GPS accuracy, velocity consistency, sensor data integrity' },
]

export const metricsSummary = [
  'Accuracy: 86–99% across approaches',
  'Precision: 86–97%',
  'Recall/Detection Rate: 92–97%',
  'F-score: 95–99%',
  'False Positive Rate: Up to 30%',
  'Detection Failure Rate: <1% to 14%',
]

export const datasets = [
  { name: 'VeReMi', desc: 'Vehicular Reference Misbehavior Dataset with labeled attack scenarios', access: 'veremi-dataset.github.io', use: 'ML-based misbehavior detection, classifier training', papers: '[3]' },
  { name: 'Real Traffic Dataset', desc: 'Real-world traffic patterns (specific dataset not named)', access: 'Not publicly specified', use: 'Validation with realistic traffic', papers: '[30]' },
  { name: 'OpenStreetMap', desc: 'Real-world road network data', access: 'openstreetmap.org', use: 'Realistic road topology for SUMO simulations', papers: '[6]' },
]

export const simTools = [
  { name: 'SUMO', desc: 'Simulation of Urban Mobility – microscopic traffic simulator', access: 'eclipse.org/sumo', papers: '[6], [10], [13], [15], [17]' },
  { name: 'OMNeT++', desc: 'Discrete event network simulator', access: 'omnetpp.org', papers: '[6], [15]' },
  { name: 'VEINS', desc: 'Vehicles in Network Simulation – VANET extension for OMNeT++', access: 'veins.car2x.org', papers: '[6], [14]' },
  { name: 'NS-3', desc: 'Network Simulator 3 – discrete-event network simulator', access: 'nsnam.org', papers: '[10], [13]' },
  { name: 'VENTOS', desc: 'VEhicular NeTwork Open Simulator – integrated VANET simulator', access: 'VENTOS GitHub', papers: '[15]' },
  { name: 'NetEdit', desc: 'Visual editor for SUMO road networks', access: 'Included with SUMO', papers: '[10], [13]' },
  { name: 'MATLAB', desc: 'Numerical computing environment', access: 'mathworks.com', papers: '[25]' },
]

export const gaps = [
  { n: 1, title: 'Real-World Validation', body: 'Most approaches rely on simulation with synthetic data. Only Haydari et al. [30] validate with real traffic datasets. Real-world deployment and validation with actual vehicular networks are critically needed.', priority: 'High' },
  { n: 2, title: 'Lightweight Edge-Deployable ML Models', body: 'While ML-based detection achieves high accuracy (95–99%), most approaches do not address computational constraints of edge devices.', priority: 'High' },
  { n: 3, title: 'Integrated Trust Management and Secure Event Dissemination', body: 'Current works focus either on trust management or misbehavior detection, but lack integrated frameworks combining both with secure dissemination.', priority: 'High' },
  { n: 4, title: 'RSU Misbehavior Detection', body: 'While vehicle misbehavior detection is extensively studied, RSU misbehavior detection is underexplored [7], [10], [13], [25].', priority: 'High' },
  { n: 5, title: 'Adaptive Trust Mechanisms for Dynamic Attack Scenarios', body: 'Most trust models use static thresholds or fixed update intervals. HDRS [8] and CARES [20] make progress but require further development.', priority: 'High' },
  { n: 6, title: 'SDN Integration for Adaptive Security', body: 'The literature lacks integration of SDN with trust management and misbehavior detection; controller resilience and placement require investigation.', priority: 'Medium' },
  { n: 7, title: 'Privacy-Preserving Collaborative Detection at Scale', body: 'Federated learning [28] and privacy-aware CIDS [2] address privacy, but scalability to thousands of vehicles remains a challenge.', priority: 'Medium' },
  { n: 8, title: 'Sensor-Based Hazard Detection and Validation', body: 'Sensor-based pothole detection using accelerometer/IMU data is significantly underrepresented.', priority: 'Medium' },
  { n: 9, title: 'Multi-Attack Scenario Evaluation', body: 'Most works evaluate against single attack types; comprehensive multi-attack evaluation is needed.', priority: 'Medium' },
  { n: 10, title: 'Blockchain Scalability and Latency', body: 'Blockchain-based approaches [4], [5], [28] provide strong security guarantees but face scalability and latency challenges.', priority: 'Medium' },
  { n: 11, title: 'Cross-Layer Security Integration', body: 'Most approaches focus on application-layer trust; integration with MAC/physical-layer security could provide defense-in-depth.', priority: 'Lower' },
  { n: 12, title: 'Standardization and Interoperability', body: 'Lack of standardized trust metrics, APIs, and protocols hinders interoperability between systems.', priority: 'Lower' },
  { n: 13, title: 'Long-Term Trust Evolution', body: 'Long-term trust evolution, reputation recovery mechanisms, and handling rehabilitated nodes require further study.', priority: 'Lower' },
  { n: 14, title: 'Energy Efficiency', body: 'Comprehensive energy efficiency analysis for battery-powered vehicles and solar-powered RSUs is limited.', priority: 'Lower' },
  { n: 15, title: 'Incentive Mechanisms', body: 'Beyond Shahariar et al.\'s [14] fuzzy scheme, comprehensive incentive mechanisms for honest participation are underexplored.', priority: 'Lower' },
]

export const researchQuestions = [
  { id: 'RQ1', title: 'Integrated Edge-Assisted Trust-Adaptive Framework', question: 'Can an integrated framework combining edge-assisted misbehavior detection, trust-adaptive mechanisms, and secure event dissemination achieve superior performance compared to standalone approaches while maintaining real-time operation?', hypothesis: 'An integrated framework leveraging lightweight ML at RSUs, dynamic trust threshold adaptation, and trust-based event filtering will achieve:', targets: ['≥95% detection accuracy with ≤5% false positive rate', '≤100ms detection latency at RSUs', '≥90% legitimate event delivery rate with ≤10% malicious event propagation'] },
  { id: 'RQ2', title: 'RSU Misbehavior Detection with R2R Collaboration', question: 'Can RSU-to-RSU collaborative trust evaluation with sensor data validation detect compromised RSUs more effectively than vehicle-based feedback approaches?', hypothesis: 'R2R collaborative trust evaluation with cross-validation of sensor-detected data will achieve:', targets: ['≥90% RSU misbehavior detection rate with ≤10% FPR', 'Resilience to up to 30% malicious vehicles providing false feedback', 'Superior performance compared to centralized vehicle feedback approaches [7], [25]'] },
  { id: 'RQ3', title: 'Lightweight ML for Edge Deployment', question: 'Can lightweight ML models deployed at RSUs achieve comparable detection accuracy to complex deep learning models while meeting real-time latency and resource constraints?', hypothesis: 'Lightweight ML models optimized for edge deployment will achieve:', targets: ['≥90% detection accuracy (within 5% of complex models)', '≤50ms inference latency per message', '≤100MB memory footprint and ≤50% CPU utilization on commodity RSU hardware'] },
  { id: 'RQ4', title: 'SDN-Based Adaptive Security Policies', question: 'Can SDN-based dynamic security policy adaptation improve resilience against evolving attack patterns compared to static configurations?', hypothesis: 'SDN-based adaptive security policies will achieve:', targets: ['≥20% improvement in detection rate for intelligent and adaptive attacks', '≤200ms policy update latency from attack detection to enforcement', 'Resilience to SDN controller compromise through distributed controller architecture'] },
  { id: 'RQ5', title: 'Sensor-Fusion for Pothole Detection and Validation', question: 'Can sensor-fusion approaches combining accelerometer, IMU, GPS, and camera data with trust-based validation accurately detect and verify pothole reports?', hypothesis: 'Sensor-fusion with trust-based validation will achieve:', targets: ['≥85% pothole detection accuracy with ≤15% FPR', '≥95% filtering of false pothole reports from malicious vehicles', 'Robustness to sensor noise and calibration differences across vehicle types'] },
  { id: 'RQ6', title: 'Federated Learning Scalability and Convergence', question: 'Can privacy-preserving federated learning for collaborative misbehavior detection scale to thousands of vehicles with acceptable convergence time?', hypothesis: 'Optimized federated learning with hierarchical aggregation (vehicle → RSU → cloud) will achieve:', targets: ['Convergence to ≥90% accuracy within 100 training rounds', 'Scalability to ≥1000 vehicles per RSU cluster', '≤10% accuracy degradation compared to centralized training'] },
]

export const experimentalPhases = [
  { id: '10.1', title: 'Datasets', body: 'Primary Dataset: VeReMi (Vehicular Reference Misbehavior Dataset) — labeled misbehavior scenarios including position falsification, speed falsification, and various attack types. Supplementary: OpenStreetMap for road topology, real traffic traces where available (e.g., from [30]), and synthetic attack scenarios for RSU misbehavior, pothole falsification, and multi-attack combinations.' },
  { id: '10.2', title: 'Simulator Setup', body: 'Recommended Stack: SUMO + OMNeT++ + VEINS + NS-3, following the combination validated across multiple reviewed works ([6], [10], [13], [15]).' },
  { id: '10.6', title: 'SDN Controller Selection', body: 'Integration via OpenFlow protocol for RSU-to-controller communication; custom SDN applications for trust-based routing and policy enforcement; evaluate centralized vs. distributed controller placement, with controller replication for resilience.', table: {
    columns: ['Controller', 'Description', 'Use Case'],
    rows: [
      ['ONOS', 'Scalable, distributed SDN controller', 'Centralized policy management, dynamic routing, resource allocation'],
      ['OpenDaylight', 'Modular, extensible SDN controller with rich APIs', 'Custom security applications, integration with existing systems'],
      ['Mininet-WiFi', 'Network emulator for wireless SDN', 'Emulation of SDN-based VANET with wireless links'],
    ],
  } },
  { id: '10.7', title: 'Evaluation Metrics', body: '', groups: [
    { label: 'Detection Performance', items: ['Accuracy, Precision, Recall, F-score', 'False Positive Rate (FPR), False Negative Rate (FNR)', 'Detection Failure Rate', 'ROC curve, Area Under Curve (AUC)'] },
    { label: 'Latency and Throughput', items: ['Detection Latency: time from message reception to detection decision', 'End-to-End Latency: time from event occurrence to dissemination', 'Message Throughput: messages processed per second at RSU', 'Network Throughput: data rate for legitimate traffic'] },
    { label: 'Resource Utilization', items: ['CPU Utilization at RSUs', 'Memory Footprint of ML models', 'Network Overhead: additional communication for trust updates and R2R collaboration', 'Energy Consumption (if applicable)'] },
    { label: 'Trust and Event Dissemination', items: ['Legitimate Event Delivery Rate', 'Malicious Event Propagation Rate', 'Trust Convergence Time', 'Trust Accuracy: correlation between computed trust scores and ground truth'] },
    { label: 'Scalability', items: ['Performance vs. Number of Vehicles (100, 500, 1000, 2000)', 'Performance vs. Number of RSUs (10, 25, 50, 100)', 'Performance vs. Percentage of Malicious Nodes (10%, 20%, 30%, 40%)'] },
    { label: 'Comparison', items: ['Baselines: Random Forest on VeReMi [3], AIT [4], HDRS [8], CARES [20], Federated Learning [28], RSU-Based IDS [30]', 'Ablation study: contribution of ML detection, trust adaptation, R2R collaboration, SDN integration'] },
  ] },
]

export const keyPapersIntro =
  'The following papers are most directly aligned with our proposed framework for edge-assisted, trust-adaptive misbehavior detection and secure event dissemination in VANETs. These works serve as primary benchmarks, foundational references, and architectural inspirations.'

export const keyPapers = [
  { tier: 1, badge: 'Most Relevant', year: '2025', title: '[1] Tariq et al. (2025) — Hybrid ML + Blockchain + Fog Architecture', venue: 'World Electric Vehicle Journal', points: ['Integrates ML-based anomaly detection with consortium blockchain for tamper-proof logging', 'Fog-enabled reputation management reduces cloud dependency', 'Achieves 95% anomaly detection accuracy with minimal latency overhead', 'Covers misbehavior detection, trust scoring, and efficient dissemination in one framework'], relevance: 'Directly supports our hierarchical trust-adaptive architecture combining ML, Fog, and Blockchain layers.' },
  { tier: 1, badge: 'Must Highlight', year: '2024', title: '[2] B-SAFE (2024) — Blockchain-Enabled Vehicular Fog Security', venue: 'IEEE / Fog Computing', points: ['OBU-level event verification before forwarding', 'RSU plausibility checks using local sensor cross-validation', 'Fog-layer blockchain synchronization for distributed trust ledger', 'Multi-layer OBU–RSU–Fog integration closely mirrors our proposed architecture'], relevance: 'Almost identical to our concept — supports multi-layer OBU–RSU–Fog integration and event validation chain.' },
  { tier: 1, badge: 'Strong Support', year: '2025', title: '[3] False Position Detection (2025) — OBU/RSU/Fog ML Validation', venue: 'IEEE Transactions', points: ['Multi-layer validation using ART / SSC / DMV checks at OBU, RSU, and Fog nodes', 'Fog-based ensemble ML for distributed detection', 'Achieves 92%+ detection accuracy with real multi-layer validation', 'Explicitly addresses position falsification — a core attack in our evaluation'], relevance: 'Justifies distributed validation hierarchy in our framework; strong baseline for position falsification detection.' },
  { tier: 2, badge: 'Advanced Trust', year: '2024', title: '[4] Zheng et al. (2024) — Privacy-Aware Trust with Reinforcement Learning', venue: 'IEEE Transactions on Intelligent Transportation Systems', points: ['Two-layer trust evaluation (direct + indirect) with privacy preservation', 'Game-theoretic incentive mechanism to encourage honest participation', 'D3QN (Double Duelling Deep Q-Network) for adaptive trust enforcement', 'Multi-layer detection supporting both vehicle and RSU trust assessments'], relevance: 'Supports adaptive trust modeling and privacy-preserving evaluation — key components of our framework.' },
  { tier: 2, badge: 'Foundational Survey', year: '2023', title: '[5] Amari et al. (2023) — Survey of Trust Management in VANETs', venue: 'IEEE Access', points: ['Comprehensive classification of trust models: entity-based, data-centric, hybrid', 'Identifies key scalability issues and gaps in existing integration approaches', 'Most up-to-date survey (2023) covering modern ML-based trust techniques', 'Documents unresolved challenges that our proposed work directly addresses'], relevance: 'Establishes the research gap addressed by our work — use as the foundational trust survey reference.' },
  { tier: 2, badge: 'Adaptive Trust', year: '2022', title: '[6] CARES (2022) — Context-Aware Reputation with Q-Learning', venue: 'ACM Transactions on Internet Technology', points: ['Q-learning based dynamic trust threshold adaptation per context', 'Context-aware trust estimation using vehicle behaviour history and crowdsensing', 'Transfer learning from related domains to handle cold-start problem', 'Outperforms static threshold approaches across various attack scenarios'], relevance: 'Supports our adaptive trust threshold mechanism — key baseline for context-aware trust adaptation.' },
  { tier: 2, badge: 'ML at RSU', year: '2022', title: '[7] Haydari et al. (2022) — RSU-Based ML Intrusion Detection', venue: 'Sensors (MDPI)', points: ['RSU-based ML intrusion detection system with real dataset validation', 'Up to 78% improvement over state-of-the-art approaches', 'Validates ML-based detection at RSU nodes using real traffic traces', 'Supports the feasibility of edge-side (RSU) ML inference in practice'], relevance: 'Directly supports ML deployment at RSUs — primary real-world validation baseline for our framework.' },
]
