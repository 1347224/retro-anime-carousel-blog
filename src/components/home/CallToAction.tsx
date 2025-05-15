
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NewsletterForm from "@/components/NewsletterForm";

const CallToAction = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-gradient-to-r from-retro-purple/20 via-background to-retro-purple/20">
        <div className="retro-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="pixelated-border p-1 mb-6 inline-block">
              <div className="h-12 w-12 bg-retro-purple rounded-full mx-auto animate-pulse"></div>
            </div>
            <h2 className="font-pixel text-3xl md:text-4xl text-retro-purple mb-4">¡ÚNETE A LA COMUNIDAD RETROANIME!</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 font-vt323">Forma parte de nuestra comunidad de amantes del anime retro donde compartimos recuerdos, análisis y celebramos la época dorada de la animación japonesa.</p>
            <div className="flex justify-center">
              <Button 
                className="retro-button text-lg px-8 py-6 font-silkscreen"
                onClick={() => setIsNewsletterOpen(true)}
              >
                SUSCRÍBETE A LA NEWSLETTER
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Form Dialog */}
      <NewsletterForm open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen} />
    </>
  );
};

export default CallToAction;
