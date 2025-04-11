function Cart() {
  return (
    <div className=" bg-white rounded-lg  w-96 h-75 absolute top-0 right-[-380px]">
      <h1 className="text-2xl font-bold place-self-start text-red m-6">
        Your Cart (0)
      </h1>
      <img
        className="place-self-center pt-4 pb-2"
        src="./src/assets/images/illustration-empty-cart.svg"
        alt="empty cart"
      />
      <p className="text-rose-400 font-[600] text-sm text-center">
        Your added items will appear here
      </p>
    </div>
  );
}

export default Cart;
