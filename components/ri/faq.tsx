"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  q: string
  a: string
}

export default function FAQ({ faq }: { faq: FAQItem[] }) {
  return (
    <section className="px-4 md:px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">Tudo o que você precisa saber sobre OLÍBANO</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faq.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-border rounded-2xl px-6 data-[state=open]:bg-secondary/5"
            >
              <AccordionTrigger className="py-6 hover:no-underline text-left">
                <span className="font-medium text-foreground text-base">{item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-0 leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
