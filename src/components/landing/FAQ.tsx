import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to complete a landing page?",
    answer: "Delivery time depends on your chosen package: Basic (7 days), Pro (1 day), and Enterprise (1 day). We work efficiently without compromising quality to meet your deadlines."
  },
  {
    question: "What technology do you use?",
    answer: "We use modern, industry-standard technologies including React, Next.js, and Tailwind CSS to ensure your landing page is fast, responsive, and SEO-optimized."
  },
  {
    question: "Can you help with copywriting?",
    answer: "While we primarily focus on design and development, we can provide guidance on structure and best practices. We recommend having your copy ready, or we can connect you with professional copywriters."
  },
  {
    question: "Do you provide hosting?",
    answer: "We deliver your landing page ready to deploy. We can recommend hosting solutions and provide deployment assistance, ensuring a smooth launch process."
  },
  {
    question: "What about SEO and analytics?",
    answer: "All our packages include basic SEO optimization. Pro and Enterprise packages include advanced SEO setup and analytics integration (Google Analytics, Facebook Pixel, etc.)."
  },
  {
    question: "Can I see examples of your work?",
    answer: "Absolutely! Check out our portfolio section above to see examples of landing pages we've created for various industries and use cases."
  },
  {
    question: "What happens after my page is launched?",
    answer: "After launch, you own the page completely. We provide documentation and support to help you maintain it. We're also available for ongoing maintenance and updates if needed."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our landing page service
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background rounded-lg border-2 px-6 hover:border-accent transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;