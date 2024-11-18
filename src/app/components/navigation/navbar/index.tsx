import React from "react";
import Link from "next/link";
// import GoogleButton from "../../authentication/google-button";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 border-black border-b-2 bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex items-center gap-x-10">
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
              <Button variant="outline">
                <Link href="/create">
                  <div className="flex items-center gap-2">
                    <p className="text-lg">+ Create</p>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
