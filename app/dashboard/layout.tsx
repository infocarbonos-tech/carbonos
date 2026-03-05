import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Sidebar from "./Sidebar"
import Header from "./Header"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="flex min-h-screen">

        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 p-6 lg:p-10">
            {children}
          </main>

        </div>
      </div>
    </div>
  )
}