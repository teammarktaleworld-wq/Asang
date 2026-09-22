"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";

import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

/* ─────────────────────────────────────────────────────────────────────────────
   ASANG BRAND FONTS
───────────────────────────────────────────────────────────────────────────── */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

/* ─────────────────────────────────────────────────────────────────────────────
   Studio info — pulled from env, with fallbacks
───────────────────────────────────────────────────────────────────────────── */

const SITE = {
  name:
    process.env.NEXT_PUBLIC_SITE_NAME ||
    "ASANG Design Studio",
};

const CONTACT = {
  person:
    process.env.NEXT_PUBLIC_CONTACT_PERSON ||
    "Suchit Sinha",

  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE ||
    "919205040314",

  whatsappDisplay:
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE_DISPLAY ||
    "9205 040 314",

  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    "suchit@asang.in",

  addressLine1:
    process.env.NEXT_PUBLIC_OFFICE_ADDRESS_LINE1 ||
    "#208, Vriksh Building, A-103, Sector 63",

  addressLine2:
    process.env.NEXT_PUBLIC_OFFICE_ADDRESS_LINE2 ||
    "NOIDA - 201301, Uttar Pradesh, India",

  addressFull:
    process.env.NEXT_PUBLIC_OFFICE_ADDRESS ||
    "#208, Vriksh Building, A-103, Sector 63, NOIDA - 201301, Uttar Pradesh, India",
};

/* ─────────────────────────────────────────────────────────────────────────────
   Maps
───────────────────────────────────────────────────────────────────────────── */

const MAPS_URL =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT.addressFull
  )}`;

/* ─────────────────────────────────────────────────────────────────────────────
   WhatsApp
───────────────────────────────────────────────────────────────────────────── */

const WHATSAPP_URL =
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hi ${CONTACT.person}, I found ${SITE.name} online and would like to discuss a project.`
  )}`;

/* ─────────────────────────────────────────────────────────────────────────────
   Social links
───────────────────────────────────────────────────────────────────────────── */

const SOCIALS = [
  {
    name: "Instagram",
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    icon: "instagram",
  },

  {
    name: "Facebook",
    url: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    icon: "facebook",
  },

  {
    name: "LinkedIn",
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    icon: "linkedin",
  },

  {
    name: "YouTube",
    url: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    icon: "youtube",
  },

  {
    name: "X",
    url: process.env.NEXT_PUBLIC_X_URL,
    icon: "x",
  },

  {
    name: "Pinterest",
    url: process.env.NEXT_PUBLIC_PINTEREST_URL,
    icon: "pinterest",
  },
].filter(
  (
    social
  ): social is {
    name: string;
    url: string;
    icon: string;
  } => Boolean(social.url)
);

/* ─────────────────────────────────────────────────────────────────────────────
   Icons
───────────────────────────────────────────────────────────────────────────── */

function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
          />

          <path d="m4 7 8 6 8-6" />
        </svg>
      );

    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />

          <circle
            cx="12"
            cy="9"
            r="2.5"
          />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...common} strokeWidth={1.4}>
          <path d="M7 17.5 4.5 20l.6-3.4A8 8 0 1 1 8.6 19L7 17.5Z" />

          <path d="M9 9.3c0 3 2.7 5.7 5.7 5.7 1-1 1-2 .7-2.4l-1.6-.8-1 1a5 5 0 0 1-2-2l1-1-.8-1.6C10.9 8 9.9 8 9 9Z" />
        </svg>
      );

    case "copy":
      return (
        <svg {...common}>
          <rect
            x="9"
            y="9"
            width="12"
            height="12"
            rx="2"
          />

          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path d="m4 12 6 6L20 6" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
          />

          <circle
            cx="17.2"
            cy="6.8"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8.5h2.5V5H14a4 4 0 0 0-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.4.1-.5.5-.5Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
          />

          <path d="M7.5 10v6.5M7.5 7.2v.1M11.5 16.5V13a2 2 0 0 1 4 0v3.5M11.5 10v6.5" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...common}>
          <rect
            x="2.5"
            y="6"
            width="19"
            height="12"
            rx="4"
          />

          <path
            d="m10.5 9.5 5 2.5-5 2.5Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "x":
      return (
        <svg {...common}>
          <path d="M5 5l14 14M19 5 5 19" />
        </svg>
      );

    case "pinterest":
      return (
        <svg {...common}>
          <circle
            cx="12"
            cy="12"
            r="9"
          />

          <path d="M10 18c1-3 1.3-5 2-8a2 2 0 1 1 3.6 1.4c-.4 1.6-1.6 3.6-3.6 3.6-1 0-1.5-.5-1.8-1" />
        </svg>
      );

    default:
      return null;
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: "110%",
  },

  visible: {
    y: "0%",

    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────────────────────── */

type FormData = {
  name: string;
  email: string;
  vertical: string;
  message: string;
};

type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

/* ─────────────────────────────────────────────────────────────────────────────
   Copy button
───────────────────────────────────────────────────────────────────────────── */

function CopyButton({
  value,
}: {
  value: string;
}) {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy(
    e: React.MouseEvent
  ) {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(
        value
      );

      setCopied(true);

      setTimeout(
        () => setCopied(false),
        1600
      );
    } catch {
      // Clipboard unavailable
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="
        relative
        ml-2
        inline-flex
        h-6
        w-6
        shrink-0
        items-center
        justify-center
        rounded-full
        text-[#8F9A9B]
        transition-colors
        hover:text-[#231F20]
      "
    >
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.span
          key={
            copied
              ? "check"
              : "copy"
          }
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.6,
          }}
          transition={{
            duration: 0.15,
          }}
          className="flex"
        >
          <Icon
            name={
              copied
                ? "check"
                : "copy"
            }
            className="h-3.5 w-3.5"
          />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Floating field
───────────────────────────────────────────────────────────────────────────── */

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  disabled,
  textarea = false,
  rows = 4,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;

  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;

  disabled?: boolean;
  textarea?: boolean;
  rows?: number;
}) {
  const sharedClasses = `
    peer
    w-full
    border-b border-[#231F20]/20
    bg-transparent
    pb-3
    pt-6
    font-[family-name:var(--font-montserrat)]
    text-sm
    text-[#231F20]
    outline-none
    transition-colors
    focus:border-[#231F20]
    disabled:opacity-50
  `;

  const labelClasses = `
    pointer-events-none
    absolute
    left-0
    top-6
    font-[family-name:var(--font-montserrat)]
    text-sm
    text-[#8F9A9B]
    transition-all
    duration-300

    peer-focus:top-0
    peer-focus:text-xs
    peer-focus:tracking-[0.2em]
    peer-focus:uppercase
    peer-focus:text-[#8F9A9B]

    peer-[:not(:placeholder-shown)]:top-0
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:tracking-[0.2em]
    peer-[:not(:placeholder-shown)]:uppercase
  `;

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder=" "
          rows={rows}
          required
          disabled={disabled}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          required
          disabled={disabled}
          className={sharedClasses}
        />
      )}

      <label
        htmlFor={id}
        className={labelClasses}
      >
        {label}
      </label>

      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          origin-left
          scale-x-0
          bg-[#231F20]
          transition-transform
          duration-500
          peer-focus:scale-x-100
        "
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────────────── */

export default function ContactUs() {
  const [
    formData,
    setFormData,
  ] = useState<FormData>({
    name: "",
    email: "",
    vertical: "",
    message: "",
  });

  const [
    status,
    setStatus,
  ] = useState<Status>("idle");

  const [
    statusMessage,
    setStatusMessage,
  ] = useState("");

  const isLoading =
    status === "loading";

  /* ─────────────────────────────────────────────────────────────────────────
     Form change
  ───────────────────────────────────────────────────────────────────────── */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const {
      id,
      value,
    } = e.target;

    setFormData((previous) => ({
      ...previous,
      [id]: value,
    }));
  };

  /* ─────────────────────────────────────────────────────────────────────────
     Form submit
  ───────────────────────────────────────────────────────────────────────── */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            formData
          ),
        }
      );

      const data =
        await response.json();

      /* ─────────────────────────────────
         API ERROR
      ───────────────────────────────── */

      if (!response.ok) {
        setStatus("error");

        setStatusMessage(
          data.message ||
            "Unable to submit right now. Please try again."
        );

        return;
      }

      /* ─────────────────────────────────
         SUCCESS
      ───────────────────────────────── */

      setStatus("success");

      setStatusMessage(
        data.message ||
          "Thank you. Your inquiry has been submitted successfully."
      );

      setFormData({
        name: "",
        email: "",
        vertical: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "CONTACT FORM ERROR:",
        error
      );

      setStatus("error");

      setStatusMessage(
        "Unable to submit right now. Please try again, or reach us directly."
      );
    }
  };

  /* ─────────────────────────────────────────────────────────────────────────
     Render
  ───────────────────────────────────────────────────────────────────────── */

  return (
    <main
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        relative
        min-h-screen
        overflow-hidden
        bg-[#F7F4EE]
        px-6
        py-24
        text-[#231F20]
        md:px-24
        lg:py-32
      `}
    >

      {/* ── Decorative background ── */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-[#8F9A9B]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#DCC9A8]/10
          blur-3xl
        "
      />

      <motion.div
        className="relative mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* ── Header ── */}

        <motion.div
          variants={itemVariants}
          className="mb-20"
        >
          <div className="mb-6 flex items-center gap-4">

            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              style={{
                transformOrigin: "left",
              }}
              className="h-px w-10 bg-[#8F9A9B]"
            />

            <span
              className="
                font-[family-name:var(--font-montserrat)]
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#8F9A9B]
              "
            >
              Start a Conversation
            </span>

          </div>

          <h1
            className="
              mb-6
              font-[family-name:var(--font-cormorant)]
              text-6xl
              font-medium
              leading-[0.9]
              tracking-[-0.02em]
              md:text-7xl
              lg:text-8xl
            "
          >
            <span className="block overflow-hidden">

              <motion.span
                variants={wordVariants}
                className="block"
              >
                Get in Touch
              </motion.span>

            </span>
          </h1>

          <p
            className="
              max-w-2xl
              font-[family-name:var(--font-montserrat)]
              text-sm
              font-medium
              leading-[2]
              text-[#514d45]
              md:text-base
            "
          >
            Whether you are looking to build a
            commercial space, renovate a
            residential property, or design an
            industrial facility, our team is here
            to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">

          {/* ─────────────────────────────────
              FORM
          ───────────────────────────────── */}

          <motion.div variants={itemVariants}>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-10"
              noValidate
            >

              {/* Name + Email */}

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                <FloatingField
                  id="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                />

                <FloatingField
                  id="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />

              </div>

              {/* Project Type */}

              <div className="flex flex-col gap-3">

                <label
                  htmlFor="vertical"
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#8F9A9B]
                  "
                >
                  Project Type
                </label>

                <select
                  id="vertical"
                  value={formData.vertical}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="
                    border-b
                    border-[#231F20]/20
                    bg-transparent
                    pb-3
                    font-[family-name:var(--font-montserrat)]
                    text-sm
                    text-[#231F20]
                    outline-none
                    transition-colors
                    focus:border-[#231F20]
                    disabled:opacity-50
                  "
                >
                  <option
                    value=""
                    disabled
                  >
                    Select a vertical...
                  </option>

                  <option value="commercial">
                    Commercial
                  </option>

                  <option value="residential">
                    Residential
                  </option>

                  <option value="industrial">
                    Industrial
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

              </div>

              {/* Message */}

              <FloatingField
                id="message"
                label="Message Details"
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                textarea
              />

              {/* Feedback */}

              <AnimatePresence
                mode="wait"
              >

                {status ===
                  "success" && (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    role="status"
                    className="
                      border
                      border-green-200/50
                      bg-[#e8f0e5]
                      px-4
                      py-3
                      font-[family-name:var(--font-montserrat)]
                      text-sm
                      font-medium
                      text-[#3b5336]
                    "
                  >
                    {statusMessage}
                  </motion.div>
                )}

                {status ===
                  "error" && (
                  <motion.div
                    key="error"
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    role="alert"
                    className="
                      border
                      border-red-200/50
                      bg-[#f4e6e6]
                      px-4
                      py-3
                      font-[family-name:var(--font-montserrat)]
                      text-sm
                      font-medium
                      text-[#7a3b3b]
                    "
                  >
                    {statusMessage}
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Submit */}

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{
                  scale:
                    isLoading
                      ? 1
                      : 1.03,
                }}
                whileTap={{
                  scale:
                    isLoading
                      ? 1
                      : 0.97,
                }}
                className="
                  mt-4
                  self-start
                  rounded-full
                  border
                  border-[#231F20]
                  bg-[#231F20]
                  px-10
                  py-4
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#F7F4EE]
                  transition-colors
                  duration-500
                  hover:border-[#DCC9A8]
                  hover:bg-[#DCC9A8]
                  hover:text-[#231F20]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <span className="inline-flex items-center gap-3">

                  {isLoading && (
                    <motion.span
                      className="
                        h-3
                        w-3
                        rounded-full
                        border-2
                        border-current
                        border-t-transparent
                      "
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.7,
                        ease: "linear",
                      }}
                    />
                  )}

                  {isLoading
                    ? "Sending..."
                    : "Send Inquiry"}

                </span>
              </motion.button>

            </form>

          </motion.div>

          {/* ─────────────────────────────────
              CONTACT DETAILS
          ───────────────────────────────── */}

          <motion.div
            variants={itemVariants}
            className="
              flex
              flex-col
              gap-12
              border-[#231F20]/15
              md:border-l
              md:pl-12
              lg:pl-24
            "
          >

            {/* Studio address */}

            <div>

              <h3
                className="
                  mb-4
                  flex
                  items-center
                  gap-2
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8F9A9B]
                "
              >
                <Icon
                  name="pin"
                  className="h-3.5 w-3.5"
                />

                Main Studio
              </h3>

              <address
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-2xl
                  not-italic
                  leading-relaxed
                  text-[#231F20]
                "
              >
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </address>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-3
                  inline-flex
                  items-center
                  gap-2
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#8F9A9B]
                  transition-colors
                  hover:text-[#231F20]
                "
              >
                Get Directions

                <svg
                  className="
                    h-3
                    w-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m13 6 6 6-6 6"
                  />
                </svg>

              </a>

            </div>

            {/* Direct contact */}

            <div>

              <h3
                className="
                  mb-4
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8F9A9B]
                "
              >
                Contact — {CONTACT.person}
              </h3>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  font-[family-name:var(--font-cormorant)]
                  text-2xl
                  text-[#231F20]
                "
              >

                {/* Email */}

                <div className="flex items-center">

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      transition-colors
                      hover:text-[#8F9A9B]
                    "
                  >
                    <Icon
                      name="mail"
                      className="
                        h-4
                        w-4
                        shrink-0
                        text-[#8F9A9B]
                      "
                    />

                    {CONTACT.email}
                  </a>

                  <CopyButton
                    value={CONTACT.email}
                  />

                </div>

                {/* WhatsApp */}

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    transition-colors
                    hover:text-[#8F9A9B]
                  "
                >
                  <Icon
                    name="whatsapp"
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-[#25D366]
                    "
                  />

                  {CONTACT.whatsappDisplay}

                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#8F9A9B]
                    "
                  >
                    WhatsApp
                  </span>
                </a>

              </div>

            </div>

            {/* Hours */}

            <div>

              <h3
                className="
                  mb-4
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8F9A9B]
                "
              >
                Hours
              </h3>

              <p
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-2xl
                  leading-relaxed
                  text-[#231F20]
                "
              >
                Monday – Friday
                <br />
                9:00 AM – 6:00 PM
              </p>

            </div>

            {/* Socials */}

            {SOCIALS.length > 0 && (
              <div>

                <h3
                  className="
                    mb-4
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#8F9A9B]
                  "
                >
                  Follow the Studio
                </h3>

                <div className="flex flex-wrap gap-3">

                  {SOCIALS.map(
                    (social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        whileHover={{
                          y: -3,
                        }}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#231F20]/15
                          text-[#231F20]
                          transition-colors
                          duration-300
                          hover:border-[#231F20]
                          hover:bg-[#231F20]
                          hover:text-[#F7F4EE]
                        "
                      >
                        <Icon
                          name={social.icon}
                          className="h-4 w-4"
                        />
                      </motion.a>
                    )
                  )}

                </div>

              </div>
            )}

          </motion.div>

        </div>

      </motion.div>

      {/* ── Floating WhatsApp action ── */}

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.6,
          duration: 0.5,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-lg
          shadow-black/20
        "
      >
        <span
          className="
            absolute
            inset-0
            animate-ping
            rounded-full
            bg-[#25D366]
            opacity-40
          "
        />

        <Icon
          name="whatsapp"
          className="
            relative
            h-6
            w-6
          "
        />
      </motion.a>

    </main>
  );
}