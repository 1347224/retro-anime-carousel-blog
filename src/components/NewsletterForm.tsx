
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

type FormValues = {
  email: string;
  name: string;
};

const NewsletterForm = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "¡Suscripción exitosa!",
        description: `Gracias ${data.name}, pronto recibirás noticias sobre RetroAnime.`,
      });
      setIsSubmitting(false);
      onOpenChange(false);
      form.reset();
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-background via-background/95 to-purple-900/20 border-retro-purple/50 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-pixel text-retro-purple text-center text-xl md:text-2xl">
            ÚNETE A LA COMUNIDAD
          </DialogTitle>
          <DialogDescription className="text-center font-vt323 text-lg">
            Suscríbete para recibir las últimas noticias y novedades del mundo retro anime
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-5 w-16 h-16 border-2 border-retro-pink/50 rounded-full animate-float opacity-70"></div>
          <div className="absolute -bottom-5 -left-5 w-10 h-10 border-2 border-retro-orange/50 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Tu nombre es requerido" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-silkscreen text-retro-purple">NOMBRE</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="TU NOMBRE" 
                          {...field} 
                          className="bg-card border-retro-purple/30 font-vt323 text-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: "El email es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-silkscreen text-retro-purple">EMAIL</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="TU@EMAIL.COM" 
                          {...field} 
                          type="email" 
                          className="bg-card border-retro-purple/30 font-vt323 text-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div 
                className="pt-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Button 
                  type="submit" 
                  className="w-full retro-button font-silkscreen"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "ENVIANDO..." : "SUSCRIBIRSE"}
                </Button>
              </motion.div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterForm;
