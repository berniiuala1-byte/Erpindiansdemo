import { useState } from 'react';
import { cn } from './ui/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from './ui/sidebar';
import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  TrendingUp,
  DollarSign,
  BookOpen,
  Users,
  UserCog,
  Settings,
  Moon,
  Sun,
} from 'lucide-react';
import { Button } from './ui/button';

interface LayoutProps {
  children: React.ReactNode;
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const menuItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 'pedidos',
    title: 'Pedidos',
    icon: ShoppingCart,
  },
  {
    id: 'detalle-pedido',
    title: 'Detalle del Pedido',
    icon: FileText,
  },
  {
    id: 'seguimiento-produccion',
    title: 'Seguimiento de Producción',
    icon: TrendingUp,
  },
  {
    id: 'costos-rentabilidad',
    title: 'Costos y Rentabilidad',
    icon: DollarSign,
  },
  {
    id: 'catalogo-productos',
    title: 'Catálogo de Productos',
    icon: BookOpen,
  },
  {
    id: 'clientes',
    title: 'Clientes',
    icon: Users,
  },
  {
    id: 'equipo',
    title: 'Equipo / Responsables',
    icon: UserCog,
  },
  {
    id: 'configuracion',
    title: 'Configuración',
    icon: Settings,
  },
];

export function Layout({ children, activeModule, onModuleChange }: LayoutProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar variant="inset">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>LECAB</span>
                <span className="truncate text-xs opacity-90">Gestión y Producción</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        asChild
                        onClick={() => onModuleChange(item.id)}
                        className={cn(
                          activeModule === item.id && 'bg-sidebar-accent text-sidebar-accent-foreground'
                        )}
                      >
                        <a href="#" className="flex items-center gap-3">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="w-full gap-2"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center px-4">
              <SidebarTrigger />
              <div className="flex-1" />
            </div>
          </header>
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}