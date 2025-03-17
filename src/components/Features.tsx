
import { CreditCard, Calendar, Lightbulb, PieChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Direct School Fees Payment",
      description: "Easily pay tuition, extracurricular, and other education-related expenses directly through EduWallet.",
      icon: CreditCard,
    },
    {
      title: "Recurring Payment Setup",
      description: "Set up automatic recurring payments for school fees to ensure on-time payments every semester.",
      icon: Calendar,
    },
    {
      title: "Financial Literacy Tips",
      description: "Access daily, weekly, and monthly financial literacy tips to manage your child's education expenses.",
      icon: Lightbulb,
    },
    {
      title: "Savings & Budgeting Tools",
      description: "Track school-related expenses, set savings goals, and get personalized budgeting advice.",
      icon: PieChart,
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose EduWallet?</h2>
          <p className="section-subtitle">Designed to make managing educational finances simpler and more effective</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-primary mb-5">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
