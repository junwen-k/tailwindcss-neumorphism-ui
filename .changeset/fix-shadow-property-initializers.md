---
'tailwindcss-neumorphism-ui': patch
---

Fix `nm-protrude` and `nm-dent` being invisible on pages with no native shadow or ring utilities.

Tailwind only emits `@property` declarations for its shadow composition variables (`--tw-shadow`, `--tw-inset-shadow`, `--tw-ring-shadow`, `--tw-inset-ring-shadow`, `--tw-ring-offset-shadow`) when at least one native shadow or ring utility is included in the build. Without those declarations, `var(--tw-shadow)` resolves as an invalid value and `box-shadow` falls back to `none`, making neumorphism effects invisible.

Adding `@source inline("shadow-none")` to the plugin CSS ensures these `@property` initializers are always emitted, regardless of whether the user's project uses any other shadow utilities.
