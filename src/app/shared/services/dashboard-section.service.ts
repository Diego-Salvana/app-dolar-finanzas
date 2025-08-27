import { Injectable, signal } from '@angular/core';

type PanelSection = 'dollars' | 'comparator';

@Injectable({
  providedIn: 'root'
})
export class DashboardSectionService {
  private activeSection = signal<PanelSection>('dollars');

  /** Retorna el valor de la última sección activa del dashboard. Utiliza internamente una `signal`. */
  getActiveSection (): string {
    return this.activeSection();
  }

  setActiveSection (section: PanelSection) {
    this.activeSection.set(section);
  }
}
