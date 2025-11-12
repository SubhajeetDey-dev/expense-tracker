import {
  House,
  BanknoteArrowDown,
  TicketsPlane,
  CircleCheckBig,
  Settings2,
  Phone,
} from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/user.png";
import Link from "next/link";

export default function layout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* left sidebar */}
      <div className="w-1/6 bg-gray-600 h-screen">
        <div className="">
          <ul className="mx-auto">
            <div>
              <li>
                <Image
                  src={profilePic}
                  alt="user image"
                  className="rounded-full object-cover p-4 w-48 h-48 mx-auto"
                />
              </li>
              <li className="text-center font-bold text-2xl text-white">
                Hi, user
              </li>
            </div>
            <div className="ml-10 pl-7">
              <Link href="/" className="">
                <li className="font-bold text-xl text-white mx-auto flex p-3 border-none rounded-2xl m-4 cursor-pointer items-center gap-3">
                  <House className="w-6 h-6" />
                  <span>Home</span>
                </li>
              </Link>
              <Link href="/expenses">
                <li className="font-bold text-xl text-white mx-auto flex p-3 border-none rounded-2xl m-4 cursor-pointer items-center gap-3">
                  <BanknoteArrowDown className="w-6 h-6" />
                  <span>Expenses</span>
                </li>
              </Link>
              <Link href="/trip">
                <li className="font-bold text-xl text-white mx-auto flex p-3 border-none rounded-2xl m-4 cursor-pointer items-center gap-3">
                  <TicketsPlane className="w-6 h-6" />
                  <span>Trip</span>
                </li>
              </Link>
              <Link href="/approvals">
                <li className="font-bold text-xl text-white mx-auto flex p-3 border-none rounded-2xl m-4 cursor-pointer items-center gap-3">
                  <CircleCheckBig className="w-6 h-6" />
                  <span>Approvals</span>
                </li>
              </Link>
              <Link href="/settings">
                <li className="font-bold text-xl text-white mx-auto flex p-3 border-none rounded-2xl m-4 cursor-pointer items-center gap-3">
                  <Settings2 className="w-6 h-6" />
                  <span>Settings</span>
                </li>
              </Link>
              <Link href="/support">
                <li className="font-bold text-xl text-white mx-auto flex p-3 border-none rounded-2xl m-4 cursor-pointer items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span>Support</span>
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      {/* ===== Right Content (changes per route) ===== */}
      <div className="w-5/6 bg-gray-100 p-8">{children}</div>
    </div>
  );
}
