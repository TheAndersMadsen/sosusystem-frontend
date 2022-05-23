import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {SubjectList} from "../shared/subject-list";
import {SubjectService} from "../shared/subject.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  subjects$: any;
  $error: string | undefined;

  constructor(private _service: SubjectService) { }

  ngOnInit(): void {
    this._service.getSubjects().subscribe((result) => {
        this.subjects$ = result
    })
  }

}
