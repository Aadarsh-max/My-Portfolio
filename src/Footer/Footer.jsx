import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Twitter,
  Facebook,
  Youtube,
  Heart,
  Coffee,
  Code,
} from "lucide-react";

const Footer = () => {
  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/Aadarsh-max",
      color: "hover:text-gray-300",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/aadarsh-shrivastav-686722325",
      color: "hover:text-blue-500",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      link: "https://instagram.com/hii_aadarshhh",
      color: "hover:text-pink-400",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      link: "https://wa.me/7620457148",
      color: "hover:text-green-500",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "X",
      link: "https://x.com/aaddyshrivastav",
      color: "hover:text-cyan-500",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      link: "https://www.facebook.com/share/196MZezWQY",
      color: "hover:text-blue-600",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: "YouTube",
      link: "https://www.youtube.com/@SkillCoder-By_Aadarsh",
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>

      {/* Decorative Floating Glows */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -top-10 right-1/3 w-40 h-40 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute -bottom-10 -right-20 w-52 h-52 bg-indigo-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/2 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Brand Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Aadarsh Shrivastav
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-2"></div>
            <p className="text-gray-700 text-lg max-w-md mx-auto mt-4">
              Full Stack Developer • Creative Problem Solver • Tech Enthusiast
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 w-full max-w-2xl">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center p-4 rounded-2xl bg-white/70 border border-blue-200 transition-all duration-300 hover:scale-105 hover:bg-blue-100 ${social.color}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <span className="group-hover:scale-110 transition-transform duration-300 text-gray-800">
                    {social.icon}
                  </span>
                  <span className="text-xs text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                    {social.label}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4 text-gray-700">
            <div className="flex items-center space-x-2 text-sm">
              <span>© {new Date().getFullYear()}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <Code className="w-4 h-4 text-blue-600" />
              <span>&</span>
              <Coffee className="w-4 h-4 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
