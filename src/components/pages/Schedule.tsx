import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Calendar, Clock, MapPin, Download, BookOpen, Trophy, Users } from 'lucide-react';

export default function Schedule() {
  const quizSchedule = [
    {
      date: 'March 15, 2025',
      time: '09:00 AM - 11:00 AM',
      event: 'Quiz Preliminary Round',
      venue: 'Main Auditorium',
      description: 'Written test with 100 questions covering various subjects',
    },
    {
      date: 'March 15, 2025',
      time: '02:00 PM - 04:00 PM',
      event: 'Quiz Semi-Final',
      venue: 'Conference Hall A',
      description: 'Top 50 participants compete in rapid-fire round',
    },
    {
      date: 'March 15, 2025',
      time: '06:00 PM - 08:00 PM',
      event: 'Quiz Final & Prize Distribution',
      venue: 'Main Auditorium',
      description: 'Final round with top 10 participants',
    },
  ];

  const sportsSchedule = [
    {
      date: 'March 16, 2025',
      time: '08:00 AM - 12:00 PM',
      events: ['Cricket (Pool A)', 'Football (Pool A)', 'Basketball (Men)'],
      venue: 'Sports Complex Ground 1, 2, 3',
    },
    {
      date: 'March 16, 2025',
      time: '02:00 PM - 06:00 PM',
      events: ['Cricket (Pool B)', 'Football (Pool B)', 'Basketball (Women)', 'Volleyball'],
      venue: 'Sports Complex Ground 1, 2, 3, 4',
    },
    {
      date: 'March 17, 2025',
      time: '08:00 AM - 12:00 PM',
      events: ['Athletics (Track Events)', 'Swimming', 'Badminton', 'Table Tennis'],
      venue: 'Athletics Track, Swimming Pool, Indoor Courts',
    },
    {
      date: 'March 17, 2025',
      time: '02:00 PM - 06:00 PM',
      events: ['Semi-Finals (All Sports)', 'Chess Championship'],
      venue: 'Various Venues',
    },
    {
      date: 'March 18, 2025',
      time: '09:00 AM - 01:00 PM',
      events: ['Finals (All Sports)'],
      venue: 'Main Sports Arena',
    },
    {
      date: 'March 18, 2025',
      time: '04:00 PM - 06:00 PM',
      events: ['Closing Ceremony & Prize Distribution'],
      venue: 'Main Auditorium',
    },
  ];

  const venues = [
    {
      name: 'Main Auditorium',
      address: 'Central Academic Building, 1st Floor',
      capacity: '500 people',
      facilities: ['Air Conditioning', 'Audio-Visual System', 'WiFi'],
    },
    {
      name: 'Sports Complex',
      address: 'Behind Main Building, Sports Ground Area',
      capacity: '1000+ people',
      facilities: ['Multiple Grounds', 'Changing Rooms', 'Medical Facility', 'Cafeteria'],
    },
    {
      name: 'Swimming Pool',
      address: 'Sports Complex, Building B',
      capacity: '200 spectators',
      facilities: ['Olympic Size Pool', 'Timing System', 'Viewing Gallery'],
    },
    {
      name: 'Indoor Courts',
      address: 'Sports Complex, Building A',
      capacity: '150 per court',
      facilities: ['4 Badminton Courts', '6 Table Tennis Tables', 'Wooden Flooring'],
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600">
            Event Schedule
          </Badge>
          <h1 className="text-4xl mb-6">Competition Schedule</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete schedule for GK & Sports Pratiyogita 2025 with timings, venues, and event details
          </p>
        </div>

        {/* Download Section */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download Quiz Schedule
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Download Sports Schedule
            </Button>
          </div>
        </div>

        {/* Schedule Tabs */}
        <Tabs defaultValue="quiz" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="quiz" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Quiz Schedule</span>
            </TabsTrigger>
            <TabsTrigger value="sports" className="flex items-center space-x-2">
              <Trophy className="h-4 w-4" />
              <span>Sports Schedule</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <div className="space-y-6">
              {quizSchedule.map((event, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <BookOpen className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{event.event}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{event.date}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{event.venue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sports">
            <div className="space-y-6">
              {sportsSchedule.map((day, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <Trophy className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Day {index + 1} Events</h3>
                          <p className="text-gray-600">{day.events.join(', ')}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{day.date}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{day.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{day.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{day.venue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Venue Information */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Venue Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed information about all competition venues with facilities and directions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {venues.map((venue, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>{venue.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                    <span className="text-gray-700">{venue.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Capacity: {venue.capacity}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Facilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {venue.facilities.map((facility, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Campus Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive campus map will be available here</p>
                  <Button className="mt-4" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Campus Map PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}