import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Settings, Users, Database, Bell, Shield, FileText } from 'lucide-react';

export function Configuracion() {
  const configuraciones = [
    {
      categoria: 'Sistema',
      icon: Settings,
      items: [
        { nombre: 'Nombre de la Empresa', valor: 'LECAB Textiles', tipo: 'text' },
        { nombre: 'Moneda', valor: 'USD ($)', tipo: 'select' },
        { nombre: 'Zona Horaria', valor: 'UTC-5', tipo: 'select' },
        { nombre: 'Formato de Fecha', valor: 'DD/MM/YYYY', tipo: 'select' },
      ],
    },
    {
      categoria: 'Usuarios y Permisos',
      icon: Users,
      items: [
        { nombre: 'Permitir registro de nuevos usuarios', valor: false, tipo: 'boolean' },
        { nombre: 'Requerir aprobación de administrador', valor: true, tipo: 'boolean' },
        { nombre: 'Autenticación de dos factores', valor: true, tipo: 'boolean' },
      ],
    },
    {
      categoria: 'Base de Datos',
      icon: Database,
      items: [
        { nombre: 'URL de Supabase', valor: 'https://[proyecto].supabase.co', tipo: 'text' },
        { nombre: 'API Key', valor: '••••••••••••••••', tipo: 'password' },
        { nombre: 'Respaldo automático', valor: true, tipo: 'boolean' },
        { nombre: 'Frecuencia de respaldo', valor: 'Diario', tipo: 'select' },
      ],
    },
    {
      categoria: 'Notificaciones',
      icon: Bell,
      items: [
        { nombre: 'Notificar pedidos urgentes', valor: true, tipo: 'boolean' },
        { nombre: 'Alertas de bajo stock', valor: true, tipo: 'boolean' },
        { nombre: 'Resumen diario por email', valor: false, tipo: 'boolean' },
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6 max-w-[1200px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Configuración
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Administra los parámetros del sistema
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
            Guardar Cambios
          </Button>
        </div>

        {/* Configuration Sections */}
        {configuraciones.map((seccion, index) => (
          <Card key={index} style={{ borderColor: 'var(--ui-border)' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                <seccion.icon className="w-5 h-5" style={{ color: 'var(--brand-accent)' }} />
                {seccion.categoria}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {seccion.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.tipo === 'boolean' ? (
                      <div className="flex items-center justify-between">
                        <Label htmlFor={`switch-${index}-${itemIndex}`} className="cursor-pointer">
                          {item.nombre}
                        </Label>
                        <Switch
                          id={`switch-${index}-${itemIndex}`}
                          checked={item.valor as boolean}
                        />
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor={`input-${index}-${itemIndex}`}>
                          {item.nombre}
                        </Label>
                        <Input
                          id={`input-${index}-${itemIndex}`}
                          type={item.tipo}
                          defaultValue={item.valor as string}
                          placeholder={item.nombre}
                        />
                      </div>
                    )}
                    {itemIndex < seccion.items.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Security Section */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              <Shield className="w-5 h-5" style={{ color: 'var(--brand-accent)' }} />
              Seguridad y Privacidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--ui-bg)' }}>
                <h4 className="font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Política de Privacidad
                </h4>
                <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                  LECAB – Gestión y Producción no está diseñado para recopilar información personal identificable (PII) ni datos sensibles. No utilice este sistema para almacenar información confidencial de clientes o empleados.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Registro de auditoría</Label>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Mantener registro de todas las acciones del sistema
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Encriptación de datos</Label>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Encriptar información sensible en la base de datos
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Section */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              <FileText className="w-5 h-5" style={{ color: 'var(--brand-accent)' }} />
              Integraciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: 'var(--ui-border)' }}>
                <div>
                  <h4 className="font-medium" style={{ color: 'var(--text-primary)' }}>Supabase</h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Base de datos y autenticación
                  </p>
                </div>
                <Button variant="outline">Configurar</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: 'var(--ui-border)' }}>
                <div>
                  <h4 className="font-medium" style={{ color: 'var(--text-primary)' }}>API Externa</h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Conectar con sistemas externos
                  </p>
                </div>
                <Button variant="outline">Configurar</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card style={{ borderColor: 'var(--state-error)', borderWidth: '1px' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--state-error)' }}>
              Zona de Peligro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label style={{ color: 'var(--text-primary)' }}>Restablecer configuración</Label>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Restaurar todos los valores por defecto
                  </p>
                </div>
                <Button variant="outline" style={{ borderColor: 'var(--state-error)', color: 'var(--state-error)' }}>
                  Restablecer
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label style={{ color: 'var(--text-primary)' }}>Eliminar todos los datos</Label>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Esta acción no se puede deshacer
                  </p>
                </div>
                <Button style={{ backgroundColor: 'var(--state-error)', color: 'white' }}>
                  Eliminar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
