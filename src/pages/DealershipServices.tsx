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
  Car,
  Calendar,
  FileText,
  TrendingUp,
  Users
} from 'lucide-react';

const DealershipServices = () => {

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Buyer Confidence",
      description: "Clean, chip-free glass helps your inventory sell faster."
    },
    {
      icon: Shield,
      title: "Prevent Full Replacements", 
      description: "Rock chips often lead to cracks — repairing early protects your margins."
    },
    {
      icon: Clock,
      title: "24/7 On-Site Mobile Glass Service",
      description: "We work around your hours — no need to move cars offsite."
    },
    {
      icon: FileText,
      title: "Simple Invoicing",
      description: "One consolidated invoice per visit. Net 15 or Net 30 terms available."
    },
    {
      icon: Users,
      title: "Professional Presence",
      description: "We operate quietly and professionally without disrupting your staff or customers."
    }
  ];

  const services = [
    "On-site windshield chip inspection for every vehicle on the lot",
    "High-quality resin injection and curing for all eligible chips", 
    "Vehicle-level reporting to track completed repairs",
    "Optional emergency chip repair service within 24 hours",
    "Flexible service schedules tailored to your sales volume"
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
              Dealership Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Lot Chip Repair Program for Used Car Dealerships
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-normal">
              Mobile Windshield Repair for Dealerships — Keep Your Lot Sales-Ready
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              As a used car dealership, every detail matters. Even a tiny chip on a windshield can reduce 
              the perceived value of a vehicle, turn away buyers, or lead to costly full replacements.
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
                Reliable Mobile Windshield Repair for Dealerships
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                With Omaha Auto Glass Repair LLC, you get a reliable, scheduled mobile windshield repair 
                service for dealerships. We walk your lot weekly or bi-weekly, inspect every vehicle, 
                and professionally repair any windshield chips — right on site.
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Why Omaha Dealerships Choose Our Lot Chip Program
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>

            {/* Service Details */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                What's Included in Our Dealership Glass Service
              </h3>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coverage Area */}
            <div className="mb-16 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Serving Omaha-Area Dealerships
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From small independent lots to high-volume auto groups, our mobile windshield repair 
                for dealerships ensures your vehicles are always ready to sell. We serve all of Omaha, 
                Council Bluffs, and the greater metro region, offering trusted, professional-grade 
                mobile chip repair services.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                Book a Lot Walk & Chip Check
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Let us visit your dealership and walk your inventory. You may be surprised how many 
                hidden chips are costing you money.
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
                Ask about dealership discounts and routine lot walk scheduling
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DealershipServices;
