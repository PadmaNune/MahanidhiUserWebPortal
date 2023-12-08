import { Component, OnInit } from '@angular/core';
import { Badge } from 'src/app/models/badge';
import { BadgeService } from 'src/app/services/bagde.service';

@Component({
  selector: 'app-badges-add',
  templateUrl: './badges-add.component.html',
  styleUrls: ['./badges-add.component.css']
})

export class BadgesAddComponent implements OnInit {

  badge: Badge = new Badge();

  constructor(public badgeservice: BadgeService) {
  }
  ngOnInit(): void {

  }
  addBadge() {
    this.badgeservice.addBadge(this.badge).subscribe((data: any) => {
      console.log(data);
    });
  }
}
