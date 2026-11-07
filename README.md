# AstroHora — redesigned starter

A responsive React + TypeScript + Vite redesign based on the supplied AstroHora project. It preserves your 12 zodiac assets and horoscope API endpoint while organizing the experience into four clear pages.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Pages and features

- **Home (`/`)**: celestial hero, sign shortcuts, daily reading CTA, and a simple three-step intro.
- **Horoscope (`/horoscope`)**: Daily / Weekly / Monthly tabs, all 12 signs, URL sign selection (e.g. `/horoscope?sign=aries`), loading/error states, and API-backed reading content.
- **Zodiac Signs (`/zodiac-signs`)**: searchable zodiac directory with element filters, date ranges, descriptions, and links into each sign's horoscope.
- **About (`/about`)**: purpose, values, and links to the main experiences.

## Wireframe / layout map

```text
┌─────────────────────────────────────────────────────────────────┐
│ AstroHora                 Home Horoscope Zodiac signs About CTA │
├─────────────────────────────────────────────────────────────────┤
│ HOME                                                            │
│ Eyebrow + large headline + short intro       Celestial artwork   │
│ [Explore horoscope] [Discover zodiac]                            │
├─────────────────────────────────────────────────────────────────┤
│ Daily reflection strip                                           │
├─────────────────────────────────────────────────────────────────┤
│ Find your sign                         [View all signs]           │
│ [Aries] [Taurus] [Gemini] [Cancer] [Leo] [Virgo]                 │
│ [Libra] [Scorpio] [Sagittarius] [Capricorn] [Aquarius] [Pisces]  │
├─────────────────────────────────────────────────────────────────┤
│ Dark feature band: daily reflection + CTA                        │
├─────────────────────────────────────────────────────────────────┤
│ Three steps: Find sign | Read horoscope | Reflect                 │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER: links + entertainment disclaimer                          │
└─────────────────────────────────────────────────────────────────┘

HOROSCOPE PAGE
[Daily] [Weekly] [Monthly]
┌─────────────────────────────┐ ┌────────────────────────────────┐
│ Choose a sign (12 cards)     │ │ Selected sign + reading        │
│                             │ │ Loading / error / horoscope     │
└─────────────────────────────┘ └────────────────────────────────┘

ZODIAC DIRECTORY: search + element filters + 3-column responsive cards
ABOUT: intro hero + story + three values + CTA
```

## Notes

- Horoscope readings need an internet connection and depend on `freehoroscopeapi.com`. If the service is unavailable, the page displays an error with a retry action.
- Astrology content is presented for reflection and entertainment, not as a scientifically validated prediction.
- The app uses Google Fonts via CSS; if offline, it falls back to system fonts.
