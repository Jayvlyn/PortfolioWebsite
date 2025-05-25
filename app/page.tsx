export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">
        <span className="text-gray-300">Hi, I'm </span>
        <span className="text-primary font-extrabold">Jacob Leonardo</span>
      </h1>
      <p className="text-2xl md:text-3xl text-gray-200 text-center max-w-2xl mb-8">
        I'm a passionate software and game developer. See my projects, learn about me, or get in contact!
      </p>
      <div className="mt-8 flex gap-6">
        <a 
          href="/projects" 
          className="px-6 py-3 bg-primary text-background rounded-full hover:bg-primary/90 transition-colors duration-300"
        >
          View Projects
        </a>
        <a 
          href="/about" 
          className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          About Me
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