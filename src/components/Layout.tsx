import { ReactNode } from 'react';
import '../styles/layout.css';

interface LayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div className="layout">
      {/* sidebar && <aside className="layout__sidebar layout__sidebar--left">{sidebar}</aside> */}
      <aside className="layout__sidebar layout__sidebar--left">{sidebar}</aside>
      <div className="layout__content">
        {children}
      </div>
      <aside className="layout__sidebar layout__sidebar--right"></aside>
    </div>
  );
}
