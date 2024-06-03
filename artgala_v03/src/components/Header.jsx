import timelessLogo from '../assets/timeless.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate, setGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onShowNFT = () => {
    setGlobalState('showModal', 'scale-100')
  }
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* <img
          className="w-32 cursor-pointer"
          src={timelessLogo}
          alt="Timeless Logo"
        /> */}
        <div className='text-white text-xl font-semibold animate-pulse border border-red-900/20  rounded-sm max-w-24 justify-center px-2'> Art:Gala</div>
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer hover:animate-ping hover:bg-green-500/50 rounded-md px-2 py-1"
        onClick={onShowNFT}
        >
          Buy
          
        </li>
        <li className="mx-4 cursor-pointer hover:animate-ping hover:bg-red-900/50 rounded-md px-2 py-1">Sell</li>
        <li className="mx-4 cursor-pointer hover:animate-pulse hover:bg-red-900/50 rounded-md px-2 py-1">About</li>
        <li className="mx-4 cursor-pointer hover:animate-pulse hover:bg-red-900/50 rounded-md px-2 py-1">Contact Us</li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
