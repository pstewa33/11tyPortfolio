---
permalink: /case-studies/library/
layout: layouts/case-study.njk
collection: caseStudies
order: 1
heroImage: true
projectImage: /assets/images/dmxlibrary/libraryHero.png
title: Internal Component Library Based on USWDS
subtitle: Built an internal USWDS-based design system with reusable components, page templates, and front-end patterns supporting multiple government websites.
---

# {{title}}

*{{subtitle}}*

## Overview

Built and maintained an internal component library and page templates based on the United States Web Design System (USWDS). The library was used to standardize UI across multiple public sector website redesign projects, improve accessibility compliance, and enable faster, scalable page creation.

<section class="dmxlibrary">
  <section class="tech-stack">
    <h2 id="tech-stack">Tech Stack</h2>
    <ul class="tech-tags">
        <li>HTML</li>
        <li>CSS</li>
        <li>Markdown</li>
        <li>Web Components</li>
        <li>Jekyll</li>
        <li>Eleventy</li>
        <li>Netlify</li>
        <li>GitHub</li>
    </ul>
  </section>
  <section class="problem">
    <h2 id="problem">Problem</h2>
    <p>
      Across multiple government projects, teams were rebuilding the same UI components from scratch. This slowed development, created inconsistent user experiences, and led to accessibility issues that were often caught late.
    </p>
  </section>
  <section class="solution">
    <h2 id="solution">Solution</h2>
    <p>
      To address this, we built a shared pattern library based on the United States Web Design System (USWDS). The goal was to give teams a reliable set of reusable components and templates so they could move faster while maintaining consistency and accessibility.
    </p>
    <p>
      Within the first year, the library was adopted across 5+ projects. Teams reduced design-to-development back-and-forth, reused components instead of rebuilding them, and shipped more consistent, accessible interfaces.
    </p>
  </section>
  <section class="my-role">
    <h2 id="my-role">My Role</h2>
    <p>My main focus was turning design guidelines into reusable, production-ready components that teams could actually use. </p>
    <p>I worked closely between design and development to determine how the system would be implemented and how it would evolve over time.</p>
    <div class="role-boxes">
      <div class="role-box">
        <span>Owned Outright</span>
        <ul>
          <li>Building the component library and page templates</li>
          <li>Ensuring accessibility was built into every component</li>
        <ul>
      </div>
      <div class="role-box">
        <span>Shared Ownership</span>
        <ul>
          <li>Defining how components should be structured and reused</li>
          <li>Creating a system that could adapt to different brand styles</li>
          <li>Establishing workflows for contributing and maintaining the library</li>
        <ul>
      </div>
    </div>
  </section>

<section class="impact">
  <h2 id="impact">Impact</h2>

  <div class="impact-grid">
    <div class="impact-item">
      <h3><i class="fa-solid fa-arrow-trend-down" style="color: #2563eb;"></i>Reduced Duplication</h3>
      <p>Minimized repeated front-end effort across multiple teams.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-arrow-trend-up" style="color: green;"></i> Consistency</h3>
      <p>Standardized component behavior and layout patterns.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-shield" style="color: purple;"></i>Built-in Accessibility</h3>
      <p>Embedded compliance directly into production components.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-rocket" style="color: green;"></i>Faster Onboarding</h3>
      <p>Enabled teams to ship new pages quickly using reusable templates.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-scale-balanced" style="color: purple;"></i>Scalable Foundation</h3>
      <p>Created a system that can grow alongside new products and services.</p>
    </div>
  </div>
</section>

<section class="challenges">
  <h2 id="key-challenges">Key Engineering Challenges & Solutions</h2>

  <div class="challenges-stack">
    <article class="challenge-panel">
      <div class="challenge-header">
        <div class="icon-badge">
          <i class="fa-solid fa-cube"></i>
        </div>
        <h3>Component Architecture</h3>
      </div>
      <ul>
        <li>Designed a modular, reusable component structure for consistency and scalability</li>
        <li>Built components with configurable variants and accessible defaults</li>
        <li>Documented usage patterns for developers to easily consume and extend</li>
      </ul>
    </article>
    <article class="challenge-panel">
      <div class="challenge-header">
        <div class="icon-badge">
          <i class="fa-solid fa-cube"></i>
        </div>
        <h3>Template System</h3>
      </div>
      <ul>
        <li>Created reusable page layouts using static site generation</li>
        <li>Enabled teams to quickly create new pages without duplicating code</li>
        <li>Structured templates to support future CMS integration</li>
      </ul>
    </article>
    <article class="challenge-panel">
      <div class="challenge-header">
        <div class="icon-badge">
          <i class="fa-solid fa-cube"></i>
        </div>
        <h3>Accessibility</h3>
      </div>
      <ul>
        <li>Used semantic HTML and ARIA attributes across components</li>
        <li>Implemented keyboard interactions and focus management</li>
        <li>Reduced accessibility risk across all public sector redesign projects</li>
      </ul>
    </article>
    <article class="challenge-panel">
      <div class="challenge-header">
        <div class="icon-badge">
          <i class="fa-solid fa-cube"></i>
        </div>
        <h3>Build & Deployment Optimization</h3>
      </div>
      <ul>
        <li>Migrated from Jekyll to Eleventy for faster, more flexible builds</li>
        <li>Automated deployment to Netlify</li>
        <li>Managed contributions and updates through GitHub workflows</li>
      </ul>
    </article>
  </div>
</section>
</section>