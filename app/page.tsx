import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, Twitter, Github, Linkedin, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="text-blue-500">Miguel Advincula</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="#hero" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-blue-500 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Split Layout */}
        <section id="hero" className="min-h-screen grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex items-center justify-center p-8 bg-zinc-900">
            <div className="flex flex-col items-center lg:items-start gap-4 pt-16 lg:pt-0">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-black">M</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Miguel Advincula</h2>
              <p className="text-xl text-zinc-400">Student</p>
              <div className="flex gap-4 mt-6">
                <Link href="#" className="text-zinc-400 hover:text-blue-500 transition-colors">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex flex-col bg-black p-8">
            <div className="flex-1 flex flex-col items-center lg:items-start justify-center pt-16 lg:pt-0">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center lg:text-left">
                GREAT THINGS
                <br />
                ARE COMING
              </h1>
              <p className="text-lg text-zinc-400 max-w-lg mb-8 text-center lg:text-left">
                I'm a full-stack developer specializing in creating beautiful, functional, and user-friendly websites
                and applications tailored to meet your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-white/20 hover:bg-white/10">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-zinc-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="About me"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg text-zinc-300">
                  With over 5 years of experience in web development, I've worked with clients across various industries
                  to deliver exceptional digital experiences.
                </p>
                <p className="text-lg text-zinc-300">
                  My approach combines technical expertise with creative problem-solving to build solutions that not
                  only look great but also perform exceptionally well.
                </p>
                <p className="text-lg text-zinc-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or enjoying outdoor activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-black">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center text-blue-500 mb-4">{skill.icon}</div>
                  <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
                  <p className="text-sm text-zinc-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-zinc-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.title} className="bg-black rounded-lg overflow-hidden border border-zinc-800 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-zinc-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" asChild className="border-zinc-700 hover:bg-zinc-800">
                      <Link href={project.link}>View Project</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-black">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold">
              Dev<span className="text-blue-500">Portfolio</span>
            </span>
            <p className="text-sm text-zinc-500 mt-1">© 2025 All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-zinc-500 hover:text-blue-500 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-blue-500 transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-blue-500 transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-blue-500 transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const skills = [
  {
    name: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with modern frameworks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    name: "Backend Development",
    description: "Building robust server-side applications and APIs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    name: "UI/UX Design",
    description: "Designing intuitive and visually appealing user experiences",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    name: "Mobile Development",
    description: "Building cross-platform mobile applications",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    name: "Database Design",
    description: "Creating efficient and scalable database structures",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    name: "DevOps",
    description: "Implementing CI/CD pipelines and cloud infrastructure",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    name: "Testing & QA",
    description: "Ensuring software quality through comprehensive testing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    name: "Project Management",
    description: "Leading teams and delivering projects on time and within budget",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
  },
]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart, and payment processing",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool for teams with real-time updates",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Health & Fitness Tracker",
    description: "Mobile app for tracking workouts, nutrition, and health metrics",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "GraphQL", "TypeScript"],
    link: "#",
  },
  {
    title: "Real Estate Listing Platform",
    description: "Property listing website with advanced search and filtering options",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "PostgreSQL", "Google Maps API"],
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media performance across platforms",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Angular", "D3.js", "Express"],
    link: "#",
  },
  {
    title: "AI Content Generator",
    description: "Tool that uses AI to generate marketing content and social media posts",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "TensorFlow", "React"],
    link: "#",
  },
]

