import Image from "next/image";
import React from "react";

function CartModal() {
  const cartItems = true;
  return (
    <div className="absolute w-max p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-14 flex flex-col gap-6">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <div>
            <h2 className="mb-4 font-semibold">Shopping Cart</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Image
              src="https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between gap-8">
                  <div className="font-semibold">Product Name</div>
                  <div className="p-1 bg-gray-50">$49</div>
                </div>
                <div className="text-sm text-gray-500">Available</div>
              </div>
              <div className="flex flex-row justify-between w-full text-sm">
                <div className="text-gray-500">Qty:1</div>
                <div className="text-blue-500">Remove</div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <div className="flex items-center justify-between font-semibold">
                <div>Subtotal</div>
                <div>$18</div>
            </div>
            <div className="text-gray-500 text-sm mt-2 mb-4">Shipping and taxes calculated at checkout</div>
        </div>
        <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">ViewCart</button>
            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
        </div>
        </div>
      )}
    </div>
  );
}

export default CartModal;
