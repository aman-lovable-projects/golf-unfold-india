import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, TrendingUp, Globe, IndianRupee, Users } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      title: "Why Golf is Growing Globally: A Data-Driven Analysis",
      author: "Golf India Editorial",
      date: "March 15, 2024",
      category: "Industry Analysis",
      readTime: "8 min read",
      excerpt: "Golf participation has increased by 25% globally in the past decade. We explore the factors driving this growth and what it means for India.",
      content: [
        "The global golf industry has experienced unprecedented growth, with over 500 million people now playing golf worldwide.",
        "Key growth drivers include increased accessibility, technology integration, and changing demographics.",
        "Asia-Pacific region shows the strongest growth, with countries like South Korea and China leading the way."
      ],
      tags: ["Global Trends", "Growth", "Statistics"]
    },
    {
      title: "How India Can Become a Golf Nation: Roadmap to Success",
      author: "Sports Development Team",
      date: "March 10, 2024",
      category: "Indian Golf",
      readTime: "10 min read",
      excerpt: "From infrastructure to grassroots programs, here's what India needs to become a major golf destination and produce world-class players.",
      content: [
        "India has immense potential with its large population, growing middle class, and increasing disposable income.",
        "Key areas for development: Infrastructure expansion, youth programs, and making golf more affordable.",
        "Success stories from other Asian countries provide a blueprint for India's golf development."
      ],
      tags: ["India", "Development", "Strategy"]
    },
    {
      title: "The Economics of Golf in India: Costs, Benefits, and Opportunities",
      author: "Economic Research Team",
      date: "March 5, 2024",
      category: "Economics",
      readTime: "12 min read",
      excerpt: "A comprehensive look at golf's economic impact in India, from course development to tourism and job creation.",
      content: [
        "Golf contributes over ₹10,000 crores to India's economy through direct and indirect channels.",
        "Each golf course creates approximately 150-200 jobs across various skill levels.",
        "Golf tourism has potential to attract high-spending international visitors to India."
      ],
      tags: ["Economics", "Tourism", "Job Creation"]
    },
    {
      title: "Technology Revolution in Golf: How Apps and AI are Changing the Game",
      author: "Technology Team",
      date: "February 28, 2024",
      category: "Technology",
      readTime: "6 min read",
      excerpt: "From swing analysis apps to AI-powered course management, technology is making golf more accessible and enjoyable for everyone.",
      content: [
        "Golf apps now provide real-time swing analysis, course mapping, and score tracking.",
        "AI-powered coaching is making professional instruction available to more players.",
        "Virtual reality golf simulators are bringing the game to urban areas where courses are scarce."
      ],
      tags: ["Technology", "Apps", "Innovation"]
    },
    {
      title: "Breaking Barriers: Making Golf Inclusive and Accessible in India",
      author: "Inclusion Advocacy Team",
      date: "February 25, 2024",
      category: "Social Impact",
      readTime: "9 min read",
      excerpt: "Initiatives and strategies to make golf more inclusive across economic, social, and gender lines in India.",
      content: [
        "Golf's elite image is slowly changing with initiatives targeting schools and communities.",
        "Women's participation in Indian golf is growing, led by success stories like Aditi Ashok.",
        "Municipal courses and driving ranges are making golf accessible to broader demographics."
      ],
      tags: ["Inclusion", "Women's Golf", "Accessibility"]
    },
    {
      title: "Climate and Golf: Year-Round Playing Conditions Across India",
      author: "Sports Science Team",
      date: "February 20, 2024",
      category: "Climate & Conditions",
      readTime: "7 min read",
      excerpt: "Understanding India's diverse climate and how it affects golf playing conditions throughout the year.",
      content: [
        "India's diverse climate offers year-round golf opportunities in different regions.",
        "Peak season varies by region: October-March in North India, November-February in South India.",
        "Monsoon season challenges and opportunities for course maintenance and play."
      ],
      tags: ["Climate", "Seasons", "Course Conditions"]
    }
  ];

  const trendingTopics = [
    { topic: "Indian Players in International Tours", growth: "+35%" },
    { topic: "Golf Course Development", growth: "+28%" },
    { topic: "Women's Golf Participation", growth: "+42%" },
    { topic: "Golf Technology Adoption", growth: "+56%" },
    { topic: "Corporate Golf Events", growth: "+31%" },
  ];

  const quickStats = [
    { label: "Golf Courses in India", value: "270+", icon: Globe },
    { label: "Indian Professional Golfers", value: "15+", icon: Users },
    { label: "Annual Golf Industry Value", value: "₹10,000 Cr", icon: IndianRupee },
    { label: "Average Course Development Cost", value: "₹50-100 Cr", icon: TrendingUp },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <TrendingUp className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Golf Insights & Articles
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Deep analysis, trends, and insights about golf in India and around the world
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trending in Golf</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hot topics and growing trends in the Indian golf industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {trendingTopics.map((trend, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardContent className="p-4">
                  <div className="text-sm font-medium mb-2">{trend.topic}</div>
                  <Badge variant="secondary" className="text-green-600">
                    {trend.growth}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles & Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In-depth articles about golf trends, development, and opportunities in India
            </p>
          </div>

          <div className="grid gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-large transition-shadow">
                <CardHeader className="bg-gradient-card">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-6">
                    {article.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="golf" size="sm">
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay updated with the latest golf insights, tips, and news</h2>
          <p className="text-xl mb-8 text-white/90">
            Never miss a swing — subscribe now! Get the latest articles, trends, and analysis delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-foreground bg-white"
            />
            <Button variant="outline-light" className="font-bold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            Weekly insights • No spam • Unsubscribe anytime
          </p>
        </div>
      </section>

      {/* Future Topics */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Coming Up Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Golf Course Architecture in India</CardTitle>
                <CardDescription>
                  How Indian courses are designed to suit local climate and terrain
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Corporate Golf Culture</CardTitle>
                <CardDescription>
                  The role of golf in Indian business and networking
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Youth Golf Development</CardTitle>
                <CardDescription>
                  Programs and initiatives to engage young Indians in golf
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sustainable Golf Practices</CardTitle>
                <CardDescription>
                  Environmental considerations in Indian golf course management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;