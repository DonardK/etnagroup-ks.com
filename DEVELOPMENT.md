# Development Guide

## Phase-by-Phase Implementation

This project was built in 5 distinct phases. Follow these if rebuilding or extending.

### Phase 1: Scaffold & Config ✅

**Backend:**
- Created `EtnaGroup.sln` solution
- Added `EtnaGroup.Api` Web API project
- Added `EtnaGroup.Api.Tests` test project
- Installed packages:
  - `Microsoft.EntityFrameworkCore.Sqlite` (9.0.*)
  - `Microsoft.EntityFrameworkCore.Design` (9.0.*)
  - `AutoMapper.Extensions.Microsoft.DependencyInjection`

**Frontend:**
- Created Vite React TypeScript app
- Installed packages:
  - `react`, `react-dom`
  - `tailwindcss`, `postcss`, `autoprefixer`
  - `framer-motion`
  - `@tanstack/react-query`
- Configured Tailwind CSS
- Set up project structure

### Phase 2: Data & Migrations ✅

**Created Entities:**
- `Complex`, `Building`, `Unit`, `Inquiry`
- Enums: `UnitStatus`, `UnitType`, `InquiryStatus`

**Database:**
- Configured `AppDbContext` with relationships
- Added seed data for Tara and Tiani buildings
- Created initial migration

**Configuration:**
- Updated `Program.cs` with DbContext, CORS, AutoMapper
- Configured SQLite connection string

### Phase 3: API Endpoints & Services ✅

**DTOs:**
- Created DTOs for all entities
- Filter DTOs for querying

**Services:**
- `AvailabilityService` - Get summaries and move-in ready units
- `UnitFilterService` - Advanced filtering logic

**Controllers:**
- `ComplexesController`
- `BuildingsController`
- `UnitsController` (with filtering)
- `AvailabilityController`
- `InquiriesController`

**Tests:**
- `UnitFilterServiceTests` - 5 test cases
- `AvailabilityServiceTests` - 3 test cases
- All tests passing ✅

### Phase 4: Frontend Experience ✅

**API Client:**
- Base HTTP client with error handling
- API modules: `units`, `buildings`, `availability`
- React Query hooks for all endpoints

**Features:**
1. **InteractiveLivingHero** - Glassmorphism hero with Framer Motion
2. **UnitConfigurator** - Type selector with instant 2D/3D plan switching
3. **SmartAvailability** - Advanced filters with live results
4. **EtnaEdgeComparison** - Comparison table with animations

**Components:**
- Integrated all features into `App.tsx`
- Added footer

### Phase 5: Polish & Deploy Prep ✅

**Added:**
- `ErrorBoundary` component
- `LoadingSkeleton` components
- Comprehensive `README.md`
- `.gitignore`
- `DEVELOPMENT.md` (this file)
- Asset documentation

## Development Workflow

### Starting the Backend

```bash
cd server/EtnaGroup.Api
dotnet run --watch
```

API runs at: `http://localhost:5000`

### Starting the Frontend

```bash
cd client
npm run dev
```

App runs at: `http://localhost:5173`

### Running Tests

```bash
# Backend
cd server/EtnaGroup.Api.Tests
dotnet test --watch

# Frontend (when added)
cd client
npm run test
```

### Creating Migrations

```bash
cd server/EtnaGroup.Api
dotnet ef migrations add MigrationName
dotnet ef database update
```

### Removing Last Migration

```bash
dotnet ef migrations remove
```

## Code Style

### Backend (C#)

- Use **async/await** for all I/O operations
- Follow **RESTful** conventions
- Use **DTOs** for API contracts
- **Dependency injection** for services
- **LINQ** for queries

### Frontend (TypeScript/React)

- Functional components with hooks
- TypeScript for type safety
- Custom hooks for reusable logic
- Tailwind for styling (no inline styles)
- Framer Motion for animations

## Common Tasks

### Adding a New Entity

1. Create model in `server/EtnaGroup.Api/Models/`
2. Add `DbSet` to `AppDbContext`
3. Configure in `OnModelCreating`
4. Create migration and update DB
5. Create DTOs in `server/EtnaGroup.Api/DTOs/`
6. Add AutoMapper profile
7. Create controller
8. Add TypeScript types in `client/src/types/`
9. Create API module and hooks

### Adding a New Feature Component

1. Create in `client/src/features/`
2. Use TypeScript for props
3. Use React Query for data fetching
4. Add to `App.tsx`
5. Style with Tailwind
6. Add animations with Framer Motion

## Performance Tips

### Backend

- Use **`.AsNoTracking()`** for read-only queries
- Add **indexes** on frequently queried columns
- Use **projection** (Select) to limit data
- **Pagination** for large result sets

### Frontend

- **Lazy load** images with loading states
- Use **React.memo** for expensive components
- **Virtualize** long lists
- **Code split** routes with React.lazy
- Optimize images (WebP, compression)

## Troubleshooting

### API not connecting

- Check CORS configuration in `Program.cs`
- Verify frontend API base URL
- Check ports (backend: 5000, frontend: 5173)

### Database issues

- Delete `etnagroup.db` and run migrations again
- Check connection string in `appsettings.Development.json`

### Frontend build errors

- Clear `node_modules` and reinstall: `npm ci`
- Clear Vite cache: `npm run dev -- --force`

## Extending the Project

### Adding Admin Panel

1. Create protected routes with authentication
2. Add admin controllers with authorization
3. Build admin UI components
4. Add role-based access control

### Adding Real-time Features

1. Install SignalR on backend
2. Install SignalR client on frontend
3. Create hubs for real-time updates
4. Update UI reactively

### Adding Payment Integration

1. Choose provider (Stripe, PayPal)
2. Add payment endpoints
3. Create payment flow UI
4. Handle webhooks for confirmation

## Resources

- [.NET Documentation](https://docs.microsoft.com/dotnet/)
- [React Query Docs](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Support

For questions or issues, refer to the main `README.md` or contact the development team.
