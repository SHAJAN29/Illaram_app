// ✅ This is the file for: app/admin/dashboard/UserData/PhysicalAssessmentForm/[userName]/page.tsx


import BlueSpinLoder from '@/components/Loder/blueSpinLoder';
import AdminPhysicalAssessmentForm from '../../../component/PhysicalAssessmentForm';
import { Suspense } from 'react';

interface PageProps {
  params: Promise<{
    userName: string;
  }>;
}

export default async function Page({ params }: PageProps) {

   
      const { userName } = await params;
   
   


  return (
    <Suspense fallback={<BlueSpinLoder />}>
      <AdminPhysicalAssessmentForm userName={userName} />
    </Suspense>
  );
    
}