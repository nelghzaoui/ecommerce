import { Product } from '../models/product.class';

export const MOCK_PRODUCTS: Product[] = [
  new Product(
    'p1',
    'Qamis Blanc Premium',
    'qamis-blanc-premium',
    'Qamis traditionnel blanc en coton de qualité supérieure, idéal pour les occasions religieuses.',
    45,
    'https://picsum.photos/id/1011/400/300',
    'homme',
    12,
    4.7,
    ['coton', 'blanc', 'long'],
    { size: ['M', 'L', 'XL'], color: ['blanc'] }
  ),

  new Product(
    'p2',
    'Abaya Femme Élégante',
    'abaya-femme-elegante',
    'Abaya noire avec broderies dorées, tissu fluide et léger pour un confort optimal.',
    55,
    'https://picsum.photos/id/1015/400/300',
    'femme',
    8,
    4.9,
    ['noir', 'broderie'],
    { size: ['S', 'M', 'L'], color: ['noir', 'bordeaux'] }
  ),

  new Product(
    'p3',
    'Tapis de Prière Doux',
    'tapis-priere-doux',
    'Tapis de prière rembourré avec calligraphie dorée. Confortable pour les longues prières.',
    20,
    'https://picsum.photos/id/1021/400/300',
    'accessoires',
    25,
    4.5,
    ['velours', 'islam', 'doré']
  ),

  new Product(
    'p4',
    'Livre : La Citadelle du Musulman',
    'livre-citadelle-musulman',
    'Recueil de douas (invocations) tirées du Coran et de la Sunnah.',
    5,
    'https://picsum.photos/id/1005/400/300',
    'livres',
    50,
    4.8,
    ['poche', 'doua', 'coran']
  )
];
