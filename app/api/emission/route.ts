import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {

    const body = await req.json()

    const record = await prisma.emissionRecord.create({
      data: {
        userId: "test-user",   // TEMP FIX

        electricity: Number(body.electricity || 0),
        diesel: Number(body.diesel || 0),
        gas: Number(body.gas || 0),
        water: Number(body.water || 0),
        travel: Number(body.travel || 0),
        waste: Number(body.waste || 0),
        purchase: Number(body.purchase || 0),
        employees: Number(body.employees || 0),
        total: Number(body.total || 0),
      },
    })

    return NextResponse.json(record)

  } catch (error) {
    console.error("API ERROR:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}