import aboutTeam from "../assets/hero.png";


const stats = [
  { value: "12", label: "Team Members" },
  { value: "100k+", label: "Travelers" },
  { value: "5 Years", label: "Experience" },
  { value: "400+", label: "Destinations" },
];

export default function About() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          About
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          We help travelers explore with smart, creative journeys
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          We specialize in turning wanderlust into thoughtfully crafted
          itineraries that make every trip effortless and unforgettable.
        </p>

        {/* Hero image */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-sm">
          <img
            src={aboutTeam}
            alt="The WanderWise travel team in their office"
            width={1280}
            height={720}
            loading="eager"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        {/* Body text */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-foreground sm:text-lg">
          At WanderWise, we're passionate about turning bold travel dreams into
          stunning, seamless journeys. With a focus on creativity and
          innovation, our team crafts itineraries that elevate your adventures
          and create memories that last a lifetime. From the first spark of
          inspiration to the final day of your trip, we're here to bring your
          vision to life with precision and flair.
        </p>

        {/* Stats footer */}
        <div className="mt-14 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-2 text-center sm:px-6 ${
                  i !== 0 ? "sm:border-l sm:border-border" : ""
                }`}
              >
                <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:justify-end">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
