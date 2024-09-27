"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export const LocaleSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const locales: { content: string; locale: "cn" | "zh" }[] = [
    { content: "繁", locale: "zh" },
    { content: "简", locale: "cn" },
  ];

  return (
    <div className="bg-white/50 text-lg rounded-full flex flex-row px-2 text-white space-x-1 items-center">
      {locales.map((locale) => (
        <div
          key={locale.locale}
          onClick={() => router.replace(pathname, { locale: locale.locale })}
          className={`cursor-pointer hover:font-bold ${
            currentLocale === locale.locale ? " border-b-2 border-orange-600" : ""
          }`}
        >
          {locale.content}
        </div>
      ))}
    </div>
  );
};
