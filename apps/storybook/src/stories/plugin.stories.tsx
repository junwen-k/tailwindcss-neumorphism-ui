import type { Meta, StoryObj } from '@storybook/react'

import { Playground } from './playground'

const meta = {
  title: 'Playground',
  component: Playground,
  args: {
    lightSource: 'tl',
    distance: 'DEFAULT',
    type: 'protrude',
    curvature: 'flat',
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Playground>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default neumorphism shadow.
 */
export const Default: Story = {
  decorators: [
    (Story) => (
      <main className="rounded-lg bg-stone-200 p-12">
        <Story />
      </main>
    ),
  ],
}

/**
 * A list of preset neumorphism shadow utilities.
 */
export const Preset: Story = {
  decorators: [
    (Story) => (
      <main className="rounded-lg bg-stone-200 p-12">
        <Story />
      </main>
    ),
  ],
  render: () => (
    <div className="grid gap-24">
      <div className="flex items-center gap-12">
        <div className="nm-protrude-sm size-12 rounded-lg" />
        <div className="nm-protrude size-16 rounded-lg" />
        <div className="nm-protrude-md size-20 rounded-lg" />
        <div className="nm-protrude-lg size-24 rounded-lg" />
        <div className="nm-protrude-xl size-28 rounded-lg" />
        <div className="nm-protrude-2xl size-32 rounded-lg" />
      </div>
      <div className="flex items-center gap-12">
        <div className="nm-dent-sm size-12 rounded-lg" />
        <div className="nm-dent size-16 rounded-lg" />
        <div className="nm-dent-md size-20 rounded-lg" />
        <div className="nm-dent-lg size-24 rounded-lg" />
        <div className="nm-dent-xl size-28 rounded-lg" />
        <div className="nm-dent-2xl size-32 rounded-lg" />
      </div>
    </div>
  ),
}

/**
 * Highlight and shadow colors can be customised to adapt dark mode.
 */
export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <main className="rounded-lg bg-stone-800 p-12">
        <Story />
      </main>
    ),
  ],
  render: () => (
    <div className="grid gap-24">
      <div className="flex items-center gap-12">
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-protrude-sm size-12 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-protrude size-16 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-protrude-md size-20 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-protrude-lg size-24 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-protrude-xl size-28 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-protrude-2xl size-32 rounded-lg" />
      </div>
      <div className="flex items-center gap-12">
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-dent-sm size-12 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-dent size-16 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-dent-md size-20 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-dent-lg size-24 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-dent-xl size-28 rounded-lg" />
        <div className="nm-highlight-stone-700/50 nm-shadow-stone-950/70 nm-dent-2xl size-32 rounded-lg" />
      </div>
    </div>
  ),
}
