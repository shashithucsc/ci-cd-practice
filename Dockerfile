# Stage 1: Base image
FROM node:18-alpine AS base

# Stage 2: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 3: Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 4: Production server
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

# Only copy the standalone build files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose the port Next.js runs on
EXPOSE 3000
ENV PORT 3000

# Start the server
CMD ["node", "server.js"]