import MainLayout from "@/components/layout/MainLayout";
import "../styles/globals.css";
import { WappBuilder } from "@/components/ticker/WappBuilder";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function Home() {
  return (
    <Provider store={store}>
      <MainLayout>
        <WappBuilder />
      </MainLayout>
    </Provider>
  );
}
