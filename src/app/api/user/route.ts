import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { hash } from "bcrypt";
import * as z from "zod"

const userSchema = z
  .object({
    name: z.string().min(1, 'name is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password } = userSchema.parse(body);

    //check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already Exists" },
        { status: 409 }
      );
    }

    const hashedPassword=await hash(password,10)
    const newUser=await prisma.user.create({
        data: {
            name,
            email,
            password:hashedPassword
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password:newUserPassword, ...rest}=newUser

    return NextResponse.json({user:rest,message:"User Created Successfully"},{status:201});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
