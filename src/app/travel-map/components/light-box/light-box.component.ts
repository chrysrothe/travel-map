import {
  Component,
  Input,
  HostBinding,
  Output,
  OnChanges,
  EventEmitter,
  Renderer2,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { Spot, Destination } from 'src/app/data/models/destination.model';
import { LightBoxService } from '../../services/light-box/light-box.service';

export interface ImageSize {
  height: number;
  width: number;
}

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.less']
})
export class LightBoxComponent implements OnChanges, AfterViewInit {
  @Input() public spot: Spot;
  @Input() public destination: Destination;

  @HostBinding('class.is-active')
  @Input() public isActive: boolean;

  @Output() public closeClick: EventEmitter<void> = new EventEmitter<void>();

  public position: number;
  public hideImage = true;

  @ViewChild('image', { static: false }) imageElement: ElementRef;
  @ViewChild('container', { static: false }) containerElement: ElementRef;

  public constructor(
    private lightBoxService: LightBoxService,
    private renderer: Renderer2,
  ) {}

  public ngAfterViewInit(): void {
    this.loadImage();
  }

  public ngOnChanges(): void {
    this.hideImage = true;
    this.position = this.getPicturePosition();
    this.loadImage();
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.sizeImageAndContainer();
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
    this.hideImage = true;

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

    this.loadImage();
  }

  private loadImage(): void {
    const image = new Image();

    image.onload = () => {
      this.sizeImageAndContainer();
    };

    image.src = this.destination.spots[this.getCurrentIndex()].picture;
  }

  private sizeImageAndContainer(): void {
    const imageWidth = this.imageElement.nativeElement.naturalWidth;
    const imageHeight = this.imageElement.nativeElement.naturalHeight;

    const imageSize: ImageSize = this.lightBoxService.calculateImageSize(imageHeight, imageWidth);

    this.renderer.setStyle(this.imageElement.nativeElement, 'width', `${imageSize.width}px`);
    this.renderer.setStyle(this.imageElement.nativeElement, 'height', `${imageSize.height}px`);

    this.renderer.setStyle(this.containerElement.nativeElement, 'width', `${imageSize.width}px`);

    this.hideImage = false;
  }
}
