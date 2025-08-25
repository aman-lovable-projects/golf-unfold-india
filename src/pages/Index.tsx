import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { ArrowRight, BookOpen, Calendar, Users, MapPin, Trophy, Target } from "lucide-react";
import golfHero from "@/assets/golf-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Learn Golf",
      description: "Complete beginner guides, rules, equipment, and etiquette",
      link: "/learn",
    },
    {
      icon: Calendar,
      title: "Major Events",
      description: "PGA Tour, Masters, Ryder Cup explained for Indian audiences",
      link: "/events",
    },
    {
      icon: Users,
      title: "Players & Countries",
      description: "Profiles of top golfers including Indian stars",
      link: "/players",
    },
    {
      icon: MapPin,
      title: "Golf Courses",
      description: "Find the best golf courses across India",
      link: "/courses",
    },
  ];

  const stats = [
    { number: "500M+", label: "Golf Players Worldwide" },
    { number: "35K+", label: "Golf Courses Globally" },
    { number: "15+", label: "Indian Professional Golfers" },
    { number: "200+", label: "Golf Courses in India" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${golfHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Golf
            <span className="block text-golf-green-light">A Sport Beyond Boundaries</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your complete guide to understanding and enjoying golf in India. 
            From basics to becoming a pro - start your golf journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/learn">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="accent" size="lg">
              <Link to="/courses">
                Find Courses <MapPin className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need to Know About Golf
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resources designed specifically for Indian golf enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="golf" className="w-full">
                    <Link to={feature.link}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-golf-green-light" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Golf Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Indians discovering the joy of golf. From complete beginners to aspiring professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline-light" size="lg">
              <Link to="/learn">
                <Target className="mr-2 h-5 w-5" />
                Begin Learning
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <Link to="/community">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
