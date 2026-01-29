---
title: Peyton Stewart. UX Designer + Engineer
layout: /layouts/home.njk
caseStudies:
  - title: SmokefreeVET NRT
    link: /case-studies/smokefreevet/
  - title: Case Study 2
    link: /case-studies/case-study-2/
  - title: Case Study 3
    link: /case-studies/case-study-3/
  - title: Case Study 4
    link: /case-studies/case-study-4/
permalink: /
---
# I bring digital products to life with design and code.

<ul class="block-container">
  {% for item in caseStudies %}
    <a href="{{ item.link }}"><li>{% include "patterns/block.html" %}</li></a>
  {% endfor %}
</ul>
