FROM node as builder
WORKDIR /app
COPY ./src ./src
COPY ./tsconfig.json ./package.json LICENSE yarn.lock ./
RUN yarn install && yarn build

FROM alpine
WORKDIR /app
EXPOSE 8080
ENV NODE_ENV production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/LICENSE /app/package.json /app/yarn.lock ./
RUN apk add --no-cache nodejs yarn && \
    yarn install --production --frozen-lockfile && \
    yarn cache clean && \
    apk del yarn && \
    rm -f yarn.lock
CMD node dist/server.js
