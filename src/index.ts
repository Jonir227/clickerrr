import 'normalize.css';
import sidebar from './components/sidebar';
import './styles/main.scss';
import Company from './controllers/Company';
import Employee from './controllers/Employee';
import scoreObserver from './instances/scoreObserver';

const company = new Company(scoreObserver);
const employee = new Employee('dd', 3, 500);
const master = new Employee('dd', 10, 100);

company.hire(employee);
company.newRoom();
company.hire(master);

const sidebarElement = document.getElementById('side-bar');
const mainContent = document.getElementById('main-content');

sidebarElement && sidebar(sidebarElement);
