"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("Footer");

  interface FooterItem {
    title: string;
    url?: string;
  }

  const items: FooterItem[] = [
    { title: "title1" },
    { title: "title2" },
    { title: "title3" },
    { title: "title4" },
    { title: "title5" },
  ];

  return (
    <footer className="duration-500 w-full text-sm py-8 px-16 bg-[#00529b] flex flex-col text-white space-y-3">
      <div className="flex flex-row space-x-6">
        {items.map((item) => (
          <Link
            href="/"
            key={item.title}
            className="border-r border-white pr-6 hover:font-bold"
          >
            {t(item.title)}
          </Link>
        ))}
      </div>
      <div>{t("copyright")}</div>
    </footer>
  );
};
