import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ toggle }) => {
  // State
const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <button
      className="px-6 py-2 mt-auto font-semibold text-gray-400 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
      onClick={connectWallet}
    >
      Connect Wallet
    </button>
  );

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

 return (
  <nav className='flex justify-between items-center h-16 bg-black text-gray-400 relative shadow-sm font-mono' role='navigation'>
  <Link to='/' className='pl-8'><svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.936 19.6743C43.7796 19.1506 43.4394 18.7003 42.9775 18.4054C42.5156 18.1106 41.9627 17.9907 41.4195 18.0678C40.8763 18.1448 40.379 18.4136 40.0181 18.8252C39.6572 19.2368 39.4569 19.7637 39.4535 20.3101C39.2144 20.333 38.9734 20.3502 38.7344 20.3598C38.7066 19.7517 38.4696 19.1716 38.0631 18.7169C37.6567 18.2622 37.1055 17.9606 36.5021 17.8628C35.8988 17.7649 35.2799 17.8767 34.7496 18.1794C34.2192 18.4821 33.8095 18.9573 33.5894 19.5252C33.3122 19.4207 33.0393 19.3075 32.7704 19.1858C33.0638 18.5431 33.1315 17.8209 32.9628 17.1352C32.7941 16.4496 32.3987 15.8404 31.8402 15.4055C31.2818 14.9707 30.5927 14.7355 29.8838 14.7378C29.1749 14.74 28.4873 14.9796 27.9317 15.4181C27.7198 15.1523 27.5189 14.8786 27.3288 14.5968C28.7214 13.9132 29.804 12.7317 30.3604 11.2883C30.9169 9.84484 30.9063 8.24553 30.3308 6.80951C29.7553 5.37348 28.6572 4.20635 27.2556 3.54102C25.8541 2.87568 24.2521 2.76107 22.7694 3.22005C22.6369 3.2602 22.5073 3.30609 22.3787 3.35485L30.1389 21.0348C30.2349 21.0262 30.3357 21.0137 30.4346 20.9965C31.165 20.8691 31.8266 20.4888 32.3029 19.9229C32.6658 20.0905 33.0354 20.2432 33.4118 20.3808C33.3983 20.6782 33.436 20.9757 33.5231 21.2604C33.7146 21.8786 34.126 22.4061 34.68 22.744C35.2341 23.0819 35.8929 23.2071 36.533 23.096C36.6423 23.0766 36.7503 23.0507 36.8565 23.0185C37.1918 22.9177 37.5037 22.7516 37.7742 22.5299C38.0446 22.3082 38.2682 22.0353 38.432 21.7269C38.5159 21.5693 38.5837 21.4037 38.6345 21.2327C38.96 21.2221 39.2855 21.1973 39.609 21.1638C39.7988 21.6577 40.1548 22.0707 40.6164 22.3323C41.078 22.5938 41.6164 22.6877 42.1398 22.5979C42.2339 22.5816 42.3269 22.5592 42.4182 22.531C42.9993 22.3518 43.4854 21.9505 43.77 21.415C44.0545 20.8795 44.1142 20.2536 43.936 19.6743V19.6743Z" fill="white"/>
<path d="M6.49976 29.0003C8.98047 28.4482 10.542 25.998 9.98747 23.5277C9.43296 21.0574 6.97243 19.5025 4.49172 20.0546C2.01101 20.6068 0.449514 23.057 1.00402 25.5273C1.55852 27.9976 4.01905 29.5525 6.49976 29.0003Z" fill="white"/>
<path d="M26.8602 18.8185C26.7165 18.3522 26.6837 17.8589 26.7643 17.3778C26.845 16.8966 27.0369 16.4407 27.3249 16.0461C27.0342 15.6884 26.7618 15.3163 26.5088 14.9313C26.4704 14.9437 26.4339 14.961 26.3946 14.9724C26.1494 15.047 25.9 15.1067 25.6476 15.1512C24.1359 15.4142 22.58 15.1069 21.2835 14.2893C19.9869 13.4718 19.0427 12.2026 18.635 10.7293C18.2274 9.25605 18.3855 7.68438 19.0785 6.32091C19.7715 4.95744 20.9498 3.89994 22.3834 3.35472L21.3955 1.11951C21.2495 0.786829 21.0093 0.503743 20.7042 0.304907C20.3992 0.106071 20.0425 0.000112422 19.6779 0L10.8779 0L23.6622 29.1102H33.6834L30.1388 21.0375C29.4204 21.0941 28.704 20.9051 28.1079 20.5017C27.5119 20.0983 27.0717 19.5046 26.8602 18.8185V18.8185Z" fill="white"/>
</svg></Link>
  <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
  </div>
  <div className='px-4 md:flex hidden mx-auto font-semi-bold font-heading space-x-12'>
    <Link className='p-4 hover:text-purple-900' to='/about'>About</Link>
    <Link className='p-4 hover:text-purple-900' to='/roadmap'>Roadmap</Link>
    <Link className='p-4 hover:text-purple-900' to='/faq'>FAQ</Link>
    <Link className='p-4 hover:text-purple-900' to='/team'>Team</Link>
  </div>

  <div className="md:flex hidden items-center space-x-5 pr-8">
          <Link className="md:flex hidde items-center hover:text-purple-900" to="/">
             Marketplace
          </Link>
          {!walletAddress && renderNotConnectedContainer()}
          
        </div>
</nav>
 );
};

export default Navbar;