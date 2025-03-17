
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "EduWallet made it so much easier to pay school fees on time. The financial tips have been a game-changer!",
      name: "Amina M.",
      role: "Parent",
      rating: 5
    },
    {
      quote: "As a parent, EduWallet helped me keep track of school expenses. I'm now saving smarter for my child's future.",
      name: "David K.",
      role: "Parent",
      rating: 5
    },
    {
      quote: "The recurring payment feature ensures I never miss a deadline. The app is intuitive and easy to navigate.",
      name: "Sarah J.",
      role: "Parent of two",
      rating: 4
    },
    {
      quote: "I love how EduWallet integrates with my existing MightyFin account. Makes managing school finances much simpler.",
      name: "Michael T.",
      role: "Parent",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Parents & Students Are Saying</h2>
          <p className="section-subtitle">Join thousands of satisfied users who've simplified their educational finances</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center text-gray-500 font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
