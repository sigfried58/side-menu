export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ElementType; // Changed from ComponentType to ElementType for Lucide icons
  children?: NavigationItem[];
}
