frontend: pnpm frontend start
electric: docker run -e "DATABASE_URL=$DATABASE_URL" -e "LOGICAL_PUBLISHER_HOST=electric" -e "PG_PROXY_PASSWORD=$PG_PROXY_PASSWORD" -e "AUTH_JWT_ALG=$AUTH_JWT_ALG" -e "AUTH_JWT_KEY=$AUTH_JWT_KEY" -p $PORT:5133 -p 5433:5433 -p 65432:65432 -t electricsql/electric
