import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, ThumbsUp, Clock, User, HelpCircle, TrendingUp } from "lucide-react";

const Community = () => {
  const questions = [
    {
      id: 1,
      title: "What's the cost of starting golf in India as a complete beginner?",
      author: "Rajesh Kumar",
      timeAgo: "2 hours ago",
      category: "Beginner Guide",
      answers: 12,
      upvotes: 45,
      description: "I'm interested in learning golf but have no idea about the costs involved. What should I budget for lessons, equipment, and course access?",
      topAnswer: "For beginners in India, expect to spend ₹30,000-50,000 initially including basic lessons, starter equipment set, and course access for a few months."
    },
    {
      id: 2,
      title: "Which cities in India have the best golf academies?",
      author: "Priya Sharma",
      timeAgo: "4 hours ago",
      category: "Training",
      answers: 8,
      upvotes: 32,
      description: "Looking for cities with good golf training facilities and professional coaches for my teenage son.",
      topAnswer: "Delhi NCR, Bangalore, and Mumbai have excellent academies. DLF Golf Academy and Karnataka Golf Association are highly recommended."
    },
    {
      id: 3,
      title: "How do I get access to exclusive golf clubs as a non-member?",
      author: "Arjun Patel",
      timeAgo: "6 hours ago",
      category: "Access",
      answers: 15,
      upvotes: 67,
      description: "Many premium golf clubs seem to be members-only. What are the ways to play at these courses?",
      topAnswer: "Guest privileges through members, corporate memberships, or special events. Some clubs offer day passes during weekdays."
    },
    {
      id: 4,
      title: "Best golf courses for corporate events in Mumbai?",
      author: "Sneha Reddy",
      timeAgo: "8 hours ago",
      category: "Corporate",
      answers: 6,
      upvotes: 23,
      description: "Planning a corporate golf day for 40 people. Need recommendations for courses with event facilities.",
      topAnswer: "Bombay Presidency Golf Club and Royal Western India Turf Club are perfect for corporate events."
    },
    {
      id: 5,
      title: "Is it worth investing in expensive golf clubs as a beginner?",
      author: "Vikram Singh",
      timeAgo: "1 day ago",
      category: "Equipment",
      answers: 20,
      upvotes: 89,
      description: "Everyone says to start with basic clubs, but I see good deals on premium sets. Should I invest early?",
      topAnswer: "Start with a basic set (₹15,000-25,000). Upgrade after 6-12 months when you understand your swing and preferences better."
    },
    {
      id: 6,
      title: "How to improve my putting at home without a green?",
      author: "Meera Gupta",
      timeAgo: "1 day ago",
      category: "Practice",
      answers: 14,
      upvotes: 41,
      description: "Limited access to golf courses. Looking for effective ways to practice putting at home.",
      topAnswer: "Use a putting mat, practice with coins as targets, and work on your setup and alignment daily for 15-20 minutes."
    }
  ];

  const categories = [
    { name: "Beginner Guide", count: 145, color: "bg-blue-100 text-blue-800" },
    { name: "Equipment", count: 89, color: "bg-green-100 text-green-800" },
    { name: "Courses", count: 76, color: "bg-purple-100 text-purple-800" },
    { name: "Training", count: 63, color: "bg-orange-100 text-orange-800" },
    { name: "Rules", count: 45, color: "bg-red-100 text-red-800" },
    { name: "Corporate", count: 32, color: "bg-yellow-100 text-yellow-800" },
  ];

  const topContributors = [
    { name: "Golf Pro Raj", points: 2450, answers: 156, badge: "Expert" },
    { name: "Mumbai Golfer", points: 1890, answers: 134, badge: "Veteran" },
    { name: "Bangalore Golf", points: 1650, answers: 112, badge: "Helper" },
    { name: "Delhi Course Guide", points: 1420, answers: 98, badge: "Helper" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Golf Community & Q&A
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ask questions, share knowledge, and connect with fellow golf enthusiasts across India
          </p>
          <Button variant="hero" size="lg">
            Ask a Question
          </Button>
        </div>
      </section>

      {/* Stats & Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2,450</div>
                <div className="text-sm text-muted-foreground">Questions Asked</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">8,920</div>
                <div className="text-sm text-muted-foreground">Answers Given</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1,200</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Questions Answered</div>
              </CardContent>
            </Card>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Badge className={`mb-2 ${category.color}`}>
                      {category.count}
                    </Badge>
                    <div className="font-medium text-sm">{category.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Questions</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Latest</Button>
              <Button variant="outline" size="sm">Popular</Button>
              <Button variant="outline" size="sm">Unanswered</Button>
            </div>
          </div>

          <div className="grid gap-6">
            {questions.map((question) => (
              <Card key={question.id} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {question.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {question.timeAgo}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2 hover:text-primary cursor-pointer">
                        {question.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {question.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {question.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {question.answers} answers
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {question.upvotes} upvotes
                      </span>
                    </div>
                  </div>
                  
                  {question.topAnswer && (
                    <div className="border-l-4 border-primary pl-4 bg-accent/30 p-3 rounded-r">
                      <div className="text-xs text-muted-foreground mb-1 font-medium">Top Answer:</div>
                      <p className="text-sm">{question.topAnswer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="golf">Load More Questions</Button>
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Top Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topContributors.map((contributor, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/api/placeholder/48/48`} alt={contributor.name} />
                      <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{contributor.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {contributor.badge}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {contributor.points} points • {contributor.answers} answers
                      </div>
                    </div>
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">How Our Community Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <HelpCircle className="h-12 w-12 mx-auto mb-4 text-golf-green-light" />
              <h3 className="text-xl font-semibold mb-2">Ask Questions</h3>
              <p className="text-white/90 text-sm">
                Post your golf-related questions and get answers from experienced players and pros.
              </p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-golf-green-light" />
              <h3 className="text-xl font-semibold mb-2">Share Knowledge</h3>
              <p className="text-white/90 text-sm">
                Help others by sharing your experiences and expertise. Earn points and recognition.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-golf-green-light" />
              <h3 className="text-xl font-semibold mb-2">Grow Together</h3>
              <p className="text-white/90 text-sm">
                Connect with fellow golfers, improve your game, and grow the golf community in India.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl mb-6 text-white/90">
              Golf is better together! Discover how your community works and meet golfers like you. Don't miss out — join our community today!
            </p>
            <Button variant="golf" size="lg" className="bg-forest-green text-white hover:bg-forest-green-dark font-bold">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Be Helpful & Respectful</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Provide helpful and accurate information</li>
                  <li>• Be respectful to all community members</li>
                  <li>• Use clear and descriptive titles for questions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quality Content</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Search before asking duplicate questions</li>
                  <li>• Include relevant details in your questions</li>
                  <li>• Vote on helpful answers and questions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;