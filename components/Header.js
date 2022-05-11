import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto text-center">
        <Link href="/">
          <h1 className="text-3xl font-bold bg-indigo-500 p-6 text-white">
           Big Blog!
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;