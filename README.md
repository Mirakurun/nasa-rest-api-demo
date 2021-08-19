# NASA REST API Demo

## Install Git

https://git-scm.com/downloads

## Clone Repo

```bash
git clone https://github.com/Mirakurun/nasa-rest-api-demo.git
```

## Install Node.js

https://nodejs.org/en/

## Install Dependencies

```bash
npm install
```

## Setup AWS Account

https://aws.amazon.com/

## Create AWS Access key

https://console.aws.amazon.com/iam/home

## Install AWS CLI

https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html

## Configure AWS Profile

```bash
aws configure
```

## Install Serverless Framework CLI

```bash
npm i -g serverless
```

## Setup Serverless Config Credentials

```bash
# Replace 'key' and 'secret' with AWS access key and secret
serverless config credentials --provider aws --key key --secret secret
```

## Package Project

```bash
npm run package
```

## Deploy Package

```bash
npm run deploy
```

Assuming deploying package succeeeds, endpoint URL should show up in your terminal.  

For example, https://8b9jkcrrz6.execute-api.us-east-1.amazonaws.com/dev/api/curiosity

## Querying the endpoint

Query params: earthDate, camera

earthDate format: YYYY-MM-DD

camera:
- Front Hazard Avoidance Camera
- Rear Hazard Avoidance Camera
- Mast Camera

```bash
# Example query
curl https://8b9jkcrrz6.execute-api.us-east-1.amazonaws.com/dev/api/curiosity?earthDate=2015-6-3&camera=Front%20Hazard%20Avoidance%20Camera
```

```json
// Example response
{"photos":[{"id":102685,"sol":1004,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG","earth_date":"2015-06-03","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":102686,"sol":1004,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG","earth_date":"2015-06-03","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}}]}
```
