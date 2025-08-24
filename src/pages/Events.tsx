import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users, Star } from "lucide-react";

const Events = () => {
  const majorEvents = [
    {
      name: "The Masters Tournament",
      location: "Augusta National Golf Club, Georgia, USA",
      dates: "April 11-14, 2024",
      description: "The most prestigious golf tournament, famous for its green jacket tradition",
      prize: "$18 Million",
      champions: ["Tiger Woods (2019)", "Dustin Johnson (2020)", "Hideki Matsuyama (2021)", "Scottie Scheffler (2022)"],
      participants: ["Rory McIlroy", "Tiger Woods", "Jon Rahm", "Scottie Scheffler"],
      facts: [
        "Only major played at the same course every year",
        "Winners receive the famous green jacket",
        "Started in 1934 by Bobby Jones"
      ]
    },
    {
      name: "PGA Championship",
      location: "Various locations across USA",
      dates: "May 16-19, 2024",
      description: "One of golf's four major championships with strong field",
      prize: "$15 Million",
      champions: ["Brooks Koepka (2019)", "Collin Morikawa (2020)", "Phil Mickelson (2021)", "Justin Thomas (2022)"],
      participants: ["Brooks Koepka", "Collin Morikawa", "Justin Thomas", "Jon Rahm"],
      facts: [
        "Rotates between different courses",
        "Known for strong fields",
        "Part of the Grand Slam"
      ]
    },
    {
      name: "The Open Championship",
      location: "Various links courses in UK",
      dates: "July 18-21, 2024",
      description: "The oldest golf major, played on traditional links courses",
      prize: "$14 Million",
      champions: ["Shane Lowry (2019)", "Collin Morikawa (2021)", "Cameron Smith (2022)", "Brian Harman (2023)"],
      participants: ["Rory McIlroy", "Jon Rahm", "Cameron Smith", "Viktor Hovland"],
      facts: [
        "Oldest golf championship (1860)",
        "Played on links courses",
        "Winner gets Claret Jug"
      ]
    },
    {
      name: "Asian Tour",
      location: "Various countries across Asia",
      dates: "Year-round series",
      description: "Premier golf tour in Asia featuring top Asian and international players",
      prize: "Various prizes",
      champions: ["Multiple champions each season"],
      participants: ["Anirban Lahiri (India)", "Shubhankar Sharma (India)", "Jeev Milkha Singh (India)"],
      facts: [
        "Platform for Asian golfers",
        "Multiple tournaments across Asia",
        "Great opportunity for Indian players"
      ]
    }
  ];

  const upcomingEvents = [
    { name: "Hero Indian Open", date: "March 14-17, 2024", location: "Delhi Golf Club" },
    { name: "DLF Golf Championship", date: "April 5-7, 2024", location: "DLF Golf Club, Gurugram" },
    { name: "PGTI Championship", date: "May 10-12, 2024", location: "Karnataka Golf Association" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Major Golf Events
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Understand the biggest tournaments in golf - explained for Indian audiences
          </p>
        </div>
      </section>

      {/* Major Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Major Championships</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Golf's four major championships are the most prestigious tournaments in the sport
            </p>
          </div>

          <div className="grid gap-8">
            {majorEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-large transition-shadow">
                <CardHeader className="bg-gradient-card">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Star className="h-6 w-6 text-primary" />
                        {event.name}
                      </CardTitle>
                      <CardDescription className="text-base">{event.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {event.prize}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Event Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">{event.dates}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{event.location}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Did You Know?</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {event.facts.map((fact, factIndex) => (
                            <li key={factIndex}>• {fact}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Recent Champions */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        Recent Champions
                      </h4>
                      <div className="space-y-2">
                        {event.champions.map((champion, championIndex) => (
                          <div key={championIndex} className="text-sm bg-accent p-2 rounded">
                            {champion}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Players */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        Key Players to Watch
                      </h4>
                      <div className="space-y-2">
                        {event.participants.map((participant, participantIndex) => (
                          <div key={participantIndex} className="text-sm bg-secondary p-2 rounded flex items-center justify-between">
                            <span>{participant}</span>
                            {participant.includes("India") && (
                              <Badge variant="outline" className="text-xs">🇮🇳</Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Indian Events */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events in India</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Major golf tournaments happening in India - perfect for local spectators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {event.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="w-full justify-center py-2">
                    {event.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Golf Calendar Explanation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-hero text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Understanding the Golf Calendar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Major Season (Apr-Jul)</h3>
                <p className="text-white/90 text-sm mb-4">
                  The four major championships happen during this period, representing golf's biggest prizes.
                </p>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• April: The Masters</li>
                  <li>• May: PGA Championship</li>
                  <li>• July: The Open Championship</li>
                  <li>• June: US Open</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Indian Golf Season</h3>
                <p className="text-white/90 text-sm mb-4">
                  Most Indian tournaments happen during cooler months for better playing conditions.
                </p>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• Oct-Mar: Peak season in India</li>
                  <li>• Hero Indian Open (Major event)</li>
                  <li>• PGTI Tour events</li>
                  <li>• Club championships</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Events;