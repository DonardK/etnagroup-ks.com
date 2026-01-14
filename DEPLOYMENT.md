# Deployment Guide

## Prerequisites

- Production server (Linux/Windows)
- Database server (SQL Server or PostgreSQL)
- Domain name (optional)
- SSL certificate (recommended)

## Option 1: Docker Deployment (Recommended)

### Requirements
- Docker
- Docker Compose

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/etnagroup-ks.com.git
   cd etnagroup-ks.com
   ```

2. **Build and run:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:5000`

4. **Check logs:**
   ```bash
   docker-compose logs -f
   ```

## Option 2: Manual Deployment

### Backend (.NET API)

#### 1. Prepare the Server

Install .NET 9.0 Runtime:
```bash
wget https://dot.net/v1/dotnet-install.sh
chmod +x dotnet-install.sh
./dotnet-install.sh --channel 9.0 --runtime aspnetcore
```

#### 2. Configure Database

**For SQL Server:**

Update `appsettings.Production.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=EtnaGroup;User Id=YOUR_USER;Password=YOUR_PASSWORD;TrustServerCertificate=True;"
  }
}
```

Update `Program.cs` to use SQL Server:
```csharp
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));
```

Install SQL Server package:
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 9.0.*
```

#### 3. Publish the API

```bash
cd server/EtnaGroup.Api
dotnet publish -c Release -o ./publish
```

#### 4. Run Migrations

```bash
cd publish
dotnet ef database update --project ../EtnaGroup.Api.csproj
```

#### 5. Run the API

**Linux (systemd service):**

Create `/etc/systemd/system/etnagroup-api.service`:
```ini
[Unit]
Description=Etna Group API
After=network.target

[Service]
WorkingDirectory=/var/www/etnagroup-api
ExecStart=/usr/bin/dotnet /var/www/etnagroup-api/EtnaGroup.Api.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=etnagroup-api
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl enable etnagroup-api
sudo systemctl start etnagroup-api
sudo systemctl status etnagroup-api
```

**Windows (IIS):**

1. Install .NET Hosting Bundle
2. Create IIS site pointing to publish folder
3. Configure application pool (.NET CLR Version: No Managed Code)
4. Set permissions for IIS_IUSRS

### Frontend (React)

#### 1. Build the Frontend

```bash
cd client
npm install
npm run build
```

The built files will be in `client/dist/`

#### 2. Deploy to Web Server

**Nginx (Linux):**

Copy files:
```bash
sudo cp -r dist/* /var/www/etnagroup/
```

Create nginx config `/etc/nginx/sites-available/etnagroup`:
```nginx
server {
    listen 80;
    server_name etnagroup-ks.com www.etnagroup-ks.com;

    root /var/www/etnagroup;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Enable gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/etnagroup /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**IIS (Windows):**

1. Copy `dist/` contents to `C:\inetpub\wwwroot\etnagroup`
2. Install URL Rewrite module
3. Create `web.config` in the root:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## Option 3: Cloud Platforms

### Azure

**Backend:**
1. Create Azure Web App
2. Set deployment source (GitHub, local Git)
3. Configure connection string in Application Settings
4. Deploy

**Frontend:**
1. Create Static Web App
2. Link to GitHub repository
3. Configure build settings (Vite)
4. Deploy

### AWS

**Backend:**
1. Deploy to Elastic Beanstalk or ECS
2. Configure RDS for database
3. Set environment variables

**Frontend:**
1. Deploy to S3 + CloudFront
2. Configure bucket for static hosting
3. Upload build files

### Netlify (Frontend only)

1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Set environment variable: `VITE_API_BASE_URL`
4. Deploy

### Vercel (Frontend only)

1. Import project from GitHub
2. Configure framework preset: Vite
3. Set environment variables
4. Deploy

## SSL/HTTPS Setup

### Let's Encrypt (Free)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d etnagroup-ks.com -d www.etnagroup-ks.com
```

Auto-renewal is configured automatically.

## Environment Variables

### Backend (Production)

```
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__DefaultConnection=<your-connection-string>
```

### Frontend (Production)

```
VITE_API_BASE_URL=https://api.etnagroup-ks.com/api
```

## Database Migration

**Production migration:**
```bash
dotnet ef database update --project server/EtnaGroup.Api/EtnaGroup.Api.csproj --connection "YOUR_CONNECTION_STRING"
```

## Monitoring & Logging

### Backend

Use Application Insights (Azure) or CloudWatch (AWS):

```csharp
// Add to Program.cs
builder.Services.AddApplicationInsightsTelemetry();
```

### Frontend

Use services like:
- Sentry for error tracking
- Google Analytics for usage
- LogRocket for session replay

## Backup Strategy

### Database

**Automated backups:**
```bash
# Cron job example (daily at 2 AM)
0 2 * * * /usr/bin/dotnet ef database backup --output /backups/etnagroup-$(date +\%Y\%m\%d).bak
```

### Files

```bash
# Backup uploaded images
rsync -avz /var/www/etnagroup/public/buildings/ /backups/images/
```

## Troubleshooting

### API not accessible

- Check firewall: `sudo ufw status`
- Check service: `sudo systemctl status etnagroup-api`
- Check logs: `sudo journalctl -u etnagroup-api -f`

### Frontend 404 errors

- Ensure URL rewrite is configured
- Check nginx/IIS configuration
- Verify build was successful

### Database connection issues

- Verify connection string
- Check SQL Server is running
- Verify firewall allows connection
- Test connection: `sqlcmd -S server -U user -P password`

## Performance Optimization

### Backend

- Enable response compression
- Add caching headers
- Use CDN for static assets
- Optimize database queries

### Frontend

- Enable gzip compression
- Use CDN (CloudFlare, AWS CloudFront)
- Optimize images (WebP format)
- Lazy load components

## Security Checklist

- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] SQL injection prevention (EF parameterized queries)
- [ ] Input validation on all endpoints
- [ ] Rate limiting configured
- [ ] Authentication/Authorization implemented
- [ ] Database backups scheduled
- [ ] Security headers configured
- [ ] Dependency updates automated

## Rollback Procedure

1. Keep previous deployment in separate folder
2. Stop current service
3. Restore previous version
4. Rollback database migration if needed:
   ```bash
   dotnet ef database update PreviousMigrationName
   ```
5. Start service

## Support

For deployment issues, contact DevOps team or refer to provider documentation.
