import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { LocationCdr } from 'src/entity/locationCdr';
import * as XLSX from 'xlsx'; // Import the entire XLSX library

@Component({
  selector: 'app-location-cdr',
  templateUrl: './location-cdr.component.html',
  styleUrls: ['./location-cdr.component.css']
})
export class LocationCdrComponent {

  locationArray:LocationCdr[]=[]
  // value:number=0
  value:any
  //datatables
  dtoptions: DataTables.Settings = {};
  constructor(private service:ServiceService){
  }
  onSubmit(){
    this.service.displayLocationCdr(this.value).subscribe((data) => {  
      this.locationArray = data as LocationCdr[];
      console.log(this.locationArray);
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
    const worksheet = XLSX.utils.json_to_sheet(this.locationArray);
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
