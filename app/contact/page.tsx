// // app/contact/page.tsx

// "use client";

// import { useState } from "react";
// import { motion, type Variants } from "framer-motion";

// // ─────────────────────────────────────────────────────────────────────────────
// // Animation variants
// // ─────────────────────────────────────────────────────────────────────────────

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // Types
// // ─────────────────────────────────────────────────────────────────────────────

// type FormData = {
//   name: string;
//   email: string;
//   vertical: string;
//   message: string;
// };

// type Status = "idle" | "loading" | "success" | "error";

// // ─────────────────────────────────────────────────────────────────────────────
// // Component
// // ─────────────────────────────────────────────────────────────────────────────

// export default function ContactUs() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     vertical: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<Status>("idle");
//   const [statusMessage, setStatusMessage] = useState("");

//   const isLoading = status === "loading";

//   // ── Handlers ───────────────────────────────────────────────────────────────

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("loading");
//     setStatusMessage("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setStatus("error");
//         setStatusMessage(data.error || "Something went wrong. Please try again.");
//         return;
//       }

//       setStatus("success");
//       setStatusMessage("Thank you. Your inquiry has been submitted successfully.");
//       setFormData({ name: "", email: "", vertical: "", message: "" });
//     } catch {
//       setStatus("error");
//       setStatusMessage("Unable to reach the server. Please try again.");
//     }
//   };

//   // ── Render ─────────────────────────────────────────────────────────────────

//   return (
//     <main className="min-h-screen bg-white px-8 py-24 text-gray-900 md:px-24">
//       <motion.div
//         className="mx-auto max-w-7xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* ── Header ── */}
//         <motion.div variants={itemVariants} className="mb-20">
//           <h1 className="mb-4 font-serif text-5xl font-light md:text-6xl">
//             Get in Touch
//           </h1>
//           <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
//             Whether you are looking to build a commercial space, renovate a
//             residential property, or design an industrial facility, our team
//             is here to bring your vision to life.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">
//           {/* ── Form ── */}
//           <motion.div variants={itemVariants}>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

//               {/* Name + Email */}
//               <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="name"
//                     className="text-xs uppercase tracking-widest text-gray-400"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Jane Doe"
//                     required
//                     disabled={isLoading}
//                     className="border-b border-gray-300 bg-transparent pb-2 text-sm outline-none transition-colors focus:border-gray-900 disabled:opacity-50"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="email"
//                     className="text-xs uppercase tracking-widest text-gray-400"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="jane@example.com"
//                     required
//                     disabled={isLoading}
//                     className="border-b border-gray-300 bg-transparent pb-2 text-sm outline-none transition-colors focus:border-gray-900 disabled:opacity-50"
//                   />
//                 </div>
//               </div>

//               {/* Project Type */}
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor="vertical"
//                   className="text-xs uppercase tracking-widest text-gray-400"
//                 >
//                   Project Type
//                 </label>
//                 <select
//                   id="vertical"
//                   value={formData.vertical}
//                   onChange={handleChange}
//                   required
//                   disabled={isLoading}
//                   className="border-b border-gray-300 bg-transparent pb-2 text-sm outline-none transition-colors focus:border-gray-900 disabled:opacity-50"
//                 >
//                   <option value="" disabled>Select a vertical...</option>
//                   <option value="commercial">Commercial</option>
//                   <option value="residential">Residential</option>
//                   <option value="industrial">Industrial</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               {/* Message */}
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor="message"
//                   className="text-xs uppercase tracking-widest text-gray-400"
//                 >
//                   Message Details
//                 </label>
//                 <textarea
//                   id="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   required
//                   disabled={isLoading}
//                   placeholder="Tell us about your project..."
//                   className="resize-none border-b border-gray-300 bg-transparent pb-2 text-sm outline-none transition-colors focus:border-gray-900 disabled:opacity-50"
//                 />
//               </div>

//               {/* Feedback */}
//               {status === "success" && (
//                 <div
//                   role="status"
//                   className="border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
//                 >
//                   {statusMessage}
//                 </div>
//               )}
//               {status === "error" && (
//                 <div
//                   role="alert"
//                   className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
//                 >
//                   {statusMessage}
//                 </div>
//               )}

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="mt-4 self-start bg-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-widest text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 {isLoading ? "Sending..." : "Send Inquiry"}
//               </button>
//             </form>
//           </motion.div>

//           {/* ── Contact Details ── */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col gap-12 border-gray-200 md:border-l md:pl-12 lg:pl-24"
//           >
//             <div>
//               <h3 className="mb-4 text-xs font-medium uppercase tracking-widest">
//                 Main Studio
//               </h3>
//               <address className="font-serif text-xl not-italic leading-relaxed text-gray-600">
//                 123 Design Boulevard
//                 <br />
//                 Suite 400
//                 <br />
//                 Metropolis, NY 10001
//               </address>
//             </div>

//             <div>
//               <h3 className="mb-4 text-xs font-medium uppercase tracking-widest">
//                 Contact
//               </h3>
//               <div className="flex flex-col gap-2 font-serif text-xl text-gray-600">
//                 <a
//                   href="mailto:hello@studio-lambda.com"
//                   className="transition-colors hover:text-gray-900"
//                 >
//                   hello@studio-lambda.com
//                 </a>
//                 <a
//                   href="tel:+1234567890"
//                   className="transition-colors hover:text-gray-900"
//                 >
//                   +1 (234) 567-890
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="mb-4 text-xs font-medium uppercase tracking-widest">
//                 Hours
//               </h3>
//               <p className="font-serif text-xl text-gray-600">
//                 Monday – Friday
//                 <br />
//                 9:00 AM – 6:00 PM
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </main>
//   );
// }
















// app/contact/page.tsx

"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

// ─────────────────────────────────────────────────────────────────────────────
// ASANG BRAND FONTS
// ─────────────────────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type FormData = {
  name: string;
  email: string;
  vertical: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    vertical: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isLoading = status === "loading";

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Thank you. Your inquiry has been submitted successfully.");
      setFormData({ name: "", email: "", vertical: "", message: "" });
    } catch {
      setStatus("error");
      setStatusMessage("Unable to reach the server. Please try again.");
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <main 
      className={`
        ${cormorant.variable} 
        ${montserrat.variable} 
        min-h-screen 
        bg-[#F7F4EE] 
        px-6 
        py-24 
        text-[#231F20] 
        md:px-24 
        lg:py-32
      `}
    >
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Header ── */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#8F9A9B]" />
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
            Get in Touch
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
            Whether you are looking to build a commercial space, renovate a
            residential property, or design an industrial facility, our team
            is here to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">
          {/* ── Form ── */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-[#8F9A9B]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    disabled={isLoading}
                    className="
                      border-b border-[#231F20]/20 
                      bg-transparent 
                      pb-3 
                      font-[family-name:var(--font-montserrat)] 
                      text-sm 
                      text-[#231F20] 
                      placeholder-[#8F9A9B]/60 
                      outline-none 
                      transition-colors 
                      focus:border-[#231F20] 
                      disabled:opacity-50
                    "
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="email"
                    className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-[#8F9A9B]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    disabled={isLoading}
                    className="
                      border-b border-[#231F20]/20 
                      bg-transparent 
                      pb-3 
                      font-[family-name:var(--font-montserrat)] 
                      text-sm 
                      text-[#231F20] 
                      placeholder-[#8F9A9B]/60 
                      outline-none 
                      transition-colors 
                      focus:border-[#231F20] 
                      disabled:opacity-50
                    "
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="vertical"
                  className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-[#8F9A9B]"
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
                    border-b border-[#231F20]/20 
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
                  <option value="" disabled>Select a vertical...</option>
                  <option value="commercial">Commercial</option>
                  <option value="residential">Residential</option>
                  <option value="industrial">Industrial</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-[#8F9A9B]"
                >
                  Message Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  disabled={isLoading}
                  placeholder="Tell us about your project..."
                  className="
                    resize-none 
                    border-b border-[#231F20]/20 
                    bg-transparent 
                    pb-3 
                    font-[family-name:var(--font-montserrat)] 
                    text-sm 
                    text-[#231F20] 
                    placeholder-[#8F9A9B]/60 
                    outline-none 
                    transition-colors 
                    focus:border-[#231F20] 
                    disabled:opacity-50
                  "
                />
              </div>

              {/* Feedback */}
              {status === "success" && (
                <div
                  role="status"
                  className="border border-green-200/50 bg-[#e8f0e5] px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm font-medium text-[#3b5336]"
                >
                  {statusMessage}
                </div>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  className="border border-red-200/50 bg-[#f4e6e6] px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm font-medium text-[#7a3b3b]"
                >
                  {statusMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="
                  mt-4 
                  self-start 
                  rounded-full
                  border border-[#231F20]
                  bg-[#231F20] 
                  px-10 
                  py-4 
                  font-[family-name:var(--font-montserrat)] 
                  text-xs 
                  font-semibold 
                  uppercase 
                  tracking-[0.25em] 
                  text-[#F7F4EE] 
                  transition-all 
                  duration-500
                  hover:bg-[#DCC9A8] 
                  hover:border-[#DCC9A8]
                  hover:text-[#231F20]
                  disabled:cursor-not-allowed 
                  disabled:opacity-50
                "
              >
                {isLoading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </motion.div>

          {/* ── Contact Details ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-12 border-[#231F20]/15 md:border-l md:pl-12 lg:pl-24"
          >
            <div>
              <h3 className="mb-4 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#8F9A9B]">
                Main Studio
              </h3>
              <address className="font-[family-name:var(--font-cormorant)] text-2xl not-italic leading-relaxed text-[#231F20]">
                124 Design Avenue
                <br />
                Creative District
                <br />
                NY 10001
              </address>
            </div>

            <div>
              <h3 className="mb-4 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#8F9A9B]">
                Contact
              </h3>
              <div className="flex flex-col gap-2 font-[family-name:var(--font-cormorant)] text-2xl text-[#231F20]">
                <a
                  href="mailto:hello@asangstudio.com"
                  className="transition-colors hover:text-[#DCC9A8]"
                >
                  hello@asangstudio.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="transition-colors hover:text-[#DCC9A8]"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#8F9A9B]">
                Hours
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-2xl leading-relaxed text-[#231F20]">
                Monday – Friday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}