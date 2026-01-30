# Data Setup Guide for Production

## Current Situation

Your website currently has **two data sources**:

### 1. **Frontend Static Data** (Currently Used)
- Location: `client/src/data/projects.ts`
- **Status**: ✅ Currently being used by the website
- **How it works**: Data is hardcoded in TypeScript and bundled with your React app
- **Pros**: 
  - Simple deployment (just frontend)
  - Fast loading (no API calls)
  - No database needed
- **Cons**:
  - Data can't be updated without rebuilding the site
  - No dynamic content management

### 2. **Backend API + Database** (Available but not connected)
- Location: `server/EtnaGroup.Api/`
- **Status**: ⚠️ Built but frontend not using it yet
- **How it works**: 
  - .NET 8 Web API serves data from SQLite/SQL Server database
  - Database is automatically seeded with initial data on first run
  - Data can be updated via API endpoints
- **Pros**:
  - Dynamic data updates (no rebuild needed)
  - Can add admin panel later
  - Real-time availability updates
- **Cons**:
  - More complex deployment (need backend + database)
  - Requires hosting for API

---

## Option 1: Keep Static Data (Simplest for Launch)

**Best for**: Quick launch, simple sites, infrequent updates

### How it works:
1. Data stays in `client/src/data/projects.ts`
2. When you build: `npm run build` → data is bundled into the app
3. Deploy: Just upload the `dist` folder to any static hosting (Netlify, GitHub Pages, etc.)

### To update data:
1. Edit `client/src/data/projects.ts`
2. Rebuild: `npm run build`
3. Redeploy the new `dist` folder

**✅ This is what you have now and it works perfectly!**

---

## Option 2: Use Backend API (Dynamic Data)

**Best for**: Frequent updates, admin panel, real-time availability

### Setup Steps:

#### 1. Update Backend for Production

Create `server/EtnaGroup.Api/appsettings.Production.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=/app/data/etnagroup.db"
  },
  "CORS": {
    "AllowedOrigins": [
      "https://etnagroup-ks.com",
      "https://www.etnagroup-ks.com"
    ]
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  }
}
```

#### 2. Update CORS in `Program.cs`:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        var allowedOrigins = builder.Configuration.GetSection("CORS:AllowedOrigins").Get<string[]>()
            ?? new[] { "http://localhost:5173" };
        
        policy.WithOrigins(allowedOrigins)
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
```

#### 3. Update Frontend to Use API

Create `client/.env.production`:
```
VITE_API_BASE_URL=https://api.etnagroup-ks.com
```

Update `client/src/pages/HomePage.tsx` to fetch from API:

```typescript
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../api/client'

// Replace static import with API call
const { data: projects = [] } = useQuery({
  queryKey: ['projects'],
  queryFn: () => apiClient.get('/complexes')
})
```

#### 4. Database Seeding

The database is **automatically seeded** when the API starts:
- On first run, `db.Database.Migrate()` creates tables
- Seed data from `AppDbContext.cs` is inserted
- No manual setup needed!

#### 5. Deployment

**Backend**:
- Deploy to Azure App Service, AWS, or any .NET hosting
- Database file (`etnagroup.db`) persists in `/app/data/`
- Or use SQL Server for production

**Frontend**:
- Build: `npm run build`
- Deploy `dist` folder to static hosting
- Set `VITE_API_BASE_URL` environment variable

---

## Recommendation

### For Launch: **Use Static Data (Option 1)**
- ✅ Simplest deployment
- ✅ No backend costs
- ✅ Fast and reliable
- ✅ Easy to update (just edit file and rebuild)

### For Future: **Migrate to API (Option 2)**
- When you need:
  - Admin panel for non-technical updates
  - Real-time availability tracking
  - User inquiries/database
  - Multiple content editors

---

## Quick Start: Update Static Data

To update your projects data:

1. Edit `client/src/data/projects.ts`
2. Update project information:
   ```typescript
   {
     id: 'elsa',
     name: 'Elsa Residence',
     description: 'Your updated description...',
     availableUnits: 10, // Update availability
     // ... etc
   }
   ```
3. Rebuild: `cd client && npm run build`
4. Deploy the new `dist` folder

---

## Need Help?

- **Static data**: Edit `client/src/data/projects.ts` → rebuild → deploy
- **API setup**: Follow Option 2 steps above
- **Database**: Already seeded automatically on first API run
