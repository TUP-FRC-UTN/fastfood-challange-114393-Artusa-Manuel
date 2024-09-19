import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pedido } from '../models/pedido';
import { ServicePedidoService } from '../Service/service-pedido.service';


@Component({
  selector: 'app-form-post-of-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-post-of-sell.component.html',
  styleUrl: './form-post-of-sell.component.css'
})
export class FormPostOfSellComponent {
  pedido: Pedido = {
    numero: Math.floor(Math.random() * 1000) + 1,
    nombreCliente: '',
    estado: 'pendiente',
    descripcion: '',
    date: new Date()
  }

  @Output() onSave = new EventEmitter<Pedido>();
  private ServicePedido = inject(ServicePedidoService);

  save(form: NgForm) {
    if (form.invalid) {
      alert('Formulario Inválido');
      console.log(form);
      return;
    }
    
    const newPedido: Pedido = {
      ...this.pedido,
      ...form.value,
      date: new Date(),
      estado: 'pendiente'
    };

    this.ServicePedido.add(newPedido);
    this.onSave.emit(newPedido);
    
    console.log('Pedido guardado:', newPedido);
    
    form.reset();
    this.pedido = {
      numero: Math.floor(Math.random() * 1000) + 1,
      nombreCliente: '',
      estado: 'pendiente',
      descripcion: '',
      date: new Date()
    };
  }
}
