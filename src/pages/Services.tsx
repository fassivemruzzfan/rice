import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Clock, 
  MapPin, 
  CheckCircle,
  DollarSign,
  Car,
  Wrench,
  Phone,
  Star
} from 'lucide-react';

const Services = () => {

  const repairProcess = [
    {
      step: 1,
      title: "Assessment",
      description: "We examine the chip size, location, and type to determine if it's repairable"
    },
    {
      step: 2,
      title: "Preparation", 
      description: "Clean the damaged area and prepare the surface for optimal repair results"
    },
    {
      step: 3,
      title: "Injection",
      description: "Apply specialized resin to fill the chip and restore structural integrity"
    },
    {
      step: 4,
      title: "Curing",
      description: "UV light cures the resin for a permanent, nearly invisible repair"
    },
    {
      step: 5,
      title: "Finishing",
      description: "Polish and inspect to ensure the repair meets our quality standards"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Avoid Costly Replacement",
      description: "Rock chip repair costs a fraction of windshield replacement, saving you hundreds of dollars."
    },
    {
      icon: Shield,
      title: "No Insurance Deductible",
      description: "Most insurance companies cover chip repairs with no deductible, unlike replacements."
    },
    {
      icon: Clock,
      title: "Quick & Convenient",
      description: "Repairs take 15-30 minutes with no downtime. Keep your vehicle while we work."
    },
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to your location - home, office, or anywhere in Omaha. No shop visits required."
    },
    {
      icon: Car,
      title: "No ADAS Recalibration",
      description: "Unlike replacements, repairs don't require expensive advanced driver assistance system recalibration."
    },
    {
      icon: Wrench,
      title: "Preserves Original Seal",
      description: "Keep your factory windshield seal intact - no risk of leaks or wind noise from poor installation."
    }
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Windshield Chip Repair Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Professional rock chip repair that saves you money and time
            </p>
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary-light text-primary-light" />
              ))}
              <span className="text-primary-foreground/80 ml-2">Trusted by Omaha drivers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Chip Repair Over Replacement?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rock chip repair offers significant advantages over windshield replacement, 
              saving you money, time, and hassle while maintaining your vehicle's integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
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
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Repair Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven 5-step process ensures a professional, long-lasting repair that 
              restores your windshield's strength and clarity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {repairProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Don't Let a Small Chip Become a Big Problem
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Temperature changes, road vibrations, and impacts can turn a small chip into a large crack. 
            Get it repaired today and save hundreds on replacement costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="tel:402-555-0123" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
