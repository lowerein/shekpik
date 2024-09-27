import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("ShekPikWai");

  return (
    <div className="">
      <h1 className="text-[#783F04] font-bold text-2xl pb-8">{t("title")}</h1>

      <div className="px-4 float-right w-1/3 flex items-center flex-col">
        <Image
          alt="image1"
          src="/image/ShekPikWai/image1.png"
          width={300}
          height={200}
          className="py-6"
        />

        <p className="my-2 text-center">{t("desc1_1")}</p>
        <p className="my-2 text-center">{t("desc1_2")}</p>

        <Image
          alt="image2"
          src="/image/ShekPikWai/image2.png"
          width={300}
          height={200}
          className="py-6"
        />

        <p className="my-2 text-center">{t("desc2_1")}</p>
        <p className="my-2 text-center">{t("desc2_2")}</p>
      </div>

      <div className="flex flex-col h-full">
        {Array.from(Array(6).keys()).map((index) => (
          <p key={`content${index}`} className="my-2">
            {t(`content${index + 1}`)}
          </p>
        ))}

        <div className="flex flex-col flex-grow justify-end">
          <div className="border-t pb-16 space-y-2">
            {Array.from(Array(6).keys()).map((index) => (
              <p className="" key={`citation${index}`}>
                <span className="text-xs align-top mx-1">{index + 1}</span>
                {t(`citation${index + 1}`)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
