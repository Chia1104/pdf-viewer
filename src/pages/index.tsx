import { Page, Head, Button, Card } from "@/components";
import { FlowDot, FlowDesc } from "@/components/HomePage";
import { UploadIcon, SignIcon, LogoIcon } from "@/components/icons";
import { meta } from "@/shared/meta";
import { useRouter } from "next/router";
import cx from "classnames";

const Home = () => {
  const router = useRouter();
  const icons = [UploadIcon, SignIcon, LogoIcon];
  const descs = ["上傳簽署檔案", "進行簽署", "簽署完成"];
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <Head title={meta.title} description={meta.description} />
      <article>
        <Card className="w-screen sm:w-full max-w-[824px] py-6 text-primary font-semibold">
          <p className="mt-[124px] sm:mt-0 py-3 sm:py-0 md:pl-20 sm:pb-6 text-center md:text-start text-xl md:text-base border-b border-solid border-[rgba(127, 171, 190, 0.6)]">
            簡單、快速3步驟
            <br />
            線上文件簽署即簽即傳
          </p>
          <div className="sm:flex sm:mt-12 px-5 py-8">
            {icons.map((Icon, index) => {
              return (
                <div key={index}>
                  <FlowDot count={index + 1}>
                    <Icon />
                  </FlowDot>
                  <p
                    className={cx(
                      "mt-3 sm:mt-1 md:hidden text-center",
                      index < 2 ? "mb-[60px] sm:mb-0" : ""
                    )}>
                    {descs[index]}
                  </p>
                </div>
              );
            })}
          </div>
          <FlowDesc descList={descs} />
          <Button
            className="w-[120px] mx-auto sm:mt-16 mb-2 sm:mb-0"
            onClick={() => router.push("/sign-pdf")}>
            開始試用
          </Button>
        </Card>
      </article>
    </Page>
  );
};

export default Home;
