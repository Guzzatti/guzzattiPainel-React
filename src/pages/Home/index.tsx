import { useAuth } from '../../contexts/AuthContext';
import Navigation from './Navigation';
import CategoryGrid from './CategoryGrid';

export default function Home() {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onSignOut={signOut} />
      <main className="container mx-auto px-4 py-8">
        <CategoryGrid />
      </main>
    </div>
  );
}