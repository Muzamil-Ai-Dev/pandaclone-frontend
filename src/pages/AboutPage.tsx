import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Users, Package, Store, Bike } from "lucide-react";

const AboutPage = () => {
  const valueCards = [
    {
      icon: Bike,
      title: "Our riders are our heroes",
      description: "We're here to provide exciting opportunities and empower work flexibility. Learn more about our riders' journey or sign up to become one.",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Customers come first",
      description: "We're far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels.",
      color: "bg-panda-pink-dark",
    },
    {
      icon: Store,
      title: "Growing with our partners",
      description: "We work with the best restaurants and stores. We support our partners every step of the way and empower their growth.",
      color: "bg-primary",
    },
  ];

  const stats = [
    { number: "400+", label: "cities" },
    { number: "11", label: "markets" },
    { number: "125M", label: "app downloads" },
    { number: "2014", label: "founded" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            About<br />
            <span className="text-primary">foodpanda</span>
          </>
        }
        backgroundImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920"
        height="min-h-[60vh]"
      />

      {/* Story Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
              From food delivery to your daily convenience companion.
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014 as a food delivery platform. Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of customers in APAC.
              </p>
              <p>
                Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar.
              </p>
              <p>
                Thanks to dedicated partners, riders, and a team united by shared values, foodpanda is now providing millions with a convenient way to get food and groceries in a few taps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <card.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-12">
            Where we operate
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: "Singapore", flag: "🇸🇬" },
              { name: "Hong Kong", flag: "🇭🇰" },
              { name: "Thailand", flag: "🇹🇭" },
              { name: "Malaysia", flag: "🇲🇾" },
              { name: "Pakistan", flag: "🇵🇰" },
              { name: "Taiwan", flag: "🇹🇼" },
              { name: "Philippines", flag: "🇵🇭" },
              { name: "Bangladesh", flag: "🇧🇩" },
              { name: "Laos", flag: "🇱🇦" },
              { name: "Cambodia", flag: "🇰🇭" },
              { name: "Myanmar", flag: "🇲🇲" },
            ].map((country, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <div className="text-sm font-medium text-foreground">
                  {country.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to join our journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Whether you're a customer, partner, or looking for your next career move, we're here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="pandaWhite" size="lg" asChild>
              <Link to="/partners">Become a Partner</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/careers">Explore Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
