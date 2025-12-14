import { ReactNode } from 'react';
import '../styles/sidebar.css';

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <nav className="sidebar">
      {children}
    </nav>
  );
}
