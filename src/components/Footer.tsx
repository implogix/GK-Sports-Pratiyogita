import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <Trophy className="h-8 w-8 text-blue-400" />
                <BookOpen className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GK & Sports Pratiyogita 2025</h3>
                <p className="text-gray-400">Excellence in Knowledge & Athletics</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Join us for the most prestigious academic and sports competition of 2025. 
              Showcase your knowledge, skills, and athletic prowess on a grand stage.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/registration" className="text-gray-400 hover:text-white transition-colors">Registration</Link></li>
              <li><Link to="/schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</Link></li>
              <li><Link to="/results" className="text-gray-400 hover:text-white transition-colors">Results</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">info@gksports2025.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 GK & Sports Pratiyogita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}