import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  MapPin, 
  CheckCircle,
  Truck,
  Calendar,
  FileText,
  Users,
  Package,
  Building,
  Wrench,
  Bus
} from 'lucide-react';

const FleetServices = () => {

  const fleetTypes = [
    { text: "Amazon DSPs & Flex Drivers", icon: Package, color: "text-orange-600", bg: "bg-orange-100" },
    { text: "FedEx / UPS / DHL Independent Operators", icon: Package, color: "text-purple-600", bg: "bg-purple-100" }, 
    { text: "U-Haul Locations & Franchisees", icon: Truck, color: "text-orange-500", bg: "bg-orange-50" },
    { text: "Penske, Ryder & Enterprise Truck Rentals", icon: Truck, color: "text-yellow-600", bg: "bg-yellow-100" },
    { text: "Local Trade Businesses (plumbers, HVAC, electricians, roofers)", icon: Wrench, color: "text-blue-600", bg: "bg-blue-100" },
    { text: "Regional Freight Carriers & 18-Wheeler Operators", icon: Truck, color: "text-gray-600", bg: "bg-gray-100" },
    { text: "Municipal Vehicles & Government Fleets", icon: Building, color: "text-green-600", bg: "bg-green-100" },
    { text: "School Buses, Shuttle Vans, Medical Transport Services", icon: Bus, color: "text-red-600", bg: "bg-red-100" }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Avoid Vehicle Downtime",
      description: "Mobile repairs take minutes on site. No need to send vehicles out for glass work."
    },
    {
      icon: Shield,
      title: "Prevent Expensive Replacements", 
      description: "Windshield chips can spread rapidly — early repair keeps your maintenance costs low."
    },
    {
      icon: Calendar,
      title: "Convenient 24/7 Scheduling",
      description: "We work around your hours to service fleets day or night."
    },
    {
      icon: FileText,
      title: "Consolidated Invoicing",
      description: "No need to track multiple service calls — one invoice per visit."
    },
    {
      icon: Users,
      title: "Maintenance Tracking",
      description: "Each windshield repair is logged by vehicle ID for your internal records."
    }
  ];

  const services = [
    "Comprehensive on-site windshield inspections for every fleet vehicle",
    "High-grade resin injection repairs performed on location", 
    "Emergency repair service available within 24 hours",
    "Flexible scheduling and terms (weekly, bi-weekly, or monthly invoicing)"
  ];

  return (
    <div className="min-h-screen pt-0">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20 overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/ChatGPT Image Jul 17, 2025, 04_03_56 PM.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="bg-primary/20 text-white mb-6 px-4 py-2">
              Fleet Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Fleet Windshield Chip Repair & Maintenance
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-normal">
              24/7 Mobile Windshield Repair for Commercial Fleets
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Whether you're running Amazon delivery vans, U-Haul trucks, Penske rentals, FedEx or UPS routes, 
              construction vehicles, or a local plumbing or HVAC fleet, windshield chips are a daily battle — 
              and an overlooked expense.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Service Overview */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Fleet Glass Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                At Omaha Auto Glass Repair LLC, we provide 24/7 mobile fleet windshield repair services 
                across Omaha and surrounding areas. We'll visit your yard, depot, or parking site on a 
                weekly, bi-weekly, or monthly basis — inspect and fix all rock chips before they spread — 
                and invoice you in one streamlined batch.
              </p>
            </div>

            {/* Fleet Types */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Who We Work With
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {fleetTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className={`w-10 h-10 ${type.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <type.icon className={`h-5 w-5 ${type.color}`} />
                    </div>
                    <span className="text-foreground">{type.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Why Fleet Managers Choose Our Mobile Glass Service
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border hover:border-primary/50 transition-colors">
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Center the bottom two cards */}
              <div className="flex justify-center mt-6">
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                  {benefits.slice(3).map((benefit, index) => (
                    <Card key={index + 3} className="border hover:border-primary/50 transition-colors">
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center">
                          {benefit.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Service Details
              </h3>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-primary/20">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coverage Area */}
            <div className="mb-16 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Local Coverage — Built for Omaha Fleets
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We serve commercial fleets throughout Omaha and surrounding Nebraska counties, 
                delivering professional-grade mobile fleet windshield repair to logistics, rental, 
                municipal, and contractor vehicles.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                Request a Fleet Assessment Today
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                If you manage a fleet — or work with someone who does — let us show you how 
                proactive chip repair can save thousands annually.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4"
                  asChild
                >
                  <a href="tel:402-555-0123" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Call (402) 555-0123</span>
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4"
                  asChild
                >
                  <a href="mailto:info@autoglassomaha.com" className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>Email Us</span>
                  </a>
                </Button>
              </div>
              <p className="text-primary-foreground/80 mt-6 text-sm">
                Ask about trial yard walks and contract discounts
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleetServices;
