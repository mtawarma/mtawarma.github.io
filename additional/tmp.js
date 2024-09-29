/*
document.querySelector('html').setAttribute('data-theme', theme);
<script>
  // figure out user's preferred theme and set it as html class for tailwind before paint
  (function () {
    if (typeof window !== "undefined") {
      const isSystemColorSchemeDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const storageTheme = sessionStorage.getItem("theme");
      if (!storageTheme && isSystemColorSchemeDark) {
        document.querySelector('html').setAttribute('data-theme', "dark");
      } else if (storageTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.head.children.namedItem("theme-color").content = "#0f172a";
      } else {
        // we already server render light theme
        document.head.children.namedItem("theme-color").content = "#ffffff";
      }
    }
  })();
</script>

<script>
 const y = document.getElementsByClassName('pronounce');
 Array.from(y).forEach(el => {el.addEventListener("click", function() {
     new Audio(audiourl).play();
 })})
</script>
*/


