
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NewsletterForm from "@/components/NewsletterForm";
import ShareDataForm from "@/components/ShareDataForm";

const CallToAction = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isShareFormOpen, setIsShareFormOpen] = useState(false);

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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="retro-button text-lg px-8 py-6 font-silkscreen"
                onClick={() => setIsNewsletterOpen(true)}
              >
                SUSCRÍBETE A LA NEWSLETTER
              </Button>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 font-silkscreen hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                onClick={() => setIsShareFormOpen(true)}
              >
                COMPARTIR DATO
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Form Dialog */}
      <NewsletterForm open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen} />
      
      {/* Share Data Form Dialog */}
      <ShareDataForm open={isShareFormOpen} onOpenChange={setIsShareFormOpen} />
    </>
  );
};

export default CallToAction;
