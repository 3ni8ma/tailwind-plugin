// Build: 2026-07-20 14:33:44 | run 1784572424
import plugin from "tailwindcss/plugin.js";

interface PluginOptions {
  glowColor?: string;
}

const glassmorphism = plugin.withOptions<PluginOptions>(
  (options = {}) =>
    ({ addUtilities, matchUtilities, theme }) => {
      const glowColor = options.glowColor || "59, 130, 246";

      addUtilities({
        ".glass": {
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        },
        ".glass-dark": {
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        },
        ".glass-strong": {
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        ".text-gradient": {
          color: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        },
        ".text-gradient-animate": {
          color: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 3s ease infinite",
        },
        ".mask-fade-bottom": {
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        },
        ".mask-fade-top": {
          maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)",
        },
        ".mask-fade-sides": {
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        },
        ".backdrop-blur-sm": {
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        },
        ".backdrop-blur-lg": {
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        },
        ".backdrop-blur-xl": {
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        },
        ".text-shadow-lg": {
          textShadow: "0 4px 8px rgba(0,0,0,0.5)",
        },
        ".border-gradient": {
          borderImage: "linear-gradient(to right, #D946EF, #6366F1, #22D3EE) 1",
        },
        ".noise": {
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        },
      });

      matchUtilities(
        {
          glow: (value: string) => ({
            boxShadow: `0 0 ${value} ${glowColor}`,
          }),
        },
        { values: theme("spacing") },
      );

      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: `0 2px 4px rgba(0,0,0,${value})`,
          }),
        },
        { values: { sm: "0.2", md: "0.4", lg: "0.6" } },
      );
    },
);

export default glassmorphism;
export { glassmorphism };
