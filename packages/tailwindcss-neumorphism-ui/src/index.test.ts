import { expect, it } from 'vitest'

import { css, run } from '../vitest/run'

it('generates neumorphism protrude utilities', async () => {
  const result = await run(
    'nm-protrude nm-distance-1 nm-blur-md nm-shadow-black nm-highlight-white nm-light-source-tr'
  )

  await expect(result.css).toIncludeCss(css`
    .nm-protrude {
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow: var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow:
        var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow), var(--tw-shadow), var(--nm-shadow, 0 0 #0000);
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-distance-1 {
      --nm-shadow-distance: calc(var(--spacing) * 1);
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-blur-md {
      --nm-shadow-blur: var(--blur-md);
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-shadow-black {
      --nm-shadow-color: var(--color-black);
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-highlight-white {
      --nm-shadow-highlight-color: var(--color-white);
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-light-source-tr {
      --nm-shadow-light-source: var(--nm-light-source-tr);
    }
  `)
})

it('generates neumorphism dent utilities', async () => {
  const result = await run('nm-dent')

  await expect(result.css).toIncludeCss(css`
    .nm-dent {
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow:
        inset var(--nm-shadow-cast, 0 0 #0000), inset var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow:
        var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow), var(--tw-shadow), var(--nm-shadow, 0 0 #0000);
    }
  `)
})

it('generates preset utilities via @apply', async () => {
  const result = await run('nm-protrude-sm nm-dent-lg')

  // nm-protrude-sm: @apply nm-protrude then overrides distance, blur, highlight-color
  await expect(result.css).toIncludeCss(css`
    .nm-protrude-sm {
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow: var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow:
        var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow), var(--tw-shadow), var(--nm-shadow, 0 0 #0000);
      --nm-shadow-distance: 0.25rem;
      --nm-shadow-blur: 4px;
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.5);
    }
  `)

  // nm-dent-lg: @apply nm-dent then overrides distance, blur, shadow-color
  await expect(result.css).toIncludeCss(css`
    .nm-dent-lg {
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow:
        inset var(--nm-shadow-cast, 0 0 #0000), inset var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow:
        var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow), var(--tw-shadow), var(--nm-shadow, 0 0 #0000);
      --nm-shadow-distance: 1rem;
      --nm-shadow-blur: 16px;
      --nm-shadow-color: rgb(0 0 0 / 0.2);
    }
  `)
})

it('supports arbitrary values', async () => {
  const result = await run(
    'nm-distance-[2px] nm-blur-[2px] nm-shadow-[#50d71e] nm-highlight-[#50d71e] nm-light-source-[17deg]'
  )

  await expect(result.css).toIncludeCss(css`
    .nm-distance-\[2px\] {
      --nm-shadow-distance: 2px;
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-blur-\[2px\] {
      --nm-shadow-blur: 2px;
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-shadow-\[\#50d71e\] {
      --nm-shadow-color: #50d71e;
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-highlight-\[\#50d71e\] {
      --nm-shadow-highlight-color: #50d71e;
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .nm-light-source-\[17deg\] {
      --nm-shadow-light-source: 17deg;
    }
  `)
})

it('supports color opacity modifiers', async () => {
  const result = await run('nm-shadow-gray-950/80 nm-highlight-gray-400/40')

  // With opacity modifier, the output includes color-mix for opacity
  expect(result.css).toContain('.nm-shadow-gray-950\\/80')
  expect(result.css).toContain(
    'color-mix(in srgb, oklch(13% 0.028 261.692) calc(80 * 1%), transparent)'
  )

  expect(result.css).toContain('.nm-highlight-gray-400\\/40')
  expect(result.css).toContain(
    'color-mix(in srgb, oklch(70.7% 0.022 261.325) calc(40 * 1%), transparent)'
  )
})

it('composes with native Tailwind v4 shadow and ring utilities', async () => {
  const result = await run('nm-protrude shadow-md ring-2 ring-blue-500')

  await expect(result.css).toIncludeCss(css`
    .nm-protrude {
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow: var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow:
        var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow), var(--tw-shadow), var(--nm-shadow, 0 0 #0000);
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .shadow-md {
      --tw-shadow:
        0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)),
        0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow:
        var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow), var(--tw-shadow);
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .ring-2 {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width))
        var(--tw-ring-color, currentcolor);
      box-shadow:
        var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow), var(--tw-shadow);
    }
  `)

  await expect(result.css).toIncludeCss(css`
    .ring-blue-500 {
      --tw-ring-color: var(--color-blue-500);
    }
  `)
})
