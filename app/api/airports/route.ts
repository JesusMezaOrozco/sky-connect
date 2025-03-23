import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");

  try {
    const response = await axios.get(
      `${process.env.AVIATION_STACK_BASE_URL}/airports`,
      {
        params: {
          access_key: process.env.AVIATION_STACK_API_KEY,
          limit,
          offset,
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch data from Aviation Stack API" },
      { status: 500 },
    );
  }
}
