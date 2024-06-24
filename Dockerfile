# Install dependencies only when needed
FROM node:22-alpine3.18 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:22-alpine3.18 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM node:22-alpine3.18 AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 bloggroup
RUN adduser --system --uid 1001 bloguser

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/static ./.next/static

# Copy the standalone output
COPY --from=builder /app/.next/standalone ./

USER bloguser

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]