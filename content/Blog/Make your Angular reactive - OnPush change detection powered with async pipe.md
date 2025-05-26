---
title: Make your Angular reactive - OnPush change detection powered with async pipe
draft: false
tags:
  - Angular
date: 2024-03-06
---
## Step 1 - Enforce OnPush change detection

Change detection is a strategy to detect when the component’s data changes and then automatically re-renders the view. The default “check every time” runs the change detection whenever any data is mutated. However this is not necessary, we could and should totally avoid some useless DOM updates, by changing the change detection strategy to **onPush**.

We could add this config in `angular.json` to enforce onPush change detection in all components.

```json
"@schematics/angular:component": {
   "changeDetection": "OnPush"
},
```

This will force us to get used to the reactive pattern, but as a reward, it can largely reduce unnecessary change detection cycles.

When we set `changeDetection` to `ChangeDetectionStrategy.OnPush`, Angular will check for changes in the components only when:

- The component input properties change.
- The component emits an event.
- An observable that the component relies on emits a new value.

Since we’re going to target reactive programming, we will look into the third point in detail: **we only want the component to re-render when the observable emits a new value**. And this leads to step 2.

## Step 2 - use async pipe for your observables

When we use observables and async pipes, we are managing the data flow explicitly. Because the usage of `async` pipe makes it explicit that 1) data may change over time and 2) we as developers have the clear intention to handle asynchronous data streams within the template. Angular will then handle the data flow in a straightforward and controlled way.

For example, if we want to receive some items, we would create an observable such as:

```typescript
items$ = this.itemService.getItems().pipe(
  map(data => data.results)
	// other data transformation if necessary
)
```

Then in the template, we can consume this observable such as:

```html
@if(items$ | async ; as items) {
	@for(item of items; tract $index) {
		<p>{{item.name}}</p>
	}
}
```

By doing so, the view will always be updated in sync with the observable whenever there are items. We could also add `catchError()` in the pipeline and give an error$ observable if we would like to display any error message in the view.

## Step 3 - remove manual subscription

The ideal way will be using an async pipe with observables as much as possible and never do any manual subscription or unsubscription, unless we’ve got some unavoidable side effects to perform. Using an async pipe is declarative, and more declarative means more reactive. In most of the cases, we don't have to manually manage subscriptions and unsubscriptions any more, what a relief.

## Takeaway

When we use the `async` pipe with observables, it automatically manages subscriptions and triggers change detection only when new values arrive. This aligns perfectly with the "OnPush" strategy, as it only checks for changes when data is updated, therefore minimizing unnecessary rendering and enhances performance.

Writing Angular in a reactive way not only saves our own brain, more importantly, what we will be rewarded finally is the high-performing UI and therefore happy users.