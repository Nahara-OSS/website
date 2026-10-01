---
title: Help us develop a new drawing app!
brief: What makes a great drawing app? Let's figure out together.
author: nahkd123
badges: [type/case]
tags: [survey, drawing app]
publishedOn: 2026-10-01T16:37:05.320Z
---

Hello there! We are hosting a survey to figure out how we should develop a brand new drawing app. The app will be open
sourced and distributed to everyone free-of-charge. Additionally, we also planning to publish the survey results to the
public so that anyone can use it for their researches (or develop their own app, I guess), so it is important that you
agree with the data usage policy (there is a required checkbox in the survey) and exclude any personal information from
the answers.

Really want to help us developing a new drawing app? Then [head over to the survey (click this)][survey-form] to get
started.

In the next sections below, we will explain the questions in details, just in case you have a hard time figuring out how
to (or how you should) answer the questions, or you want to learn the purposes behind the questions.

## Your experience with drawing apps

In this section, we are looking for user with prior experience with various drawing apps (at any skill level).
Information in this section will be used to define the baseline for our drawing app.

## Features in drawing apps

This section is about learning the features that most user use everyday in existing drawing apps. Some features are
"nice to have", while others are extremely important. While the previous section establish the baseline of drawing apps,
this section refines the requirements for drawing apps. The table below shows a list of features and its detailed
description so that you can determine how important they are to your workflow.

| Feature | Description |
| --- | --- |
| 3D models | Use 3D models as part of the artwork or as reference. |
| Animation | Frame-based animation (flipbook-style), keyframe animation (like motion graphics editor) or anything related to animation. |
| Anti-GenAI cloak | Add a special overlay (also known as "cloaking") to the artwork during export, which can protect (or at least reduce) style mimicry models. |
| Asset bundle/pack | Combine various assets, such as brush presets, gradients, 3D models, effect presets into a single package that can easily be imported to drawing apps. |
| Auto-saving | Periodically save the artwork at an interval (e.g. save every 15 minutes). |
| Clipping mask | Use a layer as clip for the layer above/below it. |
| CMYK | Subtractive CMYK color model for prints (spot color not included). |
| Color depth other than 8-bit/channel | Store color with greater bit depth inside artwork, which can reduce banding at a cost of double (or even quadruple) the file size. |
| Color management | Load and use color profile so that the color appears correct inside drawing app. |
| Custom layout | User interface layout customization. |
| Cross-device sync | Synchronize artworks and assets across multiple devices. |
| Custom theme | Customize the color scheme/theme of user interface. |
| Drawing time tracker | Track how long you've spent working on the artwork. |
| Fill bucket | Fill an area on the artwork with color, gradient or pattern. |
| Filters | Image filters to apply on the artwork, such as bloom, blur, gradient map and more. |
| Full screen | Open the drawing app in full screen mode, which hides system UI and most of app UI to maximize drawing area. |
| Guidelines | Insert overlays like perspective guides or rulers, as well as ability to snap the cursor to those overlays. |
| GPU acceleration | Make use of GPU for drawing actual pixels on the artwork (not just for showing the artwork on the screen). |
| HDR | Support HDR color profile and display HDR artworks on the screen. |
| Infinite drawing canvas | Canvas with no size limitation (virtually infinite width and height). Actual size is limited by system. |
| Lasso fill | Use lasso to fill an area with color, gradient or pattern. |
| Layers | Layer stack. |
| Liquify | Tool to deform, warp or reshape part of artwork by pushing the pixels. |
| Multiple pages | Multiple pages in a single artwork file (e.g. for comic). |
| Non-destructive strokes | Brush strokes whose path can later be modified. |
| Online assets downloader | Online assets store/explorer that can download, import and share assets. |
| Pop-up palette | Open HUD on the drawing area when pressed a certain keyboard shortcut or pen button. |
| Reference board | An integrated board for storing and viewing reference images. |
| Selection tool | Select the area on the artwork in order to move, copy or temporary restrict drawing area. |
| Shapes tool | Draw shapes like rectangle, circle, line, etc. |
| Timelapse | Automatically take a screenshot of the artwork at an interval (e.g. every 30 seconds) and combine them into a single timelapse video. |
| Transform tool | Tool for transforming the artwork, such as moving, scaling or rotating. |
| Undo/redo | Undo previous edit or redo the previously undone action. |
| Version control | Manage different reversion of the artwork with commits and branches (like Git). |

## Opinions about user experience

This section is about learning your opinions when it comes to using the drawing app, or in other words, what you think
a good drawing app should be. The table below shows a list of premade opinions and its detailed description.

| Opinion | Description |
| --- | --- |
| App should care about user's enjoyment in drawing. | When we talk about "enjoyment", we mean designing the drawing app in a way that can "hooks" people into drawing. Think of it as designing the app like a game, rather than designing it for serious productivity. |
| App should be efficient to achieve the final results as fast as possible | This is the opposite of previous opinion, where efficiency is the top priority. |
| The appearance of the app matters a lot. | The user interface must appears "modern", "clean", "minimals" or anything that is part of modern user interface design trends. |
| App must have great stability. | Drawing app must not crash when being used for long period of time, there should be recovery mechanism to avoid hard crash and it should be capable of handling extreme usage (e.g. creating 1,000 layers in short amount of time). |
| Everything in the app must be customizable. | Make everything customizable, or at least as customizable as possible. The opposite of this is an opinionated drawing app with everything fixed into places, ready to be used without having a way to configure anything to your liking. |
| I care a lot about frequent app updates. | New app update happens frequently (e.g. every week), usually to push bug fixes as fast as possible, but it can also introduce a bit of unstability. |
| App developers should engage with users frequently. | Developers should be interacting with users, usually though common communication channels (e.g. Discord server, support forum, GitHub discussions). |
| New app must copy other popular apps to be considered as tools for professionals | When creating a new drawing app, it must have the same feature set as other popular drawing apps so that industry professionals can consider using it. In extreme cases, it even includes the possibility of copying user interface to make it feels familiar. |
| App visuals must appears the same on all platform. | The user interface of the app must be the same across multiple devices, including (but not limited to) desktop, phone and standalone tablet. The opposite of this is different user interface tailored to different device type (while keeping the same engine across all platforms). |
| I care a lot about what kind of artwork or art style I can do with the app. | The type of art style that can be done on drawing app matters a lot, such as being able to draw manga style for example. Although all drawing apps can do any art styles, some apps are designed (or tailored) towards certain styles (such as making it easier or faster to draw for example). |

## Your habits and devices

This section is about learning what user usually do in their drawing apps and which devices they use for drawing so that
we can figure out how to optimize the app for the best performance while consuming less computing resources, which is
much needed for daily usages. Your habits determine the architecture that we should use for the drawing app (e.g. should
it be based on tiles or should we just create a full size bitmap for each layer instead?), while your devices determine
the limits that the drawing app must deal with.

### Usual canvas size

Big canvas size demands a lot of memory. If you use big canvas a lot, what kind of art do you draw on each layer? If the
layer contains mostly transparent (unused) area, it would be better to go with tile system. But if the layer is used
entirely (or mostly covered) then full bitmap size is better since it would need less draw calls than having to draw
multiple tiles.

But if you use small canvas size (e.g. pixel art), it would be better to skip GPU acceleration entirely, because it is
much easier to create brush engine that runs on CPU (thus saves development time).

### Typical layer count

Layer count also matters when it comes to memory usage. If the number of layers is small enough (about 30 to 50 layers
per artwork), it is fine to store the entire data of artwork on the GPU. But if the number of layers is big enough
(about 100 to 500 layers), we should consider tiles or even combining GPU memory, system memory and storage to hold such
a large amount of data.

### Typical maximum brush size

It is important that the kind of brush that you use the most doesn't lags when you draw. If you do sketching or line art
a lot, you'd probably want 10px brush to perform as smooth as possible.

### Typical color depth

Another thing that controls the amount of data needed to store the artwork is the color depth. For most people, sRGB is
all they need (which is 8-bit per channel, or 32-bit for each pixel). Some people may need higher color depth because
they are working on environment maps, high quality textures for their 3D scenes or even HDR.

### Computing devices for drawing

Both "What are the computing devices you use for drawing?" and "What is the primary computing device you use for
drawing?" are asking about the device(s) that you use for **drawing**, so don't include your phone here if you don't
draw on it.

### Display size

The "What is the physical dimension of your primary computing device's display?" question asks for your monitor's
physical size, which will be used to determine how the UI should be designed. If the display is big enough, we can cramp
a lot of tools on the display to improve efficiency (though it might introduce UI cognitive load). If the display is too
small, we have to minimize the amount of tools we can show at the same time (e.g. only show extra selection options when
user selected something).

Note that the question is about physical dimension and not the display resolution.

### Other hardware information

Questions about system memory and GPU memory are used to determine how much we should offload artwork data to system
memory or even storage device (you know, using SSD/HDD as virtual memory). Systems with big enough memory doesn't need
to use storage as memory, but older systems might need it. Additionally, if the system have low memory and wanting to
use virtual memory, the TBW of SSD also matters too, because if we keep using SSD as virtual memory way too frequent, it
can cause SSD to fail sooner, which can introduce data loss. That means having a good balance between VRAM + RAM +
storage utilization is important, which is why we are asking for GPU memory, system memory and TBW.

As for the GPU type, the one difference between dedicated GPU (like RTX 5090 for example) and integrated GPU (like Intel
HD Graphics or Iris Xe for example) is where the GPU data is stored. While dedicated GPU have its own dedicated memory
(usually called "VRAM"), integrated GPU/GPU with unified memory model shares the system memory, which means device with
such GPU can process big artwork data when given enough system memory. And although it is possible to develop a drawing
app with VRAM + RAM hybrid, it is much simpler if we don't have to care about transferring data between CPU and GPU.

## The end

Welcome to the end of the blog post!

That was a big wall of text, but at least I hope you understand the reasons behind those questions, like why we ask for
your hardware information for example. The actual reason for this survey is to determine the baseline for drawing apps,
the required feature set and the minimum hardware requirement that drawing apps should be targeting. Developing a good
drawing app is not just as simple as storing and setting pixels; we need to have a good balance between performance,
memory consumption and usability. In the end, all we want is to keep drawing, but if developing digital art app is too
hard, we might as well draw on paper so we never have headaches 😂.

Have you filled the survey yet? If not, [click this shiny link][survey-form] and fill it with your answers. Once again,
the answers will be published for anyone to see, so don't forget to exclude any personal information in yuor answers.

[survey-form]: https://forms.gle/RtPpGDGy36YuuSLV6
