<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, Heart, Globe, Users } from "lucide-react";
import { useState } from "react";
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

<<<<<<< HEAD
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
=======
  const stats = [
    { number: "7000+", label: "Employees" },
    { number: "400+", label: "Cities" },
    { number: "50+", label: "nationalities" },
    { number: "20+", label: "Languages" },
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
  ];

  const jobListings = [
    {
<<<<<<< HEAD
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
=======
      title: "Specialist, Demand Control",
      location: "Taguig, Philippines",
      jobType: "Permanent",
      description: "Contribute to regional logistics projects to enhance performance across APAC and EU markets, with a focus on Delivery Areas. Conduct cross-functional experiments on pricing and customer choice to optim",
      link: "/job/specialist-demand-control-in-taguig-philippines-jid-2388",
    },
    {
      title: "Specialist, Geomatics",
      location: "Kuala Lumpur, Malaysia",
      jobType: "Permanent",
      description: "As a Geomatics Specialist (APAC, EU, TK), you will play a vital role in optimizing delivery zones, improving logistics performance, and enhancing customer experience. You will collaborate with both Lo",
      link: "/job/specialist-geomatics-in-kuala-lumpur-malaysia-jid-2387",
    },
    {
      title: "Product Manager (Pickup)",
      location: "Singapore",
      jobType: "Permanent",
      description: "We are looking for enthusiastic problem solvers to join us in scaling our platform, digitalising businesses in Asia, uplifting rider livelihoods, and building a hyper-convenient platform for our custo",
      link: "/job/product-manager-pickup-in-singapore-jid-2386",
    },
  ];

  const blogPosts = [
    {
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/__gtrPYlMEWeZAjcoAJNhA/75/APAC_pandapurpose-2023-cover-image-for-Newsroom-LinkedIn_FGD-190757_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.jpg",
      title: "pandapurpose 2023: Delivering with purpose to local communities across Asia",
      publishDate: "Friday, 12 July 2024",
      link: "/blog-post/2024-7/pandapurpose-2023-delivering-with-purpose",
    },
    {
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/GAqzOLxTdUSeYAjcoAJNhA/75/blog+post+thumbnails.png",
      title: "Building a Better Workplace: foodpanda’s Mental Health Initiatives",
      publishDate: "Thursday, 20 June 2024",
      link: "/blog-post/2024-6/foodpandas-mental-health-initiatives",
    },
    {
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/YPdiZywDkk3KrQjcAS9NJg/75/imageeess11.jpg",
      title: "Our Office Space",
      publishDate: "Friday, 03 May 2024",
      link: "/blog-post/2024-5/our-office-space",
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
    },
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#FFF0F5] pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-panda-dark leading-tight mb-4 tracking-tight">
            Hungry to make an impact?
          </h1>
          <h2 className="text-xl md:text-2xl text-panda-dark/70 mb-20 md:mb-28">
            There’s always room at our table.
          </h2>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="relative">
              <Input
                type="text"
                placeholder="Start your job search here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-32 py-10 rounded-full border-0 bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] text-xl transition-all"
              />
              <Button className="absolute right-2 top-2 bottom-2 px-8 rounded-full bg-primary text-white hover:bg-panda-pink-dark transition-all duration-300 font-bold text-lg shadow-md">
                Search
              </Button>
            </div>
            
            {/* Pau Pau Peeking from Search Bar */}
            <div className="absolute -right-2 -top-16 md:-right-6 md:-top-20 pointer-events-none">
              <img
                src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/pau-pau/pau-pau-button.png"
                alt="Pau pau"
                className="h-24 md:h-32 w-auto drop-shadow-xl"
              />
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Hero Banner Photo */}
      <section className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/2Nn1Y5_G9EZl9Qjb1WHOsg/')" }}
        />
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            "To be the most loved everyday food and groceries destination"
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              ...that’s our mission at foodpanda. Whether it’s by delivering
              food on our signature pink bikes, providing insights into the
              newest food trends, or showcasing local favorite restaurants, we’re
              on a mission to redefine how food, people, culture and tech are
              connected.
            </p>
            <p>
              Our parent company, Delivery Hero, is a global leader in the food
              delivery industry processing over 3 million orders every day and
              operating in 40+ markets in the world, with 18,000 employees and
              approximately 500,000+ restaurant partners.
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* We love what we do */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                We love what we do
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                foodpanda is the largest food and grocery delivery platform in
                Asia, outside of China. Operating in more than 400 cities across
                11 markets, we continue to expand and grow in our core food
                delivery business, as well as in new verticals like grocery
                deliveries, with a strong tech infrastructure at our core. From
                our restaurants-partners, cloud kitchens and cloud grocery stores
                — foodpanda is just one tap away, getting everything you need into
                your hands quickly and conveniently!
              </p>
              <div className="flex items-center gap-6">
                <Button variant="panda" size="xl" className="rounded-full px-12 font-bold shadow-lg" asChild>
                  <Link to="/pandapurpose">Find Out More</Link>
                </Button>
                <img 
                  src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/pau-pau/pau-pau-button.png" 
                  alt="Pau pau" 
                  className="h-24 w-auto hidden lg:block drop-shadow-md"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/0bc488e5-8713-4a1f-9d0f-08dc1849ff6f"
                alt="Excited staff"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* You can be yourself at foodpanda */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                You can be yourself at foodpanda
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 50 nationalities and 20 languages spoken across our
                markets, we pride ourselves on our focus on diversity and
                inclusion. We are able to exchange and bring to the table the
                best practices (and food!) from each corner of the world.
              </p>
              <div className="flex items-center gap-6">
                <Button variant="panda" size="xl" className="rounded-full px-12 font-bold shadow-lg" asChild>
                  <Link to="/diversity-equity-and-inclusion">Find Out More</Link>
                </Button>
                <img 
                  src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/pau-pau/pau-pau-button.png" 
                  alt="Pau pau" 
                  className="h-24 w-auto hidden lg:block drop-shadow-md"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/5ad05d5a-d3c2-4d60-e1e9-08dbd6375a5b"
                alt="Diversity"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-20">
            A diverse and high-performing team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-5xl md:text-7xl font-extrabold text-primary mb-2">
                  {stat.number.replace('+', '')}<span className="text-4xl md:text-5xl font-bold">+</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-bold uppercase tracking-widest">
                  {stat.label}
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                </p>
              </div>
            ))}
          </div>
<<<<<<< HEAD
=======
          <div className="flex justify-center">
            <img
              src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/stats-image.svg"
              alt="Stats panda"
              className="w-full max-w-lg h-auto"
            />
          </div>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
        </div>
      </section>

      {/* Job Listings */}
<<<<<<< HEAD
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
=======
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
            Some roles you might be interested in
          </h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {jobListings.map((job, index) => (
              <div key={index} className="group bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <span className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {job.jobType}
                  </span>
                </div>
                <p className="text-gray-500 mb-6 font-medium text-lg">{job.location}</p>
                <p className="text-muted-foreground text-lg line-clamp-2 mb-8 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="panda" className="rounded-full px-8 h-12 text-base font-bold shadow-md" asChild>
                    <Link to={job.link}>Read more</Link>
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 h-12 text-base font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                    Shortlist
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <Button variant="pandaOutline" size="xl" className="rounded-full px-16 text-lg border-2" asChild>
              <Link to="/jobs">View all</Link>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
            </Button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </>
=======

      {/* Blog Posts */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
            Read more about foodpanda
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Company Update</span>
                  <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors line-clamp-3 leading-snug">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-gray-400 text-sm font-medium">{post.publishDate}</p>
                    <Link to={post.link} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all font-bold">
                       →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <Button variant="pandaOutline" size="xl" className="rounded-full px-16 text-lg border-2" asChild>
              <Link to="/posts">View all</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
  );
};

export default CareersPage;
