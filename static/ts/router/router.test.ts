import test from 'ava';
import { Router } from './router';

test('should allow route registration', t => {
  var router = new Router();
  
  router.registerRoute('test-route');
  
  t.is(router.getRoutes(), ['test-route'], 'Should contain 1 test route.');
});
