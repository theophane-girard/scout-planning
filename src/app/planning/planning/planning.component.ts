import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/app/core/lang';
import { DisplaySettingsService } from '../display-settings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanningService } from '../planning.service';
import { Planning } from 'src/app/models/planning';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  readonly LANG = LANG
  showMaterial: boolean
  showActDuration: boolean

  constructor(
    private displaySettingService: DisplaySettingsService,
    private router: Router,
    private route: ActivatedRoute,
    private planningService: PlanningService
  ) { }

  ngOnInit() {
    
    if (this.route.snapshot.paramMap.get("id")) {
      let planning: Planning
      this.planningService.getPlanning(+this.route.snapshot.paramMap.get("id")).pipe(
        switchMap(planning => {
          planning = planning
          return this.planningService.getBlocks(planning.id)
        }),
        switchMap(blocks => {
          planning.blocks = blocks
          return of(true)
        })
      ).subscribe()
    }
    
    this.displaySettingService.$showActDuration.subscribe(value => this.showActDuration = value)
    this.displaySettingService.$showMaterial.subscribe(value => this.showMaterial = value)
    this.displaySettingService.notifyChanges()
  }

  updateShowMaterial() {
    this.displaySettingService.updateShowMaterial(this.showMaterial)
  }

  updateShowActDuration() {
    this.displaySettingService.updateShowActDuration(this.showActDuration)
  }
}
