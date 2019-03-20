import 'normalize.css';
import sidebar from './components/sidebar';
import './styles/main.scss';

const sidebarElement = document.getElementById('side-bar');
const mainContent = document.getElementById('main-content');

sidebarElement && sidebar(sidebarElement);
