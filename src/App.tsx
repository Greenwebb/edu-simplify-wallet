import {
  Calculator,
  Calendar,
  ChevronRight,
  CreditCard,
  Facebook,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  TrendingUp,
  Twitter,
  Wallet,
} from "lucide-react";

import Hero from "./componenets/hero";
import Logo from "./assets/images/logo-dark.png";
import Logolight from "./assets/images/logo-light.png";
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-10">
        {" "}
        {/* Header */}
        <header className="px-8 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
          <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="size-[6.5rem]" src={Logo}></img>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-[#673094;] hover:text-\ text-sm font-semibold"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-[#673094;] hover:text-[#FDC100] text-sm font-semibold"
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-[#673094;] hover:text-[#FDC100] text-sm font-semibold"
              >
                Benefits
              </a>
              <a
                href="#testimonials"
                className="text-[#673094;] hover:text-[#FDC100] text-sm font-semibold"
              >
                Testimonials
              </a>
              <button className="button-primary">Download App</button>
            </div>
          </nav>
        </header>
        {/* Hero Section */}
        <Hero />
        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Everything you need to manage education finances
              </h2>
              <p className="text-[24px] text-[#673094;]">
                Powerful features that make managing school expenses effortless
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CreditCard className="h-8 w-8 text-[#FDC100]" />,
                  title: "Smart Payments",
                  description:
                    "Schedule and automate school fee payments with just a few taps. Never miss a deadline again.",
                },
                {
                  icon: <Calendar className="h-8 w-8 text-purple-600" />,
                  title: "Payment Planning",
                  description:
                    "Set up flexible payment schedules that work with your budget and income cycle.",
                },
                {
                  icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
                  title: "Smart Insights",
                  description:
                    "Get personalized financial tips and insights to help you save more for education.",
                },
                {
                  icon: <Calculator className="h-8 w-8 text-green-600" />,
                  title: "Budget Tools",
                  description:
                    "Plan ahead with our advanced budgeting and forecasting tools designed for education expenses.",
                },
                {
                  icon: <Shield className="h-8 w-8 text-[#FDC100]" />,
                  title: "Secure Platform",
                  description:
                    "Bank-level encryption and security measures to keep your financial data safe.",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
                  title: "Progress Tracking",
                  description:
                    "Monitor your savings goals and track your progress with visual analytics.",
                },
              ].map((feature, index) => (
                <div key={index} className="feature-card group">
                  <div className="mb-6">
                    <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-[20px] font-extrabold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-[#673094;] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Start managing education finances in minutes
              </h2>
              <p className="text-[24px] text-[#673094;]">
                Simple steps to get started with EduWallet
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Account",
                  description: "Sign up in seconds with your email address",
                },
                {
                  step: "02",
                  title: "Link School",
                  description:
                    "Connect with your child's educational institution",
                },
                {
                  step: "03",
                  title: "Set Up Payments",
                  description: "Schedule payments that work with your budget",
                },
                {
                  step: "04",
                  title: "Track Progress",
                  description: "Monitor expenses and savings in real-time",
                },
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="text-7xl font-bold text-yellow-400 mb-4 group-hover:text-blue-100 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-[24px] text-primary font-bold mb-3">{step.title}</h3>
                  <p className="text-[#673094;]">{step.description}</p>
                  {index < 3 && (
                    <ChevronRight className="hidden md:block absolute top-1/2 -right-4 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Loved by parents everywhere
              </h2>
              <p className="text-[24px] text-[#673094;]">
                See what our users have to say about EduWallet
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "EduWallet transformed how I manage my children's education expenses. The automated payments are a lifesaver!",
                  author: "Sarah M.",
                  role: "Parent of 2",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
                },
                {
                  quote:
                    "The budgeting tools helped me plan ahead for my kids' education. I feel more confident about our financial future.",
                  author: "David K.",
                  role: "Parent of 3",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
                },
                {
                  quote:
                    "The insights and reminders ensure I never miss a payment. It's like having a personal financial advisor!",
                  author: "Lisa R.",
                  role: "Parent of 1",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
                },
              ].map((testimonial, index) => (
                <div key={index} className="feature-card">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#673094;] leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-6xl text-primary font-bold mb-8">
                Ready to simplify your education finances?
              </h2>
              <p className="text-[24px] text-[#673094;] mb-8">
                Join thousands of parents who are already managing their
                children's education expenses smarter with EduWallet.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="button-primary">
                  Download EduWallet Now
                </button>
                <button className="button-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="px-10 bg-[#673094] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
              <img className="size-[6.5rem]" src={Logolight}></img>
              </div>
              <p className="text-#673094; leading-relaxed">
                Simplifying education payments and financial management for
                parents and students.
              </p>
            </div>
            <div>
              <h4 className="text-lg text-secondary font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <a
                  href="mailto:contact@eduwallet.com"
                  className="flex items-center text-white hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contact@eduwallet.com</span>
                </a>
                <a
                  href="tel:+12345678901"
                  className="flex items-center text-white hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 234 567 890</span>
                </a>
                <div className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>123 Finance Street, City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg text-secondary font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg text-secondary font-semibold mb-6">Stay Updated</h4>
              <p className="text-white mb-4">
                Get the latest updates and financial tips.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex-shrink">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-lg text-gray-900 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-[#FDC100] px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t  border-gray-800 mt-12 pt-8 text-center text-white">
            <p>
              &copy; {new Date().getFullYear()} Mightyfin EduWallet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
