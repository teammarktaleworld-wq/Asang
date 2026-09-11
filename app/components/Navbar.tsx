"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Studio", href: "/studio" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled past the transparent threshold
      setIsScrolled(currentScrollY > 20);

      // Hide when scrolling DOWN past 80px, show when scrolling UP
      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down — hide
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up — show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transform: isVisible ? "translateY(0)" : "translateY(-110%)",
        opacity: isVisible ? 1 : 0,
        transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: isScrolled ? "12px 32px" : "18px 32px",
          background: isScrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,1)",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          boxShadow: isScrolled
            ? "0 2px 24px rgba(0,0,0,0.07)"
            : "0 2px 16px rgba(0,0,0,0.06)",
          transition: "padding 0.4s ease, background 0.4s ease, box-shadow 0.4s ease",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/Asanglogo.jpeg"
            alt="Asang Design Studio"
            width={120}
            height={40}
            priority
            style={{
              objectFit: "contain",
              width: "auto",
              height: isScrolled ? "34px" : "40px",
              transition: "height 0.4s ease",
            }}
          />
        </Link>

        {/* Desktop Nav Links — centered absolutely */}
        <ul
          style={{
            display: "none",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "40px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} style={{ position: "relative" }}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: isActive ? "#000" : "#555",
                    textDecoration: "none",
                    paddingBottom: "4px",
                    transition: "color 0.2s",
                  }}
                  className="nav-link"
                >
                  {link.name}
                  {/* Active / hover underline */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "1.5px",
                      background: "#000",
                      transformOrigin: "left",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 0.3s ease",
                    }}
                    className="nav-underline"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="desktop-cta" style={{ display: "none", flexShrink: 0 }}>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "9px 24px",
              fontSize: "11px",
              letterSpacing: "0.14em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#fff",
              background: "#111",
              borderRadius: "100px",
              textDecoration: "none",
              transition: "background 0.25s ease, box-shadow 0.25s ease",
            }}
            className="cta-btn"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "flex-end",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            marginLeft: "auto",
            zIndex: 60,
          }}
          className="mobile-toggle"
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1.5px",
              background: "#111",
              transformOrigin: "center",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isMobileMenuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "16px",
              height: "1.5px",
              background: "#111",
              transition: "opacity 0.3s ease, width 0.3s ease",
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "#111",
              transformOrigin: "center",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isMobileMenuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          overflow: "hidden",
          maxHeight: isMobileMenuOpen ? "400px" : "0px",
          opacity: isMobileMenuOpen ? 1 : 0,
          transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-8px)",
          transition:
            "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, transform 0.35s ease",
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0",
            padding: "8px 24px 24px",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                padding: "14px 0",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: pathname === link.href ? "#000" : "#666",
                textDecoration: "none",
                borderBottom: i < navLinks.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                transition: "color 0.2s",
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "11px 32px",
              fontSize: "11px",
              letterSpacing: "0.14em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#fff",
              background: "#111",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scoped responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: #000 !important; }
        .nav-link:hover .nav-underline { transform: scaleX(1) !important; }
        .cta-btn:hover {
          background: #333 !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18) !important;
        }
      `}</style>
    </header>
  );
}