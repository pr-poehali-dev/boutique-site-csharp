import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const stats = [
    { title: "Всего товаров", value: "324", icon: "Package" },
    { title: "Заказы сегодня", value: "12", icon: "ShoppingCart" },
    { title: "Выручка за месяц", value: "1.2М ₽", icon: "TrendingUp" },
    { title: "Новые клиенты", value: "89", icon: "Users" },
  ];

  const recentOrders = [
    {
      id: "#1234",
      customer: "Анна Иванова",
      amount: "25 000 ₽",
      status: "Обработка",
    },
    {
      id: "#1235",
      customer: "Мария Петрова",
      amount: "18 500 ₽",
      status: "Доставка",
    },
    {
      id: "#1236",
      customer: "Елена Сидорова",
      amount: "12 000 ₽",
      status: "Завершен",
    },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
        <Header />

        <div className="flex items-center justify-center min-h-[80vh]">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">
                Вход в админ-панель
              </CardTitle>
              <p className="text-gray-600">Введите данные для входа</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="admin@boutique.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Пароль</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="w-full mt-6"
              >
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Панель управления</h1>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            <Icon name="LogOut" size={16} className="mr-2" />
            Выйти
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon
                      name={stat.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="ShoppingBag" size={20} />
                Последние заказы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.amount}</p>
                      <Badge variant="outline" className="text-xs">
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Zap" size={20} />
                Быстрые действия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Icon name="Plus" size={20} />
                  Добавить товар
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Icon name="FileText" size={20} />
                  Новая новость
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Icon name="Users" size={20} />
                  Клиенты
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Icon name="BarChart" size={20} />
                  Отчеты
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
