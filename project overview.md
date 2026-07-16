# EdgeTrust-VANET
## Edge-based Trust Management and Machine Learning Framework for Secure Vehicular Ad Hoc Networks (VANETs)

**Project Status:** In Progress (Research + Implementation)

---

# Abstract

Vehicular Ad Hoc Networks (VANETs) enable direct communication among vehicles and roadside infrastructure, supporting applications such as collision avoidance, traffic management, emergency message dissemination, and autonomous driving.

Traditional Public Key Infrastructure (PKI) authenticates vehicles but cannot determine whether an authenticated node behaves maliciously after joining the network. To address this limitation, **EdgeTrust-VANET** integrates **behavioral trust management** with **machine learning-based attack detection** at the network edge.

Roadside Units (RSUs) act as edge computing nodes that:
- Compute behavioral trust scores
- Extract communication features
- Execute ML inference
- Fuse trust and ML decisions
- Share trust information with neighboring RSUs

The framework is simulated using **SUMO**, **OMNeT++**, **Veins**, and **Python (Scikit-learn)**.

---

# Table of Contents

1. Introduction
2. Problem Statement
3. Motivation
4. Objectives
5. Literature Survey
6. System Architecture
7. Proposed Methodology
8. Trust Management
9. Machine Learning Framework
10. Simulation Environment
11. Performance Metrics
12. Current Progress
13. Future Work
14. Conclusion

---

# 1. Introduction

Vehicular Ad Hoc Networks (VANETs) are a specialized form of Mobile Ad Hoc Networks (MANETs) that enable communication among vehicles (V2V) and between vehicles and infrastructure (V2I).

VANETs support:
- Collision avoidance
- Emergency warning systems
- Intelligent traffic management
- Autonomous driving assistance
- Navigation and route optimization

Due to their decentralized architecture, dynamic topology, and high-speed mobility, VANETs are vulnerable to numerous cyberattacks.

---

# 2. Problem Statement

Current VANET security relies mainly on PKI.

Although PKI verifies identity, it cannot determine whether an authenticated vehicle behaves maliciously after authentication.

Common attacks include:
- Sybil Attack
- Blackhole Attack
- Replay Attack
- False Information Dissemination
- Selective Packet Dropping
- Denial of Service (DoS)

---

# 3. Motivation

The project is motivated by the need for a security framework that:
- Detects malicious behavior in real time
- Reduces cloud latency
- Improves attack detection accuracy
- Maintains scalability for intelligent transportation systems

---

# 4. Objectives

- Develop a trust-based behavior evaluation model
- Train ML models for attack detection
- Deploy ML inference at RSUs
- Combine trust and ML using decision fusion
- Reduce detection latency
- Improve detection accuracy
- Minimize false positives

---

# 5. Literature Survey

Existing research falls into three categories:

## PKI-Based Authentication
**Advantages**
- Identity verification
- Secure communication

**Limitations**
- Cannot detect insider attacks
- Certificate management overhead

## Trust-Based Systems
**Advantages**
- Behavioral monitoring
- Reputation analysis

**Limitations**
- Slow trust convergence
- Vulnerable to collusion

## Machine Learning Approaches
Algorithms:
- Decision Tree
- Random Forest
- SVM
- XGBoost

**Limitations**
- Dataset dependency
- Cloud inference latency

---

# 6. System Architecture

```text
Vehicles
    │
    ▼
Roadside Units (Edge Layer)
    │
    ▼
Fog Layer
    │
    ▼
Cloud Layer
```

## Vehicle Layer
- Beacon generation
- Safety messages
- Mobility updates

## Edge Layer (RSUs)
- Trust computation
- Feature extraction
- ML inference
- Decision fusion

## Fog Layer
- Regional trust synchronization
- RSU coordination

## Cloud Layer
- Dataset storage
- Model retraining
- Analytics

---

# 7. Proposed Methodology

1. Generate vehicle mobility using SUMO.
2. Simulate communication using OMNeT++ and Veins.
3. Collect communication logs.
4. Extract features.
5. Train ML model.
6. Deploy trained model at RSUs.
7. Compute trust scores.
8. Fuse trust and ML outputs.
9. Detect malicious vehicles.

---

# 8. Trust Management

Trust score:

```text
TS = w1F + w2H + w3M + w4R + w5C
```

Where:

- **F** = Packet forwarding behavior
- **H** = Historical trust
- **M** = Mobility consistency
- **R** = Neighbor recommendation
- **C** = Message consistency

Trust Levels:

| Trust Score | Classification |
|-------------|----------------|
| 0.0–0.3 | Malicious |
| 0.3–0.6 | Suspicious |
| 0.6–1.0 | Trusted |

---

# 9. Machine Learning Framework

## Features

- Vehicle ID
- Speed
- Acceleration
- Position
- RSSI
- Packet Delay
- Packet Loss
- Neighbor Count
- Trust Score
- Transmission Frequency

## Target Classes

- Normal
- Malicious

## Candidate Algorithms

- Random Forest
- Decision Tree
- XGBoost

## Evaluation Metrics

- Accuracy
- Precision
- Recall
- F1 Score
- ROC Curve
- Confusion Matrix

---

# 10. Simulation Environment

| Component | Tool |
|-----------|------|
| Traffic Simulator | SUMO |
| Network Simulator | OMNeT++ |
| VANET Framework | Veins |
| ML | Python + Scikit-learn |
| IDE | Visual Studio Code |
| Version Control | GitHub |
| OS | Windows 11 |

---

# 11. Performance Metrics

- Detection Accuracy
- False Positive Rate
- False Negative Rate
- Packet Delivery Ratio
- Throughput
- End-to-End Delay
- Trust Convergence
- Computation Time
- Memory Usage
- Scalability

---

# 12. Current Progress

## Phase 1 (Completed)

- Literature Survey
- Problem Identification
- Research Gap Analysis
- Architecture Design
- Technology Stack Selection

## Phase 2 (Completed)

- Installed SUMO
- Installed OMNeT++
- Installed Veins
- Created Grid Road Network
- Basic Vehicle Mobility Simulation
- GitHub Organization Setup

## Phase 3 (In Progress)

- SUMO–Veins Integration
- Vehicle Behavior Logging
- Dataset Generation
- Trust Module
- Feature Extraction
- Random Forest Training
- RSU-side Inference

## Phase 4 (Planned)

- Decision Fusion
- Attack Simulation
- Performance Evaluation
- Comparative Analysis
- Final Research Paper

---

# 13. Future Work

- Federated Learning
- Blockchain-assisted Trust
- Explainable AI (XAI)
- 5G/6G V2X Integration
- Real-world Edge Deployment
- Adaptive Trust Thresholds

---

# 14. Conclusion

EdgeTrust-VANET combines behavioral trust management with edge-based machine learning to improve VANET security beyond traditional PKI-based authentication. By performing trust evaluation and ML inference at RSUs, the framework aims to detect malicious vehicles with lower latency, higher accuracy, and better scalability, making it suitable for next-generation Intelligent Transportation Systems (ITS).
