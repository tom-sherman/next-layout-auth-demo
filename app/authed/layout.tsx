import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await checkAuth())) {
    redirect("/");
  }

  return <h1>Hello authenticated user!</h1>;
}

async function checkAuth() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return cookies().get("password")?.value === "hunter2";
}
