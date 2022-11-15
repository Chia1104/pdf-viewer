import { Page, Button, PdfViewer, IButton } from "@/components";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <div className="flex flex-col gap-10 w-full">
        <IButton text="簽名" />
        <IButton text="日期" disabled />
        <Button text="Home Page" />
        <Button text="Cancel" customType="cancel" />
        <Button text="Disable" disabled />
        {session ? (
          <Button text="Logout" onClick={() => signOut()} />
        ) : (
          <Button text="Login" onClick={() => signIn("google")} />
        )}
        <PdfViewer />
      </div>
    </Page>
  );
};

export default Home;
