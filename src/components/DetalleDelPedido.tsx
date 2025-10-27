import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import {
  Calendar,
  User,
  Package,
  DollarSign,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Paperclip,
} from 'lucide-react';

export function DetalleDelPedido() {
  const pedido = {
    id: 'PED-001',
    fecha: '2025-10-25',
    cliente: 'Boutique Milano',
    contacto: 'María Rossi',
    producto: 'Camisa Ejecutiva',
    cantidad: 50,
    estado: 'En Moldería',
    prioridad: 'alta',
    progreso: 30,
    responsable: 'María García',
    fechaEntrega: '2025-11-05',
    costoProduccion: '$900',
    precioVenta: '$2,500',
    margen: '$1,600',
  };

  const etapas = [
    { nombre: 'Moldería', estado: 'en-progreso', progreso: 30, responsable: 'María García', fecha: '2025-10-25' },
    { nombre: 'Corte', estado: 'pendiente', progreso: 0, responsable: 'Juan López', fecha: '-' },
    { nombre: 'Confección', estado: 'pendiente', progreso: 0, responsable: 'Laura Sánchez', fecha: '-' },
    { nombre: 'Control de Calidad', estado: 'pendiente', progreso: 0, responsable: 'Pedro Ramírez', fecha: '-' },
    { nombre: 'Finalizado', estado: 'pendiente', progreso: 0, responsable: '-', fecha: '-' },
  ];

  const adjuntos = [
    { nombre: 'especificaciones-tecnicas.pdf', tamano: '2.4 MB', fecha: '2025-10-25' },
    { nombre: 'patron-molderia.pdf', tamano: '1.8 MB', fecha: '2025-10-25' },
    { nombre: 'muestra-referencia.jpg', tamano: '3.2 MB', fecha: '2025-10-25' },
  ];

  const actividad = [
    {
      tipo: 'creacion',
      usuario: 'Admin',
      accion: 'Pedido creado',
      fecha: '2025-10-25 09:00',
      detalles: 'Pedido inicial creado en el sistema',
    },
    {
      tipo: 'asignacion',
      usuario: 'Admin',
      accion: 'Asignado a María García',
      fecha: '2025-10-25 09:15',
      detalles: 'Fase de Moldería asignada',
    },
    {
      tipo: 'progreso',
      usuario: 'María García',
      accion: 'Progreso actualizado a 30%',
      fecha: '2025-10-26 14:30',
      detalles: 'Patrones básicos completados',
    },
    {
      tipo: 'comentario',
      usuario: 'María García',
      accion: 'Comentario agregado',
      fecha: '2025-10-26 15:00',
      detalles: 'Requiere tela especial - coordinando con cliente',
    },
  ];

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'completado':
        return <CheckCircle className="w-5 h-5" style={{ color: 'var(--state-success)' }} />;
      case 'en-progreso':
        return <Clock className="w-5 h-5" style={{ color: 'var(--brand-accent)' }} />;
      case 'pendiente':
        return <AlertCircle className="w-5 h-5" style={{ color: 'var(--ui-border)' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6 max-w-[1600px]">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                {pedido.id}
              </h1>
              <Badge
                style={{
                  backgroundColor: pedido.prioridad === 'alta' ? 'var(--state-error)' : 'var(--state-warning)',
                  color: 'white',
                }}
              >
                {pedido.prioridad.toUpperCase()}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800">
                {pedido.estado}
              </Badge>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>
              Creado el {pedido.fecha} • Entrega: {pedido.fechaEntrega}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Editar</Button>
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

        {/* Progress Overview */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  Progreso General
                </span>
                <span className="text-2xl font-bold" style={{ color: 'var(--brand-accent)' }}>
                  {pedido.progreso}%
                </span>
              </div>
              <Progress value={pedido.progreso} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="resumen" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="progreso">Progreso</TabsTrigger>
            <TabsTrigger value="adjuntos">Adjuntos</TabsTrigger>
            <TabsTrigger value="actividad">Actividad</TabsTrigger>
          </TabsList>

          {/* Resumen Tab */}
          <TabsContent value="resumen" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Client Info */}
              <Card style={{ borderColor: 'var(--ui-border)' }}>
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                    Información del Cliente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                    <div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Cliente
                      </p>
                      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                        {pedido.cliente}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                    <div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Contacto
                      </p>
                      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                        {pedido.contacto}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Info */}
              <Card style={{ borderColor: 'var(--ui-border)' }}>
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                    Información del Producto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Package className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                    <div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Producto
                      </p>
                      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                        {pedido.producto}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                    <div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Cantidad
                      </p>
                      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                        {pedido.cantidad} unidades
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Financial Info */}
            <Card style={{ borderColor: 'var(--ui-border)' }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                  Información Financiera
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--ui-bg)' }}>
                    <DollarSign className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--state-error)' }} />
                    <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                      Costo Producción
                    </p>
                    <p className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {pedido.costoProduccion}
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--ui-bg)' }}>
                    <DollarSign className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--state-success)' }} />
                    <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                      Precio Venta
                    </p>
                    <p className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {pedido.precioVenta}
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--ui-bg)' }}>
                    <DollarSign className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--brand-accent)' }} />
                    <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                      Margen
                    </p>
                    <p className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {pedido.margen}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progreso Tab */}
          <TabsContent value="progreso" className="space-y-4">
            <Card style={{ borderColor: 'var(--ui-border)' }}>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {etapas.map((etapa, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          {getEstadoIcon(etapa.estado)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                                {etapa.nombre}
                              </h4>
                              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                Responsable: {etapa.responsable}
                              </p>
                            </div>
                            <span className="text-sm font-medium" style={{ color: 'var(--brand-accent)' }}>
                              {etapa.progreso}%
                            </span>
                          </div>
                          <Progress value={etapa.progreso} className="mb-2" />
                          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                            {etapa.fecha !== '-' ? `Iniciado: ${etapa.fecha}` : 'Pendiente'}
                          </p>
                        </div>
                      </div>
                      {index < etapas.length - 1 && <Separator className="my-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Adjuntos Tab */}
          <TabsContent value="adjuntos" className="space-y-4">
            <Card style={{ borderColor: 'var(--ui-border)' }}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                    Archivos Adjuntos
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Paperclip className="w-4 h-4 mr-2" />
                    Agregar Archivo
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {adjuntos.map((adjunto, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border"
                      style={{ borderColor: 'var(--ui-border)' }}
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                        <div>
                          <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                            {adjunto.nombre}
                          </p>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            {adjunto.tamano} • {adjunto.fecha}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Descargar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Actividad Tab */}
          <TabsContent value="actividad" className="space-y-4">
            <Card style={{ borderColor: 'var(--ui-border)' }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                  Historial de Actividad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actividad.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-2 h-2 rounded-full mt-2"
                          style={{ backgroundColor: 'var(--brand-accent)' }}
                        />
                        {index < actividad.length - 1 && (
                          <div
                            className="w-0.5 flex-1 mt-2"
                            style={{ backgroundColor: 'var(--ui-border)' }}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                          {item.accion}
                        </p>
                        <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                          {item.detalles}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {item.usuario} • {item.fecha}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
