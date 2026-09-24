import type { Metadata } from "next";
import Link from "next/link";
import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

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

export const metadata: Metadata = {
  title: "Terms & Conditions | ASANG Design Studio",
  description:
    "Terms and Conditions governing the use of the ASANG Design Studio website and our online services.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
  },
  {
    id: "website",
    number: "02",
    title: "Use of Website",
  },
  {
    id: "services",
    number: "03",
    title: "Design Services",
  },
  {
    id: "content",
    number: "04",
    title: "Intellectual Property & Portfolio",
  },
  {
    id: "enquiries",
    number: "05",
    title: "Enquiries & Communication",
  },
  {
    id: "third-party",
    number: "06",
    title: "Third-Party Links",
  },
  {
    id: "disclaimer",
    number: "07",
    title: "Disclaimer",
  },
  {
    id: "liability",
    number: "08",
    title: "Limitation of Liability",
  },
  {
    id: "changes",
    number: "09",
    title: "Changes to These Terms",
  },
  {
    id: "law",
    number: "10",
    title: "Governing Law",
  },
  {
    id: "contact",
    number: "11",
    title: "Contact Us",
  },
];

export default function TermsPage() {
  return (
    <main
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        min-h-screen
        bg-[#F7F4EE]
        text-[#231F20]
      `}
    >
      {/* =====================================================
          HEADER / HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#231F20]/10">
        {/* Decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#8F9A9B]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-[-250px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#DCC9A8]/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            pb-20
            pt-32
            md:px-12
            md:pb-24
            md:pt-40
            lg:px-16
          "
        >
          {/* Breadcrumb */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-4
              font-[family-name:var(--font-montserrat)]
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#8F9A9B]
            "
          >
            <Link
              href="/"
              className="
                transition-colors
                hover:text-[#231F20]
              "
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-[#231F20]/50">
              Terms
            </span>
          </div>

          {/* Heading */}

          <div className="max-w-5xl">
            <div
              className="
                mb-6
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#8F9A9B]
                "
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
                Legal
              </span>
            </div>

            <h1
              className="
                font-[family-name:var(--font-cormorant)]
                text-6xl
                font-medium
                leading-[0.9]
                tracking-[-0.02em]
                md:text-8xl
                lg:text-[9rem]
              "
            >
              Terms
              <span className="italic text-[#8F9A9B]">
                {" "}
                & Conditions
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                font-[family-name:var(--font-montserrat)]
                text-sm
                leading-[2]
                text-[#514D45]
                md:text-base
              "
            >
              These terms explain the conditions that
              apply when you access and use the ASANG
              Design Studio website and interact with
              our online services.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          py-16
          md:px-12
          md:py-24
          lg:px-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-[250px_1fr]
            lg:gap-24
          "
        >
          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <p
                className="
                  mb-6
                  font-[family-name:var(--font-montserrat)]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8F9A9B]
                "
              >
                On this page
              </p>

              <nav className="space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      font-[family-name:var(--font-montserrat)]
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-[#514D45]
                      transition-colors
                      hover:text-[#231F20]
                    "
                  >
                    <span className="text-[#8F9A9B]">
                      {section.number}
                    </span>

                    <span>
                      {section.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* =================================================
              TERMS CONTENT
          ================================================= */}

          <article className="max-w-4xl">
            {/* INTRO */}

            <div
              className="
                mb-16
                border-b
                border-[#231F20]/10
                pb-12
              "
            >
              <p
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-3xl
                  leading-relaxed
                  text-[#231F20]
                  md:text-4xl
                "
              >
                At ASANG Design Studio, we believe
                that good design begins with clarity,
                trust and thoughtful collaboration.
              </p>

              <p
                className="
                  mt-6
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  leading-[2]
                  text-[#514D45]
                "
              >
                By accessing this website, you agree
                to use it responsibly and in accordance
                with the terms outlined below. If you
                do not agree with these terms, please
                do not use this website.
              </p>
            </div>

            {/* =================================================
                01
            ================================================= */}

            <section
              id="acceptance"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="01"
                title="Acceptance of Terms"
              />

              <Text>
                By accessing or using the ASANG Design
                Studio website, you acknowledge that
                you have read, understood and agreed
                to these Terms & Conditions.
              </Text>

              <Text>
                These terms apply to all visitors,
                users and individuals who interact with
                the website, submit an enquiry or use
                any information or functionality
                provided through the website.
              </Text>
            </section>

            {/* =================================================
                02
            ================================================= */}

            <section
              id="website"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="02"
                title="Use of Website"
              />

              <Text>
                You may use this website for lawful
                purposes and for learning more about
                ASANG Design Studio, our work, our
                services and our approach to
                architecture and interior design.
              </Text>

              <Text>
                You agree not to misuse the website,
                attempt to gain unauthorized access,
                interfere with its operation or use
                the website in a way that may damage
                ASANG Design Studio or its users.
              </Text>

              <Text>
                You must not reproduce, copy,
                distribute or commercially exploit
                website content without appropriate
                written permission.
              </Text>
            </section>

            {/* =================================================
                03
            ================================================= */}

            <section
              id="services"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="03"
                title="Design Services"
              />

              <Text>
                Information displayed on this website
                about architecture, interiors,
                renovations, residential projects,
                villas, offices, retail spaces and
                other design services is provided for
                general informational purposes.
              </Text>

              <Text>
                A website enquiry, consultation request
                or communication with ASANG Design
                Studio does not automatically create a
                client relationship or constitute an
                agreement to undertake a project.
              </Text>

              <Text>
                Specific project scope, fees, timelines,
                deliverables, responsibilities and
                other commercial terms will be agreed
                separately between the relevant parties
                before services commence.
              </Text>
            </section>

            {/* =================================================
                04
            ================================================= */}

            <section
              id="content"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="04"
                title="Intellectual Property & Portfolio Images"
              />

              <Text>
                Unless otherwise stated, the content
                presented on this website belongs to
                ASANG Design Studio or is used with
                appropriate permission.
              </Text>

              <Text>
                This includes, but is not limited to,
                project photographs, architectural
                imagery, interior images, brand work,
                completed projects, visualisations,
                graphics, written content, logos,
                branding, layouts, visual elements and
                other creative material.
              </Text>

              <Text>
                ASANG Design Studio may display
                photographs and visual material from
                our past and completed projects,
                including residential interiors,
                luxury villas, service apartments,
                offices, retail spaces, hospitality
                projects, architectural work and other
                brand collaborations, as part of our
                portfolio and professional presentation.
              </Text>

              <Text>
                Where photographs or project material
                belong to a client, photographer, brand
                partner or another third party, such
                material will be used only where ASANG
                Design Studio has the appropriate
                permission, licence or other lawful
                basis to display it.
              </Text>

              <Text>
                Portfolio images are intended to
                showcase our previous work and design
                experience. The appearance of a project
                or brand on this website does not
                necessarily mean that ASANG Design
                Studio currently provides services to
                that client or that the client endorses
                ASANG Design Studio.
              </Text>

              <Text>
                Website content may not be copied,
                modified, reproduced, republished,
                distributed or used commercially
                without prior written permission.
              </Text>
            </section>

            {/* =================================================
                05
            ================================================= */}

            <section
              id="enquiries"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="05"
                title="Enquiries & Communication"
              />

              <Text>
                When you submit an enquiry through our
                website, you agree to provide accurate
                and current information.
              </Text>

              <Text>
                Information submitted through our
                contact forms may be used by ASANG
                Design Studio to respond to your
                enquiry, understand your requirements
                and communicate with you regarding
                potential projects or services.
              </Text>

              <Text>
                Providing an email address is optional
                where the relevant enquiry form allows
                it. A valid telephone number may be
                required to enable us to respond to
                your enquiry.
              </Text>
            </section>

            {/* =================================================
                06
            ================================================= */}

            <section
              id="third-party"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="06"
                title="Third-Party Links"
              />

              <Text>
                Our website may contain links to
                third-party websites or services,
                including social media platforms,
                mapping services and communication
                platforms.
              </Text>

              <Text>
                These websites are operated
                independently from ASANG Design Studio.
                We are not responsible for the content,
                availability, privacy practices or
                policies of third-party websites.
              </Text>
            </section>

            {/* =================================================
                07
            ================================================= */}

            <section
              id="disclaimer"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="07"
                title="Disclaimer"
              />

              <Text>
                While we make reasonable efforts to keep
                the information on this website accurate
                and current, we do not guarantee that
                all information will always be complete,
                accurate or up to date.
              </Text>

              <Text>
                Project images, visualisations,
                descriptions and other portfolio
                material may represent completed work,
                concepts, selected stages of a project
                or illustrative design intent.
              </Text>

              <Text>
                The appearance of a project on this
                website should not be interpreted as a
                guarantee that identical materials,
                specifications, finishes, costs or
                outcomes will be available for another
                project.
              </Text>
            </section>

            {/* =================================================
                08
            ================================================= */}

            <section
              id="liability"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="08"
                title="Limitation of Liability"
              />

              <Text>
                To the extent permitted by applicable
                law, ASANG Design Studio shall not be
                responsible for losses or damages
                arising directly or indirectly from the
                use of, or inability to use, this
                website or reliance on information
                provided through it.
              </Text>

              <Text>
                This provision does not exclude or limit
                any liability that cannot lawfully be
                excluded or limited under applicable
                law.
              </Text>
            </section>

            {/* =================================================
                09
            ================================================= */}

            <section
              id="changes"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="09"
                title="Changes to These Terms"
              />

              <Text>
                ASANG Design Studio may update these
                Terms & Conditions from time to time to
                reflect changes to our website,
                services, business practices or
                applicable requirements.
              </Text>

              <Text>
                Updated terms will be published on this
                page.
              </Text>
            </section>

            {/* =================================================
                10
            ================================================= */}

            <section
              id="law"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="10"
                title="Governing Law"
              />

              <Text>
                These Terms & Conditions shall be
                interpreted in accordance with the
                applicable laws of India.
              </Text>

              <Text>
                Any disputes arising in connection with
                these terms or the use of this website
                shall be subject to the jurisdiction of
                the appropriate courts, subject to
                applicable law.
              </Text>
            </section>

            {/* =================================================
                11
            ================================================= */}

            <section
              id="contact"
              className="scroll-mt-10"
            >
              <SectionHeading
                number="11"
                title="Contact Us"
              />

              <Text>
                If you have questions regarding these
                Terms & Conditions or would like further
                information about ASANG Design Studio,
                you can contact us using the details
                below.
              </Text>

              <div
                className="
                  mt-8
                  border
                  border-[#231F20]/10
                  bg-white/40
                  p-7
                  md:p-9
                "
              >
                <p
                  className="
                    font-[family-name:var(--font-cormorant)]
                    text-3xl
                    text-[#231F20]
                  "
                >
                  ASANG Design Studio
                </p>

                <div
                  className="
                    mt-5
                    space-y-2
                    font-[family-name:var(--font-montserrat)]
                    text-sm
                    leading-relaxed
                    text-[#514D45]
                  "
                >
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@asang.in"
                      className="
                        transition-colors
                        hover:text-[#8F9A9B]
                      "
                    >
                      info@asang.in
                    </a>
                  </p>

                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+919205040314"
                      className="
                        transition-colors
                        hover:text-[#8F9A9B]
                      "
                    >
                      +91 92050 40314
                    </a>
                  </p>

                  <p>
                    #208, Vriksh Building, A-103,
                    Sector 63
                    <br />
                    Noida - 201301,
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                FINAL NOTE
            ================================================= */}

            <div
              className="
                mt-20
                border-t
                border-[#231F20]/10
                pt-10
              "
            >
              <p
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-2xl
                  italic
                  text-[#514D45]
                "
              >
                Thoughtful design begins with
                thoughtful relationships.
              </p>

              <Link
                href="/"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  font-[family-name:var(--font-montserrat)]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#231F20]
                  transition-colors
                  hover:text-[#8F9A9B]
                "
              >
                Back to ASANG

                <span
                  className="
                    transition-transform
                    duration-300
                    hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          border-t
          border-[#231F20]/10
          bg-[#231F20]
          px-6
          py-10
          text-[#F7F4EE]
          md:px-12
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-5
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <Link
            href="/"
            className="
              font-[family-name:var(--font-cormorant)]
              text-3xl
              font-medium
            "
          >
            ASANG
          </Link>

          <div
            className="
              flex
              flex-wrap
              gap-5
              font-[family-name:var(--font-montserrat)]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white/50
            "
          >
            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-white"
            >
              About
            </Link>

            <Link
              href="/services"
              className="hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/portfolio"
              className="hover:text-white"
            >
              Portfolio
            </Link>

            <Link
              href="/contact"
              className="hover:text-white"
            >
              Contact
            </Link>
          </div>

          <p
            className="
              font-[family-name:var(--font-montserrat)]
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-white/30
            "
          >
            © {new Date().getFullYear()} ASANG
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   REUSABLE CONTENT COMPONENTS
============================================================ */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div
      className="
        mb-7
        flex
        items-baseline
        gap-5
      "
    >
      <span
        className="
          font-[family-name:var(--font-montserrat)]
          text-[10px]
          font-semibold
          tracking-[0.2em]
          text-[#8F9A9B]
        "
      >
        {number}
      </span>

      <h2
        className="
          font-[family-name:var(--font-cormorant)]
          text-3xl
          font-medium
          leading-tight
          md:text-4xl
        "
      >
        {title}
      </h2>
    </div>
  );
}

function Text({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      className="
        mb-5
        font-[family-name:var(--font-montserrat)]
        text-sm
        leading-[2]
        text-[#514D45]
        md:text-[15px]
      "
    >
      {children}
    </p>
  );
}