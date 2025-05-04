
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

type FormValues = {
  email: string;
  comment: string;
};

const ShareDataForm = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      comment: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "¡Dato compartido!",
        description: "Gracias por compartir tu dato con la comunidad RetroAnime.",
      });
      setIsSubmitting(false);
      onOpenChange(false);
      form.reset();
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-background via-background/95 to-amber-900/20 border-amber-400/50 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-pixel text-amber-400 text-center text-xl md:text-2xl">
            COMPARTE TU DATO
          </DialogTitle>
          <DialogDescription className="text-center font-vt323 text-lg">
            ¿Conoces algún dato curioso sobre anime retro? ¡Compártelo con la comunidad!
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-5 w-16 h-16 border-2 border-amber-400/50 rounded-full animate-float opacity-70"></div>
          <div className="absolute -bottom-5 -left-5 w-10 h-10 border-2 border-amber-500/50 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
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
                      <FormLabel className="font-silkscreen text-amber-400">EMAIL</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="TU@EMAIL.COM" 
                          {...field} 
                          type="email" 
                          className="bg-card border-amber-400/30 font-vt323 text-lg"
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
                  name="comment"
                  rules={{ required: "Tu comentario es requerido" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-silkscreen text-amber-400">COMENTARIO</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Escribe aquí tu dato curioso..." 
                          {...field}
                          className="bg-card border-amber-400/30 font-vt323 text-lg"
                          rows={5}
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
                  className="w-full bg-amber-500 hover:bg-amber-600 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] font-silkscreen"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "ENVIANDO..." : "COMPARTIR DATO"}
                </Button>
              </motion.div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDataForm;
