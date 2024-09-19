import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pedido } from '../models/pedido';
import { ServicePedidoService } from '../Service/service-pedido.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent implements OnChanges {
  
  @Input() pedidosParaEntregar :Pedido[]=[];

  constructor(private servicePedidos: ServicePedidoService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pedidosParaEntregar']) {
      console.log('Pedidos para entregar actualizados:', this.pedidosParaEntregar);
    }
  }
  
  
  

  entregar(pedido: Pedido) {
    this.servicePedidos.MoveraEntregado(pedido);
    this.pedidosParaEntregar = this.pedidosParaEntregar.filter(p => p.numero !== pedido.numero);
  }

}


