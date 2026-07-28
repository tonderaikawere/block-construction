import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "API is online" });
}

export async function POST(request: Request) {
  try {
    // Handle both JSON and form data
    const contentType = request.headers.get("content-type") || "";
    let data: any = {};

    if (contentType.includes("application/json")) {
      data = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    } else {
      const text = await request.text();
      data = { rawText: text };
    }

    console.log("Contact form submission received:", data);

    // In a real application, you would send an email or save to a database here.
    return NextResponse.json({
      success: true,
      message: "Form submission received successfully!",
      receivedData: data,
    });
  } catch (error: any) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
