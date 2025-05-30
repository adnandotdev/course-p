"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  DropdownMenu } from "radix-ui";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import "../../globals.css";
import { Avatar, Box, Flex, Heading, HoverCard, Text } from "@radix-ui/themes";

const Nav = () => {
  const pathname = usePathname();

  const activeClass = (href) => (pathname === href ? "font-bold" : "");
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-1 px-8 shadow-md bg-cyan-100">
      <div className="left-div">
        <Text>
          <HoverCard.Root>
            <HoverCard.Trigger className="cursor-pointer">
              <h1 className="text-4xl text-cyan-800">LOGO</h1>
            </HoverCard.Trigger>
            <HoverCard.Content maxWidth="300px">
              <Flex gap="4">
                <Avatar
                  size="3"
                  fallback="R"
                  radius="full"
                  src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                />
                <Box>
                  <Heading size="3" as="h3">
                    Radix
                  </Heading>
                  <Text as="div" size="2" color="gray" mb="2">
                    @radix_ui
                  </Text>
                  <Text as="div" size="2">
                    React components, icons, and colors for building
                    high-quality, accessible UI.
                  </Text>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>{" "}
        </Text>
      </div>
      <div className="center-div hidden sm:flex">
        <Link className={`text-cyan-600 px-2 ${activeClass("/")}`} href="/">
          <button>Home</button>
        </Link>
        <Link
          className={`text-cyan-600 px-2 ${activeClass("/courses")}`}
          href="/courses"
        >
          <button>Courses</button>
        </Link>
        <Link
          className={`text-cyan-600 px-2 ${activeClass("/mycourses")}`}
          href="/mycourses"
        >
          <button>My Learning</button>
        </Link>
        <Link
          className={`text-cyan-600 px-2 ${activeClass("/contact")}`}
          href="/contact"
        >
          <button>Contact</button>
        </Link>
      </div>
      <div className="right-div">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild className="flex sm:hidden">
            <HamburgerMenuIcon className="w-8 h-10 text-cyan-600 cursor-pointer" />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="w-full rounded-md bg-white p-[5px] flex flex-col justify-center shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
              sideOffset={5}
            >
              <DropdownMenu.Item className="group  relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none  ">
                <Link className="text-cyan-600" href="/">
                  <button>Home</button>
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none  ">
                <Link className="text-cyan-600" href="/courses">
                  <button>Courses</button>
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none  ">
                <Link className="text-cyan-600" href="/mycourses">
                  <button>My Learning</button>
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none  ">
                <Link className="text-cyan-600" href="/contact">
                  <button>Contact</button>
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-cyan-600 group relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none  ">
                My Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-cyan-600 group relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none  ">
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group text-white bg-red-700 rounded relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none outline-none  ">
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild className="hidden sm:flex">
            <PersonIcon className="w-10 h-10 text-cyan-600 cursor-pointer" />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[120px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
              sideOffset={5}
            >
              <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none  ">
                My Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none  ">
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group text-white bg-red-700 rounded relative flex h-[25px] select-none items-center pl-[25px] pr-[5px] text-[13px] leading-none outline-none  ">
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};

export default Nav;
