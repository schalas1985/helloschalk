# Frontend Learnings

## What I Learned On This Project

- Normalize layout systems early.
- Use one heading alignment rule across sections instead of per-section overrides.
- For repeated shapes, build one reliable shape system and reuse it everywhere.
- Avoid browser-fragile CSS masking when simple SVG-backed rendering is more dependable.
- When the user gives a visual pattern, match the pattern exactly before improvising variations.
- For staggered layouts, use explicit placement logic instead of layered hacks.
- When a section starts becoming hard to control, simplify the structure before tuning styling.
- Verify alignment issues against screenshots, not assumptions.

## Frontend Standard For This Project

- Section headings should align to the same internal content width.
- Shared components should keep identical geometry unless there is a deliberate reason not to.
- Honeycomb motifs should feel structural and subtle, not decorative noise.
- Mid-page sections should feel calm and readable, with enough breathing room to land well in the viewport.
- Changes requested as "do not change anything else" should be handled as narrowly as possible.

## Process Improvements For Future Iterations

- Before styling, define:
  - content width
  - heading alignment
  - reusable shape components
  - spacing rhythm
  - responsive rules
- After any structural change, review nearby sections for regressions before moving on.
- If a user reports the same issue twice, stop patching locally and refactor the underlying rule.
