
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <div className="container-custom py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">How EduWallet Works</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Setting up and using EduWallet is simple, secure, and designed with your needs in mind.
          </p>
        </div>
        <HowItWorks />
        <Benefits />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
