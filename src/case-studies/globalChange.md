---
permalink: /case-studies/global-change/
layout: layouts/case-study.njk
projectImage: /assets/images/{{ slug }}/hero.png
collection: caseStudies
order: 2
title: Functional Mini-Site Prototype for Global Change
subtitle: Created a deployable, high-fidelity prototype using reusable components, brand styling, and headless CMS integration.
---
# {{title}}

<section class="dmxlibrary">
  <section class="overview">
    <h2 id="overview">Overview</h2>
    <div class="overview-card">
      <div class="overview-item">
        <span>Project</span>
        <p>Global Change Research Program Website Redesign</p>
      </div>
      <div class="overview-item">
        <span>Timeline</span>
        <p>Q2 2022 - Q3 2022</p>
      </div>
      <div class="overview-item">
        <span>Team</span>
        <p>UX Designer, UX Architect, Content Strategist, Developer</p>
      </div>
      <div class="overview-item">
        <span>Role</span>
        <p>UX Architect</p>
      </div>
    </div>
    <p>
        A federal mandate required public sector websites to align with the United States Web Design System (USWDS). The Global Change website needed a full redesign to meet these standards, but the existing site was outdated in both structure and accessibility.
    </p>
    <p>
        Instead of relying on static mockups, we built a fully interactive prototype. This allowed stakeholders to experience navigation, layout, and content behavior in a real environment before committing to full development.
    </p>
  </section>
  <section class="tech-stack">
    <h2 id="tech-stack">Tech Stack</h2>
    <ul class="tech-tags">
        <li>HTML</li>
        <li>CSS</li>
        <li>Markdown</li>
        <li>Contentful</li>
        <li>Jekyll</li>
        <li>Netlify</li>
        <li>GitHub</li>
    </ul>
  </section>
  <section class="problem">
    <h2 id="problem">Problem</h2>
    <p>
      The existing workflow relied heavily on static designs, which made it difficult to evaluate:
    </p>
    <ul>
        <li>Navigation across multiple pages</li>
        <li>Responsive behavior on different devices</li>
        <li>How real content would fit into layouts</li>
    </ul>
    <p>
      As a result:
    </p>
    <ul>
        <li>Feedback came late in the process </li>
        <li>Design decisions were based on assumptions </li>
        <li>Accessibility and usability issues were harder to catch early</li>
    </ul>
  </section>
  <section class="context-constraints">
    <h2 id="Context-and-Constraints">Context and Constraints</h2>
    <p>The project ran for about a year in collaboration with the Global Change web team.</p>
    <p>Key constraints:</p>
    <div class="constraints">
      <div class="constraint">
        <i class="fa-solid fa-universal-access"></i>
        <span>Stakeholder Expectations</span>
        <p>
            Stakeholders responded more effectively to interactive prototypes than static mockups, requiring a realistic and navigable experience.
        </p>
      </div>
      <div class="constraint">
        <i class="fa-brands fa-css3-alt"></i>
        <span>Design System Requirements</span>
        <p>
            The prototype needed to be built using an existing USWDS-based design system to maintain consistency and test its effectiveness in a real-world implementation.
        </p>
      </div>
      <div class="constraint">
        <i class="fa-solid fa-arrows-down-to-people"></i>
        <span>Pattern Constraints</span>
        <p>
            The design system accelerated development but limited customization, requiring careful decisions about when to extend existing components versus create new ones.
        </p>
      </div>
      <div class="constraint">
        <i class="fa-solid fa-code"></i>
        <span>Project Scope</span>
        <p>
            The site contained a large amount of content and multiple page types, making navigation, content hierarchy, and content modeling critical to success.
        </p>
      </div>
    </div>
  </section>
  <section class="my-role">
    <h2 id="my-role">My Role</h2>
    <p>My main focus was turning design guidelines into reusable, production-ready components that teams could actually use. </p>
    <p>I worked closely between design and development to determine how the system would be implemented and how it would evolve over time.</p>
    <div class="role-boxes">
      <div class="role-box">
        <span>Owned Outright</span>
        <ul>
          <li>Building a functional, multi-page prototype using HTML, CSS, and JavaScript </li>
          <li>Applying and extending components from the internal design system</li>
          <li>Creating new components when needed (while maintaining accessibility standards)</li>
        </ul>
      </div>
      <div class="role-box">
        <span>Shared Ownership</span>
        <ul>
          <li>Integrating dynamic content using Contentful</li>
          <li>Connecting everything into a cohesive, navigable experience</li>
        <ul>
      </div>
    </div>
  </section>

<section class="solution">
  <h2 id="solution">Solution</h2>
  <div class="solution-grid">
    <div class="solution-card">Built a functional multi-page prototype</div>
    <div class="solution-card">Used the internal design system</div>
    <div class="solution-card">Integrated Contentful</div>
    <div class="solution-card">Created custom components when needed</div>
    <div class="solution-card">Generated content through Jekyll</div>
  </div>
</section>

<section class="engineering-challenges">
  <h2 id="engineering-challenges">Engineering Challenges & Solutions</h2>
  <div class="challenge-accordion">
    <details>
      <summary>Designing for Multiple Roles</summary>
      <p><strong>Challenge:</strong> The system needed to work for designers, developers, and content strategists.</p>
      <p><strong>Decision:</strong> We structured the system so each group could work in a way that matched their needs:</p>
      <ul>
        <li>Developers used component code directly</li>
        <li>Designers worked from predefined patterns and templates</li>
        <li>Content strategists managed content through Contentful</li>
      </ul>
      <p><strong>Tradeoff:</strong> This required more upfront structure and documentation.</p>
      <p><strong>Outcome:</strong> Teams could work more independently, reducing handoff friction.</p>
    </details>
    <details>
      <summary>Flexibility vs. Consistency</summary>
      <p><strong>Challenge:</strong> Support different brand styles without fragmenting the system.</p>
      <p><strong>Decision:</strong> Allow customization through design tokens instead of unrestricted styling.</p>
      <p><strong>Tradeoff:</strong> Fully custom designs were limited.</p>
      <p><strong>Outcome:</strong> Projects stayed visually consistent while still meeting most branding needs.</p>
    </details>
    <details>
      <summary>Reuse vs. Customization</summary>
      <p><strong>Challenge:</strong> Make the system reusable without blocking project-specific needs.</p>
      <p><strong>Decision:</strong> Maintain a central core library and allow teams to create project-level versions.</p>
      <p><strong>Tradeoff:</strong> Updates to the core system required coordination across projects.</p>
      <p><strong>Outcome:</strong> Teams could customize their implementations without duplicating the entire system.</p>
    </details>
    <details>
      <summary>Static vs. Dynamic Architecture</summary>
      <p><strong>Challenge:</strong> Static site generation limited interactivity.</p>
      <p><strong>Decision:</strong> Static templates were used for structure while Contentful provided dynamic content.</p>
      <p><strong>Tradeoff:</strong> Complex interactions required additional engineering work.</p>
      <p><strong>Outcome:</strong> The system remained fast and maintainable while supporting dynamic content where needed.</p>
    </details>
    <details>
      <summary>Accessibility as a System Feature</summary>
      <p><strong>Challenge:</strong> Accessibility requirements needed to be consistently met across multiple teams and agency websites.</p>
      <p><strong>Decision:</strong> Accessibility was built directly into the component library through semantic HTML, keyboard navigation, focus management, and approved design tokens.</p>
      <p><strong>Tradeoff:</strong> Restricting customization reduced flexibility but ensured accessibility standards were maintained.</p>
      <p><strong>Outcome:</strong> Accessibility became a built-in feature rather than something teams had to implement independently.</p>
    </details>
  </div>
</section>
<section class="impact">
  <h2 id="impact">Impact</h2>
  <div class="impact-grid">
    <div class="impact-item">
      <h3>5+ Projects Adopted</h3>
      <p>The library became a shared foundation across multiple government website redesign efforts.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-arrow-trend-down" style="color: #2563eb;"></i>Reduced Duplication</h3>
      <p>Teams reused shared components instead of creating separate implementations for each project.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-arrow-trend-up" style="color: green;"></i> More efficient development</h3>
      <p>Ready-to-use components and templates provided a starting point for common interface patterns.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-shield" style="color: purple;"></i>Improved design-development alignment</h3>
      <p>Shared examples and implementation guidance helped teams work from the same source of truth.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-rocket" style="color: green;"></i>Accessibility by default</h3>
      <p>Components incorporated accessibility requirements from the start, reducing the burden on individual teams.</p>
    </div>
    <div class="impact-item">
      <h3><i class="fa-solid fa-scale-balanced" style="color: purple;"></i>Stronger cross-team collaboration</h3>
      <p>Shared patterns and conventions made it easier for teams to contribute to and maintain a common system.</p>
    </div>
  </div>
  <p>
    The pattern library became a shared foundation for multiple government website projects. By standardizing components, templates, and accessibility practices, teams were able to work from a common set of patterns rather than creating project-specific solutions for every implementation.
  </p>
</section>

<section class="key-takeaways">
  <h2 id="key-takeaways">Key Takeaways and Reflection</h2>
  <p>
    This project highlighted the challenges of balancing flexibility, accessibility, and ease of adoption across a diverse set of users. While the system reduced duplication and improved consistency, it still required some familiarity with HTML and CSS to use effectively. In the future, I would explore additional tooling or abstraction layers to make the system more approachable for designers and content strategists.
  </p>
  <p>
    Scalability also presented challenges. Teams occasionally created project-specific components independently to meet immediate needs. Although these solutions were intended to be incorporated back into the design system, that process was not always immediate, leading to temporary inconsistencies between projects. A more formal contribution workflow could help ensure enhancements are shared and adopted more consistently.
  </p>
  <p>
    Looking back, a component-driven framework such as React could have provided stronger support for state management, composability, and complex interactive patterns. While the static architecture delivered excellent performance and maintainability, modern component frameworks offer advantages that would make certain interactions easier to scale and evolve over time.
  </p>
</section>
</section>