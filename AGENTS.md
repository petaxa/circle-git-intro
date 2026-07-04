<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->

## Slidev Preview Notes

This project is a Slidev deck, but the Vite+ command names can be easy to mix up.
Use the package script when previewing slides:

```bash
vp run dev --port 4343
```

Do not use `vp dev` for Slidev preview. `vp dev` starts the Vite+ dev server, not the
Slidev deck, so routes such as `/`, `/8`, `/16`, and `/17` may return 404 even
though the command appears to have started successfully.

Slidev v52 does not accept `--host`. If host binding is needed, check `slidev --help`
and use Slidev's own options such as `--remote` and `--bind`; otherwise prefer only
`--port`.

After starting the server, open the URL printed by Slidev, usually:

```text
http://localhost:4343/
```

Slide routes use numeric paths such as:

```text
http://localhost:4343/8
http://localhost:4343/16
http://localhost:4343/17
```

For slides that use `v-click`, append the click state when checking the final view:

```text
http://localhost:4343/8?clicks=3
```

When controlling the in-app browser from Codex, prefer `localhost` over `127.0.0.1`.
Wait for `domcontentloaded`; `networkidle` can be unreliable with Slidev. If the
page looks stale after edits, reload the tab.

`vp run export` may fail unless `playwright-chromium` is installed in the project,
because Slidev export uses Playwright. For ordinary design QA, a live Slidev preview
is usually the more reliable path.
