import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  public message:string=''
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any){}
  ngOnInit(): void {
   this.message = this.data.message
  }

}
