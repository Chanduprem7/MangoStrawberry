# Mango's Birthday Surprise

Create a fully functional, interactive, romantic birthday surprise website based on the attached reference image.

The website should NOT simply reproduce the image as a collage. Instead, use the image as the visual and functional reference and convert every panel/function shown in the image into an interactive website experience.

The website is a private birthday surprise for a girl named "Sri", from someone named "Mango".

The overall experience should feel:

- Romantic

- Cute

- Emotional

- Interactive

- Premium

- Warm

- Magical

- Personal

- Mobile-friendly

Use a cinematic romantic visual style with sunset backgrounds, warm lights, glowing hearts, roses, balloons, cute kitten illustrations, soft particles, and subtle animations.

Do NOT use a generic corporate website design.

==================================================

TECH STACK

==================================================

Use:

- React / Next.js

- Tailwind CSS

- JavaScript or TypeScript

- Framer Motion for animations

- Lucide React for icons

- HTML5 Audio API for music

- CSS animations and transitions

The website must be completely responsive for:

- Mobile

- Tablet

- Desktop

The primary experience should be optimized for mobile because the recipient may open it on a phone.

==================================================

IMPORTANT UX REQUIREMENT

==================================================

The entire website should feel like an interactive surprise journey rather than a normal website.

Use a single-page experience with smooth transitions between stages.

Do NOT immediately show everything.

The user should discover each surprise by clicking/tapping interactive elements.

Show a small progress indicator such as:

Surprise 1 / 7

but keep it subtle and romantic.

Allow the user to revisit previous sections if desired.

Add a small "Replay" button at the end.

==================================================

STAGE 1 — WELCOME SCREEN

==================================================

Create the opening screen based on the first panel of the reference image.

Background:

- Beautiful blurred sunset/evening scene

- Warm orange/pink/purple sky

- Soft bokeh lights

- Small glowing heart particles floating in the background

- Romantic cinematic atmosphere

Place a cute kitten sitting behind a gift box near the lower-left/center area.

At the top/center display:

"Hey Mango💝"

Under it:

"Click on the balloons to see

your special surprise..."

Below this, show THREE large glossy heart-shaped balloons:

1. Pink balloon

   Text:

   "HAPPY

   ♡"

2. Purple balloon

   Text:

   "BIRTHDAY

   ♡"

3. Red balloon

   Text:

   "MY LOVE

   ♡"

Each balloon must be individually clickable.

Add a tiny "Music On" indicator near the bottom-right.

When the user hovers over a balloon:

- Balloon gently moves upward

- Slight glow

- Cursor changes to pointer

- Heart particles appear

When the user taps/clicks:

- Balloon shakes slightly

- Pop sound plays

- Balloon bursts into small heart-shaped particles

- Smooth transition to the corresponding surprise

==================================================

STAGE 2 — HAPPY BALLOON POP

==================================================

When the user clicks the "HAPPY" balloon:

Display a large glossy pink/red heart balloon in the center.

Text inside:

"HAPPY

♡"

Add:

"Pop!"

near the balloon with a small hand-drawn arrow pointing toward it.

The balloon should gently float.

When clicked:

- Play a balloon-pop sound

- Balloon explodes into many small pink/red heart particles

- Add a soft screen glow

- Animate particles outward

- Then transition to the next state

==================================================

STAGE 3 — BIRTHDAY BALLOON

==================================================

Display a large purple/pink glossy heart balloon.

Text:

"BIRTHDAY

♡"

Add:

"Pop!"

with an arrow pointing to the balloon.

When clicked:

- Balloon shakes

- Pop animation

- Purple/pink heart particles explode

- Small sparkles appear

- Transition smoothly to the next surprise

==================================================

STAGE 4 — MY LOVE BALLOON

==================================================

Display a large glowing red heart balloon.

Text:

"MY LOVE

♡"

Add:

"Pop!"

When clicked:

- Play pop sound

- Balloon bursts

- Red hearts fly across the screen

- Add romantic glowing particles

- Transition to the gift section

==================================================

STAGE 5 — GIFT BOX / SPECIAL GIFT

==================================================

After all balloons have been popped, show:

"All Popped!"

Under it:

"Now open your special gift..."

Display a cute kitten sitting beside/behind a wrapped gift box.

The gift box should be interactive.

On hover:

- Box slightly shakes

- Ribbon wiggles

- Glow appears around the box

On click/tap:

- Ribbon unties

- Box lid opens

- Bright warm light comes from inside

- Heart particles rise from the box

- Play a magical reveal sound

- Transition to the letter/message

==================================================

STAGE 6 — PERSONAL LETTER

==================================================

Show a warm romantic scene with a cute kitten holding/opening an envelope.

Text near the envelope:

"Open it

— Mango... 💕"

Make the envelope clickable.

When clicked:

- Envelope opens

- Letter smoothly slides upward

- Background becomes slightly darker/blurred

- Soft rose petals fall

- Warm glow surrounds the letter

Display the following exact message:

"Happy Birthday, my love ❤️

I feel so happy and lucky that you came into my life. Since you came into my life, you've made so many moments more beautiful and special.

On your special day, I wish that this birthday brings you more happiness, endless joy, success, wealth, and all the beautiful things you deserve. ✨

And there’s one wish that means the most to me…

I want us to celebrate our future birthdays together, year after year, with lots of love, happiness, smiles, and beautiful memories. ❤️

You are truly the best, best love of my life, and I’m so grateful to have you with me.

Once again, many more happy returns of the day, my love. 🎂❤️

Forever yours,

Strawberry😘"

Use a beautiful handwritten-style font for the main message while maintaining excellent readability.

Animate the message as if the letter is being revealed gradually.

==================================================

STAGE 7 — MEMORIES

==================================================

Create a romantic memory/gallery section.

Title:

"You make

every moment special ♡"

Show THREE Polaroid-style photographs hanging from a string of warm fairy lights.

The photos should look like personal memories.

Use placeholder images initially, but structure the code so they can easily be replaced with real photos.

Each photo should:

- Slightly rotate

- Have a subtle floating animation

- Glow on hover

- Zoom slightly when clicked

When a photo is clicked:

- Open it in a beautiful fullscreen/lightbox view

- Add a short romantic caption

- Allow next/previous navigation

- Close with X or tapping outside

Use warm sunset/romantic photography aesthetics.

==================================================

STAGE 8 — PERSONAL PLAYLIST

==================================================

Create a music player section titled:

"Our Little Playlist ♡"

Design it like a cute romantic music player.

Playlist:

1. Perfect - Ed Sheeran

Display:

- Album/record artwork

- Play/pause button

- Previous button

- Next button

- Progress bar

- Current time

- Total duration

- Volume control

- Playlist items

Show a small message:

"Because every Lyric

reminds me of you... ♡"

IMPORTANT:

Do use copyrighted music files bundled into the project.

The code should have an easy configuration section such as:

const playlist = [

  {

    title: "Perfect",

    artist: "Ed Sheeran",

    audio: "/music/perfect.mp3"

  },

  ...

];

==================================================

STAGE 9 — FINAL BIRTHDAY SCREEN

==================================================

After completing the experience, show a cinematic final screen.

Background:

- Beautiful sunset

- Pink/purple/orange sky

- Soft glowing hearts

- Fairy lights

- Romantic atmosphere

Show a silhouette of a couple sitting together and watching the sunset.

Main text:

"Happy Birthday

Mango ♡"

Below:

"Forever & Always"

Then:

"Mango & Strawberry"

Add a glowing heart underneath.

Use elegant handwritten typography.

Animate the text with a gentle fade-in.

Add subtle floating heart particles.

==================================================

FINAL LOVE MESSAGE

==================================================

After a few seconds or when the user taps the heart, reveal a glowing heart outline.

Inside the heart:

"I'm so lucky

to have you

in my life...

♡"

Below:

"Click anywhere to replay ♡"

Clicking anywhere on this final screen should restart the complete surprise journey from Stage 1.

==================================================

ANIMATION REQUIREMENTS

==================================================

Use smooth, polished animations throughout.

Include:

- Floating balloons

- Balloon bobbing

- Balloon pop explosion

- Heart particle effects

- Rose petals

- Sparkles

- Gift box opening

- Envelope opening

- Letter reveal

- Polaroid swinging

- Fairy light glow

- Text fade-ins

- Smooth page transitions

- Background parallax

- Soft zoom effects

- Button hover animations

- Cursor/tap feedback

Animations should feel elegant, not excessive.

Use Framer Motion where appropriate.

Respect:

prefers-reduced-motion

and reduce animations if the user has enabled reduced motion.

==================================================

BACKGROUND MUSIC

==================================================

Provide an optional ambient background music system.

When the user first interacts with the page:

- Ask/show a subtle "Turn on music ♡" control

- Do not force autoplay because browsers may block it.

Music controls should remain accessible through a small floating music button.

Clicking it should:

- Play/pause music

- Show current state

==================================================

SOUND EFFECTS

==================================================

Use optional sound effects for:

- Balloon pop

- Gift opening

- Envelope opening

- Page transition

- Final reveal

Do not make sound mandatory.

Provide a global mute/unmute control.

==================================================

DESIGN SYSTEM

==================================================

Color palette:

Deep romantic background:

#120D18

Warm sunset:

#FF8A65

Pink:

#FF4F81

Rose:

#E91E63

Purple:

#8E5CF6

Soft cream:

#FFF4E6

White:

#FFFFFF

Use gradients and glow effects carefully.

Typography:

- Elegant handwritten font for headings

- Clean readable font for body text

- Use Google Fonts such as:

  - Caveat

  - Dancing Script

  - Poppins

Do not overuse fonts.

==================================================

VISUAL STYLE

==================================================

The reference image uses:

- Cute kitten artwork

- Heart-shaped balloons

- Gift boxes

- Roses

- Fairy lights

- Sunset backgrounds

- Romantic handwritten text

- Polaroid photographs

- Glowing hearts

- Warm cinematic lighting

Recreate this overall visual language.

Do not make the website look like a generic Valentine's Day template.

It should feel like a personal birthday surprise made specifically for Sri.

==================================================

RESPONSIVE DESIGN

==================================================

Desktop:

- Full cinematic layout

- Large interactive elements

- Rich background effects

Mobile:

- Fit content within viewport

- Balloons stacked appropriately

- Large touch-friendly buttons

- No horizontal scrolling

- Letter should remain readable

- Gallery should become swipeable

- Music player should fit mobile width

Tablet:

- Use an intermediate layout

==================================================

ACCESSIBILITY

==================================================

Every interactive element must have:

- Accessible labels

- Keyboard navigation

- Visible focus state

- Appropriate ARIA labels

- Good contrast

Do not rely only on color to indicate interaction.

==================================================

CODE STRUCTURE

==================================================

Organize the project cleanly.

Suggested structure:

src/

  components/

    WelcomeScreen

    Balloon

    BalloonPop

    GiftBox

    Envelope

    LoveLetter

    MemoryGallery

    MusicPlayer

    FinalScreen

    HeartParticles

    FloatingHearts

    FairyLights

    BackgroundEffects

  data/

    playlist.js

    memories.js

    messages.js

  hooks/

    useAudio.js

    useSurpriseJourney.js

  assets/

    images/

    music/

    sounds/

Keep all editable personal content in configuration/data files.

For example:

const birthdayConfig = {

  recipientName: "Mango",

  senderName: "Strawberry",

  greeting: "Hey Mango ♡",

  finalMessage: "I'm so lucky to have you in my life..."

};

This allows the website owner to easily customize the website later.

==================================================

STATE MANAGEMENT

==================================================

Create a clear journey state:

WELCOME

→ HAPPY_BALLOON

→ BIRTHDAY_BALLOON

→ LOVE_BALLOON

→ GIFT

→ LETTER

→ MEMORIES

→ PLAYLIST

→ FINAL

Track completion of each interaction.

Do not allow the user to accidentally skip important animations unless they intentionally use a navigation control.

Add a subtle "Skip animation" option if an animation takes too long.

==================================================

PERFORMANCE

==================================================

Optimize:

- Images

- Animations

- Audio

- Particle effects

Do not create thousands of DOM elements for particles.

Use CSS animations or canvas where appropriate.

Lazy-load gallery images.

Avoid excessive CPU/GPU usage on mobile.

==================================================

IMPORTANT FUNCTIONAL REQUIREMENTS

==================================================

The final website must actually work, not just look good.

Required functionality:

✓ Clickable balloons

✓ Balloon pop animations

✓ Pop sound effects

✓ Gift box interaction

✓ Envelope interaction

✓ Letter reveal

✓ Memory gallery

✓ Image lightbox

✓ Playlist

✓ Play/pause

✓ Next/previous music

✓ Music progress

✓ Volume control

✓ Mute/unmute

✓ Floating hearts

✓ Smooth stage transitions

✓ Final replay

✓ Responsive mobile layout

✓ Keyboard accessibility

✓ Reduced-motion support

==================================================

DO NOT

==================================================

Do NOT:

- Create a static screenshot of the reference

- Put the reference image as the website background

- Make all sections visible simultaneously

- Use generic stock corporate UI

- Use dark hacker/cybersecurity styling

- Add unnecessary navigation menus

- Add login/signup

- Add advertisements

- Add social media sections

- Add unnecessary forms

- Use copyrighted audio files directly

- Make the experience feel like a normal business website

==================================================

FINAL RESULT

==================================================

The finished website should feel like opening a digital birthday gift.

The user should:

1. See "Hey Mango ♡"

2. Discover the three balloons

3. Pop them one by one

4. Open the special gift

5. Open the personal letter

6. Explore the memories

7. Listen to the little playlist

8. Reach the final sunset scene

9. See the final love message

10. Be able to replay the entire experience

Make the transitions between each stage seamless and emotionally engaging.

Prioritize polish, visual quality, interaction, responsiveness, and a personal handmade feeling.

The final result should closely match the mood, composition, typography, colors, characters, and interaction concepts shown in the provided reference image while functioning as a real interactive website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sunset-surprise-journey.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1a6a3518-14b8-49a8-b37a-8d5f027db065).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
