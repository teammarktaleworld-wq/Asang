





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
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Transparent at top of hero
      // White navbar after scrolling
      setIsScrolled(currentScrollY > 20);

      // Always show navbar near the top
      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Hide while scrolling down
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Show while scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation text:
  // White over hero
  // Black after scrolling
  const textColor = isScrolled ? "#111111" : "#ffffff";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,

        zIndex: 100,

        transform: isVisible
          ? "translateY(0)"
          : "translateY(-110%)",

        opacity: isVisible ? 1 : 0,

        transition:
          "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",

        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <nav
        style={{
          position: "relative",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          width: "100%",

          padding: isScrolled
            ? "12px 32px"
            : "18px 38px",

          // Transparent over hero
          background: isScrolled
            ? "rgba(255, 255, 255, 0.94)"
            : "transparent",

          backdropFilter: isScrolled
            ? "blur(18px)"
            : "none",

          WebkitBackdropFilter: isScrolled
            ? "blur(18px)"
            : "none",

          boxShadow: isScrolled
            ? "0 2px 24px rgba(0, 0, 0, 0.08)"
            : "none",

          borderBottom: isScrolled
            ? "1px solid rgba(0, 0, 0, 0.06)"
            : "1px solid transparent",

          transition:
            "padding 0.4s ease, background 0.4s ease, box-shadow 0.4s ease, border 0.4s ease",
        }}
      >
        {/* =====================================================
            LOGO
            ===================================================== */}

        <Link
          href="/"
          className="logo-link"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,

            position: "relative",
            zIndex: 10,
          }}
        >
          <Image
            src="/Asanglogotrans.png"
            alt="Asang Design Studio"
            width={200}
            height={100}
            priority
            className="asang-logo"
            style={{
              objectFit: "contain",
              width: "auto",
              height: isScrolled
                ? "48px"
                : "60px",
              filter: "none",
              transition: "height 0.4s ease",
            }}
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

        <ul
          className="desktop-nav"
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
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li
                key={link.name}
                style={{
                  position: "relative",
                }}
              >
                <Link
                  href={link.href}
                  className="nav-link"
                  style={{
                    position: "relative",

                    display: "inline-block",

                    fontSize: "11px",

                    letterSpacing: "0.18em",

                    fontWeight: 500,

                    textTransform: "uppercase",

                    color: textColor,

                    textDecoration: "none",

                    paddingBottom: "6px",

                    transition:
                      "color 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  {link.name}

                  {/* Underline */}

                  <span
                    className="nav-underline"
                    style={{
                      position: "absolute",

                      bottom: 0,
                      left: 0,

                      width: "100%",
                      height: "1.5px",

                      background: textColor,

                      transformOrigin: "left",

                      transform: isActive
                        ? "scaleX(1)"
                        : "scaleX(0)",

                      transition:
                        "transform 0.3s ease, background 0.3s ease",
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* =====================================================
            DESKTOP CONTACT BUTTON
            ===================================================== */}

        <div
          className="desktop-cta"
          style={{
            display: "none",

            flexShrink: 0,

            position: "relative",
            zIndex: 10,
          }}
        >
          <Link
            href="/contact"
            className="cta-btn"
            style={{
              display: "inline-flex",

              alignItems: "center",
              justifyContent: "center",

              minWidth: "160px",

              padding: "10px 25px",

              fontSize: "11px",

              letterSpacing: "0.14em",

              fontWeight: 600,

              textTransform: "uppercase",

              color: "#ffffff",

              background: isScrolled
                ? "#111111"
                : "rgba(0, 0, 0, 0.22)",

              border: isScrolled
                ? "1px solid #111111"
                : "1px solid rgba(255,255,255,0.55)",

              borderRadius: "100px",

              textDecoration: "none",

              backdropFilter: isScrolled
                ? "none"
                : "blur(8px)",

              WebkitBackdropFilter: isScrolled
                ? "none"
                : "blur(8px)",

              transition: "all 0.3s ease",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* =====================================================
            MOBILE HAMBURGER
            ===================================================== */}

        <button
          onClick={() =>
            setIsMobileMenuOpen(
              !isMobileMenuOpen
            )
          }
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="mobile-toggle"
          style={{
            display: "flex",

            flexDirection: "column",

            gap: "5px",

            alignItems: "flex-end",
            justifyContent: "center",

            background: "none",

            border: "none",

            cursor: "pointer",

            padding: "5px",

            marginLeft: "auto",

            zIndex: 60,
          }}
        >
          {/* First line */}

          <span
            style={{
              display: "block",

              width: "25px",
              height: "1.5px",

              background: textColor,

              transformOrigin: "center",

              transition:
                "transform 0.3s ease, opacity 0.3s ease",

              transform: isMobileMenuOpen
                ? "translateY(6.5px) rotate(45deg)"
                : "none",
            }}
          />

          {/* Second line */}

          <span
            style={{
              display: "block",

              width: "17px",
              height: "1.5px",

              background: textColor,

              transition:
                "opacity 0.3s ease, width 0.3s ease",

              opacity: isMobileMenuOpen
                ? 0
                : 1,
            }}
          />

          {/* Third line */}

          <span
            style={{
              display: "block",

              width: "21px",
              height: "1.5px",

              background: textColor,

              transformOrigin: "center",

              transition:
                "transform 0.3s ease, opacity 0.3s ease",

              transform: isMobileMenuOpen
                ? "translateY(-6.5px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      <div
        style={{
          position: "absolute",

          top: "100%",

          left: 0,
          right: 0,

          background:
            "rgba(255,255,255,0.97)",

          backdropFilter: "blur(20px)",

          WebkitBackdropFilter:
            "blur(20px)",

          borderBottom:
            "1px solid rgba(0,0,0,0.06)",

          overflow: "hidden",

          maxHeight: isMobileMenuOpen
            ? "500px"
            : "0px",

          opacity: isMobileMenuOpen
            ? 1
            : 0,

          transform: isMobileMenuOpen
            ? "translateY(0)"
            : "translateY(-8px)",

          transition:
            "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, transform 0.35s ease",

          pointerEvents:
            isMobileMenuOpen
              ? "auto"
              : "none",
        }}
      >
        <div
          style={{
            display: "flex",

            flexDirection: "column",

            alignItems: "center",

            gap: 0,

            padding:
              "8px 24px 25px",
          }}
        >
          {/* Mobile Links */}

          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                style={{
                  display: "block",

                  width: "100%",

                  textAlign: "center",

                  padding: "15px 0",

                  fontSize: "11px",

                  letterSpacing: "0.2em",

                  fontWeight: 500,

                  textTransform: "uppercase",

                  color: isActive
                    ? "#000000"
                    : "#666666",

                  textDecoration: "none",

                  borderBottom:
                    index <
                      navLinks.length - 1
                      ? "1px solid rgba(0,0,0,0.06)"
                      : "none",

                  transition:
                    "color 0.2s ease",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Contact */}

          <Link
            href="/contact"
            onClick={() =>
              setIsMobileMenuOpen(false)
            }
            style={{
              display: "inline-flex",

              alignItems: "center",
              justifyContent: "center",

              marginTop: "20px",

              padding: "12px 32px",

              fontSize: "11px",

              letterSpacing: "0.14em",

              fontWeight: 600,

              textTransform: "uppercase",

              color: "#ffffff",

              background: "#111111",

              borderRadius: "100px",

              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE STYLES
          ===================================================== */}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }

          .desktop-cta {
            display: block !important;
          }

          .mobile-toggle {
            display: none !important;
          }
        }

        .nav-link:hover {
          opacity: 0.7;
        }

        .nav-link:hover .nav-underline {
          transform: scaleX(1) !important;
        }

        .cta-btn:hover {
          background: ${isScrolled
          ? "#333333"
          : "rgba(0,0,0,0.38)"
        } !important;

          border-color: ${isScrolled
          ? "#333333"
          : "rgba(255,255,255,0.85)"
        } !important;

          transform: translateY(-1px);

          box-shadow: ${isScrolled
          ? "0 4px 16px rgba(0,0,0,0.18)"
          : "0 4px 20px rgba(0,0,0,0.25)"
        } !important;
        }

        .logo-link {
          transition: opacity 0.3s ease;
        }

        .logo-link:hover {
          opacity: 0.85;
        }

        @media (max-width: 767px) {
          nav {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </header>
  );
}