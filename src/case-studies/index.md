---
title: Case Studies
permalink: /case-studies/
layout: layouts/base.njk
nav: true
navOrder: 2
---

## Selected work

<ul class="block-container">
  {% for item in caseStudies %}
    <a href="{{ item.link }}"><li>{% include "patterns/block.html" %}</li></a>
  {% endfor %}
</ul>