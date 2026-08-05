import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** เก็บสัญญาณ SEO จาก URL WordPress เดิมและตัด query เดิมออก */
export function proxy(request: NextRequest) {
  return NextResponse.redirect(
    new URL("/service/lang-washing-machine", request.url),
    308,
  );
}

export const config = {
  matcher: [
    {
      source: "/",
      has: [{ type: "query", key: "page_id", value: "238" }],
    },
  ],
};
