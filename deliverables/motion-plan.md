# TIANYU ELECTRIC Motion Plan

## Context

- Customer: 福州天宇电气股份有限公司 / TIANYU ELECTRIC
- Industry: distribution transformers, compact substations and high-voltage electrical equipment
- Conversion goal: move engineering and procurement buyers from capability proof to product-specific RFQ
- Visual character: precise industrial engineering, clean white and graphite surfaces, controlled brand red, authentic product and test-facility imagery
- Recent-combination check: do not repeat the recent HBT cabinet-row sequence, Tianrun yarn path, Jiushun conductor path, HVAC airflow network or generic equipment rotation.

## External candidates

1. **EXT-TY-01 — Motion `inView` / React viewport reveal**  
   Source: `https://motion.dev/docs/inview` and `https://motion.dev/docs/react-scroll-animations`.  
   Decision: adopt the mechanism for per-section and per-card one-time viewport entry, observer cleanup and bounded stagger. It provides the required true viewport lifecycle without a global timeout.
2. **EXT-TY-02 — CSS View Timeline**  
   Source: `https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines`.  
   Decision: adopt only as progressive enhancement for the single-line power-flow trace. Core content and completion state must not depend on browser support.
3. **EXT-TY-03 — GSAP `ScrollTrigger.batch()`**  
   Source: `https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.batch()/`.  
   Decision: reject. Motion plus CSS can provide bounded card sequencing without a second animation runtime, and the additional dependency does not improve the RFQ path or 390px behavior.

## Selected scenes

### MOT-TY-01 — Energized field-line hero sequence

- Role: narrative.
- Location: three homepage Banner slides.
- Effect: each slide uses a 500ms crossfade, then a single restrained red field-line sweep around the protected transformer/substation/test-hall subject. DOM headline, proof point and CTA enter in priority order over 420–620ms.
- Reason: references electrical energy and transformer magnetic fields without cheap particles, glow balls or rotating equipment.
- Desktop: use the left negative-space safe area; controls float locally over the image and never form a separate strip.
- 390px: use manually selected focal positions, reduce the line sweep to one short pass, keep product and CTA fully visible.
- Reduced motion: show the first frame immediately, disable autoplay and line sweep, preserve manual controls.

### MOT-TY-02 — Core-lamination information reveal

- Role: content.
- Location: Products, Capabilities, Manufacturing, Quality and representative About sections.
- Effect: headings and media reveal through a short vertical mask resembling transformer-core laminations; repeated cards enter individually with 70ms stagger capped at 280ms.
- Reason: gives the site a transformer-specific reading rhythm while keeping all customer content legible and unclipped.
- Desktop: 24px vertical travel, 560ms duration.
- 390px: 12px travel, 420ms duration; no large clipping masks over long text.
- Reduced motion / script failure: content is immediately visible; no opacity-zero base state.

### MOT-TY-03 — Single-line power-distribution progression

- Role: industry-specific explanation.
- Location: homepage applications story and Applications page.
- Effect: a simplified non-factual decorative single-line network progresses once from generation through transformation to distribution as the section enters view; each real application label appears at its node. CSS View Timeline may enhance the line, but IntersectionObserver provides the authoritative once-in-view trigger.
- Reason: clarifies the product system relationship without asserting new equipment, customers or project data.
- Desktop: horizontal network with no pinning or scroll hijack.
- 390px: vertical network with static complete connectors and sequential node emphasis.
- Reduced motion: complete network and all labels appear immediately.

### MOT-TY-04 — Precision control feedback

- Role: interaction.
- Location: navigation, product cards, FAQ, carousel, filters, CTAs and inquiry form.
- Effect: 150–220ms border, arrow, focus-ring and 4px lift feedback; product images remain fully contained and do not crop on hover.
- Reason: communicates control and reliability while improving keyboard and pointer feedback.
- Touch: never depends on hover; tap targets remain at least 44px.
- Reduced motion: remove lift and image scaling, retain color, border and focus feedback.

## Whole-site lifecycle contract

- Every major public-page section and every repeated card participates in a real viewport-triggered entrance.
- No 15-second or other global timer may mark unseen content as played. Fallback visibility and animation completion are separate states.
- Initial CSS keeps content visible. Motion-only hidden states may be applied only after synchronous `data-motion-ready` initialization.
- Verify the first and last major sections on every public route after waiting longer than the maximum fallback time before scrolling.
- Verify normal JS, disabled JS, blocked motion script, slow loading and `prefers-reduced-motion` on desktop and 390px.

## Readiness

- Scene count: 4
- External candidate count: 3
- Desktop readiness: PASS
- 390px readiness: PASS
- Reduced-motion readiness: PASS
- Combination fingerprint: `MOT-TY-01 + MOT-TY-02 + MOT-TY-03 + MOT-TY-04`

