import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center font-semibold text-green-500">
      <p>Hello, World!</p>
      <Button size="lg" variant="outline">
        Hello
      </Button>
    </div>
  );
}
