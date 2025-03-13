const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">



    <div role="listitem" className="p-3 flex justify-center" >
      <a href="/" aria-current="page" className="text-white hover:text-sky-500">
        en
       </a>
    </div>
        
    <a href="http://www.linkedin.com/company/codelancing-technologies/" target="_blank" rel="noopener noreferrer">
        <div className="social-icon hover:bg-sky-400">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
          </a>
        
          <a href="mailto:codelancingtechnologies@gmail.com" target="_blank">
           <div className="social-icon w-full h-full hover:bg-sky-400">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
           </div>
          </a>
          <a href="https://www.instagram.com/codelancing_technologies_/" target="_blank" rel="noopener noreferrer">
        <div className="social-icon hover:bg-sky-400">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
        </a>

        <a href="https://wa.me/+919698904457?text=Hello%20%F0%9F%96%90%20Codelancing%20Technologies%2C%20Looking%20for%20a%20website%20development%2C%20can%20you%20please%20share%20the%20quotation." target="_blank" rel="noopener noreferrer">
        <div className="social-icon hover:bg-sky-400">
          <img src="/public/assets/whatsapp.svg" alt="phone" className="w-1/2 h-1/2" />
        </div>
        </a>
        


      </div>

      <p className="text-white-500">© Codelancing Technologies. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
