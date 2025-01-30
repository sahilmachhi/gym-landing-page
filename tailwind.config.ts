import type {Config} from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'noise-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.167' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='28' specularConstant='0.75' specularExponent='20' lighting-color='%23fff' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E%3CfeDistantLight azimuth='3' elevation='100'%3E%3C/feDistantLight%3E%3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%2309090B'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ffffff' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E")`,
                'grid-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='3.5' stroke='hsla(0, 0%25, 100%25, 1.00)' fill='none'%3E%3Crect width='400' height='400' x='0' y='0' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='0' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='400' y='0' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='400' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='800' y='0' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='800' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='0' y='400' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='0' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='400' y='400' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='400' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='800' y='400' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='800' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='0' y='800' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='0' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='400' y='800' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='400' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='800' y='800' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='800' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
                'grid-pattern-light': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='3.5' stroke='hsla(215, 16%25, 47%25, 1.00)' fill='none'%3E%3Crect width='400' height='400' x='0' y='0' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='0' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='400' y='0' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='400' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='800' y='0' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='800' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='0' y='400' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='0' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='400' y='400' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='400' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='800' y='400' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='800' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='0' y='800' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='0' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='400' y='800' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='400' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3Crect width='400' height='400' x='800' y='800' opacity='0.15'%3E%3C/rect%3E%3Ccircle r='10.85' cx='800' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`
            },
            animation: {
                spotlight: 'spotlight 2s ease .75s 1 forwards'
            },
            keyframes: {
                spotlight: {
                    '0%': {
                        opacity: '0.0',
                        transform: 'translate(-72%, -62%) scale(0.5)'
                    },
                    '100%': {
                        opacity: '1.0',
                        transform: 'translate(-50%,-40%) scale(1)'
                    }
                }
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
}

