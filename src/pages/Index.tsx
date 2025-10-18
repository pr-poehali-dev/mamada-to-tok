import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Стул "Скандинавия"',
      price: '12 990',
      category: 'chairs',
      image: 'https://cdn.poehali.dev/projects/7292a9ae-086c-4687-aa6d-b30d002c640e/files/f7aeb36e-0768-4631-838b-fa388e282180.jpg',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Диван "Комфорт"',
      price: '89 990',
      category: 'sofas',
      image: 'https://cdn.poehali.dev/projects/7292a9ae-086c-4687-aa6d-b30d002c640e/files/c866c6c8-3d5f-4fe8-a917-faceeebac4e0.jpg',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Стол "Классик"',
      price: '34 990',
      category: 'tables',
      image: 'https://cdn.poehali.dev/projects/7292a9ae-086c-4687-aa6d-b30d002c640e/files/923ab894-a32a-4e07-a492-85a6c84ad496.jpg',
      badge: null
    },
    {
      id: 4,
      name: 'Кресло "Релакс"',
      price: '45 990',
      category: 'chairs',
      image: 'https://cdn.poehali.dev/projects/7292a9ae-086c-4687-aa6d-b30d002c640e/files/f7aeb36e-0768-4631-838b-fa388e282180.jpg',
      badge: null
    },
    {
      id: 5,
      name: 'Обеденный стол "Модерн"',
      price: '52 990',
      category: 'tables',
      image: 'https://cdn.poehali.dev/projects/7292a9ae-086c-4687-aa6d-b30d002c640e/files/923ab894-a32a-4e07-a492-85a6c84ad496.jpg',
      badge: null
    },
    {
      id: 6,
      name: 'Диван "Лофт"',
      price: '99 990',
      category: 'sofas',
      image: 'https://cdn.poehali.dev/projects/7292a9ae-086c-4687-aa6d-b30d002c640e/files/c866c6c8-3d5f-4fe8-a917-faceeebac4e0.jpg',
      badge: 'Хит продаж'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'chairs', name: 'Стулья и кресла', icon: 'Armchair' },
    { id: 'sofas', name: 'Диваны', icon: 'Sofa' },
    { id: 'tables', name: 'Столы', icon: 'Table' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Home" className="text-primary" size={24} />
              <span className="text-xl font-bold text-foreground">MamaDoma</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'catalog' ? 'text-primary' : 'text-foreground'}`}
              >
                Каталог товаров
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-foreground'}`}
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('delivery')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'delivery' ? 'text-primary' : 'text-foreground'}`}
              >
                Доставка и оплата
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-foreground'}`}
              >
                Контакты
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-lg font-medium text-left hover:text-primary transition-colors"
                  >
                    Главная
                  </button>
                  <button 
                    onClick={() => scrollToSection('catalog')}
                    className="text-lg font-medium text-left hover:text-primary transition-colors"
                  >
                    Каталог товаров
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-lg font-medium text-left hover:text-primary transition-colors"
                  >
                    О компании
                  </button>
                  <button 
                    onClick={() => scrollToSection('delivery')}
                    className="text-lg font-medium text-left hover:text-primary transition-colors"
                  >
                    Доставка и оплата
                  </button>
                  <button 
                    onClick={() => scrollToSection('contacts')}
                    className="text-lg font-medium text-left hover:text-primary transition-colors"
                  >
                    Контакты
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Мебель для вашего дома
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Качественная мебель по доступным ценам. Создайте уют в каждой комнате с MamaDoma
            </p>
            <Button 
              size="lg" 
              className="text-base px-8"
              onClick={() => scrollToSection('catalog')}
            >
              Перейти в каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Каталог товаров</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                <Icon name={category.icon as any} size={18} />
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button size="sm" className="gap-2">
                      <Icon name="ShoppingCart" size={16} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-6">
              MamaDoma — это более 10 лет опыта в производстве и продаже качественной мебели. 
              Мы создаем комфорт и уют в каждом доме, предлагая широкий ассортимент товаров по доступным ценам.
            </p>
            <p className="text-lg text-muted-foreground">
              Наша миссия — сделать качественную мебель доступной для каждой семьи. Мы работаем напрямую с 
              производителями, что позволяет нам предлагать лучшие цены без потери качества.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <Card className="text-center p-8">
              <Icon name="Award" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-muted-foreground">Только проверенные материалы и производители</p>
            </Card>
            <Card className="text-center p-8">
              <Icon name="Truck" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-semibold mb-2">Доставка</h3>
              <p className="text-muted-foreground">Быстрая доставка по всей России</p>
            </Card>
            <Card className="text-center p-8">
              <Icon name="HeadphonesIcon" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-muted-foreground">Консультации 24/7 для наших клиентов</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Доставка и оплата</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Icon name="Truck" className="mb-4 text-primary" size={40} />
                <h3 className="text-2xl font-semibold mb-4">Доставка</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Бесплатная доставка при заказе от 50 000 ₽</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Доставка по Москве — 1-2 дня</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Доставка по России — 3-7 дней</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Подъем на этаж и сборка мебели</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <Icon name="CreditCard" className="mb-4 text-primary" size={40} />
                <h3 className="text-2xl font-semibold mb-4">Оплата</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Наличными курьеру при получении</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Банковской картой онлайн</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Безналичный расчет для организаций</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Рассрочка от банков-партнеров</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@mamadomahome.ru" className="text-muted-foreground hover:text-primary transition-colors">
                        info@mamadomahome.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">
                        Москва, ул. Примерная, д. 123
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-muted-foreground">
                        Пн-Пт: 9:00 - 20:00<br />
                        Сб-Вс: 10:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="text-xl font-bold">MamaDoma</span>
              </div>
              <p className="text-gray-400">
                Качественная мебель для вашего дома
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('catalog')} className="hover:text-white transition-colors">
                    Каталог товаров
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                    О компании
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('delivery')} className="hover:text-white transition-colors">
                    Доставка и оплата
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@mamadomahome.ru</li>
                <li>Москва, ул. Примерная, д. 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MamaDoma. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
