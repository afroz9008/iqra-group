import { mock } from "./mock";
import './dashboard';
import './services';
import './clients';
import './blogs';
import './company';
import './feedbacks';


mock.onAny().passThrough();
