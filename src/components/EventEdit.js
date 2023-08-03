import Link from "next/link";

export function EventEdit({ image }) {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center h-100 py-5 bg-white">
          <div className="w-10/12">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                Event Name
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

            <div className="p-6 space-y-6">
              <label
                for="name"
                className="block mb-2 text-m  text-gray-900 dark:text-white"
              >
                Set the event name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <h3 className="mb-2 text-m text-white">
                Is this a public or private event
              </h3>
              <div className="flex items-center">
                <input
                  id="public"
                  type="radio"
                  value="public"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="public"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Public
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="private"
                  type="radio"
                  value="private"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="private"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Private
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
