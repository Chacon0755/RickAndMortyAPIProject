import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: string = "";
  character: any;

  constructor(
    private activatedRoute: ActivatedRoute, private http: HttpClient
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'))
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id') || "";
    this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
      .subscribe(res => {
        console.log(res)
        this.character = res
      })
  }

}
