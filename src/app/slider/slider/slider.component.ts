import { Component, ElementRef, ViewChild } from "@angular/core"
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    "./slider.component.scss",
  ],
})
export class SliderComponent {
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>;

  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  slider: KeenSliderInstance;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.2,
          spacing: 20,
        },
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
