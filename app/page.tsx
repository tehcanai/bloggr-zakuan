import Link from "next/link";
import { Experiences } from "./components/experiences";
import { getArtWorks, getWorks } from "./work/utils";

export default function Page() {
  const works = getWorks();
  const artWorks = getArtWorks();

  return (
    <section>
      <div className="space-y-2 mb-4 flex flex-wrap flex-col items-start">
        <h1 className="text-4xl font-semibold">Arif Zakuan</h1>
        <p className="text-2xl">{"(frontend web & mobile developer)"}</p>
        <Link
          href={"/doc/resume.pdf"}
          className="text-2xl hover:opacity-55 hover:cursor-pointer text-red-800"
        >
          cv
        </Link>
      </div>
      <Experiences />
    </section>
  );
}
