import { getGroups } from "@/lib/community.db";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json(await getGroups());
};
