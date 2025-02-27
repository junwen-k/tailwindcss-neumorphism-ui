import { IconBatteryFilled, IconLocationFilled, IconTemperature } from '@tabler/icons-react'
import { twMerge } from 'tailwind-merge'

import { Link } from '../../components/link'
import Cybertruck from '../assets/cybertruck.png'

const Button = ({ className, ...props }: React.ComponentProps<'button'>) => (
  <button
    className={twMerge(
      'nm-protrude nm-highlight-zinc-500/40 active:nm-dent active:nm-highlight-zinc-500/40 nm-shadow-zinc-900/80 active:nm-shadow-zinc-900/80 bg-linear-to-br rounded-full from-zinc-700 to-zinc-900 p-2 text-zinc-500',
      className
    )}
    {...props}
  />
)

interface StatProps {
  icon: React.ReactNode
  label: React.ReactNode
  value: React.ReactNode
}

const Stat = ({ icon, label, value }: StatProps) => (
  <div className="flex gap-2">
    {icon}
    <div className="grid gap-1">
      <dt className="text-xs text-zinc-500">{label}</dt>
      <dd className="text-xs text-zinc-100">{value}</dd>
    </div>
  </div>
)

interface InfoCardProps {
  label: React.ReactNode
  value: React.ReactNode
}

const InfoCard = ({ label, value }: InfoCardProps) => (
  <button className="nm-protrude nm-highlight-zinc-500/20 nm-shadow-zinc-950 before:bg-linear-to-br after:bg-linear-to-br relative flex aspect-square items-end overflow-hidden rounded-md p-3 text-left before:absolute before:bottom-0 before:left-0 before:size-24 before:-translate-x-1/3 before:translate-y-3 before:rounded-full before:from-zinc-900/70 before:to-zinc-900 after:absolute after:bottom-0 after:right-0 after:size-20 after:translate-x-1/4 after:translate-y-1/4 after:rounded-full after:from-zinc-950/40 after:to-zinc-900">
    <div className="z-10">
      <p className="text-xs text-zinc-100">{label}</p>
      <p className="text-nowrap text-[0.6rem] text-zinc-500">{value}</p>
    </div>
  </button>
)

export const TeslaCybertruckApp = () => (
  <div className="grid gap-2">
    <div className="flex items-center justify-center rounded-lg bg-zinc-950 p-20">
      <div className="bg-linear-to-b w-full max-w-xs overflow-hidden rounded-3xl from-zinc-700 via-90% to-zinc-950 shadow-lg ring-1 ring-zinc-800">
        <div className="grid gap-8 p-5">
          <header className="flex items-center justify-between">
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 8l16 0" />
                <path d="M4 16l16 0" />
              </svg>
            </Button>
            <div className="text-center">
              <p className="text-xs text-zinc-500">Tesla</p>
              <h1 className="text-sm text-zinc-100">Cybertruck</h1>
            </div>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </Button>
          </header>
          <div className="relative">
            <img src={Cybertruck} alt="Tesla's Cybertruck" className="min-h-40" />
            <div className="blur-xs absolute top-1/2 h-1 w-[6.5rem] -translate-y-2.5 translate-x-5 bg-sky-400" />
            <div className="absolute top-1/2 h-1 w-[6.5rem] -translate-y-2.5 translate-x-5 bg-sky-700 blur-md" />
          </div>
          <section className="grid gap-4">
            <h4 className="text-sm text-zinc-100">Status</h4>
            <dl className="grid grid-cols-3 gap-4">
              <Stat
                icon={<IconBatteryFilled className="size-4 text-zinc-500" />}
                label="Battery"
                value="54%"
              />
              <Stat
                icon={<IconLocationFilled className="size-4 text-zinc-500" />}
                label="Range"
                value="297km"
              />
              <Stat
                icon={<IconTemperature className="size-4 text-zinc-500" />}
                label="Temperature"
                value="27°C"
              />
            </dl>
          </section>
          <section className="grid gap-4">
            <h4 className="text-sm text-zinc-100">Information</h4>
            <div className="grid grid-cols-3 gap-4">
              <InfoCard label="Engine" value="Sleeping mode" />
              <InfoCard label="Climate" value="A/C is ON" />
              <InfoCard label="Fan speed" value="Low" />
            </div>
          </section>
        </div>
        <footer className="bg-linear-to-b relative mt-4 w-full items-center rounded-2xl from-zinc-800 to-zinc-950 px-6 py-4 ring-1 ring-zinc-600">
          <div className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 translate-y-2 rounded-full bg-zinc-950/80" />
          <div className="grid gap-0.5">
            <p className="text-sm text-zinc-100">A/C is ON</p>
            <p className="max-w-60 text-[0.6rem] text-zinc-500">
              Tap to turn off or swipe to control A/C / Fan speed, configure shortcut for a fast
              setup.
            </p>
          </div>
        </footer>
      </div>
    </div>
    <p className="text-xs text-zinc-500">
      Based on design by <Link href="https://dribbble.com/menainizar">Menai Nizar</Link>
      :&nbsp;
      <Link href="https://dribbble.com/shots/23947979-Neumorphism-Tesla-App-Futuristic-App-Design-Using-Figma">
        https://dribbble.com/shots/23947979-Neumorphism-Tesla-App-Futuristic-App-Design-Using-Figma
      </Link>
      .
    </p>
  </div>
)
