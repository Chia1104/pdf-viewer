import { type GetServerSideProps } from "next";
import { getServerSession } from "@/utils/get-server-session.util";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

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
  return (
    <div>
      <h1>History</h1>
    </div>
  );
};

export default HistoryPage;
