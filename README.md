# @uselessdev/hooks
> A small collection of React hooks

## About
This project is inspired by [shadcn/ui](https://ui.shadcn.com/) and their philosophy of just copying the components without needing to install an entire library.

The hooks are all written in TypeScript and require at least Node 14 (which supports ESM).

## Adding a hook
To add a hook to your project, you need to run:

```bash
npx @uselessdev/hooks add <hook name>
```

The command above will copy the selected hook into your `src/hooks` (eventually, we can add support for configuration so you can select the destination folder).

## Available hooks

| Hook                   | What it does                                  |
|------------------------|-----------------------------------------------|
| use-disclosure         | Use this to control states for dialogs such as `opened`, `closed` |
| use-copy-to-clipboard  | Copy text to the clipboard                    |
| use-media-query        | Handle media queries and window resize        |
