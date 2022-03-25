import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ITheme } from '../shared/interfaces/theme';
import{ContentService} from './../content.service'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  themes: ITheme[] = [];
  constructor(private contentService : ContentService) { }

  ngOnInit(): void {
    this.contentService.getThemes$()
    .pipe(
      tap(themes => this.themes = themes)
    )
    .subscribe();
  }

}
