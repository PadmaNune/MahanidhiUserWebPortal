import { Component } from '@angular/core';
import { SPReview } from 'src/app/models/Serviceproviderreviews';
import { SPReviewService } from '../../../services/service-provider-review.service'

@Component({
  selector: 'app-service-provider-details',
  templateUrl: './service-provider-details.component.html',
  styleUrls: ['./service-provider-details.component.css']
})
export class ServiceProviderDetailsComponent {
  review: SPReview = new SPReview();
  constructor(private SPReviewService: SPReviewService) { }

  ngOnInit(): void {


  };
  addReview() {
    this.SPReviewService.addSPReview(this.review).subscribe((data: any) => {
      console.log(data);
    });
  }
}

