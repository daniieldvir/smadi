import { Component, OnInit } from '@angular/core';
import { MyBelieve } from 'src/app/models/myBelieve.model';
import { believeService } from 'src/app/services/myBelieve.service';

@Component({
  selector: 'app-my-believe',
  templateUrl: './my-believe.component.html',
  styleUrls: ['./my-believe.component.scss'],
})
export class MyBelieveComponent implements OnInit {
  myBelieves!: MyBelieve[];

  constructor(private believeService: believeService) {}

  ngOnInit(): void {
    this.believeService.loadBelieves().subscribe((myBelieve) => {
      this.myBelieves = myBelieve;
    });
  }
}
