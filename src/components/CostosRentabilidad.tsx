import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { TrendingUp, TrendingDown, DollarSign, Package, Users, FileText } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export function CostosRentabilidad() {
  const kpis = [
    {
      titulo: 'Ingresos Totales',
      valor: '$125,450',
      cambio: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      titulo: 'Costos de Producción',
      valor: '$78,200',
      cambio: '+8.1%',
      trend: 'up',
      icon: Package,
      color: 'text-orange-600',
    },
    {
      titulo: 'Margen de Ganancia',
      valor: '37.6%',
      cambio: '+2.4%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-600',
    },
    {
      titulo: 'Costo por Unidad',
      valor: '$24.50',
      cambio: '-3.2%',
      trend: 'down',
      icon: FileText,
      color: 'text-purple-600',
    },
  ];

  const ingresosData = [
    { mes: 'Ene', ingresos: 45000, costos: 28000, ganancia: 17000 },
    { mes: 'Feb', ingresos: 52000, costos: 31000, ganancia: 21000 },
    { mes: 'Mar', ingresos: 48000, costos: 29000, ganancia: 19000 },
    { mes: 'Abr', ingresos: 61000, costos: 35000, ganancia: 26000 },
    { mes: 'May', ingresos: 58000, costos: 33000, ganancia: 25000 },
    { mes: 'Jun', ingresos: 70000, costos: 40000, ganancia: 30000 },
  ];

  const costosCategoria = [
    { categoria: 'Materiales', valor: 35000 },
    { categoria: 'Mano de Obra', valor: 28000 },
    { categoria: 'Operación', valor: 12000 },
    { categoria: 'Transporte', valor: 3200 },
  ];

  const productosPorMargen = [
    { nombre: 'Camisa Ejecutiva', costo: 18, precio: 45, margen: 60 },
    { nombre: 'Pantalón Casual', costo: 22, precio: 52, margen: 58 },
    { nombre: 'Vestido Formal', costo: 35, precio: 95, margen: 63 },
    { nombre: 'Chaqueta', costo: 45, precio: 98, margen: 54 },
    { nombre: 'Blusa Diseño', costo: 15, precio: 38, margen: 61 },
  ];

  const COLORS = ['#FFB400', '#2F80ED', '#27AE60', '#EFA700', '#E63946'];

  return (
    <div className="min-h-screen overflow-auto" style={{ backgroundColor: 'var(--ui-bg)' }}>
      <div className="p-6 space-y-6 max-w-[1600px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Costos y Rentabilidad
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Análisis financiero y de rentabilidad
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Exportar Reporte</Button>
            <Button
              style={{
                backgroundColor: 'var(--brand-accent)',
                color: 'var(--brand-primary)',
                border: 'none',
              }}
            >
              Generar Análisis
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index} style={{ borderColor: 'var(--ui-border)' }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {kpi.titulo}
                </CardTitle>
                <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {kpi.valor}
                </div>
                <p className="text-xs flex items-center gap-1" style={{ color: kpi.trend === 'up' ? 'var(--state-success)' : 'var(--state-error)' }}>
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {kpi.cambio} vs mes anterior
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Income vs Costs Chart */}
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                Ingresos vs Costos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ingresosData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                  <XAxis dataKey="mes" stroke="#5E5E5E" />
                  <YAxis stroke="#5E5E5E" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ingresos" stroke="#27AE60" strokeWidth={2} name="Ingresos" />
                  <Line type="monotone" dataKey="costos" stroke="#E63946" strokeWidth={2} name="Costos" />
                  <Line type="monotone" dataKey="ganancia" stroke="#FFB400" strokeWidth={2} name="Ganancia" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Cost Distribution Chart */}
          <Card style={{ borderColor: 'var(--ui-border)' }}>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
                Distribución de Costos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={costosCategoria}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.categoria}: $${entry.valor.toLocaleString()}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="valor"
                  >
                    {costosCategoria.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Products by Margin */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Rentabilidad por Producto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={productosPorMargen}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                <XAxis dataKey="nombre" stroke="#5E5E5E" />
                <YAxis stroke="#5E5E5E" />
                <Tooltip />
                <Legend />
                <Bar dataKey="costo" fill="#E63946" name="Costo ($)" />
                <Bar dataKey="precio" fill="#27AE60" name="Precio Venta ($)" />
                <Bar dataKey="margen" fill="#FFB400" name="Margen (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cost Breakdown Table */}
        <Card style={{ borderColor: 'var(--ui-border)' }}>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-primary)' }}>
              Desglose Detallado de Costos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {costosCategoria.map((categoria, index) => {
                const total = costosCategoria.reduce((sum, c) => sum + c.valor, 0);
                const porcentaje = ((categoria.valor / total) * 100).toFixed(1);
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span style={{ color: 'var(--text-primary)' }}>{categoria.categoria}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                          ${categoria.valor.toLocaleString()}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {porcentaje}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${porcentaje}%`,
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
