import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Calendar, User, AlertCircle, Clock } from 'lucide-react';

export function SeguimientoProduccion() {
  const columnas = [
    { id: 'molderia', titulo: 'Moldería', color: 'bg-blue-500' },
    { id: 'corte', titulo: 'Corte', color: 'bg-purple-500' },
    { id: 'confeccion', titulo: 'Confección', color: 'bg-orange-500' },
    { id: 'calidad', titulo: 'Control de Calidad', color: 'bg-green-500' },
    { id: 'terminado', titulo: 'Finalizado', color: 'bg-gray-500' },
  ];

  const tarjetas = {
    molderia: [
      {
        id: 'PED-001',
        cliente: 'Boutique Milano',
        producto: 'Camisa Ejecutiva',
        cantidad: 50,
        responsable: 'María García',
        fechaEntrega: '2025-11-05',
        progreso: 30,
        prioridad: 'alta',
        notas: 'Requiere tela especial',
      },
      {
        id: 'PED-006',
        cliente: 'Fashion Store',
        producto: 'Pantalón Deportivo',
        cantidad: 80,
        responsable: 'Carlos Ruiz',
        fechaEntrega: '2025-11-08',
        progreso: 15,
        prioridad: 'media',
      },
    ],
    corte: [
      {
        id: 'PED-002',
        cliente: 'Fashion Store',
        producto: 'Pantalón Casual',
        cantidad: 100,
        responsable: 'Juan López',
        fechaEntrega: '2025-11-03',
        progreso: 50,
        prioridad: 'media',
      },
      {
        id: 'PED-007',
        cliente: 'Urban Style',
        producto: 'Camisa Casual',
        cantidad: 60,
        responsable: 'Ana Martínez',
        fechaEntrega: '2025-11-06',
        progreso: 40,
        prioridad: 'baja',
      },
    ],
    confeccion: [
      {
        id: 'PED-003',
        cliente: 'Elite Clothing',
        producto: 'Vestido Formal',
        cantidad: 30,
        responsable: 'Laura Sánchez',
        fechaEntrega: '2025-11-02',
        progreso: 75,
        prioridad: 'alta',
        notas: 'Acabado premium',
      },
    ],
    calidad: [
      {
        id: 'PED-004',
        cliente: 'Urban Style',
        producto: 'Chaqueta',
        cantidad: 75,
        responsable: 'Pedro Ramírez',
        fechaEntrega: '2025-11-01',
        progreso: 90,
        prioridad: 'baja',
      },
      {
        id: 'PED-008',
        cliente: 'Premium Fashion',
        producto: 'Blazer',
        cantidad: 40,
        responsable: 'Sofia Torres',
        fechaEntrega: '2025-11-04',
        progreso: 85,
        prioridad: 'media',
      },
    ],
    terminado: [
      {
        id: 'PED-005',
        cliente: 'Premium Fashion',
        producto: 'Blusa Diseño',
        cantidad: 40,
        responsable: 'Elena Morales',
        fechaEntrega: '2025-10-28',
        progreso: 100,
        prioridad: 'media',
      },
    ],
  };

  const getPrioridadColor = (prioridad: string) => {
    const colores: Record<string, string> = {
      alta: 'bg-red-100 text-red-800',
      media: 'bg-yellow-100 text-yellow-800',
      baja: 'bg-green-100 text-green-800',
    };
    return colores[prioridad] || colores.media;
  };

  const getDiasRestantes = (fecha: string) => {
    const hoy = new Date();
    const entrega = new Date(fecha);
    const diff = Math.ceil((entrega.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const TarjetaPedido = ({ tarjeta }: { tarjeta: any }) => {
    const diasRestantes = getDiasRestantes(tarjeta.fechaEntrega);
    const esUrgente = diasRestantes <= 3 && tarjeta.progreso < 100;

    return (
      <div
        className="p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        style={{ backgroundColor: 'white', borderColor: 'var(--ui-border)' }}
      >
        <div className="flex items-start justify-between mb-3">
          <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
            {tarjeta.id}
          </span>
          <Badge className={getPrioridadColor(tarjeta.prioridad)}>
            {tarjeta.prioridad.toUpperCase()}
          </Badge>
        </div>

        <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
          {tarjeta.producto}
        </h4>
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
          {tarjeta.cliente}
        </p>

        {tarjeta.notas && (
          <div className="flex items-start gap-2 mb-3 p-2 rounded" style={{ backgroundColor: 'var(--ui-bg)' }}>
            <AlertCircle className="w-4 h-4 mt-0.5" style={{ color: 'var(--state-warning)' }} />
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              {tarjeta.notas}
            </p>
          </div>
        )}

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <User className="w-3 h-3" />
            {tarjeta.responsable}
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <Calendar className="w-3 h-3" />
            {tarjeta.fechaEntrega}
            {esUrgente && (
              <Badge className="ml-auto" style={{ backgroundColor: 'var(--state-error)', color: 'white' }}>
                Urgente
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span>Progreso</span>
            <span className="font-medium" style={{ color: 'var(--brand-accent)' }}>
              {tarjeta.progreso}%
            </span>
          </div>
          <Progress value={tarjeta.progreso} />
        </div>

        <div className="mt-3 pt-3 border-t flex justify-between text-xs" style={{ borderColor: 'var(--ui-border)' }}>
          <span style={{ color: 'var(--text-secondary)' }}>{tarjeta.cantidad} unidades</span>
          <span className="flex items-center gap-1" style={{ color: diasRestantes <= 3 ? 'var(--state-error)' : 'var(--text-secondary)' }}>
            <Clock className="w-3 h-3" />
            {diasRestantes} días
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Seguimiento de Producción
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Gestión visual del flujo de producción
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              Filtrar
            </Button>
            <Button
              style={{
                backgroundColor: 'var(--brand-accent)',
                color: 'var(--brand-primary)',
                border: 'none',
              }}
            >
              Actualizar Estado
            </Button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columnas.map((columna) => {
            const tarjetasColumna = tarjetas[columna.id as keyof typeof tarjetas] || [];
            return (
              <div key={columna.id} className="flex-shrink-0" style={{ width: '320px' }}>
                <Card style={{ borderColor: 'var(--ui-border)', height: 'fit-content' }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${columna.color}`} />
                        <CardTitle className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {columna.titulo}
                        </CardTitle>
                      </div>
                      <Badge variant="secondary">{tarjetasColumna.length}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tarjetasColumna.map((tarjeta) => (
                        <TarjetaPedido key={tarjeta.id} tarjeta={tarjeta} />
                      ))}
                      {tarjetasColumna.length === 0 && (
                        <div
                          className="p-8 text-center rounded-lg border-2 border-dashed"
                          style={{ borderColor: 'var(--ui-border)' }}
                        >
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            Sin pedidos
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--brand-accent)' }}>
                  {Object.values(tarjetas).flat().length}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Pedidos en Producción
                </p>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--state-success)' }}>
                  {tarjetas.terminado.length}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Completados
                </p>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--state-warning)' }}>
                  {Object.values(tarjetas).flat().filter(t => getDiasRestantes(t.fechaEntrega) <= 3 && t.progreso < 100).length}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Urgentes
                </p>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--interaction-hover)' }}>
                  {Math.round(
                    Object.values(tarjetas).flat().reduce((acc, t) => acc + t.progreso, 0) /
                    Object.values(tarjetas).flat().length
                  )}%
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Progreso Promedio
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
