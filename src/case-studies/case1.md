---
title: Pattern Library
layout: /layouts/case-study.njk
permalink: /case-studies/case1.html
role: UX Designer
team:
  - role: UX Strategist
  - role: Front-End Developer
  - role: UX Architect
  - role: Content Strategist
  - role: Visual Designer
timeline: Q3 2022 - Q3 2023
tools:
  - tool: html/css/js
  - tool: jekyll
  - tool: Sketch
  - tool: Contentful
businessModel: Public Sector and Internal
challenge: |
    <p>Designers were constantly re-inventing the wheel when designing government websites wtih no central design system or formal guidance in place.</p>
    <p> Government websites at the time were going to be required to utilize the US Web Design System, as the USWDS insured 508 compliance and responsiveness via its library of web components, page layouts, and style tokens.</p>
task: |
    Create an internal, centralized pattern library based on the USWDS that designers and developers could use to quick launch public sector projects.
recommendation: |
    Utilize html/css/js alongside a static site generator and markdown to create a pattern library of reusable web components, code-based web page templates, and documentation regarding branding, accessibility, and best use cases.
constraints:
  - constraint: Must utilize USWDS
  - constraint: Must be adaptable to any public sector branding
contributions:
  - contribution: Built reusable web components using USWDS as a foundation
  - contribution: Created reusable web page templates using html/css/js and markdown
  - contribution: |
        Created a yaml content map to pull Contentful content into markdown   page templates
  - contribution: |
        Designed and developed code-based wireframes and mockups for a prototype website
---
# Pattern Libraries, Design Systems, and Designing in Code

{% include "partials/context.html" %}

## The Road to the Reccommendation

The idea to create the ICF Next Pattern Library came about over the course of two major projects and several internal calls in the interim.

### Round 1: Child Welfare Information Gateway

The Child Welfare Information Gateway is a resource hub under the HHS and Children's Bureau. CWIG provides child welfare professionals, service providers, and parents/ guardians with free, trusted resources.

#### Context and Constraints

Child Welfare Information Gateway wanted to update their website and they wanted this update to utilize the US Web Design System.

The design team for CWIG had shifted. Designers familiar with the project were leaving and new designers were onboarding

CWIG required all wireframe updates to be reviewed by a panel before designs could move forward.

#### The Idea

In order to onboard designers more efficiently into ongoing projects, we wanted to develop a centralized design system internally that would prevent constant reinventing of the wheel. As our team solely worked on public sector products, this design system would utilize the US Web Design System as a foundation.

Wireframes were getting stalled in review and - in turn - handoffs to the development team were delayed and stacking up. We needed a way to make wireframes more inuitive to reviewers