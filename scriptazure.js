import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 1000,
  duration: '60s',
};
export default function () {
  http.get('https://azure-mattermost.graysea-e021df86.canadacentral.azurecontainerapps.io/');
  sleep(1);
}
