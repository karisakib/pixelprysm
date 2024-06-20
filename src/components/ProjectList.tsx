import Image from "next/image"
import { PROJECTS } from "../constants/index"

function ProjectList() {
 return (
  <>
   {PROJECTS.map((project, index) => (
    <div key={index} className="flex flex-col gap-2">
     <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
     <Image priority={true} src={project.image} alt={project.title}
     className="object-cover w-full h-96"
     />
     <span className="text-lg">{project.description}</span>
     <span className="text-lg">See <a className="text-lg text-blue-600 underline" href={project.link} target="_blank">{project.title}</a></span>
    </div>
   ))}
  </>

 )
}

export default ProjectList