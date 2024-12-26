import { Link } from 'react-router-dom';

interface CategoryItem {
  name: string;
  url?: string;
  path?: string;
}

interface Category {
  title: string;
  items: CategoryItem[];
}

const categories: Category[] = [
  {
    title: 'Login',
    items: [
      { name: 'Vtex', url: 'https://guzzatti.myvtex.com/admin' },
      { name: 'Pagarme', url: 'https://id.pagar.me/signin' },
      { name: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/resumo' },
      { name: 'Magalu', url: 'https://id.magalu.com/login?scope=openid&state=seqeABxr5QVFGQ1sSvKqGbqjvhPPfUtuszhycm3MBgM.cwtOP191f4Q.IntegraCommerceSellerAdmin&response_type=code&client_id=_bKkgsgj8gkX82W_Y-SuYXoM0eBJfQc3Ifz7LEvHG24&redirect_uri=https%3A%2F%2Fid-b2b.magazineluiza.com.br%2Fauth%2Frealms%2FB2B%2Fbroker%2Fid.magalu%2Fendpoint&nonce=edb008d2-78b4-4c51-bf6c-a2ddfdac45fc' },
      { name: 'Americanas', url: 'https://americanasmarketplace.com.br/v3/dashboard' },
    ],
  },
  {
    title: 'Suporte',
    items: [
      { name: 'Sup Vtex', url: 'https://support.vtex.com/hc/pt-br/requests' },
      { name: 'Sup MyEshop', url: 'https://myeshop.agidesk.com/br/atendimentos' },
    ],
  },
  {
    title: 'Dialhost',
    items: [
      { name: 'Email', url: 'https://dialmail.dialhost.com.br/' },
      { name: 'Painel', url: 'https://www.dialhost.com.br/' },
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { name: 'Trello', url: 'https://trello.com/invite/b/65bba015a982cb072b5a4caf/ATTI9c556f9da311193882f6f8250f55ca9c5733260A/ecommerce-guzzatti' },
      { name: 'Excel Cadastro', url: 'https://docs.google.com/spreadsheets/d/1awIfAf0--39x7wdGuSQwYUQ9826K_C9SVhtUkMnYG8c/edit?gid=0#gid=0' },
    ],
  },
  {
    title: 'Guias',
    items: [
      { name: 'Guia Cadastro', path: '/guides/cadastro' },
      { name: 'Guia Clientes', path: '/guides/clientes' },
      { name: 'Guia Pedidos', path: '/guides/pedidos' },
      { name: 'Guia Logística', path: '/guides/logistica' },
    ],
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div key={category.title} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h2>
          <div className="space-y-2">
            {category.items.map((item) => (
              <div key={item.name}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className="block w-full btn-primary text-center"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.url}
                    className="block w-full btn-primary text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}