import { Company } from '../controllers';
import scoreObserver from './scoreObserver';

const company = new Company(scoreObserver);

export default company;
