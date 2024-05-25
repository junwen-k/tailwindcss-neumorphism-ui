import { Config } from 'tailwindcss'
import { expect, it } from 'vitest'

import neumorphism from '../src'
import { html, css, run } from '../vitest/run'

it('generates neumorphism shadow utilities', async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="nm-protrude"></div>
          <div class="nm-dent"></div>
          <div class="nm-protrude-1"></div>
          <div class="nm-dent-1"></div>
          <div class="nm-distance-1"></div>
          <div class="nm-blur"></div>
          <div class="nm-shadow-black"></div>
          <div class="nm-highlight-white"></div>
          <div class="nm-light-source-tr"></div>
        `,
      },
    ],
    corePlugins: { preflight: false },
  } as const satisfies Config

  const input = css`
    @tailwind utilities;
  `

  const result = await run(input, config)

  expect(result.css).toMatchFormattedCss(css`
    .nm-dent {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        inset var(--nm-shadow-cast, 0 0 #0000), inset var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }

    .nm-protrude {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }

    .nm-dent-1 {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.25rem;
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        inset var(--nm-shadow-cast, 0 0 #0000), inset var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }

    .nm-distance-1 {
      --nm-shadow-distance: 0.25rem;
    }

    .nm-protrude-1 {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.25rem;
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }

    .nm-blur {
      --nm-shadow-blur: 8px;
    }

    .nm-highlight-white {
      --nm-shadow-highlight-color: #fff;
    }

    .nm-shadow-black {
      --nm-shadow-color: #000;
    }

    .nm-light-source-tr {
      --nm-shadow-light-source: 45deg;
    }
  `)
})

it('supports using arbitrary values', async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="nm-distance-[2px]"></div>
          <div class="nm-blur-[2px]"></div>
          <div class="nm-shadow-[#50d71e]"></div>
          <div class="nm-highlight-[#50d71e]"></div>
          <div class="nm-light-source-[17deg]"></div>
        `,
      },
    ],
    corePlugins: { preflight: false },
  } as const satisfies Config

  const input = css`
    @tailwind utilities;
  `

  const result = await run(input, config)

  expect(result.css).toMatchFormattedCss(css`
    .nm-distance-\[2px\] {
      --nm-shadow-distance: 2px;
    }

    .nm-blur-\[2px\] {
      --nm-shadow-blur: 2px;
    }

    .nm-highlight-\[\#50d71e\] {
      --nm-shadow-highlight-color: #50d71e;
    }

    .nm-shadow-\[\#50d71e\] {
      --nm-shadow-color: #50d71e;
    }

    .nm-light-source-\[17deg\] {
      --nm-shadow-light-source: 17deg;
    }
  `)
})

it('works seamlessly with native tailwind shadow / ring utilities', async () => {
  const config = {
    content: [
      {
        raw: html` <div class="nm-protrude shadow shadow-black ring ring-black"></div> `,
      },
    ],
    corePlugins: { preflight: false },
  } as const satisfies Config

  const input = css`
    @tailwind utilities;
  `

  const result = await run(input, config)

  expect(result.css).toMatchFormattedCss(css`
    .shadow {
      --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow);
    }

    .shadow-black {
      --tw-shadow-color: #000;
      --tw-shadow: var(--tw-shadow-colored);
    }

    .ring {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
        var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width))
        var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }

    .ring-black {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
    }

    .nm-protrude {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }
  `)
})

it('supports customizing utilities prefix', async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="soft-ui-protrude"></div>
          <div class="soft-ui-dent"></div>
          <div class="soft-ui-protrude-1"></div>
          <div class="soft-ui-dent-1"></div>
          <div class="soft-ui-distance-1"></div>
          <div class="soft-ui-blur"></div>
          <div class="soft-ui-shadow-black"></div>
          <div class="soft-ui-highlight-white"></div>
          <div class="soft-ui-light-source-tr"></div>
        `,
      },
    ],
    plugins: [neumorphism({ prefix: 'soft-ui' })],
    corePlugins: { preflight: false },
  } as const satisfies Config

  const input = css`
    @tailwind utilities;
  `

  const result = await run(input, config)

  expect(result.css).toMatchFormattedCss(css`
    .soft-ui-dent {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        inset var(--nm-shadow-cast, 0 0 #0000), inset var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }

    .soft-ui-protrude {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.5rem;
      --nm-shadow-blur: 12px;
      --nm-shadow-color: rgb(0 0 0 / 0.15);
      --nm-shadow-highlight-color: rgb(255 255 255 / 0.75);
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }

    .soft-ui-dent-1 {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.25rem;
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        inset var(--nm-shadow-cast, 0 0 #0000), inset var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }

    .soft-ui-distance-1 {
      --nm-shadow-distance: 0.25rem;
    }

    .soft-ui-protrude-1 {
      --nm-shadow-x: calc(
        var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1)
      );
      --nm-shadow-y: calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)));
      --nm-shadow-highlight: calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1)
        var(--nm-shadow-blur) var(--nm-shadow-highlight-color);
      --nm-shadow-cast: var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur)
        var(--nm-shadow-color);
      --nm-shadow-distance: 0.25rem;
      --nm-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow), var(--nm-shadow);
    }

    .soft-ui-blur {
      --nm-shadow-blur: 8px;
    }

    .soft-ui-highlight-white {
      --nm-shadow-highlight-color: #fff;
    }

    .soft-ui-shadow-black {
      --nm-shadow-color: #000;
    }

    .soft-ui-light-source-tr {
      --nm-shadow-light-source: 45deg;
    }
  `)
})
