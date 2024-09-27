import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const Sidebar = () => {
  interface SidebarItem {
    title: string;
    url?: string;
  }

  const t = useTranslations("Sidebar");

  const items: SidebarItem[] = [
    {
      title: "title1",
    },
    {
      title: "title2",
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
    {
      title: "title6",
    },
  ];

  return (
    <div className="p-12 space-y-8 w-fit h-full flex flex-col bg-[#244144] text-white text-2xl">
      {items.map((item) => (
        <Link href="/" className="hover:scale-110 text-nowrap" key={item.title}>{t(item.title)}</Link>
      ))}
    </div>
  );
};
