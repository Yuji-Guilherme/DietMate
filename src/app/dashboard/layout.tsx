import type { ReactNode } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { setUser } from '@/utils/user';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default async function DashboardLayout({
  children
}: DashboardLayoutProps) {
  await setUser();

  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
