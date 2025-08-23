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
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the customer dashboard!</p>
      {/* Add more dashboard content here */}
    </div>
  );
});
