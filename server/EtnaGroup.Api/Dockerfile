# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy csproj and restore
COPY ["EtnaGroup.Api/EtnaGroup.Api.csproj", "EtnaGroup.Api/"]
RUN dotnet restore "EtnaGroup.Api/EtnaGroup.Api.csproj"

# Copy everything else and build
COPY . .
WORKDIR "/src/EtnaGroup.Api"
RUN dotnet build "EtnaGroup.Api.csproj" -c Release -o /app/build

# Publish stage
FROM build AS publish
RUN dotnet publish "EtnaGroup.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
EXPOSE 80
EXPOSE 443

COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "EtnaGroup.Api.dll"]
