import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import "../styles/globals.css";
import { TickerBuilder } from "@/components/ticker/TickerBuilder";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function Home() {
  return (
    <Provider store={store}>
      <MainLayout>
        <TickerBuilder />
      </MainLayout>
    </Provider>
  );
}
