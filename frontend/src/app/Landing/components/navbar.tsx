"use client";

import Link from "next/link";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          <span className="text-gradient bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            FraudWatch
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-sm text-gray-300">
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#howitworks" className="nav-link">How It Works</Link>
          <Link href="#impact" className="nav-link">Impact</Link>
          <Link href="#about" className="nav-link">About</Link>
        </div>

        {/* Auth / User */}
        <div className="hidden md:block">
          {!isSignedIn ? (
            <SignInButton mode="modal" afterSignInUrl="/dashboard">
              <button className="px-5 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition">
                Sign In
              </button>
            </SignInButton>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-300"
        >
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#howitworks" className="nav-link">How It Works</Link>
          <Link href="#impact" className="nav-link">Impact</Link>
          <Link href="#about" className="nav-link">About</Link>

         {!isSignedIn ? (
  <SignInButton mode="modal" redirectUrl="/dashboard">
    <button>Sign In</button>
  </SignInButton>
) : (
  <Link href="/dashboard">
    <button>Go to Dashboard</button>
  </Link>
)}

        </motion.div>
      )}
    </motion.nav>
  );
}
