# Romantic Birthday Surprise for Mango

## Experience
- Replace the placeholder with a full-screen, mobile-first surprise journey using the confirmed personalization: recipient **Mango**, sender **Strawberry**.
- Keep one stage visible at a time with cinematic crossfades, a subtle progress counter, previous-stage access, skip-animation support, and a complete replay at the end.
- Follow this sequence: welcome → Happy balloon → Birthday balloon → My Love balloon → gift → envelope and letter → memories → playlist → final sunset and love reveal.

## Visual direction
- Create a warm sunset world using the supplied palette: deep plum, sunset coral, rose pink, vivid purple, cream, and white.
- Generate cohesive original artwork for the sunset scenes, cute kitten with gift/envelope, romantic memories, playlist cover, and final couple silhouette; no external stock placeholders or copied reference collage.
- Use Dancing Script for emotional headings and Poppins for readable controls/body copy, loaded through the document head.
- Add glossy heart balloons, fairy lights, soft bokeh, roses, petals, sparkles, and restrained heart particles, with reduced-motion alternatives.

## Interactions
- Build accessible heart balloons that bob, react to pointer/keyboard input, shake, pop into color-matched hearts, play optional synthesized pop sounds, and advance only after the animation completes.
- Animate the gift ribbon/lid/light reveal, then the envelope opening and letter sliding into view with the exact supplied message and progressive text reveal.
- Build a three-photo Polaroid memory gallery with touch-friendly browsing, fullscreen lightbox, captions, previous/next controls, outside-click close, Escape support, and focus handling.
- Build a functional playlist player with the requested editable track configuration, play/pause, previous/next, seek bar, time display, volume, and mute. Missing local audio will be handled gracefully without bundling copyrighted music.
- Keep optional ambient music and sound controls available after first interaction; generate lightweight sound effects in-browser so no licensed files are needed.
- Finish with the animated sunset screen, delayed/tappable glowing-heart message, and tap-anywhere replay behavior.

## Code and customization
- Keep personal names, exact letter, captions, memories, playlist entries, and stage labels in dedicated data/config files.
- Split the journey into focused React components and hooks while keeping shared effects lightweight and reusable.
- Use Motion for React for stage and interaction choreography, Lucide icons for controls, semantic theme tokens in the global stylesheet, and existing design-system buttons for commands.

## Accessibility and quality
- Add descriptive labels, visible keyboard focus, full keyboard operation, strong contrast, readable mobile letter sizing, safe-area spacing, and no horizontal overflow.
- Respect `prefers-reduced-motion`, limit particle counts, lazy-load noncritical images, and avoid long blocking animation sequences.
- Add unique home-page metadata for Mango’s birthday surprise.
- Verify the complete journey in the live app at desktop and mobile viewport sizes, including balloon progression, gift/envelope opening, gallery controls, audio controls, final reveal, replay, and browser console errors.
