# # Use the official Node.js 14 image as the base image
# 	FROM node:18.13.0-alpine
	 
# 	# Set environment variables for configuration
# 	ENV NODE_ENV=production
# 	ENV PORT=3000
	 
# 	# Set a default value for the environment variable
# 	ARG API_URL=https://api.example.com
	 
# 	# Set labels for better maintainability
# 	LABEL maintainer="Your Name <your.email@example.com>"
# 	LABEL version="1.0"
# 	LABEL description="Dockerfile for a NextJS app using PNPM"
	 
# 	# Set the working directory inside the container
# 	WORKDIR /app
	 
# 	# Copy the package.json and pnpm-lock.yaml files to the working directory
# 	COPY package.json pnpm-lock.yaml ./
	 
# 	# Install dependencies using PNPM
# 	RUN npm install -g pnpm
# 	RUN pnpm install
	 
# 	# Copy the rest of the app's files to the working directory
# 	COPY . .


    # Use an official Node.js, and it should be version 16 and above
FROM node:18.13.0-alpine
# Set the working directory in the container
ENV NODE_ENV=staging

WORKDIR /app
COPY .env.staging ./.env


# Copy package.json and pnpm-lock.yaml
COPY pnpm-lock.yaml package.json ./

# Install app dependencies using PNPM
RUN npm install -g pnpm
# Install dependencies
RUN pnpm install
# Copy the application code 
COPY . .
# Build the TypeScript code
RUN pnpm run build
# Expose the app
EXPOSE 3000
# Start the application
CMD ["pnpm", "start"]

 # # ------------------ dev build -------------------
# FROM node:18.13.0-alpine as build_dev
# RUN npm install -g pnpm

# WORKDIR /app

# COPY package.json ./
# COPY pnpm-lock.yaml ./
# RUN pnpm install

# COPY . .
# COPY .env.dev ./.env

# RUN npm run build

# # # ------------------dev -------------------

# FROM node:18.13.0-alpine as dev

# WORKDIR /app

# COPY --from=build_dev /app/.env .
# COPY --from=build_dev /app/package.json .
# COPY --from=build_dev /app/pnpm-lock.yaml .
# COPY --from=build_dev /app/next.config.mjs ./next.config.mjs
# COPY --from=build_dev /app/node_modules/ ./node_modules/
# COPY --from=build_dev /app/public/ ./public/
# COPY --from=build_dev /app/.next/ ./.next/

# CMD ["/bin/sh", "-c", "npm start"]


# # # ------------------staging build-------------------

# FROM node:18.13.0-alpine as build_staging
# RUN npm install -g pnpm

# WORKDIR /app

# COPY package.json ./
# COPY pnpm-lock.yaml ./
# RUN pnpm install

# COPY . .
# COPY .env.staging ./.env

# RUN npm run build

# # # ------------------ staging -------------------
# FROM node:18.13.0-alpine as staging

# WORKDIR /app

# COPY --from=build_staging /app/.env .
# COPY --from=build_staging /app/package.json .
# COPY --from=build_staging /app/pnpm-lock.yaml .
# COPY --from=build_staging /app/next.config.mjs ./next.config.mjs
# COPY --from=build_staging /app/node_modules/ ./node_modules/
# COPY --from=build_staging /app/public/ ./public/
# COPY --from=build_staging /app/.next/ ./.next/

# CMD ["/bin/sh", "-c", "npm start"]
