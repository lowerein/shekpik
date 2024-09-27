import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("Navbar");
  return (
    <>
     {t('title1')}
    </>
  );
}
