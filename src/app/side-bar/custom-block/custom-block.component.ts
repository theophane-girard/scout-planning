import { Component, OnInit } from '@angular/core';
import { TimeBlock } from 'src/app/models/time-block';
import { CustomBlockService } from '../custom-block.service';
import { CoreFunctionService } from 'src/app/core/core-function.service';

@Component({
  selector: 'custom-block',
  templateUrl: './custom-block.component.html',
  styleUrls: ['./custom-block.component.scss']
})
export class CustomBlockComponent implements OnInit {
  timeBlocks: TimeBlock[] = []
  
  constructor(private customBlockService: CustomBlockService) { }

  ngOnInit() {
    this.customBlockService.$timeBlock.subscribe(customBlocks => this.timeBlocks = customBlocks)
    this.customBlockService.notifyCustomBlocksChanged()
  }

  convertToHour(number: number) {
    return CoreFunctionService.time_convert(number)
  }
}
