import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-gray-200/60 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Left column: copy */}
          <div>
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
              About us
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl md:text-5xl">
              Welcome to Zenith
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              What sets us apart is our holistic approach to digital marketing. We
              don&apos;t just focus on one aspect of your online presence – we take a
              comprehensive view of your brand, your goals, and your target audience
              to develop tailored strategies that drive real, measurable results.
            </p>
            <div className="mt-8">
              <a
                href="#about"
                className="inline-flex rounded-full border border-indigo-900 px-6 py-3 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-50 md:text-base"
              >
                More about us
              </a>
            </div>
          </div>

          {/* Right column: image card with dotted background */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 -z-10 h-[92%] w-[92%] rounded-3xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(2,6,23,.12) 1px, transparent 0)",
                backgroundSize: "14px 14px",
              }}
            />

            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src="/about.jpg"
                alt="Team celebrating a successful project"
                width={960}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "10", label: "Years of experience" },
            { value: "3K", label: "Satisfied clients" },
            { value: "2.5k", label: "Projects completed" },
            { value: "10M+", label: "Revenue generated" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 p-8 text-center shadow-sm"
            >
              <div className="text-2xl font-semibold text-indigo-900">{item.value}</div>
              <div className="mt-2 text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


