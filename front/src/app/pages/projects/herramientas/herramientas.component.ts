import { Component, OnInit, Input } from '@angular/core';
import { herramientasInterface } from '../../../models/navegador-interface';
@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss']
})
export class HerramientasComponent implements OnInit {
  @Input() public herramientasInfo!: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
