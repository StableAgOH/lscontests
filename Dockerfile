FROM node as builder

WORKDIR /app

COPY . .
RUN yarn install && yarn build


FROM alpine

WORKDIR /app

EXPOSE 8080

ENV NODE_ENV production

COPY --from=builder /app/LICENSE .
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

RUN apk add --update nodejs yarn && \
    yarn install --production --frozen-lockfile && \
    apk del yarn && \
    rm -rf .yarn/ yarn.lock .yarnrc.yml && ls -la

CMD node dist/server.js
