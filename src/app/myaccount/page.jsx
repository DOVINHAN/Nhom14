import React from "react";
import Link from "next/link";
const AccountDetails = () => {
  return (
    <div className="w-3/4 border p-6 bg-white shadow-sm rounded-md ml-4">
      <h3 className="font-bold text-lg mb-2">Hello Tester (not Tester? <Link href="/logandreg">Sign out</Link>)</h3>
      <p className="text-gray-600">
        From your account dashboard, you can view your recent orders, manage
        your shipping and billing addresses, and edit your password and account
        details.
      </p>
    </div>
  );
};

export default AccountDetails;
