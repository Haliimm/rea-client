import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css'],
})
export class TransportationComponent {
  itemPerPage = 5;
  currentPage = 1;

  form: FormGroup = this.fb.group({
    requestTask: ['', Validators.required],
    category: ['', Validators.required],
    attachment: ['', Validators.required],
    priority: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  data = [
    {
      id: 39842 - 231,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Open',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 232,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Low',
      status: 'Completed',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 233,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Waiting Approval',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 234,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Medium',
      status: 'Cancelled',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 235,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'Low',
      status: 'On Hold',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 231,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Open',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 232,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Low',
      status: 'Completed',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 233,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Waiting Approval',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 234,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Medium',
      status: 'Cancelled',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 235,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'Low',
      status: 'On Hold',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 231,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Open',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 232,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Low',
      status: 'Completed',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 233,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Waiting Approval',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 234,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Medium',
      status: 'Cancelled',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 235,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'Low',
      status: 'On Hold',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 231,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Open',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 232,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Low',
      status: 'Completed',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 233,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Waiting Approval',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 234,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Medium',
      status: 'Cancelled',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 235,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'Low',
      status: 'On Hold',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 231,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Open',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 232,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Low',
      status: 'Completed',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 233,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'High',
      status: 'Waiting Approval',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 234,
      request: 'Transport Bus',
      category: 'Transportation',
      priority: 'Medium',
      status: 'Cancelled',
      date: '20 Agust, 2023',
    },
    {
      id: 39842 - 235,
      request: 'Transport Mobil',
      category: 'Transportation',
      priority: 'Low',
      status: 'On Hold',
      date: '20 Agust, 2023',
    },
  ];

  get paginatedData(){
    const start = (this.currentPage -1) * this.itemPerPage
    const end = start + this.itemPerPage

    return this.data.slice(start, end);
  }

  changePage(page: number){
    this.currentPage = page;
  }

  add() {
    let requestTask = this.form.value.requestTask;
    let category = this.form.value.category;
    let attachment = this.form.value.attachment;
    let priority = this.form.value.priority;
  }
}
