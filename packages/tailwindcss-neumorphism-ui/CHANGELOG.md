# tailwindcss-neumorphism-ui

## 2.0.0

### Major Changes

- [#31](https://github.com/junwen-k/tailwindcss-neumorphism-ui/pull/31) [`cb74077`](https://github.com/junwen-k/tailwindcss-neumorphism-ui/commit/cb74077351d0709a07bfc29733f340a1d05211d0) Thanks [@junwen-k](https://github.com/junwen-k)! - ### Breaking Changes

  - **Tailwind CSS v4 only**: Dropped support for Tailwind CSS v3. The minimum required version is now `tailwindcss@4.0.0`.
  - **Pure CSS plugin**: The plugin is now a plain CSS file using `@theme` and `@utility` directives. Import it with `@import "tailwindcss-neumorphism-ui"` instead of `@plugin "tailwindcss-neumorphism-ui"`.
  - **Removed `prefix` option**: Tailwind CSS v4 `@utility` names are static and cannot be parameterized at runtime. All utilities use the `nm-` prefix.
  - **Removed functional `nm-protrude-{number}` / `nm-dent-{number}` utilities**: Use the composable pattern `nm-protrude nm-distance-{number}` instead. This also applies to arbitrary values (e.g., `nm-protrude nm-distance-[2px]`).
  - **Removed bare `nm-blur` utility**: Use sized variants like `nm-blur-md` instead, matching Tailwind CSS v4's convention.
  - **Blur scale updated to Tailwind CSS v4 values**: `--blur-xs` is now `4px` (was `blur-sm` in v3), `--blur-sm` is now `8px` (was `blur` in v3). If you relied on specific blur sizes, update accordingly.

  ### New Features

  - **Color opacity modifiers**: Color utilities now support Tailwind v4's opacity modifier syntax (e.g., `nm-shadow-gray-950/80`, `nm-highlight-white/50`).
  - **Composable API**: All presets use `@apply` internally, making the codebase simpler and more maintainable. Presets remain fully standalone — `nm-protrude-xl` works on its own without additional classes.

  ### Migration

  See the [migration guide](https://tailwindcss-neumorphism-ui.junwen-k.dev/?path=/docs/documentation-migrating-from-v1-to-v2--docs) for step-by-step upgrade instructions.

## 1.0.4

### Patch Changes

- [#18](https://github.com/junwen-k/tailwindcss-neumorphism-ui/pull/18) [`022a54f`](https://github.com/junwen-k/tailwindcss-neumorphism-ui/commit/022a54f259a33a00e53cd37182e48b38b026e6cf) Thanks [@junwen-k](https://github.com/junwen-k)! - feat: support tailwind v4

## 1.0.3

### Patch Changes

- [`ebae642`](https://github.com/junwen-k/tailwindcss-neumorphism-ui/commit/ebae642a9ccf2290321404a99f24df86e47c99f2) Thanks [@junwen-k](https://github.com/junwen-k)! - fix README broken image

## 1.0.2

### Patch Changes

- add keywords and update repository

## 1.0.1

### Patch Changes

- fix package readme and license

## 1.0.0

### Major Changes

- Initial release
