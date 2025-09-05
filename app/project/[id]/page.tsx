import { posts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import ProjectCarousel from '@/components/ProjectCarousel'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const projectPosts = posts.filter(post => post.projectId === id)
  
  if (projectPosts.length === 0) {
    return {
      title: "Project Not Found - DARCHE",
      description: "The requested project could not be found",
    }
  }
  
  const projectTitle = projectPosts[0].title
  
  return {
    title: `${projectTitle} - DARCHE`,
    description: `View ${projectTitle} project details and gallery by Darius Chen`,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const projectPosts = posts.filter(post => post.projectId === id)
  
  if (projectPosts.length === 0) {
    notFound()
  }

  const mainProject = projectPosts[0] // Use the first post as the main project

  // Get related projects (same tags but different projectId)
  const relatedProjects = posts.filter(post => 
    post.projectId !== id && 
    post.tags.some(tag => mainProject.tags.includes(tag))
  ).slice(0, 4)

  return <ProjectCarousel projectPosts={projectPosts} mainProject={mainProject} relatedProjects={relatedProjects} />
}
