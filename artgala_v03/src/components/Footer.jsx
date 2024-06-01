import timelessLogo from '../assets/timeless.png'

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.25] justify-center items-center">
        {/* <img src={timelessLogo} alt="logo" className="w-32" /> */}
        <div className='text-white text-xl font-semibold animate-pulse border border-red-900/50  rounded-sm max-w-20 justify-center'> Art:Gala</div>
      </div>

      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:animate-ping hover:bg-red-900/20 rounded-md px-2 py-1">
          Buy
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:animate-ping hover:bg-red-900/20 rounded-md px-2 py-1">
          Sell
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:animate-pulse hover:bg-red-900/20 rounded-md px-2 py-1">
          About
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:animate-pulse hover:bg-red-900/20 rounded-md px-2 py-1">
          Contact Us
        </p>
      </div>

      <div className="flex flex-[0.25] justify-center items-center">
        <p className="text-white text-right text-xs">
          &copy;2024 All rights reserved
        </p>
      </div>
    </div>
  </div>
)

export default Footer
