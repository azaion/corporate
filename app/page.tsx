import { ArrowRight, Cpu, BrainCircuit, PenTool, Database, Maximize, ZoomIn, ListChecks, SunMoon, RefreshCcw, Fingerprint, ShieldCheck, Network } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import YouTubePreview from "@/components/YouTubePreview"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-400">
      <header className="sticky top-0 z-40 w-full border-b bg-gray-300 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between  sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/logos/logo.svg"
                alt="Azaion Logo"
                className="h-20 pt-3 w-auto"
              />
              <span className="whitespace-nowrap text-base md:text-lg lg:text-xl font-semibold tracking-wide text-gray-900 antialiased">
                Azaion Ukraine Ltd.
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="/#features" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="/#about" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="/#users" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                Our Users
              </Link>

              <Link href="/#contact" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
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
                  <Link href="/#contact">
                    <Button
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                  </Link>
                  <Link href="/#features">
                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1080px] mx-auto px-4">
                <YouTubePreview
                  videoId="KA2Dpm8-10A"
                  title="Azaion AI Detection Video"
                  posterSrc="/images/azaion-orange.png"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full py-4 bg-gray-600 text-white">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl flex items-center justify-center gap-6">
              <span className="text-base md:text-lg font-semibold whitespace-nowrap">We partner with:</span>
              <div className="flex items-center gap-6">
                <Image src="/images/brave1.png" alt="Brave1" width={120} height={40} className="h-8 w-auto object-contain" />
                <Image src="/images/iron.png" alt="IRON" width={120} height={40} className="h-8 w-auto object-contain" />
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
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Object Recognition</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Real-time detection and classification in still images, video files, and live streams.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Built-in AI Annotation</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Native labeling tools for images and video to accelerate ground-truth creation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Dataset Explorer</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Inspect, filter, and refine datasets on the fly to improve model quality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Maximize className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">Large Image Support (8000×8000)</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Process ultra‑high‑resolution imagery end to end without compromise.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <ZoomIn className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Zoom & Inspect</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Smooth zoom in/out during annotation and recognition for pixel‑level review.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <ListChecks className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">17+ Object Classes</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Ships with 17 classes today and scales to unlimited custom categories.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <SunMoon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Day/Night/Winter Modes</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Robust performance across diurnal and seasonal conditions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <RefreshCcw className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Automated Re‑training</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Closed‑loop training pipeline that continuously improves with new data.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Fingerprint className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">Hardware Fingerprint Licensing</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Secure, device‑bound installations via hardware fingerprinting.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Military‑grade Encryption</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  End‑to‑end protection for data at rest and in transit.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">CPU Fallback</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Automatically switches to optimized CPU inference when no GPU is detected.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Delta/NATO API Integration</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Standards‑based API for interoperability with Delta and NATO systems.
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
                    How It All Started
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl whitespace-nowrap">
                    From Battlefield Needs to Breakthrough AI
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We began at the outset of the war as a small medical volunteer team. The relationships we built with
                    active-duty units soon revealed where we could deliver the greatest impact: technology.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    With direct access to frontline feedback, we pivoted to our core strength—IT and AI. We formed a
                    three-person strike team, built a secure operational framework, and started training a dataset on
                    real, time-stamped imagery and materials provided by our friends in uniform. The mission: deliver
                    tools that reduce risk and accelerate decision-making in the field.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    The smart core of our solution is a modular architecture that continuously learns from every
                    verified photo and report. Models are updated through a secure, incremental training pipeline,
                    enabling rapid adaptation without full retrains or downtime.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-justify">
                    Every sample passes multi-stage validation—source verification, cross-sensor checks, human-in-the-loop
                    review, and automated anomaly detection—so the dataset stays clean, balanced, and operationally
                    relevant. This is how we keep “real data” truly real.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-[600px]">
                  <img src="/images/medical.jpg" alt="Medical volunteering 1" className="w-full h-40 sm:h-44 md:h-48 lg:h-56 xl:h-64 object-cover rounded-xl" />
                  <img src="/images/medical2.png" alt="Medical volunteering 2" className="w-full h-40 sm:h-44 md:h-48 lg:h-56 xl:h-64 object-cover rounded-xl" />
                  <img src="/images/starlink.jpg" alt="Starlink field setup" className="w-full h-40 sm:h-44 md:h-48 lg:h-56 xl:h-64 object-cover rounded-xl" />
                  <img src="/images/stuff4m.jpeg" alt="Supplies for the mission" className="w-full h-40 sm:h-44 md:h-48 lg:h-56 xl:h-64 object-cover rounded-xl" />
                </div>
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

      <section id="users" className="py-20 bg-white">
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
                  src="/images/3SSO.jpeg"
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
                  src="/images/K2.png"
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
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <YouTubePreview
                  videoId="WvSY973xWig"
                  title="Featured by CSIS"
                  posterSrc="/images/csis-stopframe.png"
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
