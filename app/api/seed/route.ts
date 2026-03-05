import { prisma } from "@/lib/prisma"

export async function GET() {
  // 1️⃣ Create company
  const company = await prisma.company.create({
    data: {
      name: "Envify Test Company",
    },
  })

  // 2️⃣ Create emission records linked to company
  await prisma.emissionRecord.createMany({
    data: [
      {
        electricity: 500,
        diesel: 200,
        gas: 100,
        water: 50,
        travel: 80,
        waste: 40,
        purchase: 120,
        employees: 60,
        total: 1150,
        companyId: company.id,
      },
      {
        electricity: 400,
        diesel: 150,
        gas: 80,
        water: 40,
        travel: 60,
        waste: 30,
        purchase: 90,
        employees: 50,
        total: 900,
        companyId: company.id,
      },
    ],
  })

  return Response.json({ message: "Seeded successfully" })
}