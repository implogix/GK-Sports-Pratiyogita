import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Trophy, BookOpen, Users, Award, CheckCircle, Target } from 'lucide-react';

export default function About() {
  const eligibility = [
    "Age: 16-35 years (as of 1st January 2025)",
    "Educational Qualification: Minimum 10th pass",
    "Sports: Valid fitness certificate required",
    "Quiz: No specific educational requirements",
    "Registration fee: ₹500 for Quiz, ₹1000 for Sports",
  ];

  const quizRules = [
    "Multiple choice questions with single correct answer",
    "Negative marking: -0.25 for wrong answers",
    "Duration: 2 hours for preliminary round",
    "Topics: General Knowledge, Current Affairs, Science, History",
    "Final round: Rapid fire and buzzer round",
  ];

  const sportsRules = [
    "All participants must carry valid ID proof",
    "Medical fitness certificate mandatory",
    "Team sports require complete team registration",
    "Individual events: Athletics, Swimming, Badminton",
    "Team events: Cricket, Football, Basketball, Volleyball",
  ];

  const benefits = [
    {
      icon: Award,
      title: "Cash Prizes",
      description: "Win cash prizes worth ₹5 lakhs across all categories"
    },
    {
      icon: Trophy,
      title: "Certificates",
      description: "All participants receive participation certificates"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with like-minded individuals from across the country"
    },
    {
      icon: Target,
      title: "Recognition",
      description: "Top performers get featured in national media"
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600">
            About the Competition
          </Badge>
          <h1 className="text-4xl mb-6">GK & Sports Pratiyogita 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive competition designed to test and celebrate both intellectual and physical excellence.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <span>Competition Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                GK & Sports Pratiyogita 2025 is a national-level competition that brings together the brightest minds 
                and most talented athletes from across India. This unique event combines intellectual challenges with 
                physical prowess, creating a platform for holistic development and recognition.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The competition features two main categories: General Knowledge Quiz and Sports Events. Participants 
                can register for either category or both, depending on their interests and abilities. Our mission is 
                to promote healthy competition, encourage learning, and celebrate excellence in all its forms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Quiz Competition</h4>
                  <p className="text-sm text-gray-600">Test your knowledge across various subjects</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Sports Events</h4>
                  <p className="text-sm text-gray-600">Showcase your athletic abilities</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Recognition</h4>
                  <p className="text-sm text-gray-600">Win prizes and national recognition</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <span>Eligibility Criteria</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Rules and Regulations */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quiz Rules */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <span>Quiz Rules</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {quizRules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Sports Rules */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <span>Sports Rules</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {sportsRules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Benefits of Participation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the exciting rewards and opportunities that await participants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg inline-block mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}