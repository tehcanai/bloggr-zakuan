import { BlogPosts } from 'app/components/posts'
import { Experiences } from './components/experiences'
import { ArrowIcon } from './components/footer'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Arif Zakuan
      </h1>
      <p className="mb-4">
        {`Hi, I'm a software developer based in Malaysia. I'm currently working with react, typescript, and dart for work and personal projects and learning new things as I go along.`}
      </p>
      <Experiences />
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/vercel/next.js"
      >
        <p className="mt-4 mb-4 text-2xl font-semibold pr-2">Work</p>
        <ArrowIcon />
      </a>
      <p className="mb-4 mt-4 text-2xl font-semibold">Blog</p>
      <div className="">
        <BlogPosts />
      </div>
    </section>
  )
}
