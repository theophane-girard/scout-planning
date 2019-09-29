import { Component, OnInit } from '@angular/core';
import { TimeBlock } from 'src/app/models/time-block';
import { CustomBlockService } from '../custom-block.service';
import { CoreFunctionService } from 'src/app/core/core-function.service';
import { LANG } from "../../core/lang";

@Component({
  selector: 'custom-block',
  templateUrl: './custom-block.component.html',
  styleUrls: ['./custom-block.component.scss']
})
export class CustomBlockComponent implements OnInit {
  timeBlocks: TimeBlock[] = []
  readonly LANG = LANG

  constructor(private customBlockService: CustomBlockService) { }

  ngOnInit() {
    this.customBlockService.$timeBlock.subscribe(customBlocks => this.timeBlocks = customBlocks)
    this.customBlockService.notifyCustomBlocksChanged()
  }

  convertToHour(number: number) {
    return CoreFunctionService.time_convert(number)
  }

  onChange(event) {
    this.customBlockService.setCustomValue(event.value)
  }
}
