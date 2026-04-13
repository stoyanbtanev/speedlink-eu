"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar1() {
  const useActive = useRelume();
  return (
    <section
      id="section"
      className="flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="/">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100svh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            to="/services"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Услуги
          </Link>
          <Link
            to="/reviews"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Отзиви
          </Link>
          <Link
            to="/contact"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
          >
            Контакт
          </Link>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>Език</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
              >
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
                >
                  Български
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
                >
                  English
                </a>
                <a
                  href="#"
                  className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
                >
                  Още
                </a>
              </motion.nav>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            <Button
              title="Вход"
              variant="secondary"
              size="sm"
              className="w-full"
            >
              Вход
            </Button>
            <Button title="Оферта" size="sm" className="w-full">
              Оферта
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
