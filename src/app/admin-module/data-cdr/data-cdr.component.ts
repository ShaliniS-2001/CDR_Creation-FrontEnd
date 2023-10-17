import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { dataCdr } from 'src/entity/dataCdr';
import * as XLSX from 'xlsx'; // Import the entire XLSX library

@Component({
  selector: 'app-data-cdr',
  templateUrl: './data-cdr.component.html',
  styleUrls: ['./data-cdr.component.css']
})
export class DataCdrComponent {
  dataArray:dataCdr[]=[]
  // quantity:number=0
  //datatables
  dtoptions: DataTables.Settings = {};
  quantity:any
  constructor(private service:ServiceService){
  }

  onSubmit(){
    this.service.displayDataCdr(this.quantity).subscribe((data) => {  
      this.dataArray = data as dataCdr[];
      console.log(this.dataArray);
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
    const worksheet = XLSX.utils.json_to_sheet(this.dataArray);
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
