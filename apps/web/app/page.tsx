import { prisma } from "@repo/db";

export default async function Home() {

const user = await prisma.user.findFirst();
  
  return (
    <div>
      <h1>email:</h1> 
      <h1>{user?.email}</h1>
      <h1>password: </h1>
      <h1>{user?.password}</h1>
    </div>
  );
}
