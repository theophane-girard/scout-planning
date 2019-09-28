import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { ActivityService } from 'src/app/planning/activities.service';
import { ActivityBlock } from 'src/app/models/activity-block';

@Component({
  selector: 'settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {

  private activityBlocks: ActivityBlock[] = []
  constructor(private actService: ActivityService) { }

  ngOnInit() {
    this.actService.$activityBlocks.subscribe(actB => this.activityBlocks = actB )
    this.actService.notifyChanges()
  }

  downLoadFile() {
    var blob = new Blob([JSON.stringify(this.activityBlocks)], {type: "text/plain;charset=utf-8"});
    var url = window.URL.createObjectURL(blob);
    saveAs(blob, "planning.json");
    window.open(url);

  }

  onFileChange(event: any) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file)
  
      reader.onload = () => {
        let fileContent
        if (reader.result) {
          fileContent = reader.result
          if (typeof fileContent === 'string') {
            let result: ActivityBlock[]
            try {
              result = JSON.parse(fileContent)
              if (result.length > 0) {
                this.actService.setActivityBlocks(result)
              } else {
                console.error('no data')
              }
            } catch (error) {
              console.error('file content is not valid json', error)
            }
          } else {
            console.error('file content is not valid')
          }
        } else {
          console.error('file content is not valid');
        }
      }
    }
  }

}
