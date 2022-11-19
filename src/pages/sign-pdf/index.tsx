import { Page, Head, MultiStepForm, IButton, Sign } from "@/components";
import { meta } from "@/shared/meta";
import { useState } from "react";

const SignPDFPage = () => {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <Head title={meta.title} description={meta.description} />
      <article className="flex flex-col gap-10 w-full">
        <IButton
          text="簽名"
          onClick={() => setIsShowed(!isShowed)}
          className="w-[85px]"
        />
        <Sign
          isShowed={isShowed}
          activeModal={() => setIsShowed(!isShowed)}
          onSign={() => console.log("test")}
        />
        <MultiStepForm />
      </article>
    </Page>
  );
};

export default SignPDFPage;
