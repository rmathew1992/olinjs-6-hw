olinjs-6-hw
===========

homework #6: Upgrading the FB app

## Assignment

We're going to update the Facebook app you guys created during the last homework. We're sick of being restricted to our own little world inside of MyFacebookSpace with all of our friends being on actual Facebook, so we're going to add functionality in order to interact with Facebook.

We want to be able to look at our friend's photos and comment on them.

For the UI we want the following features:

* Pictures of us/our friends displayed through [rcarousel](http://ryrych.github.com/rcarousel/), a cool jQuery plugin
 * HINT: To set it up, just dowload it, unzip it, then copy and paste the widget directory into your project's public/javascript directory. Then just follow the instruction given in the [getting started](http://ryrych.github.com/rcarousel/#getting-started) setion. Remember, to access files in an app's public folder you don't need to include /public in your path. So the widget directory should be accessible from localhost:3000/javascripts/widget. 
  Once you get a basic image carousel working, try adding on cool configurations, or some of your own css styles. One thing your probably gonna want to do is navigate your carousel. To do that read the [navigation section](http://ryrych.github.com/rcarousel/#navigation). If you want to configure the carousel, you do so by passing in a javascript object to the rcarousel initializer, as seen here.

  ```
  $( ".wrapper" ).rcarousel({
    width: 200,
    height: 300, 
    visible:1, 
    step:1
  })
  ```

  The `visible` and `step` options are probably ones you'll want to change right away, to make it so one picture displays at a time. Just make sure your `step` is not greater than your `visible` or else you'll get a confusing error. By default both are 3 I believe. Read more about this stuff more on the rcarousel site.

* As we see each image in the carousel, we should be able to add a comment to it.
  * HINT: If you read through the introduction for rcarousel you will have noticed that you can include ANY arbitrary group of html elements in the carousel. You can have scrolling  tables, or divs, or a tags or whatever. So one way you could try implementing this feasture is by wrapping each image you want to display in a div along with a textarea or input type=text tag. This will allow you to scroll images with text boxes attached, for easy captioning. This is probably the easiest way to create this feature, but certainly not the only way or the best. So if you have time, try a different solution.

* The comment should be pushed over to Facebook so that everyone else can see it.` 
* Push to Heroku.
* Update the homework sheet

This is the last of the homeworks. Once you finish congratulate yourself by smashing your laptop to bits. Or by watching the [best show ever](https://www.google.com/search?q=adventure+time+streaming&oq=adventure+time+streaming).
