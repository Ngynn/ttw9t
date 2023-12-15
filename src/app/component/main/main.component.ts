import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/data.model';
import { ApiService } from '../../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: Data[] = [];

  itemList: any = [];

  itemList$: Observable<Data[]> = new Observable();

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.get();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.get();
      this.dialog.closeAll();
    });
  }

  openEditDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
      this.dialog.closeAll();
    });
  }

  async get() {
    try {
      this.data = await this.apiService.get();
      console.log(this.data);
    } catch (error) {
      console.error(error);
    }
  }

  delete(id: number) {
    this.apiService.delete(id).then((res) => {
      console.log(res);
      this.get();
    });
  }

  addToCart(piano: any) {
    this.itemList.push(piano);
    console.log(this.itemList);
  }

  
}
