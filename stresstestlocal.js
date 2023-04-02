import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 1000,
  duration: '60s',
};
export default function () {
  http.get('http://10.0.0.172:8065');
  sleep(1);
}
