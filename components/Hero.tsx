import { Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-gray-200/60 bg-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(2,6,23,.08) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:py-32">
        {/* Top center pill */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            <Zap className="h-4 w-4" />
            <span>Reach new heights with Lyseibug</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Expert <span className="text-indigo-700">strategies</span> from our
            <br className="hidden sm:block" /> marketing agency
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Lyseibug is a dynamic digital marketing agency dedicated to
            propelling businesses to the pinnacle of success in the digital
            realm.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="rounded-full bg-indigo-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800 md:text-lg"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="rounded-full border border-indigo-900 px-8 py-4 text-base font-semibold text-indigo-900 transition-colors hover:bg-indigo-50 md:text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
