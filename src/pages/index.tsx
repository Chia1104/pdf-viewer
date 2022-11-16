import { Page, Head, Button, Card, FlowDot } from "@/components";
import { UploadIcon, SignIcon, LogoIcon } from "@/components/icons";
import { meta } from "@/shared/meta";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <Head title={meta.title} description={meta.description} />
      <article className="">
        <Card className="w-full max-w-[824px] py-6">
          <p className="border-b border-solid border-primary pl-20 pb-7 text-primary font-semibold">
            簡單、快速3步驟
            <br />
            線上文件簽署即簽即傳
          </p>
          <div className="flex">
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
          <Button
            className="w-[120px] mx-auto"
            onClick={() => router.push("/sign-pdf")}>
            開始試用
          </Button>
        </Card>
      </article>
    </Page>
  );
};

export default Home;
