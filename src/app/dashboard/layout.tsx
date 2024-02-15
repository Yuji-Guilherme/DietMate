import { ReactNode } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { UserTopBar } from '@/components/UserTopBar';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Sidebar />
      <UserTopBar />
      {children}
    </>
  );
}
