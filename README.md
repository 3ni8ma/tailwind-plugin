# @3ni8ma/tailwind-plugin

[![npm version](https://img.shields.io/npm/v/@3ni8ma/tailwind-plugin)](https://www.npmjs.com/package/@3ni8ma/tailwind-plugin)
[![license](https://img.shields.io/npm/l/@3ni8ma/tailwind-plugin)](LICENSE)
[![downloads](https://img.shields.io/npm/dm/@3ni8ma/tailwind-plugin)](https://www.npmjs.com/package/@3ni8ma/tailwind-plugin)

Additional utility classes for Tailwind CSS — glassmorphism, text gradients, glow effects, masks, and design tokens. One plugin, zero config, works with any Tailwind project.

## Why

Building glassmorphism from scratch means writing 10+ lines of backdrop-filter, rgba, and border properties every time. This plugin gives you `.glass`, `.glow-4`, `.text-gradient`, and more — drop-in classes that just work.

## Installation

```bash
npm install @3ni8ma/tailwind-plugin
```

## Usage

Add to your `tailwind.config.js`:

```js
import glassmorphism from '@3ni8ma/tailwind-plugin'

export default {
  plugins: [glassmorphism],
}
```

### Custom glow color

```js
import glassmorphism from '@3ni8ma/tailwind-plugin'

export default {
  plugins: [
    glassmorphism({ glowColor: '16, 185, 129' }), // emerald
  ],
}
```

## Utilities

### Glassmorphism

| Class | Effect |
|-------|--------|
| `.glass` | Frosted glass — light, subtle transparency |
| `.glass-dark` | Frosted glass — dark mode friendly |
| `.glass-strong` | Heavier blur + more opacity for emphasis |

```html
<div class="glass rounded-2xl p-6">
  <h2 class="text-gradient bg-gradient-to-r from-pink-500 to-violet-500">
    Frosted card
  </h2>
</div>
```

### Text

| Class | Effect |
|-------|--------|
| `.text-gradient` | Transparent fill — pair with any gradient background |
| `.text-gradient-animate` | Same, with a looping gradient-shift animation |
| `.text-shadow` | Subtle drop shadow |
| `.text-shadow-lg` | Heavier drop shadow |

```html
<h1 class="text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 text-4xl font-bold">
  Gradient heading
</h1>
```

### Masks

| Class | Effect |
|-------|--------|
| `.mask-fade-bottom` | Fade out towards bottom |
| `.mask-fade-top` | Fade out towards top |
| `.mask-fade-sides` | Fade out on left and right edges |

```html
<img class="mask-fade-bottom w-full" src="hero.jpg" alt="" />
```

### Glow

Dynamic — uses Tailwind's spacing scale:

```html
<button class="glow-4 bg-blue-600 text-white px-6 py-3 rounded-lg">
  Glowing button
</button>
<button class="glow-8 bg-emerald-600 text-white px-6 py-3 rounded-lg">
  Bigger glow
</button>
```

### Extras

| Class | Effect |
|-------|--------|
| `.border-gradient` | Gradient border (pink → indigo → cyan) |
| `.noise` | Subtle noise texture overlay |
| `.backdrop-blur-sm` | 4px backdrop blur |
| `.backdrop-blur-lg` | 16px backdrop blur |
| `.backdrop-blur-xl` | 24px backdrop blur |

## License

MIT

<!-- ach: 2026-09-03 20:31:39 -->

<!-- ach: 2026-09-04 14:00:13 -->

<!-- ach: 2026-09-04 16:30:13 -->

<!-- ach: 2026-09-04 19:00:25 -->

<!-- ach: 2026-09-05 02:30:16 -->

<!-- ach: 2026-09-05 15:00:21 -->

<!-- ach: 2026-09-05 17:30:11 -->
