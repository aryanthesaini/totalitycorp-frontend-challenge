import Image from 'next/image';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { updateCart, removeFromCart } from '../store/cartSlice';

const CartItem = ({ data }) => {
  console.log(data);
  const p = data.attributes;
  const dispatch = useDispatch();
  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === 'quantity' ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
      <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
        <Image
          src={p.thumbnail.data.attributes.formats.thumbnail.url}
          width={120}
          height={120}
          alt='Product-image'
        />
      </div>

      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
            {p.name}
          </div>
          <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>
            {p.subtitle}
          </div>
          <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
            MRP : ₹{p.price}
          </div>
        </div>
        <div className='text-md font-medium text-black/[0.5] hidden md:block'>
          {p.subtitle}
        </div>
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
            <div className='flex items-center gap-1'>
              <div className='font-semibold'>Size:</div>
              <select
                onChange={(e) => updateCartItem(e, 'selectedSize')}
                className='hover:text-black'>
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      defaultValue={data.selectedSize === item.size}>
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='flex items-center gap-1'>
              <div className='font-semibold'>Quantity:</div>
              <select
                onChange={(e) => updateCartItem(e, 'quantity')}
                className='hover:text-black'>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option
                      key={i}
                      value={q}
                      defaultValue={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
