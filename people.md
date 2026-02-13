---
layout: page
title: "People"
---

Meet our members.

{% for person in site.people %}
  <div class="mb-6">
    <h2 class="text-xl font-heading font-bold">
      <a href="{{ person.url | relative_url }}">{{ person.name }}</a>
    </h2>
    <p>{{ person.role }}</p>
  </div>
{% endfor %}
