"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // ============================================================
  // HOME PAGE CHECK
  // ============================================================

  const isHomePage = pathname === "/";

  // ============================================================
  // NAVIGATION LINKS
  // ============================================================

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  // ============================================================
  // SCROLL HANDLER
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
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

  // ============================================================
  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  // ============================================================

  useEffect(() => {
    setIsMobileMenuOpen(false);

    setIsScrolled(window.scrollY > 20);
  }, [pathname]);

  // ============================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // ============================================================

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ============================================================
  // NAVBAR COLORS
  //
  // HOME:
  // Top       = transparent + white text
  // Scrolled  = white background + dark text
  //
  // OTHER PAGES:
  // Always    = white background + dark text
  // ============================================================

  const isTransparentHome =
    isHomePage && !isScrolled && !isMobileMenuOpen;

  const textColor = isTransparentHome ? "#ffffff" : "#111111";

  const navBackground = isTransparentHome
    ? "transparent"
    : "rgba(255, 255, 255, 0.94)";

  const navBackdrop = isTransparentHome
    ? "none"
    : "blur(18px)";

  const navShadow = isTransparentHome
    ? "none"
    : "0 2px 24px rgba(0, 0, 0, 0.08)";

  const navBorder = isTransparentHome
    ? "1px solid transparent"
    : "1px solid rgba(0, 0, 0, 0.06)";

  // ============================================================
  // RENDER
  // ============================================================

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
        aria-label="Main navigation"
        style={{
          position: "relative",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          width: "100%",

          /*
           * REDUCED NAVBAR HEIGHT
           */
          padding: isScrolled
            ? "8px 28px"
            : "10px 32px",

          background: navBackground,

          backdropFilter: navBackdrop,
          WebkitBackdropFilter: navBackdrop,

          boxShadow: navShadow,

          borderBottom: navBorder,

          transition:
            "padding 0.4s ease, background 0.4s ease, box-shadow 0.4s ease, border-bottom 0.4s ease",

          /*
           * REDUCED HEIGHT
           */
          minHeight: isScrolled ? "62px" : "72px",
        }}
      >
        {/* =====================================================
            LOGO
            ===================================================== */}

        <Link
          href="/"
          className="asang-logo-link"
          aria-label="ASANG Design Studio home"
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
              width: "auto",

              /*
               * REDUCED LOGO HEIGHT
               */
              height: isScrolled ? "42px" : "48px",

              objectFit: "contain",

              transition: "height 0.4s ease",

              display: "block",
            }}
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

        <ul
          className="asang-desktop-nav"
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
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <li
                key={link.name}
                style={{
                  position: "relative",
                }}
              >
                <Link
                  href={link.href}
                  className="asang-nav-link"
                  aria-current={
                    isActive ? "page" : undefined
                  }
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

                  <span
                    aria-hidden="true"
                    className="asang-nav-underline"
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
          className="asang-desktop-cta"
          style={{
            display: "none",
            flexShrink: 0,

            position: "relative",
            zIndex: 10,
          }}
        >
          <Link
            href="/contact"
            className="asang-cta-btn"
            style={{
              display: "inline-flex",

              alignItems: "center",
              justifyContent: "center",

              minWidth: "160px",

              padding: "9px 24px",

              fontSize: "11px",
              letterSpacing: "0.14em",
              fontWeight: 600,

              textTransform: "uppercase",

              color: "#ffffff",

              background: isTransparentHome
                ? "rgba(0, 0, 0, 0.22)"
                : "#111111",

              border: isTransparentHome
                ? "1px solid rgba(255,255,255,0.55)"
                : "1px solid #111111",

              borderRadius: "100px",

              textDecoration: "none",

              backdropFilter: isTransparentHome
                ? "blur(8px)"
                : "none",

              WebkitBackdropFilter:
                isTransparentHome
                  ? "blur(8px)"
                  : "none",

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
          type="button"
          onClick={() =>
            setIsMobileMenuOpen(
              (previous) => !previous
            )
          }
          aria-label={
            isMobileMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={isMobileMenuOpen}
          className="asang-mobile-toggle"
          style={{
            display: "flex",

            flexDirection: "column",
            gap: "5px",

            alignItems: "flex-end",
            justifyContent: "center",

            background: "none",
            border: "none",

            cursor: "pointer",

            padding: "8px",
            marginLeft: "auto",

            zIndex: 60,

            WebkitTapHighlightColor:
              "transparent",
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
        className="asang-mobile-menu"
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
            ? "600px"
            : "0px",

          opacity: isMobileMenuOpen ? 1 : 0,

          transform: isMobileMenuOpen
            ? "translateY(0)"
            : "translateY(-8px)",

          transition:
            "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, transform 0.35s ease",

          pointerEvents: isMobileMenuOpen
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

            padding: "8px 20px 28px",

            width: "100%",
          }}
        >
          {/* =================================================
              MOBILE LINKS
              ================================================= */}

          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(
                `${link.href}/`
              );

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                aria-current={
                  isActive ? "page" : undefined
                }
                className="asang-mobile-nav-link"
                style={{
                  display: "flex",

                  alignItems: "center",
                  justifyContent:
                    "space-between",

                  width: "100%",
                  maxWidth: "520px",

                  textAlign: "center",

                  padding: "17px 4px",

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
                    "color 0.2s ease, padding 0.2s ease",

                  WebkitTapHighlightColor:
                    "transparent",
                }}
              >
                <span>{link.name}</span>

                <span
                  aria-hidden="true"
                  style={{
                    width: "5px",
                    height: "5px",

                    borderRadius: "50%",

                    background: isActive
                      ? "#111111"
                      : "transparent",

                    border: isActive
                      ? "none"
                      : "1px solid rgba(0,0,0,0.2)",
                  }}
                />
              </Link>
            );
          })}

          {/* =================================================
              MOBILE CONTACT
              ================================================= */}

          <Link
            href="/contact"
            onClick={() =>
              setIsMobileMenuOpen(false)
            }
            className="asang-mobile-contact"
            style={{
              display: "inline-flex",

              alignItems: "center",
              justifyContent: "center",

              width: "100%",
              maxWidth: "520px",

              marginTop: "20px",

              padding: "14px 30px",

              fontSize: "11px",
              letterSpacing: "0.14em",
              fontWeight: 600,

              textTransform: "uppercase",

              color: "#ffffff",

              background: "#111111",

              borderRadius: "100px",

              textDecoration: "none",

              transition:
                "transform 0.2s ease, background 0.2s ease",

              WebkitTapHighlightColor:
                "transparent",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE CSS
          ===================================================== */}

      <style>{`
        /* ==================================================
           DESKTOP
           ================================================== */

        @media (min-width: 768px) {
          .asang-desktop-nav {
            display: flex !important;
          }

          .asang-desktop-cta {
            display: block !important;
          }

          .asang-mobile-toggle {
            display: none !important;
          }

          .asang-mobile-menu {
            display: none !important;
          }
        }

        /* ==================================================
           DESKTOP HOVER
           ================================================== */

        .asang-nav-link:hover {
          opacity: 0.7;
        }

        .asang-nav-link:hover
          .asang-nav-underline {
          transform: scaleX(1) !important;
        }

        .asang-cta-btn:hover {
          transform: translateY(-1px);
        }

        /* ==================================================
           LOGO
           ================================================== */

        .asang-logo-link {
          transition: opacity 0.3s ease;
        }

        .asang-logo-link:hover {
          opacity: 0.85;
        }

        /* ==================================================
           MOBILE
           ================================================== */

        .asang-mobile-nav-link:hover {
          color: #111111 !important;
        }

        .asang-mobile-nav-link:active {
          background: rgba(0,0,0,0.025);
        }

        .asang-mobile-contact:hover {
          background: #222222 !important;
          transform: translateY(-1px);
        }

        .asang-mobile-contact:active {
          transform: scale(0.98);
        }

        /* ==================================================
           TABLET / MOBILE LOGO
           ================================================== */

        @media (max-width: 767px) {
          .asang-logo {
            height: 46px !important;
            width: auto !important;
            max-width: 145px;
          }
        }

        /* ==================================================
           SMALL MOBILE
           ================================================== */

        @media (max-width: 380px) {
          .asang-logo {
            height: 43px !important;
            width: auto !important;
            max-width: 135px;
          }

          .asang-mobile-menu {
            max-height: ${
              isMobileMenuOpen
                ? "650px"
                : "0px"
            };
          }
        }

        /* ==================================================
           SAFE AREA
           ================================================== */

        @supports (
          padding: env(safe-area-inset-top)
        ) {
          @media (max-width: 767px) {
            .asang-logo {
              margin-top: max(
                0px,
                env(safe-area-inset-top)
              );
            }
          }
        }

        /* ==================================================
           REDUCED MOTION
           ================================================== */

        @media (prefers-reduced-motion: reduce) {
          .asang-nav-link,
          .asang-cta-btn,
          .asang-mobile-nav-link,
          .asang-mobile-contact,
          .asang-logo-link,
          .asang-mobile-menu {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}