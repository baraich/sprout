import { getTopicsUsingGroup } from "@/lib/community.db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async function (request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const topics = await getTopicsUsingGroup(+searchParams.get("groupId")!);
    return NextResponse.json(topics);
  } catch (_) {
    console.log(_);
    return NextResponse.json(
      { error: "Failed to fetch groups" },
      { status: 500 }
    );
  }
};
