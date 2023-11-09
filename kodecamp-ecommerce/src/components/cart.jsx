import { useGlobalContext } from "./Context";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, total } =
    useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center">
          Your Cart is Empty at the moment, <br /> Please add a product
        </h1>
      </div>
    );
  }

  return (
    <div className="w-[100%] h-[100%]">
      {cart?.map((product) => {
        const { title, images, id, price, amount } = product;
        return (
          <div
            key={id}
            className=" lg:w-[60%] md:w-[90%] m-auto my-[30px] lg:my-[50px] shadow mobile flex justify-between rounded lg:h-[400px] "
          >
            <div className=" lg:w-[50%] md:w-[50%]  lg:flex ">
              <img src={images[0]} alt="wears" className=" rounded-l round" />
            </div>

            <div className="right ml-2 lg:flex flex-col lg:w-[45%] md:w-[45%] justify-center  ">
              <h3 className=" mt-[0.6rem] font-bold text-[1rem] lg:text-[1.7rem] ">
                {title}
              </h3>
              <p className="mt-[0.6rem] font-bold lg:text-[1.3rem] text-[1rem] text-[#374151] pb-[10px]">
                Price: $ {price}
              </p>

              <p className=" mt-[0.6rem]  ">
                {" "}
                Quantity:{" "}
                <span className=" inline border p-[5px] text-grey-500 ml-1">
                  {" "}
                  {amount}
                </span>{" "}
              </p>

              <div className=" flex gap-7 pb-[0.5rem]  mt-[1rem] lg:mt-[2rem]  between ">
                <div className=" ">
                  <button
                    className=" rounded p-2 bg-red-500 mt-[0.6rem] "
                    onClick={() => removeFromCart(id)}
                  >
                    Remove
                  </button>
                </div>

                <div className=" flex gap-[3rem] items-end justify-end">
                  <div className=" ">
                    <button
                      className=" mt-[0.6rem] "
                      onClick={() => increaseQuantity(id)}
                    >
                      <span className="rounded px-2 text-[1.5rem] bg-[#3e3636] text-[#808080]">
                        +
                      </span>
                    </button>
                  </div>

                  <div className=" ">
                    <button
                      className=" mt-[0.6rem] "
                      onClick={() => decreaseQuantity(id)}
                    >
                      <span className=" px-2 rounded outline-none text-[1.5rem] bg-[#3e3636] text-[#808080]">
                        -
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex p-3 justify-end m-2 text-bolder lg:text-[2rem] md:text-[2rem] fixed z-50 bottom-0 right-0">
        <h1>TOTAL: {total}</h1>
      </div>
    </div>
  );
};

export default Cart;
 