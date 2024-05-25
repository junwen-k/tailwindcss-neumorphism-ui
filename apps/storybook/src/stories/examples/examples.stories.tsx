import type { Meta, StoryObj } from '@storybook/react'

import { CreditCardInput } from './credit-card-input'
import { HuaweiHarmonyOSStopwatch } from './huawei-harmony-os-stopwatch'
import { RecorderAppButton } from './recorder-app-button'
import { TeslaCybertruckApp } from './tesla-cybertruck-app'

const meta = {
  title: 'Examples',
} satisfies Meta

export default meta

type Story = StoryObj

export const HuaweiHarmonyOSStopwatchStory: Story = {
  name: 'Huawei HarmonyOS Stopwatch',
  render: () => <HuaweiHarmonyOSStopwatch />,
}

export const CreditCardInputStory: Story = {
  name: 'Credit Card Input',
  render: () => <CreditCardInput />,
}

export const RecorderAppButtonStory: Story = {
  name: 'Recorder App Button',
  render: () => <RecorderAppButton />,
}

export const TeslaCybertruckAppStory: Story = {
  name: 'Tesla Cybertruck App',
  render: () => <TeslaCybertruckApp />,
}
