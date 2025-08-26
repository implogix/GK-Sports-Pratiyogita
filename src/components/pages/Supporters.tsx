import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Building, Heart, Star, Trophy } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Supporters() {
  const sponsors = [
    { name: 'TechCorp India', level: 'Title Sponsor', category: 'Technology' },
    { name: 'Sports Nation', level: 'Sports Partner', category: 'Sports Equipment' },
    { name: 'EduWorld', level: 'Education Partner', category: 'Educational Services' },
    { name: 'HealthFirst', level: 'Medical Partner', category: 'Healthcare' },
    { name: 'MediaPlus', level: 'Media Partner', category: 'Broadcasting' },
    { name: 'FoodCourt', level: 'Hospitality Partner', category: 'Food & Beverage' },
  ];

  const patrons = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chief Patron',
      organization: 'Ministry of Education',
      description: 'Former Secretary of Education, advocate for sports in academics'
    },
    {
      name: 'Ms. Priya Sharma',
      position: 'Patron',
      organization: 'Sports Authority of India',
      description: 'Olympic medalist and sports development expert'
    },
    {
      name: 'Prof. Amit Gupta',
      position: 'Academic Patron',
      organization: 'Delhi University',
      description: 'Renowned educator and quiz competition expert'
    },
  ];

  const supportLevels = [
    {
      level: 'Title Sponsor',
      color: 'bg-yellow-100 text-yellow-800',
      icon: Trophy,
      benefits: ['Logo on all materials', 'Opening ceremony mention', 'Trophy naming rights']
    },
    {
      level: 'Sports Partner',
      color: 'bg-green-100 text-green-800',
      icon: Star,
      benefits: ['Sports equipment branding', 'Venue signage', 'Award ceremony presence']
    },
    {
      level: 'Education Partner',
      color: 'bg-blue-100 text-blue-800',
      icon: Building,
      benefits: ['Quiz materials branding', 'Certificate partnership', 'Educational content']
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600">
            Our Supporters
          </Badge>
          <h1 className="text-4xl mb-6">Sponsors & Patrons</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our valued sponsors and esteemed patrons who make GK & Sports Pratiyogita 2025 possible
          </p>
        </div>

        {/* Sponsors Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Official Sponsors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are grateful to our sponsors for their continued support and partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                  <Badge className={`mb-2 ${
                    sponsor.level === 'Title Sponsor' ? 'bg-yellow-100 text-yellow-800' :
                    sponsor.level.includes('Partner') ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {sponsor.level}
                  </Badge>
                  <p className="text-gray-600 text-sm">{sponsor.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Levels */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Sponsorship Levels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different sponsorship opportunities with varying benefits and recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportLevels.map((level, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${level.color.replace('text-', 'text-').replace('bg-', 'bg-')}`}>
                      <level.icon className="h-5 w-5" />
                    </div>
                    <span>{level.level}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Patrons Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Esteemed Patrons</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Distinguished personalities who guide and support our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patrons.map((patron, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">
                      {patron.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{patron.name}</h3>
                  <Badge variant="outline" className="mb-2">{patron.position}</Badge>
                  <p className="text-gray-600 text-sm mb-3">{patron.organization}</p>
                  <p className="text-gray-500 text-xs">{patron.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Become a Sponsor */}
        <section>
          <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-blue-100" />
              <h2 className="text-3xl mb-4">Become a Sponsor</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join us in promoting excellence in education and sports. Partner with us to make a lasting impact 
                on the lives of young talent across the nation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Download Sponsorship Package
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Sponsorship Team
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}