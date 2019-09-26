import { Component, OnInit } from '@angular/core';
import { TimeBlock } from 'src/app/models/time-block';
import { CustomBlockService } from '../custom-block.service';

@Component({
  selector: 'custom-block',
  templateUrl: './custom-block.component.html',
  styleUrls: ['./custom-block.component.scss']
})
export class CustomBlockComponent implements OnInit {
  timeBlocks: TimeBlock[] = []
  
  constructor(private customBlockService: CustomBlockService) { }

  ngOnInit() {
    this.customBlockService.$customBlocks.subscribe(customBlocks => this.timeBlocks = customBlocks)
    this.customBlockService.notifyCustomBlocksChanged()
  }
}
