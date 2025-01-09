// 1. What is the difference between em and rem units in CSS ?
// ans= The em and rem units in CSS are both relative measurements, but they differ in what they are relative to. The em unit is relative to the font-size of its closest parent element. This means that if the parent element's font size changes, the size of em changes accordingly. Furthermore, em values can compound when nested, as each child element's size is calculated based on its parent's computed font size. For instance, if a parent element has a font size of 20px and a child element uses 2em, the child element's font size would be 40px. This compounding behavior can sometimes make em tricky to manage in deeply nested elements.

// On the other hand, the rem unit, which stands for "root em," is always relative to the font - size of the root element, typically the < html > element.This ensures that rem values remain consistent across the entire document, regardless of element nesting.For example, if the root element has a font size of 16px and an element uses 1.5rem, its size will always be 24px, irrespective of its parent.

// In practice, em is useful when you want scaling relative to a specific context, such as within a component.However, for consistent global scaling, rem is often preferred, especially for setting base font sizes or spacing.Using a combination of both units can provide flexibility in creating scalable and maintainable designs.


// 2. Explain the purpose of the meta viewport tag in responsive design.
// ans : The <meta name="viewport"> tag is an essential element in responsive web design, used to control the layout and scaling of a webpage on different devices, especially mobile devices. Its purpose is to ensure that a webpage looks good and functions well on screens of various sizes.

// By default, mobile browsers render web pages as if they were viewed on a desktop screen, shrinking the content to fit within the device's screen width. This behavior can make text and elements too small to read or interact with, requiring users to zoom in and out. The viewport meta tag allows developers to customize this behavior.

// <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>
// <meta name="viewport" content="width=device-width, user-scalable=no"></meta>

// 3. How would you implement a responsive navigation bar using CSS?
// 4. What are pseudo - elements in CSS ? Can you give examples ?
// Pseudo - elements in CSS are special selectors that allow you to style specific parts of an element or insert virtual elements without modifying the HTML structure.They are preceded by a double colon(:: ) to distinguish them from pseudo - classes, though the single - colon syntax(: ) is still supported for some pseudo - elements for backward compatibility.

// Key Features of Pseudo - Elements
// They enable fine - grained styling of elements.
// They allow the addition of content or styling to elements without altering the HTML.
// Commonly used pseudo - elements include:: before, :: after, :: first - line, and :: first - letter.

// 5. Explain the CSS Box Model and its components.
// The CSS Box Model is the fundamental concept for understanding how elements are rendered and spaced in a web page.Every HTML element is considered a rectangular box composed of the following components:

// Content: The actual content of the element, such as text, images, or other media.It is where the content is displayed.
// Padding: The space between the content and the element's border. Padding increases the clickable or visible area without adding any border.
// Border: The line surrounding the padding(or content if padding is zero). Borders can have different styles, thicknesses, and colors.
// Margin: The space outside the border, separating the element from other elements.Margins are used to create gaps between elements.

// // 6. What is the difference between inline, inline - block, and block elements in HTML ?
// Inline Elements:
// Do not start on a new line; they flow inline with the text.
// Occupy only as much width as their content.
// Examples: <span>, <a>, <strong>, <em>
{/* Cannot have block-level properties like width and height. */ }


{/* Inline-Block Elements: */ }
{/* Behave like inline elements but allow block-level styling (e.g., setting width and height). */ }
{/* Content flows inline, but dimensions can be controlled. */ }
{/* Examples: <img>, or applying display: inline-block to an element. */ }

{/* Block Elements: */ }
{/* Always start on a new line, taking up the full width of their container by default. */ }
{/* You can specify width, height, margin, and padding. */ }
{/* Examples: <div>, <p>, <h1> to <h6>, <section> */ }

// 7. What are media queries, and how would you use them in a project ?
// Media queries are a CSS feature used to apply styles based on the characteristics of the device or viewport, such as its width, height, orientation, or resolution.They enable responsive designs that adapt to different screen sizes.

// @media(max-width: 768px) {
//   body {
//         background - color: lightblue;
//     }
// }

// /* Styles for devices with a width of 769px or more */
// @media(min-width: 769px) {
//   body {
//         background - color: white;
//     }
// }
// 8. What is the difference between relative, absolute, fixed, and sticky positioning in CSS ?
// Positioning in CSS
// Relative: Moves the element slightly from its normal place. Example: Move it 10px down or right.
// Absolute: Places the element exactly where you want, based on the nearest positioned parent.
// Fixed: Sticks the element to the screen, even when you scroll. Good for headers or buttons.
// Sticky: Acts normal until you scroll to a point, then it sticks (like a sticky note). Great for menus.