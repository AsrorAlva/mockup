# Millennia World School (MWS) — Mockup 3 Design Guidelines

Dokumen ini merupakan panduan utama UI/UX dan visual untuk pengembangan halaman web **Millennia World School (MWS)**. Dokumen ini merupakan revisi dari Mockup 3 sebelumnya dengan penyesuaian terhadap identitas warna resmi MWS, serta pengembangan ulang bagian **School Calendar**, **Academic**, dan seluruh submenu di dalam Academic.

Tujuan utama revisi ini adalah menjaga agar seluruh halaman terasa sebagai satu ekosistem MWS: **premium, warm, editorial, academic, child-centered, dan tetap memiliki identitas sekolah yang kuat**.

---

## 1. Brand Foundation

### 1.1 Visual Character

MWS harus memiliki karakter visual:

- Premium tetapi tidak terlalu corporate.
- Warm dan human-centered.
- Academic tetapi tidak kaku.
- Modern tetapi tidak mengikuti tren UI yang terlalu generik.
- Editorial dan institutional.
- Memiliki ruang putih yang cukup.
- Menggunakan layout yang tegas dengan **sharp edges**.
- Memanfaatkan warna sebagai semantic system, bukan dekorasi acak.

### 1.2 Core Visual Principles

1. **Burgundy adalah identitas utama MWS.**
2. **Charcoal adalah warna teks utama.**
3. **White adalah surface utama.**
4. **Gold digunakan sebagai highlight dan milestone.**
5. Secondary colors hanya digunakan ketika memiliki makna tertentu.
6. Jangan menggunakan warna random yang tidak berasal dari palette MWS.
7. Hindari pure black `#000000` sebagai warna teks utama.
8. Hindari teal sebagai warna brand utama.
9. Hindari penggunaan gradient yang terlalu dominan.
10. Jangan membuat seluruh halaman terlihat seperti dashboard SaaS.

---

# 2. Color System

## 2.1 Official Palette

### Main Colors

| Token | Hex | Primary Use |
|---|---|---|
| `--burgundy` | `#7E1518` | Primary identity, CTA, active states, important headings, official moments |
| `--white` | `#FFFFFF` | Main surfaces, cards, readable space |
| `--gold` | `#D6A13A` | Highlights, milestones, joyful accents, indicators |
| `--charcoal` | `#241718` | Main text, dark sections, navigation text |

### Secondary Colors

| Token | Hex | Semantic Use |
|---|---|---|
| `--rose` | `#B94A4E` | SEL, wellbeing, compassion |
| `--sage` | `#6F8B6A` | Growth, sustainability, MTSS support |
| `--navy` | `#1F2A44` | Academics, evidence, leadership, reports |
| `--sky` | `#B8DDF8` | Reflection, calm, child-centered softness |

### Supporting Neutrals

| Token | Suggested Value | Use |
|---|---|---|
| `--warm-white` | `#FAF8F3` | Soft page background |
| `--charcoal-muted` | `#625759` | Secondary text |
| `--border` | `rgba(36, 23, 24, 0.14)` | Subtle borders |
| `--burgundy-dark` | `#5E1013` | Burgundy hover / pressed state |
| `--gold-light` | `#E8C56D` | Soft gold accent |

Supporting neutrals may be adjusted slightly during implementation, but they must remain visually derived from the official MWS palette.

---

## 2.2 Color Semantic Rules

### Burgundy

Use Burgundy for:

- Primary CTA.
- Active navigation.
- Important headings.
- Main links.
- Official school moments.
- Primary borders and accent strips.
- Major school events.
- Important states.

Do not use Burgundy for every element on the page. It should remain identifiable as the primary brand signal.

### Charcoal

Use Charcoal for:

- Body text.
- Navigation text.
- Card titles.
- Icons.
- Dark backgrounds.
- Footer.
- High-contrast institutional sections.

Do not replace Charcoal with pure black.

### Gold

Gold represents:

- Highlights.
- Milestones.
- Achievements.
- Important dates.
- Joyful moments.
- Progress.
- Special recognition.

Gold should be used sparingly. It should feel intentional rather than becoming a second primary color.

### Navy

Navy represents:

- Academic content.
- Curriculum.
- Assessment.
- Evidence.
- Reports.
- Leadership.
- Academic resources.

Navy is a **supporting semantic color**, not a replacement for Burgundy.

### Rose

Rose represents:

- Student wellbeing.
- Social-emotional learning.
- Compassion.
- Community care.

### Sage

Sage represents:

- Growth.
- Sustainability.
- MTSS.
- Learning support.
- Development.

### Sky

Sky represents:

- Reflection.
- Calm.
- Child-centered content.
- Softer informational moments.

---

# 3. Color Usage Restrictions

Do not hardcode random colors in MWS interfaces.

Avoid:

- Teal as a brand color.
- Bright generic blue.
- Generic purple.
- Random green.
- Random orange.
- Pure black text.
- Excessive gradients.
- Rainbow-style category systems.

When introducing a new visual state, first determine whether it can be represented using an existing MWS semantic color.

The semantic meaning of colors must remain consistent throughout the website.

---

# 4. Typography

The typography system uses three primary font families.

## 4.1 Font Families

### Heading

`"Plus Jakarta Sans", sans-serif`

Use for:

- H1.
- H2.
- H3.
- Navigation when emphasis is required.
- Major UI headings.

### Body

`"Nunito Sans", sans-serif`

Use for:

- Body copy.
- Descriptions.
- Navigation.
- Buttons.
- Metadata.
- Supporting information.

### Editorial / Voice

`"Lora", serif`

Use selectively for:

- Philosophy.
- Quotes.
- Editorial statements.
- Emotional or reflective messaging.

---

## 4.2 Typography Scale

### H1

- Size: `clamp(34px, 5.4vw, 66px)`
- Line-height: `1.08`
- Weight: `600`

### H2

- Size: `clamp(30px, 3.5vw, 44px)`
- Line-height: `1.2–1.25`
- Weight: `600`

### H3

- Size: `20–26px`
- Line-height: `1.3`
- Weight: `600`

### Body

- Size: `16–17px`
- Line-height: `1.65–1.7`

### Lead

- Size: `18–20px`
- Line-height: `1.7–1.75`
- Color: `--charcoal-muted`

### Microtext

- Size: `10–12px`
- Weight: `700`
- Letter-spacing: `0.8–1.2px`
- Uppercase only when appropriate.

---

# 5. Component Rules

## 5.1 Sharp Edges

The MWS visual language uses sharp, editorial geometry.

Use:

```css
border-radius: 0;
```

for:

- Cards.
- Buttons.
- Images.
- Calendar cells.
- Panels.
- Navigation dropdowns.
- Modal containers.
- Content blocks.

### Exceptions

Rounded or circular shapes may be used for:

- Slider controls.
- Calendar navigation icon buttons when needed for usability.
- Small status indicators.
- Carousel dots.

These exceptions must remain intentional and limited.

---

# 6. Buttons & Links

## 6.1 Primary Button

Primary CTA:

- Background: `--burgundy`
- Text: `--white`
- Border: `1px solid --burgundy`
- `border-radius: 0`

Hover:

- Background: `--burgundy-dark`
- Text remains white.

Primary buttons should be visually confident but not oversized.

---

## 6.2 Secondary Button

Use an editorial outline treatment:

- Background: transparent.
- Border: `1px solid --charcoal`.
- Text: `--charcoal`.

Hover:

- Background: `--charcoal`.
- Text: `--white`.

---

## 6.3 Text Link

Use:

- Charcoal as default.
- Gold underline or Burgundy hover.
- Arrow movement on hover.

Example behavior:

```css
transform: translateX(4px);
```

Avoid excessive button-like treatment for simple content links.

---

# 7. Navigation System

The navigation must communicate MWS as an established school rather than a generic corporate website.

## 7.1 Main Navigation

Primary navigation items may include:

- Home
- About
- Academic
- Admissions
- School Life
- Community
- Contact

Use:

- Burgundy for active state.
- Charcoal for standard text.
- Gold as a small active indicator.
- White or warm-white as the primary navigation surface depending on header state.

---

## 7.2 Academic Navigation

Academic must have a richer hierarchy.

The Academic menu should not feel like a simple list of unrelated pages.

Recommended structure:

### Academic

- Academic Overview
- Curriculum
- Learning & Assessment
- Academic Calendar
- Academic Support
- Student Development

Each submenu should have a short descriptor where appropriate.

Example:

**Curriculum**  
Explore learning pathways across MWS.

**Learning & Assessment**  
Understand how students learn, reflect, and demonstrate progress.

**Academic Calendar**  
View terms, assessments, breaks, and key academic milestones.

**Academic Support**  
Discover intervention, learning support, and MTSS pathways.

---

# 8. Academic Section

The Academic area must feel significantly richer than a generic collection of cards.

It should represent the academic ecosystem of MWS.

## 8.1 Academic Overview

Purpose:

Introduce the academic philosophy and learning approach of MWS.

Content may include:

- Academic philosophy.
- Learning approach.
- Curriculum overview.
- Student-centered learning.
- Academic pathways.

Visual direction:

- Burgundy for primary identity.
- Navy for academic information.
- Gold for milestones and emphasis.
- Large editorial typography.
- Strong whitespace.

---

## 8.2 Curriculum

Curriculum should provide a clear learning pathway.

Recommended structure:

- Early Years.
- Primary.
- Secondary.
- Curriculum framework.
- Learning outcomes.

The visual hierarchy should allow users to understand the progression without feeling like they are reading a technical document.

---

## 8.3 Learning & Assessment

This section explains how learning is measured and supported.

Possible content:

- Assessment approach.
- Student progress.
- Reporting.
- Reflection.
- Evidence of learning.
- Academic feedback.

Use Navy as the dominant supporting semantic color.

---

## 8.4 Academic Support

Academic support should communicate that student development is supported rather than treated as a deficit.

Possible areas:

- Learning support.
- Intervention.
- MTSS.
- Enrichment.
- Individual learning pathways.

Use Sage as the primary supporting semantic accent.

---

## 8.5 Student Development

Academic development should connect with the wider development of the student.

Possible areas:

- Leadership.
- Student agency.
- Enrichment.
- Clubs.
- Personal development.
- Wellbeing.

Use Gold, Rose, and Sage selectively depending on the content.

---

# 9. School Calendar

The School Calendar must be upgraded from a simple information section into an actual calendar experience.

## 9.1 Calendar Purpose

The calendar should allow visitors to quickly understand:

- Current month.
- School events.
- Academic events.
- Holidays.
- Assessment periods.
- Important milestones.
- Community events.

---

## 9.2 Calendar Layout

Recommended desktop structure:

```text
+-------------------------------------------------------+
| School Calendar                                       |
| Important dates, events, and academic milestones.     |
+-------------------------------------------------------+
|                                                       |
|  <   August 2026   >        Event / Details Panel     |
|                                                       |
|  MON TUE WED THU FRI SAT SUN                         |
|   27  28  29  30  31   1   2                         |
|    3   4   5   6   7   8   9                         |
|   10  11  12  13  14  15  16                         |
|   17  18  19  20  21  22  23                         |
|   24  25  26  27  28  29  30                         |
|   31                                                  |
|                                                       |
+-------------------------------------------------------+
| Key                                                |
| ■ Academic   ■ School Event   ■ Milestone   ■ Holiday |
+-------------------------------------------------------+
```

The exact layout may change based on the final mockup, but the experience must remain recognizable as a calendar.

---

## 9.3 Calendar Navigation

Calendar must include:

- Previous month.
- Current month/year.
- Next month.
- Optional "Today" control.

Navigation should be simple and visually consistent.

---

## 9.4 Calendar Event Colors

Event colors must follow the MWS semantic palette.

| Event Type | Color |
|---|---|
| Academic | `--navy` |
| Major School Event | `--burgundy` |
| Milestone / Achievement | `--gold` |
| Holiday / Break | `--sage` |
| Wellbeing / SEL | `--rose` |
| Reflection / Child-centered | `--sky` |

Do not introduce unrelated colors.

---

## 9.5 Calendar Event Interaction

When a user selects an event, display:

- Event title.
- Date.
- Time when available.
- Category.
- Short description.
- Optional location.
- Optional "Learn More" action.

The selected state should use Burgundy or Gold as the visual emphasis.

---

## 9.6 Calendar Responsive Behavior

### Desktop

Use:

- Full calendar grid.
- Event details panel alongside calendar when space permits.

### Tablet

Use:

- Calendar grid.
- Event details below or beside the grid depending on available width.

### Mobile

Use:

- Compact calendar.
- Horizontally scrollable month navigation if necessary.
- Selected-date event list.
- Avoid tiny unreadable calendar cells.

Mobile usability takes priority over maintaining the desktop composition.

---

# 10. Academic + Calendar Relationship

Academic Calendar should not feel disconnected from the main School Calendar.

The systems should share the same visual language but have different scopes.

### School Calendar

Focuses on:

- Whole-school events.
- Community events.
- Holidays.
- Important school dates.

### Academic Calendar

Focuses on:

- Terms.
- Assessment periods.
- Academic deadlines.
- Reports.
- Learning milestones.

The Academic Calendar can use Navy more heavily, while School Calendar retains Burgundy as its primary identity.

---

# 11. Cards

Cards should feel editorial rather than SaaS-like.

## Standard Card

- Background: `--white`
- Border: `1px solid var(--border)`
- Radius: `0`
- Minimal shadow.
- Burgundy or Gold accent where meaningful.

Avoid:

- Huge rounded corners.
- Excessive shadows.
- Floating dashboard-style cards.
- Excessive icons.

---

# 12. Academic Cards

Academic cards should use semantic accents.

Examples:

### Curriculum

Accent: Burgundy / Navy

### Assessment

Accent: Navy

### Academic Support

Accent: Sage

### Student Wellbeing

Accent: Rose

### Milestones

Accent: Gold

This allows users to understand content through visual meaning rather than decoration alone.

---

# 13. Background System

Use alternating visual rhythm.

Recommended:

- `--warm-white`
- `--white`
- `--charcoal`
- Burgundy feature sections
- Navy academic feature sections

Dark sections should be used intentionally.

Avoid making every section a different color.

---

# 14. Decorative Elements

Decorative elements should remain subtle.

Preferred:

- Thin Burgundy lines.
- Gold rules.
- Editorial blocks.
- Large typography.
- Asymmetric geometry.
- Soft low-opacity semantic shapes.

Avoid:

- Random blobs in unrelated colors.
- Excessive gradients.
- Neon accents.
- Decorative elements that compete with content.

Gold decorative lines are especially appropriate for milestones and important moments.

---

# 15. Layout & Spacing

## 15.1 Section Spacing

Desktop:

```css
padding: 120px 0;
```

Tablet:

```css
padding: 88px 0;
```

Mobile:

```css
padding: 72px 0;
```

Important editorial or hero sections may use larger spacing when required.

---

## 15.2 Container

Recommended:

```css
max-width: 1240px;
margin: 0 auto;
padding-inline: 48px;
```

Tablet:

```css
padding-inline: 28px;
```

Mobile:

```css
padding-inline: 20px;
```

---

# 16. Full-Bleed Sections

Full-width sections should be used selectively to create visual rhythm.

Good candidates:

- Hero.
- School Calendar feature.
- Academic feature.
- Campus imagery.
- Community voices.
- Major milestone sections.

Do not force every section into a contained card layout.

---

# 17. Interaction & Motion

All major transitions should feel smooth and premium.

Preferred:

```css
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
```

Use motion for:

- Hover.
- Image zoom.
- Navigation.
- Card lift.
- Calendar selection.
- Menu opening.
- Slider controls.

Motion should support comprehension, not distract from the content.

---

# 18. Hover Rules

Hover should communicate interaction clearly.

Examples:

### Primary Button

Burgundy → Burgundy Dark

### Text Link

Charcoal → Burgundy

### Important Link

Gold underline becomes more visible.

### Academic Card

Navy or Burgundy accent becomes stronger.

### Calendar Event

Background tint becomes slightly stronger while preserving category color.

Avoid dramatic scaling or excessive movement.

---

# 19. Responsive Design

## Desktop

Prioritize:

- Editorial compositions.
- Large imagery.
- Full navigation.
- Calendar + details layout.
- Multi-column academic content.

## Tablet

Prioritize:

- Reduced spacing.
- Two-column layouts where appropriate.
- Simplified navigation.

## Mobile

Prioritize:

- Clear hierarchy.
- Readable typography.
- Single-column content.
- Touch-friendly controls.
- Simplified calendar interaction.
- Accessible navigation.

Never sacrifice usability to preserve a desktop composition.

---

# 20. Accessibility

All UI must remain accessible.

Requirements:

- Sufficient text/background contrast.
- Keyboard-accessible navigation.
- Visible focus states.
- Buttons must have meaningful labels.
- Calendar events must be distinguishable without color alone.
- Important information must not depend exclusively on color.
- Images require meaningful alt text where appropriate.
- Interactive elements must have adequate touch targets.

Semantic colors should be accompanied by text, icons, labels, or other contextual information when necessary.

---

# 21. UI Do's

- Use the official MWS palette.
- Use Burgundy as the primary identity.
- Use Charcoal instead of pure black.
- Use Gold for highlights and milestones.
- Use Navy for academic/evidence content.
- Use Rose for wellbeing/SEL.
- Use Sage for growth/MTSS.
- Use Sky sparingly for calm/reflection.
- Maintain sharp edges.
- Use whitespace generously.
- Keep hierarchy obvious.
- Make School Calendar genuinely interactive.
- Give Academic enough depth to feel like a complete ecosystem.
- Keep Academic submenu hierarchy clear.
- Use semantic color consistently.
- Maintain a premium editorial feeling.

---

# 22. UI Don'ts

## 22.1 Original Mockup 3 Restrictions

The following rules are mandatory and must be preserved from the original Mockup 3 visual direction.

### No Eyebrow Text

Do not place small tag, label, category, or eyebrow text directly above the main section heading.

Every major section should open directly and confidently with an `H2`.

Avoid patterns such as:

```text
ACADEMICS
Academic Excellence at MWS
```

Prefer:

```text
Academic Excellence at MWS
```

Small labels may still be used inside cards, metadata, filters, or supporting UI where they do not function as an eyebrow above the main section heading.

### No Hover Effect on Inactive Filter Buttons

For category filter bars such as `.filter-btn`:

- Inactive buttons must not change text color on hover.
- The inactive text color remains `#888`.
- Dark text and the active indicator are reserved for `.filter-btn.active`.
- Hovering an inactive filter must not visually imply that it is selected.

Example:

```css
.filter-btn {
  color: #888;
}

.filter-btn:hover {
  color: #888;
}

.filter-btn.active {
  color: var(--charcoal);
}
```

The exact inactive gray may be replaced by an MWS neutral token during implementation, but the behavior must remain unchanged.

### No Rounded Corners on Main Buttons

Do not use rounded corners on:

- `.btn-visit`
- `.btn-secondary`
- Primary CTA buttons
- Chat toggle buttons
- Main action buttons

Use:

```css
border-radius: 0;
```

Circular shapes are reserved for functional controls such as slider arrows or small indicators when appropriate.

### Do Not Contain Every Section

Do not force every section into the same `.wrap` / contained grid.

The page should alternate between contained and full-bleed compositions to prevent large screens from feeling empty and monotonous.

Use full-bleed sections intentionally for:

- Hero.
- School Calendar feature.
- Academic feature sections.
- Campus imagery.
- Community sections.
- Major milestones.
- Other visual transition sections.

The contained layout should provide alignment and readability, while full-bleed sections provide rhythm and visual breathing space.

---

## 22.2 MWS Branding Restrictions

- Do not use teal as the primary MWS color.
- Do not introduce random colors.
- Do not use pure black as the default text color.
- Do not make every card rounded.
- Do not make Academic look like a generic SaaS dashboard.
- Do not reduce Academic to three or four generic cards.
- Do not treat School Calendar as a static list.
- Do not use Gold everywhere.
- Do not use Navy as a replacement for Burgundy.
- Do not use color without semantic meaning.
- Do not overuse gradients.
- Do not overuse shadows.
- Do not create excessive decorative blobs.
- Do not sacrifice mobile usability.

---

# 23. Final Design Direction

The revised MWS Mockup 3 should feel like:

**A premium international school website with a strong Burgundy institutional identity, editorial typography, warm white space, Charcoal text, Gold moments of celebration, and a carefully structured academic ecosystem.**

The design should communicate three things immediately:

1. **This is MWS.**
2. **This is an established academic institution.**
3. **This is a school that cares about the whole student.**

The visual system should therefore balance:

**Institutional authority**  
Burgundy + Charcoal

**Academic credibility**  
Navy + structured layouts

**Celebration and milestones**  
Gold

**Growth and support**  
Sage

**Wellbeing and compassion**  
Rose

**Child-centered softness**  
Sky

The final interface must remain cohesive even when different semantic colors are used. Burgundy remains the visual anchor of the entire MWS experience.
