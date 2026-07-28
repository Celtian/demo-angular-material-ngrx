# AGENTS.md

This file applies to the entire repository.

## Project overview

This repository is a standalone Angular 22 application demonstrating Angular Material CRUD flows with NgRx Data and the JSONPlaceholder API.

- Use Node `>=24 <26` and Bun `1.3.14`.
- Use Bun for dependency management and repository scripts.
- The application uses standalone components, zoneless change detection, and `ChangeDetectionStrategy.OnPush`.
- Routes lazy-load components and preserve list state in router query parameters.
- NgRx Store owns router state; NgRx Data manages the `Posts` and `Users` entity collections.
- UI code uses Angular Material, component SCSS, and Tailwind CSS.
- Translations live in `src/assets/i18n/en.json` and `src/assets/i18n/cs.json`.

Do not modify generated output under `dist/`. The `postinstall` script generates `src/app/version.ts`; do not maintain that file manually.

## Common commands

```sh
bun install
bun run start
bun run build
bun run test
bun run lint
```

Run the narrowest relevant checks while developing. Before handing off code changes, run:

```sh
bun run lint
bun run test
bun run build
```

If a full check cannot be run, report exactly which checks were run and which remain.

## Working practices

- Preserve unrelated user changes in the working tree.
- Keep changes focused; do not update dependencies, the lockfile, deployment configuration, or generated files unless the task requires it.
- Prefer existing dependencies and patterns over introducing new packages or abstractions.
- Use Angular CLI schematics when scaffolding Angular artifacts so the settings in `angular.json` are applied:

  ```sh
  bun run ng generate component path/to/component
  ```

- Keep tests beside the source as `*.spec.ts`.
- Update `README.md` when a change affects setup, commands, deployment, or other documented user-facing behavior.

## Angular and TypeScript conventions

- Follow the existing standalone architecture; do not introduce NgModules for application features.
- Keep TypeScript and Angular template checking strict. Do not use `any`, non-null assertions, or disabled lint rules to bypass type errors.
- Use `inject()` for dependency injection and signals for local reactive state.
- Derive state with `computed`; reserve `effect` for genuine side effects.
- Keep RxJS subscriptions lifecycle-safe with `takeUntilDestroyed` or a naturally completing operator.
- Preserve zoneless compatibility. Do not rely on Zone.js to trigger change detection.
- Use `ChangeDetectionStrategy.OnPush` for components.
- Prefer `readonly` for values that are not reassigned and keep explicit public/private visibility consistent with nearby code.
- Use modern template control flow (`@if`, `@for`, and `@switch`) for new code and provide a stable `track` expression for `@for`.
- Use the configured `app-` prefix for components and `app` prefix for attribute directives.
- Keep templates accessible and use self-closing tags where Angular supports them.
- Follow the repository formatting: two spaces, single quotes, semicolons, and a 120-character print width.
- Keep component styles within the configured production budget whenever practical.

## NgRx, API, and routing

- Register entity metadata and plural names centrally in `src/app/entity-metadata.ts`.
- Keep entity API access in NgRx Data services and use typed DTOs from `src/app/shared/dto`.
- Preserve the existing `EntityCollectionServiceBase` and custom data-service patterns when extending post or user behavior.
- Keep router-derived state in typed selectors rather than reading and parsing query parameters in multiple components.
- Preserve lazy route loading, localized route/title handling, and the wildcard route as the final route.
- Keep route paths and other shared values in `src/app/shared/constants`.
- JSONPlaceholder mutations are simulated and are not persisted by the remote API.

## Forms and shared code

- Match the form approach already used by the feature being changed; do not migrate unrelated forms as part of a small change.
- Keep feature-specific code with its feature under `src/app`.
- Put reusable application code under the appropriate `src/app/shared` subdirectory.
- Preserve unsaved-work guards when changing create or edit flows.

## Internationalization

- Put user-visible strings in translation files rather than hard-coding them in templates or TypeScript.
- Keep `en.json` and `cs.json` keys in sync.
- Preserve the existing namespaced and alphabetically sorted translation structure.
- Use the existing extraction workflow when introducing translation keys:

  ```sh
  bun run i18n:extract
  ```

- Review extracted placeholders before keeping translation changes.

## Tests and validation

- Unit tests use Vitest through the Angular build system.
- Add or update focused `*.spec.ts` coverage when behavior changes.
- Run `bun run lint:styles` after SCSS changes when a full lint run is not otherwise needed.
- Do not weaken lint, accessibility, TypeScript strictness, test settings, or build budgets to make a change pass.
