# Conventional Commits

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Type

- `feat`: A new feature
- `fix`: A bug fix
- `chore`: Build, tooling, dependencies, project setup
- `docs`: Documentation changes
- `style`: Code style (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `perf`: Performance improvements
- `test`: Adding or updating tests

## Scope

Linear ticket ID (e.g., `GAR-34`).

## Subject

Concise description in imperative mood. No period at the end.

## Body & Footer

Optional. Use for detailed explanation and issue references.

## Linear Integration

Use closing keywords in the commit body or footer to link Linear issues:

```
fix(GAR-34): Resolve authentication bug

Fixes GAR-34
```

Closing keywords: `Fixes`, `Resolves`, `Closes`, `Implements`

Non-closing: `Refs`, `Related to`, `Part of`

## Example

```
chore(GAR-34): Bootstrap React Native project

Resolves GAR-34
```

## Git Template

A `.gitmessage` template is configured locally to help with this format.
