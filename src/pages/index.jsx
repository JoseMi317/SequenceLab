import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';
import "../styles/globals.css";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const TickerPreview = dynamic(() => import('@/components/ticker/TickerPreview'), {
  ssr: false,
});
export default function Home() {
  return (
    <Provider store={store}>
    <MainLayout>
      <TickerPreview />
    </MainLayout>
    </Provider>
  );
}
