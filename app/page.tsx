import { BlogPosts } from "app/components/posts";
import { Experiences } from "./components/experiences";
import { ArrowIcon } from "./components/footer";
import Link from "next/link";
import { getWorks } from "./work/utils";
import { Works } from "./components/works";

export default function Page() {
  const works = getWorks();
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Arif Zakuan
      </h1>
      <p className="mb-4">
        {`Hi, I'm a software developer based in Malaysia. I'm currently working with react, typescript, and dart for work and personal projects and learning new things as I go along.`}
      </p>
      <Experiences />
      <Link
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        href="/work"
      >
        <p className="mt-4 mb-4 text-2xl font-semibold pr-2">Work</p>
        <ArrowIcon />
      </Link>
      <Works works={works} isFront={true} />
      <Link
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        href="/blog"
      >
        <p className="mt-4 mb-4 text-2xl font-semibold pr-2">Blog</p>
        <ArrowIcon />
      </Link>
      <div className="">
        <BlogPosts />
      </div>
    </section>
  );
}
