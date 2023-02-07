import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'uploadImage';

  constructor(private fileUploadService: FileUploadService) {}
  shortLink: string = '';
  loading: boolean = false; // Flag variable

  ngOnInit(): void {}
  file!: File;
  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe((event: any) => {
      console.log(typeof event);
      if (typeof event === 'object') {
        // Short link via api response
        console.log('EVENT', event);
        this.shortLink = event.link;

        this.loading = false; // Flag variable
      }
    });
  }
}
