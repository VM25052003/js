//1) 
let str = "sale";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function (element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});

//2 Doubt; recheck
/*let str = "sale";
let links = document.link;
console.log('length',links);
for(let i = 0; i < links.length; i++){
    let v = document.link[i].href
    if (v.includes(str)){
      console.log('string is present')
      console.log(v)
    }
}*/