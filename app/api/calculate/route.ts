import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RequestBody = {
  electricity?: number | string;
  diesel?: number | string;
};

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();

    const electricity = Number(body.electricity) || 0;
    const diesel = Number(body.diesel) || 0;

    const electricityEmission = electricity * 0.82;
    const dieselEmission = diesel * 2.68;
    const totalEmission = electricityEmission + dieselEmission;

    // Save record to database
   await prisma.emissionRecord.create({
  data: {
    electricity,
    diesel,
    total: totalEmission,
    companyId: "cmm7kvm0x0000o0v0h0tuqssg",
  },
});
    return NextResponse.json({ totalEmission });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
