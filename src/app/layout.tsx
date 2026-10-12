import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';


export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-2">
        <Header />
        <div className="mx-auto flex w-full max-w-7xl flex-1 col-12 flex-col">
          <main className="flex-1 py-6">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}