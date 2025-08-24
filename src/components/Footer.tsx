import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-golf-green font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-xl">Golf India</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Making golf accessible to everyone in India. Discover the sport beyond boundaries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/learn" className="text-primary-foreground/80 hover:text-white transition-colors">Learn Golf</Link></li>
              <li><Link to="/events" className="text-primary-foreground/80 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/players" className="text-primary-foreground/80 hover:text-white transition-colors">Players</Link></li>
              <li><Link to="/courses" className="text-primary-foreground/80 hover:text-white transition-colors">Golf Courses</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/insights" className="text-primary-foreground/80 hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/community" className="text-primary-foreground/80 hover:text-white transition-colors">Q&A Forum</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">info@golfindia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Golf India. All rights reserved. Making golf accessible to everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};