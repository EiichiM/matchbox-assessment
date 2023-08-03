import Link from "next/link";
import UserProfile from "@/components/UserProfile";
import EventsSection from "@/components/EventsSection";
import Modal from "@/components/Modal";

export default function Home({ searchParams }) {
  return (
    <main className="bg-main">
      <div className="">
        <div className="flex justify-center">
          <div className="home-intro gap-5 py-5">
            <h2 className="home-text-size text-white">
              Welcome to <span className="home-text"> Admin Tools</span>
            </h2>
            <p className="color-grey text-xl py-5">
              Startbuilding virtual events quickly and easily! Below arew some
              resurces to inspire yuou and a community to support you
            </p>
            <div className="flex justify-between w-100 py-5">
              <button
                type="button"
                className="home-btn text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 font-bold rounded-lg text-m px-5 py-2.5 text-center mb-2"
              >
                📝Solutions Templates
              </button>
              <button
                type="button"
                className="home-btn text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-m px-5 py-2.5 text-center mb-2"
              >
                🔥Matchbox Kitchen
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <EventsSection />
        </div>
        <UserProfile />
        <Link href="/edit-event">Open Modalm</Link>
      </div>
    </main>
  );
}
