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
      <summary>Content Modeling Before UI</summary>
      <p><strong>Challenge:</strong> Content and templates weren't aligned.</p>
      <p><strong>Decision:</strong> Defined reusable content models before building layouts.</p>
      <p><strong>Outcome:</strong> Reduced rework and improved scalability.</p>
    </details>
    <details>
      <summary>Extending the Design System</summary>
      <p><strong>Challenge:</strong> Project requirements exceeded available components.</p>
      <p><strong>Decision:</strong> Created new components while maintaining token-based styling and accessibility standards.</p>
      <p><strong>Outcome:</strong> The system expanded without introducing inconsistency.</p>
    </details>
    <details>
      <summary>CMS-Driven Prototyping</summary>
      <p><strong>Challenge:</strong> A realistic prototype required realistic content workflows.</p>
      <p><strong>Decision:</strong> Integrated Contentful and generated pages through Jekyll.</p>
      <p><strong>Outcome:</strong> Stakeholders experienced realistic content behavior before development.</p>
    </details>
    <details>
      <summary>Accessibility in Custom Components</summary>
      <p><strong>Challenge:</strong> Custom interactions risked introducing accessibility issues.</p>
      <p><strong>Decision:</strong> Implemented keyboard support, ARIA attributes, and focus management.</p>
      <p><strong>Outcome:</strong> Custom components remained consistent with accessibility requirements.</p>
    </details>
  </div>
</section>
<section class="impact">
  <h2 id="impact">Impact</h2>
  <p>The interactive prototype changed how stakeholders evaluated the redesign.</p>
  <p>Instead of reviewing static mockups, they could navigate real user flows, interact with content, and experience responsive layouts directly. This led to:</p>
  <div class="impact-grid">
    <div class="impact-item">
      <p>Earlier feedback on navigation and content organization</p>
    </div>
    <div class="impact-item">
      <p>Validation of layouts using real content rather than placeholder text</p>
    </div>
    <div class="impact-item">
      <p>Identification of usability issues before development</p>
    </div>
    <div class="impact-item">
      <p>Greater stakeholder confidence in design decisions</p>
    </div>
    <div class="impact-item">
      <p>Validation of the internal design system on a large, content-heavy site</p>
    </div>
  </div>
</section>

<section class="key-takeaways">
  <h2 id="key-takeaways">Key Takeaways and Reflection</h2>
  <p>
    One key lesson was the importance of involving content strategy early. Defining the content model upfront reduces iteration-time and better-informs layout decisions.
  </p>
  <p>
    The project also exposed limitations of static site generation. While tools like Jekyll worked well for structured prototyping, they made it harder to simulate complex, dynamic interactions. If I were rebuilding this today, I would use a framework like React to support more dynamic behavior and state-driven components.
  </p>
  <p>
    More broadly, this project reinforced how important it is to align content, components, and system constraints early—and how much tooling choices affect both the development process and the quality of feedback.
  </p>
</section>
</section>