import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { VoipVideoCdr } from 'src/entity/voipVideoCdr';
import * as XLSX from 'xlsx'; // Import the entire XLSX library

@Component({
  selector: 'app-voip-video-cdr',
  templateUrl: './voip-video-cdr.component.html',
  styleUrls: ['./voip-video-cdr.component.css']
})
export class VoipVideoCdrComponent {

  voipvideoArray:VoipVideoCdr[]=[]
  
  // value:number=0
  value:any
  constructor(private service:ServiceService){
  }

  onSubmit(){
    this.service.displayVoipVideoCdr(this.value).subscribe((data) => {  
      this.voipvideoArray = data as VoipVideoCdr[];
      console.log(this.voipvideoArray);
    },  
    (error) => {    
      console.error('Error:', error);       
    });
  }

  download_cdr() {
    // Create a new Excel Workbook
    const workbook = XLSX.utils.book_new();
    // Add a worksheet to the workbook
    const worksheet = XLSX.utils.json_to_sheet(this.voipvideoArray);
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
