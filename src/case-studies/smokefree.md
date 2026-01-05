---
title: Smokefree Vet NRT Redesign
layout: /layouts/case-study.njk
permalink: /case-studies/smokefree.html
project-img: https://placehold.co/600x400
overview:
  role: UX Designer
  team: UX Designer, Content Strategist
  timeline: X months
  dates: (04, 2025 - 07, 2025)
  tools: Figma, Crazy Egg
  desc: <p>SmokefreeVET is a U.S. Department of Health and Human Services initiative that helps Veterans quit tobacco through evidence-based resources, including Nicotine Replacement Therapy (NRT).</p><br><p>The Smokefree Veterans Quit with NRT Interactive Tool relied on outdated interactions and content that limited usability, discoverability, and content effectiveness. Our challenge was to redesign the experience to better serve Veterans, improve SEO performance, and highlight the most useful information.</p>
  recommendation: Modernize the NRT experience by replacing downloadable PDF fact sheets with accessible, web-based content and restructuring the NRT landing page's information hierarchy to better align with user needs and organizational objectives.
project_goals:
  - goal: Improve User Experience
  - goal: Boost Search Engine Optimization
  - goal: Prioritize Useful Content
problem-statement: The Smokefree Veterans Quit with NRT Interactive Tool relied on outdated interactions and content that limited usability, discoverability, and content effectiveness. Our challenge was to redesign the experience to better serve Veterans, improve SEO performance, and highlight the most useful information.
research-statement: Using heatmaps, click-through rates, and behavioral analytics, we evaluated user interaction patterns to uncover engagement gaps and usability challenges within the experience.
methods:
  - method: Analytics Review
    method-desc: Utilized Crazy Egg analytics tools to understand how users interacted with the page and to pinpoint engagement drop-offs and usability issues.
    research-link: link
    research-link-text: Crazy Egg Analytics (show to the right)
    img: ..\assets\images\smokefree\desktop-click-scroll-maps.png
key-findings:
  - finding: The dosage graphics had a significant amount of dead clicks and rage clicks.
  - finding: Long Scroll - users stopped before getting to the high priority content lower on the page.
  - finding: Fact sheets were static PDFs that would need frequent updates
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
wireframe-one: ..\assets\images\smokefree\smokefree-nrt-wireframe.png
wireframe-two: ..\assets\images\smokefree\QuitVet-wireframe.png
wireframing-description: Created low-fidelity wireframes to explore different layout options and information architecture
prototyping-description: Built interactive prototypes to test flows and gather early feedback
visual-design-description: Applied brand guidelines and refined the visual language for a polished experience
factsheet-wireframes-description: Moving from static documents to webpages allowed for interactivity, which allowed for more flexibility in design. In order to reduce cognitive load we increased whitespace and implemented content grouping via tabs. We updated the IA to allow for navigation between the various fact sheets as well.
key-changes:
  - change: Increase white space
  - change: Added user interactivity with clickable components (tabs)
  - change: Added cards to facilitate navigation between various fact sheets.
landing-wires-description: Description goes here
design-decisions:
  - decision: Decision One
  - decision: Decision Two
  - decision: Decision Three
final-design-description: The final design solution addresses all major pain points identified in research while maintaining visual consistency with the existing brand.
final-design: ..\assets\images\smokefree\landing-wire-3.png
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

{% include "partials/research.html" %}

{% include "partials/design-process.html" %}

{% include "partials/smokefree-wires.html" %}

{% include "partials/final-design.html" %}

{% include "partials/impact.html" %}

{% include "partials/key-takeaways.html" %}