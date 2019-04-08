import { Component, OnInit } from '@angular/core';
import { Suggest } from '../suggest.interface';
import { SuggestService } from '../suggest.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {
  public suggestions: string[];
  private keywords: string[];
  private debounceTime = 200;

  public keyword = new FormControl();
  public keywordSubscription: Subscription;

  constructor(private suggestService: SuggestService) {}

  public ngOnInit(): void {
    this.keywordSubscription = this.keyword.valueChanges
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.getKeywords();
      });
  }

  public ngOnDestroy(): void {
    this.keywordSubscription.unsubscribe();
  }

  public goToGoogle(phrase: string): void {
    window.location.href = 'https://www.google.com/search?q=' + phrase;
  }

  private getKeywords(): void {
    this.suggestService.getSuggestJson().subscribe((data: Suggest) => {
      if (data) {
        this.keywords = data.keywords;
        this.setSuggestions();
      }
    });
  }

  private setSuggestions(): void {
    let keyword = this.keyword.value.toLocaleLowerCase();
    this.suggestions = this.keywords.filter(val => val.toLocaleLowerCase().indexOf(keyword) != -1);
  }
}
