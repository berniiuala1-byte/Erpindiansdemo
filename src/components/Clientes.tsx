import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
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
import { Plus, Search, Mail, Phone, MapPin } from 'lucide-react';

export function Clientes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const clientes = [
    {
      id: 'CLI-001',
      nombre: 'Boutique Milano',
      contacto: 'María Rossi',
      email: 'contacto@boutiquemilano.com',
      telefono: '+1 234 567 8901',
      direccion: 'Av. Principal 123, Ciudad',
      pedidosActivos: 3,
      totalCompras: '$12,450',
      estado: 'activo',
    },
    {
      id: 'CLI-002',
      nombre: 'Fashion Store',
      contacto: 'Carlos García',
      email: 'info@fashionstore.com',
      telefono: '+1 234 567 8902',
      direccion: 'Calle Comercio 456, Ciudad',
      pedidosActivos: 2,
      totalCompras: '$8,900',
      estado: 'activo',
    },
    {
      id: 'CLI-003',
      nombre: 'Elite Clothing',
      contacto: 'Ana Martínez',
      email: 'elite@clothing.com',
      telefono: '+1 234 567 8903',
      direccion: 'Centro Comercial, Local 12',
      pedidosActivos: 4,
      totalCompras: '$15,600',
      estado: 'activo',
    },
    {
      id: 'CLI-004',
      nombre: 'Urban Style',
      contacto: 'Jorge López',
      email: 'ventas@urbanstyle.com',
      telefono: '+1 234 567 8904',
      direccion: 'Zona Industrial 789',
      pedidosActivos: 1,
      totalCompras: '$6,200',
      estado: 'activo',
    },
    {
      id: 'CLI-005',
      nombre: 'Premium Fashion',
      contacto: 'Laura Sánchez',
      email: 'premium@fashion.com',
      telefono: '+1 234 567 8905',
      direccion: 'Plaza Mayor 321',
      pedidosActivos: 0,
      totalCompras: '$3,800',
      estado: 'inactivo',
    },
  ];

  const filteredClientes = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.contacto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6 max-w-[1600px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Clientes
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Gestión de cartera de clientes
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
                Nuevo Cliente
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Agregar Nuevo Cliente
                </DialogTitle>
                <DialogDescription>
                  Complete la información del cliente
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre-empresa">Nombre de la Empresa</Label>
                    <Input id="nombre-empresa" placeholder="Ej: Fashion Store" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contacto">Persona de Contacto</Label>
                    <Input id="contacto" placeholder="Ej: Juan Pérez" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="contacto@empresa.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" placeholder="+1 234 567 8900" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input id="direccion" placeholder="Dirección completa" />
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
                  Guardar Cliente
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--brand-accent)' }}>
                  {clientes.length}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Total Clientes
                </p>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--state-success)' }}>
                  {clientes.filter(c => c.estado === 'activo').length}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Activos
                </p>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--interaction-hover)' }}>
                  {clientes.reduce((sum, c) => sum + c.pedidosActivos, 0)}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Pedidos Activos
                </p>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--state-warning)' }}>
                  $46,950
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Facturación Total
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
              <Input
                placeholder="Buscar por nombre, contacto o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </CardContent>
        </Card>

        {/* Clients Table */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Lista de Clientes ({filteredClientes.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Contacto</TableHead>
                  <TableHead>Información</TableHead>
                  <TableHead>Pedidos Activos</TableHead>
                  <TableHead>Total Compras</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClientes.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell className="font-medium">{cliente.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{cliente.nombre}</div>
                        <div className="text-sm flex items-center gap-1 mt-1" style={{ color: 'var(--text-secondary)' }}>
                          <MapPin className="w-3 h-3" />
                          {cliente.direccion}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{cliente.contacto}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                          <Mail className="w-3 h-3" />
                          {cliente.email}
                        </div>
                        <div className="text-sm flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                          <Phone className="w-3 h-3" />
                          {cliente.telefono}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge style={{ backgroundColor: 'var(--brand-accent)', color: 'var(--brand-primary)' }}>
                        {cliente.pedidosActivos}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{cliente.totalCompras}</TableCell>
                    <TableCell>
                      <Badge
                        style={{
                          backgroundColor: cliente.estado === 'activo' ? 'var(--state-success)' : 'var(--ui-border)',
                          color: 'white',
                        }}
                      >
                        {cliente.estado}
                      </Badge>
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
