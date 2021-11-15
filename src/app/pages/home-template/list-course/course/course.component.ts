import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/_core/services/share-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course : any;
  constructor(private sharedata : ShareDataService) { }

  ngOnInit(): void {
  }
  xemNhanh(){
    this.sharedata.sharingData(this.course)
  }

}
