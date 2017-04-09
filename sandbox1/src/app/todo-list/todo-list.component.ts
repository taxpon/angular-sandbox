import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    public todoList: string[];
    public secondVisibility: boolean = false;
    
    @ViewChild('firstInput') firstInput: TodoInputComponent;
    private secondInput: ViewContainerRef;

    constructor() { }

    ngOnInit() {
        console.log('ngOnInit');
        this.dump();
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        this.dump();
    }

    dump() {
        console.log(this.firstInput);
        console.log(this.secondInput);
    }

    toggleVisibility() {
        this.secondVisibility = !this.secondVisibility;
    }

    @ViewChild('secondInput') set content(content: ViewContainerRef) {
        console.log('Initialize secondInput');
        this.secondInput = content;
    }

}
