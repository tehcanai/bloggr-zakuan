import { title } from "process"

type WorkElem = {
  title: string
  src: string
  projectSrc: string
  invert?: boolean
}

export function getWorks() {
  return [
    {
      title: 'jum',
      src: '/img/jum.png',
      projectSrc: 'https://github.com/tehcanai/jum_app'
    },
    {
      title: 'soal undi',
      src: '/img/soalundi.png',
      projectSrc: 'https://github.com/tehcanai/SoalUndi'
    },
  ]
}

export function getArtWorks() {
  return [
    {
      title: 'portrait',
      src: '/img/art/eyewing.png',
      invert: true
    },
    {
      title: 'anxiety',
      src: '/img/art/anixety.png',
    },
    {
      title: 'gorilla',
      src: '/img/art/goriila-love.png',
    },
  ]
}

