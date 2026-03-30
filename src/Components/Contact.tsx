"use client";
import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconSend, IconSparkles } from "@tabler/icons-react";
import { motion } from "framer-motion";

const Contact = () => {
    const form = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formData, setFormData] = useState(form);
    
    const btnSize = useMatches({
      xs: 'md',
      sm: 'lg',
    });

    return (
      <section className="px-4 sm:px-8 lg:px-16 my-24 max-w-4xl mx-auto" id="Contact">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            <span className="text-primaryColor font-mono text-xl mr-2">05.</span>
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to new opportunities.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="professional-card glass p-8 sm:p-12 relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primaryColor/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primaryColor/10 transition-colors" />
          
          <div className="relative z-10 space-y-10">
            <div className="flex items-center gap-3 mb-4">
               <h3 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                 Let's Collaborate
               </h3>
               <motion.div
                 animate={{ rotate: [0, 10, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 2 }}
               >
                 <IconSparkles className="text-primaryColor h-10 w-10 sm-h-8 sm-w-8" />
               </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FloatingInput id="name" name="Full Name" value={formData.name} />
              <FloatingInput id="email" name="Email Address" value={formData.email} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FloatingInput id="phone" name="Phone Number" value={formData.phone} />
              <FloatingInput id="message" name="Message" value={formData.message} />
            </div>

            <Button 
              className="!bg-primaryColor !text-bgColor hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 sm:h-16 text-lg font-black tracking-widest uppercase rounded-2xl shadow-xl hover:shadow-primaryColor/20 group overflow-hidden" 
              fullWidth 
              variant="filled" 
              size={btnSize} 
              rightSection={
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <IconSend className="h-6 w-6" />
                </motion.div>
              }
            >
              Send Message
            </Button>
          </div>
        </motion.div>
      </section>
    );
};

export default Contact;
