
FROM node:22-alpine3.18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:22-alpine3.18 AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
# Ensure files have correct permissions if needed
RUN chmod -R 755 /app

# Example user setup
RUN addgroup --system --gid 1001 bloggroup
RUN adduser --system --uid 1001 bloguser
USER bloguser

EXPOSE 3000
CMD ["node", "server.js"]