# Etna Group - Premium Real Estate Platform

🌐 **Live Website**: [https://donardk.github.io/etnagroup-ks.com/](https://donardk.github.io/etnagroup-ks.com/)

A modern, interactive real estate platform for Etna Group's residential complexes in Pristina, Kosovo. Built to outperform competitors through aggressive visual dominance and interactivity.

## 🎯 Project Overview

This platform replaces heavy, static text explanations with:
- **Interactive 2D/3D floor plan selectors**
- **Dynamic unit filtering**
- **Instant visual updates**
- **Modern, engaging UI/UX**

## 🏗️ Architecture

### Tech Stack

#### Backend
- **.NET 8 Web API** (C#)
- **Entity Framework Core**
- **SQLite** (local development) → **SQL Server** (production ready)
- **AutoMapper** for DTO mapping
- **xUnit** for testing

#### Frontend
- **React 18** with **TypeScript**
- **Vite** for blazing-fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **TanStack Query** (React Query) for state management

## 📁 Project Structure

```
etnagroup-ks.com/
├── EtnaGroup.sln                 # Solution file
├── server/
│   ├── EtnaGroup.Api/            # Web API project
│   │   ├── Controllers/          # API endpoints
│   │   ├── Models/               # Entity models
│   │   ├── Data/                 # DbContext & migrations
│   │   ├── DTOs/                 # Data transfer objects
│   │   ├── Services/             # Business logic
│   │   ├── Profiles/             # AutoMapper profiles
│   │   └── Migrations/           # EF migrations
│   └── EtnaGroup.Api.Tests/      # Unit tests
└── client/
    ├── src/
    │   ├── api/                  # API client
    │   ├── components/           # Reusable components
    │   ├── features/             # Feature components
    │   ├── hooks/                # React Query hooks
    │   ├── types/                # TypeScript types
    │   └── lib/                  # Utilities
    └── public/
        └── buildings/            # Building images
```

## 🚀 Getting Started

### Prerequisites

- **.NET 9.0 SDK** or later
- **Node.js 22+** and **npm**
- **Git**

### Backend Setup

1. Navigate to the API project:
   ```bash
   cd server/EtnaGroup.Api
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Run migrations (creates SQLite database):
   ```bash
   dotnet ef database update
   ```

4. Start the API:
   ```bash
   dotnet run
   ```

   The API will be available at `http://localhost:5000` (or `https://localhost:5001`)

### Frontend Setup

1. Navigate to the client:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 🔧 Configuration

### Backend

Edit `server/EtnaGroup.Api/appsettings.Development.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=etnagroup.db"
  }
}
```

For **SQL Server** (production), update to:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=EtnaGroup;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}
```

Then update `Program.cs` to use SQL Server:

```csharp
options.UseSqlServer(connectionString)
```

### Frontend

Create `client/.env` (optional):

```
VITE_API_BASE_URL=http://localhost:5000/api
```

## 🧪 Running Tests

### Backend Tests

```bash
cd server/EtnaGroup.Api.Tests
dotnet test
```

### Frontend Tests

```bash
cd client
npm run test
```

## 📦 Building for Production

### Backend

```bash
cd server/EtnaGroup.Api
dotnet publish -c Release -o ./publish
```

### Frontend

```bash
cd client
npm run build
```

The optimized files will be in `client/dist/`

## 🗄️ Database Schema

### Entities

- **Complex**: Residential complex (e.g., Etna Residence)
- **Building**: Individual buildings (e.g., Tara, Tiani)
- **Unit**: Individual apartments/penthouses
- **Inquiry**: Customer inquiries

### Relationships

```
Complex (1) ──┬──< Building (N)
              │
              └──< Unit (N) ──┬──< Inquiry (N)
```

## 🎨 Key Features

### 1. Interactive Living Hero
Full-screen hero with glassmorphism overlay and smooth animations.

### 2. Unit Configurator (Competitor Killer)
- Select unit type (Penthouse, Loft, Type A, Type B)
- Instant 2D/3D plan visualization
- Real-time spec updates
- Animated transitions

### 3. Smart Availability Engine
- Filter by status, bedrooms, price, move-in ready
- Live results
- Beautiful empty states

### 4. Etna Edge Comparison
Visual comparison grid highlighting competitive advantages, especially **Integrated Private Terraces**.

## 🖼️ Asset Naming Convention

Place building images in `client/public/buildings/`:

```
buildings/
├── etna-hero.jpg
├── tara-hero.jpg
├── tara-plan-2d.png
├── tara-plan-3d.png
├── tiani-hero.jpg
├── tiani-plan-2d.png
├── tiani-plan-3d.png
├── tara-ph01-render.jpg
└── tiani-loftA-render.jpg
```

## 📡 API Endpoints

### Complexes
- `GET /api/complexes` - Get all complexes
- `GET /api/complexes/{id}` - Get complex by ID
- `POST /api/complexes` - Create complex
- `PUT /api/complexes/{id}` - Update complex
- `DELETE /api/complexes/{id}` - Delete complex

### Buildings
- `GET /api/buildings` - Get all buildings
- `GET /api/buildings/{id}` - Get building by ID
- `GET /api/buildings/complexes/{complexId}/buildings` - Get buildings by complex
- `POST /api/buildings` - Create building
- `PUT /api/buildings/{id}` - Update building
- `DELETE /api/buildings/{id}` - Delete building

### Units
- `GET /api/units` - Get all units
- `GET /api/units/{id}` - Get unit by ID
- `GET /api/units/buildings/{buildingId}/units` - Get units by building
- `GET /api/units/filter?type=penthouse&status=available&moveInReady=true` - Filter units
- `POST /api/units` - Create unit
- `PUT /api/units/{id}` - Update unit
- `PATCH /api/units/{id}/status` - Update unit status
- `DELETE /api/units/{id}` - Delete unit

### Availability
- `GET /api/availability/summary` - Get availability summary by building/type
- `GET /api/availability/move-in-ready` - Get move-in ready units

### Inquiries
- `GET /api/inquiries` - Get all inquiries (admin)
- `POST /api/units/{unitId}/inquiries` - Create inquiry
- `PATCH /api/inquiries/{id}/status` - Update inquiry status

## 🚢 Deployment

### Backend (Azure, AWS, or on-premises)

1. Update connection string for production database
2. Apply migrations: `dotnet ef database update`
3. Publish: `dotnet publish -c Release`
4. Deploy to hosting service

### Frontend (Netlify, GitHub Pages, etc.)

1. Build: `npm run build`
2. Upload `dist/` folder to hosting
3. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

© 2026 Etna Group. All rights reserved.

## 📞 Support

For issues or questions, contact the Etna Group development team.

---

**Built with ❤️ to redefine premium living in Pristina**
