"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    question: "How is Fusion different from other design tools?",
    answer:
      "Fusion combines visual design with real-time code generation, allowing teams to prototype, collaborate, and ship faster all in one unified workspace.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Fusion is built to be intuitive. Designers can start visually, while developers can dive into the generated code. Most users get comfortable within a few sessions.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in fusion is automatically saved, enabling to manage changes directly within the platform or sync with external repositories.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes, Fusion supports offline mode. You can continue designing and your work will sync automatically once you're back online.",
  },
  {
    question: "How does Fusion handle collaboration?",
    answer:
      "Fusion enables real-time collaboration with multi-user editing, live comments, and role-based access making it easy for teams to stay aligned at every stage.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="flex justify-center py-24" id="faqs">
      <div className="container">
        <div className="flex justify-center">
          <Tag>FAQs</Tag>
        </div>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium sm:text-6xl">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>
        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6 lg:max-w-2xl">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-neutral-800 p-6"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus flex-shrink-0 text-lime-400 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45",
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={twMerge("mt-6 overflow-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
