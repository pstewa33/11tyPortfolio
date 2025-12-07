---
title: Hello World
layout: /layouts/base.njk
---

# Hello World!

{% for page in collections.pages %}
 - {{ page.data.title }} {{ page.url }}
{%- endfor %}
