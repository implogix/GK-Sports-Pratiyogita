import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, User, HelpCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@gksports2025.com',
      description: 'Send us your queries anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 98765 43210',
      description: 'Available 9 AM to 6 PM',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Competition Office, New Delhi',
      description: 'Main organizing committee office',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon - Sat: 9 AM - 6 PM',
      description: 'Sunday: 10 AM - 4 PM',
    },
  ];

  const departments = [
    { name: 'Quiz Coordinator', email: 'quiz@gksports2025.com', phone: '+91 98765 43211' },
    { name: 'Sports Coordinator', email: 'sports@gksports2025.com', phone: '+91 98765 43212' },
    { name: 'Registration Help', email: 'registration@gksports2025.com', phone: '+91 98765 43213' },
    { name: 'Technical Support', email: 'tech@gksports2025.com', phone: '+91 98765 43214' },
  ];

  const faqs = [
    {
      question: 'How can I register for the competition?',
      answer: 'You can register through our online portal by visiting the Registration page and filling out the required forms.',
    },
    {
      question: 'What is the last date for registration?',
      answer: 'The last date for registration is March 1, 2025. We recommend registering early as seats are limited.',
    },
    {
      question: 'Can I participate in both Quiz and Sports?',
      answer: 'Yes, you can register for both categories. However, separate registration fees apply for each category.',
    },
    {
      question: 'What documents do I need to bring?',
      answer: 'Please bring your registration confirmation, valid ID proof, and for sports - medical fitness certificate.',
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600">
            Get In Touch
          </Badge>
          <h1 className="text-4xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about GK & Sports Pratiyogita 2025? We're here to help you with all your queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Query Category *</Label>
                      <Select onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="registration">Registration</SelectItem>
                          <SelectItem value="quiz">Quiz Competition</SelectItem>
                          <SelectItem value="sports">Sports Competition</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe your query in detail..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-600" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex-shrink-0">
                      <contact.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{contact.title}</h4>
                      <p className="text-gray-900">{contact.info}</p>
                      <p className="text-gray-600 text-sm">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Department Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">{dept.name}</h4>
                    <p className="text-gray-600 text-xs mb-1">{dept.email}</p>
                    <p className="text-gray-600 text-xs">{dept.phone}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Check Registration Status
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  View FAQ
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Request Callback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive map will be displayed here</p>
                  <p className="text-gray-500 text-sm mt-2">Competition Office, New Delhi, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}