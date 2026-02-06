---
layout: layouts/case-study.njk
permalink: /case-studies/smokefreevet/
projectImage: /assets/images/{{ slug }}/hero.png
collection: caseStudies
order: 3
title: Modernizing a Legacy Healthcare System for Clarity and Scale
subtitle: From Static PDFs to Decision-Guided Care
role: UX Architect
cardTags:
  - System Design
  - Accessibility
  - Front-End Architecture

timeline: July 2024 – September 2025
team:
  - UX Designer
  - Content Strategist
  - Data Analyst
tools:
  - Figma
  - Crazy Egg
---

## Summary

### TL;DR
Migrated a legacy, PDF-driven nicotine replacement therapy experience into a structured, decision-guided system for Veterans. Defined clear interaction logic and content hierarchy to support informed decision-making, resulting in higher engagement, longer sessions, and increased completion of high-priority actions — while maintaining full compliance with USWDS and healthcare regulations.

## My Role & System Scope

I served as the UX Architect responsible for restructuring the system logic, interaction sequencing, and content hierarchy of the NRT experience.

While core tools could not be rebuilt, my work focused on:
- Making implicit decision rules explicit in the system structure
- Defining interaction logic that guided users through compatible NRT options
- Replacing static, PDF-driven content with structured, maintainable web patterns
- Ensuring all changes complied with USWDS and healthcare accessibility standards

---

## Overview

### The Challenge
SmokefreeVET supports Veterans in quitting tobacco through evidence-based guidance. Its Nicotine Replacement Therapy (NRT) resource delivers step-by-step support via an interactive landing page, allowing users to select NRT options and access tailored fact sheets.

Prior to the redesign, this experience relied on legacy PDFs and outdated interaction patterns, fragmenting critical guidance across long scroll depths and static downloads. As a result, Veterans struggled to locate, understand, and act on high-priority health information.

### The Approach
The objective was to restructure the experience into a clear, maintainable system that supported informed decision-making without introducing new functionality. This required simplifying interaction flows, clarifying content hierarchy, and ensuring the solution met healthcare and government compliance standards.

### Project Goals
- Support clear, confident health decision-making for Veterans
- Improve engagement through structure and clarity, not feature expansion
- Transition legacy, PDF-based content into a scalable, system-driven model

### Guiding Principle
Veterans need **clear, actionable guidance** when making health decisions. This constraint shaped all system decisions — prioritizing **clarity, predictable interaction patterns, and easy access to critical information** over visual complexity or customization.

---

## Discover

### Context
SmokefreeVET helps Veterans quit tobacco with evidence-based guidance. The Nicotine Replacement Therapy (NRT) resource offers step-by-step support, centering on a landing page where users select one or more NRT options and access fact sheets for quitting guidance. The experience centered on three core functions, each with distinct interaction and content challenges.

### Primary Functions of the Experience
- Estimate Your Dosage Calculator: Accepts user inputs based on daily tobacco use (smoking, dip, or chew) and outputs recommended NRT combinations and dosages.
- Choose Your Nicotine Replacement Therapy: Users select single or combination NRTs and receive downloadable fact sheets with relevant guidance.

*Insight*: Guidance was delivered via static PDFs, creating a rigid, content-heavy dependency that was difficult to update, reuse, or adapt as clinical guidance evolved — limiting both engagement and long-term maintainability.

- Nicotine Facts: A clickable component providing important facts about nicotine and quitting.

*Insight*: Although prioritized by stakeholders, this content’s placement and reliance on user scrolling made it effectively hidden, creating a mismatch between content importance and system visibility.

Together, these issues revealed a system that technically functioned but failed to guide users through critical decisions in a predictable, scalable way.

### Analyzing User Behavior
To understand how Veterans interacted with the existing NRT experience, we analyzed behavioral data from the landing page using heatmaps, scroll maps, and click maps. This analysis helped identify structural and interaction-level breakdowns that were limiting engagement and comprehension.

#### Dead clicks and rage clicks:
Users frequently clicked on non-interactive elements, including dosage recommendations within the calculator. This indicated uncertainty about system behavior and a disconnect between the UI and user expectations.

#### Scroll Drop-Off Before Critical Content
Scroll maps showed that users often stopped before reaching essential guidance lower on the page, including the Nicotine Facts component that stakeholders identified as critical for informed quitting decisions.

### Key Insights
- **Mismatch Between Visual Cues and System Behavior**: Visual emphasis suggested interactivity where none existed, leading to confusion and repeated dead clicks.
- **Hierarchy Failed to Reflect Content Priority**: High-value guidance was positioned too low in the page structure, making it easy to miss.
- **Content Delivery Model Limited Effectiveness**: Reliance on static, downloadable PDFs created both a usability barrier and a long-term maintenance constraint, reducing flexibility as guidance evolved.

These findings confirmed that the primary challenge was not content quality, but a system that failed to guide users through critical decisions in a clear, predictable way.

---

## Define

### Problem Statement
The NRT experience had evolved organically over time, resulting in fragmented interaction patterns, implicit product compatibility rules, and a reliance on static content formats that did not scale as clinical guidance changed. Outdated content delivery and interaction behaviors made it difficult for Veterans to locate prioritized information, understand next steps, and make confident quitting decisions. Behavioral analytics reinforced these issues, showing low engagement and waning user engagement — indicators that users were struggling to navigate the experience and frequently missed critical guidance.

### Constraints
- Core interactive elements, including the dosage calculator and NRT selection tools, could not be substantially modified due to project scope limitations.
- All content and interactions were required to comply with USWDS standards and strict accessibility requirements.
- Static PDF content needed to be converted into structured web pages without altering or omitting regulated healthcare information.
- Time and resource constraints limited new user research; decisions were informed by existing analytics and stakeholder input.

**These constraints defined the solution space and required restructuring the experience without changing core functionality — prioritizing clarity, consistency, and maintainability while preserving compliance.**

---

## Explore

## Structural Exploration
Exploration focused on reducing cognitive load and improving scanability without altering core functionality. Behavioral analytics consistently showed that long scroll depth and buried guidance were the primary sources of friction, causing users to miss high-priority content.

### Key Areas

#### Reducing scroll and elevating priority content

I evaluated multiple structural approaches to reduce scroll depth and surface priority guidance, balancing accessibility, content density, and existing system constraints.

#### Information architecture, consolidation, and accessibility

 We tested dynamic fact sheet cards that responded to selected NRT options, allowing guidance to remain contextual without overwhelming users. Low-priority visuals were removed, related sections were consolidated, and accessibility support was expanded to include a Spanish-language toggle.

These explorations clarified that the core opportunity was not adding interaction, but making existing guidance visible, contextual, and decision-oriented.

### Design Iterations

### Pivot: Key Insight
During the content and interaction audit, I identified a critical gap in the system::

- Some NRT products **cannot be used together**
- Stakeholders wanted **counseling prioritized before product selection**
- These rules existed, but were buried deep within long-form fact sheets

The issue was not content volume — it was that decision rules were implicit rather than enforced by the system.

Users did not need more information; they needed the experience to guide decisions explicitly. This insight became the pivot: the system needed to surface and enforce compatibility and prioritization rules, rather than expecting users to infer them on their own.

### Design Challenges & Tradeoffs
Introducing conditional logic without increasing complexity surfaced several constraints:

- Prioritization: Counseling needed greater emphasis, but users frequently skipped it when presented alongside product selection.
- Design Limitations: Core tools, including the dosage calculator and NRT selection components, could not be redesigned.
- Accessibility: Certain layout experiments introduced accessibility risks that required rollback or refinement.
- Content Density: Adding new elements to an already content-heavy page risked increasing cognitive load rather than reducing it.

Iteration made it clear that the solution would not come from additional UI or new features, but from restructuring how existing elements were ordered and presented.
---

## Synthesis & System-Level Solution

The breakthrough came from reordering the experience rather than redesigning it.

I proposed restructuring the selection flow itself — without introducing new UI — to surface and enforce compatibility and prioritization rules that already existed in the content. This approach:
- Preserved existing functionality
- Met stakeholder requirements
- Reduced cognitive load
- Made compatibility rules explicit and visible

**The system already contained the necessary logic; the work was in restructuring the experience so that this logic was clear, enforceable, and aligned with user decision-making.**


## System Logic & Decision Rules

A key outcome of this work was making previously implicit rules explicit in the experience:
- Certain NRT products could not be used together
- Counseling needed to be prioritized before product selection
- Guidance needed to remain contextual without increasing cognitive load

Rather than adding new features, these rules were enforced through sequencing, layout hierarchy, and conditional content visibility.

---

## Final Design

The final experience established a consistent structural rhythm across the page.
- Branding: Designs followed SmokefreeVET brand standards and leveraged existing, reusable web components.
- Responsive Design: The design leverages a 12-column grid system optimized for seamless experiences across mobile, tablet, and desktop devices
- USWDS: All final designs conform to the U.S. Web Design System (USWDS) standards to ensure accessibility and consistency.

### Key Design Outcomes
- Streamlined Layout:
  - Established a consistent two-column layout across the page to improve scanability and reduce long scrolling.
  - Tabs utilized to group fact sheet content and reduce information density.
- Intuitive Interactions:
  - Clarified the NRT selection tool through explicit sequencing and AND / OR conditional logic to communicate product compatibility
  - Returned the calculator to full-width to reinforce its role as a primary decision-making tool
- Visibility & Accessibility:
  - Elevated Nicotine Facts alongside the introduction to surface critical guidance earlier in the experience
  - Low-priority visuals were removed, related sections were consolidated, and accessibility was expanded with a Spanish language toggle.
- Updated Information Architecture:
  - Replaced legacy PDFs with dynamic, web-based fact sheet cards, enabling contextual guidance and reducing reliance on downloads
  - Dynamic cards linked directly to relevant fact sheets, eliminating multiple downloads

(Images can be referenced here in your layout, not the MD itself.)

---

## Outcomes & Impact

### Results
#### Year-over-year comparison
(July 21 – Sept 30, 2025 vs. same period 2024)
- +50% overall engagement
- +33% increase in user actions (6.71 events per user)
- +104% increase in average session duration (2:09)
- +57% calculator interactions
- +35% NRT type selections
- +65% NRT facts interactions
- +14% hybrid opt-in submissions
- +17% users scrolling to 90% of the page
- +13% increase in Google Organic traffic

### Reflection
This project reinforced the value of prioritizing structure, hierarchy, and decision logic over introducing new functionality

### Key Takeaways
- Alignment between user needs and stakeholder goals leads to stronger outcomes
- Small structural changes can have system-wide impact
- Analytics-driven collaboration enables confident decisions in constrained environments

---

**This project demonstrates how structural clarity and system-level decision logic can deliver measurable impact while maintaining compliance and user trust**