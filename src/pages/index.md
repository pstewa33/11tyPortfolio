---
title: Peyton Stewart — UX Engineer (Systems & Product Architecture)
layout: /layouts/home.njk
caseStudies:
  - title: Design System Engineering
    link: /case-studies/dmxlibrary/
  - title: Design System Migration - From Legacy Framework to Scalable System
    link: /case-studies/dccps/
  - title: Modernizing a Legacy Healthcare System for Clarity and Scale
    link: /case-studies/smokefreevet/
permalink: /
---
# UX Engineer focused on building scalable, accessible systems

## I design and structure complex systems — turning requirements, constraints, and legacy platforms into maintainable, production-ready solutions.

I’m a UX Engineer who prefers building systems over producing artifacts. My work focuses on defining structure, logic, and constraints — designing interaction models, component systems, and content architectures that hold up in real production environments.

I specialize in translating ambiguity into enforceable system behavior, working within accessibility, compliance, legacy code, and multi-team ownership constraints. The result is software that is not just usable, but maintainable, extensible, and built to scale.

## Selected work

<ul class="block-container">
  {% for item in caseStudies %}
    <a href="{{ item.link }}"><li>{% include "patterns/block.html" %}</li></a>
  {% endfor %}
</ul>
