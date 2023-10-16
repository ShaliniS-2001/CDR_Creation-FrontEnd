import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { voiceCdr } from 'src/entity/voiceCdr';
import * as XLSX from 'xlsx'; // Import the entire XLSX library
@Component({
  selector: 'app-voice-cdr',
  templateUrl: './voice-cdr.component.html',
  styleUrls: ['./voice-cdr.component.css']
})
export class VoiceCdrComponent {
  voiceArray:voiceCdr[]=[]
  // quantity:number=0
  quantity:any
  constructor(private service:ServiceService){
    
  }

  download_cdr() {
    // Create a new Excel Workbook
    const workbook = XLSX.utils.book_new();
    // Add a worksheet to the workbook
    const worksheet = XLSX.utils.json_to_sheet(this.voiceArray);
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

  onSubmit(){
    this.service.displayVoiceCdr(this.quantity).subscribe((data) => {  
      this.voiceArray = data as voiceCdr[];
      console.log(this.voiceArray);
    },  
    (error) => {    
      console.error('Error:', error);       
    });
  }

}