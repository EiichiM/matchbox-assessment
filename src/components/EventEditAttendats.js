import Link from "next/link";

export function EventEditAttendats({ image }) {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center h-100 py-5 bg-white">
          <div className="w-10/12">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                Attendants
              </h3>
              <Link
                href="/"
                className="relative z-20 flex items-center w-1/2 pt-12 mx-auto text-xl text-white/80 hover:text-white"
              >
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
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3 rounded-l-lg">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3 rounded-r-lg">
                        Birthday
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr
                        class="bg-white dark:bg-gray-800"
                        key={event.client.id}
                      >
                        <th class="px-6 py-3" key={event.client.id}>
                          {event.client.name}
                        </th>

                        <td class="px-6 py-3" key={event.client.id}>
                          {event.client.email}
                        </td>

                        <td class="px-6 py-4" key={event.client.id}>
                          {event.client.birthday}
                        </td>
                      </tr>
                    ))}
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Michael Jordan
                      </th>
                      <td class="px-6 py-4">prueba@prueba.com</td>
                      <td class="px-6 py-4">February 17, 1973</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
