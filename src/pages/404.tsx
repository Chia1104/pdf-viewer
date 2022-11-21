import { Card, Button } from "@/components";
import { useRouter } from "next/router";

const HistoryPage = () => {
  const router = useRouter();

  return (
    <div className="relative mt-20 h-[calc(100vh-80px)]">
      <Card className="absolute top-[50%] translate-y-[-50%] mx-auto py-5 w-1/2 text-center text-primary font-semibold">
        <p className="text-xl">
          Oops! <br /> 查無此頁
        </p>
        <Button className="mx-auto mt-5 py-1" onClick={() => router.push("/")}>
          回首頁
        </Button>
      </Card>
    </div>
  );
};

export default HistoryPage;
