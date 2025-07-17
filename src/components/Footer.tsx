import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from "lucide-react"

const Footer = memo(() => {
  const currentYear = new Date().getFullYear()

  const serviceAreas = [
    "Omaha",
    "Bellevue",
    "Papillion",
    "La Vista",
    "Gretna",
    "Elkhorn",
    "Millard",
    "Ralston",
    "Chalco",
    "Boys Town",
  ]

  const services = [
    "Windshield Replacement",
    "Rock Chip Repair",
    "Crack Repair",
    "Side Window Replacement",
    "Back Glass Replacement",
    "Emergency Service",
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/9ccc5ea8-9e5f-4dd2-a295-579bca72f167.png"
                alt="Omaha Auto Glass Repair"
                className="h-10 w-auto"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-bold">Omaha Auto Glass Repair</h3>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted local auto glass experts providing professional windshield repair and replacement services
              throughout Omaha and surrounding areas.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:402-555-0123" className="hover:text-primary transition-colors">
                  402-555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:quotes@autoglassomaha.com" className="hover:text-primary transition-colors">
                  quotes@autoglassomaha.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Serving Greater Omaha Area</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/80 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-white/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-white/80 mb-3 text-sm">Get updates on special offers and auto glass tips</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-lg"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white px-4 rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mb-6">
              <h5 className="font-semibold mb-3">Business Hours</h5>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7AM - 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8AM - 5PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9AM - 4PM</span>
                </div>
                <div className="text-primary font-medium">Emergency Service: 24/7</div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Need Emergency Auto Glass Service?</span>
            </div>
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold" asChild>
              <a href="tel:402-555-0123" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call 402-555-0123 Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="border-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-white/80 text-sm">© {currentYear} Omaha Auto Glass Repair. All rights reserved.</div>

          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-white/80 ml-2">4.9/5 on Google Reviews</span>
          </div>

          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/80 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"

export default Footer
