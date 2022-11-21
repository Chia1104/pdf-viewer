import { type GetServerSideProps } from "next";
import { getServerSession } from "@/utils/get-server-session.util";
import { Card, Button } from "@/components";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const HistoryPage = () => {
  const router = useRouter();

  return (
    <div className="relative mt-20 h-[calc(100vh-80px)]">
      <Card className="absolute top-1/2 translate-y-[-50%] mx-auto py-5 w-1/2 text-center text-primary font-semibold">
        <p>~此功能尚未完工~</p>
        <p>敬啟期待</p>
        <Button className="mx-auto mt-5 py-1" onClick={() => router.push("/")}>
          回首頁
        </Button>
      </Card>
    </div>
  );
};

export default HistoryPage;
