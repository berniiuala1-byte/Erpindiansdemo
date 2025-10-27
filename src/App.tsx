import { useState } from 'react';
import { Layout } from './components/Layout';
import { LecabDashboard } from './components/LecabDashboard';
import { Pedidos } from './components/Pedidos';
import { DetalleDelPedido } from './components/DetalleDelPedido';
import { SeguimientoProduccion } from './components/SeguimientoProduccion';
import { CostosRentabilidad } from './components/CostosRentabilidad';
import { CatalogoProductos } from './components/CatalogoProductos';
import { Clientes } from './components/Clientes';
import { Equipo } from './components/Equipo';
import { Configuracion } from './components/Configuracion';

export default function App() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <LecabDashboard />;
      case 'pedidos':
        return <Pedidos />;
      case 'detalle-pedido':
        return <DetalleDelPedido />;
      case 'seguimiento-produccion':
        return <SeguimientoProduccion />;
      case 'costos-rentabilidad':
        return <CostosRentabilidad />;
      case 'catalogo-productos':
        return <CatalogoProductos />;
      case 'clientes':
        return <Clientes />;
      case 'equipo':
        return <Equipo />;
      case 'configuracion':
        return <Configuracion />;
      default:
        return <LecabDashboard />;
    }
  };

  return (
    <Layout activeModule={activeModule} onModuleChange={setActiveModule}>
      {renderModule()}
    </Layout>
  );
}