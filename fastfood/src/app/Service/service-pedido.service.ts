import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ServicePedidoService {
  
  constructor() { } 
  private pedidos:Pedido[]=[]
  private pedidosParaCocinar: Pedido[] =[]
  private pedidosCocinando: Pedido[] =[]
  private pedidosParaEntregar: Pedido[] =[]
  getall() {
    return this.pedidos;
  }
  
  getallpedidosParaCocinar() {
    return this.pedidosParaCocinar;
  }
  getallpedidosCocinando(){
    
    return[
      ... this.pedidosCocinando
    ]

  }getallpedidosParaEntregar(){
    
    return[
      ... this.pedidosParaEntregar
    ]

  }
  add(pedido: Pedido) {
    const newPedido: Pedido = {
      ...pedido,
      numero: pedido.numero || Math.floor(Math.random() * 1000) + 1,
      date: pedido.date || new Date(),
      estado: pedido.estado || 'pendiente'
    };
    this.pedidos.push(newPedido);
    this.MoverParaCocinar(newPedido);
    console.log('Pedido añadido al servicio:', newPedido);
  }
  MoverParaCocinar(pedido: Pedido) {
    const index = this.pedidos.findIndex(p => p.numero === pedido.numero);
    if (index !== -1) {
      this.pedidos.splice(index, 1);
      this.pedidosParaCocinar.push(pedido);
    }
  }
  MoverACocinando(pedido: Pedido) {
    const index = this.pedidosParaCocinar.findIndex(p => p.numero === pedido.numero);
    if (index !== -1) {
      this.pedidosParaCocinar.splice(index, 1);
      pedido.estado = 'cocinando';
      this.pedidosCocinando.push(pedido);
    }
  }

  MoverAListoParaEntregar(pedido: Pedido) {
    const index = this.pedidosCocinando.findIndex(p => p.numero === pedido.numero);
    if (index !== -1) {
      this.pedidosCocinando.splice(index, 1);
      pedido.estado = 'listo para entregar';
      this.pedidosParaEntregar.push(pedido);
      console.log('Pedido movido a listo para entregar:', pedido);
    }
  }

  MoveraEntregado(pedido: Pedido) {
    const index = this.pedidosParaEntregar.findIndex(p => p.numero === pedido.numero);
    if (index !== -1) {
      this.pedidosParaEntregar.splice(index, 1);
      pedido.estado = 'entregado';
      // Aquí puedes decidir si quieres mantener un registro de pedidos entregados
      // this.pedidosEntregados.push(pedido);
    }
  }

  loadMatches() {
    this.pedidos = this.getall();
    this.pedidosParaCocinar = this.getallpedidosParaCocinar();
    this.pedidosCocinando = this.getallpedidosCocinando();
    this.pedidosParaEntregar = this.getallpedidosParaEntregar();
}
}
