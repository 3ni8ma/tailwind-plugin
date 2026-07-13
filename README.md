# @3ni8ma/tailwind-plugin

Additional utility classes for Tailwind CSS — glassmorphism, text gradients, masks, and glow effects.

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

### Utilities

| Class | Effect |
|-------|--------|
| `.glass` | Frosted glass background (light) |
| `.glass-dark` | Frosted glass background (dark) |
| `.glass-strong` | Stronger frosted glass effect |
| `.text-gradient` | Transparent fill text for gradient backgrounds |
| `.mask-fade-bottom` | Fade out towards bottom |
| `.mask-fade-top` | Fade out towards top |
| `.mask-fade-sides` | Fade out on left and right edges |
| `.glow-{size}` | Blue glow box-shadow (e.g. `.glow-4`) |

## License

MIT

<!-- ach: 2026-07-10 18:00:43 -->

<!-- ach: 2026-07-10 20:30:20 -->

<!-- ach: 2026-07-10 23:00:21 -->

<!-- ach: 2026-07-12 17:30:06 -->

<!-- ach: 2026-07-12 22:31:06 -->
