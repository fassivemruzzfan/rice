import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, MapPin, Phone, CheckCircle } from "lucide-react"

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Service" },
    { icon: MapPin, number: "50+", label: "Mile Service Radius" },
  ]

  const certifications = [
    "Auto Glass Safety Council Certified",
    "Insurance Approved Contractor",
    "Nebraska State Licensed",
    "OSHA Safety Compliant",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Omaha Auto Glass Repair</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted local auto glass experts, committed to providing exceptional service and quality repairs
              throughout the Omaha area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="mb-6">
                <Badge className="bg-primary/10 text-primary mb-4">Locally Owned & Operated</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Professional Auto Glass Services You Can Trust
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Omaha Auto Glass Repair, we understand that your vehicle's glass is crucial for your safety and
                  visibility. That's why we're committed to providing the highest quality repairs and replacements using
                  only premium materials and proven techniques.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team of certified technicians brings years of experience to every job, ensuring your windshield
                  repair or replacement meets the highest industry standards. We take pride in our work and stand behind
                  every service with our comprehensive warranty.
                </p>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Certifications & Credentials</h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Today
              </Button>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today for a free quote on your auto glass repair or replacement needs. We're here to help get
              you back on the road safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                402-555-0123
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
