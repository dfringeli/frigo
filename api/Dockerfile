FROM eclipse-temurin:24

WORKDIR /workspace/api

RUN apt update && apt install -y maven

COPY pom.xml .

RUN mvn dependency:go-offline -B

COPY . .

EXPOSE 8080

CMD ["mvn", "spring-boot:run"]
