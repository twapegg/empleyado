import { NextResponse } from "next/server";
import data from "@/data/db.json";

export const POST = async (req: any) => {
  const { email, password } = await req.json();

  // get users table from db.json
  const users = data.users;

  // find user by email and password
  const user = users.find(
    (user: { id: number; name: string; email: string; password: string }) =>
      user.email === email && user.password === password
  );

  if (user) {
    return NextResponse.json(user.id, {
      status: 200,
    });
  }

  return NextResponse.error();
};
