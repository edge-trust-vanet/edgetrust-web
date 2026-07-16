export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string[]
  date: string
  readTime: string
  category: string
  imageUrl: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'basic-traffic-simulation',
    title: 'Simulating Basic Traffic in SUMO & Connecting to OMNeT++',
    excerpt: 'Today we successfully simulated our first basic traffic scenarios in SUMO! Our next immediate step is to connect this mobility model with OMNeT++ using Veins to observe network packet behavior in real-time.',
    content: [
      'Welcome to today’s update (July 16, 2026)! We have reached an exciting milestone in the EdgeTrust-VANET project.',
      'Our focus today was entirely on the SUMO (Simulation of Urban MObility) environment. We took the Grid Road Network we designed previously and successfully injected our first basic traffic simulation.',
      'By defining vehicle types, randomized routes, and varying speeds, we were able to observe the microscopic mobility of nodes interacting within the grid. This is a critical step because realistic mobility is the foundation of any accurate VANET simulation.',
      'What’s Next?',
      'Our immediate next phase is Phase 3: SUMO–Veins Integration. We are going to connect this active SUMO traffic simulation with the OMNeT++ network simulator using the Veins framework. This will allow us to map each moving vehicle to a network node and observe wireless packet behavior (like beacons and safety messages) in real-time as they move around the grid.'
    ],
    date: 'Jul 16, 2026',
    readTime: '3 min read',
    category: 'Simulation',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'grid-road-network',
    title: 'Designing the Grid Road Network',
    excerpt: 'We have mapped out and created a complex Grid Road Network inside SUMO. This will serve as our primary testing ground for intersection-based vehicular communication and potential sybil attacks.',
    content: [
      'On July 10, 2026, we finalized the spatial environment for our simulations.',
      'Using the NETEDIT tool provided by SUMO, we designed a custom Grid Road Network. A grid layout was chosen specifically because it offers multiple intersections, varied line-of-sight conditions, and highly dynamic routing options for the vehicles.',
      'Why a Grid Network?',
      'In VANETs, intersections are critical bottlenecks where safety messages must be broadcasted effectively. It is also where malicious nodes can do the most damage (e.g., broadcasting false congestion alerts to reroute traffic). By using a grid, we can rigorously test our Edge-based Machine Learning models and Trust Management systems against attacks like False Information Dissemination and Blackhole attacks.',
      'The network files have been saved and integrated into our simulation repository, ready for the upcoming traffic injection.'
    ],
    date: 'Jul 10, 2026',
    readTime: '4 min read',
    category: 'Environment',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'environment-setup',
    title: 'Development Environment & Toolchain Setup',
    excerpt: 'Phase 2 is officially underway. We have installed the required simulators (SUMO, OMNeT++, and Veins) on Windows 11 and established our GitHub organization for version control.',
    content: [
      'On July 5, 2026, we officially completed the setup of our simulation environment, marking the beginning of Phase 2.',
      'Our toolchain is heavily reliant on open-source, highly-regarded network and traffic simulators. Here is what we installed and configured on our Windows 11 development machines:',
      '1. SUMO (Simulation of Urban MObility): The industry standard for continuous, microscopic road traffic simulation.',
      '2. OMNeT++: A component-based C++ simulation library primarily used for building network simulators.',
      '3. Veins: The open-source framework that seamlessly links OMNeT++ with SUMO, enabling Inter-Vehicular Communication (IVC) simulations.',
      'In addition, we initialized our GitHub Organization (EdgeTrust-VANET) to ensure all configuration files, network maps, and Python ML scripts are properly version-controlled. We are now ready to start building the simulation world.'
    ],
    date: 'Jul 5, 2026',
    readTime: '2 min read',
    category: 'Setup',
    imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'learning-sumo-omnet',
    title: 'Understanding SUMO and OMNeT++',
    excerpt: 'Spent this week learning the intricacies of SUMO for modeling microscopic vehicle mobility, and OMNeT++ for simulating the wireless network communication layers. Veins will be our bridge.',
    content: [
      'Over the past week (leading up to June 25, 2026), the team engaged in a deep-dive learning sprint.',
      'To build a realistic Behavioral Trust Management system, we need highly accurate simulations. We spent this time studying the documentation and running tutorials for our core simulation stack.',
      'SUMO: We learned how to define edges (roads), nodes (junctions), and vehicle flows. SUMO’s TraCI (Traffic Control Interface) will be particularly vital later on for manipulating vehicle behavior dynamically.',
      'OMNeT++: We explored its modular architecture, specifically focusing on the INET framework which models the OSI layers. Understanding how MAC layers handle packet collisions and delays is essential for extracting the communication features (like RSSI, Packet Delay, and Packet Loss) our Machine Learning models will rely on.',
      'Next up, we will install these tools natively and set up our repository.'
    ],
    date: 'Jun 25, 2026',
    readTime: '5 min read',
    category: 'Research',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'project-kickoff',
    title: 'Project Kickoff & Extensive Literature Survey',
    excerpt: 'We officially started EdgeTrust-VANET! Began with a deep dive into VANET security, analyzing over 285 peer-reviewed publications to understand the limitations of PKI and the need for behavioral trust.',
    content: [
      'June 15, 2026 marks the official kickoff of the EdgeTrust-VANET project!',
      'We started Phase 1 by conducting a massive literature survey, synthesizing insights from 285 peer-reviewed publications spanning from 2014 to 2026. Our goal was to identify the critical vulnerabilities in modern Vehicular Ad Hoc Networks.',
      'The Core Problem:',
      'Current VANET security relies heavily on Public Key Infrastructure (PKI). While PKI is excellent for verifying identity during authentication, it suffers from a fatal flaw: it cannot monitor a node’s behavior after it joins the network. If an authenticated vehicle goes rogue or gets compromised, PKI alone cannot stop it from launching insider attacks (like Sybil or Blackhole attacks).',
      'The Proposed Solution:',
      'Our architecture will push security to the Edge (Roadside Units). These RSUs will compute Trust Scores based on vehicle behavior (packet forwarding, mobility consistency, etc.) and run lightweight Machine Learning inference (using Random Forest/XGBoost) to detect anomalies in real-time.',
      'The literature review is complete, the architecture is designed, and the technology stack is selected. It’s time to start building.'
    ],
    date: 'Jun 15, 2026',
    readTime: '6 min read',
    category: 'Milestone',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  }
]
