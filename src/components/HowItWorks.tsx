
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Sign up with MightyFin and link your bank or mobile wallet."
    },
    {
      number: "02",
      title: "Link School Fees",
      description: "Add your child's school and input their tuition and other related fees."
    },
    {
      number: "03",
      title: "Make Payments",
      description: "Make secure payments directly from your EduWallet app."
    },
    {
      number: "04",
      title: "Track & Save",
      description: "Track your expenses, set savings goals, and receive budgeting tips."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How EduWallet Works</h2>
          <p className="section-subtitle">Get started in just a few simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[40%] h-[2px] bg-gray-200">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
