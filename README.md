# Patchwork

This is my full-stack project for Web Dev with Professor Burns

## Summary

I decided pretty late that I wanted to use Node.js and React. Now that it's working, I'm glad I did, but I REALLY wish I stuck to the stuff we learned in class. I just bit off way more than I could chew with the time I had available. I didn't know how to use most of this
I am using :

 - AWS RDS (MySQL Database)
 - Node.js (Back-end)
 - React (Front-end)
 - Heroku (Hosting)

I wanted to develop an application where a user would:

 - Make an account
 - "Subscribe" to games to show their chosen updates in one place.
 - Have a "one-stop-shop" for all their subscribed game's updates and some at a glance information.
 - Be aesthetically pleased

I almost did it? I did most of it? The bones are there?

I spent FAR too much time stuck in certain areas trying to understand what tools did what and how to use them. I spent at least two days with an almost working version before I realized I wasn't using any SQL (I made a local JSON server and was querying against that) so I had to tear that down and completely refactor it. At that point I wrote off persisting a logged in user state.

I hate Elvis and I hate using MySQL in the terminal. Instead, I spun up an instance on AWS RDS so I could use HeidiSQL to interface with the DB during development. I have *some* experience in doing this. I also really wanted to learn how to use Node and React so I figured this would be a great opportunity to do so. Before this project I NEVER thought I'd even be tempted into front-end design, but over the course of this ~~weekend~~ semester I see why people like it. It's cool to put something out there like this.

Anyway, once I realized my LoE was like way more than I thought (which was past (passed?) the point of no return) I had to scrap some things. I couldn't, in a timely enough way, figure out how to persist credentials. I'm sure it's super simple, but I couldn't seem to keep the index.css (a horrible mess and in the future I'm eager to use classes in a non terrible way) off my screen. I was caught up with the tools I was using, as implementing them was easy enough, but trying to understand exactly what they are doing for me was a challenge. 
I mainly used:

 - React Router
 - React Redux
 - Axios
 - Express
 - Sequelize

Reace Router handled my routing. Redux handled passing data around the application. Axios did my HTTP Requests. Express framework simplified the server code immensely. Sequelize handled my queries and mapped the returns.
The app is basically just queries with a UI right now. There's nothing too special happening. There's "features" live on the site that allow you to do whatever you want to the database and I'm only now considering that dangerous to my wallet depending on how quickly someone could add a billion rows to my DB. I'll probably take that down Tuesday night. I'll probably develop this fully, I've been completely obsessed with making it look how I want so now it's just pretty CRUD. 

I didn't use PHP.

Thanks for the semester!
