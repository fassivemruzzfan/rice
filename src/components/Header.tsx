"use client"

import { useState, useCallback, useMemo } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const location = useLocation()

  const handleMouseEnter = useCallback(() => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setIsServicesOpen(true)
  }, [closeTimeout])

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300)
    setCloseTimeout(timeout)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const isActivePath = useCallback(
    (path: string) => {
      return location.pathname === path
    },
    [location.pathname],
  )

  const isServicesActive = useMemo(() => {
    return ["/services", "/dealership-services", "/fleet-services"].includes(location.pathname)
  }, [location.pathname])

  return (
    <header className="bg-white text-foreground sticky top-0 z-50 shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            <img
              src="/lovable-uploads/9ccc5ea8-9e5f-4dd2-a295-579bca72f167.png"
              alt="Omaha Auto Glass Repair"
              className="h-8 w-auto lg:h-10"
              loading="eager"
            />
            <div className="hidden sm:block">
              <h1 className="text-sm lg:text-lg font-bold text-foreground leading-tight">Omaha Auto Glass Repair</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                isActivePath("/") ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                isActivePath("/about") ? "text-primary" : ""
              }`}
            >
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <button
                className={`flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                  isServicesActive ? "text-primary" : ""
                }`}
              >
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-background border border-border shadow-lg rounded-lg p-3 min-w-[280px] z-50 pb-6"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/services"
                    className="block p-4 rounded-md hover:bg-primary/5 transition-colors relative"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800 text-sm">Rock Chip Repair Service</span>
                      <Badge className="bg-primary/10 text-primary text-xs ml-2">Most Popular</Badge>
                    </div>
                  </Link>
                  <Link
                    to="/dealership-services"
                    className="block p-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <span className="font-medium text-gray-800 text-sm">Dealership Lot Services</span>
                  </Link>
                  <Link
                    to="/fleet-services"
                    className="block p-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <span className="font-medium text-gray-800 text-sm">Commercial Fleet Services</span>
                  </Link>
                </div>
              )}
            </div>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1"
            >
              Contact
            </a>
          </nav>

          {/* Phone Number & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="tel:402-555-0123"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm xl:text-base">402-555-0123</span>
            </a>
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 xl:px-6 py-2 rounded-full font-medium text-sm"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile CTA + Menu button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:402-555-0123"
              className="hidden sm:flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm">Call</span>
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white absolute top-full left-0 right-0 shadow-lg">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 font-medium rounded-md hover:bg-primary/5"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 font-medium rounded-md hover:bg-primary/5"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 font-medium rounded-md hover:bg-primary/5"
                onClick={closeMenu}
              >
                Rock Chip Repair
              </Link>
              <Link
                to="/dealership-services"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 font-medium rounded-md hover:bg-primary/5"
                onClick={closeMenu}
              >
                Dealership Services
              </Link>
              <Link
                to="/fleet-services"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 font-medium rounded-md hover:bg-primary/5"
                onClick={closeMenu}
              >
                Fleet Services
              </Link>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 font-medium rounded-md hover:bg-primary/5"
                onClick={closeMenu}
              >
                Contact
              </a>
              <div className="pt-3 border-t border-border mx-4">
                <a
                  href="tel:402-555-0123"
                  className="flex items-center space-x-2 text-foreground hover:text-primary mb-3 px-0 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">402-555-0123</span>
                </a>
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium"
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
