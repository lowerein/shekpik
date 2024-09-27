import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import ReactPageScroller from "react-page-scroller";
import { Footer } from "@/components/Footer/Footer";

export default function AboutPage() {
  const t = useTranslations("Navbar");
  return (
    <>
     {t('title1')}
    </>
  );
}
