# Md Ariful Islam Digital Resume

A digital resume website built based on the content from my personal REAL [resume](./assets/resume.pdf) 


## Dark Mode Preview

<img src="assets\images\dark mode preview.PNG">

## Light Mode Preview

<img src="assets\images\light mode preview.PNG">

## Switching between color themes

This website has no auto toggle theme switcher, therefor to change themes you must manual go into `/styles/main.css` and the css variables to use either theme. Default is dark, so do the following here:

```css
--mainTextColor:var(--mainTextColor-light); 
--secondaryTextColor:(--secondaryTextColor-light);
--mainLinkColor:var(--mainLinkColor-light);
--mainBorderColor:var(--mainBorderColor-light);
--mainBgColor:var(--mainBgColor-light);
```

```css
--mainTextColor:var(--mainTextColor-dark);
    --secondaryTextColor:var(--secondaryTextColor-dark);
    --mainLinkColor:var(--mainLinkColor-dark);
    --mainBorderColor:var(--mainBorderColor-dark);
    --mainBgColor:var(--mainBgColor-dark);
    ```