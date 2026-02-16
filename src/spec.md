# Specification

## Summary
**Goal:** Build a responsive, single-page landing site for “AIGen Studio” that closely matches the uploaded design’s dark cinematic layout and styling, with a mock prompt “Generate” flow and a static, local-image gallery.

**Planned changes:**
- Recreate the page structure from the design: top navigation, hero section, prompt input + Generate button section, Gallery grid, plus Pricing and Contact sections.
- Implement navigation links (Home, Gallery, Pricing, Contact) with smooth scrolling and usable responsive behavior on small screens.
- Build a prompt input with inline validation and a mock Generate action (no AI APIs): show a brief loading state and then append a new placeholder image card to the gallery from local static assets.
- Create a Gallery section with a title, optional style/filter dropdown (e.g., “Dramatic”), and a responsive grid of keyboard-focusable image cards with consistent aspect ratio and hover/focus styling.
- Apply a consistent visual theme (dark charcoal surfaces, deep crimson accents, subtle glow, elegant serif headline + readable sans-serif body) across all sections.
- Ensure all hero/gallery imagery uses neutral non-person visuals (do not reuse real-person photos from the design) and is served from `frontend/public/assets/generated`.

**User-visible outcome:** Users can navigate a polished landing page matching the provided mock, enter a prompt, click Generate to see a short loading state, and then see the gallery update with an added local placeholder image; they can also view Pricing and submit a Contact form with client-side validation and a local success message.
