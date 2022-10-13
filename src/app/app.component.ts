import { Component, VERSION } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  selectedItem = '';
  dataSource = new MatTreeNestedDataSource<DocNode>();
  treeControl = new NestedTreeControl<DocNode>((node) => node.children);
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: DocNode) =>
    !!node.children && node.children.length > 0;
  selectItem = (item: string) => {
    console.log(item);
    this.selectedItem = item;
  };
}

interface DocNode {
  name: string;
  children?: DocNode[];
}

const TREE_DATA: DocNode[] = [
  {
    name: 'Appellant',
    children: [{ name: 'Witness1' }, { name: 'Form1' }, { name: 'BS' }],
  },
  {
    name: 'Respondent',
    children: [
      {
        name: 'Statements',
        children: [{ name: 'Form2' }, { name: 'Lies2' }],
      },
      {
        name: 'Financial',
        children: [{ name: 'Bank Statements' }, { name: 'Payslips' }],
      },
    ],
  },
  {
    name: 'Judicial',
    children: [
      {
        name: 'Decisions',
        children: [{ name: 'Decision1' }],
      },
    ],
  },
];
