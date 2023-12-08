import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeService } from '../../../services/bagde.service';
import { Badge } from 'src/app/models/badge';

@Component({
  selector: 'app-badges-list',
  templateUrl: './badges-list.component.html',
  styleUrls: ['./badges-list.component.css']
})
export class BadgesListComponent {
  badges: Badge[] = [];

  constructor(private badgeService: BadgeService) { }

  ngOnInit() {
    this.loadBadges();
  }

  loadBadges() {
    this.badgeService.getBadges().subscribe(data => {
      this.badges = data;
    });
  }

  // Implement delete method
  deleteBadge(id: number) {
    this.badgeService.deleteBadge(id).subscribe(() => {
      this.loadBadges();
    });
  }
}
