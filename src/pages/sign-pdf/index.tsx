import { Page, Head, MultiStepForm } from "@/components";
import { meta } from "@/shared/meta";

const SignPDFPage = () => {
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <Head title={meta.title} description={meta.description} />
      <article className="flex flex-col gap-10 w-full justify-center items-center px-5">
        <MultiStepForm />
      </article>
    </Page>
  );
};

export default SignPDFPage;
