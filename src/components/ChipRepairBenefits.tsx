"use client"

import { memo, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Clock, MapPin, Car, Wrench, CheckCircle, Phone } from "lucide-react"

const ChipRepairBenefits = memo(() => {
  const benefits = useMemo(
    () => [
      {
        icon: DollarSign,
        title: "Save Hundreds of Dollars",
        description:
          "Rock chip repair costs a fraction of windshield replacement. Avoid the $300-800+ cost of a new windshield.",
        highlight: "90% Cost Savings",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
      },
      {
        icon: MapPin,
        title: "Complete Mobile Convenience",
        description: "We come to your home, office, or anywhere in Omaha. No need to visit a shop or disrupt your day.",
        highlight: "We Come to You",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      },
      {
        icon: Clock,
        title: "No Vehicle Downtime",
        description:
          "Repairs take just 15-30 minutes while you keep your car. No waiting at shops or rental car hassles.",
        highlight: "Quick & Easy",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
      },
      {
        icon: Car,
        title: "No ADAS Recalibration",
        description:
          "Unlike replacements, repairs don't require expensive advanced driver assistance system recalibration ($150-500+).",
        highlight: "Additional Savings",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
      },
      {
        icon: Wrench,
        title: "Preserve Original Factory Seal",
        description:
          "Keep your manufacturer's windshield seal intact. No risk of leaks, wind noise, or rattles from installation issues.",
        highlight: "Factory Quality",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
      },
      {
        icon: CheckCircle,
        title: "Easier Scheduling",
        description:
          "Same-day service available. No waiting weeks for shop appointments or dealing with complicated scheduling.",
        highlight: "Flexible Timing",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
      },
    ],
    [],
  )

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Smart Omaha Drivers Choose Chip Repair
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't let a small chip turn into a costly replacement. Our professional chip repair service offers
            significant advantages that save you money, time, and hassle.
          </p>
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
            <span className="text-primary font-semibold text-sm">
              ⚡ Act Fast: Chips spread quickly in Nebraska weather
            </span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="relative border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group shadow-md cursor-pointer"
            >
              <div className="absolute -top-3 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {benefit.highlight}
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <div
                  className={`w-16 h-16 mx-auto mb-4 ${benefit.iconBg} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <benefit.icon className={`h-8 w-8 ${benefit.iconColor} relative z-10`} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:scale-105 transition-transform duration-300">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 text-center border border-slate-200 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Save Money and Time?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait for that chip to spread into a crack. Get professional repair today and avoid costly replacement
            down the road. Most repairs completed in under 30 minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Free Quote Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 bg-transparent"
              asChild
            >
              <a href="tel:402-555-0123" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call for Same-Day Service</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

ChipRepairBenefits.displayName = "ChipRepairBenefits"

export default ChipRepairBenefits
