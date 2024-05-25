import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import toColorValue from 'tailwindcss/lib/util/toColorValue'
import plugin from 'tailwindcss/plugin'

interface Options {
  /**
   * The prefix used for the utilities. This defaults to `nm`.
   *
   * Usage example:
   * ```html
   *  <div class="nm-protrude-sm"></div>
   *  ```
   **/
  prefix?: string
}

export default plugin.withOptions<Options>(
  ({ prefix = 'nm' } = {}) =>
    ({ matchUtilities, theme }) => {
      const defaultBoxShadow = [
        'var(--tw-ring-offset-shadow, 0 0 #0000)',
        'var(--tw-ring-shadow, 0 0 #0000)',
        'var(--tw-shadow)',
        'var(--nm-shadow)',
      ].join(', ')

      const nmShadowVariables = {
        '--nm-shadow-x':
          'calc(var(--nm-shadow-distance) * calc(sin(var(--nm-shadow-light-source, 315deg)) * -1))',
        '--nm-shadow-y':
          'calc(var(--nm-shadow-distance) * cos(var(--nm-shadow-light-source, 315deg)))',
        '--nm-shadow-highlight':
          'calc(var(--nm-shadow-x) * -1) calc(var(--nm-shadow-y) * -1) var(--nm-shadow-blur) var(--nm-shadow-highlight-color)',
        '--nm-shadow-cast':
          'var(--nm-shadow-x) var(--nm-shadow-y) var(--nm-shadow-blur) var(--nm-shadow-color)',
      }

      // presets
      matchUtilities(
        {
          [`${prefix}-protrude`]: (preset) => ({
            ...nmShadowVariables,
            ...preset,
            '--nm-shadow':
              'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000)',
            boxShadow: defaultBoxShadow,
          }),
          [`${prefix}-dent`]: (preset) => ({
            ...nmShadowVariables,
            ...preset,
            '--nm-shadow':
              'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), inset var(--nm-shadow-cast, 0 0 #0000), inset var(--nm-shadow-highlight, 0 0 #0000)',
            boxShadow: defaultBoxShadow,
          }),
        },
        { values: theme('nmShadow') }
      )

      // distances
      matchUtilities(
        {
          [`${prefix}-protrude`]: (value) => ({
            ...nmShadowVariables,
            '--nm-shadow-distance': value,
            '--nm-shadow':
              'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--nm-shadow-cast, 0 0 #0000), var(--nm-shadow-highlight, 0 0 #0000)',
            boxShadow: defaultBoxShadow,
          }),
          [`${prefix}-dent`]: (value) => ({
            ...nmShadowVariables,
            '--nm-shadow-distance': value,
            '--nm-shadow':
              'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), inset var(--nm-shadow-cast, 0 0 #0000), inset var(--nm-shadow-highlight, 0 0 #0000)',
            boxShadow: defaultBoxShadow,
          }),
          [`${prefix}-distance`]: (value) => ({
            '--nm-shadow-distance': value,
          }),
        },
        { values: theme('spacing') }
      )

      // blurs
      matchUtilities(
        {
          [`${prefix}-blur`]: (value) => ({
            '--nm-shadow-blur': value,
          }),
        },
        { values: theme('blur') }
      )

      // colors
      matchUtilities(
        {
          [`${prefix}-shadow`]: (value) => ({
            '--nm-shadow-color': toColorValue(value),
          }),
          [`${prefix}-highlight`]: (value) => ({
            '--nm-shadow-highlight-color': toColorValue(value),
          }),
        },
        {
          values: flattenColorPalette(theme('boxShadowColor')),
          type: ['color', 'any'],
        }
      )

      // light-sources
      matchUtilities(
        {
          [`${prefix}-light-source`]: (value) => ({
            '--nm-shadow-light-source': `${value}`,
          }),
        },
        { values: theme('nmLightSource') }
      )
    },
  ({ prefix = 'nm' } = {}) => ({
    theme: {
      nmShadow: {
        sm: {
          [`@apply ${prefix}-distance-1 ${prefix}-shadow-black/15 ${prefix}-highlight-white/50 ${prefix}-blur-sm`]:
            {},
        },
        DEFAULT: {
          [`@apply ${prefix}-distance-2 ${prefix}-shadow-black/15 ${prefix}-highlight-white/75 ${prefix}-blur-md`]:
            {},
        },
        md: {
          [`@apply ${prefix}-distance-4 ${prefix}-shadow-black/15 ${prefix}-highlight-white/75 ${prefix}-blur-lg`]:
            {},
        },
        lg: {
          [`@apply ${prefix}-distance-4 ${prefix}-shadow-black/20 ${prefix}-highlight-white/75 ${prefix}-blur-lg`]:
            {},
        },
        xl: {
          [`@apply ${prefix}-distance-5 ${prefix}-shadow-black/25 ${prefix}-highlight-white/75 ${prefix}-blur-lg`]:
            {},
        },
        '2xl': {
          [`@apply ${prefix}-distance-6 ${prefix}-shadow-black/35 ${prefix}-highlight-white ${prefix}-blur-xl`]:
            {},
        },
      },
      nmLightSource: {
        t: '0deg',
        tr: '45deg',
        r: '90deg',
        br: '135deg',
        b: '180deg',
        bl: '225deg',
        l: '270deg',
        tl: '315deg',
      },
    },
  })
)
