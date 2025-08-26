import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Camera, Play, Download, Eye } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const competitionPhotos = [
    { id: 1, title: 'Opening Ceremony', category: 'ceremony', description: 'Grand opening with 1000+ participants' },
    { id: 2, title: 'Quiz Preliminary Round', category: 'quiz', description: 'Participants during the written test' },
    { id: 3, title: 'Cricket Finals', category: 'sports', description: 'Thrilling cricket final match' },
    { id: 4, title: 'Basketball Action', category: 'sports', description: 'Intense basketball competition' },
    { id: 5, title: 'Quiz Finals', category: 'quiz', description: 'Top 10 finalists in action' },
    { id: 6, title: 'Victory Moments', category: 'ceremony', description: 'Winners celebrating their achievements' },
    { id: 7, title: 'Swimming Championship', category: 'sports', description: 'Record-breaking swimming performances' },
    { id: 8, title: 'Award Ceremony', category: 'ceremony', description: 'Prize distribution to winners' },
  ];

  const videos = [
    { id: 1, title: 'Competition Highlights', duration: '5:30', thumbnail: 'video1.jpg' },
    { id: 2, title: 'Quiz Finals Recap', duration: '3:45', thumbnail: 'video2.jpg' },
    { id: 3, title: 'Sports Action Montage', duration: '4:20', thumbnail: 'video3.jpg' },
    { id: 4, title: 'Winners Interview', duration: '8:15', thumbnail: 'video4.jpg' },
  ];

  const filteredPhotos = (category: string) => {
    return category === 'all' ? competitionPhotos : competitionPhotos.filter(photo => photo.category === category);
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600">
            Event Gallery
          </Badge>
          <h1 className="text-4xl mb-6">Photo & Video Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the excitement and memorable moments from GK & Sports Pratiyogita 2025
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="photos" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="photos" className="flex items-center space-x-2">
              <Camera className="h-4 w-4" />
              <span>Photos</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Videos</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            {/* Photo Categories */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-lg">
                <Button variant="outline" size="sm">All Photos</Button>
                <Button variant="ghost" size="sm">Quiz</Button>
                <Button variant="ghost" size="sm">Sports</Button>
                <Button variant="ghost" size="sm">Ceremony</Button>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {competitionPhotos.map((photo) => (
                <Card key={photo.id} className="shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center rounded-t-lg">
                        <Camera className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                        <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <Badge 
                        className={`absolute top-2 right-2 ${
                          photo.category === 'quiz' ? 'bg-blue-600' :
                          photo.category === 'sports' ? 'bg-green-600' :
                          'bg-purple-600'
                        }`}
                      >
                        {photo.category}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{photo.title}</h3>
                      <p className="text-gray-600 text-sm">{photo.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Photos
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center rounded-t-lg">
                        <div className="text-center">
                          <Play className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                          <Badge>{video.duration}</Badge>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                        <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-gray-600 text-sm">Duration: {video.duration}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Download Section */}
        <section className="text-center">
          <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-8">
              <Download className="h-12 w-12 mx-auto mb-4 text-blue-100" />
              <h2 className="text-3xl mb-4">Download Media Package</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get access to high-resolution photos and videos from the competition. 
                Perfect for media coverage, social sharing, and memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Photos
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Download className="h-4 w-4 mr-2" />
                  Download Videos
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}