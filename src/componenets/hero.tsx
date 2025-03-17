import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-36 pb-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 style={{fontWeight:900}} className="text-6xl md:text-5xl text-primary font-extrabold leading-tight mb-6">
            Smart education <br />payments made
            <span className="gradient-text block">easy</span>
          </h1>
          <p className="text-[16px] text-primary mb-8 leading-relaxed">
            Effortlessly manage school fees, save for education, and get personalized financial insights—all in one secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="button-primary flex items-center justify-center">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="button-secondary border-[#FDC100] flex items-center justify-center">
              See How It Works
            </button>
          </div>
          <div className="mt-8 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              Bank-level security
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-purple-500 mr-2" />
              Used by 10k+ parents
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
        <div className="hidden lg:block relative">
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="relative animate-float">
          <div className="relative p-6 bg-white rounded-[32px] shadow-sm border border-gray-100">
            <div className="w-full h-[500px] rounded-2xl bg-gradient-to-r from-[#673094] to-[#8004e6] shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10" />
              
              <div className="absolute left-6 right-6 top-8">
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl mb-4 shadow-sm">
                  <h3 className="text-lg text-primary font-bold mb-2">School Fee Payment</h3>
                  <p className="text-sm text-primary">
                    Next payment: June 15, 2023
                  </p>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full w-3/4 bg-purple-500 rounded-full" />
                  </div>
                </div>
                
                <div className="glass-effect p-5 rounded-2xl mb-4">
                  <h3 className="text-lg text-primary font-bold mb-3">Recent Transactions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Westview High School</p>
                        <p className="text-xs text-gray-500">May 10, 2023</p>
                      </div>
                      <p className="text-sm font-medium">ZMW750.00</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">School Books</p>
                        <p className="text-xs text-gray-500">May 5, 2023</p>
                      </div>
                      <p className="text-sm font-medium">ZMW125.50</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-sm">
                  <h3 className="text-lg text-primary font-bold mb-2">Financial Tips</h3>
                  <p className="text-sm text-primary mb-3">
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
    </div>
  </section>
  );
};

export default Hero;
