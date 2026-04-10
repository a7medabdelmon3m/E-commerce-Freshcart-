"use client";

import * as React from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import logo from "../../../assets/image/Component 1.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { BiSupport } from "react-icons/bi";
import { CiHeart, CiMail } from "react-icons/ci";
import {
  FaBars,
  FaPhoneAlt,
  FaShoppingCart,
  FaTruck,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { IoIosGift, IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { MdLogout } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  cartContext,
  cartContextType,
  useCartContext,
} from "@/app/_context/CartContext";
import { UploadCloud } from "lucide-react";
import { getNumOfICartitems } from "@/app/(auth)/login/login.action";
import { FaRightFromBracket } from "react-icons/fa6";
const categoryList = [
  { name: "Electronics", id: "6439d58a0049ad0b52b9003f" },
  { name: "Women's Fashion", id: "6439d5b90049ad0b52b90048" },
  { name: "Men's Fashion", id: "6439d2d167d9aa4ca970649f" },
  { name: "Beauty & Health", id: "6439d40367d9aa4ca97064a8" },
];

export default function NavigationMenuDemo() {
  const router = useRouter();

  const { toggleSidebar } = useSidebar();
  const session = useSession();
  const userName = session.data?.user?.name;
  const isAuthanticated = session.status === "authenticated";
  const { numberOfCartItems, updateNumOfCartItems } =
    useCartContext() as cartContextType;
  // console.log(numberOfCartItems);

  return (
    <>
      <div className="border-y border-[#F3F4F6]  hidden lg:block ">
        <div className="container mx-auto px-4 ">
          <div className="  flex h-10 items-center justify-between">
            <div className=" flex gap-6">
              <span className="flex gap-2">
                <span className="text-main-color text-[15px]">
                  <FaTruck />
                </span>
                <p className="text-text-color font-medium leading-5 text-[14px]">
                  Free Shipping on Orders 500 EGP
                </p>
              </span>
              <span className="flex gap-2">
                <span className="text-main-color text-[15px]">
                  <IoIosGift />
                </span>
                <p className="text-text-color font-medium leading-5 text-[14px]">
                  New Arrivals Daily
                </p>
              </span>
            </div>
            <div className=" flex gap-6">
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex gap-1.5 items-center text-text-color hover:text-main-color"
                >
                  <span className=" text-[15px]">
                    <FaPhoneAlt />
                  </span>
                  <p className=" font-medium leading-5 text-[14px]">
                    +1 (800) 123-4567
                  </p>
                </a>
                <a
                  href="#"
                  className="flex gap-1.5 items-center text-text-color hover:text-main-color"
                >
                  <span className=" text-[15px]">
                    <CiMail />
                  </span>
                  <p className=" font-medium leading-5 text-[14px]">
                    support@freshcart.com
                  </p>
                </a>
              </div>

              <div className="w-px h-4 border border-[#E5E7EB]"></div>
              {isAuthanticated ? (
                <div className="flex gap-4">
                  <Link
                    href="/"
                    className="flex gap-1.5 items-center text-text-color hover:text-main-color"
                  >
                    <span className=" text-[15px]">
                      <FiUser />
                    </span>
                    <p className=" font-medium leading-5 text-[14px]">
                      {userName}
                    </p>
                  </Link>
                  <span
                    onClick={async () => {
                      await signOut({ redirect: false });
                      const resp = await getNumOfICartitems();
                      updateNumOfCartItems(resp?.products.length as number);
                      router.push("/");
                    }}
                    className="flex cursor-pointer gap-1.5 items-center text-text-color hover:text-main-color"
                  >
                    <span className=" text-[15px]">
                      <MdLogout />
                    </span>
                    <p className=" font-medium leading-5 text-[14px]">
                      Sign Out
                    </p>
                  </span>
                </div>
              ) : (
                <div className="flex gap-4">
                  <Link
                    href="/login"
                    className="flex gap-1.5 items-center text-text-color hover:text-main-color"
                  >
                    <span className=" text-[15px]">
                      <FiUser />
                    </span>
                    <p className=" font-medium leading-5 text-[14px]">
                      Sign In
                    </p>
                  </Link>
                  <Link
                    href="/register"
                    className="flex gap-1.5 items-center text-text-color hover:text-main-color"
                  >
                    <span className=" text-[15px]">
                      <FaUserPlus />
                    </span>
                    <p className=" font-medium leading-5 text-[14px]">
                      Sign Up
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)]">
        <NavigationMenu className=" max-w-384 mx-auto px-4  ">
          <div className=" container flex w-full items-center justify-between gap-6 list-none h-16 lg:h-18">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">
                  <Image
                    src={logo}
                    className=" min-w-31 min-h-6 w-31 h-6 lg:w-41.5 lg:h-8  shrink-0"
                    alt="freshcart logo"
                    priority
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <div className="relative hidden lg:flex  flex-1 max-w-md">
              <Input
                className="w-full h-auto bg-[#F9FAFB80] border border-[#E5E7EB] rounded-[33554400px] font-medium pt-3 pr-12 pb-3.25 pl-5 focus:ring-1 focus:ring-[#22c55e] focus:ring-offset-1"
                placeholder="Search for products, brands and more..."
              />
              <button className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-main-color rounded-full w-9 h-9 flex items-center justify-center hover:bg-main-color-hover">
                <IoSearch className="text-[14px] leading-4.25 text-white" />
              </button>
            </div>

            <div className="hidden xl:flex text-[16px] font-medium leading-6 items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="hover:text-main-color">
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className="hover:text-main-color">
                  <Link href="/products">Shop</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="p-0 m-0 bg-transparent hover:bg-transparent focus:bg-transparent hover:text-main-color cursor-pointer">
                  Categories
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-white">
                  <ul className="">
                    <li className="hover:bg-main-color-subtle">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/categories"
                          className="block select-none rounded-md py-2 px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">
                            All Categories
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {categoryList.map((item) => (
                      <li key={item.id} className="hover:bg-main-color-subtle">
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/products?category=${item.id}`}
                            className="block select-none rounded-md py-2 px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">
                              {item.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className="hover:text-main-color">
                  <Link href="/brands">Brands</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>

            <div className="flex items-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="hidden lg:flex">
                  <Link className="pr-2 mr-2" href="/">
                    <div className="flex gap-2 pr-2 border-r">
                      <div className="w-10 h-10 bg-[#F0FDF4] text-main-color flex items-center justify-center rounded-full text-[20px] leading-5">
                        <BiSupport />
                      </div>
                      <div className="text-xs leading-4">
                        <p className="text-text-color font-medium">Support</p>
                        <p className="font-semibold">24/7 Help</p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">
                    <div className="flex items-center justify-center w-11.25 h-11.25 rounded-full text-text-color hover:bg-[#F3F4F6] hover:text-main-color">
                      <CiHeart className="text-[25px] leading-5" />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/cart">
                    <div className="relative flex items-center justify-center w-11.25 h-11.25 rounded-full text-text-color hover:bg-[#F3F4F6] hover:text-main-color">
                      <FaShoppingCart className="text-[25px] leading-5" />
                      {numberOfCartItems > 0 && (
                        <div className="absolute w-5 h-5 bg-main-color flex items-center justify-center rounded-full top-0 right-0 text-[10px] leading-3.75 font-bold text-white border-2 border-white ">
                          {numberOfCartItems}
                        </div>
                      )}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {!isAuthanticated && (
                <NavigationMenuItem className="hidden lg:flex">
                  <NavigationMenuLink asChild>
                    <Link href="/login">
                      <div className="flex items-center justify-center gap-2 py-2.5 px-5 rounded-[33554400px] bg-main-color text-white font-semibold text-sm leading-5 hover:bg-main-color-hover">
                        <span>
                          <FiUser />
                        </span>
                        <span>Sign in</span>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}

              <NavigationMenuItem className="lg:hidden">
                <Button
                  onClick={toggleSidebar}
                  className="pl-1 w-11 h-11 bg-main-color rounded-full flex items-center justify-center text-white hover:bg-main-color-hover"
                >
                  <FaBars className="text-[20px]" />
                </Button>
              </NavigationMenuItem>
            </div>
          </div>
        </NavigationMenu>
      </div>

      <Sidebar
        style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
        className="max-w-none z-51"
        side="right"
      >
        <SidebarHeader className="p-0 border-b border-[#F3F4F6]">
          <div className="p-4 flex justify-between items-center">
            <Link href="/">
              <Image src={logo} alt="freshcart logo" />
            </Link>
            <button
              onClick={toggleSidebar}
              className="w-9 h-9 bg-[#F3F4F6] rounded-full flex items-center justify-center"
            >
              <IoMdClose className="text-xl" />
            </button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="p-4 border-b border-[#F3F4F6]">
            <div className="relative flex flex-1 max-w-md">
              <Input
                className="w-full h-auto bg-[#F9FAFB80] border border-[#E5E7EB] rounded-xl font-medium pt-3 pr-12 pb-3.25 pl-4 focus:ring-1 focus:ring-[#22c55e] focus:ring-offset-1 text-[14px]"
                placeholder="Search products..."
              />
              <button className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-main-color rounded-lg w-9 h-9 flex items-center justify-center hover:bg-main-color-hover">
                <IoSearch className="text-[14px] leading-4.25 text-white" />
              </button>
            </div>
          </SidebarGroup>
          <SidebarGroup className="px-4">
            <div className="py-4">
              <ul>
                <li className="px-3 py-4 font-medium leading-6 rounded-xl hover:bg-[#F0FDF4] hover:text-main-color transition-colors duration-300 ">
                  <Link href="/">Home</Link>
                </li>
                <li className="px-3 py-4 font-medium leading-6 rounded-xl hover:bg-[#F0FDF4] hover:text-main-color transition-colors duration-300 ">
                  <Link href="/products">Shop</Link>
                </li>
                <li className="px-3 py-4 font-medium leading-6 rounded-xl  hover:bg-[#F0FDF4] hover:text-main-color transition-colors duration-300">
                  <Link href="/">Categories</Link>
                </li>
                <li className="px-3 py-4 font-medium leading-6 rounded-xl hover:bg-[#F0FDF4] hover:text-main-color transition-colors duration-300 ">
                  <Link href="/brands">Brands</Link>
                </li>
              </ul>
            </div>
          </SidebarGroup>
          <SidebarGroup className="px-4">
            <div className="h-px border-t border-[#d6d6d7]"></div>
          </SidebarGroup>
          <SidebarGroup className="p-4">
            <div className="flex flex-col gap-1">
              <ul>
                <li className="px-3 py-4 font-medium leading-6 rounded-xl hover:bg-[#F0FDF4] hover:text-main-color transition-colors duration-300 ">
                  <Link href="/">
                    <div className="flex gap-3 items-center">
                      <div className="bg-[#FEF2F2] w-9 h-9 rounded-full flex items-center justify-center">
                        <CiHeart color="red" />
                      </div>
                      <span className="font-medium leading-6">Wishlist</span>
                      <div className=" ml-auto w-6 h-6 rounded-full py-1 px-2.5 flex items-center justify-center bg-[#FB2C36] text-white font-bold text-[12px] leading-4">
                        5
                      </div>
                    </div>
                  </Link>
                </li>
                <li className=" px-3 py-4 font-medium leading-6 rounded-xl hover:bg-[#F0FDF4] hover:text-main-color transition-colors duration-300 ">
                  <Link href="/cart">
                    <div className="flex gap-3 items-center">
                      <div className="bg-[#F0FDF4] w-9 h-9 rounded-full flex items-center justify-center">
                        <FaShoppingCart color="#16A34A" />
                      </div>
                      <span className="font-medium leading-6">Cart</span>
                      {numberOfCartItems >= 1 && (
                        <div className=" ml-auto w-6 h-6 rounded-full py-1 px-2.5 flex items-center justify-center bg-main-color text-white font-bold text-[12px] leading-4">
                          {numberOfCartItems}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </SidebarGroup>
          <SidebarGroup className="px-4">
            <div className="h-px border-t border-[#d6d6d7]"></div>
          </SidebarGroup>
          {isAuthanticated ? (
            <SidebarGroup className="p-4">
              <div className="flex flex-col gap-1">
                <ul>
                  <li className="px-3 py-4 font-medium leading-6 rounded-xl hover:bg-[#F0FDF4] hover:text-main-color transition-colors duration-300 ">
                    <Link href="/">
                      <div className="flex gap-3 items-center">
                        <div className="bg-gray-100 text-gray-500 w-9 h-9 rounded-full flex items-center justify-center">
                          <FiUser />
                        </div>
                        <span className="font-medium leading-6">Ahmed</span>
                      </div>
                    </Link>
                  </li>
                  <li className=" px-3 py-4 font-medium leading-6 rounded-xl hover:bg-red-50 hover:text-main-color transition-colors duration-300 ">
                    <Button
                      onClick={async () => {
                        await signOut({ redirect: false });
                        const resp = await getNumOfICartitems();
                        updateNumOfCartItems(resp?.products.length as number);
                        router.push("/");
                      }}
                      className="p-0"
                    >
                      <div className="flex gap-3 items-center">
                        <div className="bg-red-50 text-[#FB2C36] w-9 h-9 rounded-full flex items-center justify-center">
                          <FaRightFromBracket />
                        </div>
                        <span className="font-medium leading-6 text-[#FB2C36]">
                          Sign Out
                        </span>
                      </div>
                    </Button>
                  </li>
                </ul>
              </div>
            </SidebarGroup>
          ) : (
            <SidebarGroup className="px-4 py-6">
              <div className="flex gap-3">
                <Link
                  href={`/login/`}
                  className="rounded-xl h-auto flex-1 bg-main-color px-4 pt-[13.5px] pb-[14.5px] text-center text-[16px] font-semibold leading-6 text-white hover:bg-[#15803D]"
                >
                  Sign In
                </Link>
                <Link
                  href={`/register/`}
                  className="rounded-xl h-auto flex-1 border-2 border-main-color  px-4 pt-[13.5px] pb-[14.5px] text-center text-[16px] font-semibold leading-6 text-main-color hover:bg-[#F0FDF4]"
                >
                  Sign Up
                </Link>
              </div>
            </SidebarGroup>
          )}

          <SidebarGroup className="px-4">
            <div className="bg-[#F9FAFB] flex gap-3 rounded-xl  border border-[#F3F4F6] p-4 hover:bg-[#F0FDF4] ">
              <div className="w-10 h-10 bg-main-color-subtle text-main-color rounded-full flex items-center justify-center ">
                <BiSupport className="text-[20px]" />
              </div>
              <div>
                <p className="text-[14px] leading-5 font-semibold">
                  Need Help?
                </p>
                <p className="text-main-color text-[14px] leading-5 font-medium">
                  Contact Support
                </p>
              </div>
            </div>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}

function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { href: string; title?: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
