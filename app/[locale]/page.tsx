"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import ReactPageScroller from "react-page-scroller";
import { Footer } from "@/components/Footer/Footer";

export default function HomePage() {
  const t = useTranslations("StartPage");

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Navbar isSticky={true} />

      <ReactPageScroller>
        <div className="h-full relative">
          <Image
            src="/image/bg1.png"
            alt="bg"
            fill
            className="-z-10"
            priority={true}
          />
          <div className="h-full flex justify-center items-center">
            <div
              className={`text-white text-6xl font-semibold duration-500 transition-all ${
                visible ? "opacity-100" : "opacity-0 translate-y-full"
              }`}
            >
              {t("title")}
            </div>
          </div>
        </div>

        <div className="h-full relative">
          <Image
            src="/image/bg2.png"
            alt="bg"
            fill
            className="-z-10"
            priority={true}
          />
          <div className="flex flex-col h-full">
            <div className="flex justify-center items-center flex-grow">
              <div
                className={`text-white cursor-pointer text-6xl font-semibold duration-500 transition-all hover:scale-110 ${
                  visible ? "opacity-100" : "opacity-0 translate-y-full"
                }`}
              >
                {t("subtitle")}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </ReactPageScroller>
    </>
  );
}
