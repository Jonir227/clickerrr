import 'normalize.css';
import sidebar from './components/sidebar';
import './styles/main.scss';
import CompanyData from './models/CompanyData';
import Employee from './controllers/Worker';
import scoreObserver from './instances/scoreObserver';

const company = new CompanyData();
const employee = new Employee('dd', 3, 100, scoreObserver);

company.hire(employee);

const sidebarElement = document.getElementById('side-bar');
const mainContent = document.getElementById('main-content');

sidebarElement && sidebar(sidebarElement);
