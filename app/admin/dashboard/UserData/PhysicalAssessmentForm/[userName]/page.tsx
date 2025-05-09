import BlueSpinLoder from '@/components/Loder/blueSpinLoder';
import AdminPhysicalAssessmentForm from '../../../component/PhysicalAssessmentForm';
import { useState, useEffect } from 'react';

interface PageProps {
  params: Promise<{
    userName: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { userName } = await params;
      setUserName(userName);
      setLoading(false);
    }
    fetchData();
  }, [params]);

  if (loading) {
    return <BlueSpinLoder />;
  }

  return <AdminPhysicalAssessmentForm userName={userName!} />;
}