import Link from "next/link";
import { useRouter } from "next/navigation";

function Event({ params }) {
  let router = useRouter();
  let event = router.query.event;
  console.log(router);
  return (
    <div className="relative w-screen h-screen bg-gray-800">
      <Link href="/">
        <a className="relative z-20 flex items-center w-1/2 pt-12 mx-auto text-xl text-white/80 hover:text-white">
          <BackIcon className="w-5 h-5 mr-2" />
          Back
        </a>
      </Link>
    </div>
  );
}

export default Event;

export function getStaticPaths() {
  return {
    paths: [
      { params: { event: "1" } },
      { params: { event: "2" } },
      { params: { event: "3" } },
      { params: { event: "4" } },
      { params: { event: "5" } },
      { params: { event: "6" } },
    ],
    fallback: "blocking",
  };
}

export function getStaticProps(context) {
  return {
    props: {
      event: context.params.event,
    },
  };
}

function BackIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}
