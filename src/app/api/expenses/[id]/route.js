import { dbConnect } from "@/lib/dbConnect";
import { Expense } from "@/models/Expense.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET() {
  await dbConnect();
  const expenses = await Expense.find();
  return Response.json(expenses);
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const data = await req.json();
  await dbConnect();
  const expense = await Expense.create({
    ...data,
    user: session.user.id,
  });
  return Response.json(expense);
}
