'use client';

import { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import Wrapper from '../components/Wrapper';
import { fetchData } from '../utils/api';
import { Dna } from 'react-loader-spinner';

export default function Home() {
  const [data, setData] = useState(null);
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
        <Dna
          visible={true}
          height='200'
          width='200'
          ariaLabel='dna-loading'
          wrapperStyle={{
            textAlign: 'center',
            margin: 'auto',
            marginTop: '200px',
            marginBottom: '200px',
          }}
          wrapperClass='dna-wrapper'
        />
      )}
    </>
  );
}
