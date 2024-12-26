import { useParams } from 'react-router-dom';
import Navigation from '../Home/Navigation';
import { useAuth } from '../../contexts/AuthContext';

const videoData = {
  cadastro: [
    'https://drive.google.com/file/d/1pfZ87b46ryxsOQXUGFfPP0TZ6TRdvaJS/view',
  ],
  clientes: [
    'https://drive.google.com/file/d/1q_iiRL16cHz7EUsp1xr1cpFYegpdbh1-/view',
  ],
  logistica: [
    'https://drive.google.com/file/d/1r1_V5twahs4fCOih96v7A8oQTtRQTF6t/view',
  ],
  pedidos: [
    'https://drive.google.com/file/d/1q_iiRL16cHz7EUsp1xr1cpFYegpdbh1-/view',
    'https://drive.google.com/file/d/1WjGMtGcDTLMZ8c3pcTzzWE-R2Shd3KJI/view',
    'https://drive.google.com/file/d/18PxgvdYJ2L8O_j4udodT-AmIMOVCJRUN/view',
    'https://drive.google.com/file/d/1jolU11SNfxWDaY9AyJkp6kb5ms3btsmW/view',
  ],
};

export default function Guides() {
  const { guideName } = useParams();
  const { signOut } = useAuth();

  const videos = videoData[guideName] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onSignOut={signOut} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          {guideName?.charAt(0).toUpperCase() + guideName?.slice(1)} Guide
        </h1>
        <div className="space-y-4">
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.replace('/view', '/preview')} // Ajuste para exibir vídeos do Google Drive
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Nenhum vídeo disponível para este guia.</p>
          )}
        </div>
      </main>
    </div>
  );
}
