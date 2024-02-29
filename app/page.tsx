import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import { Sacramento } from 'next/font/google';
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';
const font = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
});

export default async function Home() {
  return (
    <main className="flex h-full  flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-customBg to-customBg2  font-semibold gap-8">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold text-yellow-500 drop-shadow-md items-center',
            font.className
          )}
        >
          ☠️Auth.Me🐍
        </h1>

        <p className="text-green-400 items-center">
          A simple Authentication Service using Authjs
        </p>
      </div>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
