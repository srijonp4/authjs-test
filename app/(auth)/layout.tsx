import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-red-500 text-yellow-500"> This is a Navbar</div>
      {children}
    </div>
  );
};

export default AuthLayout;
