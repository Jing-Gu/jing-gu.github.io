---
title: Why Angular route order matters? Learning from a 500 server error
draft: false
tags:
  - Angular
date: 2024-02-24
---
I was on a MEAK stack recipe project, once I got a 500 error, and I was so focused on backend debugging, the error message was:

```plaintext
Cast to ObjectId failed for value "create" (type string) at path "_id" for model "Recipe"
```

The error code plus the message itself really made me think that my POST method was wrong, even though I doubted, it worked well… until I added the recipe detail page.

I tested with postman, my POST was correct, so it must be frontend error then. I checked the network again, on this 500 error, I checked headers this time, wait, it was a wrong GET method? I then saw the http call on **http://localhost:3000/api/v1/recipes/create**.

Oh, here you are, how come I was trying to get a recipe with id **"create"**? Right away I realized it was the routing error. In my **recipe.routes.ts**, I had my routes like this:

```typescript
export const recipeRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./recipe-list/recipe-list.component').then(c => c.RecipeListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./recipe-details/recipe-details.component').then(c => c.RecipeDetailsComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./recipe-creation/recipe-creation.component').then(c => c.RecipeCreationComponent)
  }
]
```

Look at this path order, I vaguely remember Angular routes order is important, **":id"** is a less specific route than **"create"**, by this wrong order, **"create"** string will be literally taken as an id, and certainly won’t be able to get anything from the server, except for a **500** for me.

Just to refresh the knowledge:

> Angular Router uses a **first-match wins** strategy when matching routes, so more specific routes should be placed above less specific routes. List routes with a static path first, followed by an empty path route, which matches the default route. The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first.

Therefore, the correct routes should be as below, simply swapping the order of **"create"** path and **":id"** path solves the problem.

```typescript
export const recipeRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./recipe-list/recipe-list.component').then(c => c.RecipeListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./recipe-creation/recipe-creation.component').then(c => c.RecipeCreationComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./recipe-details/recipe-details.component').then(c => c.RecipeDetailsComponent)
  }
]
```

And another lesson? 500 server error may not always be the backend problem.