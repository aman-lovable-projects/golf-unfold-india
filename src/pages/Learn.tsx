import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Target, Shirt, Users, Star, Clock } from "lucide-react";

const Learn = () => {
  const basics = [
    {
      title: "What is Golf?",
      description: "Golf is a sport where players use clubs to hit a ball into holes on a course in the fewest strokes possible.",
      content: "Golf originated in Scotland in the 15th century. It's played on courses with 18 holes, each with different challenges like bunkers, water hazards, and varying distances."
    },
    {
      title: "The Golf Course",
      description: "Learn about tees, fairways, greens, and hazards",
      content: "A golf course consists of 18 holes. Each hole has a tee (starting area), fairway (main playing area), rough (longer grass), and green (smooth area around the hole)."
    },
    {
      title: "Basic Rules",
      description: "Simple rules to get you started",
      content: "Play the ball as it lies, count every stroke, and follow proper etiquette. The player with the lowest total score wins."
    }
  ];

  const equipment = [
    {
      name: "Golf Clubs",
      description: "Drivers, irons, wedges, and putters",
      details: "Beginner set: Driver, 7-iron, 9-iron, pitching wedge, putter. Cost in India: ₹15,000-50,000"
    },
    {
      name: "Golf Balls",
      description: "Choose the right ball for your skill level",
      details: "Start with two-piece balls. Cost: ₹100-300 per ball. Practice balls available at ranges."
    },
    {
      name: "Golf Attire",
      description: "Dress code and comfort",
      details: "Collared shirt, golf shoes with soft spikes, comfortable pants. Many courses have dress codes."
    }
  ];

  const formats = [
    {
      name: "Stroke Play",
      description: "Count every stroke, lowest total wins",
      example: "Most common format in professional tournaments"
    },
    {
      name: "Match Play",
      description: "Hole-by-hole competition",
      example: "Used in Ryder Cup, very strategic format"
    },
    {
      name: "Scramble",
      description: "Team format, all players hit, use best shot",
      example: "Great for beginners and corporate events"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Learn Golf
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your complete guide to understanding golf - from absolute beginner to confident player
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="basics">Golf Basics</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="rules">Rules & Scoring</TabsTrigger>
              <TabsTrigger value="etiquette">Etiquette</TabsTrigger>
            </TabsList>

            <TabsContent value="basics">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Golf Fundamentals</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Start your golf journey with these essential concepts
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {basics.map((basic, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          {basic.title}
                        </CardTitle>
                        <CardDescription>{basic.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{basic.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="equipment">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Golf Equipment Guide</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Essential equipment for beginners in India
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {equipment.map((item, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shirt className="h-5 w-5 text-primary" />
                          {item.name}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rules">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Rules & Scoring</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Understand how golf is played and scored
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Basic Scoring</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Eagle:</span>
                        <span className="text-muted-foreground">2 under par</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Birdie:</span>
                        <span className="text-muted-foreground">1 under par</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Par:</span>
                        <span className="text-muted-foreground">Expected score</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Bogey:</span>
                        <span className="text-muted-foreground">1 over par</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Double Bogey:</span>
                        <span className="text-muted-foreground">2 over par</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Game Formats</h3>
                    <div className="space-y-4">
                      {formats.map((format, index) => (
                        <div key={index} className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold">{format.name}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{format.description}</p>
                          <p className="text-xs text-muted-foreground italic">{format.example}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="etiquette">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Golf Etiquette</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Respect the game, course, and fellow players
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      On the Course
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Be quiet when others are playing</li>
                      <li>• Repair divots and ball marks</li>
                      <li>• Let faster groups play through</li>
                      <li>• Stay out of other players' line of sight</li>
                      <li>• Keep up with the pace of play</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Course Care
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Replace divots with sand/seed mix</li>
                      <li>• Repair ball marks on greens</li>
                      <li>• Rake bunkers after use</li>
                      <li>• Don't damage the course</li>
                      <li>• Follow cart path rules</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6 bg-gradient-accent">
                  <h3 className="text-xl font-bold mb-4">Common Golf Terms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Fore:</strong> Warning shout when ball might hit someone</p>
                      <p><strong>Tee off:</strong> Start of a hole, hitting from the tee</p>
                      <p><strong>Fairway:</strong> Short grass between tee and green</p>
                      <p><strong>Rough:</strong> Longer grass areas</p>
                    </div>
                    <div>
                      <p><strong>Green:</strong> Smooth putting surface around hole</p>
                      <p><strong>Bunker:</strong> Sand trap hazard</p>
                      <p><strong>Water hazard:</strong> Pond, stream, or lake</p>
                      <p><strong>Pin:</strong> Flagstick marking the hole</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-xl mb-6 text-white/90">
            Find golf courses near you and start your golf journey
          </p>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
            <a href="/courses">Find Golf Courses</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Learn;