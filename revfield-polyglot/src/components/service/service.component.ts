import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  constructor(
    public dialogRef: MatDialogRef<ServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

}