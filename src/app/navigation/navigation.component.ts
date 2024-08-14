import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  categories: string[] = ['Новинки', 'Сноуборд', 'Лыжи', 'Скейт', 'Лонгборд', 'Вейкборд', 'Серф', 'Сап', 'Одежда', 'Обувь', 'Аксессуары', 'Бренды', 'Распродажа'];

  constructor() { }

  ngOnInit(): void {
  }

}
