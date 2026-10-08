import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';


export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-8xl flex-1 flex-col px-5 sm:px-8 lg:px-10">
        <Header />
        <main className="flex-1 py-6 sm:py-8 lg:py-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}