
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-3">Easy School Payments</h3>
              <p className="text-muted-foreground mb-4">Send tuition payments and other school fees easily and securely.</p>
              <Button variant="outline" size="sm" asChild className="mt-2">
                <Link to="/features">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-3">Financial Planning</h3>
              <p className="text-muted-foreground mb-4">Get guidance on saving for education and managing school expenses.</p>
              <Button variant="outline" size="sm" asChild className="mt-2">
                <Link to="/how-it-works">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
              <p className="text-muted-foreground mb-4">Hear from parents and schools about how EduWallet has helped them.</p>
              <Button variant="outline" size="sm" asChild className="mt-2">
                <Link to="/testimonials">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
