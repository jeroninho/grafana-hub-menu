import { BarChart3, FileText, Calendar, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { label: "Dashboard", href: "#dashboard", icon: BarChart3, active: true },
  { label: "Reports", href: "#reports", icon: FileText },
  { label: "Agendar consultoria", href: "#consultoria", icon: Calendar },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { theme, setTheme } = useTheme();
  const collapsed = state === "collapsed";

  return (
    <Sidebar variant="sidebar" className={collapsed ? "w-14" : "w-64"}>
      <SidebarContent>
        {/* Logo Section */}
        <div className={`p-4 border-b ${collapsed ? "px-2" : ""}`}>
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="IA Agents Logo" 
              className="h-8 w-auto flex-shrink-0"
            />
            {!collapsed && (
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                IA Agents
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton 
                    asChild 
                    className={item.active ? "bg-primary text-primary-foreground" : ""}
                  >
                    <a href={item.href} className="flex items-center">
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && <span className="ml-3">{item.label}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Theme Toggle */}
        <div className={`mt-auto p-4 border-t ${collapsed ? "px-2" : ""}`}>
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "default"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-full justify-start"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            {!collapsed && <span className="ml-3">Alternar tema</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}