# Use Node.js 20 for compatibility
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the full app source code
COPY . .

# Build the Next.js app
RUN npm run build

# Production stage
FROM node:20

WORKDIR /app

# Copy only necessary production files
COPY --from=builder /app/package.json /app/package-lock.json /app/.next /app/public /app/

# Ensure all production dependencies are installed
RUN npm install --only=production

EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "run", "dev"]
