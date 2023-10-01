'use client';

import React, { useState, useEffect } from 'react';
import Wrapper from '../../../components/Wrapper';
import ProductDetailsCarousel from '../../../components/ProductDetailsCarousel';
import { useSelector, useDispatch } from 'react-redux';
import { Dna } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData } from '../../../utils/api';
import { getDiscountedPricePercentage } from '../../../utils/helper';
import { addToCart } from '../../../store/cartSlice';

const ProductDetails = ({ params }) => {
  const [products, setProducts] = useState(null);
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const { data } = await fetchData(
      `/api/products?populate=*&filters[slug][$eq]=${params.slug}`
    );
    setProducts(data[0]);
    setLoading(false);
    // console.log(data);
    // console.log(products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {!loading && (
        <div className='w-full md:py-20'>
          <Wrapper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
              <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                <ProductDetailsCarousel
                  images={products?.attributes.image.data}
                />
              </div>
              <div className='flex-[1] py-3'>
                <div className='text-[34px] font-semibold mb-2 leading-tight'>
                  {products?.attributes.name}
                </div>

                <div className='text-lg font-semibold mb-5'>
                  {products?.attributes.subtitle}
                </div>

                <div className='flex items-center'>
                  <p className='mr-2 text-lg font-semibold'>
                    MRP: ₹ {products?.attributes.price}
                  </p>

                  {products?.attributes.original_price && (
                    <>
                      <p className='text-base font-medium line-through'>
                        ₹{products?.attributes.original_price}
                      </p>

                      <p className='ml-auto text-base font-medium text-green-500'>
                        {getDiscountedPricePercentage(
                          products.attributes.original_price,
                          products?.attributes.price
                        )}
                        % OFF
                      </p>
                    </>
                  )}
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

                <div id='sizesGrid' className='grid grid-cols-3 gap-2'>
                  {products?.attributes.size.data.map((item, i) => (
                    <div
                      key={i}
                      className={`border rounded-md text-center py-3 font-medium ${
                        item.enabled
                          ? 'hover:border-black cursor-pointer '
                          : 'cursor-not-allowed bg-black/[0.1] opacity-50'
                      } ${
                        selectedSize == item.size ? 'bg-black text-white' : ''
                      }`}
                      onClick={() => {
                        setSelectedSize(item.size);
                        setShowError(false);
                      }}>
                      {item.size}
                    </div>
                  ))}
                </div>
                {showError && (
                  <div className='text-red-600 mt-3'>
                    Size selection is required
                  </div>
                )}
                <ToastContainer />
                <button
                  className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-7 hover:opacity-75 mt-5'
                  onClick={() => {
                    if (!selectedSize) {
                      setShowError(true);
                      document.getElementById('sizesGrid').scrollIntoView({
                        block: 'center',
                        behavior: 'smooth',
                      });
                    } else {
                      dispatch(
                        addToCart({
                          ...products,
                          selectedSize,
                          oneQuantityPrice: products.attributes.price,
                        })
                      );
                      toast.success('Item added to your cart');
                    }
                  }}>
                  Add To Cart
                </button>

                <div className='text-lg font-bold mb-5'>Product Details</div>
                <div className='text-md mb-5'>
                  {products?.attributes.description}
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
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
};

export default ProductDetails;
