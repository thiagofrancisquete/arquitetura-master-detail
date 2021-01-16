
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EntryService } from './../shared/entry.service';
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
})
export class EntryListComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit(): void {
    this.entryService.getAll().subscribe(
      (entries) => (this.entries = entries),
      (error) => console.log('Erro ao carregar a lista de categorias: ')
    );
  }

  deleteEntry(entry) {
    const mustDelete = confirm('Deseja realmente excluir esse item?');

    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        () =>
          (this.entries = this.entries.filter((el) => el !== entry)),
        () => console.log('Entrada excluida')
      );
    }
  }
}
