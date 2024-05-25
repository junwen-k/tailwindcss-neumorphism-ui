import path from 'path'

import postcss from 'postcss'
import tailwind, { Config } from 'tailwindcss'
import { expect } from 'vitest'

import neumorphism from '../src'

export const css = String.raw
export const html = String.raw
export const javascript = String.raw

export async function run(input: string, config: Config, plugin = tailwind) {
  const { currentTestName } = expect.getState()

  config.plugins ??= []
  if (!config.plugins.includes(neumorphism)) {
    config.plugins.push(neumorphism)
  }

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}
