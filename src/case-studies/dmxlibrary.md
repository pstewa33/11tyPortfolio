---
permalink: /case-studies/dmxlibrary/
layout: layouts/case-study.njk
collection: caseStudies
order: 1
title: Design System Engineering
subtitle: Scalable, Accessible Pattern Library
role: UX Engineer / Design Systems Engineer
cardTags:
  - Design Systems
  - Accessibility
  - Front-End Architecture

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
    alt: hero image

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

## Summary

### TL;DR
Led the technical implementation of a reusable, accessible design system, partnering with design to translate standards into production-ready components and templates that scaled across teams.

---

## The Challenge
In a fast-moving, multi-team environment, product teams were repeatedly solving the same front-end and accessibility problems from scratch. While a shared visual design standard existed, teams relied heavily on static mockups, which failed to capture real interaction behavior, responsiveness, and accessibility constraints.

I partnered closely with a UX designer to define and build a shared pattern library, translating design intent into production-ready patterns. Clear ownership boundaries were established early to ensure the system could scale without becoming a bottleneck.

My role focused on system architecture and implementation: converting design standards into reusable, code-based components and establishing workflows that enabled consistent adoption across teams without slowing delivery.

## The Problem
Without a shared front-end system:
- UI components behaved inconsistently across products
- Accessibility decisions were re-made on every project, increasing risk
- Static design artifacts masked real implementation constraints
- Teams duplicated effort and introduced drift over time

## The Need
The organization needed a **reliable, production-adjacent foundation** that teams could reuse confidently while maintaining flexibility for different product needs.

## Constraints and Requirements
The system needed to:
- Enforce accessibility and compliance by default (WCAG-aligned)
- Scale across multiple teams working in parallel
- Integrate with existing design and development workflows
- Enable team autonomy without creating a centralized bottleneck
- Support extension without fragmenting the core system

These constraints required a system that was **opinionated but extensible**: enforcing strong defaults for accessibility and consistency, while providing clear extension points that allowed teams to adapt patterns without fragmenting the core system.

## Solution: Code-Based Pattern Library
- Base Components: A curated set of base components with defined extension points
- Custom Components: Reusable custom components addressing common product needs
- Page Templates: Standardized page templates for frequent use cases
- Git Workflow: Git-based contribution and review workflow for quality control

**The library was implemented as a static site using Eleventy and hosted on Netlify, making it easy for teams to access, review, and adopt.**

---

## What I Built

I was responsible for the technical architecture and implementation of the system, including:

- Designing and implementing core UI components as reusable, accessible HTML/CSS/JS patterns
- Defining component APIs (props, variants, states) to balance consistency and extensibility
- Encoding accessibility requirements directly into components (ARIA, keyboard behavior, focus management)
- Creating page templates that demonstrated correct component composition

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
Adoption required more than documentation. I ran walkthroughs, demos, and hands-on sessions to help designers and developers understand how to use and extend the system effectively.

### Central ownership without slowing delivery
Versioning and opt-in updates allowed teams to adopt improvements on their own timelines without blocking active work.

---

## Outcomes
While formal metrics were not tracked, adoption and reuse across teams indicated clear operational benefits:
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

- I would introduce automated accessibility checks earlier in the workflow
- I would invest sooner in clearer upgrade and versioning communication
- I would provide more starter templates to accelerate first-time adoption
