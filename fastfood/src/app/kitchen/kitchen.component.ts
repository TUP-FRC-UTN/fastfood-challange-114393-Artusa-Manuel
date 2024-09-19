import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ServicePedidoService } from '../Service/service-pedido.service';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnInit {
  pedidosParaCocinar: Pedido[] = [];
  pedidosCocinando: Pedido[] = [];
  
  constructor(private servicePedidos: ServicePedidoService) {}

  ngOnInit() {
    this.loadPedidos();
  }
  @Output() onSave = new EventEmitter<Pedido>();
  loadPedidos() {
    this.pedidosParaCocinar = this.servicePedidos.getallpedidosParaCocinar();
    this.pedidosCocinando = this.servicePedidos.getallpedidosCocinando();
  }

  cocinarPedido(pedido: Pedido) {
    this.servicePedidos.MoverACocinando(pedido);
    this.loadPedidos();
  }

  terminarCoccion(pedido: Pedido) {
    this.servicePedidos.MoverAListoParaEntregar(pedido);
    this.loadPedidos();
    this.onSave.emit(pedido)
  }
}