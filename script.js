const menu = [
    {
      id:1,
      category:"html",
      name:"html",
      desc:"HyperText Markup Language sau HTML este limbajul de marcare standard pentru documentele concepute pentru a fi afișate într-un browser web. Poate fi asistat de tehnologii precum Cascading Style Sheets (CSS) și limbaje de scripting precum JavaScript.?",
    },
    {
      id:2,
      category:"css",
      name:"css",
      desc:"Cascading Style Sheets (CSS) este un limbaj pentru foi de stil folosit pentru a descrie prezentarea unui document scris într-un limbaj de marcare precum HTML.[1] CSS este o tehnologie de bază a World Wide Web, alături de HTML și JavaScript.[2]",
    },
    {
      id:3,
      category:"html",
      name:"html",
      desc:"Elementele HTML sunt elementele de bază ale paginilor HTML. Cu constructele HTML, imaginile și alte obiecte, cum ar fi formularele interactive, pot fi încorporate în pagina redată. HTML oferă un mijloc de a crea documente structurate prin denotarea semanticii structurale pentru text, cum ar fi titluri, paragrafe, liste, legături, citate și alte elemente. Elementele HTML sunt delimitate de etichete, scrise folosind paranteze unghiulare.",
    },
    {
      id:4,
      category:"javascript",
      name:"javascript",
      desc:"JavaScript (JS) este un limbaj de programare orientat obiect bazat pe conceptul prototipurilor.[9] Este folosit mai ales pentru introducerea unor funcționalități în paginile web, codul JavaScript din aceste pagini fiind rulat de către browser.",
    },
    {
      id:5,
      category:"javascript",
      name:"javascript",
      desc:"JavaScript este un limbaj de nivel înalt, adesea compilat la timp, care se conformează standardului ECMAScript.[14] Are tastare dinamică, orientare pe obiecte bazată pe prototip și funcții de primă clasă.",
    },
    {
      id:6,
      category:"javascript",
      name:"javascript",
      desc:"JScript a fost lansat pentru prima dată în 1996, alături de suportul inițial pentru CSS și extensii la HTML",
    },
    {
      id:7,
      category:"javascript",
      name:"javascript",
      desc:"JavaScript este limbajul de scriptare dominant al Web-ului, 97% dintre site-uri web care îl folosesc în acest scop.",
    }

  ]

  const head = document.getElementById("head");
  const desc = document.getElementById("desc");
  const container = document.querySelector(".flex");
  const filterbtn = document.querySelectorAll(".filterbtn");
  const containerbtn = document.querySelector(".containerbtn");
  

  // set in javascript 
//   let namesSet = [...new Set(menu.map(item => {
//     return item.category;
//   }))];

//  const a =  namesSet.map((items)=>{
//   return `
//     <button data-id="${items}" class="filterbtn bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
//     <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
//     <span>${items}</span>
//   </button>
//     `;
//   })

//   containerbtn.innerHTML = a;



  // containerbtn.innerHTML =;
  // const keys = Object.keys(namesSet);
  

 window.addEventListener('DOMContentLoaded',function(){
   loaddata(menu);
})
  

  function loaddata(data){
  const displayitems = data.map((items)=>{
    let category = items.category;
    let name = items.name;
    let desc = items.desc;
    
    return ` 
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY- ${category}</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${name}</h1>
          <p class="leading-relaxed mb-3">${desc}</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>`;
  })
  container.innerHTML = displayitems;
}

// loaddata(menu);

 filterbtn.forEach((databtn)=>{
   databtn.addEventListener('click',(e)=>{
     let category = e.currentTarget.dataset.id;
    //  console.log(category)
    const filtermenu = menu.filter((filterdata)=>{
      //  console.log(filterdata.category);
        if(category === filterdata.category){
          return menu;
        }
     })

     if(category === "all"){
       loaddata(menu);
     }else{
       loaddata(filtermenu);
     }

   })
 })
