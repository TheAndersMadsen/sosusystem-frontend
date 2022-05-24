import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubjectService} from "../shared/subject.service";
import {ActivatedRoute} from "@angular/router";
import {SubjectDto} from "../shared/subject.dto";
import {GeneralDto} from "../shared/general.dto";

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  private selectedId: string
  subject : SubjectDto
  generalDto : GeneralDto
  newSubject : SubjectDto

  constructor(private _service: SubjectService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = String(this._route.snapshot.paramMap.get('id'));
    console.log(this.selectedId,'test')
    this._service.getSubjectById(this.selectedId).subscribe((result) => {
      this.subject = result
    })
    console.log()  /// undefined
  }

  clickOnSave(){
    this.subject = this.newSubject
    this._service.updateSubject(this.selectedId,this.subject).subscribe();
    //this._service.updateSubjectGeneralInformation(this.selectedId,this.subject.general._id,this.generalDto)
  }



}
