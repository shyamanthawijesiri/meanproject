import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // post=[
  //   {title:'first', content: 'this first'},
  //   {title:'second ', content: 'this second'},
  //   {title:'third', content: 'this third'},
  // ]

  @Input() post: Post[] = [];
}
