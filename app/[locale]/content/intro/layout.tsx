import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useTranslations } from "next-intl";
import { SidebarItem } from "@/interface/SidebarItem";

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Sidebar_Introduction");

  const items: SidebarItem[] = [
    {
      title: t("title1"),
      url: "/content/intro/background"
    },
    {
      title: t("title2"),
      url: "/content/intro/methodology"
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('/image/bg2.png')]">
      <Navbar />
      <div className="flex flex-grow flex-row">
        <Sidebar items={items} />
        <div className="bg-white flex p-12">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
