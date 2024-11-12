// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex justify-around">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/products" className="hover:underline">Products</Link>
      </nav>
    </header>
  );
}
