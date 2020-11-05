
import HomePage from '../pages/home.jsx';
import SignUpPage from '../pages/signup.jsx'
import WelcomePage from '../pages/welcome.jsx'
import QuestionPage from '../pages/question'

var routes = [
  {
    path: '/',
    component: HomePage,
  },

  {
    path: '/signup',
    component: SignUpPage,
  },
  {
    path: '/welcome',
    component: WelcomePage,
  },
  {
    path: '/question',
    component: QuestionPage
  }

];

export default routes;
