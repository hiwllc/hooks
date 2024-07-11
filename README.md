# @uselessdev/hooks
> A small collection of react hooks


## About
This project is inspired by [shadcn/ui](https://ui.shadcn.com/) and ther philosofy of just copy the components with no needs to install a entire library.

The hooks are all writen in typescript, and requires at leat node 14 (that supports ESM)

## Adding a hook
To get a hook into your project you need to run:

```bash
npx @uselessdev/hooks add <hook name>
```

The command above will copy the selected hook into your `src/hooks` (eventually we can add support to config so you can select the destination folder).

## Available hooks

| Hook | What is does? |
|------|---------------|
| use-disclosure | Use this to control states for dialogs such as `opened`, `closed` |
