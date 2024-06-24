# Stage 1: Build stage
FROM node:22-alpine3.18 AS builder

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:22-alpine3.18 AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV production

# Copy public directory and package.json from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copy .next directory from the builder stage
COPY --from=builder /app/.next ./.next

# Ensure files have correct permissions if needed
RUN chmod -R 755 /app

# Example user setup
RUN addgroup --system --gid 1001 bloggroup
RUN adduser --system --uid 1001 bloguser

# Switch to non-root user
USER bloguser

# Expose port 3000
EXPOSE 8080

# Command to run the server
CMD ["node", "server.js"]
