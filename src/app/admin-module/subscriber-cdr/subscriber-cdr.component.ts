import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { SessionStorageService } from 'src/app/session-storage.service';
import { subscriberCdr } from 'src/entity/subscriberCdr';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-subscriber-cdr',
  templateUrl: './subscriber-cdr.component.html',
  styleUrls: ['./subscriber-cdr.component.css']
})
export class SubscriberCdrComponent {

  subscriberArray:subscriberCdr[]=[]
  value:any
  //datatables
  dtoptions: DataTables.Settings = {};

  constructor(private service:ServiceService,public session:SessionStorageService,public route:Router){
  }

  goToHome(){
    this.route.navigate(['/home'])
  }
  
  onSubmit(){
    this.subscriberArray = []; 
    this.service.displaySubscriberCdr(this.value).subscribe((data) => {  
      this.subscriberArray = data as subscriberCdr[];
      console.log(this.subscriberArray);
    },  
    (error) => {    
      console.error('Error:', error);       
    });
  }

  //data tables
  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: 'Search Here'
      }
    };
    this.onSubmit();
  }

  download_cdr() {
    // Create a new Excel Workbook
    const workbook = XLSX.utils.book_new();
    // Add a worksheet to the workbook
    const worksheet = XLSX.utils.json_to_sheet(this.subscriberArray);
    // Set the worksheet name
    XLSX.utils.book_append_sheet(workbook, worksheet, 'CDR Data');
    // Generate an array buffer containing the Excel file data
    const arrayBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // Convert the array buffer to a Blob
    const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
    // Create a download link and trigger the download
    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobURL;
    anchor.download = 'cdr_data.xlsx';
    anchor.click();
    // Release the object URL
    window.URL.revokeObjectURL(blobURL);
  }


}
