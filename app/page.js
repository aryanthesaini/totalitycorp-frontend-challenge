'use client';

import { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import Wrapper from '../components/Wrapper';
import { fetchData } from '../utils/api';
import { Dna } from 'react-loader-spinner';
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    const { data } = await fetchData('/api/products?populate=*');
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {!loading && (
        <main>
          <HeroBanner />
          <Wrapper>
            <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
              <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                Totality Corp Assignment
              </div>

              <div className='text-md md:text-xl'>
                This is an assignment that I am supposed to finish sooner than
                ever so who cares what I write here??
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
              {data?.map((product) => (
                <ProductCard key={product?.id} data={product} />
              ))}
              {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
            </div>
          </Wrapper>
        </main>
      )}

      {loading && (
        <>
          <Dna
            visible={true}
            height='200'
            width='200'
            ariaLabel='dna-loading'
            wrapperStyle={{
              textAlign: 'center',
              margin: 'auto',
              marginTop: '200px',
              marginBottom: '100px',
            }}
            wrapperClass='dna-wrapper'
          />

          {showModal && (
            <div className='flex justify-center items-center '>
              <div
                className='relative z-10'
                aria-labelledby='modal-title'
                role='dialog'
                aria-modal='true'>
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

                <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                  <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                    <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                      <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                        <div className='sm:flex sm:items-start'>
                          <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                            <h3
                              className='text-base font-semibold leading-6 text-gray-900'
                              id='modal-title'>
                              I will explain to you why this is happening
                            </h3>
                            <div className='mt-2'>
                              <p className='text-sm text-gray-500'>
                                So, this is a project I made to learn. Hence I
                                did not use any paid resources. Thus, the
                                backend is a free service that can shut down
                                with inactivity. To make sure that service is
                                active again, you can go the back-end link and
                                wait a minute to let it load and you will
                                magically come here to see this website running
                                seamlessly again.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                        <Link
                          target='_blank'
                          href='https://shoestore-dqvn.onrender.com'>
                          <button
                            type='button'
                            className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                            onClick={() => {
                              setShowModal(false);
                            }}>
                            Click here to go to the backend link
                          </button>
                        </Link>

                        <button
                          type='button'
                          className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto '
                          onClick={() => {
                            setShowModal(false);
                          }}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!showModal && (
            <div className='flex justify-center items-center'>
              <button
                className='px-6 py-4 rounded-full bg-black text-white  font-medium transition-transform active:scale-95 hover:opacity-75 flex items-center gap-2 justify-center text-center text-sm mb-10'
                onClick={() => {
                  setShowModal(true);
                }}>
                Taking too long to load? Click here!
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
