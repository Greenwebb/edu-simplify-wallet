
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)'
      }}
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-5 animate-fade-in">
              Simple School Payments
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              School payments, <span className="text-primary">simplified</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in stagger-1">
              Pay tuition effortlessly, track expenses, and receive financial guidance all in one secure app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start animate-fade-in stagger-3">
              <Button size="lg" className="rounded-full py-6 text-base">
                <Download size={18} className="mr-2" />
                Download EduWallet
              </Button>
              <Button size="lg" variant="outline" className="rounded-full py-6 text-base" asChild>
                <Link to="/features">
                  Learn More
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8 animate-fade-in stagger-2">
              Powered by MightyFin's secure digital wallet technology
            </p>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="relative animate-float">
              <div className="relative p-6 bg-white rounded-[32px] shadow-lg border border-gray-100">
                <div className="w-full h-[500px] rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 shadow-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10" />
                  
                  <div className="absolute left-6 right-6 top-8">
                    <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl mb-4 shadow-sm">
                      <h3 className="text-lg font-semibold mb-2">School Fee Payment</h3>
                      <p className="text-sm text-gray-600">
                        Next payment: June 15, 2023
                      </p>
                      <div className="w-full h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
                        <div className="h-full w-3/4 bg-blue-500 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="glass-effect p-5 rounded-2xl mb-4">
                      <h3 className="text-lg font-semibold mb-3">Recent Transactions</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Westview High School</p>
                            <p className="text-xs text-gray-500">May 10, 2023</p>
                          </div>
                          <p className="text-sm font-medium">$750.00</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">School Books</p>
                            <p className="text-xs text-gray-500">May 5, 2023</p>
                          </div>
                          <p className="text-sm font-medium">$125.50</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-sm">
                      <h3 className="text-lg font-semibold mb-2">Financial Tips</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Set up a dedicated education savings account to maximize interest.
                      </p>
                      <div className="flex justify-end">
                        <button className="text-xs font-medium text-primary">
                          View All Tips
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
