
import { motion } from "framer-motion";
import NewsletterForm from "../NewsletterForm";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-12 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90"></div>
        <img 
          src="https://images5.alphacoders.com/857/thumb-1920-857564.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="retro-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="font-pixel text-3xl md:text-4xl retro-gradient-text mb-4">ÚNETE A LA COMUNIDAD RETROANIME</h2>
          <p className="text-lg font-vt323">
            Comparte tu nostalgia y pasión por los clásicos del anime. Recibe noticias, curiosidades y recomendaciones directamente en tu correo.
          </p>
        </motion.div>
        
        <div className="max-w-md mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
