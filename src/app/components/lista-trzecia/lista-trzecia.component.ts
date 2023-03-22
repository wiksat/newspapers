import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-lista-trzecia',
  templateUrl: './lista-trzecia.component.html',
  styleUrls: ['./lista-trzecia.component.css']
})
export class ListaTrzeciaComponent implements OnInit {
  lata: any = []
  nazwa: string = ""
  czasopisma: any;
  constructor(private route: ActivatedRoute, private serv: ServService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: any) => {
      const { name, year } = res.params;
      this.nazwa = res.params.name;
      this.serv.getNewspaperYears(name).subscribe((res: any) => {
        res.map((x: any) => {
          x.routerLink = `/czasopismo/${name}/${x.year}`;
        });
        this.lata = res;
        console.log(this.lata)

      })
      this.serv
        .getNewspapcerYearNumber(name, year)
        .subscribe((res: any) => {
          res.map((x: any) => {
            (x.src = `http://atarionline.pl/biblioteka/czasopisma/${name}/${x.miniaturka}`),
              (x.fileSrc = `http://atarionline.pl/biblioteka/czasopisma/${name}/${x.plik}`);
          });
          this.czasopisma = res;
          console.log(this.czasopisma)
          if (this.czasopisma.length == 0) {
            // console.log("dziaa")
            this.router.navigate(['/czasopismo/' + name])
          }
        });
    });

  }
}
