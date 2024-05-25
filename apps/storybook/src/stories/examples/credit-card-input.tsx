import { IconScan } from '@tabler/icons-react'

import { Link } from '../../components/link'

export const CreditCardInput = () => (
  <div className="grid gap-2">
    <div className="flex items-center justify-center rounded-lg bg-slate-300 p-20">
      <div className="nm-protrude nm-highlight-slate-100/50 nm-shadow-slate-400/80 grid w-full max-w-lg gap-4 rounded-xl bg-slate-200 p-6 ring-1 ring-slate-100 transition">
        <div className="grid gap-3">
          <label htmlFor="credit-card-input" className="text-sm text-slate-700">
            Credit Card Number
          </label>
          <div className="flex items-center justify-between gap-4">
            <input
              id="credit-card-input"
              className="nm-dent-sm hover:nm-dent focus-visible:nm-protrude w-full rounded-md bg-slate-200 bg-none px-3 py-2 transition placeholder:font-mono placeholder:opacity-75 focus-visible:outline-none"
              placeholder="0000 0000 0000 0000"
            />
            <button className="nm-protrude hover:nm-protrude-sm active:nm-dent flex aspect-square size-10 items-center justify-center rounded-lg text-slate-500 transition-shadow">
              <span className="sr-only">OCR Scan</span>
              <IconScan />
            </button>
          </div>
        </div>
      </div>
    </div>
    <p className="text-xs text-gray-500">
      Based on design by <Link href="https://dribbble.com/plyuto">Oleksandr Plyuto</Link>
      :&nbsp;
      <Link href="https://dribbble.com/shots/8297803-Skeuomorph-Mobile-Banking-Continuation">
        https://dribbble.com/shots/8297803-Skeuomorph-Mobile-Banking-Continuation
      </Link>
      .
    </p>
  </div>
)
