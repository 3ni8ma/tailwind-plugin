import plugin from 'tailwindcss/plugin'

const glassmorphism = plugin(({ addUtilities, matchUtilities, theme }) => {
  addUtilities({
    '.glass': {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    '.glass-dark': {
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    '.glass-strong': {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
    },
  })

  addUtilities({
    '.text-gradient': {
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  })

  addUtilities({
    '.mask-fade-bottom': {
      maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
    },
    '.mask-fade-top': {
      maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
    },
    '.mask-fade-sides': {
      maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    },
  })

  matchUtilities(
    {
      'glow': (value) => ({
        boxShadow: `0 0 ${value} ${value} rgba(59, 130, 246, 0.3)`,
      }),
    },
    { values: theme('spacing') }
  )
})

export default glassmorphism
export { glassmorphism }
