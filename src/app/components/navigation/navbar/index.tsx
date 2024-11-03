import React from "react";
import Link from "next/link";
import GoogleButton from "../../authentication/google-button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 border-black border-b-2 bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex items-center gap-x-6">
              <li>
                <Link href="/">
                  <p>Whitesea</p>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <p>Taste Profile</p>
                </Link>
              </li>
            </ul>
            <div className="ml-auto">
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
