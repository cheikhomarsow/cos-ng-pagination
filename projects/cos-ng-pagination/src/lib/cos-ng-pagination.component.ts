import { Component, OnInit, Input, Output, EventEmitter, ɵConsole } from '@angular/core';
import { availableLanguages, translations } from './localization/localization';

@Component({
  selector: 'cos-pagination',
  templateUrl: './cos-ng-pagination.component.html',
  styleUrls: ['./cos-ng-pagination.component.css']
})
export class CosNgPaginationComponent implements OnInit {

  @Input() total: number;
  @Input() current: number;
  @Input() size: number;
  @Input() startFrom: number;
  @Input() isDirectionLinksEnabled: boolean;
  @Input() info: boolean;
  @Input() language: string;

  @Output() pageChanged = new EventEmitter();

  pages: number[];
  totalPages: number;
  defaultLang = 'en';
  nextBtnText: string;
  previousBtnText: string;
  showingText: string;
  toText: string;
  ofText: string;
  showing: number;
  to: number;

  ngOnInit() {
    this.startFrom = this.startFrom == 0 ? this.startFrom : 1;
    this.current = this.current < this.startFrom ? this.startFrom : this.current;
    this.totalPages = Math.ceil(this.total / this.size);
    this.info = this.info == false ? this.info : true;
    this.initLang();
    this.getInfos();
    this.getPages(this.totalPages, this.current);
  }

  getPages(totalPages: number, current: number) {
    this.pages = [];
    this.pages.push(parseInt(`${this.startFrom}`));
    if (totalPages === 1) {
      return;
    }

    if (current > 1 + this.startFrom) {
      if (current == totalPages && totalPages > 3) {
        this.pages.push(current - 2);
      }
      this.pages.push(current - 1);
    }

    if (current != this.startFrom && current != totalPages) {
      this.pages.push(current);
    }

    if (current < totalPages - 1) {
      this.pages.push(current + 1);
      if (current == this.startFrom && totalPages > 3) {
        this.pages.push(current + 2);
      }
    }

    if (this.total > this.size) {
      const tp = this.startFrom == 0 ? totalPages - 1 : totalPages;
      this.pages.push(parseInt(`${tp}`));
    }

    this.pages = Array.from(new Set(this.pages));
  }

  goToPage(page: number) {
    if (this.current !== page) {
      this.current = page;
      this.onPageChanged();
      this.getPages(this.totalPages, this.current);
    }
  }

  previewPage() {
    if (this.current > this.startFrom) {
      this.current -= 1;
      this.onPageChanged();
      this.getPages(this.totalPages, this.current);
    }
  }

  nextPage() {
    if (this.current < (this.totalPages - 1 + this.startFrom)) {
      this.current += 1;
      this.onPageChanged();
      this.getPages(this.totalPages, this.current);
    }
  }

  getInfos() {
    this.showing = ((this.current - this.startFrom) * this.size) + 1;
    if (this.total == 0) {
      this.info = false;
    } else {
      if (this.current == this.totalPages) {
        this.to = this.total;
      } else {
        this.to = this.startFrom == 0 ? (this.current + 1) * this.size : this.current * this.size;
      }
    }
    this.to = this.to > this.total ? this.total : this.to;
  }

  onPageChanged() {
    this.pageChanged.emit(this.current);
    this.getInfos();
  }

  initLang() {
    const lang = availableLanguages.includes(this.language) ? this.language : this.defaultLang;
    this.nextBtnText = translations[lang]['sNext']
    this.previousBtnText = translations[lang]['sPrevious']
    this.showingText = translations[lang]['sShowing']
    this.toText = translations[lang]['sTo']
    this.ofText = translations[lang]['sOf']
  }
}
