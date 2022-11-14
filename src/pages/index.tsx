import { Page, Button } from "@/components";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <Page className="c-container flex items-center justify-center h-screen">
      <div className="flex flex-col gap-10">
        <Button text="Home Page" />
        {session ? (
          <Button text="Logout" onClick={() => signOut()} />
        ) : (
          <Button text="Login" onClick={() => signIn("google")} />
        )}
      </div>
    </Page>
  );
};

export default Home;
