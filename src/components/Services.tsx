import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Car, 
  Shield, 
  Wrench, 
  Clock, 
  MapPin, 
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Windshield Replacement",
      description: "Complete windshield replacement using OEM or OEM-equivalent glass with lifetime warranty.",
      features: ["OEM Quality Glass", "Lifetime Warranty", "Insurance Billing", "Mobile Service"],
      badge: "Most Popular"
    },
    {
      icon: Shield,
      title: "Rock Chip Repair",
      description: "Expert repair of small chips and dings to prevent cracks from spreading.",
      features: ["Same Day Service", "Prevents Spreading", "Insurance Covered", "Quick 30-Min Service"],
      badge: "Quick Fix"
    },
    {
      icon: Wrench,
      title: "Crack Repair",
      description: "Professional repair of long cracks up to 12 inches in length.",
      features: ["Up to 12\" Cracks", "Strength Restoration", "Clear Finish", "Mobile Available"],
      badge: "Expert Service"
    },
    {
      icon: Car,
      title: "Side Window Replacement",
      description: "Replacement of driver, passenger, and rear side windows with quality glass.",
      features: ["All Side Windows", "Tinted Options", "Quick Installation", "Clean-up Included"],
      badge: null
    },
    {
      icon: Shield,
      title: "Back Glass Replacement",
      description: "Rear windshield replacement including heated glass and defrost lines.",
      features: ["Heated Glass Available", "Defrost Line Repair", "Perfect Fit", "Weather Seal"],
      badge: null
    },
    {
      icon: Zap,
      title: "Emergency Service",
      description: "24/7 emergency auto glass repair for urgent situations and safety concerns.",
      features: ["24/7 Availability", "Emergency Response", "Safety First", "Immediate Service"],
      badge: "24/7"
    }
  ];

  const whyChooseUs = [
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to your location - home, office, or anywhere in Omaha"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Same day service available with most repairs completed in under an hour"
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "All windshield replacements come with our comprehensive lifetime warranty"
    },
    {
      icon: CheckCircle,
      title: "Insurance Approved",
      description: "We work directly with all major insurance companies for hassle-free claims"
    },
    {
      icon: Star,
      title: "Expert Technicians",
      description: "Certified and experienced technicians with years of auto glass expertise"
    },
    {
      icon: Car,
      title: "Quality Materials",
      description: "Only OEM or OEM-equivalent glass and adhesives for lasting repairs"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Auto Glass Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From quick chip repairs to complete windshield replacements, we provide comprehensive 
            auto glass services across Omaha and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              {service.badge && (
                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                  {service.badge}
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose Omaha Auto Glass Repair?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality auto glass services 
              with unmatched customer service and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Serving Greater Omaha Area
          </h3>
          <p className="text-muted-foreground mb-6">
            We provide mobile auto glass services throughout the Omaha metropolitan area
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Omaha', 'Bellevue', 'Papillion', 'La Vista', 'Gretna', 
              'Elkhorn', 'Millard', 'Ralston', 'Chalco', 'Boys Town'
            ].map((city) => (
              <Badge key={city} variant="secondary" className="text-sm">
                {city}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
