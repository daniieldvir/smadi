import { Component, OnInit } from '@angular/core';
import { Testimonials } from 'src/app/models/testimonials.models';
import { testimonialsService } from 'src/app/services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials!: Testimonials[];
  constructor(private testimonialsService: testimonialsService) {}

  ngOnInit(): void {
    this.testimonialsService.loadTestimonials().subscribe((testimonials) => {
      this.testimonials = testimonials;
    });
  }
}
