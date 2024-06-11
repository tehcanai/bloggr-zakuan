import { title } from "process"

type WorkElem = {
  title: string
  src: string
  projectSrc: string
}

export function getWorks() {
  return [
    {
      title: 'Jum App',
      src: '/img/jum.png',
      projectSrc: 'https://github.com/tehcanai/jum_app'
    },
    {
      title: 'Soal Undi Chatbot',
      src: '/img/soalundi.png',
      projectSrc: 'https://github.com/tehcanai/SoalUndi'
    },
    {
      title: '3D Portfolio',
      src: '/gif/3dportfolio.gif'
    }
  ]
}

