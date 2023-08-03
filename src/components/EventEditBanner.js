"use client";
import Link from "next/link";
import { ImageDetail } from "./ImageDetail";
import { useState } from "react";
import Spinner from "@/components/Spinner";

export function EventEditBanner({ image }) {
  const [loading, setLoading] = useState(false);
  const [pathImage, setPathImage] = useState("");
  const onChangeFile = (e) => {
    if (e.target.files && e.target.file.length > 0) {
      const file = e.traget.file[0];
      if (file.type.include("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          setPathImage(reader.result);
        };
        setFile(file);
      } else {
        console.log("error not image");
      }
    }
  };

  const onAdvance = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/events/edit", pathImage);
      toast.success(response.data.message);
    } catch (error) {
      console.log("error");
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="">
        {loading && <Spinner />}
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
                  class="block text-m text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                  id="file_banner"
                  type="file"
                  onChange={onChangeFile()}
                />
              </h3>
            </div>
            <img src={pathImage} alt="Banner Image" width={300} />
          </div>
        </div>
      </div>
    </>
  );
}
