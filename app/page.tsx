import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main>
      <h1>
        <span
          className={cn(
            'italic text-5xl font-extrabold',
            ', text-red-600',
            true && 'underline'
          )}
        >
          Hello
        </span>{' '}
        World!
      </h1>
    </main>
  );
}
