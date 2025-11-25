import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">Сызрань</h1>
          <div className="flex gap-6">
            {[
              { id: "main", label: "Главная" },
              { id: "about", label: "О игре" },
              { id: "gameplay", label: "Геймплей" },
              { id: "mechanics", label: "Механики" },
              { id: "download", label: "Скачать" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="main"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/a7e624a4-56ef-4c21-8738-9df4eaba5072.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Сызрань: Жизнь как она есть
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Гиперреалистичный симулятор жизни без прикрас. Начни с нуля, пройди через
            трудности трудоустройства, управляй бюджетом и живи как захочешь.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 animate-scale-in"
            onClick={() => scrollToSection("about")}
          >
            Узнать больше
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">О Игре</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/files/b821911d-0520-4f13-825f-b66334d34f82.jpg"
                alt="Город"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient">
                Это не игра — это вторая жизнь
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Беспрецедентный уровень реализма в симуляции повседневной жизни обычного
                человека в российской провинции. Начните путь в городе Сызрань и пройдите
                через все испытания реальной жизни.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Building", text: "Открытый мир" },
                  { icon: "Briefcase", text: "Реальные профессии" },
                  { icon: "DollarSign", text: "Экономика дублей" },
                  { icon: "Users", text: "Социальные связи" },
                ].map((feature, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Icon name={feature.icon} className="text-primary" size={24} />
                      <span className="font-medium">{feature.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gameplay" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Геймплей</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Heart",
                title: "Потребности",
                description:
                  "Следите за голодом, жаждой, сном, гигиеной и настроением персонажа",
              },
              {
                icon: "Wallet",
                title: "Финансы",
                description:
                  "Зарабатывайте дубли и тратьте их на еду, жилье, транспорт и одежду",
              },
              {
                icon: "MessageCircle",
                title: "Общение",
                description:
                  "Взаимодействуйте с NPC для трудоустройства по блату и установления связей",
              },
              {
                icon: "Bus",
                title: "Транспорт",
                description:
                  "Перемещайтесь пешком, на автобусах между городами или на личном авто",
              },
              {
                icon: "TrendingUp",
                title: "Прогрессия",
                description:
                  "Меняйте работу на престижную, копите капитал, покупайте недвижимость",
              },
              {
                icon: "Map",
                title: "Миграция",
                description:
                  "Переезжайте в другие города и регионы в поисках лучшей жизни",
              },
            ].map((item, index) => (
              <Card key={index} className="hover-scale bg-card border-border">
                <CardContent className="p-6">
                  <Icon
                    name={item.icon}
                    className="text-primary mb-4"
                    size={40}
                  />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mechanics" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Механики</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Briefcase" className="text-primary mt-1" size={32} />
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Трудоустройство</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Этап 1:</strong> Поиск
                        вакансии через доску объявлений или знакомства
                      </p>
                      <p>
                        <strong className="text-foreground">Этап 2:</strong> Поездка в
                        другой город с оплатой проезда и проживания
                      </p>
                      <p>
                        <strong className="text-foreground">Этап 3:</strong> Сдача
                        экзамена (теория за компьютером + физические нормативы)
                      </p>
                      <p>
                        <strong className="text-foreground">Этап 4:</strong> Получение
                        результата и трудоустройство при успехе
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="DollarSign" className="text-secondary mt-1" size={32} />
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Экономика и выживание</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>При банкротстве вы можете стать бомжем и ночевать на улице</p>
                      <p>
                        <strong className="text-foreground">Вызов "Дорога домой":</strong>{" "}
                        Пешком дойти до дома из другого города при банкротстве
                      </p>
                      <p>Награда за успешное возвращение: +1000 дублей для старта</p>
                      <p className="font-medium text-foreground">
                        Хлеб: 36₽ | Зарплата дворника: 1500₽ | Квартира: от 500000₽
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Home" className="text-primary mt-1" size={32} />
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Жильё</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="MapPin" className="text-muted-foreground" size={20} />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Спавн:</strong> Начальная
                          локация
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Hotel" className="text-muted-foreground" size={20} />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Гостиница:</strong>{" "}
                          Временное жильё
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Key" className="text-muted-foreground" size={20} />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Аренда:</strong> Долгосрочное
                          проживание
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Home" className="text-primary" size={20} />
                        <span className="text-foreground">
                          <strong>Покупка:</strong> Собственная недвижимость
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="GraduationCap" className="text-secondary mt-1" size={32} />
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Образование и служба</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Закончите школу, затем колледж или университет по желанию</p>
                      <p>
                        Мужчины проходят военную службу после медицинской комиссии
                      </p>
                      <p>
                        Возможность откосить по состоянию здоровья с медицинской справкой
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="download" className="py-24 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/49644197-c85f-4335-9d71-ac5f1b02ab8c.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Начни свою жизнь</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Доступно на PC и мобильных устройствах. Выбери свою платформу и погрузись в
            реальность.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Card className="hover-scale w-64 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Monitor" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">PC</h3>
                <p className="text-muted-foreground mb-4">Windows / macOS / Linux</p>
                <Button className="w-full" size="lg">
                  Скачать
                  <Icon name="Download" className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
            <Card className="hover-scale w-64 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Smartphone" className="text-secondary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">Mobile</h3>
                <p className="text-muted-foreground mb-4">Android / iOS</p>
                <Button className="w-full" size="lg" variant="secondary">
                  Скачать
                  <Icon name="Download" className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground mt-12">
            Рекомендуемый возраст: 16+
          </p>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Сызрань: Жизнь как она есть. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
