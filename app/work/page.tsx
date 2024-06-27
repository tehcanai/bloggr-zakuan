import { Experiences } from "app/components/experiences";
import { BlogPosts } from "app/components/posts";
import { Works } from "app/components/works";
import { getWorks } from "./utils";

export const metadata = {
  title: "Work",
  description: "Check out my work.",
};

export default function Page() {
  const works = getWorks();
  return (
    <section>
      <Works works={works} />
    </section>
  );
}
