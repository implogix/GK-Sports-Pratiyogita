import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Badge } from '../ui/badge';
import { BookOpen, Trophy, User, Mail, Phone, MapPin, Calendar, FileText } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function Registration() {
  const [activeTab, setActiveTab] = useState('quiz');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    qualification: '',
    institution: '',
    category: '',
    sportsEvents: [],
    emergencyContact: '',
    medicalConditions: '',
    agreeTerms: false,
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSportsEventChange = (event: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      sportsEvents: checked 
        ? [...prev.sportsEvents, event]
        : prev.sportsEvents.filter(e => e !== event)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    toast.success(`Registration submitted successfully for ${activeTab === 'quiz' ? 'Quiz' : 'Sports'} competition!`);
  };

  const sportsEvents = [
    'Cricket', 'Football', 'Basketball', 'Volleyball', 'Badminton', 
    'Table Tennis', 'Athletics (100m)', 'Athletics (200m)', 'Long Jump', 
    'High Jump', 'Swimming', 'Chess'
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600">
            Registration Portal
          </Badge>
          <h1 className="text-4xl mb-6">Register for Pratiyogita 2025</h1>
          <p className="text-xl text-gray-600">
            Choose your competition category and complete the registration process
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                activeTab === 'quiz'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Quiz Registration</span>
            </button>
            <button
              onClick={() => setActiveTab('sports')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                activeTab === 'sports'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Trophy className="h-5 w-5" />
              <span>Sports Registration</span>
            </button>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${
                activeTab === 'quiz' ? 'bg-blue-100' : 'bg-green-100'
              }`}>
                {activeTab === 'quiz' ? (
                  <BookOpen className="h-6 w-6 text-blue-600" />
                ) : (
                  <Trophy className="h-6 w-6 text-green-600" />
                )}
              </div>
              <span>
                {activeTab === 'quiz' ? 'Quiz Competition' : 'Sports Competition'} Registration
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
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
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-3">
                <Label>Gender *</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange('gender', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Select onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="mumbai">Maharashtra</SelectItem>
                        <SelectItem value="bangalore">Karnataka</SelectItem>
                        <SelectItem value="chennai">Tamil Nadu</SelectItem>
                        <SelectItem value="kolkata">West Bengal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Educational Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="qualification">Educational Qualification *</Label>
                  <Select onValueChange={(value) => handleInputChange('qualification', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10th">10th Pass</SelectItem>
                      <SelectItem value="12th">12th Pass</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                      <SelectItem value="postgraduate">Post Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution/College</Label>
                  <Input
                    id="institution"
                    value={formData.institution}
                    onChange={(e) => handleInputChange('institution', e.target.value)}
                  />
                </div>
              </div>

              {/* Sports Events Selection (only for sports registration) */}
              {activeTab === 'sports' && (
                <div className="space-y-4">
                  <Label>Select Sports Events *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {sportsEvents.map((event) => (
                      <div key={event} className="flex items-center space-x-2">
                        <Checkbox
                          id={event}
                          checked={formData.sportsEvents.includes(event)}
                          onCheckedChange={(checked) => 
                            handleSportsEventChange(event, checked as boolean)
                          }
                        />
                        <Label htmlFor={event} className="text-sm">{event}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Emergency Contact (for sports registration) */}
              {activeTab === 'sports' && (
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact Number *</Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    required
                  />
                </div>
              )}

              {/* Medical Conditions (for sports registration) */}
              {activeTab === 'sports' && (
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">Medical Conditions (if any)</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    placeholder="Please mention any medical conditions or allergies"
                  />
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                />
                <Label htmlFor="agreeTerms" className="text-sm">
                  I agree to the terms and conditions and confirm that all information provided is accurate.
                </Label>
              </div>

              {/* Registration Fee Info */}
              <div className={`p-4 rounded-lg ${
                activeTab === 'quiz' ? 'bg-blue-50' : 'bg-green-50'
              }`}>
                <h4 className="font-semibold mb-2">Registration Fee</h4>
                <p className="text-sm text-gray-600">
                  {activeTab === 'quiz' 
                    ? 'Quiz Competition: ₹500 (includes study materials and certificate)'
                    : 'Sports Competition: ₹1000 (includes kit, medical support, and certificate)'
                  }
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className={`w-full ${
                  activeTab === 'quiz'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
                size="lg"
              >
                Complete Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}