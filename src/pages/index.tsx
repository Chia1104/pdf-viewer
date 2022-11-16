import { Page, Head, Button, Card } from "@/components";
import { meta } from "@/shared/meta";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <Head title={meta.title} description={meta.description} />
      <article className="flex flex-col gap-10 w-full justify-center items-center">
        <Card className="w-full max-w-[823px]">
          <Button
            className="w-[120px]"
            onClick={() => router.push("/sign-pdf")}>
            開始試用
          </Button>
        </Card>
      </article>
    </Page>
  );
};

export default Home;
