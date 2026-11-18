<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve existing single-page section IDs when modernizing content so existing anchor links remain valid.
- Keep the irrigation demonstration client-only and conceptual, with its sequence in a tested browser-safe module; it must never imply connection to a physical device.
- Contact forms prepare a message for the existing WhatsApp channel rather than simulate successful delivery; no message is reported as sent before the visitor sends it there.
- GitHub Pages build is opt-in via GITHUB_PAGES=true (static prerender of "/" under the repo base path, output dist/client); the default build stays SSR so Lovable hosting is unaffected.
