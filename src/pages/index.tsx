import { Page, Head, PDFViewer } from "@/components";
import { meta } from "@/shared/meta";

const Home = () => {
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <Head title={meta.title} description={meta.description} />
      <article className="flex flex-col gap-10 w-full">
        <PDFViewer />
      </article>
    </Page>
  );
};

export default Home;
