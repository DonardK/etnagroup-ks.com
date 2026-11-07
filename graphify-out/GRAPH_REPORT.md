# Graph Report - etnagroup-ks.com  (2026-11-07)

## Corpus Check
- 64 files · ~17,668,767 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 405 nodes · 536 edges · 61 communities (45 shown, 16 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fe4f8823`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 31 edges
2. `assetUrl()` - 28 edges
3. `onRequestPost()` - 13 edges
4. `useTouchDevice()` - 13 edges
5. `UnitsController` - 13 edges
6. `findApartmentsForQuery()` - 12 edges
7. `ApiClient` - 11 edges
8. `sendMessage()` - 10 edges
9. `BuildingsController` - 10 edges
10. `ComplexesController` - 9 edges

## Surprising Connections (you probably didn't know these)
- `ChatPromoBanner()` --calls--> `useTouchDevice()`  [INFERRED]
  client/src/components/chat/ChatPromoBanner.tsx → client/src/hooks/useTouchDevice.ts
- `Footer()` --calls--> `useLanguage()`  [INFERRED]
  client/src/components/layout/Footer.tsx → client/src/i18n/LanguageContext.tsx
- `Navbar()` --calls--> `useLanguage()`  [INFERRED]
  client/src/components/layout/Navbar.tsx → client/src/i18n/LanguageContext.tsx
- `onRequestPost()` --calls--> `sendSiteEmail()`  [INFERRED]
  client/functions/api/contact.ts → client/functions/utils/sendEmail.ts
- `onRequestPost()` --calls--> `sendSiteEmail()`  [INFERRED]
  client/functions/api/report.ts → client/functions/utils/sendEmail.ts

## Communities (61 total, 16 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (13): AppDbContext, ControllerBase, AvailabilityController, BuildingsController, ComplexesController, InquiriesController, UnitsController, AvailabilityServiceTests (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (17): getCentroid(), imageMapCoordsToPolygonPoints(), getCentroid(), imageMapCoordsToPolygonPoints(), getCentroid(), getCentroid(), closeLightbox(), handleKeyDown() (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (27): buildApartmentContext(), buildQueryNotes(), formatArea(), handleKeyDown(), sendMessage(), areaLabelFromPath(), blockLetter(), filterApartments() (+19 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (13): getApartmentList(), Footer(), Navbar(), ElsaBlockA(), ElsaBlockB(), ElsaBlockC(), ElsaBlockD(), ElsaBlockE() (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (13): ChatPromoBanner(), FloatingAssistantDock(), LanguageSwitcher(), WhatsAppButton(), backLabel(), getApartmentPageCopy(), useLanguage(), handleChange() (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.23
Nodes (17): appendReplyClosing(), buildSystemPrompt(), extractModelText(), extractSqmFigures(), generationLocale(), json(), onRequestPost(), parseLocale() (+9 more)

### Community 6 - "Community 6"
Cohesion: 0.16
Nodes (5): componentDidCatch(), constructor(), ErrorBoundary, getDerivedStateFromError(), LanguageProvider()

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (7): json(), onRequestPost(), json(), onRequestPost(), sendSiteEmail(), sendViaMailchannels(), sendViaResend()

### Community 9 - "Community 9"
Cohesion: 0.36
Nodes (5): areaFromFilename(), areaLabel(), sortByArea(), tianiPage(), toApartment()

### Community 10 - "Community 10"
Cohesion: 0.39
Nodes (4): getJoniKatiApartments(), pdfToApartment(), sortByArea(), JoniKati()

### Community 13 - "Community 13"
Cohesion: 0.33
Nodes (3): Migration, EtnaGroup.Api.Migrations, InitialCreate

### Community 14 - "Community 14"
Cohesion: 0.7
Nodes (4): canonicalRoom(), extractSpec(), main(), num()

### Community 17 - "Community 17"
Cohesion: 0.4
Nodes (4): CreateUnitDto, UnitDto, UnitFilterDto, UpdateUnitDto

### Community 18 - "Community 18"
Cohesion: 0.4
Nodes (3): AppDbContextModelSnapshot, EtnaGroup.Api.Migrations, ModelSnapshot

### Community 21 - "Community 21"
Cohesion: 0.5
Nodes (3): BuildingDto, CreateBuildingDto, UpdateBuildingDto

### Community 22 - "Community 22"
Cohesion: 0.5
Nodes (3): ComplexDto, CreateComplexDto, UpdateComplexDto

### Community 23 - "Community 23"
Cohesion: 0.5
Nodes (3): CreateInquiryDto, InquiryDto, UpdateInquiryStatusDto

## Knowledge Gaps
- **21 isolated node(s):** `AvailabilitySummaryDto`, `BuildingDto`, `CreateBuildingDto`, `UpdateBuildingDto`, `ComplexDto` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `Community 4` to `Community 1`, `Community 2`, `Community 3`, `Community 6`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `assetUrl()` connect `Community 1` to `Community 2`, `Community 3`, `Community 4`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `useLanguage()` (e.g. with `LanguageSwitcher()` and `WhatsAppButton()`) actually correct?**
  _`useLanguage()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `AvailabilitySummaryDto`, `BuildingDto`, `CreateBuildingDto` to the rest of the system?**
  _21 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._