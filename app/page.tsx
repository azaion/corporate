import { ArrowRight, Cpu, Globe, Lock, TargetIcon, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_3-b9JjUDKFxG8KVVFBxLjURGOjy1Xiwb.png"
                alt="Azaion Logo"
                className="h-10 w-auto"
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
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transforming UAV Operations with AI
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Revolutionizing unmanned flight with intelligent systems for fully autonomous operations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
              <div className="flex items-center justify-center">
                <iframe
                    width={720}
                    height={480}
                    src="https://www.youtube.com/embed/KA2Dpm8-10A"
                    title="Azaion AI Detection Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="aspect-video overflow-hidden rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-800">
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

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-800">
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="Azaion Team"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold">Our Leadership Team</h3>
                <p className="text-gray-500 mt-2">Meet the experts behind Azaion's innovative technology</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* CEO */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DenysP.jpg-OZwyrFQqI9dCrP6uscKhhjvlfaIbRZ.webp"
                      alt="Denys P."
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Denys P.</h4>
                  <p className="text-primary font-medium">CEO</p>
                </div>

                {/* CTO */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alex_B.jpg-5MbUKPta2ejY78YYmZToMfjO9ufnSP.webp"
                      alt="Alexander B."
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Alexander B.</h4>
                  <p className="text-primary font-medium">CTO</p>
                </div>

                {/* COO */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DenysZ.jpg-sK94tHFNsAjHWvTQkpehReSXZU8UlW.webp"
                      alt="Denys Z."
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Denys Z.</h4>
                  <p className="text-primary font-medium">COO</p>
                </div>

                {/* Chief RnD */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pentti.jpg-oun78pna6nFGqafNwfc88zm4iQtb9z.webp"
                      alt="Pentti"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Pentti</h4>
                  <p className="text-primary font-medium">Chief RnD</p>
                </div>

                {/* AI Training and Tuneup */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AndriiS.jpg-1cCyAuvaqrCKIk2N6vFTWOdv3JZtJt.webp"
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini.jpg-XgMcvFX1O0ZNud0f7U96eVlXxQ3gku.webp"
                      alt="Gemini"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Gemini</h4>
                  <p className="text-primary font-medium">Head of Embedded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
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
                <form className="flex flex-col space-y-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                    type="email"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-white/90">Request Information</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Azaion. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-50">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-50">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-50">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

