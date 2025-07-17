import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Phone, Mail } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    foundUs: '',
    rockChip: '',
    longCrack: '',
    attemptedRepair: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailContent = `
New Quote Request from Omaha Auto Glass Repair Website

Customer Information:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
How they found us: ${formData.foundUs}

Service Details:
Rock chip repair needed: ${formData.rockChip}
Long crack repair needed: ${formData.longCrack}
Previously attempted repair: ${formData.attemptedRepair}

Additional Notes:
${formData.notes}

Submitted on: ${new Date().toLocaleString()}
    `;

    // Create mailto link
    const subject = encodeURIComponent('New Quote Request - Omaha Auto Glass Repair');
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:quotes@autoglassomaha.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      foundUs: '',
      rockChip: '',
      longCrack: '',
      attemptedRepair: '',
      notes: ''
    });
    
    alert('Thank you! Your quote request has been prepared. Please send the email that just opened in your email client.');
  };

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get a Quick Quote
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Call us today at{' '}
              <a href="tel:402-555-0123" className="text-primary font-semibold hover:underline">
                402-555-0123
              </a>{' '}
              or fill out the form for a quick and seamless estimate & opinion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="lg:order-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us directly for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us Now</h3>
                    <a 
                      href="tel:402-555-0123" 
                      className="text-primary font-semibold text-lg hover:underline"
                    >
                      402-555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <a 
                      href="mailto:quotes@autoglassomaha.com" 
                      className="text-primary font-semibold hover:underline"
                    >
                      quotes@autoglassomaha.com
                    </a>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-foreground mb-2">Service Areas</h4>
                  <p className="text-muted-foreground text-sm">
                    Omaha, Bellevue, Papillion, La Vista, Gretna, Elkhorn, 
                    and surrounding Nebraska areas
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quote Form */}
            <Card className="lg:order-1 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you quickly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="foundUs">How did you find out about us?</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, foundUs: value })}>
                      <SelectTrigger className="mt-1 rounded-lg border-gray-300 focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google-ads">Google Ads</SelectItem>
                        <SelectItem value="google-search">Organic Google Search</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="word-of-mouth">Word of mouth</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Do you need a rock chip repair?</Label>
                    <RadioGroup
                      value={formData.rockChip}
                      onValueChange={(value) => setFormData({ ...formData, rockChip: value })}
                      className="flex space-x-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="rock-chip-yes" />
                        <Label htmlFor="rock-chip-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="rock-chip-no" />
                        <Label htmlFor="rock-chip-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Do you need a long crack repair?</Label>
                    <RadioGroup
                      value={formData.longCrack}
                      onValueChange={(value) => setFormData({ ...formData, longCrack: value })}
                      className="flex space-x-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="long-crack-yes" />
                        <Label htmlFor="long-crack-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="long-crack-no" />
                        <Label htmlFor="long-crack-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Have you attempted to repair the damage yourself?</Label>
                    <RadioGroup
                      value={formData.attemptedRepair}
                      onValueChange={(value) => setFormData({ ...formData, attemptedRepair: value })}
                      className="flex space-x-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="attempted-yes" />
                        <Label htmlFor="attempted-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="attempted-no" />
                        <Label htmlFor="attempted-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="mt-1 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                      rows={4}
                      placeholder="Please describe the damage or any additional information..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
