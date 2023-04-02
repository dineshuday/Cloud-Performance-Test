import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 1,
  duration: '1m',
  thresholds: {
    	    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
    	  },
};
export default function () {
  http.get('http://10.0.0.172:8065');
  sleep(1);
}
