FROM node:18.17.0-alpine
# Set the working directory in the container
# ENV NODE_ENV=staging

WORKDIR /app

ARG NEXT_PUBLIC_APIURL
ARG NEXT_PUBLIC_LOGIN_PAGE

ENV NEXT_PUBLIC_APIURL=$NEXT_PUBLIC_APIURL
ENV NEXT_PUBLIC_LOGIN_PAGE=$NEXT_PUBLIC_LOGIN_PAGE


# Copy package.json and pnpm-lock.yaml
COPY pnpm-lock.yaml package.json ./

# Install app dependencies using PNPM
RUN npm install -g pnpm
# Install dependencies
RUN pnpm install
# Copy the application code 
COPY . .
# Build the TypeScript code
RUN pnpm contentlayer build

RUN pnpm run build
# Expose the app
EXPOSE 3000
# Start the application
CMD ["pnpm", "start"]
