import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemPerPage: any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();

  totalPages = 0;
  pages: number[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  pageClick(page: number) {
    if (page > this.totalPages) return;
    this.onClick.emit(page);
  }
}
