import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";

const Contact = () => {
    const form={
        name:"",
        email:"",
        phone:"",
        message:""
    }
    const [formData, setFormData]=useState(form);
    const handleChange=(id:string, value:string)=>{
        setFormData({...formData,[id]:value});
    }
    const btn = useMatches({
      xs:'xs',
      sm:'sm',
      md:'md',
      lg:'lg'
    })
  return (
    <div className="px-16 mx-20 md-mx:px-8 sm-mx:pc-4 lg-mx:mx-10 md-mx:mx-0 my-10 mb-28 font-mono" id="Contact">
      <h1 className="text-4xl font-bold text-center sm-mx:text-3xl xs-mx:text-2xl mb-10 text-white">
        <span className="text-primaryColor">05. &nbsp;</span>Contact
      </h1>
      <div data-aos="flip-left" data-aos-duration="800" className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor rounded-3xl p-8 sm-mx:p-4">
        <div className=" text-3xl text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">Let's Contact<IconTopologyStar3 className="text-primaryColor h-10 w-10 sm-mx:h-7 sm-mx:w-7" />  </div>
        <FloatingInput id="name" name="Name" value={formData.name} />
        <FloatingInput id="email" name="Email" value={formData.email} />
        <FloatingInput id="phone" name="Phone" value={formData.phone} />
        <FloatingInput id="message" name="Message" value={formData.message} />
        <Button className="!text-bgColor font-bold " fullWidth variant="filled" size={btn} radius="lg" color="#64FFDA" rightSection={<IconArrowRight className="h-10 w-10 sm-mx:h-7 sm-mx:w-7" />}>Send</Button>
      </div>
    </div>
  );
};
export default Contact;
