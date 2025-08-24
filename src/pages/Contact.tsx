import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Mail className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with us. We're here to help make golf accessible to everyone in India.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Have questions about golf in India? Want to contribute to our community? 
                  We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email Us</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          Send us an email and we'll respond within 24 hours
                        </p>
                        <p className="font-medium">info@golfindia.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          Speak directly with our golf experts
                        </p>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Visit Us</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          Our office in the heart of Mumbai
                        </p>
                        <p className="font-medium">
                          Golf India HQ<br />
                          Bandra Kurla Complex<br />
                          Mumbai, Maharashtra 400051
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Office Hours</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          We're available to help you
                        </p>
                        <div className="font-medium space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-large">
                <CardHeader className="bg-gradient-card">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="golfExperience">Golf Experience Level</Label>
                      <select id="golfExperience" className="w-full mt-1 p-2 border border-border rounded-md bg-background">
                        <option value="">Select your level</option>
                        <option value="complete-beginner">Complete Beginner</option>
                        <option value="some-experience">Some Experience</option>
                        <option value="intermediate">Intermediate Player</option>
                        <option value="advanced">Advanced Player</option>
                        <option value="professional">Professional</option>
                      </select>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">About Golf India</h2>
            <p className="text-xl text-white/90">
              Our mission is to make golf accessible to everyone in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  To democratize golf in India by providing comprehensive resources, 
                  connecting communities, and breaking down barriers that prevent 
                  people from enjoying this wonderful sport.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  A future where golf is accessible, inclusive, and thriving 
                  across India, with millions of Indians enjoying the sport 
                  and competing at the highest levels globally.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20">
            <h3 className="text-xl font-bold mb-3">What We Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-white/90">
                <li>• Comprehensive beginner guides and tutorials</li>
                <li>• Course directories and reviews</li>
                <li>• Player profiles and success stories</li>
                <li>• Industry insights and analysis</li>
              </ul>
              <ul className="space-y-2 text-white/90">
                <li>• Community Q&A and support forums</li>
                <li>• Equipment recommendations and reviews</li>
                <li>• Event coverage and tournament information</li>
                <li>• Connecting golfers across India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly will you respond to my message?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We aim to respond to all messages within 24 hours during business days. 
                  For urgent inquiries, please call us directly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide personalized golf coaching recommendations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We can connect you with certified golf professionals and academies 
                  in your area based on your skill level and goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you help me find golf courses in my city?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We maintain a comprehensive database of golf courses across India 
                  and can provide personalized recommendations based on your location and preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;