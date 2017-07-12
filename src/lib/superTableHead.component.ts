import { Component, Input } from '@angular/core';
import { SuperTableState } from './SuperTableState';

@Component({
  selector: 'super-table-head',
  template: `
    <table [ngClass]="tableClasses">
      <thead>
        <tr>
          <th scope="col" *ngFor="let column of state.columns" table-header [column]="column" [ngClass]="{ hasSort: column.hasSort }"></th>
        </tr>
        <tr *ngIf="state.hasAnyFilters" class="filter-row">
          <td *ngFor="let column of state.columns">
            <div *ngIf="column.hasFilter" [ngSwitch]="column.def.filter.type">
              <div *ngSwitchCase="'TEXT'" text-filter [filter]="column.def.filter" [column]="column"></div>
              <div *ngSwitchCase="'ENUM'" enum-filter [filter]="column.def.filter" [column]="column"></div>
            </div>
          </td>
        </tr>
      </thead>
    </table>
  `,
  styles: [`
    :host {
      overflow-y: scroll;
      display: block;
    }
    .hasSort {
      cursor: pointer;
    }
    table {
      table-layout: fixed;
      width: 100%;
      margin-bottom: 0;
      border-bottom: none;
    }
    .filter-row td {
      padding: 0;
      vertical-align: middle;
    }
  `]
})
export class SuperTableHead {
  @Input() tableClasses: any;

  constructor(public state: SuperTableState) {}
}
