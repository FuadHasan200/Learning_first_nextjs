import { getServerSession } from "next-auth";
import LoginBtn from "./components/LogInBtn";
import UserInfo from "./components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import LogOut from "./components/LogOut";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="mt-40 ml-40">
      {session?.user ? <LogOut /> : <LoginBtn />}
      <p>
        <UserInfo />
      </p>
      <p className="font-semibold text-2xl my-5">From server component : </p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
