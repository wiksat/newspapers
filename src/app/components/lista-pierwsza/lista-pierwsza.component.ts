import { Component, OnInit } from '@angular/core';
import { ServService } from "src/app/services/serv.service";
@Component({
  selector: 'app-lista-pierwsza',
  templateUrl: './lista-pierwsza.component.html',
  styleUrls: ['./lista-pierwsza.component.css']
})
export class ListaPierwszaComponent implements OnInit {
  list: any = []
  constructor(private serv: ServService) { }

  ngOnInit(): void {
    this.serv.getAllNewspapers().subscribe((res: any) => {
      console.log(res);
      res.map(
        (x: any) =>
          (x.src = `http://www.atarionline.pl/biblioteka/czasopisma/img/${x.src}`)
      );
      res.forEach((element: any) => {
        this.serv.nazwyGazet.push(element.name)
      });
      console.log(this.serv)
      this.list = res
    });
  }
}
