export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold mb-8 text-center">
        Welcome to My <span className="text-primary">Portfolio</span>
      </h1>
      <p className="text-xl text-text/80 max-w-2xl text-center leading-relaxed">
        I'm a passionate developer creating innovative solutions through code.
        Explore my projects, learn more about me, or get in touch!
      </p>
      <div className="mt-12 flex gap-6">
        <a 
          href="/projects" 
          className="px-6 py-3 bg-primary text-background rounded-full hover:bg-primary/90 transition-colors duration-300"
        >
          View Projects
        </a>
        <a 
          href="/contact" 
          className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
} 