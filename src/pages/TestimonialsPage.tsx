
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <div className="container-custom py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">User Stories</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Read about how EduWallet has simplified education payments for parents and schools across the country.
          </p>
        </div>
        <Testimonials />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
