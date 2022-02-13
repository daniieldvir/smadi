import { Component, OnInit } from '@angular/core';
import { Where } from 'src/app/models/where.model';
import { whereService } from 'src/app/services/where.service';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.scss'],
})
export class WhereComponent implements OnInit {
  where!: Where[];

  constructor(private whereService: whereService) {}

  ngOnInit(): void {
    this.whereService.loadWhere().subscribe((where) => {
      this.where = where;
    });
  }
}
