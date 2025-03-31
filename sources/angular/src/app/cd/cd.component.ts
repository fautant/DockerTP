import { Component, Input } from '@angular/core';
import { CD } from '../models/cd.model'
import { CdsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CDComponent {
  
  @Input() Cd!: CD;
  theCd!: CD;
  idcd!: string;

  constructor(private cdService: CdsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idcd = this.route.snapshot.params['id'];
    if (this.idcd !== undefined) {
      this.theCd = this.cdService.getCDById(+this.idcd);
    }
    else {
      this.theCd = this.Cd;
    }
  }

  onAddCD(): void {
    this.Cd.quantite++;
  }
}
