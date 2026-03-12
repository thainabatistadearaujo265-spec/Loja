import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Star, ChevronRight, Facebook, Instagram, Twitter, CreditCard, ShieldCheck, Truck, ArrowRight, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, Product } from './constants';
import { cn } from './lib/utils';

// --- Types ---
interface CartItem extends Product {
  quantity: number;
}

// --- Components ---

const Navbar = ({ cartCount, onOpenCart }: { cartCount: number, onOpenCart: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold tracking-tight">TrendDrop</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Início</a>
            <a href="#produtos" className="hover:text-black transition-colors">Produtos</a>
            <a href="#categorias" className="hover:text-black transition-colors">Categorias</a>
            <a href="#contato" className="hover:text-black transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={onOpenCart}
              className="p-2 text-gray-600 hover:text-black transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-600">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-6">
              Novidades da Semana
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Os Melhores <br />
              <span className="text-gray-400 italic">Gadgets</span> do <br />
              Momento.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Descubra uma curadoria exclusiva dos produtos que estão viralizando no mundo todo. Qualidade premium com entrega garantida.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#produtos"
                className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 group"
              >
                Comprar Agora
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all">
                Ver Ofertas
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=80" 
                alt="Hero Product" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-sm font-bold">4.9/5.0</span>
              </div>
              <p className="text-sm text-gray-500">+10.000 clientes satisfeitos</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAddToCart }: { product: Product, onAddToCart: (p: Product) => void, key?: string }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {product.trending && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            Trending
          </div>
        )}
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-4 right-4 py-3 bg-black text-white rounded-xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          Adicionar ao Carrinho
        </button>
      </div>
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">{product.name}</h3>
        <span className="font-bold">R$ {product.price.toFixed(2)}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <div className="flex text-yellow-400">
          <Star size={12} fill="currentColor" />
        </div>
        <span>{product.rating}</span>
        <span>•</span>
        <span>{product.reviews} avaliações</span>
      </div>
    </motion.div>
  );
};

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove,
  onCheckout
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  items: CartItem[],
  onUpdateQuantity: (id: string, delta: number) => void,
  onRemove: (id: string) => void,
  onCheckout: () => void
}) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold">Seu Carrinho</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart size={24} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium">Seu carrinho está vazio</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-sm font-bold underline"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold text-sm">{item.name}</h4>
                        <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">R$ {item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-gray-50 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-gray-50"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-gray-600">Frete</span>
                  <span className="text-green-600 font-bold uppercase text-xs tracking-widest">Grátis</span>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                >
                  Finalizar Compra
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CheckoutModal = ({ 
  isOpen, 
  onClose, 
  total 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  total: number 
}) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => setStep('success'), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {step === 'form' && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Checkout Seguro</h2>
                  <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Nome Completo</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5" placeholder="João Silva" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-1">E-mail</label>
                      <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5" placeholder="joao@exemplo.com" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Número do Cartão</label>
                      <div className="relative">
                        <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5" placeholder="0000 0000 0000 0000" />
                        <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Validade</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5" placeholder="MM/AA" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-1">CVV</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5" placeholder="123" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
                    >
                      Pagar R$ {total.toFixed(2)}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 pt-4 text-gray-400">
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                      <ShieldCheck size={14} />
                      Pagamento Seguro
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                      <CreditCard size={14} />
                      SSL Criptografado
                    </div>
                  </div>
                </form>
              </div>
            )}

            {step === 'processing' && (
              <div className="p-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 border-4 border-gray-100 border-t-black rounded-full animate-spin mb-6" />
                <h3 className="text-xl font-bold mb-2">Processando Pagamento</h3>
                <p className="text-gray-500">Por favor, não feche esta janela...</p>
              </div>
            )}

            {step === 'success' && (
              <div className="p-12 flex flex-col items-center justify-center text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                >
                  <ShieldCheck size={40} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Pedido Confirmado!</h3>
                <p className="text-gray-500 mb-8">Obrigado pela sua compra. Enviamos os detalhes para o seu e-mail.</p>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
                >
                  Voltar à Loja
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const filteredProducts = filter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />

        {/* Features */}
        <section className="py-12 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-black">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-bold">Frete Grátis</h4>
                <p className="text-sm text-gray-500">Para todo o Brasil em compras acima de R$ 99</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-black">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold">Compra Segura</h4>
                <p className="text-sm text-gray-500">Seus dados protegidos com criptografia SSL</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-black">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="font-bold">Parcelamento</h4>
                <p className="text-sm text-gray-500">Em até 12x sem juros no cartão de crédito</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="produtos" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-4 tracking-tight">Produtos em Destaque</h2>
                <p className="text-gray-500">Explore nossa seleção dos 30 itens mais vendidos do momento.</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-bold transition-all",
                      filter === cat ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-black text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[120px]" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Pronto para transformar <br /> sua rotina?
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
              Junte-se a milhares de clientes que já descobriram os melhores produtos com os melhores preços. Ofertas por tempo limitado.
            </p>
            <button className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
              Garantir Minha Oferta
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-gray-50 pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-xl font-bold tracking-tight">TrendDrop</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8">
                Sua loja de confiança para os produtos mais inovadores do mercado. Qualidade, segurança e transparência em cada pedido.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Links Úteis</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Políticas de Envio</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Rastrear Pedido</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Atendimento</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>suporte@trenddrop.com</li>
                <li>Seg - Sex: 09h às 18h</li>
                <li>WhatsApp: (11) 99999-9999</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">© 2024 TrendDrop. Todos os direitos reservados.</p>
            <div className="flex gap-4 grayscale opacity-50">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            </div>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => {
          setIsCheckoutOpen(false);
          setCart([]);
        }} 
        total={cartTotal}
      />
    </div>
  );
}
