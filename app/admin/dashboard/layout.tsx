// app/admin/layout.tsx
import AdminSidebar from "./component/AdminSidebar"; // Sidebar component for admin

export const Metadata = {
  title: "Admin Dashboard",
};

interface AdminLayoutProps {
  children: React.ReactNode;
}
export default function AdminLayout({ children }:  AdminLayoutProps) {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}



// if (user.role !== 'admin') {
//     return res.status(403).json({ message: 'Forbidden: Admin access required' });
//   }