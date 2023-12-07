"use client";

import { clientRoutes } from "@/data/client-routes";
import LinksBtn from "./links-btn";
import { usePathname } from "next/navigation";
import AdminRoutes from "@/components/side-bar/admin-routes";

const ClientRoutes = () => {
  const pathname = usePathname();
  const routeRegex = /\/dashboard\/*/g;
  return (
    <div className="w-full h-1/2 overflow-auto flex flex-col gap-y-5 flex-1 items-start">
      {clientRoutes.map(({ key, url, name, IconOutline, IconSolid }) => {
        return (
          <LinksBtn
            key={key}
            url={url}
            name={name}
            IconOutline={IconOutline}
            IconSolid={IconSolid}
          />
        );
      })}
      {routeRegex.test(pathname) && <AdminRoutes />}
    </div>
  );
};

export default ClientRoutes;
