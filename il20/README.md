##Build guidelines
The route to download the States data is :

1. https://webhook.pegasus.imarticus.org/marketingopspanelpublic/get_all_data

This code has states which are downloaded from the server APIs, which are bound to specific IP address which are:

1. '::ffff:127.0.0.1',
2. '127.0.0.1',
3. '172.31.0.139',
4. '172.31.12.64',
5. '172.31.8.195',
6. '3.108.166.132', (Imarticus Production #2)
7. '65.2.102.0', (Imarticus staging)
8. '13.127.214.250' (Imarticus Production #1)

If you want to build this repository either host eckovation-server locally or build the code on staging/testing/production or get your IP address added in the backend

##Deployment

deploy-s3-testing-d1 => d17aspdhv32msc.cloudfront.net -> Use on testing server
deploy-s3-staging-d3 => d3ovmnwh385tbf.cloudfront.net -> Use on staging server
deploy-s3-staging-d2 => d2chcjz5v00yax.cloudfront.net -> Use on production
deploy-s3-production => imarticus.org

##Check invalidation status

aws cloudfront get-invalidation --id I21TPGY0TFP0DL --distribution-id E38O07MDB5H1RE --profile cfuser
