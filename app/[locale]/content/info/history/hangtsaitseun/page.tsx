import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("History_HangTsaiTseun");

  return (
    <div className="w-full">
      <h1 className="text-[#783F04] font-bold text-2xl pb-8">{t("title")}</h1>

      <div className="px-4 float-right w-1/3 flex items-center flex-col">
        <Image
          alt="image1"
          src="/image/HangTsaiTseun/image1.jpg"
          width={300}
          height={200}
          className="py-6"
        />

        <p className="my-2 text-center">{t("desc1_1")}</p>

        <Image
          alt="image2"
          src="/image/HangTsaiTseun/image2.jpg"
          width={300}
          height={200}
          className="py-6"
        />

        <p className="my-2 text-center">{t("desc2_1")}</p>
      </div>

      <div className="flex flex-col h-full">
        {Array.from(Array(4).keys()).map((index) => (
          <p key={`content${index}`} className="my-2">
            {t(`content${index + 1}`)}
          </p>
        ))}

        <div className="flex flex-col flex-grow justify-end">
          <div className="border-t pb-16 space-y-2">
            {Array.from(Array(10).keys()).map((index) => (
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
