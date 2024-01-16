import {useState} from 'react';
import cloudLogo from '../assets/cloud-icon-8.png';
//import {menu, Xicon} from '../Component/Icons';
import { Link } from 'react-router-dom';
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai';




const NarBar = () => {

  
  const [nav, setNav] = useState(false);


  const handleClick = () =>{
    setNav(!nav);
  };

  
  const handleClose = () =>{
    setNav(!nav)
  };

  return ( 
    <div className='w-screen h-[80px] z-10 bg-[#f9f9f9] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>

        <div className='flex items-center'>
          <Link to={'/'}>
             <h1 className='text-4xl font-bold mr-4 sm:text-3xl flex'> 
            <img src={cloudLogo} className='w-8 mr-2' alt="img logo"/> cloud </h1> 
          </Link>

             <ul className='hidden md:flex gap-7 font-bold text-2xl px-40'> 
               <Link to={'/'}><li>home</li> </Link>
               <li>about</li>
               <li>support</li>
               <li>platform</li>
               <li>pricing</li>
             </ul>
        </div>

        <div className='hidden md:flex pr-4'>
        <Link to={'/login'}>
        <button className='border-none bg-[#201f1f] text-[#eedfdf] rounded-xl px-5 py-3  mr-4'> login </button>
        </Link>
        <Link to={'/register'}>
        <button className='border-none bg-[#201f1f] text-[#eedfdf] rounded-xl px-5 py-3 mr-43'>Register</button>
        </Link>
        </div>

        <div className='md:hidden mr-4' onClick={handleClick}>
        {!nav ? <AiOutlineBars size={25}/>  : <AiOutlineClose size={25} />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-[#F9F9F9] w-[100%] px-8'} onClick={handleClose} > 
        <li className='border-b-2 py-3 border-black-300 w-full'> Home </li>
        <li className='border-b-2 py-3 border-black-300 w-full'> About </li>
        <li className='border-b-2 py-3 border-black-300 w-full'> Support </li>
        <li className='border-b-2 py-3 border-black-300 w-full'> Platform </li>
        <li className='border-b-2 py-3 border-black-300 w-full'> Pricing </li>

        <div className='flex flex-col my-4'>
          <Link to={'/login'}>
          <button className='bg-[#201f1f] text-[#eedfdf] px-8 py-3 mb-4 rounded-2xl '> Login </button>
          </Link>
          <Link to={'/register'}>
          <button className='bg-[#201f1f] text-[#eedfdf] px-8 py-3 mb-4 rounded-2xl'> Register</button> 
          </Link>
        </div>

      </ul>

    </div>
  )
}

export default NarBar;

