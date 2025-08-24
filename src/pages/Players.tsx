import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Trophy, MapPin, Globe, TrendingUp } from "lucide-react";

const Players = () => {
  const indianPlayers = [
    {
      name: "Anirban Lahiri",
      age: 36,
      hometown: "Pune, Maharashtra",
      achievements: ["Multiple European Tour wins", "Represented India in Olympics", "Asian Tour champion"],
      worldRanking: "Top 100",
      description: "India's most consistent performer on international tours",
      careerHighlights: ["2015 Hero Indian Open winner", "Represented India in Rio Olympics 2016"]
    },
    {
      name: "Aditi Ashok",
      age: 25,
      hometown: "Bangalore, Karnataka", 
      achievements: ["Youngest Indian to win European Tour", "Olympic participant", "Multiple Ladies European Tour wins"],
      worldRanking: "Top 50 (Ladies)",
      description: "Pioneer of women's golf in India",
      careerHighlights: ["Tokyo Olympics 4th place", "First Indian to make LPGA Tour cut"]
    },
    {
      name: "Shubhankar Sharma",
      age: 27,
      hometown: "Panchkula, Haryana",
      achievements: ["European Tour winner", "Breakthrough performer", "Asian Tour champion"],
      worldRanking: "Top 150",
      description: "Rising star with aggressive playing style",
      careerHighlights: ["2018 WGC-Mexico Championship T9", "Youngest Indian European Tour winner"]
    },
    {
      name: "Jeev Milkha Singh",
      age: 52,
      hometown: "Chandigarh",
      achievements: ["First Indian on European Tour", "Multiple Asian Tour wins", "Golf pioneer"],
      worldRanking: "Veteran",
      description: "Legendary figure who opened doors for Indian golf",
      careerHighlights: ["4 European Tour wins", "Son of legendary athlete Milkha Singh"]
    }
  ];

  const worldStars = [
    {
      name: "Rory McIlroy",
      country: "Northern Ireland",
      majors: 4,
      highlights: ["Young major champion", "Consistent world #1", "Power and precision"],
      style: "Aggressive driver, excellent iron play"
    },
    {
      name: "Jon Rahm",
      country: "Spain", 
      majors: 2,
      highlights: ["2021 US Open champion", "Former world #1", "Spanish golf icon"],
      style: "Powerful, emotional, clutch performer"
    },
    {
      name: "Tiger Woods",
      country: "USA",
      majors: 15,
      highlights: ["Golf legend", "Comeback king", "Changed the sport forever"],
      style: "Clutch putting, mental toughness, course management"
    },
    {
      name: "Scottie Scheffler",
      country: "USA",
      majors: 2,
      highlights: ["Current world #1", "Masters champion", "Consistent performer"],
      style: "Solid all-around game, excellent under pressure"
    }
  ];

  const golfCountries = [
    {
      country: "United States",
      flag: "🇺🇸",
      players: "300+",
      courses: "15,000+",
      strength: "Infrastructure, college programs, prize money",
      description: "Birthplace of modern professional golf with the strongest infrastructure"
    },
    {
      country: "Scotland",
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      players: "50+",
      courses: "550+", 
      strength: "History, links courses, tradition",
      description: "The home of golf with historic links courses and deep tradition"
    },
    {
      country: "South Korea",
      flag: "🇰🇷",
      players: "200+",
      courses: "400+",
      strength: "Training systems, dedication, women's golf dominance",
      description: "Incredible success in women's golf with systematic training approach"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      players: "100+",
      courses: "1,500+",
      strength: "Year-round play, strong amateur system",
      description: "Perfect climate and strong grassroots programs produce top players"
    },
    {
      country: "India",
      flag: "🇮🇳",
      players: "15+",
      courses: "200+",
      strength: "Growing interest, young talent, increasing investment",
      description: "Emerging golf nation with growing infrastructure and talented youth"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Star className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Golf Players & Countries
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Meet the stars of golf and discover which countries dominate the sport
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="indian" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="indian">Indian Players</TabsTrigger>
              <TabsTrigger value="world">World Stars</TabsTrigger>
              <TabsTrigger value="countries">Golf Nations</TabsTrigger>
            </TabsList>

            <TabsContent value="indian">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Indian Golf Heroes</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Celebrating the Indian golfers making their mark on the world stage
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {indianPlayers.map((player, index) => (
                    <Card key={index} className="hover:shadow-large transition-shadow">
                      <CardHeader className="bg-gradient-card">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl flex items-center gap-2">
                              <Badge variant="outline">🇮🇳</Badge>
                              {player.name}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1">
                              <MapPin className="h-4 w-4" />
                              {player.hometown} • Age {player.age}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary">{player.worldRanking}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4">{player.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Trophy className="h-4 w-4 text-primary" />
                              Major Achievements
                            </h4>
                            <ul className="text-sm space-y-1">
                              {player.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-muted-foreground">• {achievement}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Career Highlights</h4>
                            <div className="space-y-1">
                              {player.careerHighlights.map((highlight, hlIndex) => (
                                <Badge key={hlIndex} variant="outline" className="mr-2 mb-1">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="world">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">World Golf Superstars</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    The biggest names in world golf that every fan should know
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {worldStars.map((player, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{player.name}</span>
                          <Badge variant="secondary">{player.majors} Majors</Badge>
                        </CardTitle>
                        <CardDescription>{player.country}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Career Highlights</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {player.highlights.map((highlight, hlIndex) => (
                                <li key={hlIndex}>• {highlight}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Playing Style</h4>
                            <p className="text-sm text-muted-foreground">{player.style}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="countries">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Golf Around the World</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Which countries lead in golf and why - understanding the global landscape
                  </p>
                </div>
                
                <div className="grid gap-6">
                  {golfCountries.map((nation, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader className="bg-gradient-card">
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-3">
                            <span className="text-3xl">{nation.flag}</span>
                            <span className="text-xl">{nation.country}</span>
                          </CardTitle>
                          <div className="flex gap-2">
                            <Badge variant="outline">{nation.players} Pro Players</Badge>
                            <Badge variant="secondary">{nation.courses} Courses</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4">{nation.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            Key Strengths
                          </h4>
                          <p className="text-sm text-muted-foreground">{nation.strength}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Countries Excel */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What Makes Golf Nations Successful?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Infrastructure & Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Number of quality golf courses</li>
                  <li>• Affordable access to the sport</li>
                  <li>• Professional coaching systems</li>
                  <li>• Youth development programs</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Cultural & Economic Factors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Golf culture and tradition</li>
                  <li>• Economic support for players</li>
                  <li>• Climate suitable for year-round play</li>
                  <li>• Strong collegiate/amateur systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20">
            <h3 className="text-xl font-bold mb-3">India's Golf Potential</h3>
            <p className="text-white/90">
              With growing interest, increasing investment in golf infrastructure, and talented young players, 
              India has the potential to become a major golf nation. The success of players like Anirban Lahiri 
              and Aditi Ashok shows what's possible with proper support and development.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Players;