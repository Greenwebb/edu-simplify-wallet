
import Header from '@/components/Header';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <div className="container-custom py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">EduWallet Features</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Discover all the tools designed to make education payments easier and more efficient.
          </p>
        </div>
        <Features />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
