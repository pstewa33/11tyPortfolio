---
permalink: /case-studies/dccps/
layout: layouts/case-study.njk
projectImage: /assets/images/{{ slug }}/hero.png
title: Design System Migration - From Legacy Framework to Scalable System
subtitle: Template-Driven Migration for Accessibility, Consistency, and Scale
role: UX Engineer / Design Systems Engineer
context: Large, multi-team digital platform
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
I led the migration of a large, multi-product platform from a legacy front-end framework to a scalable, accessible design system. By auditing existing components, defining reusable templates, and embedding governance, I enabled consistent implementation, reduced duplication, and improved adoption across teams.

## The Challenge
The platform included multiple sub-sites with unique content needs, built on a legacy Bootstrap system. Each team implemented components independently, resulting in inconsistent patterns and redundant effort. A new design system provided a unified standard, but transitioning existing work required careful planning to avoid disruption.

I partnered with content strategists, developers, and designers to:
- Audit the legacy system
- Convert and standardize components
- Build reusable page templates
- Establish workflows for ongoing governance

## The Problem
Challenges with the legacy system included:
- Inconsistent component behavior across sub-sites
- Accessibility gaps requiring remediation
- Redundant work, as every team reimplemented similar components
- Fragile architecture making updates risky
- No unified template structure to support scaling

## The Need
The organization needed a reliable, production-adjacent foundation that teams could reuse confidently while supporting diverse content and product needs.

**The project aimed to move the site to a modern, standardized design system without making content teams feel constrained or breaking live pages.**

## Constraints & Requirements
The system needed to:
- **Accessibility & Compliance**: Components and templates had to meet WCAG and accessibility standards
- **Scalability**: Support multiple sub-sites while maintaining consistency
- **Editorial Flexibility**: Teams must be able to manage content without breaking structure
- **Integration with Existing Workflows**: Figma for design, Git-based workflows for front-end
- **Minimal Disruption**: Maintain live functionality while migrating

## Solution: Template-Driven Migration
The migration followed a component-first approach:

### Audit and Convert Components
Legacy Bootstrap components were audited and rebuilt using the new design system.

Code-based prototypes validated interaction, layout, and accessibility before broader adoption.

### Template Creation
Identified recurring page types (landing pages, topic hubs, content-heavy pages).

Built reusable templates in Figma, maintaining structural consistency and accessibility guidance.

Templates served as both design reference and developer blueprint.

### Governance & Adoption
Established version-controlled workflows to maintain integrity of core components.

Defined extension points so teams could customize without fragmenting the system.

Documented usage guidelines to facilitate consistent adoption.

## Tradeoffs & Challenges

### Code vs. Design Tools
Initial prototypes were code-based, but templates were eventually delivered in Figma for faster iteration and stakeholder review.

### Consistency vs. Flexibility
Templates allowed teams to customize content while preserving structural consistency.

### Accessibility & Compliance Enforcement
Core components embedded accessibility, while templates referenced these components to maintain standards.

### Time & Scope
Focused on high-impact components and templates to ensure migration could be delivered on schedule.

---

## Outcomes
While formal metrics were not tracked, the system delivered clear operational benefits:
- Reusable component library migrated from legacy Bootstrap to modern design system
- Templates enabled consistent structure across multiple sub-sites
- Teams reduced duplicated front-end work
- Accessibility and compliance embedded directly into the system
- Ongoing governance allowed scalable growth without fragmenting the platform

## Key Takeaways
- **Component-first migration works**: Standardizing at the component level before full-page redesigns ensures consistency
- **Templates bridge design and development**: Figma templates allow for faster iteration and easier stakeholder review
- **Governance is critical**: Version-controlled contributions and clear extension points prevent drift
- **Accessibility scales best when built into components**: Retrofitting accessibility is costly and error-prone
- **Focus on high-leverage decisions**: Prioritizing common templates and components maximizes impact and minimizes disruption

