"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { AuthForm } from "@/components/auth-form";
import { ProtectedRoute } from "@/components/protected-route";
import { useRouter } from "next/navigation";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

interface Order {
  id: string;
  vendedor: string;
  items: { nombre: string; cantidad: number }[];
  timestamp: string;
  status: "pending" | "in-progress" | "completed";
}

const initialOrders: Order[] = [
  {
    id: "12345",
    vendedor: "Juan Pérez",
    items: [
      { nombre: "Camiseta Básica", cantidad: 3 },
      { nombre: "Pantalón Cargo", cantidad: 2 },
    ],
    timestamp: "hace 5 minutos",
    status: "pending",
  },
  // Add more example orders as needed
];

export default function BodegaPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState(initialOrders);

  const columns = {
    pending: {
      title: "Pendientes",
      items: orders.filter((order) => order.status === "pending"),
    },
    "in-progress": {
      title: "En Progreso",
      items: orders.filter((order) => order.status === "in-progress"),
    },
    completed: {
      title: "Completados",
      items: orders.filter((order) => order.status === "completed"),
    },
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const orderId = result.draggableId;
    const newStatus = destination.droppableId as Order["status"];

    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus }
        : order
    ));
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Panel de Bodega</h1>
        <AuthForm role="bodeguero" />
      </div>
    );
  }

  return (
    <ProtectedRoute role="bodeguero">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel de Bodega</h1>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Bienvenido, {user.name}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                logout();
                router.push("/");
              }}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(columns).map(([columnId, column]) => (
              <div key={columnId} className="bg-secondary/30 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
                <Droppable droppableId={columnId}>
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="space-y-4"
                    >
                      {column.items.map((order, index) => (
                        <Draggable
                          key={order.id}
                          draggableId={order.id}
                          index={index}
                        >
                          {(provided) => (
                            <Card
                              className="p-6 space-y-4 bg-background"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="text-sm text-muted-foreground">Pedido #{order.id}</p>
                                  <h3 className="text-lg font-semibold">Vendedor: {order.vendedor}</h3>
                                </div>
                                <Badge variant="secondary">
                                  {column.title.slice(0, -1)}
                                </Badge>
                              </div>
                              
                              <div className="space-y-2">
                                {order.items.map((item, i) => (
                                  <div key={i} className="flex justify-between items-center">
                                    <span>{item.nombre}</span>
                                    <span className="font-medium">x{item.cantidad}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="pt-4 border-t">
                                <p className="text-sm text-muted-foreground">
                                  Solicitado {order.timestamp}
                                </p>
                              </div>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </ProtectedRoute>
  );
}