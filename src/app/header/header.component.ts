import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService) {}

  onSaveRecipes() {
    this.dataStorage.storeRecipes();
  }

  getRecipes() {
    this.dataStorage.getRecipes().subscribe();
  }
}
