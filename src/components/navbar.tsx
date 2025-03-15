import { Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between bg-amber-300 p-4">
      <Image src={"/logo.png"} alt="" width={40} height={40}></Image>
      <Menu />
    </div>
  );
};

export default Navbar;
