import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Studio", href: "/studio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 bg-white px-8 py-5 flex justify-between items-center shadow-sm">
      {/* Logo Section */}
      <Link href="/" className="flex items-center cursor-pointer">
        <Image
          src="/Asanglogo.jpeg"
          alt="Asang Design Studio"
          width={180}
          height={70}
          priority
          className="object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:text-gray-500 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}