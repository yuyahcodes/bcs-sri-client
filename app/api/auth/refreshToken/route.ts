import { cookies } from "next/headers"

export async function POST(request: Request) {
    const body = await request.json()

    const prefix = process.env.NODE_ENV === "development" ? "__Dev-" : ""

    const payload = {
        refreshToken: cookies().get(`${prefix}xxx.refresh-token` as any)?.value,
        userID: body.userID,
    }

    // change it with your own endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/refresh_token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(payload)
    })

    const data = await res.json()

    return Response.json({
        success: res.ok,
        status: res.status,
        data,
    })
}
