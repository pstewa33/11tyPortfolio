---
eleventyExcludeFromCollections: true
permalink: false
layout: layouts/case-study.njk
title: Design System Engineering
subtitle: Scalable, Accessible Pattern Library
role: UX Engineer / Design Systems Engineer
cardTags:
  - Design Systems
  - Accessibility
  - Front-End Architecture

showSidebar: false
showOutro: false
hero:
  variant: icons
  icons:
    - name: fa-code
      label: Front End
    - name: fa-universal-access
      label: Accessibility
    - name: fa-layer-group
      label: Components
  image:
    src: https://placehold.co/600x400
    alt: Hero image

context: Large, multi-team digital platform
focus: Design systems, component architecture, accessibility, system adoption
tools:
  - HTML
  - CSS
  - JavaScript
  - USWDS
  - Figma
  - Git
  - Eleventy
  - Netlify
---

<div class="tldr full-bleed">
  <div class="tldr-inner">

### TL;DR
Led the technical implementation and architecture of a reusable, accessible design system, translating USWDS design standards into production-ready components, page templates, and content models. Established governance and workflows to ensure consistency and scalability across teams, and enabled adoption by non-technical designers and developers.

  </div>
</div>

## The Challenge
In a fast-moving, multi-team environment, product teams were repeatedly solving the same front-end and accessibility problems from scratch. While a shared visual design standard existed, teams relied heavily on static mockups, which failed to capture real interaction behavior, responsiveness, and accessibility constraints.

I partnered closely with a UX Lead to define and build a shared pattern library, translating design intent into production-ready patterns. Clear ownership boundaries were established early to ensure the system could scale without becoming a bottleneck.

My role focused on system architecture and implementation: converting design standards into reusable, code-based components and establishing workflows that enabled consistent adoption across teams without slowing delivery.

<div class="grid grid-2">
<div class="the-problem">

## The Problem
Without a shared front-end system:
- UI components behaved inconsistently across products
- Accessibility decisions were re-made on every project, increasing risk
- Static design artifacts masked real implementation constraints
- Teams duplicated effort and introduced drift over time

</div>
<div class="problem-screenshot">

![problem](https://placehold.co/600x400)

</div>
</div>

<div class="constraints-section">

## Constraints and Requirements
**The system needed to:**
<ul class="fa-ul">
  <li>
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    Enforce accessibility and compliance by default (WCAG-aligned)
  </li>
  <li>
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    Scale across multiple teams working in parallel
  </li>
  <li>
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    Integrate with existing design and development workflows
  </li>
  <li>
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    Enable team autonomy without creating a centralized bottleneck
  </li>
  <li>
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    Support extension without fragmenting the core system
  </li>
</ul>

These constraints required a system that was **opinionated but extensible**: enforcing strong defaults for accessibility and consistency, while providing clear extension points that allowed teams to adapt patterns without fragmenting the core system.

</div>

<div class="solution-section">

## Solution: Code-Based Pattern Library

<div class="solution-boxes">
  <div class="solution-box">
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    <h3>Base Components</h3>
    <p>A curated set of base components with defined extension points</p>
  </div>
  <div class="solution-box">
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    <h3>Custom Components</h3>
    <p>A curated set of base components with defined extension points</p>
  </div>
  <div class="solution-box">
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    <h3>Base Components</h3>
    <p>A curated set of base components with defined extension points</p>
  </div>
  <div class="solution-box">
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    <h3>Base Components</h3>
    <p>A curated set of base components with defined extension points</p>
  </div>
  <div class="solution-box">
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    <h3>Base Components</h3>
    <p>A curated set of base components with defined extension points</p>
  </div>
  <div class="solution-box">
    <span class="fa-li"><i class="fa-solid fa-check-square"></i></span>
    <h3>Base Components</h3>
    <p>A curated set of base components with defined extension points</p>
  </div>
</div>

- Custom Components: Reusable custom components addressing common product needs
- Page Templates: Standardized page templates for frequent use cases
- Git Workflow: Git-based contribution and review workflow for quality control
- Content Model: Structured to integrate with CMS for future scalability.
- Adoption Enablement: Workshops and documentation empowered teams to use the system correctly

**The library was implemented as a static site using Eleventy and hosted on Netlify, making it easy for teams to access, review, and adopt.**

</div>

## My Role

I was responsible for the technical architecture and implementation of the system, including:

- Implemented core USWDS components and custom components commonly used by multiple teams.

- Built page templates using markdown and a static site generator to ensure consistency and ease of adoption.

- Created component-level documentation to guide developers and designers in proper usage.

- Developed the content model to support future CMS integration.

- Collaborated on governance workflows, defining contribution boundaries to prevent uncontrolled variation in the system.

- Ran coding workshops and presentations to onboard teams and demonstrate designing in code.


### Example: Accessible Component Defaults

Rather than documenting accessibility as guidance, components were built with accessible defaults:
- Semantic HTML enforced by component structure
- Keyboard interactions implemented at the component level
- ARIA attributes applied consistently across variants

This reduced the likelihood of teams shipping inaccessible UI, even under time pressure.



## System Architecture and Ownership
- Core components were centrally owned and versioned
- Project teams consumed and extended components without modifying the foundation
- All changes flowed through pull requests to ensure accessibility, consistency, and maintainability

---

## Tradeoffs and Challenges

### Opinionated standards vs. flexibility
Constraining some design freedom reduced inconsistency and compliance drift across products. Flexibility was preserved through documented extension points rather than ad-hoc customization.

### Shifting teams from static mockups to code
Initial hands-on sessions were limited in impact due to workload and learning curve; future iterations would include self-paced learning tools.

### Central ownership without slowing delivery
Versioning and opt-in updates allowed teams to adopt improvements on their own timelines without blocking active work.

### Designed for technical designers
The library was most immediately useful for designers with coding experience, making adoption by purely visual designers slower. In future iterations, I would expand onboarding resources to better support non-coding designers, such as demo videos and AI-assisted guidance.


---

## Outcomes
Adoption and reuse across teams indicated clear operational benefits:
- Used as the starting point for multiple product builds
- Reduced duplicated front-end work across teams
- Improved consistency in component behavior and layout
- Lower accessibility risk through standards embedded directly into components
- Stronger alignment between design and development via shared, code-based artifacts
- A scalable foundation that continues to evolve as new needs emerge


## Key Takeaways
- **Design systems are products**: Adoption, governance, and onboarding matter as much as code.
- **Production-adjacent artifacts improve outcomes**: Code-based prototypes surface issues static designs cannot.
- **Accessibility scales best when embedded at the component level.**
- **Clear boundaries enable speed**: Defined ownership and extension points prevent drift without limiting teams.

## If I Did This Again

- I would include onboarding materials tailored towards non-technical designers
- I would invest sooner in clearer upgrade and versioning communication
- I would provide more starter templates to accelerate first-time adoption
