import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";

const NewsroomPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Business", "Campaigns", "Editorials", "Food delivery", "Infographics"];

  const featuredNews = {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    category: "MERCHANTS",
    date: "17 Dec 2025",
    title: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
  };

  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800",
      category: "Business",
      date: "21 Nov 2025",
      title: "foodpanda brings unmatched value to pandapro members with ride-hailing partnerships across Asia",
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      category: "Press Releases",
      date: "25 Nov 2025",
      title: "foodpanda expands 'panda hearts' programme, reports 30% drop in rider accidents across Asia",
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      category: "Food delivery",
      date: "15 Nov 2025",
      title: "New features make ordering even easier with personalized recommendations",
    },
    {
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
      category: "Campaigns",
      date: "10 Nov 2025",
      title: "foodpanda launches festive campaign celebrating local cuisines across Asia",
    },
    {
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
      category: "Business",
      date: "5 Nov 2025",
      title: "pandamart expands to 50 new locations across Southeast Asia",
    },
    {
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
      category: "Editorials",
      date: "1 Nov 2025",
      title: "How quick commerce is reshaping the way we shop for groceries",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Press Releases
          </h1>
        </div>
      </section>

      {/* Featured News */}
      <section className="bg-background pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden bg-secondary">
            <div className="aspect-video lg:aspect-auto">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                  {featuredNews.category}
                </span>
                <span className="text-muted-foreground text-sm">{featuredNews.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {featuredNews.title}
              </h2>
              <Button variant="panda" className="mt-8 w-fit">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and News Grid */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <h2 className="text-2xl font-bold text-foreground">
              Discover latest news
            </h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-panda-dark text-secondary"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  {filter}
                </button>
              ))}
              <Button variant="pandaOutline" size="sm">
                Show more
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="pandaOutline" size="lg">
              Load more news
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsroomPage;
