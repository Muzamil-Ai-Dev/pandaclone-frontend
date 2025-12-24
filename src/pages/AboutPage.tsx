<<<<<<< HEAD
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
=======
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutPage = () => {
  const strategicPillars = [
    {
      title: "Customers come first",
      description:
        "We’re far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business. Download the app to experience true convenience.",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2025/07/fp-about-3.webp",
    },
    {
      title: "Growing with our partners",
      description:
        "We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level?",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2025/07/fp-about-2.webp",
    },
    {
      title: "Our riders are our heroes",
      description:
        "We’re here to provide exciting opportunities and empower work flexibility. Learn more about our riders’ journey or sign up to become one.",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2025/07/fp-about-4.webp",
    },
  ];

  const ourValues = [
    {
      id: "prioritise",
      label: "prioritise, decide, deliver",
      title: "prioritise, decide, deliver",
      text: "We are disciplined about focusing on what matters. When we face uncertainty, we put considered thought behind our actions and continue to deliver because it is only through execution that we learn, iterate, and improve.",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2024/06/02_prioritise-decide_deliver__500x500.webp",
    },
    {
      id: "customer",
      label: "start with customer, end with customer",
      title: "start with customer, end with customer",
      text: "We want our consumers, vendors, riders, employees (including prospective ones) – the customers who make up our ecosystem – to keep coming back to the product, service, and experience we create. To achieve this, we keep them at the centre of everything we do.",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2024/06/01_start-with-customer-end-with-customer_500x500.webp",
    },
    {
      id: "own-it",
      label: "own it end-to-end",
      title: "own it end-to-end",
      text: "We take pride in our work by delivering on our commitments. When a problem stretches past our areas of responsibility or expertise, we bridge the gap, we collaborate and seek out resources to get the job done.",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2024/06/03_own-it-end-to-end__500x500.webp",
    },
    {
      id: "challenge",
      label: "challenge the status quo",
      title: "challenge the status quo",
      text: "Our environment is ever-changing and we meet these changes head-on by adopting a progress-driven mindset. We value diverse inputs, we push the envelope to open up possibilities for innovation, growth and ultimately staying ahead – for our customers, for foodpanda, and ourselves.",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2024/06/04_challenge-the-status-quo__500x500.webp",
    },
    {
      id: "we-before-me",
      label: "we before me",
      title: "we before me",
      text: "Although we can make a difference individually, we will go further, accomplish more and touch more lives if we do it as one team and one organisation working towards our common goals.",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2024/06/05_we-before-me__500x500.webp",
    },
    {
      id: "plan-tomorrow",
      label: "plan for tomorrow, focus on today",
      title: "plan for tomorrow, focus on today",
      text: "Our environment is ever-changing and we meet these changes head-on by adopting a progress-driven mindset. We value diverse inputs, we push the envelope to open up possibilities for innovation, growth and ultimately staying ahead – for our customers, for foodpanda, and ourselves.",
      image:
        "https://www.foodpanda.com/wp-content/uploads/2024/06/06_plan-for-tomorrow-focus-on-today__500x500.webp",
    },
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            About<br />
<<<<<<< HEAD
            <span className="text-primary">foodpanda</span>
          </>
        }
        backgroundImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920"
        height="min-h-[60vh]"
=======
            foodpanda
          </>
        }
        backgroundImage="https://www.foodpanda.com/wp-content/uploads/2025/07/about-foodpanda.webp"
        height="min-h-[50svh] md:min-h-[60vh]"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
      />

      {/* Story Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
<<<<<<< HEAD
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
=======
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed mb-6">
                From food delivery to your daily convenience companion.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  A subsidiary of Delivery Hero, foodpanda launched in Singapore
                  in 2014 as a food delivery platform. Dedicated to helping
                  customers get their tasty favourites fast, it quickly won the
                  hearts and minds of customers in APAC.
                </p>
                <p>
                  Powered by tech and operational excellence, foodpanda has been
                  growing its quick-commerce footprint in more than 400 cities
                  across 11 markets in Asia – Singapore, Hong Kong, Thailand,
                  Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos,
                  Cambodia, and Myanmar.
                </p>
                <p>
                  Thanks to dedicated partners, riders, and a team united by
                  shared values, foodpanda is now providing millions with a
                  convenient way to get food and groceries in a few taps.
                </p>
              </div>
            </div>
            <div className="md:w-1/3"></div>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Strategic Pillars Section (Carousel) */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <Carousel className="w-full">
            <CarouselContent>
              {strategicPillars.map((pillar, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col md:flex-row bg-background rounded-2xl overflow-hidden shadow-sm h-full md:min-h-[400px]">
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                        {pillar.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                    <div
                      className="md:w-1/2 min-h-[300px] md:min-h-full bg-cover bg-center order-1 md:order-2"
                      style={{ backgroundImage: `url(${pillar.image})` }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </section>

      {/* Our Values Section (Tabs) */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our values
          </h2>
          <Tabs defaultValue="prioritise" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="flex flex-wrap h-auto bg-transparent gap-4 justify-center">
                {ourValues.map((value) => (
                  <TabsTrigger
                    key={value.id}
                    value={value.id}
                    className="border border-primary text-primary hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 md:px-6 md:py-2 transition-all duration-300 text-sm md:text-base font-semibold text-center"
                  >
                    {value.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {ourValues.map((value) => (
              <TabsContent key={value.id} value={value.id} className="mt-0">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="md:w-1/2 space-y-4 text-center md:text-left order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      {value.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {value.text}
                    </p>
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the panda team!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Hungry for growth? There’s a seat at our table! We’re looking
                for the best in tech, marketing, sales, logistics, account
                management and more. Explore career opportunities at foodpanda
                now.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-pink" asChild>
                <a
                  href="https://careers.foodpanda.com/jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view jobs
                </a>
              </Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="https://www.foodpanda.com/wp-content/uploads/2025/07/fp-home-3.webp"
                alt="Join the panda team"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
<<<<<<< HEAD
=======

>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
