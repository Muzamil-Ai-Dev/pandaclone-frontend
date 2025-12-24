import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatsGrid } from "@/components/StatsGrid";

const PandaAdsHomePage = () => {
  const stats = [
    { number: "125M", label: "app downloads" },
    { number: "11", label: "markets" },
    { number: "400+", label: "cities" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="absolute inset-0 bg-panda-dark/60 z-10" />
        <div className="relative z-20 container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Reach millions<br />with <span className="text-primary">panda ads</span>
            </h1>
            <p className="text-lg text-secondary/90 mt-6">
              Advertise with foodpanda and connect with millions of ready-to-shop customers within and beyond the foodpanda app.
            </p>
            <Button variant="pandaOutline" size="lg" className="mt-8 border-secondary text-secondary hover:bg-secondary hover:text-primary" asChild>
              <Link to="/pandaads/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Boost your brand with Asia's largest food and grocery delivery network*
          </h2>
          <StatsGrid stats={stats} />
        </div>
      </section>

      {/* Features */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-16">Power up your visibility & engagement</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Maximise your reach", desc: "Amplify your campaign by connecting with your target customers right where they shop" },
              { title: "Engage high-value audiences", desc: "Leverage our first-party data and advanced targeting to connect with the right audience" },
              { title: "Get personalised support", desc: "Achieve your marketing goals and drive growth with personalised support, insights, and more" },
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to grow your brand?</h2>
          <Button variant="pandaWhite" size="lg" asChild>
            <Link to="/pandaads/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default PandaAdsHomePage;
