---
title: Hello World
layout: /layouts/base.njk
caseStudies:
 - title: Case Study 1
 - title: Case Study 2
 - title: Case Study 3
 - title: Case Study 4
---

# Peyton Stewart. UX Designer + Engineer

## I bring digital products to life with design and code.

<ul class="block-container">
    {% for item in caseStudies %}
        <li>{% include "patterns/block.html" %}</li>
    {% endfor %}
</ul>