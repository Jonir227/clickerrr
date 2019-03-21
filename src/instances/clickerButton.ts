import BaseClicker from '../controllers/BaseClicker';
import scoreObserver from './scoreObserver';

const baseClicker = new BaseClicker(1, scoreObserver);

export default baseClicker;
