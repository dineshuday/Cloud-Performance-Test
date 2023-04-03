import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  scenarios: {
    spike: {
      executor: "ramping-arrival-rate",
      preAllocatedVUs: 1000,
      timeUnit: "1s",
      stages: [
        { duration: "10s", target: 10 }, // below normal load
        { duration: "1m", target: 10 },
        { duration: "10s", target: 140 }, // spike to 140 iterations
        { duration: "3m", target: 140 }, // stay at 140 for 3 minutes
        { duration: "10s", target: 10 }, // scale down. Recovery stage.
        { duration: "3m", target: 10 },
        { duration: "10s", target: 0 },
      ],
      gracefulStop: "2m",
    },
  },
};
export default function () {
  http.get('https://azure-mattermost.ambitiouspebble-f41aa10e.westus2.azurecontainerapps.io');
  sleep(1);
}
