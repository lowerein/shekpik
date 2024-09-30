import { Link } from "@/i18n/routing";
import { SidebarItem } from "@/interface/SidebarItem";

export const Sidebar = ({ items }: { items: SidebarItem[] }) => {
  return (
    <div className="p-12 space-y-8 w-fit h-full flex flex-col bg-[#244144] text-white text-2xl">
      {items.map((item) => (
        <Link
          href={item.url ? item.url : "/"}
          className="hover:scale-110 text-nowrap"
          key={item.title}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
