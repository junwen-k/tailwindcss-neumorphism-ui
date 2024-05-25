declare module 'tailwindcss/lib/util/flattenColorPalette' {
  export default function flattenColorPalette(
    palette: Record<string, string>
  ): Record<string, string>
}

declare module 'tailwindcss/lib/util/toColorValue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export default function toColorValue(maybeFunction: any): any
}
