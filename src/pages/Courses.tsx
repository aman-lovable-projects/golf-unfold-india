import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Clock, IndianRupee, Users } from "lucide-react";

const Courses = () => {
  const featuredCourses = [
    {
      name: "DLF Golf & Country Club",
      location: "Gurugram, Haryana",
      type: "Championship Course",
      holes: 18,
      par: 72,
      established: "1992",
      designer: "Arnold Palmer",
      greenFee: "₹8,000 - ₹15,000",
      rating: 4.8,
      description: "Premier golf destination near Delhi with world-class facilities",
      facilities: ["Driving Range", "Pro Shop", "Clubhouse", "Caddies Available"],
      contact: "+91 124 2588888",
      highlights: ["Host to Hero Indian Open", "Arnold Palmer designed", "International standard"]
    },
    {
      name: "Karnataka Golf Association",
      location: "Bangalore, Karnataka",
      type: "Heritage Course",
      holes: 18,
      par: 71,
      established: "1876",
      designer: "Unknown/Traditional",
      greenFee: "₹3,000 - ₹6,000",
      rating: 4.6,
      description: "One of India's oldest golf courses with rich heritage",
      facilities: ["Historic Clubhouse", "Professional Coaching", "Restaurant", "Guest Accommodation"],
      contact: "+91 80 25092491",
      highlights: ["Founded in 1876", "Beautiful old trees", "Traditional layout"]
    },
    {
      name: "Royal Calcutta Golf Club",
      location: "Kolkata, West Bengal", 
      type: "Historic Course",
      holes: 18,
      par: 72,
      established: "1829",
      designer: "Traditional Links Style",
      greenFee: "₹4,000 - ₹8,000",
      rating: 4.7,
      description: "Oldest golf club outside Britain with royal heritage",
      facilities: ["Royal Heritage", "Traditional Clubhouse", "Guest Privileges", "Coaching"],
      contact: "+91 33 2473 5303",
      highlights: ["Royal designation", "Oldest outside Britain", "Historic significance"]
    },
    {
      name: "Bombay Presidency Golf Club",
      location: "Mumbai, Maharashtra",
      type: "Urban Course",
      holes: 18,
      par: 70,
      established: "1927",
      designer: "Traditional",
      greenFee: "₹5,000 - ₹10,000",
      rating: 4.5,
      description: "Premium urban golf experience in the heart of Mumbai",
      facilities: ["City Location", "Modern Amenities", "Business Center", "Fine Dining"],
      contact: "+91 22 2494 2431",
      highlights: ["Mumbai's premier club", "Business networking", "Urban convenience"]
    },
    {
      name: "Oxford Golf Resort",
      location: "Pune, Maharashtra",
      type: "Resort Course",
      holes: 18,
      par: 72,
      established: "2004",
      designer: "Peter Harradine",
      greenFee: "₹4,500 - ₹8,500",
      rating: 4.4,
      description: "Beautiful resort course with stunning mountain views",
      facilities: ["Resort Stay", "Spa Services", "Multiple Restaurants", "Conference Facilities"],
      contact: "+91 20 3052 8888",
      highlights: ["Mountain views", "Resort amenities", "Modern design"]
    },
    {
      name: "Delhi Golf Club",
      location: "New Delhi, Delhi",
      type: "Championship Course",
      holes: 18,
      par: 72,
      established: "1931",
      designer: "Peter Thomson",
      greenFee: "₹6,000 - ₹12,000",
      rating: 4.9,
      description: "Delhi's most prestigious golf club in the heart of the capital",
      facilities: ["Heritage Clubhouse", "Professional Academy", "Members Only Areas", "Event Hosting"],
      contact: "+91 11 2436 2768",
      highlights: ["Capital's premier club", "Political networking", "Heritage value"]
    }
  ];

  const cities = [
    { name: "Mumbai", courses: 8, topCourse: "Bombay Presidency Golf Club" },
    { name: "Delhi/NCR", courses: 15, topCourse: "Delhi Golf Club" },
    { name: "Bangalore", courses: 12, topCourse: "Karnataka Golf Association" },
    { name: "Pune", courses: 6, topCourse: "Oxford Golf Resort" },
    { name: "Chennai", courses: 5, topCourse: "Madras Gymkhana Club" },
    { name: "Hyderabad", courses: 4, topCourse: "Hyderabad Golf Club" },
  ];

  const costGuide = [
    { category: "Premium Clubs", range: "₹8,000 - ₹15,000", description: "Top-tier courses with world-class facilities" },
    { category: "Mid-Range Courses", range: "₹3,000 - ₹8,000", description: "Good quality courses with decent facilities" },
    { category: "Budget Options", range: "₹1,500 - ₹3,000", description: "Basic courses, perfect for beginners" },
    { category: "Municipal Courses", range: "₹500 - ₹1,500", description: "Government-run courses, very affordable" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Golf Courses Near You
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the best golf courses across India - from heritage clubs to modern resorts
          </p>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Golf Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              India's premier golf destinations with world-class facilities
            </p>
          </div>

          <div className="grid gap-8">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-large transition-shadow">
                <CardHeader className="bg-gradient-card">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{course.type}</Badge>
                        {course.name}
                      </CardTitle>
                      <CardDescription className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {course.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{course.rating}</span>
                      </div>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {course.greenFee}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{course.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Course Details */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Course Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Holes:</span>
                          <span>{course.holes}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Par:</span>
                          <span>{course.par}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Established:</span>
                          <span>{course.established}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Designer:</span>
                          <span className="text-right">{course.designer}</span>
                        </div>
                      </div>
                    </div>

                    {/* Facilities */}
                    <div>
                      <h4 className="font-semibold mb-3">Facilities</h4>
                      <div className="space-y-2">
                        {course.facilities.map((facility, facilityIndex) => (
                          <Badge key={facilityIndex} variant="outline" className="mr-2 mb-1 text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Highlights & Contact */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Highlights</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {course.highlights.map((highlight, hlIndex) => (
                            <li key={hlIndex}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          {course.contact}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Overview */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Golf Courses by City</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Major Indian cities and their golf offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{city.name}</span>
                    <Badge variant="secondary">{city.courses} Courses</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Featured Course:</p>
                    <p className="font-semibold">{city.topCourse}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Golf Course Pricing Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding golf costs in India - green fees and what to expect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costGuide.map((cost, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <IndianRupee className="h-5 w-5 text-primary" />
                      {cost.category}
                    </span>
                    <Badge variant="outline">{cost.range}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cost.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-gradient-hero text-white">
            <h3 className="text-xl font-bold mb-4 text-center">What's Included in Green Fees?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Usually Included:</h4>
                <ul className="space-y-1 text-white/90">
                  <li>• 18 holes of golf</li>
                  <li>• Golf cart (shared)</li>
                  <li>• Basic amenities</li>
                  <li>• Scorecard</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Additional Costs:</h4>
                <ul className="space-y-1 text-white/90">
                  <li>• Caddie fees (₹300-800)</li>
                  <li>• Club rental (₹500-1500)</li>
                  <li>• Food & beverages</li>
                  <li>• Professional lessons</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Book Golf in India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-primary mb-2" />
                <CardTitle>Book in Advance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Popular courses fill up quickly. Book 3-7 days ahead, especially on weekends.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 mx-auto text-primary mb-2" />
                <CardTitle>Call Directly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Most courses prefer phone bookings. Ask about guest policies and dress codes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary mb-2" />
                <CardTitle>Guest Arrangements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Many clubs require member sponsorship. Ask friends or colleagues for introductions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;