"use client"

import React from "react";
import { LibraryBig, LineChart, MessageSquare, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/dashboard/responses",
    },
    {
      id: 3,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen shadow-md border">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className={`flex items-center gap-3 p-4 mb-3 hover:bg-primary hover:text-white rounded-xl cursor-pointer  ${
              path==menu.path&&"bg-primary text-white"
            }`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-7 p-6 w-64">
        <Button className="w-full">+ Create Form</Button>
        <div className="my-7">
            <Progress value={63}/>
            <h2 className="text-sm mt-2 text-gray-600"><strong>2 </strong>Out of <strong>3</strong> Form Created</h2>
            <h2 className="text-sm mt-3 text-gray-600">Upgrade your plan for unlimited AI form build</h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
