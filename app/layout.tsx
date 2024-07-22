import { ReactNode }      from 'react';
import { Toaster }        from 'react-hot-toast';
import MainHeader         from '@/components/main-header/MainHeader';
import './globals.css';

export const metadata = {

  title: 'Foodie Social',
  description: 'Delicious meals, shared by a food-loving community.'

};

export default function RootLayout({ children }: { children: ReactNode }) {

  return (

    <html lang="en">
      <body>
        <MainHeader />
        <Toaster position='top-right' />
        {children}
      </body>
    </html>
    
  );

}
