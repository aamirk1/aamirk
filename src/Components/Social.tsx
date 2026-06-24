import { usePortfolio } from "./PortfolioContext";

const Social=()=>{
  const { socialLinks } = usePortfolio();

  const socialIcons = socialLinks.map((socialLinks, index) => {

    return <a key={index} href={`${socialLinks.link}`} target="_blank" rel="noreferrer" className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
      <div data-aos="fade-up-left" data-aos-duration="800"><socialLinks.icon className="-rotate-90" size={30} /></div>  
    </a>
    })


    return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-40 -left-32 rotate-90">
    {socialIcons}
    <hr className="border-[2px] w-40 rounded-full  bg-textColor border-textColor" />
</div>
}

export default Social;