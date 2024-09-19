import { Component } from '@angular/core';
import { FormPostOfSellComponent } from '../form-post-of-sell/form-post-of-sell.component';
import { KitchenComponent } from "../kitchen/kitchen.component";
import { DeliveryComponent } from "../delivery/delivery.component";
import { Pedido } from '../models/pedido';
import { ServicePedidoService } from '../Service/service-pedido.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [FormPostOfSellComponent, KitchenComponent, DeliveryComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  pedidosParaEntregar: Pedido[] = [];

  constructor(private servicePedidos: ServicePedidoService) {}

  onPedidoListo(pedido: Pedido) {
    this.pedidosParaEntregar = this.servicePedidos.getallpedidosParaEntregar();
  }
}
