import { Experiences } from "app/components/experiences";
import { BlogPosts } from "app/components/posts";
import { Works } from "app/components/works";
import { getWorks } from "./utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  const works = getWorks();
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <Works works={works} />
    </section>
  );
}
