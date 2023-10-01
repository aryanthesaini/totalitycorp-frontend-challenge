'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Provider } from 'react-redux';
import store from '../store/store';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Shoe Store - TotalityCorp',
//   description: 'TotalityCorp assignment',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Shoe Store</title>
      </head>
      <Provider store={store}>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
