
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import Logo from '@/assets/bh.svg';
import AuthProvider from './AuthProvider';

const Navbar = () => {
  const session = {};

  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image
                    src={Logo}
                    width={50}
                    height={43}
                    alt='Flexible'
                 />
             </Link>
              <ul
              className='xl:flex hidden text-small gap-7'
              >                  
                {NavLinks.map((link) => (
                    <Link
                    href={link.href}
                    key={link.key}
                    >                       
                    {link.text}
                    </Link>
                ))}
              </ul>
           
        </div>
        <div className='flexCenter gap-4'>
          {session ? (
            <>
            userPhoto
            <Link 
            href="/create-project"
            >
            Share work
            </Link>
            </>
          ) : (
            <AuthProvider />
          )}
        </div>
    </nav>
    
  )
}

export default Navbar;
