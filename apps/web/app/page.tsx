import { client } from "@repo/db/clients";

export default async function Home() {
  try {
    const user = await client.user.findFirst();

    return (
      <div>
        First name haha: {user?.username}
        <br />
        Password: {user?.password}
      </div>
    );
  } catch (error) {
    console.error("🔥 Server error in Home:", error);
    return <div>Something went wrong: {(error as Error).message}</div>;
  }
}
