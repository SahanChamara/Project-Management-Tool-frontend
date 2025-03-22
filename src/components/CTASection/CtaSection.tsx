import { Button } from "../ui/button";

export default function CtaSection() {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[#4a5568]">
            Join thousands of teams who have transformed their workflow with Smart Task Manager.
          </p>
          <Button size="lg" className="bg-[#4e6af0] hover:bg-[#3f55c0] text-white">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    );
  }