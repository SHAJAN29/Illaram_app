// app/user/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 font-[Poppins]">
      <nav className="bg-white shadow p-4 font-bold text-xl">
        Illaram Dashboard
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
// app/user/dashboard/layout.tsx
