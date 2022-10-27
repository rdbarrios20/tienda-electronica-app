import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orderList: any = [];
  productList: any = [];
  date: any;
  showModal: boolean = false;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): any {
    this.orderService.getAll().subscribe((data: any) => {
      if (data) {
        this.orderList = data.orders;
      }
    });
  }
  getOrdersByDate($event: any) {
    const date = $event.target.value;
    this.orderService.getOrdersByDate2(date).subscribe((data: any) => {
      if (data) {
        debugger;
        this.orderList = data.orders;
      }
    });
  }

  showProducts(id: number) {
    this.showModal = true;
    this.orderService.getProductsById(id).subscribe((data: any) => {
      if (data) {
        this.productList = data.orders;
      }
    });
  }
}
