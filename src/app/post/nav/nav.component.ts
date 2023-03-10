import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  myPosts() {}
  @Output()
  TopicChanged: EventEmitter<string> = new EventEmitter<string>();

  emitTopicChange(data: string) {
    this.TopicChanged.emit(data);
  }
}
