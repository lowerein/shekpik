"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
// import { useScrollDirection } from "@/hooks/useScrollDirection";

export const Navbar = ({ isSticky = false }: { isSticky?: boolean }) => {
  const t = useTranslations("Navbar");

  // const scrollDirection = useScrollDirection();

  interface NavbarItem {
    title: string;
    url?: string;
    children?: NavbarItem[];
  }

  const items: NavbarItem[] = [
    {
      title: "title1",
      children: [
        { title: "subtitle1_1", url: "/content/intro/background" },
        { title: "subtitle1_2", url: "/content/intro/methodology" },
      ],
    },
    {
      title: "title2",
      children: [
        { title: "subtitle2_1", url: "/content/info/chronology" },
        { title: "subtitle2_2", url: "/content/info/culture" },
        { title: "subtitle2_3", url: "/content/info/history/shekpikwai" },
      ],
    },
    {
      title: "title3",
    },
    {
      title: "title4",
    },
    {
      title: "title5",
    },
  ];

  return (
    <div
      className={`z-50 ${
        isSticky ? "sticky h-0 top-0" : ""
      } transition-opacity duration-500 w-full bg-transparent`}
    >
      <div className={`py-4 px-16 flex flex-row`}>
        <div className="relative">
          <Image
            alt="logo"
            src="/image/logo.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "40%", height: "auto" }}
          />
        </div>

        <div className="flex flex-col flex-grow">
          <div className="h-1/2 items-center justify-end flex">
            <LocaleSwitcher />
          </div>
          <div className="flex flex-row justify-between h-1/2 items-center">
            {items.map((item) => (
              <div
                className="group relative flex-grow text-center"
                key={item.title}
              >
                <Link
                  className="text-white text-2xl font-bold  hover:text-black"
                  href="/"
                >
                  {t(item.title)}
                </Link>

                {item.children && (
                  <div className="bg-white/50 w-auto opacity-0 my-2 py-2 px-4 absolute z-50 flex flex-grow flex-col group-hover:opacity-100 transition-opacity duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.url ? child.url : "/"}
                        className="py-2 last:border-0 text-slate-600 border-slate-600 border-b-2 hover:text-slate-900 font-bold text-xl"
                      >
                        {t(child.title)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
