import Link from "next/link";
import { ImageDetail } from "./ImageDetail";

export function EventEdit({ image }) {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center h-100 py-5 bg-white">
          <div className="w-10/12">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                Event Banner
              </h3>
              <Link href="/">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </Link>
            </div>
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="mb-2 text-m text-white">
                Is this a public or private event
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_banner"
                  type="file"
                />
              </h3>
            </div>
            <ImageDetail />
          </div>
        </div>
      </div>
    </>
  );
}
