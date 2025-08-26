import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Trophy, Medal, Award, Download, Star, Crown } from 'lucide-react';

export default function Results() {
  const quizWinners = [
    { rank: 1, name: 'Arjun Sharma', score: '95/100', city: 'Delhi', prize: '₹50,000' },
    { rank: 2, name: 'Priya Patel', score: '92/100', city: 'Mumbai', prize: '₹30,000' },
    { rank: 3, name: 'Rahul Kumar', score: '89/100', city: 'Bangalore', prize: '₹20,000' },
    { rank: 4, name: 'Sneha Gupta', score: '87/100', city: 'Chennai', prize: '₹10,000' },
    { rank: 5, name: 'Vikram Singh', score: '85/100', city: 'Pune', prize: '₹5,000' },
  ];

  const sportsWinners = [
    { sport: 'Cricket', gold: 'Mumbai Warriors', silver: 'Delhi Dynamos', bronze: 'Bangalore Bulls' },
    { sport: 'Football', gold: 'Chennai FC', silver: 'Kolkata Knights', bronze: 'Hyderabad Heroes' },
    { sport: 'Basketball', gold: 'Punjab Panthers', silver: 'Gujarat Giants', bronze: 'Rajasthan Royals' },
    { sport: 'Athletics (100m)', gold: 'Raj Patel (9.8s)', silver: 'Amit Kumar (9.9s)', bronze: 'Suresh Yadav (10.1s)' },
    { sport: 'Swimming (Freestyle)', gold: 'Neha Sharma (55.2s)', silver: 'Pooja Singh (56.1s)', bronze: 'Kavya Reddy (56.8s)' },
  ];

  const leaderboard = [
    { rank: 1, participant: 'Arjun Sharma', category: 'Quiz', points: 950, badge: 'Champion' },
    { rank: 2, participant: 'Mumbai Warriors', category: 'Cricket', points: 920, badge: 'Gold Medalist' },
    { rank: 3, participant: 'Priya Patel', category: 'Quiz', points: 920, badge: 'Runner-up' },
    { rank: 4, participant: 'Chennai FC', category: 'Football', points: 900, badge: 'Gold Medalist' },
    { rank: 5, participant: 'Raj Patel', category: 'Athletics', points: 890, badge: 'Record Holder' },
    { rank: 6, participant: 'Rahul Kumar', category: 'Quiz', points: 890, badge: 'Top Performer' },
    { rank: 7, parameter: 'Punjab Panthers', category: 'Basketball', points: 880, badge: 'Champions' },
    { rank: 8, participant: 'Neha Sharma', category: 'Swimming', points: 870, badge: 'Gold Medalist' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <Trophy className="h-5 w-5 text-blue-500" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-100 text-yellow-800';
      case 2:
        return 'bg-gray-100 text-gray-800';
      case 3:
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600">
            Competition Results
          </Badge>
          <h1 className="text-4xl mb-6">Winners & Results</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the champions and top performers of GK & Sports Pratiyogita 2025
          </p>
        </div>

        {/* Download Results */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download Quiz Results
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Download Sports Results
            </Button>
          </div>
        </div>

        {/* Results Tabs */}
        <Tabs defaultValue="quiz" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="quiz">Quiz Winners</TabsTrigger>
            <TabsTrigger value="sports">Sports Winners</TabsTrigger>
            <TabsTrigger value="leaderboard">Overall Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Trophy className="h-6 w-6 text-blue-600" />
                  </div>
                  <span>Quiz Competition Winners</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quizWinners.map((winner, index) => (
                    <div key={index} className={`p-4 rounded-lg border-2 ${
                      winner.rank === 1 ? 'border-yellow-200 bg-yellow-50' :
                      winner.rank === 2 ? 'border-gray-200 bg-gray-50' :
                      winner.rank === 3 ? 'border-amber-200 bg-amber-50' :
                      'border-blue-200 bg-blue-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {getRankIcon(winner.rank)}
                            <Badge className={getRankColor(winner.rank)}>
                              Rank {winner.rank}
                            </Badge>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{winner.name}</h3>
                            <p className="text-gray-600">{winner.city}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{winner.score}</div>
                          <div className="text-green-600 font-semibold">{winner.prize}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sports">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Medal className="h-6 w-6 text-green-600" />
                  </div>
                  <span>Sports Competition Winners</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sport</TableHead>
                      <TableHead className="text-center">🥇 Gold</TableHead>
                      <TableHead className="text-center">🥈 Silver</TableHead>
                      <TableHead className="text-center">🥉 Bronze</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sportsWinners.map((result, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-semibold">{result.sport}</TableCell>
                        <TableCell className="text-center text-yellow-600 font-semibold">
                          {result.gold}
                        </TableCell>
                        <TableCell className="text-center text-gray-600 font-semibold">
                          {result.silver}
                        </TableCell>
                        <TableCell className="text-center text-amber-600 font-semibold">
                          {result.bronze}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <span>Overall Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Participant</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Points</TableHead>
                      <TableHead>Achievement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboard.map((entry, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getRankIcon(entry.rank)}
                            <span className="font-semibold">{entry.rank}</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">{entry.participant}</TableCell>
                        <TableCell>{entry.category}</TableCell>
                        <TableCell className="font-semibold text-blue-600">{entry.points}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{entry.badge}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Achievement Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-gray-600">Gold Medals</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <Medal className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-gray-600">Silver Medals</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-gray-600">Bronze Medals</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">3</div>
              <div className="text-gray-600">Records Broken</div>
            </CardContent>
          </Card>
        </section>

        {/* Congratulations Message */}
        <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl mb-4">Congratulations to All Winners!</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We celebrate the outstanding performance of all participants in GK & Sports Pratiyogita 2025. 
              Your dedication and talent have made this competition truly memorable.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              View Complete Results PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}