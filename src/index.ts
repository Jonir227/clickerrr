import 'normalize.css';
import { mainContent, sidebar } from './components';
import './styles/main.scss';

const sidebarElement = document.getElementById('side-bar');
const mainContentElement = document.getElementById('main-content');

sidebarElement && sidebar(sidebarElement);
mainContentElement && mainContent(mainContentElement);
