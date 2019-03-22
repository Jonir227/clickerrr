import 'normalize.css';
import { mainContent, sidebar } from './components';
import { Company, Employee } from './controllers';
import scoreObserver from './instances/scoreObserver';
import './styles/main.scss';

const company = new Company(scoreObserver);

const employee = new Employee('dd', 3, 500);
const master = new Employee('dd', 10, 100);

const sidebarElement = document.getElementById('side-bar');
const mainContentElement = document.getElementById('main-content');

sidebarElement && sidebar(sidebarElement);
mainContentElement && mainContent(mainContentElement);
