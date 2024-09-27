import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-cover bg-[url('/image/bg2.png')]">
      <Navbar />
      <div className="flex flex-grow flex-row">
        <Sidebar />
        <div className="bg-white flex p-12">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
