"use client"

import { useState } from "react"

export default function AddEmissionPage() {

  const [form, setForm] = useState({
    electricity: "",
    diesel: "",
    gas: "",
    water: "",
    travel: "",
    waste: "",
    purchase: "",
    employees: "",
  })

  const total =
    Number(form.electricity || 0) +
    Number(form.diesel || 0) +
    Number(form.gas || 0) +
    Number(form.water || 0) +
    Number(form.travel || 0) +
    Number(form.waste || 0) +
    Number(form.purchase || 0) +
    Number(form.employees || 0)

  const handleSubmit = async () => {

    await fetch("/api/emission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        total,
      }),
    })

    alert("Emission record added successfully!")

  }

  const update = (key: string, value: string) => {
    setForm({ ...form, [key]: value })
  }

  return (
    <div className="max-w-3xl space-y-6">

      <h1 className="text-2xl font-semibold">Add Emission Record</h1>

      <div className="grid grid-cols-2 gap-4">

        <input
          placeholder="Electricity"
          value={form.electricity}
          onChange={(e) => update("electricity", e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Diesel"
          value={form.diesel}
          onChange={(e) => update("diesel", e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Gas"
          value={form.gas}
          onChange={(e) => update("gas", e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Water"
          value={form.water}
          onChange={(e) => update("water", e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Travel"
          value={form.travel}
          onChange={(e) => update("travel", e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Waste"
          value={form.waste}
          onChange={(e) => update("waste", e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Purchase"
          value={form.purchase}
          onChange={(e) => update("purchase", e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Employees"
          value={form.employees}
          onChange={(e) => update("employees", e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded"
        />

      </div>

      <div className="text-lg font-semibold">
        Total: {total} kg
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-500 px-6 py-3 rounded text-black font-semibold"
      >
        Save Record
      </button>

    </div>
  )
}