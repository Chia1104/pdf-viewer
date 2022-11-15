import { Page, Button, PDFViewer, IButton, Head } from "@/components";
import { meta } from "@/shared/meta";
import { type GetServerSideProps } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  return {
    props: { session },
  };
};

const Home = () => {
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <Head title={meta.title} description={meta.description} />
      <article className="flex flex-col gap-10 w-full">
        <IButton text="簽名" />
        <IButton text="日期" disabled />
        <Button text="Home Page" />
        <Button text="Cancel" customType="cancel" />
        <Button text="Disable" disabled />
        <PDFViewer />
      </article>
    </Page>
  );
};

export default Home;
