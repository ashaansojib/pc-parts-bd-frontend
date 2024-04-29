import Profile from '@/app/dashboard/shared/Profile';
import React from "react";
interface layoutPros {
    children: React.ReactNode
}
const layout = ({ children }: layoutPros) => {
  return <div>
    <Profile />
    {children}
    </div>;
};

export default layout;
