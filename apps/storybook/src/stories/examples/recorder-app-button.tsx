import { Link } from '../../components/link'

export const RecorderAppButton = () => (
  <div className="grid gap-2">
    <div className="flex items-center justify-center rounded-lg bg-gray-200 p-20">
      <div className="grid justify-center gap-5">
        <button className="nm-protrude-md nm-highlight-gray-100 after:nm-protrude-md after:nm-highlight-gray-100 active:nm-dent nm-shadow-gray-400/50 bg-linear-to-br after:bg-linear-to-br relative size-32 rounded-[2.25rem] border border-white from-gray-50 to-gray-200 transition after:absolute after:left-1/2 after:top-1/2 after:size-14 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border after:border-red-700 after:from-red-300 after:via-red-500 after:via-40% after:to-red-600 after:shadow-gray-400/50 active:after:from-red-500 active:after:to-red-500 active:after:shadow-none" />
        <label
          htmlFor="button"
          className="relative text-center text-3xl font-semibold text-gray-50 drop-shadow-md after:relative after:top-1 after:text-2xl after:text-red-500 after:content-['•']"
        >
          Recorder
        </label>
      </div>
    </div>
    <p className="text-xs text-gray-500">
      Based on design by <Link href="https://dribbble.com/sohaibalam67">Sohaib Alam</Link>
      :&nbsp;
      <Link href="https://dribbble.com/shots/14445233-Recorder-App-Icon">
        https://dribbble.com/shots/14445233-Recorder-App-Icon
      </Link>
      .
    </p>
  </div>
)
