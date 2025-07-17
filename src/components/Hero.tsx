import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Star } from "lucide-react"

const Hero = memo(() => {
  return (
    <section id="home" className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M30%2030l15-15v30l-15-15zm-15%2015l15-15v30l-15-15z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-sm font-medium mb-6 border border-primary/30">
                Mobile Rock Chip Repair Specialists in Omaha
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional Rock Chip Repair in <span className="text-primary"> Omaha, Nebraska</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-normal">
                Save Hundreds. No Deductible. Mobile Service.
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
                Don't let a small chip become a costly windshield replacement. Our mobile rock chip repair service comes
                to you in Omaha, saving you money, time, and insurance hassles. Professional repairs in 15-30 minutes
                with no deductible!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Free Quote - Save $300+
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black bg-white hover:text-white hover:border-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 relative overflow-hidden group"
                asChild
              >
                <a href="tel:402-555-0123" className="flex items-center space-x-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  <Phone className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Call Us Today!</span>
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-white/80">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm">Trusted by 500+ Omaha Drivers</span>
            </div>
          </div>

          {/* Right Content - Service Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg">
                  <img
                    src="/lovable-uploads/9ccc5ea8-9e5f-4dd2-a295-579bca72f167.png"
                    alt="Omaha Auto Glass Repair"
                    className="h-20 w-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile Rock Chip Repair</h3>
                <p className="text-white/80 mb-6">
                  Professional chip repair that comes to you. Save hundreds compared to replacement and avoid insurance
                  deductibles. Most repairs done in 15-30 minutes!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>$0 Insurance Deductible</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Same-Day Mobile Service</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>15-30 Minute Repairs</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Save $300-800+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero
