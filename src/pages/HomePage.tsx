import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";
import { Apple, PlayCircle, Smartphone } from "lucide-react";

const HomePage = () => {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      category: "Merchants",
      date: "17 Dec 2025",
      title: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    },
    {
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800",
      category: "Business",
      date: "21 Nov 2025",
      title: "foodpanda brings unmatched value to pandapro members with ride-hailing partnerships",
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      category: "Press Releases",
      date: "25 Nov 2025",
      title: "foodpanda expands 'panda hearts' programme, reports 30% drop in rider accidents",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            food<br />
            and groceries<br />
            <span className="text-primary">in a tap</span>
          </>
        }
        backgroundImage="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920"
        height="min-h-[70vh]"
      />

      {/* Mission Statement */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed italic">
              We're here to help you live life the panda way. Spend more time doing what you love – we'll take care of tasty meals, fresh groceries and new flavours.
            </h2>
          </div>
        </div>
      </section>

      {/* Next Generation Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800"
                alt="Next generation delivery"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="section-title">
                Meet the next generation of delivery!
              </h2>
              <p className="section-subtitle">
                What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.
              </p>
              <Button variant="panda" size="lg" className="mt-8" asChild>
                <Link to="/about">About</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                Taste the convenience.
              </h2>
              <p className="section-subtitle">
                Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 bg-panda-dark text-secondary rounded-xl hover:bg-panda-dark/90 transition-colors"
                >
                  <Apple className="w-8 h-8" />
                  <div>
                    <div className="text-xs text-secondary/70">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 bg-panda-dark text-secondary rounded-xl hover:bg-panda-dark/90 transition-colors"
                >
                  <PlayCircle className="w-8 h-8" />
                  <div>
                    <div className="text-xs text-secondary/70">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 bg-panda-dark text-secondary rounded-xl hover:bg-panda-dark/90 transition-colors"
                >
                  <Smartphone className="w-8 h-8" />
                  <div>
                    <div className="text-xs text-secondary/70">Explore it on</div>
                    <div className="text-lg font-semibold">AppGallery</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600"
                alt="Foodpanda app on phone"
                className="rounded-2xl shadow-xl max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Join foodpanda team"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title">
                Find the job you'd love
              </h2>
              <p className="section-subtitle">
                Hungry to make a difference? There's a seat at our table! Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda.
              </p>
              <Button variant="panda" size="lg" className="mt-8" asChild>
                <Link to="/careers">Join us!</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-title">Have you heard?</h2>
            <Button variant="pandaOutline" asChild>
              <Link to="/newsroom">View all</Link>
            </Button>
          </div>
          <p className="section-subtitle max-w-3xl mb-12">
            The industry is changing fast! Stay up to date with foodpanda press. Catch up on the latest news, updates and reports here.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} link="/newsroom" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
