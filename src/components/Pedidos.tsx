import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Search, Plus, Filter, Download, Eye } from 'lucide-react';

export function Pedidos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('todos');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const pedidos = [
    {
      id: 'PED-001',
      fecha: '2025-10-25',
      cliente: 'Boutique Milano',
      producto: 'Camisa Ejecutiva',
      cantidad: 50,
      estado: 'En Moldería',
      prioridad: 'alta',
      total: '$2,500',
    },
    {
      id: 'PED-002',
      fecha: '2025-10-24',
      cliente: 'Fashion Store',
      producto: 'Pantalón Casual',
      cantidad: 100,
      estado: 'Corte',
      prioridad: 'media',
      total: '$4,200',
    },
    {
      id: 'PED-003',
      fecha: '2025-10-23',
      cliente: 'Elite Clothing',
      producto: 'Vestido Formal',
      cantidad: 30,
      estado: 'Confección',
      prioridad: 'alta',
      total: '$3,600',
    },
    {
      id: 'PED-004',
      fecha: '2025-10-22',
      cliente: 'Urban Style',
      producto: 'Chaqueta',
      cantidad: 75,
      estado: 'Control de Calidad',
      prioridad: 'baja',
      total: '$5,250',
    },
    {
      id: 'PED-005',
      fecha: '2025-10-21',
      cliente: 'Premium Fashion',
      producto: 'Blusa Diseño',
      cantidad: 40,
      estado: 'Terminado',
      prioridad: 'media',
      total: '$1,800',
    },
  ];

  const clientes = ['Boutique Milano', 'Fashion Store', 'Elite Clothing', 'Urban Style', 'Premium Fashion'];
  const productos = ['Camisa Ejecutiva', 'Pantalón Casual', 'Vestido Formal', 'Chaqueta', 'Blusa Diseño'];

  const getEstadoColor = (estado: string) => {
    const colores: Record<string, string> = {
      'En Moldería': 'bg-blue-100 text-blue-800',
      'Corte': 'bg-purple-100 text-purple-800',
      'Confección': 'bg-orange-100 text-orange-800',
      'Control de Calidad': 'bg-green-100 text-green-800',
      'Terminado': 'bg-gray-100 text-gray-800',
    };
    return colores[estado] || 'bg-gray-100 text-gray-800';
  };

  const getPrioridadBadge = (prioridad: string) => {
    const estilos: Record<string, string> = {
      alta: 'bg-red-100 text-red-800',
      media: 'bg-yellow-100 text-yellow-800',
      baja: 'bg-green-100 text-green-800',
    };
    return estilos[prioridad] || estilos.media;
  };

  const filteredPedidos = pedidos.filter((pedido) => {
    const matchesSearch = 
      pedido.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pedido.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pedido.producto.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterEstado === 'todos' || pedido.estado === filterEstado;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6 max-w-[1600px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Pedidos
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Gestión completa de pedidos de producción
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                style={{
                  backgroundColor: 'var(--brand-accent)',
                  color: 'var(--brand-primary)',
                  border: 'none',
                }}
                className="hover:opacity-90"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Pedido
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Crear Nuevo Pedido
                </DialogTitle>
                <DialogDescription>
                  Complete los detalles del nuevo pedido de producción
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cliente">Cliente</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar cliente" />
                      </SelectTrigger>
                      <SelectContent>
                        {clientes.map((cliente) => (
                          <SelectItem key={cliente} value={cliente.toLowerCase()}>
                            {cliente}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="producto">Producto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar producto" />
                      </SelectTrigger>
                      <SelectContent>
                        {productos.map((producto) => (
                          <SelectItem key={producto} value={producto.toLowerCase()}>
                            {producto}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cantidad">Cantidad</Label>
                    <Input id="cantidad" type="number" placeholder="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prioridad">Prioridad</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar prioridad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alta">Alta</SelectItem>
                        <SelectItem value="media">Media</SelectItem>
                        <SelectItem value="baja">Baja</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fecha-entrega">Fecha de Entrega</Label>
                  <Input id="fecha-entrega" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notas">Notas Especiales</Label>
                  <Textarea id="notas" placeholder="Detalles adicionales del pedido..." rows={3} />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  style={{
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--brand-primary)',
                  }}
                  onClick={() => setIsDialogOpen(false)}
                >
                  Crear Pedido
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters and Search */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Label htmlFor="search">Buscar Pedido</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-3 top-3 h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <Input
                    id="search"
                    placeholder="Buscar por ID, cliente o producto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="w-48">
                <Label htmlFor="filter-estado">Filtrar por Estado</Label>
                <Select value={filterEstado} onValueChange={setFilterEstado}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los estados</SelectItem>
                    <SelectItem value="En Moldería">En Moldería</SelectItem>
                    <SelectItem value="Corte">Corte</SelectItem>
                    <SelectItem value="Confección">Confección</SelectItem>
                    <SelectItem value="Control de Calidad">Control de Calidad</SelectItem>
                    <SelectItem value="Terminado">Terminado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Lista de Pedidos ({filteredPedidos.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Producto</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Prioridad</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPedidos.map((pedido) => (
                  <TableRow key={pedido.id}>
                    <TableCell className="font-medium">{pedido.id}</TableCell>
                    <TableCell>{pedido.fecha}</TableCell>
                    <TableCell>{pedido.cliente}</TableCell>
                    <TableCell>{pedido.producto}</TableCell>
                    <TableCell>{pedido.cantidad}</TableCell>
                    <TableCell>
                      <Badge className={getEstadoColor(pedido.estado)}>
                        {pedido.estado}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPrioridadBadge(pedido.prioridad)}>
                        {pedido.prioridad.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{pedido.total}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
