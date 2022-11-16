import { Page, Button, IButton, Head } from "@/components";
import { meta } from "@/shared/meta";

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
      </article>
    </Page>
  );
};

export default Home;
