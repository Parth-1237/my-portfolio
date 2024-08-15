import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-8 justify-center text-white font-bold">
        <li>
          <Link href="/" className="hover:underline hover:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:underline hover:text-yellow-300">Portfolio</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline hover:text-yellow-300">Blog</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline hover:text-yellow-300">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline hover:text-yellow-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
