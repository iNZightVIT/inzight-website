# Docusaurus Upgrade Plan: 2.0.1 → 3.9

## Current State

```
@docusaurus/core: ^2.0.1
@docusaurus/preset-classic: ^2.0.1
@docusaurus/plugin-content-docs: ^2.4.1 (version mismatch!)
@docusaurus/module-type-aliases: ^2.0.1
react: ^17.0.2
@mdx-js/react: ^1.6.22
prism-react-renderer: ^1.3.5
rehype-katex: 4
remark-math: 3
```

## Upgrade Strategy

The upgrade must be done in **two major phases**:
1. **Phase 1**: Upgrade within v2.x (2.0.1 → 2.4.3)
2. **Phase 2**: Upgrade from v2.x to v3.x (2.4.3 → 3.9.2)

Phase 2 is the breaking change - it requires React 18, MDX 3, and various plugin updates.

---

## Phase 1: Upgrade to Docusaurus 2.4.3 (Latest v2)

This should be relatively safe - v2.x releases follow semver with no breaking changes.

### Step 1.1: Align all Docusaurus packages to 2.4.3

```bash
bun add @docusaurus/core@2.4.3 @docusaurus/preset-classic@2.4.3 @docusaurus/plugin-content-docs@2.4.3
bun add -D @docusaurus/module-type-aliases@2.4.3
```

### Step 1.2: Test and verify
- Run `bun run build`
- Run `bun run start`
- Check for deprecation warnings

---

## Phase 2: Upgrade to Docusaurus 3.x

Reference: [Preparing your site for Docusaurus v3](https://docusaurus.io/blog/preparing-your-site-for-docusaurus-v3)

### Major Breaking Changes in v3.0

1. **Node.js 18.0+ required** (current: >=16.14) ✅ Already have
2. **React 18 required** (current: 17.0.2) ⚠️ NEEDS UPDATE
3. **MDX 3 required** (current: MDX 1) ⚠️ MAJOR CHANGE
4. **TypeScript 5.0+ required** (current: 4.7.4) ⚠️ NEEDS UPDATE
5. **prism-react-renderer v2** (current: v1.3.5) ⚠️ NEEDS UPDATE
6. **ESM-only remark/rehype plugins** ⚠️ NEEDS UPDATE

### Step 2.1: Update Node.js engine requirement

Update `package.json`:
```json
"engines": {
  "node": ">=18.0"
}
```

### Step 2.2: Update React to v18

```bash
bun add react@18 react-dom@18
```

### Step 2.3: Update MDX and related packages

```bash
bun add @mdx-js/react@3
```

**MDX 3 Breaking Changes:**
- `{expressions}` in JSX: whitespace/newlines handled differently
- HTML comments `<!-- -->` no longer work, use `{/* */}`
- Automatic JSX runtime (no need to import React in MDX files)
- Some MDX 1 syntax may not work

### Step 2.4: Update remark/rehype plugins

```bash
# These need ESM-compatible versions
bun add remark-math@6 rehype-katex@7
```

**Note:** `@agentofuser/remark-oembed` and `@ngsctt/remark-smartypants` may need checking for v3 compatibility.

### Step 2.5: Update prism-react-renderer

```bash
bun add prism-react-renderer@2
```

Update `docusaurus.config.js`:
```js
// Old (v1)
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// New (v2)
import { themes as prismThemes } from 'prism-react-renderer';
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;
```

### Step 2.6: Update TypeScript

```bash
bun add -D typescript@5 @tsconfig/docusaurus@2
```

### Step 2.7: Update Docusaurus to v3

```bash
bun add @docusaurus/core@3 @docusaurus/preset-classic@3 @docusaurus/plugin-content-docs@3
bun add -D @docusaurus/module-type-aliases@3
```

### Step 2.8: Config file changes

1. Convert `docusaurus.config.js` to ESM if needed
2. Update any deprecated config options
3. Check for removed/renamed options

### Step 2.9: Check third-party plugins

- `docusaurus-plugin-matomo` - check v3 compatibility

---

## Phase 3: Incremental v3.x Updates (3.0 → 3.9)

After successful v3.0 migration, upgrade incrementally:

| Version | Key Changes | Reference |
|---------|-------------|-----------|
| 3.1 | Bug fixes | [Blog](https://docusaurus.io/blog/releases/3.1) |
| 3.2 | Bug fixes | [Blog](https://docusaurus.io/blog/releases/3.2) |
| 3.3 | Bug fixes | [Blog](https://docusaurus.io/blog/releases/3.3) |
| 3.4 | New features | [Blog](https://docusaurus.io/blog/releases/3.4) |
| 3.5 | Blog features | [Blog](https://docusaurus.io/blog/releases/3.5) |
| 3.6 | **Much faster builds** | [Blog](https://docusaurus.io/blog/releases/3.6) |
| 3.7 | React 19 support | [Blog](https://docusaurus.io/blog/releases/3.7) |
| 3.8 | Build performance, Future Flags | [Blog](https://docusaurus.io/blog/releases/3.8) |
| 3.9 | Drops Node 18, Algolia v4 | [Blog](https://docusaurus.io/blog/releases/3.9) |

**Note:** v3.9 drops Node.js 18 support - requires Node.js 20+

---

## Execution Plan

### Wave 1: v2.x alignment (Low risk)
- [ ] Update all Docusaurus packages to 2.4.3
- [ ] Test build and functionality
- [ ] Commit

### Wave 2: Pre-v3 preparation (Medium risk)
- [ ] Update React to v18
- [ ] Update TypeScript to v5
- [ ] Test build and functionality
- [ ] Commit

### Wave 3: v3.0 migration (High risk)
- [ ] Update @mdx-js/react to v3
- [ ] Update remark-math to v6
- [ ] Update rehype-katex to v7
- [ ] Update prism-react-renderer to v2
- [ ] Update docusaurus.config.js for v3 changes
- [ ] Update Docusaurus packages to v3.0
- [ ] Fix any MDX syntax issues
- [ ] Test thoroughly
- [ ] Commit

### Wave 4: v3.x incremental updates (Low-Medium risk)
- [ ] Update to v3.9.2 (latest stable)
- [ ] Update Node.js engine to >=20 (for v3.9)
- [ ] Test and commit

---

## Potential Issues to Watch

1. **MDX syntax changes** - May need to update MDX files for v3 compatibility
2. **Custom components** - Check `src/components/` for React 18 compatibility
3. **Third-party plugins** - `docusaurus-plugin-matomo`, `@agentofuser/remark-oembed`
4. **Algolia search** - v3.9 supports Algolia DocSearch v4

---

## Rollback Strategy

Create a git branch before each wave:
```bash
git checkout -b upgrade/docusaurus-2.4
git checkout -b upgrade/docusaurus-3.0
git checkout -b upgrade/docusaurus-3.9
```

If any wave fails, we can easily revert to the previous working state.

---

## Resources

- [Docusaurus 3.0 Announcement](https://docusaurus.io/blog/releases/3.0)
- [Preparing for v3 Guide](https://docusaurus.io/blog/preparing-your-site-for-docusaurus-v3)
- [Migration Guide](https://docusaurus.io/docs/migration/v3)
- [Docusaurus Blog (all releases)](https://docusaurus.io/blog)
