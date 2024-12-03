import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    const currentYear = new Date().getFullYear();
  
    const socialLinks = [
      { icon: GitHubIcon, href: "https://github.com/RANIAjjj", label: "GitHub" },
      { icon: LinkedInIcon, href: "https://www.linkedin.com/in/ranya-mohamed/", label: "LinkedIn" },
      { icon: EmailIcon, href: "mailto:ranyamohamed381@gmail.com", label: "Email" }
    ];
  
  return (
    
    
      <footer className="bg-[#132238] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Rania Mohamed</h3>
              <p className="text-gray-400">
                Crafting digital experiences with passion and precision
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <p><a href="#projects" className="hover:text-white transition-colors">Projects</a></p>
                <p><a href="#about" className="hover:text-white transition-colors">About</a></p>
                <p><a href="#contact" className="hover:text-white transition-colors">Contact</a></p>
                <p><a href="#process" className="hover:text-white transition-colors">Process</a></p>
                <p><a href="#skills" className="hover:text-white transition-colors">Skills</a></p>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <p className="text-gray-400">
                Available for freelance opportunities and collaborations
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© {currentYear} Rania Mohamed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    
  )
}

export default Footer
