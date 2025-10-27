import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Plus, Mail, Phone } from 'lucide-react';

export function Equipo() {
  const equipo = [
    {
      nombre: 'María García',
      rol: 'Supervisora de Moldería',
      departamento: 'Moldería',
      email: 'maria.garcia@lecab.com',
      telefono: '+1 234 567 1001',
      pedidosAsignados: 3,
      estado: 'activo',
      iniciales: 'MG',
    },
    {
      nombre: 'Juan López',
      rol: 'Especialista en Corte',
      departamento: 'Corte',
      email: 'juan.lopez@lecab.com',
      telefono: '+1 234 567 1002',
      pedidosAsignados: 2,
      estado: 'activo',
      iniciales: 'JL',
    },
    {
      nombre: 'Laura Sánchez',
      rol: 'Maestra de Confección',
      departamento: 'Confección',
      email: 'laura.sanchez@lecab.com',
      telefono: '+1 234 567 1003',
      pedidosAsignados: 4,
      estado: 'activo',
      iniciales: 'LS',
    },
    {
      nombre: 'Pedro Ramírez',
      rol: 'Inspector de Calidad',
      departamento: 'Control de Calidad',
      email: 'pedro.ramirez@lecab.com',
      telefono: '+1 234 567 1004',
      pedidosAsignados: 5,
      estado: 'activo',
      iniciales: 'PR',
    },
    {
      nombre: 'Carlos Ruiz',
      rol: 'Técnico de Moldería',
      departamento: 'Moldería',
      email: 'carlos.ruiz@lecab.com',
      telefono: '+1 234 567 1005',
      pedidosAsignados: 2,
      estado: 'activo',
      iniciales: 'CR',
    },
    {
      nombre: 'Ana Martínez',
      rol: 'Operaria de Corte',
      departamento: 'Corte',
      email: 'ana.martinez@lecab.com',
      telefono: '+1 234 567 1006',
      pedidosAsignados: 3,
      estado: 'activo',
      iniciales: 'AM',
    },
  ];

  const departamentos = [
    { nombre: 'Moldería', miembros: 2, color: 'bg-blue-500' },
    { nombre: 'Corte', miembros: 2, color: 'bg-purple-500' },
    { nombre: 'Confección', miembros: 1, color: 'bg-orange-500' },
    { nombre: 'Control de Calidad', miembros: 1, color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6 max-w-[1600px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Equipo / Responsables
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Gestión del equipo de producción
            </p>
          </div>
          <Button
            style={{
              backgroundColor: 'var(--brand-accent)',
              color: 'var(--brand-primary)',
              border: 'none',
            }}
            className="hover:opacity-90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Agregar Miembro
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--brand-accent)' }}>
                  {equipo.length}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Total Miembros
                </p>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--state-success)' }}>
                  {equipo.filter(e => e.estado === 'activo').length}
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
                  {departamentos.length}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Departamentos
                </p>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--state-warning)' }}>
                  {equipo.reduce((sum, e) => sum + e.pedidosAsignados, 0)}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Asignaciones Activas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Departments */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Departamentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {departamentos.map((dept, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border"
                  style={{ borderColor: 'var(--ui-border)' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${dept.color}`} />
                    <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                      {dept.nombre}
                    </h3>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {dept.miembros} miembro{dept.miembros !== 1 ? 's' : ''}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Miembros del Equipo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipo.map((miembro, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border hover:shadow-md transition-shadow"
                  style={{ borderColor: 'var(--ui-border)', backgroundColor: 'white' }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar>
                      <AvatarFallback style={{ backgroundColor: 'var(--brand-accent)', color: 'var(--brand-primary)' }}>
                        {miembro.iniciales}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                        {miembro.nombre}
                      </h3>
                      <p className="text-sm truncate" style={{ color: 'var(--text-secondary)' }}>
                        {miembro.rol}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <Badge variant="outline">{miembro.departamento}</Badge>
                  </div>

                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{miembro.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <Phone className="w-3 h-3" />
                      {miembro.telefono}
                    </div>
                  </div>

                  <div className="pt-3 border-t flex justify-between items-center" style={{ borderColor: 'var(--ui-border)' }}>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Asignaciones
                    </span>
                    <Badge style={{ backgroundColor: 'var(--brand-accent)', color: 'var(--brand-primary)' }}>
                      {miembro.pedidosAsignados}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
