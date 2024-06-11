import { formatDate } from "app/blog/utils";

export function Experiences() {
  return (
    <div>
      <p className="mb-4 text-2xl font-semibold">Experiences</p>
      <div className="">
        <div className="flex flex-col py-2">
          <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
            {formatDate("2023-10-02", false)}
          </p>
          <p>Joined Ikhlas @ AirAsia as a junior software engineer</p>
        </div>
        <div className="flex flex-col py-2">
          <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
            {formatDate("2023-03-01", false)}
          </p>
          <p>Internship @ SANDS Consulting</p>
        </div>
        <div className="flex flex-col py-2">
          <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
            {formatDate("2019-09-01", false)}
          </p>
          <p>
            Studied Computer Science at Universiti Putra Malaysia, Mainly
            focused on analytics, databases, and AI/ML
          </p>
        </div>
      </div>
    </div>
  );
}
