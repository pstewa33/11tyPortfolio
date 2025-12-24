---
title: Case Study Template
layout: /layouts/case-study.njk
permalink: /case-studies/template.html
project-img: https://placehold.co/600x400
overview:
  phase: Context
  role: Role
  team: Team
  timeline: X months
  dates: (MM, YYYY - MM, YYYY)
  tools: tool, tool, tool
  desc: Provide context about the project, the company or client, and what you were trying to achieve. Explain the business goals and user needs that drove this project.
project_goals:
  - goal: Goal 1
  - goal: Goal 2
  - goal: Goal 3
problem-statement: Craft a clear, compelling problem statement that describes the pain points users were experiencing. This should be specific and grounded in real user feedback or data.
research-phase: Discovery
research-statement: To understand the problem deeply, I conducted comprehensive research using multiple methods to gather both qualitative and quantitative insights.
methods:
  - method: User Interviews
    method-desc: 12 in-depth interviews with target users to understand pain points and needs.
    research-link: link
    research-link-text: 29 Participants
  - method: Competitive Analysis
    method-desc: Analyzed 5 competitors to identify industry patterns and opportunities.
  - method: Analytics Review
    method-desc: Examined user behavior data to identify drop-off points and usage patterns
    research-link: link
    research-link-text: 10,000+ Sessions
  - method: Surveys
    method-desc: Gathered quantitative data on user preferences and satisfaction levels
key-findings:
  - finding: Finding 1
  - finding: Finding 2
  - finding: Finding 3
user-insights: Based on research insights, I identified two primary user archetypes that represent different needs and behaviors.
personas:
  - name: User Name
    role: User Role
    age: Use Age
    goals:
      - goal: Goal 1
      - goal: Goal 2
  - name: User Name
    role: User Role
    age: Use Age
    goals:
      - goal: Goal 1
      - goal: Goal 2
journey-map: true
journey-map-description: The journey map revealed critical pain points during the onboarding and task completion phases, where users felt most confused and likely to abandon the product.
ideation-description: Brainstormed solutions through collaborative workshops and sketching sessions
wireframing-description: Created low-fidelity wireframes to explore different layout options and information architecture
prototyping-description: Built interactive prototypes to test flows and gather early feedback
visual-design-description: Applied brand guidelines and refined the visual language for a polished experience
sketches-wireframes-description: Early explorations focused on simplifying the navigation structure and reducing cognitive load by grouping related features.
key-changes:
  - change: Change One
  - change: Change Two
  - change: Change Three
design-decisions:
  - decision: Decision One
  - decision: Decision Two
  - decision: Decision Three
final-design-description: The final design solution addresses all major pain points identified in research while maintaining visual consistency with the existing brand.
metric-1: Accessibility
metric-1-value: WCAG 2.1 AA compliant with proper color contrast, keyboard navigation, and screen reader support.
metric-2: Responsive
metric-2-value: Optimized for all screen sizes from mobile (375px) to desktop (1920px) with adaptive layouts.
metric-3: Component Library
metric-3-value: Built a reusable design system to ensure consistency and speed up future development.
impact-statement: The redesigned experience launched in March 2024 and showed immediate positive results across all key metrics.
key-impacts:
  - impact-type: task completion
    impact-value: +42%
    impact-title: Task Completion Rate
    impact-description: Increased from 32% to 74%
  - impact-type: task time
    impact-value: -65%
    impact-title: Time on Task
    impact-description: Reduced from 4.2 to 1.5 minutes
  - impact-type: user satisfaction
    impact-value: +58%
    impact-title: User Satisfaction
    impact-description: NPS score improved significantly
  - impact-type: user rating
    impact-value: 4.8/5
    impact-title: User Rating
    impact-description: Based on 500+ reviews
user-feedback:
  - text: The new interface is so much easier to use! I can finally complete my tasks without getting lost or frustrated.
    author: Sarah M., Power User
key-takeaways-statement: Reflections and learnings from this project that will inform future work.
what-i-learned:
  - learning: Early and continuous user testing is crucial - testing assumptions early saved weeks of design time
  - learning: Quantitative data tells you what is happening, but qualitative research tells you why
  - learning: Sometimes the simplest solution is the best - removing features can be as valuable as adding them
  - learning: Cross-functional collaboration led to better solutions than working in isolation
next-steps:
  - step: Monitor analytics to validate the improvements continue over time
  - step: Conduct follow-up interviews to gather deeper insights
  - step: Expand the design system to other product areas
  - step: Explore additional personalization features based on user segments
---

{% include "partials/overview.html" %}

{% include "partials/problem.html" %}

{% include "partials/research.html" %}

{% include "partials/user-insights.html" %}

{% include "partials/design-process.html" %}

{% include "partials/wireframing.html" %}

{% include "partials/final-design.html" %}

{% include "partials/impact.html" %}

{% include "partials/key-takeaways.html" %}