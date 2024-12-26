interface NavigationProps {
  onSignOut: () => Promise<void>;
}

export default function Navigation({ onSignOut }: NavigationProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img 
          src="https://i.postimg.cc/qqBHnTxq/g-u-z-z-a-t-t-i-6.png" 
          alt="Guzzatti Logo" 
          className="h-12" 
        />
        <button
          onClick={onSignOut}
          className="text-gray-600 hover:text-gray-900"
        >
          Sign out
        </button>
      </div>
    </nav>
  );
}