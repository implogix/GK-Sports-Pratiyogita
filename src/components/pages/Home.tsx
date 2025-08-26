import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Trophy, BookOpen, Users, Calendar, Award, Target } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-15T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      icon: BookOpen,
      title: "General Knowledge Quiz",
      description: "Test your knowledge across various subjects including history, science, current affairs, and more.",
      participants: "500+ participants",
    },
    {
      icon: Trophy,
      title: "Sports Competition",
      description: "Compete in multiple sports including cricket, football, basketball, and athletics.",
      participants: "300+ athletes",
    },
    {
      icon: Award,
      title: "Prizes Worth ₹5 Lakhs",
      description: "Win exciting prizes, certificates, and recognition for your achievements.",
      participants: "Multiple categories",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Registration Open Now
          </Badge>
          <h1 className="text-4xl md:text-6xl mb-6">
            GK & Sports Pratiyogita 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Excellence in Knowledge & Athletics
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50">
            Join the most prestigious academic and sports competition of 2025. 
            Showcase your intellectual prowess and athletic skills on a grand stage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/registration">Register for Quiz</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/registration">Register for Sports</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-8">Competition Starts In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <Card key={item.label} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-600">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Competition Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes GK & Sports Pratiyogita 2025 the premier competition of the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg mr-4">
                      <highlight.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                  <Badge variant="secondary">{highlight.participants}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: '1000+', label: 'Participants' },
              { icon: Trophy, number: '25+', label: 'Sports Events' },
              { icon: BookOpen, number: '10+', label: 'Quiz Categories' },
              { icon: Award, number: '₹5L+', label: 'Prize Money' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="h-8 w-8 mb-3 text-blue-100" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Ready to Compete?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Don't miss your chance to be part of this incredible competition. 
            Register now and secure your spot in GK & Sports Pratiyogita 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
              <Link to="/registration">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}