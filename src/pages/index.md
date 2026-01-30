---
title: Peyton Stewart. UX Designer + Engineer
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
# I bring digital products to life with design and code.

<ul class="block-container">
  {% for item in caseStudies %}
    <a href="{{ item.link }}"><li>{% include "patterns/block.html" %}</li></a>
  {% endfor %}
</ul>
