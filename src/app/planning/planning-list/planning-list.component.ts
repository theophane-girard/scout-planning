import { Component, OnInit } from '@angular/core';
import { Planning } from 'src/app/models/planning';
import { PlanningService } from '../planning.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent implements OnInit {
  plannings: Planning[]

  constructor(
    private planningService: PlanningService,
    private router: Router
  ) { }

  ngOnInit() {
    this.planningService.getPlanningList().subscribe(user => {
      console.log(user);
      if (user[0]) {
        this.plannings = user[0].plannings
      }
    })
  }

  goToPlanning(id: number) {
    console.log('id', id);
    
    this.router.navigate([`/plannings/${id}`])
  }
}
