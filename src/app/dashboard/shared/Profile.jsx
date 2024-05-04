import Link from "next/link";
import React from "react";
const Profile = () => {
  return (
    <div className="text-center">
      <Link href="/">
        <h3 className="text-3xl border-b-2 font-bold">
          PCParts<span className="text-accent">BD</span>
        </h3>
      </Link>
    </div>
  );
};

export default Profile;
