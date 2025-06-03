import MainLayout from '@/components/layout/MainLayout';
import TickerPreview from '@/components/ticker/TickerPreview';
import "../styles/globals.css";

export default function Home() {
  return (
    <MainLayout>
      <TickerPreview />
    </MainLayout>
  );
}
