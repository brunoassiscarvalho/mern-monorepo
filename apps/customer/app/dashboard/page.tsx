"use client";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { createUser } from "../../lib/data";
import { useEffect } from "react";

export default withPageAuthRequired(function Page() {
  useEffect(() => {
    createUser({ name: "Bruno", email: "bruno123@test.com.br" })
      .then((res) => {
        console.log("User created:", res);
      })
      .catch((err: any) => {
        console.error("Error creating user:", err);
      })
      .finally(() => {
        console.log("User creation process completed.");
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg mb-6">Welcome to the customer dashboard!</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="/customers"
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Customers</h2>
          <p className="text-gray-600">View, add, edit, and delete customers</p>
        </a>

        <a
          href="/customers/new"
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Add New Customer</h2>
          <p className="text-gray-600">Create a new customer record</p>
        </a>
      </div>
    </div>
  );
});
