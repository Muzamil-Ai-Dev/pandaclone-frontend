import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, Heart, Globe, Users } from "lucide-react";
import { useState } from "react";

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const values = [
    {
      icon: Heart,
      title: "Passionate",
      description: "We're passionate about delivering great experiences for our customers and partners.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work together across teams and borders to achieve our goals.",
    },
    {
      icon: Globe,
      title: "Global",
      description: "We operate in 11 markets with opportunities across Asia.",
    },
  ];

  const departments = [
    "Engineering",
    "Product",
    "Operations",
    "Marketing",
    "Finance",
    "Human Resources",
    "Customer Service",
    "Data Science",
  ];

  const locations = [
    "Singapore",
    "Hong Kong",
    "Kuala Lumpur",
    "Bangkok",
    "Manila",
    "Taipei",
  ];

  const jobListings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Singapore",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hong Kong",
      type: "Full-time",
    },
    {
      title: "Data Analyst",
      department: "Data Science",
      location: "Kuala Lumpur",
      type: "Full-time",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Bangkok",
      type: "Full-time",
    },
    {
      title: "Operations Coordinator",
      department: "Operations",
      location: "Manila",
      type: "Full-time",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-panda-pink-light overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-panda-dark leading-tight">
                Hungry to make an impact?
              </h1>
              <p className="text-xl text-panda-dark/80 mt-6">
                There's always room at our table.
              </p>
              
              {/* Search Box */}
              <div className="mt-10 relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Start your job search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-14 py-4 rounded-full border-0 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-panda-pink-dark transition-colors">
                  <Search className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-background rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-9xl">🐼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              "To be the most loved everyday food and groceries destination"
            </h2>
            <p className="text-lg text-muted-foreground">
              ...that's our mission at foodpanda. Whether it's by delivering food on our signature pink bikes, providing insights into the newest food trends, or showcasing local favorite restaurants, we're on a mission to redefine how food, people, culture and tech are connected.
            </p>
            <p className="text-muted-foreground mt-6">
              Our parent company, Delivery Hero, is a global leader in the food delivery industry processing over 3 million orders every day and operating in 40+ markets in the world, with 18,000 employees and approximately 500,000+ restaurant partners.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-12">
            Open Positions
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <select className="px-4 py-2 rounded-lg border border-border bg-background text-foreground">
              <option>All Departments</option>
              {departments.map((dept) => (
                <option key={dept}>{dept}</option>
              ))}
            </select>
            <select className="px-4 py-2 rounded-lg border border-border bg-background text-foreground">
              <option>All Locations</option>
              {locations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Job Cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="text-primary font-medium">{job.type}</span>
                  </div>
                </div>
                <Button variant="panda">Apply Now</Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="pandaOutline" size="lg">
              View All Positions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
