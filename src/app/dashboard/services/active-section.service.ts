import { Injectable, signal } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ActiveSectionService {
   section = signal<'dollars' | 'comparator'>('dollars');

   setActiveSection (section: 'dollars' | 'comparator') {
      this.section.set(section);
   }
}
