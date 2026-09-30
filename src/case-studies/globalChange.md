---
permalink: /case-studies/global-change/
layout: layouts/case-study.njk
projectImage: /assets/images/globalChange/gc-overview.png
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
        <p>Q2 2022 – Q3 2022</p>
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
    <div class="intro-container">
      <div class="intro-text">
        <p>
          The Global Change Research Program needed to redesign its website to align with the United States Web Design System (USWDS) while improving the structure, accessibility, and usability of an existing content-heavy site.
        </p>
        <br>
        <p>
          Rather than relying solely on static design files, I helped create a functional, multi-page prototype that behaved much more like the eventual product. The prototype combined reusable design-system components, structured CMS content, and production-like templates so stakeholders could evaluate the experience before development began.
        </p>
      </div>
      <div class="image-container">
        <img class="gc-solution-image" src="/assets/images/globalChange/gc-2020.png" alt="homepage-prototype">
        <img class="gc-solution-image" src="/assets/images/globalChange/gc-home.png" alt="homepage-prototype">
      </div>
    </div>
  </section>
  <section class="tech-stack">
    <h2 id="tech-stack">Tech Stack</h2>
    <ul class="tech-tags">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
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
      The existing design process relied heavily on static mockups. While useful for visual exploration, static designs made it difficult to evaluate how navigation, content hierarchy, responsive layouts, and interactive components would work together across a large website.
    </p>
    <p>
      This created a gap between design concepts and the eventual product. Stakeholders often had to imagine how the experience would work, while the team risked discovering usability, accessibility, and content-structure issues later in the process.
    </p>
    <p>
      The challenge was to create a realistic environment where the team could test the experience earlier—without waiting for the full website to be developed.
    </p>
  </section>
  <section class="context-constraints">
    <h2 id="Context-and-Constraints">Context and Constraints</h2>
    <p>
      The project required close collaboration between UX, content, design, and development teams. The website also contained a substantial amount of existing content and multiple page types, making reusable patterns and content modeling particularly important.
    </p>
    <div class="constraints">
      <div class="constraint">
        <i class="fa-solid fa-users-viewfinder"></i>
        <span>Stakeholder Expectations</span>
        <p>
          Stakeholders responded more effectively to interactive experiences than static mockups, creating a need for a realistic and navigable prototype.
        </p>
      </div>
      <div class="constraint">
        <i class="fa-solid fa-layer-group"></i>
        <span>Design System Requirements</span>
        <p>
          The prototype needed to use an existing USWDS-based design system to maintain consistency while also testing how well the system supported the project's requirements.
        </p>
      </div>
      <div class="constraint">
        <i class="fa-solid fa-puzzle-piece"></i>
        <span>Pattern Constraints</span>
        <p>
          Reusing established components accelerated development, but not every requirement could be addressed with existing patterns. This required careful decisions about when to extend versus create new components.
        </p>
      </div>
      <div class="constraint">
        <i class="fa-solid fa-sitemap"></i>
        <span>Content & Scale</span>
        <p>
          The site's large content footprint and multiple page types made information architecture, content modeling, and reusable templates critical to the prototype's success.
        </p>
      </div>
    </div>
  </section>
  <section class="my-role">
    <h2 id="my-role">My Role</h2>
    <p>
      I was responsible for the technical implementation of the prototype, including integrating the design system, building reusable page templates, extending components where needed, and connecting structured content through Contentful to create a realistic, production-like experience.
    </p>
    <div class="role-boxes">
      <div class="role-box">
        <span>Owned Outright</span>
        <ul>
          <li>Built a functional, multi-page prototype using HTML, CSS, and JavaScript</li>
          <li>Applied and extended components from the US Web Design System</li>
          <li>Designed and implemented custom components where existing patterns did not meet project requirements</li>
          <li>Considered accessibility requirements when extending component behavior and interactions</li>
        </ul>
      </div>
      <div class="role-box">
        <span>Shared Ownership</span>
        <ul>
          <li>Integrated structured content using Contentful</li>
          <li>Defined content and template relationships with the broader team</li>
          <li>Connected components, templates, and content into a cohesive navigable experience</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="gc-solution">
    <h2 id="solution">Solution</h2>
    <div class="solution-text-container">
      <div class="solution-text">
        <p class="solution-box">
          We created a realistic, multi-page prototype that brought the design system, content model, and user experience together in one working environment.
        </p>
        <p class="solution-box">
          The prototype used reusable design-system components as a foundation, introduced custom components where necessary, and connected structured content from Contentful to production-like page templates. Jekyll generated the pages so the team could evaluate the experience with realistic content rather than placeholder copy.
        </p>
        <p class="solution-box">
              This shifted stakeholder conversations from “What might this look like?” to “Does this experience work?” Navigation, content hierarchy, responsive layouts, and component behavior could be evaluated directly and iterated before full development.
        </p>
      </div>
      <div class="solution-images">
        <img class="solution-image" src="/assets/images/globalChange/gc-contentful-folder.png" alt="homepage-prototype">
        <img class="solution-image" src="/assets/images/globalChange/gc-navigation-yaml.png" alt="homepage-prototype">
        <img class="solution-image" src="/assets/images/globalChange/gc-assessmentReport-yaml.png" alt="Contentful model">
        <img class="solution-image" src="/assets/images/globalChange/gc-workshops.png" alt="Contentful model">
        <img class="solution-image" src="/assets/images/globalChange/gc-template-landing.png" alt="Components">
        <!-- Add more images here anytime -->
        <button class="image-next" aria-label="Next image">
          →
        </button>
        <button class="image-expand" aria-label="View full size">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 3h6v6"/>
            <path d="M21 3l-7 7"/>
            <path d="M9 21H3v-6"/>
            <path d="M3 21l7-7"/>
          </svg>
        </button>    
        <div class="image-info">
          <div id="image-caption"></div>
          <div class="image-counter">
            <span id="current-image"></span> / <span id="total-images"></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="engineering-challenges">
    <h2 id="engineering-challenges">Engineering Challenges & Solutions</h2>
    <div class="challenge-accordion">
      <details>
        <summary>Modeling Content Before Templates</summary>
        <p>
          <strong>Challenge:</strong>
          Existing website content did not map cleanly to the new page templates, making it difficult to create flexible and reusable layouts.
        </p>
        <p>
          <strong>Decision:</strong>
          We defined reusable content models in Contentful before finalizing the page templates.
        </p>
        <p>
          <strong>Outcome:</strong>
          The resulting content structure provided a more flexible foundation for multiple page types and reduced the need to redesign templates around individual pieces of content.
        </p>
      </details>
      <details>
        <summary>Extending the Design System</summary>
        <p>
          <strong>Challenge:</strong>
          Some project requirements could not be addressed using the existing USWDS components alone.
        </p>
        <p>
          <strong>Decision:</strong>
          I helped design and implement custom components that followed the established visual language, design tokens, and accessibility patterns.
        </p>
        <p>
          <strong>Outcome:</strong>
          The prototype could support project-specific requirements without abandoning the consistency of the broader design system.
        </p>
      </details>
      <details>
        <summary>CMS-Driven Prototyping</summary>
        <p>
          <strong>Challenge:</strong>
          Static content could not accurately demonstrate how layouts would behave with real CMS-managed content.
        </p>
        <p>
          <strong>Decision:</strong>
          We integrated Contentful and used structured content to generate production-like pages within the prototype.
        </p>
        <p>
          <strong>Outcome:</strong>
          Stakeholders could evaluate layouts and information architecture using realistic content rather than placeholder text.
        </p>
      </details>
      <details>
        <summary>Accessibility in Custom Components</summary>
        <p>
          <strong>Challenge:</strong>
          Extending an established design system introduced the risk of creating interactions that behaved differently from existing accessible patterns.
        </p>
        <p>
          <strong>Decision:</strong>
          Custom interactions were designed around semantic HTML, keyboard interaction, focus behavior, and appropriate ARIA attributes where necessary.
        </p>
        <p>
          <strong>Outcome:</strong>
          The custom components maintained the interaction and accessibility principles established by the broader design system.
        </p>
      </details>
    </div>
  </section>

  <section class="impact">
    <h2 id="impact">Impact</h2>
    <p>
      The prototype changed how stakeholders evaluated the redesign. Instead of reviewing isolated screens, they could navigate realistic user flows, interact with components, and see how the design responded to real content and different screen sizes.
    </p>
    <div class="impact-grid">
      <div class="impact-item">
        <p>Navigation and information architecture were validated before implementation.</p>
      </div>
      <div class="impact-item">
        <p>Validation of layouts using realistic content rather than placeholder text</p>
      </div>
      <div class="impact-item">
        <p>Earlier identification of usability and interaction issues</p>
      </div>
      <div class="impact-item">
        <p>Stakeholders evaluated a production-like experience rather than interpreting static mockups.</p>
      </div>
      <div class="impact-item">
        <p>Real-world validation of the design system on a large, content-heavy website</p>
      </div>
    </div>
  </section>
  <section class="key-takeaways">
    <h2 id="key-takeaways">Key Takeaways and Reflection</h2>
   <p>
      One of the most important lessons from this project was the value of involving content strategy early. Understanding how content would be structured before finalizing page templates influenced layout decisions, reduced rework, and created a stronger foundation for the CMS.
    </p>
    <p>
      The project also highlighted the strengths and limitations of static site generation. Jekyll worked well for creating realistic, content-driven prototypes and production-like pages, but it was less suited to exploring increasingly complex client-side interactions.
    </p>
    <p>
      If I were rebuilding the prototype today, I would consider a component-based framework such as React for more complex interactions while retaining the same content-first approach. The underlying lesson would remain the same: technology should support the design and content model rather than dictate them.
    </p>
    <p>
      More broadly, this project reinforced that a design system is more than a collection of reusable components. Its value comes from how effectively design, content, and technology work together. By bringing those considerations into the prototyping process earlier, the team was able to make more informed decisions before committing to full development.
    </p>
  </section>
</section>

<div id="lightbox" class="lightbox hidden">

  <div class="lightbox-image-wrapper">

    <img id="lightbox-image" src="" alt="">

  </div>

  <div class="lightbox-info">
    <p id="lightbox-caption"></p>
    <span id="lightbox-counter"></span>
  </div>

  <button class="lightbox-prev" aria-label="Previous image">
    ←
  </button>

  <button class="lightbox-next" aria-label="Next image">
    →
  </button>

  <button class="lightbox-close" aria-label="Close image">
    ✕
  </button>

</div>