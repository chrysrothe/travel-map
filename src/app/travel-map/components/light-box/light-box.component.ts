import { Component, Input, HostBinding, Output, OnChanges, EventEmitter } from '@angular/core';
import { Spot, Destination } from 'src/app/data/models/destination.model';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.less']
})
export class LightBoxComponent implements OnChanges {
  @Input() public spot: Spot;
  @Input() public destination: Destination;

  @HostBinding('class.is-active')
  @Input() public isActive: boolean;

  @Output() public closeClick: EventEmitter<void> = new EventEmitter<void>();

  public position: number;

  ngOnChanges(): void {
    this.position = this.getPicturePosition();
  }

  public onCloseClick(): void {
    this.isActive = false;
    this.closeClick.emit();
  }

  private getPicturePosition(): number {
    return this.getCurrentIndex() + 1;
  }

  private getCurrentIndex(): number {
    if (!this.destination.spots) {
      return;
    }
    return this.destination.spots.indexOf(this.spot);
  }

  public onSlideClick(slide: number): void {
    const lastIndex = this.destination.spots.length - 1;
    let nextIndex = this.getCurrentIndex() + slide;

    if (nextIndex > lastIndex) {
      nextIndex = 0;
    }

    if (nextIndex < 0) {
      nextIndex = lastIndex;
    }

    this.spot = this.destination.spots[nextIndex];
    this.position = this.getPicturePosition();
  }
}
