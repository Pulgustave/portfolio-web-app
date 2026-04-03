# Building CRAFT Aladdin: Automating the Invisible Work of Structural Engineering

Structural engineering has a public-facing story: you calculate loads, size members, make the decisions that keep a building standing. Then there's the other work — forty gridlines renamed by hand, two hundred columns tagged one by one, twelve framing plan sheets aligned by eye. Systematic, repetitive, necessary, and consuming time that should have gone to thinking about the structure.

CRAFT Aladdin started as an attempt to make that work disappear.

---

## The Insight

Repetitive engineering tasks follow deterministic rules. Vertical grids are sorted left to right and named S-1, S-2, S-3. Always. A column tagged UP has a top level above the current reference level. Every time. When a task has rules that never change, the question stops being *how do I do this* and becomes *why am I the one doing it*.

If it has rules, it can be code.

---

## The Commands

**B7 — Clean Slate** resets a template model in dependency order: annotations first, then beam systems, slabs, framing, columns, walls — so nothing fails trying to delete a parent before its children. Levels and views are protected unconditionally. A report shows exactly what was removed and what was skipped.

**B2 & B3 — Grid Renaming and Dimensions** determine orientation from each grid's direction vector, sort by midpoint coordinate, apply the S-1/S-A naming convention, and place dimension strings in the active view. Two buttons, two minutes, same result every project.

**B1 — Column UP/DOWN Tags** reads each column's base and top level elevations, compares them to the view's reference level with a floating-point tolerance, and places one of three tag types. The engineer confirms the column selection and tag family assignments before anything is placed.

**B5 & B6 — Wall Openings** place structural openings matching the architect's windows — B5 automatically, filtering the linked model by construction phase; B6 manually, using the window's known host wall to avoid nearest-wall ambiguity. Both exist because B5 has cases where B6 is right.

**B4 — Align Framing Views** finds the engineering plan viewport on each target sheet, computes the exact offset from a template sheet's viewport center, and moves it. Twelve sheets aligned precisely in forty seconds.

---

## Adoption

Each button went through the same arc: skepticism, a first use on a live project, quiet adoption. The skepticism was rational — automated tools in engineering don't fail loudly, they fail silently, and a wrong tag on a construction document is a real error. What earned trust was specificity: not "it works," but "here is exactly what it checks, here is what it cannot know, here is what you still confirm yourself."

By the third project on each tool, no one asked anymore.

---

## What Was Gained

Time, obviously. But more importantly, consistency — every project's grids follow the same convention, every framing plan set is aligned to the same reference, regardless of who ran the tool or when.

And something harder to name: permission. When repeatable work is automated, the energy it used to consume goes somewhere else. The half-hour on grid dimensions becomes time spent on the section layout. That was the point all along.

---

*CRAFT Aladdin is under active development. Current commands cover project setup, grid management, arch model coordination, documentation, and model cleanup.*
