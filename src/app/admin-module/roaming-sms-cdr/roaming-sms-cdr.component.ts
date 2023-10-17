import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { RoamingSmsCdr } from 'src/entity/roamingSmsCdr';
import * as XLSX from 'xlsx'; // Import the entire XLSX library
@Component({
  selector: 'app-roaming-sms-cdr',
  templateUrl: './roaming-sms-cdr.component.html',
  styleUrls: ['./roaming-sms-cdr.component.css']
})
export class RoamingSmsCdrComponent {

  roamingSmsArray:RoamingSmsCdr[]=[]
  
  // value:number=0
  value:any
  //datatables
  dtoptions: DataTables.Settings = {};
  constructor(private service:ServiceService){
  }
  onSubmit(){
    this.service.displayRoamingSmsCdr(this.value).subscribe((data) => {  
      this.roamingSmsArray = data as RoamingSmsCdr[];
      console.log(this.roamingSmsArray);
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
    const worksheet = XLSX.utils.json_to_sheet(this.roamingSmsArray);
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
