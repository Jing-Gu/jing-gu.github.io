---
title: Angular or React? Some thoughts about standalone components on 2024
date: 2024-01-24
tags: ['Angular']
---

# Angular or React? Some thoughts about standalone components on 2024

Angular or React, how do you choose your good weapon when both are frontend hotshots.

## Framework or library
Although Angular and React can perform similar frontend jobs, but they can be very different if analyzing them closely. To start, Angular is a full-fledged MVC framework with strong opinions on how a web application should be structured. React is a library, not a framework, thus it is up to developers to choose tools and libraries for other parts of the react app. In the Angular app, almost all essentials are provided in the big Angular environment, and you are expected to follow certain conventions or structures. This can be an advantage especially for larger enterprise-level apps, because it forces the team to discipline and the folder structure is therefore familiar for most of the Angular developers. However the strong opinions and verbosity might be seen as a disadvantage if your project doesn’t have complex requirements.

## Modular design or component based
Before the popularity of Angular standalone components, Angular was known for its modular design through NgModules and dependency injection. As you can see Angular apps are typically structured as a collection of modules, which are containers to encapsulate related components, services, directives, and pipes. The dependency injection furthermore promotes the components to be loosely coupled. This modularity makes Angular easier to manage and scale large applications.

On the other hand, React is more flexible and less opinionated when it comes to architecture. React architecture is component-based , where UIs are built by composing small, reusable components. Each component encapsulates its own logic and presentation. Even though React developers can often adopt modular patterns to organize their code, this will differ from team to team as per their preferences.

## The rise of standalone components: A paradigm shift in Angular
Well standalone components are nothing new, a React project is full of standalone components. As one of React’s advantages, it provides the huge flexibility that allows developers to use components in a more standalone and modular way without requiring a specific module system.

Since Angular14, standalone components have also been adopted into Angular’s own module system. Apparently Angular has become more flexible and similar in some aspects to React’s approach.

One thing that pushes away many developers is the concept of NgModule, tedious and verbose. On the contrary, standalone components are not tied to any specific module, you can use them by importing or exporting directly in any part of the application, and NgModule is no longer needed. There’s a trend or it might be recommended to build your project with just standalone components and totally ditch the NgModule. Depending on your app size and needs (e.g.lots of reusable ui), “standalone forever” architecture can be a good choice, and you might want to configure it in angular.json from the beginning. Read our previous article “6 steps to kick off a new Angular project in 2024” if you are interested in customizing standalone settings.

## Standalone components pros and cons
Standalone components are lightweight, they remove lots of boilerplate but are not that perfect. All standalone components still need to import at least the CommonModule to be functional, or for any complicated component a long list of other modules and components will have to be imported. The long import statements can soon get you overwhelmed.

But remember that standalone components in Angular are not there to replace NgModules, but serve as an alternative. That is to say, you can have the best of both by keeping the module-based architecture, and refactoring the dumb components, reusable UI, pipes or directives as standalone.

Maybe one day the CommonModule won’t be even necessary to import each time any more, does that make Angular sound more like a heavier React then?

## Worth a shot ?
When you look at an Angular project full of classes, interfaces, services, singletons, dependency injection, etc, it already feels like a long learning curve (not even metionning RxJS here). But this might just be the reason for Angular’s popularity in enterprise, since Angular was born to support the MVC design pattern, and its “complexity” aligns perfectly with the OOP concepts.

Every year there seems to be similar questions out there: Is xxx framework dead? Is it worth it to learn xxxx on xxxx year?

In fact, no matter which year we are, or how simple it is to grasp React, personally I think Angular will always be worth learning in order to have a deeper understanding of software development, at least for frontend developers.