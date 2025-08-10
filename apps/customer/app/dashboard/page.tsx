"use client";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the customer dashboard!</p>
      {/* Add more dashboard content here */}
    </div>
  );
});
