"use client";

import {
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import {
  motion,
  type Variants,
} from "framer-motion";

import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

/* ============================================================
   ASANG BRAND FONTS
============================================================ */

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

/* ============================================================
   CONTACT CONFIG
============================================================ */

const contactPerson =
  process.env.NEXT_PUBLIC_CONTACT_PERSON ||
  "Surya Sinha";

const whatsappPhone =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE ||
  "919205040314";

const whatsappPhoneDisplay =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE_DISPLAY ||
  "9205 040 314";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
  "info@asang.in";

const whatsappUrl =
  `https://wa.me/${whatsappPhone}`;

/* ============================================================
   EMAIL HELPERS
============================================================ */

const emailSubject =
  encodeURIComponent(
    "Career Application - ASANG"
  );

const gmailUrl =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=${emailSubject}`;

/* ============================================================
   ANIMATIONS
============================================================ */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ============================================================
   OPEN POSITIONS
============================================================ */

const positions = [
  {
    number: "01",
    title: "Architect",
    type: "Full-time",
    location: "Noida / Delhi NCR",

    description:
      "We are looking for an architect who can translate concepts into thoughtful architectural solutions and contribute across different stages of a project.",

    skills: [
      "Architecture",
      "Design Development",
      "AutoCAD",
      "SketchUp",
      "Documentation",
    ],
  },

  {
    number: "02",
    title: "Interior Designer",
    type: "Full-time",
    location: "Noida / Delhi NCR",

    description:
      "Join our interiors team to develop refined residential and commercial spaces with a strong understanding of materials, proportions, lighting and detailing.",

    skills: [
      "Interior Design",
      "Space Planning",
      "Material Selection",
      "3D Visualization",
      "Detailing",
    ],
  },

  {
    number: "03",
    title: "Junior Designer",
    type: "Full-time",
    location: "Noida / Delhi NCR",

    description:
      "An opportunity for an emerging designer to work closely with the studio team and gain hands-on experience across concepts, drawings, materials and presentations.",

    skills: [
      "Design",
      "Sketching",
      "AutoCAD",
      "3D Software",
      "Presentations",
    ],
  },

  {
    number: "04",
    title: "Design Intern",
    type: "Internship",
    location: "Noida / Delhi NCR",

    description:
      "A hands-on opportunity for architecture and interior design students to experience the studio environment and participate in real projects.",

    skills: [
      "Architecture",
      "Interiors",
      "Research",
      "Visualisation",
      "Model Making",
    ],
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function CareersPage() {
  const [
    selectedPosition,
    setSelectedPosition,
  ] = useState("");

  const [
    submitted,
    setSubmitted,
  ] = useState(false);

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  const [
    copied,
    setCopied,
  ] = useState(false);

  /* ==========================================================
     COPY EMAIL
  ========================================================== */

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        contactEmail
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "COPY EMAIL ERROR:",
        error
      );

      alert(
        `Email: ${contactEmail}`
      );
    }
  };

  /* ==========================================================
     FORM SUBMIT
  ========================================================== */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;

    try {
      setIsSubmitting(true);

      const formData =
        new FormData(form);

      const payload = {
        position: String(
          formData.get("position") || ""
        ),

        name: String(
          formData.get("name") || ""
        ),

        email: String(
          formData.get("email") || ""
        ),

        phone: String(
          formData.get("phone") || ""
        ),

        portfolio: String(
          formData.get("portfolio") || ""
        ),

        message: String(
          formData.get("message") || ""
        ),
      };

      /* ======================================================
         SEND TO API
      ====================================================== */

      const response = await fetch(
        "/api/careers",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const data =
        await response.json();

      /* ======================================================
         API ERROR
      ====================================================== */

      if (!response.ok) {
        alert(
          data.message ||
            "Unable to submit your application."
        );

        return;
      }

      /* ======================================================
         SUCCESS
      ====================================================== */

      setSubmitted(true);

      setSelectedPosition("");

      form.reset();
    } catch (error) {
      console.error(
        "CAREERS FORM ERROR:",
        error
      );

      alert(
        "Something went wrong while submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ==========================================================
     RETURN
  ========================================================== */

  return (
    <main
      className={`${cormorant.variable} ${montserrat.variable} min-h-screen overflow-hidden bg-[#F7F4EE] text-[#231F20]`}
    >
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#231F20] px-5 pb-12 pt-24 sm:min-h-[78vh] sm:px-8 sm:pb-16 sm:pt-28 md:min-h-[88vh] md:px-16 md:pb-20 lg:px-24">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full border border-[#DCC9A8]/20 sm:h-[500px] sm:w-[500px] md:h-[700px] md:w-[700px]" />

          <div className="absolute -bottom-[250px] -left-[200px] h-[450px] w-[450px] rounded-full border border-[#8F9A9B]/10 sm:h-[500px] sm:w-[500px]" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#231F20] via-[#231F20] to-[#171516]" />

        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 mx-auto w-full max-w-7xl"
        >

          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3 sm:mb-7 sm:gap-4"
          >

            <span className="h-px w-8 bg-[#DCC9A8] sm:w-10" />

            <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.28em] text-[#DCC9A8] sm:text-xs sm:tracking-[0.35em]">
              Careers at ASANG
            </span>

          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-6xl break-words px-0 font-[family-name:var(--font-cormorant)] text-[3.35rem] font-medium leading-[0.9] tracking-[-0.035em] text-[#F7F4EE] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem]"
          >
            DESIGN 

            <br />

            <span className="italic text-[#DCC9A8]">
              with us.
            </span>

          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full flex-col gap-7 sm:mt-10 sm:gap-8 md:flex-row md:items-end md:justify-between"
          >

            <p className="w-full max-w-xl font-[family-name:var(--font-montserrat)] text-xs font-medium leading-[1.9] text-white/70 sm:text-sm md:text-base">
              We are building a studio where curiosity,
              craftsmanship and thoughtful design come
              together. If you care about creating meaningful
              spaces, we would like to hear from you.
            </p>

            <a
              href="#openings"
              className="group flex w-full items-center justify-center rounded-full border border-white/30 px-5 py-3.5 text-center font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#DCC9A8] hover:bg-[#DCC9A8] hover:text-[#231F20] sm:w-fit sm:px-6 sm:text-[10px] sm:tracking-[0.2em]"
            >
              Explore Opportunities
            </a>

          </motion.div>

        </motion.div>

      </section>

      {/* ======================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-[#F7F4EE] px-5 py-20 sm:px-8 sm:py-24 md:px-16 md:py-32 lg:px-24">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
          className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-12"
        >

          <motion.div variants={fadeUp}>

            <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8F9A9B] sm:text-xs sm:tracking-[0.35em]">
              Why ASANG
            </p>

            <div className="mt-5 h-px w-12 bg-[#231F20]/25 sm:mt-6 sm:w-14" />

          </motion.div>

          <motion.div variants={fadeUp}>

            {/* FIXED HEADING */}
            <h2 className="max-w-5xl font-[family-name:var(--font-cormorant)] text-[3rem] font-medium leading-[0.98] tracking-[-0.02em] text-[#231F20] sm:text-[4.2rem] md:text-[5.5rem] lg:text-[6.2rem]">

              <span className="block whitespace-nowrap">
                Good design starts
              </span>

              <span className="mt-1 block italic leading-[1.02] text-[#8F9A9B] sm:mt-2">
                with good people.
              </span>

            </h2>

            <p className="mt-8 max-w-2xl font-[family-name:var(--font-montserrat)] text-xs font-medium leading-[1.9] text-[#514D45] sm:mt-10 sm:text-sm md:text-base">
              At ASANG, we believe the strongest work comes
              from collaboration. We bring together different
              perspectives, skills and experiences to create
              spaces that are considered from every angle.
            </p>

            <p className="mt-5 max-w-2xl font-[family-name:var(--font-montserrat)] text-xs font-medium leading-[1.9] text-[#514D45] sm:mt-6 sm:text-sm md:text-base">
              Whether you are an experienced architect,
              an emerging designer or someone beginning your
              journey, there is room to learn, contribute and
              grow with us.
            </p>

          </motion.div>

        </motion.div>

      </section>

      {/* ======================================================
          STUDIO CULTURE
      ====================================================== */}

      <section className="bg-[#EAE4D9] px-5 py-20 sm:px-8 sm:py-24 md:px-16 md:py-32 lg:px-24">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 sm:gap-4"
            >

              <span className="h-px w-8 bg-[#8F9A9B] sm:w-10" />

              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#777168] sm:text-xs sm:tracking-[0.35em]">
                Studio Culture
              </span>

            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 max-w-4xl font-[family-name:var(--font-cormorant)] text-[3.2rem] font-medium leading-[0.95] text-[#231F20] sm:text-5xl md:text-7xl"
            >
              A place to
              <br />

              <span className="italic text-[#777168]">
                learn & create.
              </span>
            </motion.h2>

          </motion.div>

          <div className="mt-12 grid border-t border-[#231F20]/20 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">

            <CultureCard
              number="01"
              title="Curiosity"
              text="We ask questions, explore ideas and stay open to new ways of thinking."
            />

            <CultureCard
              number="02"
              title="Craft"
              text="We care about the details — from the first sketch to the final finish."
              mobileBorder
            />

            <CultureCard
              number="03"
              title="Collaboration"
              text="We work together, share ideas and learn from different perspectives."
            />

            <CultureCard
              number="04"
              title="Growth"
              text="We believe every project is an opportunity to become better at what we do."
              mobileBorder
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          OPEN POSITIONS
      ====================================================== */}

      <section
        id="openings"
        className="scroll-mt-20 bg-[#231F20] px-5 py-20 sm:px-8 sm:py-24 md:px-16 md:py-32 lg:px-24"
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 sm:gap-4"
            >

              <span className="h-px w-8 bg-[#DCC9A8] sm:w-10" />

              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DCC9A8] sm:text-xs sm:tracking-[0.35em]">
                Opportunities
              </span>

            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-[family-name:var(--font-cormorant)] text-[3.2rem] font-medium leading-[0.95] text-[#F7F4EE] sm:text-5xl md:text-7xl"
            >
              Open
              <br />

              <span className="italic text-[#DCC9A8]">
                positions.
              </span>
            </motion.h2>

          </motion.div>

          <div className="mt-12 border-t border-white/20 sm:mt-16">

            {positions.map(
              (position, index) => (

                <motion.div
                  key={position.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="group border-b border-white/15 py-7 sm:py-9 md:py-10"
                >

                  <div className="grid gap-5 md:grid-cols-[70px_1fr_auto] md:items-start md:gap-8">

                    <div>
                      <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#DCC9A8]">
                        {position.number}
                      </span>
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#F7F4EE] transition-colors duration-300 group-hover:text-[#DCC9A8] sm:text-4xl md:text-5xl">
                          {position.title}
                        </h3>

                        <span className="rounded-full border border-white/20 px-3 py-1 font-[family-name:var(--font-montserrat)] text-[8px] font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-[9px]">
                          {position.type}
                        </span>

                      </div>

                      <div className="mt-3 flex items-center gap-2">

                        <span className="h-1 w-1 rounded-full bg-[#DCC9A8]" />

                        <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-medium uppercase tracking-[0.16em] text-white/50 sm:text-[10px]">
                          {position.location}
                        </span>

                      </div>

                      <p className="mt-5 w-full max-w-2xl font-[family-name:var(--font-montserrat)] text-xs font-light leading-[1.9] text-white/60 sm:text-sm">
                        {position.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">

                        {position.skills.map(
                          (skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/10 px-3 py-1.5 font-[family-name:var(--font-montserrat)] text-[8px] uppercase tracking-[0.12em] text-white/45"
                            >
                              {skill}
                            </span>
                          )
                        )}

                      </div>

                    </div>

                    <a
                      href="#apply"
                      onClick={() =>
                        setSelectedPosition(
                          position.title
                        )
                      }
                      className="group/apply flex w-full items-center justify-center rounded-full border border-white/25 px-5 py-3 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#DCC9A8] hover:bg-[#DCC9A8] hover:text-[#231F20] md:mt-2 md:w-fit md:justify-self-start"
                    >
                      Apply
                    </a>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          APPLICATION FORM
      ====================================================== */}

      <section
        id="apply"
        className="scroll-mt-20 bg-[#F7F4EE] px-5 py-20 sm:px-8 sm:py-24 md:px-16 md:py-32 lg:px-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={stagger}
            >

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 sm:gap-4"
              >

                <span className="h-px w-8 bg-[#8F9A9B] sm:w-10" />

                <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#777168] sm:text-xs sm:tracking-[0.35em]">
                  Join ASANG
                </span>

              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-6 font-[family-name:var(--font-cormorant)] text-[3.2rem] font-medium leading-[0.95] text-[#231F20] sm:text-5xl md:text-7xl"
              >
                Tell us
                <br />

                <span className="italic text-[#8F9A9B]">
                  about yourself.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-md font-[family-name:var(--font-montserrat)] text-xs font-medium leading-[1.9] text-[#514D45] sm:mt-9 sm:text-sm md:text-base"
              >
                We are always interested in meeting people
                who are passionate about architecture,
                interiors and thoughtful design.
              </motion.p>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              {submitted ? (

                /* ==================================================
                   SUCCESS
                ================================================== */

                <div className="border-t border-[#231F20]/20 pt-10 sm:pt-12">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#231F20] text-[#DCC9A8]">

                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="m5 12 4 4L19 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </div>

                  <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl font-medium sm:mt-7 sm:text-4xl">
                    Thank you.
                  </h3>

                  <p className="mt-3 max-w-md font-[family-name:var(--font-montserrat)] text-xs leading-[1.9] text-[#514D45] sm:mt-4 sm:text-sm">
                    Your application has been received.
                    Our team will review your profile and
                    get back to you.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSubmitted(false)
                    }
                    className="mt-7 rounded-full border border-[#231F20] px-5 py-3 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#231F20] transition-all duration-300 hover:bg-[#231F20] hover:text-white sm:mt-8 sm:px-6 sm:text-[10px]"
                  >
                    Submit Another
                  </button>

                </div>

              ) : (

                /* ==================================================
                   FORM
                ================================================== */

                <form
                  onSubmit={handleSubmit}
                  className="border-t border-[#231F20]/20 pt-8 sm:pt-10"
                >

                  {/* POSITION */}

                  <FormField label="Position">

                    <select
                      name="position"
                      value={selectedPosition}
                      onChange={(event) =>
                        setSelectedPosition(
                          event.target.value
                        )
                      }
                      required
                      className="form-input"
                    >

                      <option value="">
                        Select a position
                      </option>

                      {positions.map(
                        (position) => (
                          <option
                            key={position.title}
                            value={position.title}
                          >
                            {position.title}
                          </option>
                        )
                      )}

                      <option value="General Application">
                        General Application
                      </option>

                    </select>

                  </FormField>

                  {/* NAME */}

                  <FormField label="Full Name">

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className="form-input"
                    />

                  </FormField>

                  {/* EMAIL */}

                  <FormField label="Email">

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className="form-input"
                    />

                  </FormField>

                  {/* PHONE */}

                  <FormField label="Phone">

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91"
                      required
                      autoComplete="tel"
                      className="form-input"
                    />

                  </FormField>

                  {/* PORTFOLIO */}

                  <FormField label="Portfolio Link">

                    <input
                      type="url"
                      name="portfolio"
                      placeholder="https://"
                      className="form-input"
                    />

                  </FormField>

                  {/* MESSAGE */}

                  <FormField label="Message">

                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us a little about yourself..."
                      className="form-input resize-none"
                    />

                  </FormField>

                  {/* SUBMIT */}

                  <div className="pt-6 sm:pt-7">

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-5 rounded-full bg-[#231F20] px-7 py-4 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#3A3435] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-xs sm:tracking-[0.2em]"
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Send Application"}
                    </button>

                  </div>

                  <p className="mt-4 font-[family-name:var(--font-montserrat)] text-[9px] leading-relaxed text-[#8F9A9B] sm:mt-5 sm:text-[10px]">
                    By submitting this form, you agree to
                    ASANG reviewing your application and
                    contacting you regarding opportunities.
                  </p>

                </form>

              )}

            </motion.div>

          </div>

        </div>

      </section>

      {/* ======================================================
          EMAIL APPLICATION
      ====================================================== */}

      <section className="bg-[#EAE4D9] px-5 py-16 sm:px-8 sm:py-20 md:px-16 lg:px-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

            <div>

              <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#777168]">
                Prefer Email?
              </p>

              <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#231F20] sm:text-4xl">
                You can also send your application directly.
              </h3>

              <p className="mt-3 font-[family-name:var(--font-montserrat)] text-xs leading-[1.8] text-[#514D45] sm:text-sm">
                Send your portfolio or application details to:
              </p>

              <p className="mt-3 break-all font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[#231F20] sm:text-base">
                {contactEmail}
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              {/* COPY EMAIL */}

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center justify-center rounded-full border border-[#231F20]/30 px-6 py-3.5 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.15em] text-[#231F20] transition-all duration-300 hover:bg-[#231F20] hover:text-[#EAE4D9] sm:text-[10px]"
              >
                {copied
                  ? "Email Copied"
                  : "Copy Email"}
              </button>

              {/* OPEN GMAIL */}

              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-[#231F20] px-6 py-3.5 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#3A3435] sm:text-[10px]"
              >
                Open Gmail
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          FORM STYLES
      ====================================================== */}

      <style>{`
        .form-input {
          width: 100%;
          border: 0;
          border-bottom: 1px solid rgba(35, 31, 32, 0.2);
          background: transparent;
          padding: 15px 0;
          outline: none;
          color: #231f20;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          transition: border-color 0.25s ease;
        }

        .form-input::placeholder {
          color: #9a948a;
        }

        .form-input:focus {
          border-bottom-color: #231f20;
        }

        select.form-input {
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .form-input {
            font-size: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .form-input {
            transition: none;
          }
        }
      `}</style>

    </main>
  );
}

/* ============================================================
   CULTURE CARD
============================================================ */

function CultureCard({
  number,
  title,
  text,
  mobileBorder = false,
}: {
  number: string;
  title: string;
  text: string;
  mobileBorder?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={[
        "border-b",
        "border-[#231F20]/20",
        "py-7",
        "sm:px-7",
        "sm:py-8",
        mobileBorder
          ? "sm:border-l"
          : "",
        "lg:border-b-0",
        "lg:border-r",
        "lg:px-8",
        "lg:first:pl-0",
        "lg:last:border-r-0",
        "lg:last:pr-0",
      ].join(" ")}
    >

      <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-semibold tracking-[0.22em] text-[#8F9A9B] sm:text-[10px] sm:tracking-[0.25em]">
        {number}
      </span>

      <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#231F20] sm:mt-8 sm:text-3xl">
        {title}
      </h3>

      <p className="mt-3 font-[family-name:var(--font-montserrat)] text-xs font-medium leading-[1.8] text-[#514D45] sm:mt-4 sm:text-sm">
        {text}
      </p>

    </motion.div>
  );
}

/* ============================================================
   FORM FIELD
============================================================ */

function FormField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-[#231F20]/10 py-5 sm:py-6">

      <label className="mb-2 block font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#777168] sm:text-[10px]">
        {label}
      </label>

      {children}

    </div>
  );
}