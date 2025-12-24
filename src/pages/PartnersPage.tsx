import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";
import { useState } from "react";

const PartnersPage = () => {
  const [activeCountry, setActiveCountry] = useState("Malaysia");

  const countries = [
    "Malaysia",
    "Philippines",
    "Bangladesh",
    "Hong Kong",
    "Pakistan",
    "Singapore",
    "Taiwan",
    "Cambodia",
    "Laos",
    "Myanmar",
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost your sales",
      description: "Reach untapped customer bases and increase your revenue with our powerful platform.",
    },
    {
      icon: Users,
      title: "Access millions of customers",
      description: "Connect with hungry customers looking for exactly what you offer.",
    },
    {
      icon: Zap,
      title: "Easy onboarding",
      description: "Get started quickly with our simple sign-up process and dedicated support.",
    },
    {
      icon: Shield,
      title: "Trusted partnership",
      description: "Join thousands of successful businesses that trust foodpanda.",
    },
  ];

  const partnerTypes = [
    {
      title: "Restaurant Partners",
      description: "Bring your delicious dishes to more customers and grow your restaurant business.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
    },
    {
      title: "Shop Partners",
      description: "From groceries to daily essentials, help customers get what they need fast.",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600",
    },
    {
      title: "Rider Partners",
      description: "Earn flexibly while being part of Asia's largest delivery network.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Get more orders with<br />
            <span className="text-primary">with foodpanda</span>
          </>
        }
        backgroundImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920"
        height="min-h-[60vh]"
      >
        <Button variant="hero" size="lg" asChild>
          <a href="#partners">Become a Partner!</a>
        </Button>
      </HeroSection>

      {/* Partner Benefits Section */}
      <section className="section bg-background" id="partners">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">
              Become a restaurant or local shop partner
            </h2>
            <p className="section-subtitle">
              Take your business to new heights by partnering with foodpanda, the leading delivery service trusted by businesses large and small. We dare to always go further, helping you reach untapped customer bases, boost order volume, and drive more sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Selector */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-12">
            Select your country to get started
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setActiveCountry(country)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCountry === country
                    ? "bg-primary text-primary-foreground shadow-pink"
                    : "bg-background text-foreground hover:bg-primary/10"
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Do you want your business to go further?
            </h3>
            <p className="text-muted-foreground mb-8">
              Don't wait – Sign up now to be our partner and reach further with your business in {activeCountry}!
            </p>
            <Button variant="panda" size="lg">
              Start now!
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-16">
            Partner with us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                  <Button variant="pandaOutline" className="mt-6">
                    Learn more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;
