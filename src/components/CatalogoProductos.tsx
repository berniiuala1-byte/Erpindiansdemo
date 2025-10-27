import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
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
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { Textarea } from './ui/textarea';

export function CatalogoProductos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productos = [
    {
      codigo: 'PROD-001',
      nombre: 'Camisa Ejecutiva',
      categoria: 'Camisas',
      talla: 'M, L, XL',
      precioProduccion: '$18.00',
      precioVenta: '$45.00',
      margen: '60%',
      stock: 120,
    },
    {
      codigo: 'PROD-002',
      nombre: 'Pantalón Casual',
      categoria: 'Pantalones',
      talla: '30, 32, 34, 36',
      precioProduccion: '$22.00',
      precioVenta: '$52.00',
      margen: '58%',
      stock: 85,
    },
    {
      codigo: 'PROD-003',
      nombre: 'Vestido Formal',
      categoria: 'Vestidos',
      talla: 'S, M, L',
      precioProduccion: '$35.00',
      precioVenta: '$95.00',
      margen: '63%',
      stock: 42,
    },
    {
      codigo: 'PROD-004',
      nombre: 'Chaqueta',
      categoria: 'Abrigos',
      talla: 'M, L, XL, XXL',
      precioProduccion: '$45.00',
      precioVenta: '$98.00',
      margen: '54%',
      stock: 28,
    },
    {
      codigo: 'PROD-005',
      nombre: 'Blusa Diseño',
      categoria: 'Blusas',
      talla: 'S, M, L',
      precioProduccion: '$15.00',
      precioVenta: '$38.00',
      margen: '61%',
      stock: 95,
    },
  ];

  const filteredProductos = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6 max-w-[1600px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Catálogo de Productos
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Gestión completa del catálogo de productos
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
                Nuevo Producto
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Agregar Nuevo Producto
                </DialogTitle>
                <DialogDescription>
                  Complete la información del nuevo producto
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre del Producto</Label>
                    <Input id="nombre" placeholder="Ej: Camisa Premium" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoría</Label>
                    <Input id="categoria" placeholder="Ej: Camisas" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tallas">Tallas Disponibles</Label>
                    <Input id="tallas" placeholder="S, M, L, XL" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="costo">Costo Producción</Label>
                    <Input id="costo" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="precio">Precio Venta</Label>
                    <Input id="precio" type="number" placeholder="0.00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descripción</Label>
                  <Textarea id="descripcion" placeholder="Detalles del producto..." rows={3} />
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
                  Guardar Producto
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
              <Input
                placeholder="Buscar por nombre, código o categoría..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Productos ({filteredProductos.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Tallas</TableHead>
                  <TableHead>Costo Producción</TableHead>
                  <TableHead>Precio Venta</TableHead>
                  <TableHead>Margen</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProductos.map((producto) => (
                  <TableRow key={producto.codigo}>
                    <TableCell className="font-medium">{producto.codigo}</TableCell>
                    <TableCell>{producto.nombre}</TableCell>
                    <TableCell>{producto.categoria}</TableCell>
                    <TableCell>{producto.talla}</TableCell>
                    <TableCell>{producto.precioProduccion}</TableCell>
                    <TableCell>{producto.precioVenta}</TableCell>
                    <TableCell>
                      <span style={{ color: 'var(--state-success)' }}>
                        {producto.margen}
                      </span>
                    </TableCell>
                    <TableCell>{producto.stock}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" style={{ color: 'var(--state-error)' }} />
                        </Button>
                      </div>
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
