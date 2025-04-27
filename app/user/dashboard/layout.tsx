// app/user/dashboard/layout.tsx
import DashboardNavbar from "../../user/dashboard/components/navDash"; // Path to your dashboard navbar

export const metadata = {
  title: "User Dashboard",
};

export const segmentConfig = {
  reset: true, // Ensure this layout does not inherit from the global layout
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 font-[Poppins]">
      <DashboardNavbar /> {/* Dashboard navbar */}
      <main className="p-6">{children}</main>
    </div>
  );
}
