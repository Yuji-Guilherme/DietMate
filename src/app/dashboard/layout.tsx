import { ReactNode } from 'react';
import { Sidebar } from '@/components/Sidebar';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
