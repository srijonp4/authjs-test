'use client';
import { spawn } from 'child_process';
import React from 'react';
import { useRouter } from 'next/navigation';
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    // console.log('clicked');
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <span>todo: implement Modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
