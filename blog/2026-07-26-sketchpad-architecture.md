---
title: Sketchpad's architecture
brief: How much does it takes to make an infinite canvas? Everything.
author: nahkd123
badges: [software/sketchpad, type/engineering]
tags: [architecture, drawing app, mobile, android]
publishedOn: 2026-07-25T19:14:25.359Z
---

[Nahara's Sketchpad][skpd] is dubbed as "the companion drawing app for Android". The word "companion" is there not
without purpose: the app is meant to be used during the early sketching and exploration phase of art project, and once
you are done with sketching, you'd transfer your sketch over to a more polished app. And so, I have designed Sketchpad
with the intention of it being the sketching app that I want to use. It's not the best, but it works.

In this article, I will describe the internal working of Nahara's Sketchpad, which... is not really special, to be
honest.

## Planning the requirements

Before I started working on Sketchpad, I came up with the following requirements that I think is awesome for a sketching
app:

- **Infinite canvas**: One thing I do a lot during early phase of making artworks is, well, sketching! But not just
  sketching a single sketch - I keep making variations until I got the sketch that I want, and I tends to do that on the
  same page. Eventually I ran out of spaces to make sketches anymore, which is why I wanted infinite canvas in the first
  place!

  You might have heard of this one app called "Concepts" which also have infinite canvas. However, this app relies on
  vector-like stroke, which appears a bit off than what I've been used to. What I want is an infinite _raster_ canvas.

- **Raster data**: Vector data is okay for writing or doodling simple shapes, but it feels weird when I start sketching
  with it. I am suspecting the brush engine is to blame here, probably because it has to be simple since the app must
  redraw the stroke when user transformed the canvas, while with raster data, you just don't have to redraw anything.

- **Good brush engine**: Brush customization is the key factor when it comes to sketching for me personally. Well I
  mean, it sounds stupid, like what, just use the pencil tool from, I don't know, a random note taking app and it should
  be fine, right? Well... not exactly.

  The thing with pencil brushes from other apps is that it isn't as nice as Krita. If you ask me, I personally love the
  pencil brush from Krita 4 Default Bundle (which is created by David Revoy, pretty cool). I tried to find the same (or
  similar pencil brush) from other apps, but damn, nothing as close to Krita pencil.

- **Performance**: Most raster-based apps are actually CPU-bound, which is basically just crunching numbers on the CPU
  to draw the pixels on the canvas. Nahara's Sketchpad, on the other hand, utilize OpenGL ES for brush engine, so the
  performance (in theory) should be pretty good and have more power efficient than CPU-based engines. That is, if I
  actually implemented the engine correctly...

## Lots of dust makes a mountain

There are many ways to tackle the infinite canvas problem:

- **Expand the size**: When the pointer reached outside the bounds, the simple solution is to just expand the size of
  the canvas. The problem with expanding the size is that eventually, you will waste a lot of GPU memory on empty
  regions, and if you know anything about mobile devices, you know that the app will eventually get killed by operating
  system.

- **Tiling data**: Instead of storing entire canvas, we only store the region that have the data. So if the region is
  not touched by user, it will be represented as a single boolean value in the memory marking it as "not used". Such
  region is what we'd call "tile".

Nahara's Sketchpad uses the tiling data mechanism to provide infinite canvas feature, though it also comes with great
issues on its own: How does one handle selection? What about liquify? To this day, I still couldn't figure out a way to
tackle these extra issues.

## Stamp brush engine

Brush engine is actually quite simple to implement: you just stick a bunch of evenly-spaced images along the stroke's
path and you got a nice brush stroke. In OpenGL, we would use the instancing feature so that we don't have to issue too
many draw calls at the same time, since it is always more efficient to send as little draw commands as possible.

In reality though, brush engine have another feature which makes it more complicated than usual, which is the flow and
opacity feature. Both of these properties can be controlled by brush dynamics (you know, adjusting brush parameters
based on stylus' sensor data), and the behavior of opacity and flow is significantly different:

- Flow controls the opacity of each individual brush stamp when stamping on the canvas;
- Opacity controls the overall opacity of entire brush stroke.

So if you have low flow but full opacity, you can draw the stroke on top of itself repeatedly and the opacity would
builds up, and if you have full flow but low opacity, the brush stroke would just appears at the same opacity. But if
the opacity is controlled by brush dynamic, and you try to draw the stroke on top of itself but with higher opacity, the
higher opacity would override the previous opacity value. Sounds complicated? It is.

To implement this opacity and flow behavior, the brush engine would have 2 separate hidden layers, which I'd call "the
stamp layer" and "the opacity layer". These 2 layers together becomes "the current stroke layer" before sticking the
content on top of canvas.

- For the stamp layer, it would collect the stamps coming from the brush engine at _full_ opacity;

- For the opacity layer, it would only collect the opacity value if the incoming opacity is _greater_ than the existing
  content on the layer.

Does the word "greater" rings a bell here? If you know graphics API well enough, you should immediately guessed that the
opacity layer seems similar to depth map, and the word "greater" is the depth test! Quite clever isn't it?

## Concerns

### Can't you just use Krita for sketching?

Ah, but this is for Android!

You see, Krita for Android in reality is actually Krita for ChromeOS. The user interface is definitely not designed for
touchscreen-only devices, which are basically all standalone Android tablets (if you don't plug an external keyboard
in). It wasn't really that great on mobile device, and I want the user interface to be usable on tablets, which is why I
want to make Nahara's Sketchpad.

[skpd]: https://github.com/Nahara-OSS/sketchpad
