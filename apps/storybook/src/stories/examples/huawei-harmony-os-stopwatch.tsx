import { Link } from '../../components/link'

export const HuaweiHarmonyOSStopwatch = () => (
  <div className="grid gap-2">
    <div className="flex items-center justify-center rounded-lg bg-gradient-to-b from-gray-700 to-gray-800 p-20">
      <div className="grid justify-center gap-5">
        <div className="nm-protrude-4 nm-light-source-t nm-shadow-gray-950/80 nm-highlight-gray-400/40 nm-blur-2xl relative size-60 rounded-full bg-gradient-to-b from-gray-900 to-gray-800 before:absolute before:size-full before:rounded-full before:shadow-[inset_0_0.25rem_0.25rem_var(--tw-shadow-color)] before:shadow-gray-800 after:absolute after:size-full after:rounded-full after:shadow-[inset_0_-0.25rem_0.25rem_var(--tw-shadow-color)] after:shadow-gray-800/50">
          {[60, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((mark, index) => {
            // We calculate the angle by multiplying the index by 30 degrees (since we have 12 numbers, 360 degrees / 12 = 30 degrees for each step). Subtracting 90 degrees aligns the 60 at the top.
            const angle = index * 30 - 90
            // 50 is used to center the numbers in the parent container. 45 is the radius of the circle where the numbers will be positioned.
            const x = 50 + 39.5 * Math.cos((angle * Math.PI) / 180)
            const y = 50 + 39.5 * Math.sin((angle * Math.PI) / 180)
            return (
              <span
                key={mark}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-gray-200"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                {mark}
              </span>
            )
          })}
          {Array.from({ length: 60 }).map((_, index) => {
            // 6 degrees for each second mark (360 / 60), -90 to start from the top
            const angle = index * 6 - 90
            const x = 50 + 46 * Math.cos((angle * Math.PI) / 180)
            const y = 50 + 46 * Math.sin((angle * Math.PI) / 180)
            const isMark = index % 5 === 0
            return (
              <div
                key={index}
                className="absolute origin-center rounded-md bg-gray-400"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                  width: `${isMark ? 3 : 2}px`,
                  height: `${isMark ? 10 : 6}px`,
                }}
              />
            )
          })}
          <div className="absolute left-1/2 top-1/2 h-[calc(50%-0.5rem)] w-0.5 origin-bottom -translate-x-1/2 -translate-y-full rotate-12 bg-red-500" />
          <div className="absolute left-1/2 top-1/2 h-3 w-0.5 origin-top -translate-x-1/2 rotate-12 bg-red-500" />
          <div className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800 ring-2 ring-red-500" />
        </div>
        <time className="text-center text-gray-100">00:02.18</time>
      </div>
    </div>
    <p className="text-xs text-gray-500">
      Based on design by <Link href="https://www.huawei.com/">Huawei</Link>
      :&nbsp;
      <Link href="https://consumer.huawei.com/en/harmonyos">
        https://consumer.huawei.com/en/harmonyos
      </Link>
      .
    </p>
  </div>
)
