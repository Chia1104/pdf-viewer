import { Page, Head, Button, Card, FlowDot } from "@/components";
import { UploadIcon, SignIcon, LogoIcon } from "@/components/icons";
import { meta } from "@/shared/meta";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <Page className="index c-container flex items-center justify-center h-screen">
      <Head title={meta.title} description={meta.description} />
      <article>
        <Card className="w-full max-w-[824px] py-6 text-primary font-semibold">
          <p className="border-b border-solid border-primary pl-20 pb-7">
            簡單、快速3步驟
            <br />
            線上文件簽署即簽即傳
          </p>
          <div className="flex mt-12 px-5 py-8">
            <FlowDot>
              <UploadIcon />
            </FlowDot>
            <FlowDot>
              <SignIcon />
            </FlowDot>
            <FlowDot>
              <LogoIcon />
            </FlowDot>
          </div>
          <ol className="px-4 flex justify-between w-full">
            <li>上傳簽署檔案</li>
            <li>進行簽署</li>
            <li className="after:hidden">簽署完成</li>
          </ol>
          <Button
            className="w-[120px] mx-auto mt-16"
            onClick={() => router.push("/sign-pdf")}>
            開始試用
          </Button>
        </Card>
      </article>
    </Page>
  );
};

export default Home;
