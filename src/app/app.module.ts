import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllVideosPageComponent } from './all-videos-page/all-videos-page.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoComponent } from './video/video.component';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PlayerComponent } from './player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllVideosPageComponent,
    VideoComponent,
    PlayerComponent,
    CommentListComponent,
    CommentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
