import { Experiences } from "./components/experiences";
import { getArtWorks, getWorks } from "./work/utils";

export default function Page() {
  const works = getWorks();
  const artWorks = getArtWorks();

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-end space-x-2">
        <h1 className="text-4xl font-semibold">Arif Zakuan</h1>
      </div>
      <Experiences />
    </section>
  );
}
