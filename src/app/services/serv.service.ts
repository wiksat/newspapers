import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ServService {
  public nazwyGazet: Array<any> = []
  constructor(private http: HttpClient) { }

  getAllNewspapers() {
    const url = "http://localhost/czasopisma/API/getNewspapers.php";
    return this.http.get(url);
  }

  getNewspaperYears(paperName: string) {
    const url = "http://localhost/czasopisma/API/getNewspaperYears.php";
    return this.http.get(`${url}?name=${paperName}`);
  }

  getNewspapcerYearNumber(name: string, number: string) {
    const url = "http://localhost/czasopisma/API/getNewspaperYearNumbers.php";
    return this.http.get(`${url}?name=${name}&year=${number}`);
  }
}
