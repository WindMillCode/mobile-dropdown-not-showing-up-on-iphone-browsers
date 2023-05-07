
import { ChangeDetectionStrategy,ChangeDetectorRef, Component } from '@angular/core';
import { WmlInfiniteDropdownOption, WmlInfiniteDropdownParams } from '@windmillcode/angular-wml-infinite-dropdown';
import { WmlMobileNavZeroParams } from '@windmillcode/angular-wml-mobile-nav-zero';
import { WMLCustomComponent } from '@windmillcode/wml-components-base';
import { delay, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(
    private cdref:ChangeDetectorRef
  ) {}
  params =new WmlMobileNavZeroParams({

    items: [
      new WmlInfiniteDropdownParams({
        items:["Home","About","Contact"],
        customize:{

        }
      })
    ]
  })

  ngAfterViewInit(){

    this.params.open()
    this.cdref.detectChanges()
  }
}
