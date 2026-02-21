---
layout: page
permalink: /research/
title: Research
description: List of publications and working papers
nav: true
nav_order: 1
---

<div class="publications">
  <h2>Working papers</h2>
  {% bibliography -g none -q @*[group=Working papers]* %}

  <h2>Publications</h2>
  {% bibliography -g none -q @*[group=Publications]* %}

  <h2>Policy reports</h2>
  {% bibliography -g none -q @*[group=Policy reports]* %}
  
</div>
