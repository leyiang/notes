# Details about Dynamic SVG

## Ceate svg element
If you are using a mime type that is using xml parser to parse your file (image+xml). You need to specify the xmlns attribute for the svg.

```js
document.createElementNS("http://www.w3.org/2000/svg", name);
```

## Set xlink:href for image element
```image
image.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    <url>
);
```

## Framed Based Animtion in SVG
Solution here is to use `animate` tag to animate on `href`, This only works for separated frame images.
```html
<!-- Pseudo Code -->
<image x=0 y=0 w=40 h=40 xlink:href=url>
    <animate
        attributeName="href"
        dur=".3s",
        values="url1;url2;url3;url4"
        begin="indefinite"
    ></animate>
</image>
```

## Let the animate to hold
When you create animate using js, the animation might running under the hood. If you didn't set the `repeatCount` to `indefinite`, you are not likely to get a expected result.

So, you can set the `begin` attribute to `indefinite`, this tells the browser to hold the animation until you start it.
```js
const animate = document.createElementNS(...);
animate.beginElement(); // Start the animation
```

## Element move along a path
Just use animateMotion.

```
<animateMotion path="...">
```

If the element you are moving is not a circle. You my find that the element is not centered on the path. Which might be annoying.

I never solved it. But I know the way to solve it is to subtract `half of the element's width and height` from the path coordinates. It may be different if you are using Bezier Curves.

## Rotate SVG element

> In the CSS we have an animation that uses a transform to rotate the rectangle infinitely. transform-box: fill-box is used to make the transform-origin the center of the bounding box, so the rectangle spins in place. Without it, the transform origin is the center of the SVG canvas, and so you get a very different effect.

So, to rotate a SVG elemnt. Doing this:
```css
[tag] {
    transform-box: fill-box;
    transform-origin: center;
    /* and then you can rotate */
}
```
