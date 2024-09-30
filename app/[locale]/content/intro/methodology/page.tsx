import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Methodology");

  return (
    <div className="w-full">
      <h1 className="text-[#783F04] font-bold text-2xl pb-8">{t("title")}</h1>

      <div className="flex flex-col h-full">
        {Array.from(Array(6).keys()).map((index) => (
          <p key={`content${index}`} className="my-2">
            {t(`content${index + 1}`)}
          </p>
        ))}
      </div>
    </div>
  );
}
