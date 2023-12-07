"use client";

import { Divider } from "@nextui-org/react";
import { useState } from "react";
import Logo from "@/components/side-bar/logo";
import ThemeBtn from "@/components/side-bar/theme-btn";
import ClientRoutes from "@/components/side-bar/client-routes";
import SignOutBtn from "@/components/side-bar/sign-out-btn";
import SignInBtn from "@/components/side-bar/sign-in-btn";
import ToggleSideBarBtn from "@/components/side-bar/toggle-side-bar-btn.tsx";
import { usePathname } from "next/navigation";
import AdminLink from "./admin-link";

const SideBar = () => {
  const pathname = usePathname();
  const routes = ["/dashboard", "/dashboard/projects", "/dashboard/skills"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed bottom-0 w-full sm:h-screen flex flex-col-reverse justify-start items-center gap-y-3  sm:flex-row sm:items-start sm:backdrop-contrast-100 transition-all z-50 ${
        isOpen
          ? "backdrop-blur-sm backdrop-contrast-75 h-screen"
          : "h-6 sm:w-fit"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`relative flex flex-col justify-start items-center overflow-hidden w-full sm:h-screen gap-y-8 bg-white dark:bg-black sm:bg-transparent dark:sm:bg-transparent transition-all sm:rounded-none rounded-tl-xl rounded-tr-xl ${
          isOpen ? "sm:w-80 h-4/5 p-5" : "sm:w-0 h-0 p-0"
        }`}
      >
        <div className="flex w-full justify-between items-center px-3">
          <Logo />
          <ThemeBtn />
        </div>
        <AdminLink />
        <ClientRoutes />
        <Divider />
        {routes.includes(pathname) ? <SignOutBtn /> : <SignInBtn />}
        <Divider className="absolute right-0 top-0" orientation="vertical" />
      </div>
      <ToggleSideBarBtn isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default SideBar;
