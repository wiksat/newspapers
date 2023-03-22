import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-lista-druga',
  templateUrl: './lista-druga.component.html',
  styleUrls: ['./lista-druga.component.css'],
})
export class ListaDrugaComponent implements OnInit {
  public guzik = 'ok';
  public val = '';
  lata: any = [];
  nazwa: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serv: ServService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: any) => {
      const { name } = res.params;
      if (this.serv.nazwyGazet.includes(name)) {
        // console.log("dziaaaaaaaaaaaaaaaaaa");
        this.nazwa = res.params.name;
        this.serv.getNewspaperYears(name).subscribe((res: any) => {
          res.map((x: any) => {
            x.routerLink = `/czasopismo/${name}/${x.year}`;
          });
          this.lata = res;
        });
      } else {
        this.router.navigate(['']);
      }
    });
  }
  onClickMe() {
    this.val = 'hohoho';
  }
}
