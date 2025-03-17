
import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Convenience",
      description: "Simplify school fee payments in just a few taps, directly from your phone."
    },
    {
      title: "Secure Payments",
      description: "MightyFin's industry-leading security ensures your financial data is safe."
    },
    {
      title: "Personalized Financial Insights",
      description: "Get expert tips on saving and budgeting for school-related costs."
    },
    {
      title: "Integrated with MightyFin",
      description: "Use EduWallet within the MightyFin ecosystem for a seamless financial experience."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why EduWallet is Right for You</h2>
          <p className="section-subtitle">Experience the difference with our specialized education finance app</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ready for a better way to manage school finances?</h3>
              <p className="mb-6 opacity-90">Join thousands of parents who are simplifying their educational payment experience.</p>
              <a href="#download" className="inline-block bg-white text-primary px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all">
                Get Started Today
              </a>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-60 h-60 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
