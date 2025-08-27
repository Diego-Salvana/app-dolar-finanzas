export interface Feature {
  icon: string;
  title: string;
  iconColor?: string;
  description: string;
}

export const featuresData = [
  {
    icon: '<img src="favicon.ico" alt="" width="45px" height="45px">',
    title: 'Angular v18',
    description: 'Desarrollo con Angular v18 y las ventajas de Signals para crear una interfaz reactiva y fluida.'
  },
  {
    icon: '<i class="text-5xl pi pi-server pb-1"></i>',
    iconColor: 'text-blue-800',
    title: 'SSR',
    description: 'Implementación de Server Side Rendering ofreciendo mayor rendimiento y tiempos de carga optimizados.'
  },
  {
    icon: '<img src="primeng-logo.svg" alt="" width="45px" height="45px">',
    title: 'PrimeNG',
    description: 'Diseño funcional utilizando componentes personalizables y temas de PrimeNG.'
  }
];
