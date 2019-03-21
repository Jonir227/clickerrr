import Employee from '../controllers/Worker';

class CompanyData {
  private room: number;
  private employees: Employee[];

  constructor() {
    this.room = 0;
    this.employees = [];
  }

  public newRoom() {
    this.room++;
  }

  public hire(employee: Employee) {
    employee.work();
    this.employees.push(employee);
  }
}

export default CompanyData;
