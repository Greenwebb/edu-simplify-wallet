
import { Download, AppleIcon, Chrome } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="download" className="section-padding cta-gradient text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-white mb-6">Ready to Simplify Your School Fee Payments?</h2>
          <p className="text-white/90 text-lg mb-10">
            Download EduWallet today and experience a better way to manage your educational finances.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="#" className="bg-white text-primary px-8 py-4 rounded-full font-medium flex items-center justify-center hover:shadow-lg transition-all">
              <AppleIcon size={20} className="mr-2" />
              App Store
            </a>
            <a href="#" className="bg-white text-primary px-8 py-4 rounded-full font-medium flex items-center justify-center hover:shadow-lg transition-all">
              <Chrome size={20} className="mr-2" />
              Google Play
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg">
              <p className="text-sm font-medium">50K+</p>
              <p className="text-xs opacity-80">Active Users</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg">
              <p className="text-sm font-medium">4.8/5</p>
              <p className="text-xs opacity-80">App Rating</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg">
              <p className="text-sm font-medium">200+</p>
              <p className="text-xs opacity-80">Schools Connected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
