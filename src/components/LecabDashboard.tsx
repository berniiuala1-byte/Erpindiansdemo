import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
  TrendingUp,
  ShoppingCart,
  Package,
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle,
  Users,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

export function LecabDashboard() {
  const stats = [
    {
      title: 'Pedidos Activos',
      value: '24',
      change: '+8 esta semana',
      icon: ShoppingCart,
      color: 'text-accent',
    },
    {
      title: 'En Producción',
      value: '15',
      change: '62% completado',
      icon: TrendingUp,
      color: 'text-blue-600',
    },
    {
      title: 'Productos en Catálogo',
      value: '156',
      change: '+12 nuevos',
      icon: Package,
      color: 'text-green-600',
    },
    {
      title: 'Facturación Mensual',
      value: '$48,560',
      change: '+15.3% vs mes anterior',
      icon: DollarSign,
      color: 'text-orange-600',
    },
  ];

  const pedidosRecientes = [
    { id: 'PED-001', cliente: 'Boutique Milano', producto: 'Camisa Ejecutiva', estado: 'En Moldería', progreso: 25, prioridad: 'alta' },
    { id: 'PED-002', cliente: 'Fashion Store', producto: 'Pantalón Casual', estado: 'Corte', progreso: 50, prioridad: 'media' },
    { id: 'PED-003', cliente: 'Elite Clothing', producto: 'Vestido Formal', estado: 'Confección', progreso: 75, prioridad: 'alta' },
    { id: 'PED-004', cliente: 'Urban Style', producto: 'Chaqueta', estado: 'Control de Calidad', progreso: 90, prioridad: 'baja' },
  ];

  const actividadReciente = [
    { id: 1, mensaje: 'Pedido PED-005 movido a Confección', tiempo: '5 min', tipo: 'success' },
    { id: 2, mensaje: 'Nuevo cliente registrado: Premium Fashion', tiempo: '15 min', tipo: 'info' },
    { id: 3, mensaje: 'Material bajo stock: Tela Algodón Premium', tiempo: '1 hora', tipo: 'warning' },
    { id: 4, mensaje: 'Pedido PED-003 completado', tiempo: '2 horas', tipo: 'success' },
  ];

  const getEstadoColor = (estado: string) => {
    const colores: Record<string, string> = {
      'En Moldería': 'bg-blue-100 text-blue-800',
      'Corte': 'bg-purple-100 text-purple-800',
      'Confección': 'bg-orange-100 text-orange-800',
      'Control de Calidad': 'bg-green-100 text-green-800',
    };
    return colores[estado] || 'bg-gray-100 text-gray-800';
  };

  const getPrioridadBadge = (prioridad: string) => {
    const estilos: Record<string, { bg: string; text: string }> = {
      alta: { bg: 'bg-red-100', text: 'text-red-800' },
      media: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
      baja: { bg: 'bg-green-100', text: 'text-green-800' },
    };
    const estilo = estilos[prioridad] || estilos.media;
    return (
      <Badge className={`${estilo.bg} ${estilo.text} border-0`}>
        {prioridad.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6 max-w-[1600px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>Dashboard</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Resumen de operaciones y producción</p>
          </div>
          <div className="flex gap-2">
            <Button 
              style={{ 
                backgroundColor: 'var(--brand-accent)', 
                color: 'var(--brand-primary)',
                border: 'none'
              }}
              className="hover:opacity-90"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Nuevo Pedido
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} style={{ borderColor: 'var(--ui-border)' }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl" style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                  {stat.value}
                </div>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pedidos Recientes */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Pedidos Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pedidosRecientes.map((pedido) => (
                <div
                  key={pedido.id}
                  className="p-4 rounded-lg border"
                  style={{ borderColor: 'var(--ui-border)', backgroundColor: 'white' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                        {pedido.id}
                      </span>
                      <span style={{ color: 'var(--text-secondary)' }}>•</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{pedido.cliente}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getPrioridadBadge(pedido.prioridad)}
                      <Badge className={getEstadoColor(pedido.estado)}>
                        {pedido.estado}
                      </Badge>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                      {pedido.producto}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={pedido.progreso} className="flex-1" />
                    <span className="text-sm font-medium" style={{ color: 'var(--brand-accent)' }}>
                      {pedido.progreso}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actividad Reciente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {actividadReciente.map((actividad) => (
                  <div
                    key={actividad.id}
                    className="flex items-start gap-3 p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--ui-bg)' }}
                  >
                    {actividad.tipo === 'success' && (
                      <CheckCircle className="w-4 h-4 mt-0.5" style={{ color: 'var(--state-success)' }} />
                    )}
                    {actividad.tipo === 'warning' && (
                      <AlertCircle className="w-4 h-4 mt-0.5" style={{ color: 'var(--state-warning)' }} />
                    )}
                    {actividad.tipo === 'info' && (
                      <Clock className="w-4 h-4 mt-0.5" style={{ color: 'var(--interaction-hover)' }} />
                    )}
                    <div className="flex-1">
                      <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                        {actividad.mensaje}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                        hace {actividad.tiempo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                Resumen Rápido
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: 'var(--ui-bg)' }}>
                  <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Pedidos Urgentes</span>
                  <Badge style={{ backgroundColor: 'var(--state-error)', color: 'white' }}>8</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: 'var(--ui-bg)' }}>
                  <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Pendiente de Envío</span>
                  <Badge style={{ backgroundColor: 'var(--state-warning)', color: 'white' }}>12</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: 'var(--ui-bg)' }}>
                  <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Completados Hoy</span>
                  <Badge style={{ backgroundColor: 'var(--state-success)', color: 'white' }}>15</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: 'var(--ui-bg)' }}>
                  <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Clientes Activos</span>
                  <Badge style={{ backgroundColor: 'var(--brand-accent)', color: 'var(--brand-primary)' }}>48</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
