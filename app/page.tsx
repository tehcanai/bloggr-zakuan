import { BlogPosts } from "app/components/posts";
import { Experiences } from "./components/experiences";
import { ArrowIcon } from "./components/footer";
import Link from "next/link";
import { getArtWorks, getWorks } from "./work/utils";
import { Works } from "./components/works";

export default function Page() {
  const works = getWorks();
  const artWorks = getArtWorks();

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-end space-x-2">
        <h1 className="text-4xl font-semibold">Arif Zakuan</h1>
        <h1 className="text-lg font-light text-neutral-700 italic tracking-tighter">
          (full-time software developer, part-time poet)
        </h1>
      </div>
      {/* <p className="mb-4">
        {`Hi, I'm a software developer based in Malaysia. I'm currently working with react, typescript, and dart for work and personal projects and learning new things as I go along.`}
      </p> */}
      <Experiences />
      <p className="mb-4 text-2xl font-semibold">writings</p>
      <div className="">
        <BlogPosts />
      </div>
      {/* <p className="mb-8 mt-8 text-2xl font-semibold">sample projects</p>
      <Works works={works} /> */}
      {/* <p className="mb-8 mt-8 text-2xl font-semibold">sample artworks</p>
      <Works works={artWorks} /> */}
      {/* <div className="flex flex-wrap flex-row space-x-4">
        <Link
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/work"
        >
          <p className="mt-4 mb-4 text-2xl font-semibold pr-2">work</p>
          <ArrowIcon />
        </Link>
        <Link
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/art"
        >
          <p className="mt-4 mb-4 text-2xl font-semibold pr-2">art</p>
          <ArrowIcon />
        </Link>
        <Link
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/rant"
        >
          <p className="mt-4 mb-4 text-2xl font-semibold pr-2">rant</p>
          <ArrowIcon />
        </Link>
      </div> */}
    </section>
  );
}
