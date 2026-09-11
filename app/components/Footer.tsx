'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-[#e5dcc7] pt-24 pb-8 px-8 md:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {/* Top Section: Logo & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="flex flex-col items-start">
            <h2 className="text-5xl md:text-6xl font-serif tracking-widest mb-4">
              AS<span className="font-light">A</span>NG
            </h2>
            <div className="flex flex-col">
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-gray-400">
                Design Studio
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gray-500 mt-1">
                Architecture | Interiors
              </span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col justify-center">
            <h3 className="text-sm tracking-widest uppercase mb-4 text-gray-300">
              Join Our Newsletter
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-md">
              Receive curated insights on architecture, interior styling, and updates on our latest projects.
            </p>
            <form className="flex border-b border-gray-700 pb-2 max-w-md focus-within:border-[#e5dcc7] transition-colors duration-300">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent w-full outline-none text-sm placeholder-gray-600 text-[#e5dcc7]"
                required
              />
              <button 
                type="submit"
                className="text-xs tracking-widest uppercase hover:text-white transition-colors ml-4"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-16 mb-16">
          
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Explore</h4>
            <Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
            <Link href="/projects" className="text-sm hover:text-white transition-colors">Selected Projects</Link>
            <Link href="/studio" className="text-sm hover:text-white transition-colors">The Studio</Link>
            <Link href="/blog" className="text-sm hover:text-white transition-colors">Journal</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Contact</h4>
            <a href="mailto:hello@asangstudio.com" className="text-sm hover:text-white transition-colors">hello@asangstudio.com</a>
            <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-400 mt-2">
              124 Design Avenue,<br />
              Creative District, NY 10001
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Social</h4>
            <a href="#" className="text-sm hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="text-sm hover:text-white transition-colors">LinkedIn</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Legal</h4>
            <Link href="/privacy" className="text-sm hover:text-white transition-colors text-gray-400">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-white transition-colors text-gray-400">Terms of Service</Link>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Asang Design Studio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with precision.</p>
        </div>

      </motion.div>
    </footer>
  );
}