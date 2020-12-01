# Entertwine

## Mid-level technical recruitment test

### Welcome

Thank you for taking the time to complete an Entertwine technical challenge.

### Why

As a full-stack developer you'll be responsible for multiple aspects of Entertwine's Tech Stack:

- Front-end UI + Business Logic integration, showing high-levels of attention to detail and with a desire to deliver stunning UI/UX
- Back-end API + App logic integration writing readable, highly performant code.
- Dev-ops maintenance and deployments with cloud providers including CDNs, object stores, load-balancers, server instances and container technology...

We need to know you've got what it takes to join the team.

### Submitting your task

Push a clone of this repository with your complete code to a public git repository of your choice.

If you prefer to keep the code private, you can use Github or Gitlab and add for review:

Github: add user `@ortonomy`
Gitlab: add user `@ortonomy`

Notify your Entertwine contact when the code is complete

### Requirements:

Your job is to complete these user stories:

1. As a User **loading the the sign up page**
   I can **enter my First name, Last name, Email, Phone number, a Password**
   so that **I can sign up the app**

2. As a **System after a user signs up**
   I will **save the user's valid sign up info** and **dispatch a slack notification with the user's details**
   so that **the Entertwine team can be informed about user sign up activity.**

3. As a User **after signing up**
   I can **see a page with instructions to activate my email**
   so that I can **take the next steps in the sign up process**

You should include:

- A front-end in Vue.js (you can use the Vue-CLI or use the the barebones webpack config provided to assist you)
- A back-end with a single API endpoint to sign up backed by `postgreSQL` in a language/framework of your choice
- A configuration option for the slack webhook to test slack notifications
- Any other information / technology that will help your implementation

You DO NOT need to include:

- sending email confirmations after sign up

### Criteria

Entertwine's ethos for its technology team is simple:

- Create delightful, mobile-first UIs that are clean, look great and extremely easy to use across all devices.
- Utilise cutting edge and/or tried and tested technology to rapidly create maintainable, scaleable, solutions to fulfill business needs.
- Write clean and maintainable code to minimise technical debt and facilitate great work across the team.

We'll be looking for how well the submitted code meets these criteria.
