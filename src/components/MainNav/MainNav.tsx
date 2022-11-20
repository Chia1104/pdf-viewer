import { type FC } from "react";
import Logo from "../../../public/logo.svg";
import { Avatar, Image } from "@/components";
import { meta } from "@/shared/meta";
import { useSession, signIn, signOut } from "next-auth/react";
import { Popover } from "@geist-ui/core";
import Link from "next/link";

const MainNav: FC = () => {
  const { data: session } = useSession();
  const userInfo = () => (
    <>
      <Popover.Item title>
        <span>{session?.user?.name ?? "您尚未登入"}</span>
      </Popover.Item>
      <Popover.Item>
        <button onClick={() => signOut()}>登出</button>
      </Popover.Item>
    </>
  );
  return (
    <nav className="w-screen flex h-[80px] items-center justify-center top-0 fixed z-50 bg-white border border-b-secondary sm:border-0">
      <div className="flex container w-[100%]">
        <div className="flex items-center w-[50%] justify-start">
          <Image
            src={Logo}
            alt="logo"
            width={48}
            height={48}
            className="justify-self-start ml-[30px] mr-[10px]"
          />
          <h1
            className="text-primary"
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.05em",
            }}>
            <Link href="/">
              <a>{meta.title}</a>
            </Link>
          </h1>
        </div>
        <ul className="flex items-center w-[50%] justify-end mr-[36px]">
          <li>
            {session ? (
              <Popover
                enterDelay={0}
                leaveDelay={0}
                content={userInfo}
                placement="bottom"
                portalClassName="min-w-[230px]">
                <Avatar
                  username={session.user?.name as string}
                  url={session.user?.image as string}
                  ratio={35}
                />
              </Popover>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="text-primary"
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "0.05em",
                }}>
                登入/註冊
              </button>
            )}
          </li>
          {session && (
            <li className="">
              <Link href="/history">
                <a
                  className="text-primary ml-[29px]"
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: "0.05em",
                  }}>
                  簽署紀錄
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
