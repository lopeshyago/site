import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// translation hook imported below where needed

const faqs = (t: any) => [
  { question: t('faq_q1'), answer: t('faq_a1') },
  { question: t('faq_q2'), answer: t('faq_a2') },
  { question: t('faq_q3'), answer: t('faq_a3') },
  { question: t('faq_q4'), answer: t('faq_a4') },
  { question: t('faq_q5'), answer: t('faq_a5') },
  { question: t('faq_q6'), answer: t('faq_a6') },
  { question: t('faq_q7'), answer: t('faq_a7') }
];

import { useTranslation } from "@/i18n/i18n";

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t('faq_title') || 'Frequently Asked Questions'}</h2>
          <p className="text-xl text-muted-foreground">{t('faq_sub') || 'Everything you need to know about our landing page service'}</p>
          </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs(t).map((faq, index) => (
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