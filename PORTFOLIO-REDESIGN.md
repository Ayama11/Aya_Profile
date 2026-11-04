# Portfolio refinement

## Design direction

Restores the original cream, teal, dark teal, ink, and soft orange palette.
Rounded surfaces, restrained serif headings, generous spacing, and soft shadows
replace the previous sharp, dark-heavy presentation.

- **Hero:** Original-style teal serif name, balanced two-column composition, and
  an original inline SVG “context aperture” signature. Three interlocking paths
  suggest perception, understanding, and application without a literal brain,
  robot, or network. Animation gently breathes and stops with reduced motion.
- **Projects:** CADify remains featured. All seven projects, their existing
  descriptions, metrics, images, case studies, and outbound links remain.
  Images retain their natural aspect ratios rather than being cropped.
- **Skills:** All 36 existing skills are individually scannable chips within
  four categories, with lightweight inline category icons.
- **Process:** Rounded step selectors and a light detail panel, with proper tab
  relationships and arrow, Home, and End keyboard navigation.
- **Experience:** Softer timeline entries with clearer role and date hierarchy.
- **Contact:** Rounded primary-teal card with labeled Email, LinkedIn, and
  Telegram links and consistent SVG sizing.
- **Case studies:** Named native dialogs, project covers, rounded metric tiles,
  mobile-friendly spacing, sticky close control, background scroll lock,
  backdrop dismissal, and native Escape behavior.

## Source map

- `src/App.tsx`: Content, original signature SVG, components, and interactions.
- `src/index.css`: Brand tokens, responsive layouts, typography, and motion.
- `src/assets/fonts/`: Locally served DM Sans and Libre Baskerville WOFF2 files,
  with their SIL Open Font Licenses. No third-party font requests are required.
- `public/assets/`: Existing project images, demos, resume, and favicon.

The existing React/Vite architecture and relative asset references are retained.
`pnpm build` produces the static `dist/` output; GitHub Pages can serve that
output under the existing project subpath. No backend or history router is used.
This refinement does not publish or modify the remote GitHub repository.

## Verification

- `pnpm format`: passed.
- `pnpm build`: passed.
- Production output exercised in headless Chromium at 1440×1000, 768×1024,
  390×844, and 320×740.
- All seven case studies and both image galleries opened successfully.
- Workflow click and arrow-key behavior, dialog Escape dismissal, mobile menu
  opening/dismissal, back-to-top navigation, and reduced motion passed.
- No detected page or modal horizontal overflow at these sizes.
- Local fonts and project/gallery images loaded; all 36 skill chips remained.
- No JavaScript runtime exceptions were reported by Chromium.
- Contact destinations match the original values. External websites were not
  authenticated or tested end-to-end, and other browser engines were not tested.
