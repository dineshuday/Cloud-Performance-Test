# Cloud-Performance-Test

These are the three load testing scripts for aws and gcp respectively.


Mattermost-docker-preview folder consists of all the files required to build the dockerfile for deploying

docker build must be edited according the machine in which you are building the image
* We have used the following command for that 
        - docker buildx build --platform=linux/amd64 -t test-mattermost:latest .

Latest image of our application is present as : https://hub.docker.com/repository/docker/siva1998/elg-5164-mattermost/general
Commands to run k6 script
-------------------------

* docker pull grafana/k6
* docker run --rm -i grafana/k6 run - <scriptgcp.js


Kubernetes deployment yaml file is also present which can be used to deploy it any cluster using the following command

* kubectl apply -f deployment-kube.yaml

New-relic agent can be configured to conenct to the kubernetes cluster by installing the new-relic agent using helm. The steps are given in the newrelic documentation.

