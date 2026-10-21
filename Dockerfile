# ==========================================
# Multi-Stage Dockerfile for Unified Deployment
# Builds React frontend and Spring Boot backend into a single runnable container
# ==========================================

# Stage 1: Build React Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

# Stage 2: Build Spring Boot Backend with embedded static frontend
FROM eclipse-temurin:21-jdk-alpine AS backend-builder
WORKDIR /app

# Copy Maven wrapper and POM
COPY backend/.mvn ./backend/.mvn
COPY backend/mvnw ./backend/mvnw
COPY backend/pom.xml ./backend/pom.xml

# Copy built frontend assets into Spring Boot's static resources
COPY --from=frontend-builder /app/frontend/dist ./backend/src/main/resources/static/
COPY backend/src ./backend/src

WORKDIR /app/backend
RUN chmod +x ./mvnw && ./mvnw clean package -DskipTests

# Stage 3: Lightweight Production JRE Image
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY --from=backend-builder /app/backend/target/*.jar app.jar

ENV PORT=8082
EXPOSE 8082

ENTRYPOINT ["sh", "-c", "java -Dserver.port=${PORT:-8082} -jar app.jar"]
