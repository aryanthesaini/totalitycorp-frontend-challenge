import React from 'react';
import Wrapper from '../../../components/Wrapper';
import ProductDetailsCarousel from '../../../components/ProductDetailsCarousel';
const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
          </div>
          <div className='flex-[1] py-3'>
            <div className='text-[34px] font-semibold mb-2'>
              Jordan Retro 6 G
            </div>

            <div className='text-lg font-semibold mb-5'>
              Men&apos;s Golf Shoes
            </div>

            <div className='text-lg font-semibold mb-20'>
              MRP:{' '}
              <span className=' text-base font-light line-through mx-3'>
                ₹10000
              </span>
              ₹7000
            </div>

            <div className='mb-10'>
              <div className='flex justify-between mb-2'>
                <div className='text-md font-semibold'>Size Select</div>
                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                  {' '}
                  Select Guide
                </div>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-2'>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 6
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 7
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 8
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 9
              </div>
              <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                UK 10
              </div>
            </div>
            <div className='text-red-600 mt-3'>Size selection is required</div>
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-7 hover:opacity-75 mt-5'>
              Add To Cart
            </button>

            <div className='text-lg font-bold mb-5'>Product Details</div>
            <div className='text-md mb-5'>
              Okay this is a product description Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Aut libero beatae quasi cupiditate,
              unde officia nam ex fugit ea, dignissimos mollitia recusandae.
              Consequuntur neque minus, numquam aspernatur velit natus libero.
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
