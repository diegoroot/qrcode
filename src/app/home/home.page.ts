import { Component, OnInit } from '@angular/core';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { ServicioService} from '../provider/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  qrData = null;
	createdCode = null;
	scanedCode= null;

  constructor(private barcodescanner: BarcodeScanner,
              private postPvdr: ServicioService) { }

  ngOnInit() {
  }

  createCode(){
    this.createdCode = this.qrData;
  }

  scanCode(){
    this.barcodescanner.scan().then(barcodeData =>{this.scanedCode = barcodeData.text;
      let body = {
        token:this.scanedCode,
        hora: "01:20:45",
        usuario: 1,
        fecha:"2020-04-28"
      };
    
      this.postPvdr.consulta(body).subscribe(async data => {
        this.scanedCode = data["_body"];
      });
    });
  }

}
