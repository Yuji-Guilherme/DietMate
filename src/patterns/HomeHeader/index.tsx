import { Bitter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bitter = Bitter({ subsets: ['latin'] });

function HomeHeader() {
  return (
    <header className="px-12 py-9 flex justify-between">
      <Link href="">
        <div className="flex gap-4 items-center">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <p className={`${bitter.className} font-bold text-lg`}>Diet Mate</p>
        </div>
      </Link>
      <nav className="flex items-center gap-3">
        <div className="h-8 flex items-center border-solid border-slate-600 border-r pr-3">
          <Link className="text-slate-600" href="/dashboard">
            visitante
          </Link>
        </div>
        <Link href="https://github.com/Yuji-Guilherme/DietMate" target="_blank">
          <Image
            src="/icons/github-mark.svg"
            alt="github logo"
            width={32}
            height={32}
          />
        </Link>
      </nav>
    </header>
  );
}

export { HomeHeader };
