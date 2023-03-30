import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 1000,
  duration: '60s',
};
export default function () {
  http.get('https://elg5164project-26fchisl4a-uc.a.run.app');
  sleep(1);
}
