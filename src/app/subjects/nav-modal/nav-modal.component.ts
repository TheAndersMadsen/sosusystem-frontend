import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import {SubjectDto} from "../shared/subject.dto";
import {Observable} from "rxjs";

@Component({
  selector: 'app-nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.scss']
})
export class NavModalComponent implements OnInit {

  @Input() selectedFirstName : string;
  @Input() selectedId : string;
  @Input() selectedLastName : string;
  constructor() { }


  ngOnInit(): void {
  }

}
