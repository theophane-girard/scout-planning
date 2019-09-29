import { Component, OnInit, ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';
import { ActivityService } from 'src/app/planning/activities.service';
import { ActivityBlock } from 'src/app/models/activity-block';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LANG } from "../../core/lang";
import { PdfComponent } from '../pdf/pdf.component';

@Component({
  selector: 'settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {

  readonly LANG = LANG
  @ViewChild('pdf', { static: false }) pdf: PdfComponent

  private activityBlocks: ActivityBlock[] = []
  constructor(
    private actService: ActivityService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.actService.$activityBlocks.subscribe(actB => this.activityBlocks = actB)
    this.actService.notifyChanges()
  }

  downloadAsJson() {
    var blob = new Blob([JSON.stringify(this.activityBlocks)], { type: "text/plain;charset=utf-8" });
    var url = window.URL.createObjectURL(blob);
    saveAs(blob, "planning.json");
    window.open(url);

  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
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
                console.error(LANG.ERRORS.EMPTY_CONTENT_FILE)
                this.showMessage(LANG.ERRORS.EMPTY_CONTENT_FILE)
              }
            } catch (error) {
              console.error(LANG.ERRORS.INVALID_CONTENT_FILE, error)
              this.showMessage(LANG.ERRORS.INVALID_CONTENT_FILE)
            }
          } else {
            console.error(LANG.ERRORS.INVALID_CONTENT_FILE)
            this.showMessage(LANG.ERRORS.INVALID_CONTENT_FILE)
          }
        } else {
          console.error(LANG.ERRORS.INVALID_CONTENT_FILE)
          this.showMessage(LANG.ERRORS.INVALID_CONTENT_FILE)
        }
      }
    }
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, LANG.GENERAL.OK, {
      duration: 4000,
    });
  }

  downloadAsPdf() {
    this.pdf.pdf.saveAs('planning.pdf')
  }

}
