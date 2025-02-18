export type Resume = {
  name: string,
  title: string,
  location: string,
  website: {
    link: string,
    text: string
  },
  photosrc: string,
  contact: Contact[],
  about: {
    title: string,
    content: string
  },
  work: {
    title: string,
    content: Experience[]
  },
  projects: {
    title: string,
    content: Project[]
  },
  sideprojects: {
    title: string,
    content: Project[]
  },
  education: {
    title: string,
    content: Education[]
  }
}

type Experience = {
  timespan: string,
  title: string,
  company: {
    name: string,
    website: string
  },
  location: string,
  description: string[]
}

type Project = {
  timespan: string,
  name: string,
  website: string | null,
  description: string
}

type Education = {
  timespan: string,
  name: string,
  location: string
}

type Contact = {
  text: string,
  link: string
}