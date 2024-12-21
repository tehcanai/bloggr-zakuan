import { formatDate } from "app/rant/utils";

export function Experiences() {
  return (
    <div>
      <p className="mb-4 text-2xl font-semibold">work experience</p>
      <div className="">
        <div className="grid grid-cols-2 py-2 md:items-center">
          <div className="pr-4">
            <p className=" text-neutral-900 font-medium pr-4">
              Software Engineer
            </p>
            <p className="tabular-nums text-neutral-700 pr-4">
              ikhlas.com @ AirAsia
            </p>
            <p className=" tabular-nums text-neutral-700 pr-4">
              {formatDate("2023-10-02", false)}
            </p>
          </div>
          <p>Worked on Web Travel & Umrah Platform with NextJS</p>
        </div>
        <div className="grid grid-cols-2 py-2 md:items-center">
          <div className="pr-4">
            <p className=" text-neutral-900 font-medium pr-4">
              Software Developer Intern
            </p>
            <p className="tabular-nums text-neutral-700 pr-4">
              SANDS Consulting
            </p>
            <p className="tabular-nums text-neutral-700 pr-4">
              {formatDate("2023-03-01", false)}
            </p>
          </div>
          <p>Developed MyWakalah App for IOS and Android with Flutter</p>
        </div>
        <p className="mb-4 mt-4 text-2xl font-semibold">education</p>
        <div className="grid grid-cols-2 py-2 md:items-center">
          <div className="pr-4">
            <p className=" text-neutral-900 font-medium pr-4">Bachelor's</p>
            <p className="tabular-nums text-neutral-700 pr-4">UPM</p>
            <p className="tabular-nums text-neutral-700 pr-4">
              {formatDate("2019-09-01", false)}
            </p>
          </div>
          <p>
            Studied Computer Science at Universiti Putra Malaysia, Mainly
            focused electives on analytics, databases, and AI/ML. Final year
            thesis project on <i>machine learning development for chatbot</i>
          </p>
        </div>
        <p className="mb-4 mt-4 text-2xl font-semibold">skills</p>
        <div className="grid grid-cols-2 py-2 md:items-center space-y-2">
          <p className="text-neutral-900 font-medium">{"languages:"}</p>
          <p>{"javascript, typescript, dart, rust, css"}</p>
          <p className="text-neutral-900 font-medium">{"frameworks:"}</p>
          <p>{"react, nextjs, flutter, react native, expojs, tailwind"}</p>
          <p className="text-neutral-900 font-medium">{"platforms:"}</p>
          <p>{"firebase, gcp, cloudflare, google analytics"}</p>
        </div>
      </div>
    </div>
  );
}
