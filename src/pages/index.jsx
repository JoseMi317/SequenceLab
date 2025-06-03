import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';
import "../styles/globals.css";

const TickerPreview = dynamic(() => import('@/components/ticker/TickerPreview'), {
  ssr: false,
});
export default function Home() {
  return (
    <MainLayout>
      <TickerPreview />
    </MainLayout>
  );
}
