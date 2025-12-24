import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";
<<<<<<< HEAD
import { Apple, PlayCircle, Smartphone } from "lucide-react";
=======
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)

const HomePage = () => {
  const newsItems = [
    {
<<<<<<< HEAD
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
=======
      image: "https://www.foodpanda.com/wp-content/uploads/2025/12/EDW_0166-1.jpg",
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
      category: "Merchants",
      date: "17 Dec 2025",
      title: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    },
    {
<<<<<<< HEAD
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800",
=======
      image: "https://www.foodpanda.com/wp-content/uploads/2025/12/Ride_Hailing_Release___Key_Visual-v2.jpg",
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
      category: "Business",
      date: "21 Nov 2025",
      title: "foodpanda brings unmatched value to pandapro members with ride-hailing partnerships",
    },
    {
<<<<<<< HEAD
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
=======
      image: "https://www.foodpanda.com/wp-content/uploads/2025/11/Key-KV.jpg",
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
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
<<<<<<< HEAD
            <span className="text-primary">in a tap</span>
          </>
        }
        backgroundImage="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920"
        height="min-h-[70vh]"
=======
            <strong>in a tap</strong>
          </>
        }
        backgroundImage="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920"
        backgroundVideo="https://player.vimeo.com/progressive_redirect/playback/887673049/rendition/720p/file.mp4?loc=external&log_user=0&signature=01e93bdd482c18d9e437c0cfc867ddf242690ae4e9819149a92bd5c8046f8e7e"
        height="min-h-[60svh] md:min-h-[70vh]"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
      />

      {/* Mission Statement */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed italic">
              We're here to help you live life the panda way. Spend more time doing what you love – we'll take care of tasty meals, fresh groceries and new flavours.
=======
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed italic text-center md:text-left">
              We’re here to help you live life the panda way. Spend more time doing what you love – we’ll take care of tasty meals, fresh groceries and new flavours.
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
            </h2>
          </div>
        </div>
      </section>

      {/* Next Generation Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
<<<<<<< HEAD
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800"
                alt="Next generation delivery"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
=======
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <img
                src="https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home.webp"
                alt="Next generation delivery"
                className="rounded-3xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="order-2 lg:order-2 text-center lg:text-left">
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
              <h2 className="section-title">
                Meet the next generation of delivery!
              </h2>
              <p className="section-subtitle">
                What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.
              </p>
<<<<<<< HEAD
              <Button variant="panda" size="lg" className="mt-8" asChild>
=======
              <Button variant="panda" size="lg" className="mt-8 shadow-pink" asChild>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                <Link to="/about">About</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
<<<<<<< HEAD
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
=======
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
              <h2 className="section-title">
                Taste the convenience.
              </h2>
              <p className="section-subtitle">
                Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now.
              </p>
              
              {/* App Store Buttons */}
<<<<<<< HEAD
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
=======
              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                <a href="#" className="hover:opacity-80 transition-opacity hover:scale-105 transform duration-200">
                  <img 
                    src="https://www.foodpanda.com/wp-content/uploads/2023/02/app-apple.png" 
                    alt="Download on App Store" 
                    className="h-10 md:h-12"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity hover:scale-105 transform duration-200">
                  <img 
                    src="https://www.foodpanda.com/wp-content/uploads/2023/02/app-google.png" 
                    alt="Get it on Google Play" 
                    className="h-10 md:h-12"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity hover:scale-105 transform duration-200">
                  <img 
                    src="https://www.foodpanda.com/wp-content/uploads/2023/02/app-huawei.png" 
                    alt="Explore it on AppGallery" 
                    className="h-10 md:h-12"
                  />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://www.foodpanda.com/wp-content/uploads/2025/07/foodpanda-home-2.webp"
                alt="Foodpanda app on phone"
                className="rounded-3xl shadow-2xl w-full max-w-xl hover:scale-[1.02] transition-transform duration-500"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
              />
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
<<<<<<< HEAD
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
=======
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <img
                src="https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home-3.webp"
                alt="Join foodpanda team"
                className="rounded-3xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <h2 className="section-title">
                Find the job you’d love
              </h2>
              <p className="section-subtitle">
                Hungry to make a difference? There’s a seat at our table! Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda.
              </p>
              <Button variant="panda" size="lg" className="rounded-full px-10 font-bold" asChild>
                <a href="https://careers.foodpanda.com/" target="_blank" rel="noopener noreferrer">Join us!</a>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
<<<<<<< HEAD
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-title">Have you heard?</h2>
            <Button variant="pandaOutline" asChild>
              <Link to="/newsroom">View all</Link>
            </Button>
          </div>
          <p className="section-subtitle max-w-3xl mb-12">
            The industry is changing fast! Stay up to date with foodpanda press. Catch up on the latest news, updates and reports here.
          </p>
=======
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="section-title">Have you heard?</h2>
              <p className="section-subtitle max-w-2xl mt-4 mx-auto md:mx-0">
                The industry is changing fast! Stay up to date with foodpanda press. Catch up on the latest news, updates and reports here.
              </p>
            </div>
            <Button variant="pandaOutline" asChild className="shrink-0">
              <Link to="/newsroom">View all</Link>
            </Button>
          </div>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} link="/newsroom" />
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

      {/* Feed Your Team Section */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="section-title">
                Feed your team.
              </h2>
              <p className="section-subtitle">
                Treat your talented team to their favourite meals. Let them pick! Explore flexible corporate food delivery options and tasty employee perks.
              </p>
              <Button variant="panda" size="lg" className="mt-8 shadow-pink" asChild>
                <Link to="/corporate">Explore</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://www.foodpanda.com/wp-content/uploads/2025/07/foodpanda-home-4.webp"
                alt="Feed your team"
                className="rounded-3xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
    </>
  );
};

export default HomePage;
