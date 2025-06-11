import { ArrowRight, Cpu, Globe, Lock, TargetIcon, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-400">
      <header className="sticky top-0 z-40 w-full border-b bg-gray-300 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between  sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logos/logo.svg"
                alt="Azaion Logo"
                className="h-20 pt-3 w-auto"
              />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#features" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#about" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#contact" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 xl:py-44 bg-gray-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_750px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transforming UAV Operations with AI
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Revolutionizing unmanned flight with intelligent systems for fully autonomous operations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[500px]:flex-row">
                  <Link href="#contact">
                    <Button
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1080px] mx-auto px-4">
                <div className="relative w-full pt-[60%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/KA2Dpm8-10A?vq=hd1080"
                    title="Azaion AI Detection Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-300 px-3 py-1 text-sm dark:bg-gray-800">
                Key Capabilities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Advanced UAV Intelligence</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our cutting-edge technology delivers unmatched performance in unmanned aerial systems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fully Autonomous Operations</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Self-sufficient UAV systems that operate independently with minimal human intervention.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">GPS Denied Solution</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Advanced navigation capabilities that function reliably in environments without GPS signals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <TargetIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Targeting</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Precision targeting systems powered by sophisticated artificial intelligence algorithms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Continuous AI Learning</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Full AI cycle with continuous model training using the latest operational data.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Secure Remote Operations</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Remotely operated task-based systems with enterprise-grade security protocols.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Adaptive Intelligence</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Systems that adapt to changing conditions and requirements in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section id="about" className="w-full py-12 md:py-24 bg-gray-300 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 text-center"> {/* Added text-center class here */}
                  <div className="inline-block rounded-lg bg-gray-400 px-3 py-1 text-sm dark:bg-gray-800">
                    Who We Are
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Pioneering the Future of Unmanned Systems
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Azaion is at the forefront of AI-driven UAV development. We create intelligent unmanned systems that
                    push the boundaries of possibility.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team combines expertise in artificial intelligence, robotics, and aerospace engineering to
                    develop next-generation unmanned aerial vehicles that operate with unprecedented autonomy and
                    intelligence.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    With a focus on continuous innovation and practical applications, we're transforming how industries
                    approach unmanned operations across defense, surveillance, logistics, and emergency response
                    sectors.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                    src="/images/drone.webp"
                    alt="cool drone"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    width={600}
                    height={400}
                />
              </div>
            </div>

            {/* Team */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold">Our Team</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="/images/DenysP.jpg"
                      alt="Denys P."
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Denys P.</h4>
                  <p className="text-primary font-medium">CEO</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="/images/Alex_B.jpg"
                      alt="Alexander B."
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Alexander B.</h4>
                  <p className="text-primary font-medium">CTO</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="/images/DenysZ.jpg"
                      alt="Denys Z."
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Denys Z.</h4>
                  <p className="text-primary font-medium">COO</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="/images/Pentti.jpg"
                      alt="Pentti"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Pentti</h4>
                  <p className="text-primary font-medium">Chief RnD</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="/images/AndriiS.jpg"
                      alt="Andrii S."
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Andrii S.</h4>
                  <p className="text-primary font-medium">AI Training and Tuneup</p>
                </div>

                {/* Head of Embedded */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="/images/Jaakko.jpg"
                      alt="Jaakko"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Jaakko</h4>
                  <p className="text-primary font-medium">Head of Embedded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Our Users Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Users</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by elite Ukrainian military units in their critical operations
            </p>
          </div>

          {/* Military Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/images/3sso.jpeg"
                  alt="3rd Separate Special Purpose Regiment"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                3rd Separate Special Purpose Regiment
              </h3>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/images/15th-brigade.png"
                  alt="15th Operational Brigade"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">15th Operational Brigade</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/images/38-marine-brigade.png"
                  alt="38 Ukrainian Marine Brigade"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">38 Ukrainian Marine Brigade</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/images/k2.png"
                  alt="20th Separate Regiment of K-2 Unmanned Systems"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                20th Separate Regiment of K-2 Unmanned Systems
              </h3>
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Featured by CSIS</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/WvSY973xWig?si=RnZ1alkvf_VSbzvb"
                  title="Featured by CSIS"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>




        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Transform Your UAV Operations?
                </h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Contact us today to learn how Azaion's AI-driven solutions can revolutionize your unmanned systems.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <p>Contact us: <a href="mailto:hi@azaion.com">hi@azaion.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
          <p className="leading-loose md:text-center text-gray-500 p-4 gap-4">
          © 2025 Azaion. All rights reserved.
          </p>
      </footer>
    </div>
  )
}
