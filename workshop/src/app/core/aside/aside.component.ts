import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post';
import{ ContentService } from './../../content.service'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

   posts: IPost[] = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getPosts$().subscribe(posts => this.posts = posts);
    console.log(this.posts);
    
  }

}
