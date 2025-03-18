"use client";
import { FrontendRoutes } from "@/conifg/apiRoutes";
import {
  BookOpenTextIcon,
  HomeIcon,
  MenuIcon,
  NotebookPenIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-wrap items-center justify-between bg-amber-300 p-4">
      <Image src={"/logo.png"} alt="" width={40} height={40} />
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md p-1 transition-all hover:scale-105 hover:bg-gray-100/40">
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Login | My Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel onClick={() => router.push("/")}>
            <HomeIcon />
            <span>Home</span>
          </DropdownMenuLabel>
          <DropdownMenuLabel
            onClick={() => router.push(FrontendRoutes.COURSE_LIST)}
          >
            <BookOpenTextIcon />
            <span>Subjects</span>
          </DropdownMenuLabel>
          <DropdownMenuLabel
            onClick={() => router.push(FrontendRoutes.PLANNER)}
          >
            <NotebookPenIcon />
            <span>Planners</span>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
