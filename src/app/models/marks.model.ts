export class Marking {
  class: string;
  section: string;
  shift: string;
  session: string;
  subject: string;
  examination: string;
}
export class Category {
  constructor(public Category_Id: number, public Category_Name: string) { }
}
export class SubCategory {
  constructor(public SubCategory_ID: number, public Category_ID: number, public SubCategory_Name: string) { }
}


